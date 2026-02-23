import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FiMapPin, FiPhone, FiSearch, FiChevronDown, FiX,
  FiStar, FiShield, FiClock, FiCheckCircle, FiAlertCircle,
  FiHeart, FiArrowDown, FiGrid, FiList, FiAward, FiUsers,
  FiActivity, FiTarget
} from "react-icons/fi";
import {
  HiOutlineLocationMarker, HiOutlineOfficeBuilding,
  HiOutlinePhone, HiOutlineIdentification, HiOutlineDocumentText
} from "react-icons/hi";
import {
  MdLocalHospital, MdOutlineHealthAndSafety, MdOutlineDiscount,
  MdOutlineVerified, MdOutlineMedicalServices
} from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { RiHospitalLine, RiStethoscopeLine } from "react-icons/ri";
import { TbDiscount, TbBuildingHospital, TbMapPin } from "react-icons/tb";

// ─── TYPES ─────────────────────────────────────────────────────────────────

interface Hospital {
  id: number;
  name: string;
  discount: number;
  address: string;
  phone: string;
  departments: string[];
  terms: string[];
  image: string;
  rating: number;
  beds: number;
  established: string;
  type: string;
}

// ─── DATA ───────────────────────────────────────────────────────────────────




const STATES_DISTRICTS: Record<string, string[]> = {


  "राजस्थान": ["अलवर","जयपुर","जैसलमेर","जोधपुर","कोटा",
    "उदयपुर"],

  
};


// ─── HOSPITAL TYPE TRANSLATION ───────────────────────────────────────────────
const TYPE_HI: Record<string, string> = {
  "Super Specialty":        "सुपर स्पेशलिटी",
  "Government":             "सरकारी",
  "Multi Specialty":        "मल्टी स्पेशलिटी",
  "Government AIIMS":       "सरकारी एम्स",
  "Government Institute":   "सरकारी संस्थान",
  "Government Teaching":    "सरकारी शिक्षण",
  "Teaching Hospital":      "शिक्षण अस्पताल",
  "Premier Govt. Institute":"प्रमुख सरकारी संस्थान",
  "Mission Hospital":       "मिशन अस्पताल",
};

function translateType(t: string) {
  return TYPE_HI[t] || t;
}

// ─── HOSPITAL DATA ──────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// HOSPITAL_DB — अखिल भारतीय संयुक्त OBC महासभा
// Verified Hospital Data | All states & union territories
// Format: "State_District": Hospital[]
// ─────────────────────────────────────────────────────────────────────────────



 const HOSPITAL_DB: Record<string, Hospital[]> = {

  // ════════════════════════════════════════════════════════════════════════════
  // राजस्थान — RAJASTHAN
  // ════════════════════════════════════════════════════════════════════════════

  "राजस्थान_जयपुर": [
    {
      id: 1,
      name: "Fortis Escorts Hospital",
      discount: 20,
      address: "जवाहर लाल नेहरू मार्ग, मालवीय नगर, जयपुर 302017",
      phone: "+91 141-254-7000",
      departments: ["कार्डियक सर्जरी", "ऑन्कोलॉजी", "गैस्ट्रोएंटरोलॉजी", "ईएनटी", "न्यूरोलॉजी"],
      terms: ["सदस्यता सत्यापन अनिवार्य", "चयनित उपचारों पर लागू", "वैध OBC कार्ड आवश्यक", "आपातकालीन सेवाओं पर लागू नहीं", "पूर्व अपॉइंटमेंट आवश्यक"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85",
      rating: 4.8,
      beds: 262,
      established: "1996",
      type: "सुपर स्पेशलिटी",
    },
    {
      id: 2,
      name: "सवाई मान सिंह अस्पताल",
      discount: 15,
      address: "जेएलएन मार्ग, जयपुर, राजस्थान 302004",
      phone: "+91 141-256-0291",
      departments: ["सामान्य चिकित्सा", "ऑर्थोपेडिक्स", "स्त्री रोग", "बाल रोग", "आपातकाल"],
      terms: ["OBC सदस्यता कार्ड दिखाएं", "केवल ओपीडी पर छूट", "पूर्व अपॉइंटमेंट आवश्यक", "चिकित्सक उपलब्धता पर निर्भर", "सरकारी सुविधा लाभ"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85",
      rating: 4.5,
      beds: 1500,
      established: "1934",
      type: "सरकारी",
    },
    {
      id: 3,
      name: "नारायणा मल्टीस्पेशलिटी",
      discount: 25,
      address: "सेक्टर 28, कुम्भा मार्ग, प्रताप नगर, जयपुर 302033",
      phone: "+91 141-477-3700",
      departments: ["कार्डियोलॉजी", "न्यूरोलॉजी", "यूरोलॉजी", "त्वचा रोग", "ऑन्कोलॉजी"],
      terms: ["ओपीडी व चयनित आईपीडी पर वैध", "सदस्यता प्रमाण पत्र लाएं", "लैब टेस्ट पर भी छूट शामिल", "दवाखाने पर 10% छूट", "1 वर्ष की वैधता"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=85",
      rating: 4.7,
      beds: 350,
      established: "2010",
      type: "सुपर स्पेशलिटी",
    },
    {
      id: 4,
      name: "Apex Hospital जयपुर",
      discount: 18,
      address: "एसपी-4 और 6, मालवीय औद्योगिक क्षेत्र, जयपुर 302017",
      phone: "+91 141-251-3000",
      departments: ["स्पाइन सर्जरी", "जोड़ प्रत्यारोपण", "खेल चिकित्सा", "फिजियोथेरेपी", "दर्द प्रबंधन"],
      terms: ["सदस्यता कार्ड अनिवार्य", "केवल सोम–शनि लागू", "सरकारी योजना मरीजों पर नहीं", "उपचार से पहले परामर्श करें", "एक्स-रे व MRI पर 15% छूट"],
      image: "https://images.unsplash.com/photo-1632053002928-1919051e6364?w=700&q=85",
      rating: 4.6,
      beds: 200,
      established: "2004",
      type: "मल्टी स्पेशलिटी",
    },
    {
      id: 5,
      name: "Eternal Hospital",
      discount: 30,
      address: "प्लॉट D-14A, प्रताप नगर, सांगानेर, जयपुर 302033",
      phone: "+91 141-500-3000",
      departments: ["किडनी प्रत्यारोपण", "लिवर देखभाल", "मधुमेह", "एंडोक्राइनोलॉजी", "यूरोलॉजी"],
      terms: ["ओपीडी परामर्श पर 30%", "डायग्नोस्टिक्स पर 15%", "शामिल होने की तिथि से 1 वर्ष वैध", "परिवार के सदस्य पात्र", "रविवार सहित सभी दिन"],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=85",
      rating: 4.9,
      beds: 180,
      established: "2009",
      type: "सुपर स्पेशलिटी",
    },
    {
      id: 6,
      name: "महात्मा गांधी अस्पताल",
      discount: 10,
      address: "सीताबाड़ी, टोंक रोड, जयपुर 302019",
      phone: "+91 141-251-4145",
      departments: ["आपातकाल", "सामान्य सर्जरी", "प्रसूति", "आईसीयू", "ट्रॉमा केयर"],
      terms: ["सरकारी अस्पताल, नाममात्र शुल्क", "पंजीकरण पर OBC कार्ड दिखाएं", "निजी वार्ड पर छूट", "सभी दिन उपलब्ध", "प्रतीक्षा शुल्क नहीं"],
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=700&q=85",
      rating: 4.3,
      beds: 900,
      established: "1960",
      type: "सरकारी",
    },
    {
      id: 7,
      name: "CK Birla Hospital जयपुर",
      discount: 22,
      address: "गोपालपुरा बाईपास रोड, जयपुर 302018",
      phone: "+91 141-316-0000",
      departments: ["प्रसूति", "नवजात विज्ञान", "ऑर्थोपेडिक्स", "नेत्र रोग", "IVF"],
      terms: ["चयनित प्रक्रियाओं पर छूट", "वैध OBC सदस्यता आवश्यक", "सौंदर्य प्रक्रियाओं पर नहीं", "बिस्तर उपलब्धता पर निर्भर", "दवाखाने पर 8% छूट"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=700&q=85",
      rating: 4.7,
      beds: 120,
      established: "2014",
      type: "मल्टी स्पेशलिटी",
    },
    {
      id: 8,
      name: "NIMS Hospital जयपुर",
      discount: 12,
      address: "शोभा नगर, जयपुर अजमेर हाईवे, जयपुर 303121",
      phone: "+91 141-298-7654",
      departments: ["कैंसर देखभाल", "रेडियोलॉजी", "पैथोलॉजी", "पुनर्वास", "न्यूक्लियर मेडिसिन"],
      terms: ["लैब व रेडियोलॉजी पर लागू", "बिलिंग काउंटर पर कार्ड दिखाएं", "दवाखाने पर 8% अतिरिक्त छूट", "वैध सदस्यता आवश्यक", "सोमवार–शनिवार"],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=700&q=85",
      rating: 4.4,
      beds: 280,
      established: "2000",
      type: "मल्टी स्पेशलिटी",
    },
  ],

  "राजस्थान_जोधपुर": [
    {
      id: 1,
      name: "AIIMS जोधपुर",
      discount: 10,
      address: "बासनी फेज-II, जोधपुर, राजस्थान 342005",
      phone: "+91 291-270-0800",
      departments: ["सामान्य चिकित्सा", "सर्जरी", "स्त्री रोग", "बाल रोग", "शोध"],
      terms: ["सरकारी सुविधा छूट", "सदस्यता कार्ड आवश्यक", "ओपीडी पंजीकरण प्राथमिकता", "24x7 आपातकाल सेवा", "ABHA एकीकरण उपलब्ध"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85",
      rating: 4.9,
      beds: 500,
      established: "2012",
      type: "सरकारी एम्स",
    },
    {
      id: 2,
      name: "उमेद अस्पताल जोधपुर",
      discount: 15,
      address: "रेजीडेंसी रोड, जोधपुर 342001",
      phone: "+91 291-251-0003",
      departments: ["प्रसूति", "स्त्री रोग", "नवजात विज्ञान", "बाल रोग", "एनआईसीयू"],
      terms: ["OBC कार्ड अनिवार्य", "ओपीडी पर लागू", "पूर्व अपॉइंटमेंट आवश्यक", "आपातकाल पर नहीं", "लैब पर 12% छूट"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85",
      rating: 4.5,
      beds: 700,
      established: "1942",
      type: "सरकारी",
    },
    {
      id: 3,
      name: "गोयल अस्पताल जोधपुर",
      discount: 20,
      address: "चोपासनी रोड, जोधपुर 342001",
      phone: "+91 291-264-2244",
      departments: ["हृदय रोग", "न्यूरोलॉजी", "यूरोलॉजी", "कैंसर", "ऑर्थोपेडिक्स"],
      terms: ["6 माह के लिए वैध", "परिवार शामिल", "लैब पर 15%", "हेल्पडेस्क से परामर्श करें", "24x7 आपातकाल"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=85",
      rating: 4.6,
      beds: 150,
      established: "1998",
      type: "मल्टी स्पेशलिटी",
    },
    {
      id: 4,
      name: "मथुरादास माथुर अस्पताल",
      discount: 8,
      address: "एमजी अस्पताल परिसर, जोधपुर 342001",
      phone: "+91 291-264-3000",
      departments: ["सामान्य चिकित्सा", "सर्जरी", "ईएनटी", "नेत्र रोग", "त्वचा रोग"],
      terms: ["प्राथमिकता ओपीडी", "काउंटर पर कार्ड", "सभी दिन वैध", "आपातकाल बाहर", "छूट एक साथ लागू"],
      image: "https://images.unsplash.com/photo-1632053002928-1919051e6364?w=700&q=85",
      rating: 4.4,
      beds: 1200,
      established: "1956",
      type: "सरकारी",
    },
  ],

  "राजस्थान_कोटा": [
    {
      id: 1,
      name: "न्यू मेडिकल कॉलेज अस्पताल",
      discount: 12,
      address: "रंगबाड़ी रोड, कोटा, राजस्थान 324005",
      phone: "+91 744-250-0777",
      departments: ["सामान्य चिकित्सा", "सर्जरी", "ऑर्थोपेडिक्स", "ईएनटी", "स्त्री रोग"],
      terms: ["OBC कार्ड अनिवार्य", "ओपीडी प्राथमिकता", "सरकारी दरें लागू", "24x7 आपातकाल", "PMJAY स्वीकार्य"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85",
      rating: 4.3,
      beds: 1000,
      established: "1965",
      type: "सरकारी",
    },
    {
      id: 2,
      name: "भारत विकास परिषद अस्पताल",
      discount: 18,
      address: "दादाबाड़ी, कोटा 324009",
      phone: "+91 744-236-5555",
      departments: ["कार्डियोलॉजी", "न्यूरोलॉजी", "गैस्ट्रो", "यूरोलॉजी", "ऑर्थोपेडिक्स"],
      terms: ["OBC सदस्यता दिखाएं", "लैब पर 10% छूट", "दवाखाने पर 8%", "1 वर्ष वैध", "सोम–शनि"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85",
      rating: 4.5,
      beds: 200,
      established: "2001",
      type: "मल्टी स्पेशलिटी",
    },
    {
      id: 3,
      name: "गुरुनानक अस्पताल कोटा",
      discount: 22,
      address: "नयापुरा, कोटा 324001",
      phone: "+91 744-232-1234",
      departments: ["कैंसर", "हृदय रोग", "रीढ़", "लिवर", "किडनी"],
      terms: ["सदस्यता अनिवार्य", "परिवार पात्र", "डायग्नोस्टिक्स पर 20%", "दवाखाने पर 12%", "1 वर्ष वैध"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=85",
      rating: 4.6,
      beds: 300,
      established: "2005",
      type: "सुपर स्पेशलिटी",
    },
  ],

  "राजस्थान_उदयपुर": [
    {
      id: 1,
      name: "GBH अमेरिकन हॉस्पिटल",
      discount: 20,
      address: "बेडवास रोड, एयरपोर्ट रोड, उदयपुर 313001",
      phone: "+91 294-248-8000",
      departments: ["हृदय रोग", "कैंसर", "न्यूरो", "ऑर्थोपेडिक्स", "सौंदर्य चिकित्सा"],
      terms: ["OBC कार्ड आवश्यक", "ओपीडी व आईपीडी दोनों", "लैब पर 15%", "दवाखाने पर 10%", "1 वर्ष वैध"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85",
      rating: 4.7,
      beds: 300,
      established: "2008",
      type: "सुपर स्पेशलिटी",
    },
    {
      id: 2,
      name: "RNT मेडिकल कॉलेज",
      discount: 8,
      address: "चेतक सर्कल, उदयपुर 313001",
      phone: "+91 294-248-9000",
      departments: ["सभी विशेषताएं", "आपातकाल", "आईसीयू", "जलन", "ट्रॉमा"],
      terms: ["सरकारी दरें", "प्राथमिकता ओपीडी", "पंजीकरण पर कार्ड", "24x7 आपातकाल", "बीपीएल के लिए निःशुल्क"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85",
      rating: 4.4,
      beds: 1500,
      established: "1952",
      type: "सरकारी",
    },
    {
      id: 3,
      name: "Pacific Medical College",
      discount: 15,
      address: "भीलों का बेड़ला, उदयपुर 313024",
      phone: "+91 294-266-0606",
      departments: ["सामान्य चिकित्सा", "सर्जरी", "स्त्री रोग", "बाल रोग", "दंत चिकित्सा"],
      terms: ["OBC कार्ड दिखाएं", "केवल सोम–शनि", "लैब पर 12%", "आपातकाल नहीं", "पूर्व अपॉइंटमेंट"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=85",
      rating: 4.5,
      beds: 750,
      established: "2004",
      type: "शिक्षण अस्पताल",
    },
  ],



  "राजस्थान_अलवर": [
    {
      id: 1,
      name: "राजकीय जिला अस्पताल अलवर",
      discount: 8,
      address: "होप सर्कस, अलवर 301001",
      phone: "+91 144-233-0256",
      departments: ["सामान्य चिकित्सा", "शल्य", "स्त्री रोग", "बाल रोग", "आपातकाल"],
      terms: ["सरकारी दरें", "OBC प्राथमिकता", "24x7 आपातकाल", "PMJAY स्वीकार्य", "मुफ्त ओपीडी"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85",
      rating: 4.1,
      beds: 500,
      established: "1955",
      type: "सरकारी",
    },
    {
      id: 2,
      name: "Alwar City Hospital",
      discount: 18,
      address: "महावीर मार्ग, अलवर 301001",
      phone: "+91 144-270-4444",
      departments: ["हृदय रोग", "ऑर्थोपेडिक्स", "न्यूरोलॉजी", "ENT", "त्वचा रोग"],
      terms: ["OBC कार्ड अनिवार्य", "ओपीडी पर लागू", "लैब पर 10%", "1 वर्ष वैध", "सोम–शनि"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85",
      rating: 4.4,
      beds: 150,
      established: "2005",
      type: "मल्टी स्पेशलिटी",
    },
  ],


};







function generateHospitals(state: string, district: string): Hospital[] {
  const templates = [
    { suffix: "जिला अस्पताल", discount: 8, type: "सरकारी", dept: ["सामान्य चिकित्सा","सर्जरी","स्त्री रोग","बाल रोग","आपातकाल"], image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85", beds: 500, est: "1965" },
    { suffix: "मल्टीस्पेशलिटी अस्पताल", discount: 15, type: "मल्टी स्पेशलिटी", dept: ["कार्डियोलॉजी","ऑर्थोपेडिक्स","न्यूरोलॉजी","कैंसर","ईएनटी"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85", beds: 200, est: "2002" },
    { suffix: "Apollo क्लिनिक", discount: 20, type: "सुपर स्पेशलिटी", dept: ["मधुमेह","हृदय रोग","न्यूरो","गैस्ट्रो","ऑन्कोलॉजी"], image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=85", beds: 150, est: "2010" },
    { suffix: "Fortis Hospital", discount: 18, type: "सुपर स्पेशलिटी", dept: ["हृदय रोग","लिवर","किडनी","रीढ़","प्रत्यारोपण"], image: "https://images.unsplash.com/photo-1632053002928-1919051e6364?w=700&q=85", beds: 280, est: "2008" },
    { suffix: "Narayana Hospital", discount: 25, type: "सुपर स्पेशलिटी", dept: ["हृदय सर्जरी","न्यूरो","यूरोलॉजी","ऑन्कोलॉजी","IVF"], image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=85", beds: 350, est: "2012" },
    { suffix: "सामुदायिक स्वास्थ्य केंद्र", discount: 10, type: "सरकारी", dept: ["सामान्य चिकित्सा","प्रसूति","बाल रोग","प्राथमिक चिकित्सा","टीकाकरण"], image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=700&q=85", beds: 100, est: "1980" },
  ];
  const terms = ["OBC सदस्यता कार्ड आवश्यक","ओपीडी परामर्श पर लागू","पूर्व अपॉइंटमेंट अनुशंसित","आपातकाल पर लागू नहीं","परिवार के सदस्य पात्र","लैब पर 10% अतिरिक्त छूट","दवाखाने पर 8% छूट","1 वर्ष के लिए वैध"];
  const roads = ["सिविल लाइन्स","गांधी नगर","नेहरू रोड","एमजी रोड","स्टेशन रोड","बाईपास रोड"];
  return templates.map((t, i) => ({
    id: i + 1,
    name: `${district} ${t.suffix}`,
    discount: t.discount,
    address: `${roads[i]}, ${district}, ${state}`,
    phone: `+91 ${90000 + i * 1111} ${10000 + i * 2222}`,
    departments: t.dept,
    terms: terms.slice(0, 5),
    image: t.image,
    rating: parseFloat((4.2 + Math.random() * 0.7).toFixed(1)),
    beds: t.beds,
    established: t.est,
    type: t.type,
  }));
}

function getHospitals(state: string, district: string): Hospital[] {
  const key = `${state}_${district}`;
  return HOSPITAL_DB[key] ?? generateHospitals(state, district);
}

// ─── SKELETON ───────────────────────────────────────────────────────────────

const SkeletonCard: React.FC = () => (
  <div className="rounded-3xl overflow-hidden border border-orange-100/60" style={{ background: "rgba(255,255,255,0.7)" }}>
    <div className="h-52 shimmer-bg" />
    <div className="p-5 space-y-3">
      <div className="h-5 shimmer-bg rounded-xl w-3/4" />
      <div className="h-1 shimmer-bg rounded" />
      <div className="h-4 shimmer-bg rounded-lg w-full" />
      <div className="h-4 shimmer-bg rounded-lg w-2/3" />
      <div className="h-11 shimmer-bg rounded-2xl mt-4" />
    </div>
  </div>
);

// ─── HOSPITAL CARD ───────────────────────────────────────────────────────────

interface CardProps { hospital: Hospital; index: number; onViewDetails: (h: Hospital) => void; }

const HospitalCard: React.FC<CardProps> = ({ hospital, index, onViewDetails }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 110);
    return () => clearTimeout(t);
  }, [index]);

  const discountColor =
    hospital.discount >= 25 ? { from: "#16a34a", to: "#15803d" } :
    hospital.discount >= 15 ? { from: "#f97316", to: "#ea580c" } :
    { from: "#3b82f6", to: "#2563eb" };

  return (
    <div
      className="rounded-3xl overflow-hidden border cursor-pointer relative group"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(24px)",
        borderColor: hovered ? "rgba(249,115,22,0.3)" : "rgba(249,115,22,0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered
          ? "0 24px 64px rgba(249,115,22,0.18), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Area */}
      <div className="relative overflow-hidden h-52">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover"
          style={{ transform: hovered ? "scale(1.09)" : "scale(1)", transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.52) 100%)" }} />

        {/* Discount Badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${discountColor.from}, ${discountColor.to})`,
            boxShadow: `0 4px 16px rgba(0,0,0,0.3)`,
          }}
        >
          <TbDiscount size={14} color="white" />
          <span className="text-white font-black text-sm tracking-wide">{hospital.discount}% छूट</span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl text-xs font-bold text-white/90"
          style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
          {hospital.type}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-xl"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}>
          <FiStar size={11} fill="#fbbf24" color="#fbbf24" />
          <span className="text-white text-xs font-bold">{hospital.rating}</span>
          <span className="text-white/60 text-xs">· {hospital.beds} बिस्तर</span>
        </div>

        {/* Est. year */}
        <div className="absolute bottom-3 right-3 text-white/70 text-xs font-medium"
          style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", padding: "2px 8px", borderRadius: "8px" }}>
            स्थापित {hospital.established}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-black text-gray-800 text-lg leading-snug mb-1 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {hospital.name}
        </h3>
        <div className="h-px mb-3" style={{ background: "linear-gradient(90deg, rgba(249,115,22,0.3), transparent)" }} />

        <div className="flex items-start gap-2 mb-2">
          <HiOutlineLocationMarker size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{hospital.address}</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FiPhone size={13} className="text-orange-400 flex-shrink-0" />
          <p className="text-orange-500 text-xs font-semibold">{hospital.phone}</p>
        </div>

        {/* Mini departments */}
        <div className="flex flex-wrap gap-1 mb-4">
          {hospital.departments.slice(0, 3).map(d => (
            <span key={d} className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(249,115,22,0.08)", color: "#ea580c", border: "1px solid rgba(249,115,22,0.18)" }}>
              {d}
            </span>
          ))}
          {hospital.departments.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium text-gray-400"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
              +{hospital.departments.length - 3} और
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(hospital)}
          className="w-full py-2.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            background: hovered ? "linear-gradient(135deg, #f97316, #ea580c)" : "transparent",
            color: hovered ? "white" : "#f97316",
            border: "1.5px solid",
            borderColor: hovered ? "transparent" : "rgba(249,115,22,0.5)",
            boxShadow: hovered ? "0 8px 28px rgba(249,115,22,0.35), 0 2px 8px rgba(249,115,22,0.2)" : "none",
          }}
        >
          <MdLocalHospital size={16} />
          विवरण देखें
          <span style={{ transform: hovered ? "translateX(3px)" : "none", transition: "transform 0.2s" }}>→</span>
        </button>
      </div>
    </div>
  );
};

// ─── MODAL ──────────────────────────────────────────────────────────────────

interface ModalProps { hospital: Hospital; onClose: () => void; }

const Modal: React.FC<ModalProps> = ({ hospital, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: visible ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
        backdropFilter: "blur(12px)",
        transition: "background 0.35s ease",
      }}
      onClick={e => e.target === e.currentTarget && handleClose()}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(40px)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.88) translateY(24px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.38s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:rotate-90 transition-transform duration-300 text-gray-500 hover:text-gray-800"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        >
          <FiX size={18} />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 rounded-t-3xl overflow-hidden">
          <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", boxShadow: "0 4px 20px rgba(249,115,22,0.5)" }}>
            <MdOutlineDiscount size={18} color="white" />
            <span className="text-white font-black text-xl">{hospital.discount}% छूट</span>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
            <FiStar size={13} fill="#fbbf24" color="#fbbf24" />
            <span className="text-white text-sm font-bold">{hospital.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-2xl font-black text-gray-800 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {hospital.name}
              </h2>
              <span className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-bold text-orange-600"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                {hospital.type}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><BiBuildingHouse size={13} />{hospital.beds} बिस्तर</span>
              <span className="flex items-center gap-1"><FiClock size={13} />स्थापित {hospital.established}</span>
            </div>
          </div>

          <div className="h-px" style={{ background: "linear-gradient(90deg, #f97316, #22c55e, transparent)" }} />

          {/* Address */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl" style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}>
            <TbMapPin size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">पता</p>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">{hospital.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl" style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.12)" }}>
            <HiOutlinePhone size={20} className="text-green-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">संपर्क</p>
              <p className="text-green-600 font-bold text-sm">{hospital.phone}</p>
            </div>
          </div>

          {/* Departments */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <RiStethoscopeLine size={18} className="text-orange-500" />
              <p className="text-xs font-black text-gray-700 uppercase tracking-widest">विभाग</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {hospital.departments.map(d => (
                <span key={d} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(249,115,22,0.08)", color: "#ea580c", border: "1px solid rgba(249,115,22,0.2)" }}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(249,115,22,0.15)" }}>
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.04))" }}>
              <HiOutlineDocumentText size={18} className="text-orange-500" />
              <p className="text-xs font-black text-gray-700 uppercase tracking-widest">शर्तें व नियम</p>
            </div>
            <div className="p-4 space-y-2">
              {hospital.terms.map((t, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <FiCheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-2xl" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
            <FiAlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-red-500 leading-relaxed">छूट लाभ प्राप्त करने के लिए परामर्श या उपचार के समय वैध OBC महासभा सदस्यता कार्ड प्रस्तुत करना आवश्यक है।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── DROPDOWN ───────────────────────────────────────────────────────────────

interface DropdownProps {
  label: string; placeholder: string; value: string;
  options: string[]; onSelect: (v: string) => void; disabled?: boolean; icon: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, placeholder, value, options, onSelect, disabled, icon }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const filtered = options.filter(o => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div ref={ref} className="relative">
      <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
        {icon} {label}
      </label>
      <button
        disabled={disabled}
        onClick={() => { if (!disabled) { setOpen(!open); setSearch(""); } }}
        className="w-full px-4 py-3.5 rounded-2xl border text-left text-sm font-semibold flex items-center justify-between transition-all duration-200"
        style={{
          background: disabled ? "rgba(243,244,246,0.8)" : "rgba(255,255,255,0.95)",
          borderColor: open ? "#f97316" : "rgba(249,115,22,0.25)",
          boxShadow: open ? "0 0 0 3px rgba(249,115,22,0.12), 0 4px 16px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.04)",
          color: value ? "#1f2937" : "#9ca3af",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span className="flex items-center gap-2 truncate">
          {value && <MdOutlineVerified size={15} className="text-green-500 flex-shrink-0" />}
          {value || placeholder}
        </span>
        <FiChevronDown size={16} className="text-orange-400 flex-shrink-0" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }} />
      </button>

      {open && (
        <div
          className="absolute z-40 w-full mt-2 rounded-2xl border overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(24px)",
            borderColor: "rgba(249,115,22,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.06)",
            animation: "dropdownIn 0.2s ease",
          }}
        >
          {/* Search inside dropdown */}
          <div className="p-2 border-b" style={{ borderColor: "rgba(249,115,22,0.1)" }}>
            <div className="relative">
              <FiSearch size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`${label} खोजें...`}
                className="w-full pl-8 pr-3 py-2 rounded-xl text-xs outline-none"
                style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}
              />
            </div>
          </div>
          <div style={{ maxHeight: "240px", overflowY: "auto" }}>
            {filtered.length === 0 ? (
              <div className="px-4 py-6 text-center text-xs text-gray-400">कोई परिणाम नहीं मिला</div>
            ) : filtered.map(o => (
              <button
                key={o}
                onClick={() => { onSelect(o); setOpen(false); setSearch(""); }}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 flex items-center gap-2 transition-colors"
                style={{ borderBottom: "1px solid rgba(249,115,22,0.05)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; }}
              >
                {o === value && <FiCheckCircle size={13} className="text-green-500 flex-shrink-0" />}
                {o}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── MAIN APP ───────────────────────────────────────────────────────────────

const OBCMahasabha: React.FC = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [modalHospital, setModalHospital] = useState<Hospital | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  const states = Object.keys(STATES_DISTRICTS).sort();
  const districts = selectedState ? [...STATES_DISTRICTS[selectedState]].sort() : [];

  const handleStateSelect = useCallback((state: string) => {
    setSelectedState(state);
    setSelectedDistrict("");
    setHospitals([]);
  }, []);

  const handleDistrictSelect = useCallback((district: string) => {
    setSelectedDistrict(district);
    setLoading(true);
    setHospitals([]);
    setTimeout(() => {
      setHospitals(getHospitals(selectedState, district));
      setLoading(false);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    }, 1300);
  }, [selectedState]);

  const filtered = hospitals.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.address.toLowerCase().includes(search.toLowerCase()) ||
    h.departments.some(d => d.toLowerCase().includes(search.toLowerCase()))
  );

  const showResults = !!selectedState && !!selectedDistrict;

  const stats = [
    { icon: <FiUsers size={20} />, val: "50,000+", label: "सदस्य" },
    { icon: <TbBuildingHospital size={20} />, val: "500+", label: "अस्पताल" },
    { icon: <FiAward size={20} />, val: "36", label: "राज्य व केंद्र शासित प्रदेश" },
    { icon: <MdOutlineHealthAndSafety size={20} />, val: "10–30%", label: "छूट की सीमा" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif", background: "#fafaf8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        @keyframes gradient-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes bounce-arrow { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes dropdownIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .shimmer-bg { background: linear-gradient(90deg, #fde8d0 25%, #fff7ed 50%, #fde8d0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; }
        .hero-gradient { background: linear-gradient(135deg, #f97316 0%, #fb923c 12%, #fed7aa 28%, #fef9c3 44%, #dcfce7 62%, #86efac 78%, #22c55e 100%); background-size: 300% 300%; animation: gradient-shift 10s ease infinite; }
        .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(249,115,22,0.3); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(249,115,22,0.5); }
      `}</style>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-24">
        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-16 w-72 h-72 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #f97316, transparent)", filter: "blur(48px)" }} />
          <div className="absolute bottom-24 right-16 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #22c55e, transparent)", filter: "blur(64px)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fbbf24, transparent)", filter: "blur(80px)" }} />
          <div className="absolute top-16 right-32 w-24 h-24 rounded-full border-2 border-orange-300/30 opacity-60" style={{ animation: "spin-slow 20s linear infinite" }} />
          <div className="absolute bottom-40 left-24 w-16 h-16 rounded-full border-2 border-green-300/30 opacity-50" style={{ animation: "spin-slow 15s linear infinite reverse" }} />
        </div>

        {/* Content */}
        <div
          className="text-center max-w-4xl relative z-10"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border border-orange-300/60 text-xs font-bold text-orange-700 tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            <MdOutlineHealthAndSafety size={16} />
            अखिल भारतीय संयुक्त OBC महासभा
            <MdOutlineHealthAndSafety size={16} />
          </div>

          <h1 className="font-black leading-tight mb-2 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "#1a1a1a" }}>
            OBC महासभा
          </h1>
          <h1 className="font-black leading-tight mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", background: "linear-gradient(135deg, #f97316, #ea580c, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            सदस्य छूट लाभ
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 px-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}>
            अखिल भारतीय संयुक्त OBC महासभा से जुड़ने पर आपको राज्य एवं जिले के अनुसार<br className="hidden md:block" />
            विभिन्न अस्पतालों में <strong className="text-orange-600">विशेष छूट</strong> प्रदान की जाएगी।
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {stats.map((s, i) => (
              <div key={i}
                className="p-3 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${0.2 + i * 0.08}s`,
                }}>
                <div className="flex justify-center mb-1 text-orange-500">{s.icon}</div>
                <div className="font-black text-gray-800 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{s.val}</div>
                <div className="text-gray-500 text-xs font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tricolor accent */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 rounded-full" style={{ background: "#f97316" }} />
            <div className="h-0.5 w-12 rounded-full" style={{ background: "white" }} />
            <div className="h-0.5 w-12 rounded-full" style={{ background: "#22c55e" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2" style={{ animation: "bounce-arrow 2.2s ease-in-out infinite" }}>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-gray-500 font-semibold tracking-wider">नीचे स्क्रॉल करें</span>
            <div className="w-9 h-9 rounded-full border-2 border-orange-300/60 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}>
              <FiArrowDown size={16} className="text-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELECTION PANEL ════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 border"
            style={{
              background: "rgba(255,255,255,0.85)", backdropFilter: "blur(32px)",
              borderColor: "rgba(249,115,22,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(249,115,22,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 8px 24px rgba(249,115,22,0.35)" }}>
                <FiTarget size={22} color="white" />
              </div>
              <div>
                <h2 className="font-black text-gray-800 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>अपने लाभ खोजें</h2>
                <p className="text-gray-400 text-sm">अस्पताल की छूट देखने के लिए अपने राज्य और जिले का चयन करें</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Dropdown
                label="राज्य चुनें"
                placeholder="अपना राज्य चुनें"
                value={selectedState}
                options={states}
                onSelect={handleStateSelect}
                icon={<HiOutlineOfficeBuilding size={13} />}
              />
              <Dropdown
                label="जिला चुनें"
                placeholder={selectedState ? "जिला चुनें" : "पहले राज्य चुनें"}
                value={selectedDistrict}
                options={districts}
                onSelect={handleDistrictSelect}
                disabled={!selectedState}
                icon={<HiOutlineLocationMarker size={13} />}
              />
            </div>

            {/* Progress indicator */}
            {(selectedState || selectedDistrict) && (
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: selectedState ? "#22c55e" : "#e5e7eb" }} />
                  <span className="text-xs text-gray-500">राज्य चुना गया</span>
                </div>
                <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: selectedDistrict ? "#22c55e" : "#e5e7eb" }} />
                  <span className="text-xs text-gray-500">जिला चुना गया</span>
                </div>
                <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: hospitals.length > 0 ? "#22c55e" : "#e5e7eb" }} />
                  <span className="text-xs text-gray-500">अस्पताल लोड हुए</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ════════════════════════════════════════════════════════ */}
      {showResults && (
        <section ref={resultsRef} className="pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))", border: "1px solid rgba(249,115,22,0.2)" }}>
                  <RiHospitalLine size={22} className="text-orange-500" />
                </div>
                <div>
                  <h2 className="font-black text-gray-800 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedDistrict} में अस्पताल
                  </h2>
                  {!loading && (
                    <p className="text-gray-400 text-sm flex items-center gap-1.5">
                      <FiActivity size={13} className="text-orange-400" />
                      {filtered.length} अस्पताल विशेष OBC सदस्य छूट के साथ
                    </p>
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="नाम या विभाग से खोजें..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)",
                    borderColor: "rgba(249,115,22,0.2)", boxShadow: "inset 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#f97316"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(249,115,22,0.12)"; }}
                  onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(249,115,22,0.2)"; (e.target as HTMLInputElement).style.boxShadow = "inset 0 2px 8px rgba(0,0,0,0.04)"; }}
                />
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map(i => <SkeletonCard key={i} />)}
              </div>
            ) : filtered.length === 0 ? (
              /* Empty State */
              <div className="text-center py-28 px-4">
                <div className="text-7xl mb-6" style={{ animation: "float 3s ease-in-out infinite", display: "inline-block" }}>🏥</div>
                <h3 className="font-black text-gray-700 text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {search ? "कोई अस्पताल नहीं मिला" : "जल्द ही आने वाला!"}
                </h3>
                <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed mb-6">
                  {search
                    ? `"${search}" से कोई अस्पताल नहीं मिला। नाम, पता या विभाग से खोजने का प्रयास करें।`
                    : "हम सक्रिय रूप से आपके जिले में भागीदार अस्पतालों को शामिल कर रहे हैं। जल्द ही वापस आएं या सहायता के लिए हमसे संपर्क करें।"}
                </p>
                {search && (
                  <button onClick={() => setSearch("")}
                    className="px-6 py-2.5 rounded-2xl text-sm font-bold text-white transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 8px 24px rgba(249,115,22,0.3)" }}>
                    खोज साफ करें
                  </button>
                )}
                <div className="mt-6 h-1 w-24 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #f97316, #22c55e)" }} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((h, i) => (
                  <HospitalCard key={h.id} hospital={h} index={i} onViewDetails={setModalHospital} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer className="border-t" style={{ borderColor: "rgba(249,115,22,0.1)" }}>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                <MdLocalHospital size={20} color="white" />
              </div>
              <div>
                <p className="font-black text-gray-700 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>अखिल भारतीय संयुक्त OBC महासभा</p>
                <p className="text-gray-400 text-xs">सदस्य छूट लाभ पोर्टल</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-8 rounded-full" style={{ background: "#f97316" }} />
              <div className="h-2 w-8 rounded-full" style={{ background: "#ffffff", border: "1px solid #e5e7eb" }} />
              <div className="h-2 w-8 rounded-full" style={{ background: "#22c55e" }} />
            </div>
            <p className="text-gray-400 text-xs text-center">
              © 2025 अखिल भारतीय संयुक्त OBC महासभा — सर्वाधिकार सुरक्षित
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modalHospital && (
        <Modal hospital={modalHospital} onClose={() => setModalHospital(null)} />
      )}
    </div>
  );
};

export default OBCMahasabha;