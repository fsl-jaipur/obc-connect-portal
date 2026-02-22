// import { useState, ChangeEvent, FormEvent } from "react";

// interface MemberFormData {
//   memberName: string;
//   fatherName: string;
//   businessNature: string;
//   organizationPosition: string;
//   residenceAddress: string;
//   officeAddress: string;
//   residencePhone: string;
//   officePhone: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   pan: string;
//   aadhaar: string;
//   education: string;
//   dob: string;
//   marriageDate: string;
//   bloodGroup: string;
//   tshirtSize: string;
//   socialWork: string;
//   specialAchievement: string;
//   membershipType: string;
//   state: string;
//   district: string;
// }

// const stateDistrictData: Record<string, string[]> = {
//   "राजस्थान": ["अजमेर","अलवर","बांसवाड़ा","बारां","बाड़मेर","भरतपुर","भीलवाड़ा","बीकानेर","बूंदी","चित्तौड़गढ़","चूरू","दौसा","धौलपुर","डूंगरपुर","हनुमानगढ़","जयपुर","जैसलमेर","जालोर","झालावाड़","झुंझुनू","जोधपुर","करौली","कोटा","नागौर","पाली","प्रतापगढ़","राजसमंद","सवाई माधोपुर","सीकर","सिरोही","श्री गंगानगर","टोंक","उदयपुर"],
//   "उत्तर प्रदेश": ["आगरा","अलीगढ़","अम्बेडकर नगर","अमेठी","अमरोहा","औरैया","अयोध्या","आजमगढ़","बागपत","बहराइच","बलिया","बलरामपुर","बांदा","बाराबंकी","बरेली","बस्ती","बिजनौर","बदायूं","बुलंदशहर","चंदौली","चित्रकूट","देवरिया","एटा","इटावा","फर्रुखाबाद","फतेहपुर","फिरोजाबाद","गौतम बुद्ध नगर","गाज़ियाबाद","गाजीपुर","गोंडा","गोरखपुर","हमीरपुर","हापुड़","हरदोई","हाथरस","जालौन","जौनपुर","झांसी","कानपुर देहात","कानपुर नगर","कासगंज","कौशाम्बी","कुशीनगर","लखीमपुर खीरी","ललितपुर","लखनऊ","महाराजगंज","महोबा","मैनपुरी","मथुरा","मऊ","मेरठ","मिर्जापुर","मुरादाबाद","मुजफ्फरनगर","पीलीभीत","प्रतापगढ़","प्रयागराज","रायबरेली","रामपुर","सहारनपुर","संभल","संत कबीर नगर","शाहजहांपुर","शामली","श्रावस्ती","सिद्धार्थनगर","सीतापुर","सोनभद्र","सुल्तानपुर","उन्नाव","वाराणसी"],
//   "मध्य प्रदेश": ["आगर मालवा","अलीराजपुर","अनूपपुर","अशोकनगर","बालाघाट","बड़वानी","बैतूल","भिंड","भोपाल","बुरहानपुर","छतरपुर","छिंदवाड़ा","दमोह","दतिया","देवास","धार","डिंडोरी","गुना","ग्वालियर","हरदा","होशंगाबाद","इंदौर","जबलपुर","झाबुआ","कटनी","खंडवा","खरगोन","मंडला","मंदसौर","मुरैना","नरसिंहपुर","नीमच","निवाड़ी","पन्ना","रायसेन","राजगढ़","रतलाम","रीवा","सागर","सतना","सीहोर","सिओनी","शहडोल","शाजापुर","श्योपुर","शिवपुरी","सीधी","सिंगरौली","टीकमगढ़","उज्जैन","उमरिया","विदिशा"],
//   "महाराष्ट्र": ["अहमदनगर","अकोला","अमरावती","औरंगाबाद","बीड","भंडारा","बुलढाणा","चंद्रपुर","धुले","गडचिरोली","गोंदिया","हिंगोली","जलगांव","जालना","कोल्हापुर","लातूर","मुंबई शहर","मुंबई उपनगर","नागपुर","नांदेड़","नंदुरबार","नासिक","उस्मानाबाद","पालघर","परभणी","पुणे","रायगड","रत्नागिरी","सांगली","सातारा","सिंधुदुर्ग","सोलापुर","ठाणे","वर्धा","वाशिम","यवतमाल"],
//   "गुजरात": ["अहमदाबाद","अमरेली","आणंद","अरावली","बनासकांठा","भरूच","भावनगर","बोटाद","छोटाउदेपुर","दाहोद","डांग","देवभूमि द्वारका","गांधीनगर","गिर सोमनाथ","जामनगर","जूनागढ़","खेड़ा","कच्छ","महिसागर","महेसाणा","मोरबी","नर्मदा","नवसारी","पंचमहल","पाटण","पोरबंदर","राजकोट","साबरकांठा","सूरत","सुरेंद्रनगर","तापी","वडोदरा","वलसाड"],
//   "बिहार": ["अरवल","औरंगाबाद","बांका","बेगूसराय","भागलपुर","भोजपुर","बक्सर","दरभंगा","पूर्वी चंपारण","गया","गोपालगंज","जमुई","जहानाबाद","कैमूर","कटिहार","खगड़िया","किशनगंज","लखीसराय","मधेपुरा","मधुबनी","मुंगेर","मुजफ्फरपुर","नालंदा","नवादा","पटना","पूर्णिया","रोहतास","सहरसा","समस्तीपुर","सारण","शेखपुरा","शिवहर","सीतामढ़ी","सीवान","सुपौल","वैशाली","पश्चिमी चंपारण"],
//   "पंजाब": ["अमृतसर","बरनाला","बठिंडा","फरीदकोट","फतेहगढ़ साहिब","फाजिल्का","फिरोजपुर","गुरदासपुर","होशियारपुर","जालंधर","कपूरथला","लुधियाना","मानसा","मोगा","मोहाली","मुक्तसर","नवांशहर","पठानकोट","पटियाला","रूपनगर","संगरूर","तरन तारन"],
//   "हरियाणा": ["अंबाला","भिवानी","चरखी दादरी","फरीदाबाद","फतेहाबाद","गुरुग्राम","हिसार","झज्जर","झींद","कैथल","करनाल","कुरुक्षेत्र","महेंद्रगढ़","नूंह","पलवल","पंचकुला","पानीपत","रेवाड़ी","रोहतक","सिरसा","सोनीपत","यमुनानगर"],
//   "दिल्ली": ["मध्य दिल्ली","पूर्वी दिल्ली","नई दिल्ली","उत्तर दिल्ली","उत्तर पूर्वी दिल्ली","उत्तर पश्चिमी दिल्ली","शाहदरा","दक्षिण दिल्ली","दक्षिण पूर्वी दिल्ली","दक्षिण पश्चिमी दिल्ली","पश्चिमी दिल्ली"],
//   "छत्तीसगढ़": ["बालोद","बलौदाबाजार","बलरामपुर","बस्तर","बेमेतरा","बीजापुर","बिलासपुर","दंतेवाड़ा","धमतरी","दुर्ग","गरियाबंद","जांजगीर-चांपा","जशपुर","कबीरधाम","कांकेर","कोंडागांव","कोरबा","कोरिया","महासमुंद","मुंगेली","नारायणपुर","रायगढ़","रायपुर","राजनांदगांव","सुकमा","सूरजपुर","सरगुजा"],
//   "झारखंड": ["बोकारो","चतरा","देवघर","धनबाद","दुमका","पूर्वी सिंहभूम","गढ़वा","गिरिडीह","गोड्डा","गुमला","हजारीबाग","जामताड़ा","खूंटी","कोडरमा","लातेहार","लोहरदगा","पाकुड़","पलामू","रामगढ़","रांची","साहिबगंज","सरायकेला खरसावां","सिमडेगा","पश्चिमी सिंहभूम"],
//   "उत्तराखंड": ["अल्मोड़ा","बागेश्वर","चमोली","चंपावत","देहरादून","हरिद्वार","नैनीताल","पौड़ी गढ़वाल","पिथौरागढ़","रुद्रप्रयाग","टिहरी गढ़वाल","उधम सिंह नगर","उत्तरकाशी"],
//   "हिमाचल प्रदेश": ["बिलासपुर","चंबा","हमीरपुर","कांगड़ा","किन्नौर","कुल्लू","लाहुल और स्पीति","मंडी","शिमला","सिरमौर","सोलन","ऊना"],
//   "जम्मू और कश्मीर": ["अनंतनाग","बांदीपोरा","बारामूला","बडगाम","डोडा","गांदरबल","जम्मू","कठुआ","किश्तवाड़","कुलगाम","कुपवाड़ा","पुलवामा","पुंछ","रामबन","रियासी","राजौरी","सांबा","शोपियां","श्रीनगर","उधमपुर"],
//   "केरल": ["अलाप्पुझा","एर्नाकुलम","इडुक्की","कन्नूर","कासरगोड","कोल्लम","कोट्टायम","कोझिकोड","मलप्पुरम","पलक्कड़","पथनमथिट्टा","तिरुवनंतपुरम","त्रिशूर","वायनाड"],
//   "तमिलनाडु": ["अरियालुर","चेंगलपट्टू","चेन्नई","कोयंबटूर","कुड्डालोर","धर्मपुरी","डिंडीगुल","इरोड","कल्लाकुरिची","कांचीपुरम","कन्याकुमारी","करूर","कृष्णागिरी","मदुरै","मयिलादुतुरई","नागपट्टिनम","नामक्कल","नीलगिरि","पेरम्बलूर","पुदुक्कोट्टई","रामनाथपुरम","रानीपेट","सलेम","शिवगंगा","तेनकासी","थंजावुर","थेनी","तूतुकुडी","तिरुचिरापल्ली","तिरुनेलवेली","तिरुपथुर","तिरुप्पुर","तिरुवल्लुर","तिरुवन्नामलाई","तिरुवरुर","वेल्लोर","विल्लुपुरम","विरुधुनगर"],
//   "कर्नाटक": ["बागलकोट","बल्लारी","बेलगावी","बेंगलुरु ग्रामीण","बेंगलुरु शहरी","बीदर","चामराजनगर","चिकबल्लापुर","चिकमगलूर","चित्रदुर्ग","दक्षिण कन्नड़","दावणगेरे","धारवाड़","गदग","हासन","हावेरी","कलबुर्गी","कोडागु","कोलार","कोप्पल","मांड्या","मैसूर","रायचूर","रामनगर","शिवमोग्गा","तुमकुरु","उडुपी","उत्तर कन्नड़","विजयपुरा","यादगीर"],
//   "आंध्र प्रदेश": ["अनंतपुर","चित्तूर","पूर्वी गोदावरी","गुंटूर","कडपा","कृष्णा","कुर्नूल","नेल्लोर","प्रकाशम","श्रीकाकुलम","विशाखापट्टनम","विजयनगरम","पश्चिमी गोदावरी"],
//   "तेलंगाना": ["आदिलाबाद","भद्राद्री कोठागुडेम","हैदराबाद","जगतियाल","जनगांव","जयशंकर भूपालपल्ली","जोगुलाम्बा गडवाल","कामारेड्डी","करीमनगर","खम्मम","कुमुरम भीम","महाबुबाबाद","महबूबनगर","मंचेरियल","मेडक","मेडचल-मलकाजगिरि","मुलुगु","नगरकुर्नूल","नलगोंडा","नारायणपेट","निर्मल","निजामाबाद","पेड्डापल्ली","राजन्ना सिरसिला","रंगारेड्डी","संगारेड्डी","सिद्दीपेट","सूर्यापेट","विकाराबाद","वानापर्थी","वारंगल ग्रामीण","वारंगल शहरी","यदाद्रि भुवनगिरि"],
//   "ओडिशा": ["अंगुल","बलांगीर","बालेश्वर","बरगढ़","बौध","भद्रक","कटक","देवगढ़","ढेंकनाल","गजपति","गंजाम","जगतसिंहपुर","जाजपुर","झारसुगुड़ा","कालाहांडी","कंधमाल","केंद्रपाड़ा","केंदुझर","खोरधा","कोरापुट","मलकानगिरि","मयूरभंज","नबरंगपुर","नयागढ़","नुआपाड़ा","पुरी","रायगडा","संबलपुर","सोनपुर","सुंदरगढ़"],
//   "असम": ["बक्सा","बरपेटा","बिश्वनाथ","बोंगाईगांव","कछार","चराईदेव","चिरांग","दरांग","धेमाजी","धुबरी","डिब्रूगढ़","दिमा हासाओ","गोलपारा","गोलाघाट","हैलाकांडी","होजाई","जोरहाट","कामरूप","कामरूप महानगर","कार्बी आंगलोंग","करीमगंज","कोकराझार","लखीमपुर","माजुली","मोरीगांव","नगांव","नलबाड़ी","शिवसागर","सोनितपुर","तिनसुकिया","उदलगुड़ी"],
//   "पश्चिम बंगाल": ["अलीपुरद्वार","बांकुड़ा","बीरभूम","कूच बिहार","दक्षिण दिनाजपुर","दार्जिलिंग","हुगली","हावड़ा","जलपाईगुड़ी","झाड़ग्राम","कालिम्पोंग","कोलकाता","मालदा","मुर्शिदाबाद","नदिया","उत्तर 24 परगना","पश्चिम बर्धमान","पश्चिम मेदिनीपुर","पुरुलिया","दक्षिण 24 परगना","पूर्व बर्धमान","पूर्व मेदिनीपुर","उत्तर दिनाजपुर"],
//   "गोवा": ["उत्तर गोवा","दक्षिण गोवा"],
//   "मणिपुर": ["बिष्णुपुर","चंदेल","चुराचांदपुर","इंफाल पूर्व","इंफाल पश्चिम","जिरिबाम","काकचिंग","कांगपोकपी","नोनी","फेरजोल","सेनापति","तमेंगलोंग","थौबल","उखरुल"],
//   "मेघालय": ["पूर्वी गारो हिल्स","पूर्वी जयंतिया हिल्स","पूर्वी खासी हिल्स","री भोई","दक्षिण गारो हिल्स","दक्षिण पश्चिम गारो हिल्स","दक्षिण पश्चिम खासी हिल्स","पश्चिमी गारो हिल्स","पश्चिमी जयंतिया हिल्स","पश्चिमी खासी हिल्स"],
//   "त्रिपुरा": ["धलाई","गोमती","खोवाई","माजलिशपुर","सेपहिजाला","दक्षिण त्रिपुरा","उनाकोटि","पश्चिमी त्रिपुरा"],
//   "नागालैंड": ["चुमौकेदिमा","दीमापुर","किफिरे","कोहिमा","लोंगलेंग","मोकोकचुंग","मॉन","नोकलाक","पेरेन","फेक","त्यूएनसांग","वोखा","ज़ुन्हेबोटो"],
//   "मिजोरम": ["आइजोल","चंफाई","हनाथियाल","ख्वाज़ल","लावंगतलाई","लुंगलेई","ममित","सैहा","सेरछिप","सियाहा"],
//   "अरुणाचल प्रदेश": ["अंजाव","चांगलांग","दिबांग घाटी","पूर्वी कामेंग","पूर्वी सियांग","केई पनियोर","कुरुंग कुमे","लेपा राडा","लोहित","लोंगडिंग","निचली दिबांग घाटी","निचली सियांग","निचला सुबनसिरी","नमसाई","पक्के-केसांग","पापुम पारे","शि-योमी","सियांग","तवांग","तिरप","ऊपरी दिबांग घाटी","ऊपरी सियांग","ऊपरी सुबनसिरी","पश्चिमी कामेंग","पश्चिमी सियांग"],
//   "सिक्किम": ["पूर्वी सिक्किम","उत्तरी सिक्किम","दक्षिणी सिक्किम","पश्चिमी सिक्किम"],
// };

// const MemberForm: React.FC = () => {
//   const [form, setForm] = useState<MemberFormData>({
//     memberName: "",
//     fatherName: "",
//     businessNature: "",
//     organizationPosition: "",
//     residenceAddress: "",
//     officeAddress: "",
//     residencePhone: "",
//     officePhone: "",
//     mobile: "",
//     whatsapp: "",
//     email: "",
//     pan: "",
//     aadhaar: "",
//     education: "",
//     dob: "",
//     marriageDate: "",
//     bloodGroup: "",
//     tshirtSize: "",
//     socialWork: "",
//     specialAchievement: "",
//     membershipType: "life",
//     state: "",
//     district: "",
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     if (name === "state") {
//       setForm({ ...form, state: value, district: "" });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//     alert("फॉर्म सफलतापूर्वक जमा हो गया");
//   };

//   const districts = form.state ? stateDistrictData[form.state] || [] : [];

//   const membershipOptions = [
//     { value: "general", label: "सामान्य सदस्य", price: "₹100/year" },
//     { value: "life", label: "आजीवन सदस्य", price: "₹1,000 (Lifetime)" },
//     { value: "patron", label: "संरक्षक सदस्य", price: "₹5,000 (Lifetime)" },
//   ];

//   const inp: React.CSSProperties = {
//     width: "100%",
//     border: "1.5px solid #e5e7eb",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "0.88rem",
//     color: "#1a1a2e",
//     outline: "none",
//     fontFamily: "inherit",
//     background: "#fff",
//     boxSizing: "border-box",
//     transition: "border-color 0.2s, box-shadow 0.2s",
//   };

//   const selectStyle: React.CSSProperties = {
//     ...inp,
//     appearance: "none" as const,
//     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "right 12px center",
//     paddingRight: "36px",
//     cursor: "pointer",
//   };

//   const lbl: React.CSSProperties = {
//     fontSize: "0.8rem",
//     fontWeight: 600,
//     color: "#0f2056",
//     marginBottom: "6px",
//     display: "block",
//   };

//   const subLbl: React.CSSProperties = { ...lbl, color: "#6b7280", fontWeight: 500 };
//   const fld: React.CSSProperties = { display: "flex", flexDirection: "column" };
//   const row2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" };

//   const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     e.target.style.borderColor = "#e87722";
//     e.target.style.boxShadow = "0 0 0 3px rgba(232,119,34,0.12)";
//   };
//   const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     e.target.style.borderColor = "#e5e7eb";
//     e.target.style.boxShadow = "none";
//   };

//   return (
//     <div style={{ minHeight: "100vh", background: "#faf6f0", padding: "48px 16px", fontFamily: "'Poppins','Segoe UI',sans-serif" }}>

//       {/* Title */}
//       <div style={{ textAlign: "center", marginBottom: "36px" }}>
//         <h1 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, color: "#0f2056", marginBottom: "8px" }}>
//           ऑनलाइन पंजीकरण | Online Registration
//         </h1>
//         <div style={{ width: "50px", height: "3px", background: "#e87722", borderRadius: "2px", margin: "0 auto" }} />
//       </div>

//       {/* Card */}
//       <div style={{ background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,40px) clamp(20px,5vw,36px)", maxWidth: "680px", margin: "0 auto", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}>
//         <form onSubmit={handleSubmit}>

//           {/* 1 & 2 */}
//           <div style={row2}>
//             <div style={fld}>
//               <label style={lbl}>1. सदस्य का नाम <span style={{ color: "#e87722" }}>*</span></label>
//               <input name="memberName" placeholder="श्री/श्रीमति/" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={lbl}>2. पिता/पति का नाम <span style={{ color: "#e87722" }}>*</span></label>
//               <input name="fatherName" placeholder="श्री" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>

//           {/* 3 & 4 */}
//           <div style={row2}>
//             <div style={fld}>
//               <label style={lbl}>3. व्यवसाय की प्रकृति</label>
//               <input name="businessNature" placeholder="व्यापार, नौकरी, सेवा..." onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={lbl}>4. संगठन में स्थिति</label>
//               <input name="organizationPosition" placeholder="सदस्य, पदाधिकारी..." onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>

//           {/* State & District Dropdowns */}
//           <div style={row2}>
//             <div style={fld}>
//               <label style={lbl}>राज्य / State <span style={{ color: "#e87722" }}>*</span></label>
//               <select name="state" value={form.state} onChange={handleChange} style={selectStyle} onFocus={focus} onBlur={blur}>
//                 <option value="">-- राज्य चुनें --</option>
//                 {Object.keys(stateDistrictData).sort().map(s => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//             <div style={fld}>
//               <label style={lbl}>जिला / District <span style={{ color: "#e87722" }}>*</span></label>
//               <select
//                 name="district"
//                 value={form.district}
//                 onChange={handleChange}
//                 style={{ ...selectStyle, background: !form.state ? "#f9fafb" : "#fff", color: !form.state ? "#9ca3af" : "#1a1a2e" }}
//                 onFocus={focus}
//                 onBlur={blur}
//                 disabled={!form.state}
//               >
//                 <option value="">{form.state ? "-- जिला चुनें --" : "-- पहले राज्य चुनें --"}</option>
//                 {districts.map(d => (
//                   <option key={d} value={d}>{d}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* 5: Residence */}
//           <div style={{ marginBottom: "18px" }}>
//             <label style={lbl}>5. निवास का पता <span style={{ color: "#e87722" }}>*</span></label>
//             <textarea name="residenceAddress" placeholder="पूरा निवास पता लिखें (गली, शहर, जिला, पिन कोड)" onChange={handleChange} rows={3} style={{ ...inp, resize: "vertical", minHeight: "80px" }} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* 6: Office */}
//           <div style={{ marginBottom: "18px" }}>
//             <label style={lbl}>6. व्यवसाय / ऑफिस का पता</label>
//             <textarea name="officeAddress" placeholder="ऑफिस या व्यवसाय का पूरा पता लिखें" onChange={handleChange} rows={3} style={{ ...inp, resize: "vertical", minHeight: "80px" }} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* 7: Contact */}
//           <div style={{ marginBottom: "6px" }}>
//             <label style={lbl}>7. सम्पर्क सूत्र</label>
//           </div>
//           <div style={row2}>
//             <div style={fld}>
//               <label style={subLbl}>निवास</label>
//               <input name="residencePhone" placeholder="निवास नम्बर" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={subLbl}>ऑफिस</label>
//               <input name="officePhone" placeholder="ऑफिस नम्बर" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>
//           <div style={row2}>
//             <div style={fld}>
//               <label style={subLbl}>मोबाइल <span style={{ color: "#e87722" }}>*</span></label>
//               <input name="mobile" placeholder="+91 XXXXX XXXXX" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={subLbl}>व्हाट्सएप</label>
//               <input name="whatsapp" placeholder="व्हाट्सएप नम्बर" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>
//           <div style={row2}>
//             <div style={fld}>
//               <label style={subLbl}>ई-मेल</label>
//               <input name="email" placeholder="your@email.com" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={subLbl}>पैन नम्बर</label>
//               <input name="pan" placeholder="पैन नम्बर" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>
//           <div style={{ marginBottom: "18px" }}>
//             <label style={subLbl}>आधार नम्बर</label>
//             <input name="aadhaar" placeholder="आधार नम्बर" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* 8 */}
//           <div style={{ marginBottom: "18px" }}>
//             <label style={lbl}>8. शैक्षणिक योग्यता एवं प्रशिक्षण / कम्प्यूटर उपलब्धि</label>
//             <input name="education" placeholder="शैक्षणिक योग्यता लिखें" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* 9 & 10 */}
//           <div style={row2}>
//             <div style={fld}>
//               <label style={lbl}>9. जन्म दिनांक <span style={{ color: "#e87722" }}>*</span></label>
//               <input type="date" name="dob" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={lbl}>10. वैवाहिक वर्षगांठ</label>
//               <input type="date" name="marriageDate" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>

//           {/* 11 */}
//           <div style={row2}>
//             <div style={fld}>
//               <label style={lbl}>11. रक्त समूह</label>
//               <input name="bloodGroup" placeholder="A+, B+, O+..." onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//             <div style={fld}>
//               <label style={lbl}>टी-शर्ट साइज</label>
//               <input name="tshirtSize" placeholder="S, M, L, XL, XXL" onChange={handleChange} style={inp} onFocus={focus} onBlur={blur} />
//             </div>
//           </div>

//           {/* 12 */}
//           <div style={{ marginBottom: "18px" }}>
//             <label style={lbl}>12. अन्य सामाजिक एवं धार्मिक गतिविधियों के बारे में विवरण</label>
//             <textarea name="socialWork" placeholder="सामाजिक/धार्मिक गतिविधियों का विवरण लिखें" onChange={handleChange} rows={3} style={{ ...inp, resize: "vertical", minHeight: "80px" }} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* 13 */}
//           <div style={{ marginBottom: "24px" }}>
//             <label style={lbl}>13. अन्य कोई विशेष उपलब्धि</label>
//             <textarea name="specialAchievement" placeholder="कोई विशेष उपलब्धि हो तो लिखें" onChange={handleChange} rows={3} style={{ ...inp, resize: "vertical", minHeight: "80px" }} onFocus={focus} onBlur={blur} />
//           </div>

//           {/* Membership Type */}
//           <div style={{ marginBottom: "28px" }}>
//             <label style={lbl}>
//               सदस्यता प्रकार / Membership Type <span style={{ color: "#e87722" }}>*</span>
//             </label>
//             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
//               {membershipOptions.map(opt => (
//                 <label
//                   key={opt.value}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     border: `1.5px solid ${form.membershipType === opt.value ? "#e87722" : "#e5e7eb"}`,
//                     borderRadius: "8px",
//                     padding: "10px 14px",
//                     cursor: "pointer",
//                     background: form.membershipType === opt.value ? "#fff7f0" : "#fff",
//                     fontSize: "0.82rem",
//                     fontWeight: 600,
//                     color: form.membershipType === opt.value ? "#e87722" : "#0f2056",
//                     transition: "all 0.2s",
//                     userSelect: "none",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     name="membershipType"
//                     value={opt.value}
//                     checked={form.membershipType === opt.value}
//                     onChange={handleChange}
//                     style={{ accentColor: "#e87722" }}
//                   />
//                   {opt.label}{" "}
//                   <span style={{ color: "#e87722", fontWeight: 700 }}>{opt.price}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//             <button
//               type="submit"
//               style={{ flex: 1, minWidth: "200px", background: "#e87722", color: "#fff", border: "none", borderRadius: "10px", padding: "15px", fontFamily: "inherit", fontSize: "1rem", fontWeight: 700, cursor: "pointer", transition: "background 0.2s" }}
//               onMouseOver={e => (e.currentTarget.style.background = "#d46a18")}
//               onMouseOut={e => (e.currentTarget.style.background = "#e87722")}
//             >
//               Submit Registration | पंजीकरण जमा करें
//             </button>
//             <a
//               href="#"
//               style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "2px solid #e87722", color: "#e87722", background: "transparent", borderRadius: "10px", padding: "15px 20px", fontFamily: "inherit", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.2s" }}
//               onMouseOver={e => { e.currentTarget.style.background = "#e87722"; e.currentTarget.style.color = "#fff"; }}
//               onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#e87722"; }}
//             >
//               ⬇ Download Form PDF
//             </a>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default MemberForm;








// import { useState } from "react";
// import { Scale, BookOpen, Network, Award, Download, BadgeCheck } from "lucide-react";


// // ── State-District Data ───────────────────────────────────────────────────────
// const stateDistrictData = {
//   "राजस्थान": ["अजमेर","अलवर","बांसवाड़ा","बारां","बाड़मेर","भरतपुर","भीलवाड़ा","बीकानेर","बूंदी","चित्तौड़गढ़","चूरू","दौसा","धौलपुर","डूंगरपुर","हनुमानगढ़","जयपुर","जैसलमेर","जालोर","झालावाड़","झुंझुनू","जोधपुर","करौली","कोटा","नागौर","पाली","प्रतापगढ़","राजसमंद","सवाई माधोपुर","सीकर","सिरोही","श्री गंगानगर","टोंक","उदयपुर"],
//   "उत्तर प्रदेश": ["आगरा","अलीगढ़","अम्बेडकर नगर","अमेठी","अमरोहा","औरैया","अयोध्या","आजमगढ़","बागपत","बहराइच","बलिया","बलरामपुर","बांदा","बाराबंकी","बरेली","बस्ती","बिजनौर","बदायूं","बुलंदशहर","चंदौली","चित्रकूट","देवरिया","एटा","इटावा","फर्रुखाबाद","फतेहपुर","फिरोजाबाद","गौतम बुद्ध नगर","गाज़ियाबाद","गाजीपुर","गोंडा","गोरखपुर","हमीरपुर","हापुड़","हरदोई","हाथरस","जालौन","जौनपुर","झांसी","कानपुर देहात","कानपुर नगर","कासगंज","कौशाम्बी","कुशीनगर","लखीमपुर खीरी","ललितपुर","लखनऊ","महाराजगंज","महोबा","मैनपुरी","मथुरा","मऊ","मेरठ","मिर्जापुर","मुरादाबाद","मुजफ्फरनगर","पीलीभीत","प्रतापगढ़","प्रयागराज","रायबरेली","रामपुर","सहारनपुर","संभल","संत कबीर नगर","शाहजहांपुर","शामली","श्रावस्ती","सिद्धार्थनगर","सीतापुर","सोनभद्र","सुल्तानपुर","उन्नाव","वाराणसी"],
//   "मध्य प्रदेश": ["आगर मालवा","अलीराजपुर","अनूपपुर","अशोकनगर","बालाघाट","बड़वानी","बैतूल","भिंड","भोपाल","बुरहानपुर","छतरपुर","छिंदवाड़ा","दमोह","दतिया","देवास","धार","डिंडोरी","गुना","ग्वालियर","हरदा","होशंगाबाद","इंदौर","जबलपुर","झाबुआ","कटनी","खंडवा","खरगोन","मंडला","मंदसौर","मुरैना","नरसिंहपुर","नीमच","निवाड़ी","पन्ना","रायसेन","राजगढ़","रतलाम","रीवा","सागर","सतना","सीहोर","सिओनी","शहडोल","शाजापुर","श्योपुर","शिवपुरी","सीधी","सिंगरौली","टीकमगढ़","उज्जैन","उमरिया","विदिशा"],
//   "महाराष्ट्र": ["अहमदनगर","अकोला","अमरावती","औरंगाबाद","बीड","भंडारा","बुलढाणा","चंद्रपुर","धुले","गडचिरोली","गोंदिया","हिंगोली","जलगांव","जालना","कोल्हापुर","लातूर","मुंबई शहर","मुंबई उपनगर","नागपुर","नांदेड़","नंदुरबार","नासिक","उस्मानाबाद","पालघर","परभणी","पुणे","रायगड","रत्नागिरी","सांगली","सातारा","सिंधुदुर्ग","सोलापुर","ठाणे","वर्धा","वाशिम","यवतमाल"],
//   "गुजरात": ["अहमदाबाद","अमरेली","आणंद","अरावली","बनासकांठा","भरूच","भावनगर","बोटाद","छोटाउदेपुर","दाहोद","डांग","देवभूमि द्वारका","गांधीनगर","गिर सोमनाथ","जामनगर","जूनागढ़","खेड़ा","कच्छ","महिसागर","महेसाणा","मोरबी","नर्मदा","नवसारी","पंचमहल","पाटण","पोरबंदर","राजकोट","साबरकांठा","सूरत","सुरेंद्रनगर","तापी","वडोदरा","वलसाड"],
//   "बिहार": ["अरवल","औरंगाबाद","बांका","बेगूसराय","भागलपुर","भोजपुर","बक्सर","दरभंगा","पूर्वी चंपारण","गया","गोपालगंज","जमुई","जहानाबाद","कैमूर","कटिहार","खगड़िया","किशनगंज","लखीसराय","मधेपुरा","मधुबनी","मुंगेर","मुजफ्फरपुर","नालंदा","नवादा","पटना","पूर्णिया","रोहतास","सहरसा","समस्तीपुर","सारण","शेखपुरा","शिवहर","सीतामढ़ी","सीवान","सुपौल","वैशाली","पश्चिमी चंपारण"],
//   "पंजाब": ["अमृतसर","बरनाला","बठिंडा","फरीदकोट","फतेहगढ़ साहिब","फाजिल्का","फिरोजपुर","गुरदासपुर","होशियारपुर","जालंधर","कपूरथला","लुधियाना","मानसा","मोगा","मोहाली","मुक्तसर","नवांशहर","पठानकोट","पटियाला","रूपनगर","संगरूर","तरन तारन"],
//   "हरियाणा": ["अंबाला","भिवानी","चरखी दादरी","फरीदाबाद","फतेहाबाद","गुरुग्राम","हिसार","झज्जर","झींद","कैथल","करनाल","कुरुक्षेत्र","महेंद्रगढ़","नूंह","पलवल","पंचकुला","पानीपत","रेवाड़ी","रोहतक","सिरसा","सोनीपत","यमुनानगर"],
//   "दिल्ली": ["मध्य दिल्ली","पूर्वी दिल्ली","नई दिल्ली","उत्तर दिल्ली","उत्तर पूर्वी दिल्ली","उत्तर पश्चिमी दिल्ली","शाहदरा","दक्षिण दिल्ली","दक्षिण पूर्वी दिल्ली","दक्षिण पश्चिमी दिल्ली","पश्चिमी दिल्ली"],
//   "छत्तीसगढ़": ["बालोद","बलौदाबाजार","बलरामपुर","बस्तर","बेमेतरा","बीजापुर","बिलासपुर","दंतेवाड़ा","धमतरी","दुर्ग","गरियाबंद","जांजगीर-चांपा","जशपुर","कबीरधाम","कांकेर","कोंडागांव","कोरबा","कोरिया","महासमुंद","मुंगेली","नारायणपुर","रायगढ़","रायपुर","राजनांदगांव","सुकमा","सूरजपुर","सरगुजा"],
//   "झारखंड": ["बोकारो","चतरा","देवघर","धनबाद","दुमका","पूर्वी सिंहभूम","गढ़वा","गिरिडीह","गोड्डा","गुमला","हजारीबाग","जामताड़ा","खूंटी","कोडरमा","लातेहार","लोहरदगा","पाकुड़","पलामू","रामगढ़","रांची","साहिबगंज","सरायकेला खरसावां","सिमडेगा","पश्चिमी सिंहभूम"],
//   "उत्तराखंड": ["अल्मोड़ा","बागेश्वर","चमोली","चंपावत","देहरादून","हरिद्वार","नैनीताल","पौड़ी गढ़वाल","पिथौरागढ़","रुद्रप्रयाग","टिहरी गढ़वाल","उधम सिंह नगर","उत्तरकाशी"],
//   "हिमाचल प्रदेश": ["बिलासपुर","चंबा","हमीरपुर","कांगड़ा","किन्नौर","कुल्लू","लाहुल और स्पीति","मंडी","शिमला","सिरमौर","सोलन","ऊना"],
//   "केरल": ["अलाप्पुझा","एर्नाकुलम","इडुक्की","कन्नूर","कासरगोड","कोल्लम","कोट्टायम","कोझिकोड","मलप्पुरम","पलक्कड़","पथनमथिट्टा","तिरुवनंतपुरम","त्रिशूर","वायनाड"],
//   "तमिलनाडु": ["अरियालुर","चेंगलपट्टू","चेन्नई","कोयंबटूर","कुड्डालोर","धर्मपुरी","डिंडीगुल","इरोड","कांचीपुरम","कन्याकुमारी","करूर","कृष्णागिरी","मदुरै","नागपट्टिनम","नामक्कल","पेरम्बलूर","पुदुक्कोट्टई","रामनाथपुरम","सलेम","शिवगंगा","थंजावुर","तिरुचिरापल्ली","तिरुनेलवेली","तिरुप्पुर","तिरुवल्लुर","वेल्लोर","विरुधुनगर"],
//   "कर्नाटक": ["बागलकोट","बल्लारी","बेलगावी","बेंगलुरु ग्रामीण","बेंगलुरु शहरी","बीदर","चामराजनगर","चिकबल्लापुर","चिकमगलूर","चित्रदुर्ग","दक्षिण कन्नड़","दावणगेरे","धारवाड़","गदग","हासन","हावेरी","कलबुर्गी","कोडागु","कोलार","कोप्पल","मांड्या","मैसूर","रायचूर","रामनगर","शिवमोग्गा","तुमकुरु","उडुपी","उत्तर कन्नड़","विजयपुरा","यादगीर"],
//   "आंध्र प्रदेश": ["अनंतपुर","चित्तूर","पूर्वी गोदावरी","गुंटूर","कडपा","कृष्णा","कुर्नूल","नेल्लोर","प्रकाशम","श्रीकाकुलम","विशाखापट्टनम","विजयनगरम","पश्चिमी गोदावरी"],
//   "तेलंगाना": ["आदिलाबाद","भद्राद्री कोठागुडेम","हैदराबाद","जगतियाल","जनगांव","करीमनगर","खम्मम","महबूबनगर","मेडक","नलगोंडा","निजामाबाद","रंगारेड्डी","संगारेड्डी","सिद्दीपेट","सूर्यापेट","वारंगल ग्रामीण","वारंगल शहरी"],
//   "ओडिशा": ["अंगुल","बलांगीर","बालेश्वर","बरगढ़","बौध","भद्रक","कटक","देवगढ़","ढेंकनाल","गजपति","गंजाम","जगतसिंहपुर","जाजपुर","झारसुगुड़ा","कालाहांडी","केंद्रपाड़ा","केंदुझर","खोरधा","कोरापुट","मलकानगिरि","मयूरभंज","नबरंगपुर","नयागढ़","पुरी","रायगडा","संबलपुर","सोनपुर","सुंदरगढ़"],
//   "असम": ["बक्सा","बरपेटा","बिश्वनाथ","बोंगाईगांव","कछार","चराईदेव","चिरांग","दरांग","धेमाजी","धुबरी","डिब्रूगढ़","गोलपारा","गोलाघाट","हैलाकांडी","जोरहाट","कामरूप","कामरूप महानगर","कार्बी आंगलोंग","करीमगंज","कोकराझार","लखीमपुर","मोरीगांव","नगांव","नलबाड़ी","शिवसागर","सोनितपुर","तिनसुकिया","उदलगुड़ी"],
//   "पश्चिम बंगाल": ["अलीपुरद्वार","बांकुड़ा","बीरभूम","कूच बिहार","दक्षिण दिनाजपुर","दार्जिलिंग","हुगली","हावड़ा","जलपाईगुड़ी","कालिम्पोंग","कोलकाता","मालदा","मुर्शिदाबाद","नदिया","उत्तर 24 परगना","पश्चिम बर्धमान","पश्चिम मेदिनीपुर","पुरुलिया","दक्षिण 24 परगना","पूर्व बर्धमान","पूर्व मेदिनीपुर","उत्तर दिनाजपुर"],
//   "गोवा": ["उत्तर गोवा","दक्षिण गोवा"],
//   "जम्मू और कश्मीर": ["अनंतनाग","बांदीपोरा","बारामूला","बडगाम","डोडा","गांदरबल","जम्मू","कठुआ","किश्तवाड़","कुलगाम","कुपवाड़ा","पुलवामा","पुंछ","रामबन","रियासी","राजौरी","सांबा","शोपियां","श्रीनगर","उधमपुर"],
// };

// const membershipOptions = [
//   { id: "general", label: "साधारण सदस्य", sublabel: "General Member", price: "₹100/year",        popular: false },
//   { id: "life",    label: "आजीवन सदस्य",  sublabel: "Life Member",    price: "₹1,000 (Lifetime)", popular: true  },
//   { id: "patron",  label: "संरक्षक सदस्य", sublabel: "Patron Member",  price: "₹5,000 (Lifetime)", popular: false },
// ];

// const benefits = [
//   { icon: Scale,    title: "Legal Support",     subtitle: "कानूनी सहायता",      desc: "Free legal aid for OBC-related discrimination cases." },
//   { icon: BookOpen, title: "Educational Help",  subtitle: "शिक्षा सहायता",       desc: "Scholarships, guidance for educational support." },
//   { icon: Network,  title: "Community Network", subtitle: "सामुदायिक नेटवर्क", desc: "Connect with 10 lakh+ members across India." },
//   { icon: Award,    title: "Recognition",       subtitle: "पहचान",               desc: "Membership certificate and ID card provided." },
// ];

// // (Styling converted to Tailwind classes; JS style handlers removed)

// // ── Component ─────────────────────────────────────────────────────────────────
// export default function MembershipPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({
//     memberName: "", fatherName: "", businessNature: "", organizationPosition: "",
//     residenceAddress: "", officeAddress: "", residencePhone: "", officePhone: "",
//     mobile: "", whatsapp: "", email: "", pan: "", aadhaar: "", education: "",
//     dob: "", marriageDate: "", bloodGroup: "", tshirtSize: "",
//     socialWork: "", specialAchievement: "", membershipType: "life", state: "", district: "",
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     if (name === "state") setForm({ ...form, state: value, district: "" });
//     else setForm({ ...form, [name]: value });
//   };

//   const districts = form.state ? stateDistrictData[form.state] || [] : [];

//   return (
//     <>
   
//     <div className="font-sans bg-[#f5f0ea] min-h-screen">

//       {/* ── Hero ── */}
//       <div className="bg-gradient-to-tr from-[#0f1d3a] via-[#1e3160] to-[#162448] py-20 px-4 text-center relative overflow-hidden">
//         <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[#f4a92a] opacity-10 pointer-events-none" />
//         <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#f4a92a] opacity-5 pointer-events-none" />
//         <div className="relative z-10">
//           <span className="inline-block bg-[#f4a92a]/20 border border-[#f4a92a]/40 text-[#f4c96a] rounded-full px-4 py-1 text-xs font-extrabold tracking-wide mb-4">OBC MAHASABHA</span>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#f4a92a] mb-1">सदस्यता</h1>
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Membership</h2>
//           <p className="text-[#94a8c8] text-base max-w-xl mx-auto leading-relaxed">
//             Join our movement and be part of the largest OBC community organization in India.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-[900px] mx-auto px-4 py-12">

//         {/* ── Membership Types ── */}
//         <SectionHeader title="सदस्यता प्रकार | Membership Types" />
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
//           {membershipOptions.map(type => (
//             <div key={type.id} className={`relative text-center rounded-xl p-7 ${type.popular ? 'border-2 border-[#f4a92a] bg-[#fff8ee] shadow-lg' : 'border border-[#ddd0be] bg-white shadow-sm'}`}>
//               {type.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f4a92a] text-white text-xs font-extrabold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</div>}
//               <p className="m-0 font-extrabold text-base text-[#0f1d3a]">{type.label}</p>
//               <p className="m-0 text-sm text-gray-400 mb-3">{type.sublabel}</p>
//               <p className={`m-0 font-extrabold text-lg ${type.popular ? 'text-[#f4a92a]' : 'text-[#0f1d3a]'}`}>{type.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* ── Benefits ── */}
//         <SectionHeader title="सदस्यता लाभ | Membership Benefits" />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
//           {benefits.map(b => {
//             const Icon = b.icon;
//             return (
//               <div key={b.title} className="bg-white rounded-lg p-4 flex items-start gap-4 border border-[#e8dfd0] shadow-sm">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#fff4df] flex items-center justify-center">
//                   <Icon size={22} color="#f4a92a" />
//                 </div>
//                 <div>
//                   <p className="m-0 font-bold text-sm text-[#0f1d3a]">{b.title}</p>
//                   <p className="m-0 text-sm text-[#f4a92a] font-semibold">{b.subtitle}</p>
//                   <p className="m-0 text-sm text-gray-600 leading-relaxed mt-1">{b.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ── Offline Download Banner ── */}
//         <div className="bg-gradient-to-r from-[#0f1d3a] to-[#1e3160] rounded-xl p-6 mb-14 flex items-center justify-between flex-wrap gap-4 shadow-lg">
//           <div>
//             <p className="m-0 font-extrabold text-white">ऑफलाइन फॉर्म डाउनलोड करें</p>
//             <p className="m-0 text-[#94a8c8] text-sm">Download Offline Form | फॉर्म भरकर जमा करें</p>
//           </div>
//           <button className="inline-flex items-center gap-3 bg-[#f4a92a] text-[#0f1d3a] px-5 py-3 rounded-lg font-extrabold text-sm shadow-md hover:opacity-95">
//             <Download size={17} />
//             Download PDF Form | फॉर्म डाउनलोड करें
//           </button>
//         </div>

//         {/* ── Online Registration ── */}
//         <SectionHeader title="ऑनलाइन पंजीकरण | Online Registration" />

//         {submitted ? (
//           <div className="bg-white rounded-2xl p-12 text-center border border-[#e8dfd0]">
//             <div className="w-[72px] h-[72px] rounded-full bg-[#fff4df] flex items-center justify-center mx-auto mb-5">
//               <BadgeCheck size={36} color="#f4a92a" />
//             </div>
//             <h3 className="m-0 mb-2 text-xl font-extrabold text-[#0f1d3a]">पंजीकरण सफल!</h3>
//             <p className="text-gray-500 mb-7">आपका आवेदन प्राप्त हो गया है। जल्द ही संपर्क किया जाएगा।</p>
//             <button onClick={() => { setSubmitted(false); }} className="bg-[#0f1d3a] text-white px-6 py-3 rounded-lg font-semibold">नया पंजीकरण करें</button>
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg p-6 md:p-10 shadow-lg">
//             <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>

//               {/* 1 & 2 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">1. सदस्य का नाम <R /></label>
//                   <input name="memberName" value={form.memberName} onChange={handleChange} placeholder="श्री/श्रीमति/" required className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">2. पिता/पति का नाम <R /></label>
//                   <input name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="श्री" required className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
//                 </div>
//               </div>

//               {/* 3 & 4 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">3. व्यवसाय की प्रकृति</label>
//                   <input name="businessNature" value={form.businessNature} onChange={handleChange} placeholder="व्यापार, नौकरी, सेवा..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">4. संगठन में स्थिति</label>
//                   <input name="organizationPosition" value={form.organizationPosition} onChange={handleChange} placeholder="सदस्य, पदाधिकारी..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
//                 </div>
//               </div>

//               {/* State & District */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">राज्य / State <R /></label>
//                   <select name="state" value={form.state} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20">
//                     <option value="">-- राज्य चुनें --</option>
//                     {Object.keys(stateDistrictData).sort().map(s => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="text-sm font-semibold text-[#0f2056] mb-1">जिला / District <R /></label>
//                   <select name="district" value={form.district} onChange={handleChange} required disabled={!form.state}
//                     className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 ${!form.state ? 'border-gray-200 bg-gray-50 text-gray-400' : 'border-gray-200 bg-white text-[#1a1a2e]'}`}>
//                     <option value="">{form.state ? "-- जिला चुनें --" : "-- पहले राज्य चुनें --"}</option>
//                     {districts.map(d => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                 </div>
//               </div>

//               {/* 5 */}
//               <div className="mb-4">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">5. निवास का पता <R /></label>
//                 <textarea name="residenceAddress" value={form.residenceAddress} onChange={handleChange} placeholder="पूरा निवास पता लिखें (गली, शहर, जिला, पिन कोड)" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* 6 */}
//               <div className="mb-4">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">6. व्यवसाय / ऑफिस का पता</label>
//                 <textarea name="officeAddress" value={form.officeAddress} onChange={handleChange} placeholder="ऑफिस या व्यवसाय का पूरा पता लिखें" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* 7 Contact */}
//               <div className="mb-2"><label className="text-sm font-semibold text-[#0f2056] mb-1 block">7. सम्पर्क सूत्र</label></div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">निवास</label><input name="residencePhone" value={form.residencePhone} onChange={handleChange} placeholder="निवास नम्बर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">ऑफिस</label><input name="officePhone" value={form.officePhone} onChange={handleChange} placeholder="ऑफिस नम्बर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">मोबाइल <R /></label><input name="mobile" value={form.mobile} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">व्हाट्सएप</label><input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="व्हाट्सएप नम्बर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">ई-मेल</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//                 <div className="flex flex-col"><label className="text-sm text-gray-500 mb-1">पैन नम्बर</label><input name="pan" value={form.pan} onChange={handleChange} placeholder="पैन नम्बर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//               </div>
//               <div className="mb-4">
//                 <label className="text-sm text-gray-500 mb-1 block">आधार नम्बर</label>
//                 <input name="aadhaar" value={form.aadhaar} onChange={handleChange} placeholder="आधार नम्बर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* 8 */}
//               <div className="mb-4">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">8. शैक्षणिक योग्यता एवं प्रशिक्षण / कम्प्यूटर उपलब्धि</label>
//                 <input name="education" value={form.education} onChange={handleChange} placeholder="शैक्षणिक योग्यता लिखें" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* 9 & 10 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="flex flex-col"><label className="text-sm font-semibold text-[#0f2056] mb-1">9. जन्म दिनांक <R /></label><input type="date" name="dob" value={form.dob} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//                 <div className="flex flex-col"><label className="text-sm font-semibold text-[#0f2056] mb-1">10. वैवाहिक वर्षगांठ</label><input type="date" name="marriageDate" value={form.marriageDate} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//               </div>

//               {/* 11 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="flex flex-col"><label className="text-sm font-semibold text-[#0f2056] mb-1">11. रक्त समूह</label><input name="bloodGroup" value={form.bloodGroup} onChange={handleChange} placeholder="A+, B+, O+..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//                 <div className="flex flex-col"><label className="text-sm font-semibold text-[#0f2056] mb-1">टी-शर्ट साइज</label><input name="tshirtSize" value={form.tshirtSize} onChange={handleChange} placeholder="S, M, L, XL, XXL" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
//               </div>

//               {/* 12 */}
//               <div className="mb-4">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">12. अन्य सामाजिक एवं धार्मिक गतिविधियों के बारे में विवरण</label>
//                 <textarea name="socialWork" value={form.socialWork} onChange={handleChange} placeholder="सामाजिक/धार्मिक गतिविधियों का विवरण लिखें" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* 13 */}
//               <div className="mb-6">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">13. अन्य कोई विशेष उपलब्धि</label>
//                 <textarea name="specialAchievement" value={form.specialAchievement} onChange={handleChange} placeholder="कोई विशेष उपलब्धि हो तो लिखें" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
//               </div>

//               {/* Membership Radio */}
//               <div className="mb-7">
//                 <label className="text-sm font-semibold text-[#0f2056] mb-1 block">सदस्यता प्रकार / Membership Type <R /></label>
//                 <div className="flex gap-3 flex-wrap mt-2">
//                   {membershipOptions.map(opt => (
//                     <label key={opt.id} className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer select-none text-sm font-semibold transition ${form.membershipType === opt.id ? 'border-[#e87722] bg-[#fff7f0] text-[#e87722]' : 'border-gray-200 text-[#0f2056]'}`}>
//                       <input type="radio" name="membershipType" value={opt.id} checked={form.membershipType === opt.id} onChange={handleChange} className="accent-[#e87722]" />
//                       {opt.label} <span className="text-[#e87722] font-bold">{opt.price}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Submit Buttons */}
//               <div className="flex gap-3 flex-wrap">
//                 <button type="submit" className="flex-1 min-w-[200px] bg-[#e87722] hover:bg-[#d46a18] text-white rounded-lg py-3 font-bold">Submit Registration | पंजीकरण जमा करें</button>
//                 <a href="#" className="inline-flex items-center gap-2 border-2 border-[#e87722] text-[#e87722] hover:bg-[#e87722] hover:text-white rounded-lg py-3 px-5 font-bold"> <Download size={16} /> Download Form PDF</a>
//               </div>

//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//     </>
//   );
// }

// // ── Helpers ───────────────────────────────────────────────────────────────────
// const SectionHeader = ({ title }) => (
//   <div className="text-center mb-6">
//     <h2 className="m-0 font-extrabold text-lg text-[#0f1d3a]">{title}</h2>
//     <div className="w-12 h-1 bg-[#f4a92a] rounded mx-auto mt-2" />
//   </div>
// );

// const R = () => <span className="text-[#e87722]">*</span>;








import { useState } from "react";
import { Scale, BookOpen, Network, Award, Download, BadgeCheck } from "lucide-react";

// ── State-District Data ───────────────────────────────────────────────────────
const stateDistrictData = {
  "राजस्थान": ["अजमेर","अलवर","बांसवाड़ा","बारां","बाड़मेर","भरतपुर","भीलवाड़ा","बीकानेर","बूंदी","चित्तौड़गढ़","चूरू","दौसा","धौलपुर","डूंगरपुर","हनुमानगढ़","जयपुर","जैसलमेर","जालोर","झालावाड़","झुंझुनू","जोधपुर","करौली","कोटा","नागौर","पाली","प्रतापगढ़","राजसमंद","सवाई माधोपुर","सीकर","सिरोही","श्री गंगानगर","टोंक","उदयपुर"],
  "उत्तर प्रदेश": ["आगरा","अलीगढ़","अम्बेडकर नगर","अमेठी","अमरोहा","औरैया","अयोध्या","आजमगढ़","बागपत","बहराइच","बलिया","बलरामपुर","बांदा","बाराबंकी","बरेली","बस्ती","बिजनौर","बदायूं","बुलंदशहर","चंदौली","चित्रकूट","देवरिया","एटा","इटावा","फर्रुखाबाद","फतेहपुर","फिरोजाबाद","गौतम बुद्ध नगर","गाज़ियाबाद","गाजीपुर","गोंडा","गोरखपुर","हमीरपुर","हापुड़","हरदोई","हाथरस","जालौन","जौनपुर","झांसी","कानपुर देहात","कानपुर नगर","कासगंज","कौशाम्बी","कुशीनगर","लखीमपुर खीरी","ललितपुर","लखनऊ","महाराजगंज","महोबा","मैनपुरी","मथुरा","मऊ","मेरठ","मिर्जापुर","मुरादाबाद","मुजफ्फरनगर","पीलीभीत","प्रतापगढ़","प्रयागराज","रायबरेली","रामपुर","सहारनपुर","संभल","संत कबीर नगर","शाहजहांपुर","शामली","श्रावस्ती","सिद्धार्थनगर","सीतापुर","सोनभद्र","सुल्तानपुर","उन्नाव","वाराणसी"],
  "मध्य प्रदेश": ["आगर मालवा","अलीराजपुर","अनूपपुर","अशोकनगर","बालाघाट","बड़वानी","बैतूल","भिंड","भोपाल","बुरहानपुर","छतरपुर","छिंदवाड़ा","दमोह","दतिया","देवास","धार","डिंडोरी","गुना","ग्वालियर","हरदा","होशंगाबाद","इंदौर","जबलपुर","झाबुआ","कटनी","खंडवा","खरगोन","मंडला","मंदसौर","मुरैना","नरसिंहपुर","नीमच","निवाड़ी","पन्ना","रायसेन","राजगढ़","रतलाम","रीवा","सागर","सतना","सीहोर","सिओनी","शहडोल","शाजापुर","श्योपुर","शिवपुरी","सीधी","सिंगरौली","टीकमगढ़","उज्जैन","उमरिया","विदिशा"],
  "महाराष्ट्र": ["अहमदनगर","अकोला","अमरावती","औरंगाबाद","बीड","भंडारा","बुलढाणा","चंद्रपुर","धुले","गडचिरोली","गोंदिया","हिंगोली","जलगांव","जालना","कोल्हापुर","लातूर","मुंबई शहर","मुंबई उपनगर","नागपुर","नांदेड़","नंदुरबार","नासिक","उस्मानाबाद","पालघर","परभणी","पुणे","रायगड","रत्नागिरी","सांगली","सातारा","सिंधुदुर्ग","सोलापुर","ठाणे","वर्धा","वाशिम","यवतमाल"],
  "गुजरात": ["अहमदाबाद","अमरेली","आणंद","अरावली","बनासकांठा","भरूच","भावनगर","बोटाद","छोटाउदेपुर","दाहोद","डांग","देवभूमि द्वारका","गांधीनगर","गिर सोमनाथ","जामनगर","जूनागढ़","खेड़ा","कच्छ","महिसागर","महेसाणा","मोरबी","नर्मदा","नवसारी","पंचमहल","पाटण","पोरबंदर","राजकोट","साबरकांठा","सूरत","सुरेंद्रनगर","तापी","वडोदरा","वलसाड"],
  "बिहार": ["अरवल","औरंगाबाद","बांका","बेगूसराय","भागलपुर","भोजपुर","बक्सर","दरभंगा","पूर्वी चंपारण","गया","गोपालगंज","जमुई","जहानाबाद","कैमूर","कटिहार","खगड़िया","किशनगंज","लखीसराय","मधेपुरा","मधुबनी","मुंगेर","मुजफ्फरपुर","नालंदा","नवादा","पटना","पूर्णिया","रोहतास","सहरसा","समस्तीपुर","सारण","शेखपुरा","शिवहर","सीतामढ़ी","सीवान","सुपौल","वैशाली","पश्चिमी चंपारण"],
  "पंजाब": ["अमृतसर","बरनाला","बठिंडा","फरीदकोट","फतेहगढ़ साहिब","फाजिल्का","फिरोजपुर","गुरदासपुर","होशियारपुर","जालंधर","कपूरथला","लुधियाना","मानसा","मोगा","मोहाली","मुक्तसर","नवांशहर","पठानकोट","पटियाला","रूपनगर","संगरूर","तरन तारन"],
  "हरियाणा": ["अंबाला","भिवानी","चरखी दादरी","फरीदाबाद","फतेहाबाद","गुरुग्राम","हिसार","झज्जर","झींद","कैथल","करनाल","कुरुक्षेत्र","महेंद्रगढ़","नूंह","पलवल","पंचकुला","पानीपत","रेवाड़ी","रोहतक","सिरसा","सोनीपत","यमुनानगर"],
  "दिल्ली": ["मध्य दिल्ली","पूर्वी दिल्ली","नई दिल्ली","उत्तर दिल्ली","उत्तर पूर्वी दिल्ली","उत्तर पश्चिमी दिल्ली","शाहदरा","दक्षिण दिल्ली","दक्षिण पूर्वी दिल्ली","दक्षिण पश्चिमी दिल्ली","पश्चिमी दिल्ली"],
  "छत्तीसगढ़": ["बालोद","बलौदाबाजार","बलरामपुर","बस्तर","बेमेतरा","बीजापुर","बिलासपुर","दंतेवाड़ा","धमतरी","दुर्ग","गरियाबंद","जांजगीर-चांपा","जशपुर","कबीरधाम","कांकेर","कोंडागांव","कोरबा","कोरिया","महासमुंद","मुंगेली","नारायणपुर","रायगढ़","रायपुर","राजनांदगांव","सुकमा","सूरजपुर","सरगुजा"],
  "झारखंड": ["बोकारो","चतरा","देवघर","धनबाद","दुमका","पूर्वी सिंहभूम","गढ़वा","गिरिडीह","गोड्डा","गुमला","हजारीबाग","जामताड़ा","खूंटी","कोडरमा","लातेहार","लोहरदगा","पाकुड़","पलामू","रामगढ़","रांची","साहिबगंज","सरायकेला खरसावां","सिमडेगा","पश्चिमी सिंहभूम"],
  "उत्तराखंड": ["अल्मोड़ा","बागेश्वर","चमोली","चंपावत","देहरादून","हरिद्वार","नैनीताल","पौड़ी गढ़वाल","पिथौरागढ़","रुद्रप्रयाग","टिहरी गढ़वाल","उधम सिंह नगर","उत्तरकाशी"],
  "हिमाचल प्रदेश": ["बिलासपुर","चंबा","हमीरपुर","कांगड़ा","किन्नौर","कुल्लू","लाहुल और स्पीति","मंडी","शिमला","सिरमौर","सोलन","ऊना"],
  "केरल": ["अलाप्पुझा","एर्नाकुलम","इडुक्की","कन्नूर","कासरगोड","कोल्लम","कोट्टायम","कोझिकोड","मलप्पुरम","पलक्कड़","पथनमथिट्टा","तिरुवनंतपुरम","त्रिशूर","वायनाड"],
  "तमिलनाडु": ["अरियालुर","चेंगलपट्टू","चेन्नई","कोयंबटूर","कुड्डालोर","धर्मपुरी","डिंडीगुल","इरोड","कांचीपुरम","कन्याकुमारी","करूर","कृष्णागिरी","मदुरै","नागपट्टिनम","नामक्कल","पेरम्बलूर","पुदुक्कोट्टई","रामनाथपुरम","सलेम","शिवगंगा","थंजावुर","तिरुचिरापल्ली","तिरुनेलवेली","तिरुप्पुर","तिरुवल्लुर","वेल्लोर","विरुधुनगर"],
  "कर्नाटक": ["बागलकोट","बल्लारी","बेलगावी","बेंगलुरु ग्रामीण","बेंगलुरु शहरी","बीदर","चामराजनगर","चिकबल्लापुर","चिकमगलूर","चित्रदुर्ग","दक्षिण कन्नड़","दावणगेरे","धारवाड़","गदग","हासन","हावेरी","कलबुर्गी","कोडागु","कोलार","कोप्पल","मांड्या","मैसूर","रायचूर","रामनगर","शिवमोग्गा","तुमकुरु","उडुपी","उत्तर कन्नड़","विजयपुरा","यादगीर"],
  "आंध्र प्रदेश": ["अनंतपुर","चित्तूर","पूर्वी गोदावरी","गुंटूर","कडपा","कृष्णा","कुर्नूल","नेल्लोर","प्रकाशम","श्रीकाकुलम","विशाखापट्टनम","विजयनगरम","पश्चिमी गोदावरी"],
  "तेलंगाना": ["आदिलाबाद","भद्राद्री कोठागुडेम","हैदराबाद","जगतियाल","जनगांव","करीमनगर","खम्मम","महबूबनगर","मेडक","नलगोंडा","निजामाबाद","रंगारेड्डी","संगारेड्डी","सिद्दीपेट","सूर्यापेट","वारंगल ग्रामीण","वारंगल शहरी"],
  "ओडिशा": ["अंगुल","बलांगीर","बालेश्वर","बरगढ़","बौध","भद्रक","कटक","देवगढ़","ढेंकनाल","गजपति","गंजाम","जगतसिंहपुर","जाजपुर","झारसुगुड़ा","कालाहांडी","केंद्रपाड़ा","केंदुझर","खोरधा","कोरापुट","मलकानगिरि","मयूरभंज","नबरंगपुर","नयागढ़","पुरी","रायगडा","संबलपुर","सोनपुर","सुंदरगढ़"],
  "असम": ["बक्सा","बरपेटा","बिश्वनाथ","बोंगाईगांव","कछार","चराईदेव","चिरांग","दरांग","धेमाजी","धुबरी","डिब्रूगढ़","गोलपारा","गोलाघाट","हैलाकांडी","जोरहाट","कामरूप","कामरूप महानगर","कार्बी आंगलोंग","करीमगंज","कोकराझार","लखीमपुर","मोरीगांव","नगांव","नलबाड़ी","शिवसागर","सोनितपुर","तिनसुकिया","उदलगुड़ी"],
  "पश्चिम बंगाल": ["अलीपुरद्वार","बांकुड़ा","बीरभूम","कूच बिहार","दक्षिण दिनाजपुर","दार्जिलिंग","हुगली","हावड़ा","जलपाईगुड़ी","कालिम्पोंग","कोलकाता","मालदा","मुर्शिदाबाद","नदिया","उत्तर 24 परगना","पश्चिम बर्धमान","पश्चिम मेदिनीपुर","पुरुलिया","दक्षिण 24 परगना","पूर्व बर्धमान","पूर्व मेदिनीपुर","उत्तर दिनाजपुर"],
  "गोवा": ["उत्तर गोवा","दक्षिण गोवा"],
  "जम्मू और कश्मीर": ["अनंतनाग","बांदीपोरा","बारामूला","बडगाम","डोडा","गांदरबल","जम्मू","कठुआ","किश्तवाड़","कुलगाम","कुपवाड़ा","पुलवामा","पुंछ","रामबन","रियासी","राजौरी","सांबा","शोपियां","श्रीनगर","उधमपुर"],
};

const membershipOptions = [

  { id: "life",    label: "आजीवन सदस्य",  sublabel: "आजीवन",    price: "₹200 (आजीवन)", popular: true  },
 
];

const benefits = [
  {
    icon: Scale,
    title: "कानूनी सहायता",
    subtitle: "निःशुल्क कानूनी मदद",
    desc: "ओबीसी संबंधित भेदभाव मामलों के लिए निःशुल्क कानूनी सहायता प्रदान की जाती है।",
  },
  {
    icon: BookOpen,
    title: "शिक्षा सहायता",
    subtitle: "छात्रवृत्ति और मार्गदर्शन",
    desc: "छात्रों को शिक्षा सहायता, छात्रवृत्ति और करियर मार्गदर्शन प्रदान किया जाता है।",
  },
  {
    icon: Network,
    title: "सामुदायिक नेटवर्क",
    subtitle: "10 लाख+ सदस्य",
    desc: "भारत भर में 10 लाख से अधिक सदस्यों के साथ जुड़कर मजबूत नेटवर्क का हिस्सा बनें।",
  },
  {
    icon: Award,
    title: "सम्मान और पहचान",
    subtitle: "प्रमाणपत्र और ID कार्ड",
    desc: "सदस्यता प्रमाणपत्र और आधिकारिक पहचान पत्र प्रदान किया जाता है।",
  },
];

// ── Validation patterns ───────────────────────────────────────────────────
const validationRules = {
  mobile: { regex: /^\d{10}$/, message: "मोबाइल नंबर 10 अंकों का होना चाहिए" },
  whatsapp: { regex: /^\d{10}$/, message: "व्हाट्सएप नंबर 10 अंकों का होना चाहिए" },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "कृपया मान्य ईमेल पता दर्ज करें" },
  pan: { regex: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "मान्य PAN नंबर दर्ज करें (ABCDE1234F)" },
  aadhaar: { regex: /^\d{12}$/, message: "आधार नंबर 12 अंकों का होना चाहिए" },
};

const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const tshirtSizeOptions = ["S", "M", "L", "XL", "XXL"];
const educationOptions = ["8वीं पास", "10वीं पास", "12वीं पास", "स्नातक", "स्नातकोत्तर", "कंप्यूटर कोर्स", "डिप्लोमा", "अन्य"];

// ── Component ─────────────────────────────────────────────────────────────────
interface FormData {
  memberName: string;
  fatherName: string;
  businessNature: string;
  organizationPosition: string;
  residenceAddress: string;
  officeAddress: string;
  residencePhone: string;
  officePhone: string;
  mobile: string;
  whatsapp: string;
  email: string;
  pan: string;
  aadhaar: string;
  education: string;
  otherEducation: string; 
  dob: string;
  marriageDate: string;
  bloodGroup: string;
  tshirtSize: string;
  socialWork: string;
  specialAchievement: string;
  membershipType: string;
  state: string;
  district: string;
  imageFile?: File;
}

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string>("");
  const [form, setForm] = useState<FormData>({
    memberName: "", fatherName: "", businessNature: "", organizationPosition: "",
    residenceAddress: "", officeAddress: "", residencePhone: "", officePhone: "",
    mobile: "", whatsapp: "", email: "", pan: "", aadhaar: "", education: "",
    dob: "", marriageDate: "", bloodGroup: "", tshirtSize: "",
    socialWork: "", specialAchievement: "", membershipType: "life", state: "", district: "",  otherEducation: "",  
    imageFile: undefined,
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Image validation (required)
    if (!form.imageFile) {
      newErrors.imageFile = "प्रोफाइल फोटो अपलोड करना आवश्यक है";
    }
    
    // Required fields
    if (!form.memberName.trim()) newErrors.memberName = "यह क्षेत्र आवश्यक है";
    if (!form.fatherName.trim()) newErrors.fatherName = "यह क्षेत्र आवश्यक है";
    if (!form.residenceAddress.trim()) newErrors.residenceAddress = "यह क्षेत्र आवश्यक है";
    if (!form.dob) newErrors.dob = "यह क्षेत्र आवश्यक है";
    if (!form.state) newErrors.state = "यह क्षेत्र आवश्यक है";
    if (!form.district) newErrors.district = "यह क्षेत्र आवश्यक है";
    if (!form.bloodGroup) newErrors.bloodGroup = "यह क्षेत्र आवश्यक है";
    if (!form.tshirtSize) newErrors.tshirtSize = "यह क्षेत्र आवश्यक है";
    if (!form.education) newErrors.education = "यह क्षेत्र आवश्यक है";
    
    // Mobile validation (required)
    if (!form.mobile.trim()) {
      newErrors.mobile = "यह क्षेत्र आवश्यक है";
    } else if (!validationRules.mobile.regex.test(form.mobile.replace(/^\+91/, ""))) {
      newErrors.mobile = validationRules.mobile.message;
    }
    
    // Email validation (required)
    if (!form.email.trim()) {
      newErrors.email = "यह क्षेत्र आवश्यक है";
    } else if (!validationRules.email.regex.test(form.email)) {
      newErrors.email = validationRules.email.message;
    }
    
    // Optional fields (validate only if filled)
    if (form.whatsapp && !validationRules.whatsapp.regex.test(form.whatsapp.replace(/^\+91/, ""))) {
      newErrors.whatsapp = validationRules.whatsapp.message;
    }
    if (form.pan && !validationRules.pan.regex.test(form.pan)) {
      newErrors.pan = validationRules.pan.message;
    }
    if (form.aadhaar && !validationRules.aadhaar.regex.test(form.aadhaar)) {
      newErrors.aadhaar = validationRules.aadhaar.message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Real-time field validation
  const validateField = (fieldName: string, value: string): string => {
    const requiredFields = ["memberName", "fatherName", "residenceAddress", "dob", "state", "district", "bloodGroup", "tshirtSize", "education", "mobile", "email"];
    
    if (!value.trim() && requiredFields.includes(fieldName)) {
      return "यह क्षेत्र आवश्यक है";
    }

    if (fieldName === "mobile") {
      if (value.trim()) {
        if (!/^\d+$/.test(value)) {
          return "केवल संख्याएं दर्ज करें";
        }
        if (value.length < 10) {
          return "मोबाइल नंबर 10 अंकों का होना चाहिए";
        }
        if (value.length > 10) {
          return "मोबाइल नंबर 10 अंकों का होना चाहिए";
        }
        if (!validationRules.mobile.regex.test(value)) {
          return validationRules.mobile.message;
        }
      }
    } else if (fieldName === "whatsapp") {
      if (value.trim()) {
        if (!/^\d+$/.test(value)) {
          return "केवल संख्याएं दर्ज करें";
        }
        if (value.length < 10) {
          return "व्हाट्सएप नंबर 10 अंकों का होना चाहिए";
        }
        if (value.length > 10) {
          return "व्हाट्सएप नंबर 10 अंकों का होना चाहिए";
        }
        if (!validationRules.whatsapp.regex.test(value)) {
          return validationRules.whatsapp.message;
        }
      }
    } else if (fieldName === "email") {
      if (value.trim() && !validationRules.email.regex.test(value)) {
        return validationRules.email.message;
      }
    } else if (fieldName === "pan") {
      if (value.trim()) {
        const panUpper = value.toUpperCase();
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panUpper)) {
          return validationRules.pan.message;
        }
      }
    } else if (fieldName === "aadhaar") {
      if (value.trim()) {
        if (!/^\d+$/.test(value)) {
          return "केवल संख्याएं दर्ज करें";
        }
        if (value.length < 12) {
          return "आधार नंबर 12 अंकों का होना चाहिए";
        }
        if (value.length > 12) {
          return "आधार नंबर 12 अंकों का होना चाहिए";
        }
        if (!validationRules.aadhaar.regex.test(value)) {
          return validationRules.aadhaar.message;
        }
      }
    }

    return "";
  };

  // Check if field is valid (filled and no errors)
  const isFieldValid = (fieldName: string, value: string): boolean => {
    if (!value.trim()) return false;
    const error = validateField(fieldName, value);
    return error === "";
  };

  // Check if entire form is valid for submit button
  const isFormValid = (): boolean => {
    const requiredFields: (keyof FormData)[] = ["memberName", "fatherName", "residenceAddress", "dob", "state", "district", "bloodGroup", "tshirtSize", "education", "mobile", "email"];
    
    for (const field of requiredFields) {
      const value = form[field];
      if (typeof value !== "string") continue;
      if (!value.trim()) return false;
      const error = validateField(field, value);
      if (error) return false;
    }
    
    if (!form.imageFile) return false;
    
    return true;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    
    // Only allow numeric input for mobile, whatsapp, aadhaar
    if (name === "mobile" || name === "whatsapp" || name === "aadhaar" || name === "officePhone") {
      value = value.replace(/[^0-9]/g, "");
    }
    
  
    // Convert PAN to uppercase
    if (name === "pan") {
      value = value.toUpperCase();
    }
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
    setErrors({ ...errors, [name]: error });

    if (name === "state") {
      setForm({
        ...form,
        state: value,
        district: "", // reset district
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!file) {
      setForm({ ...form, imageFile: undefined });
      setImagePreview("");
      return;
    }

    // File type validation
    if (!allowedTypes.includes(file.type)) {
      setErrors({ ...errors, imageFile: "सिर्फ JPG और PNG फाइलें अनुमति हैं" });
      setForm({ ...form, imageFile: undefined });
      setImagePreview("");
      return;
    }

    // File size validation
    if (file.size > maxSize) {
      setErrors({ ...errors, imageFile: "फाइल का आकार 5MB से कम होना चाहिए" });
      setForm({ ...form, imageFile: undefined });
      setImagePreview("");
      return;
    }

    // Valid file - clear error
    setErrors({ ...errors, imageFile: "" });

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target?.result as string);
      setForm({ ...form, imageFile: file });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-[#e87722]", "bg-[#fff7f0]");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-[#e87722]", "bg-[#fff7f0]");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-[#e87722]", "bg-[#fff7f0]");
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const input = document.getElementById("imageInput") as HTMLInputElement;
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      input.files = dataTransfer.files;
      handleImageChange({ target: input } as any);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const districts = form.state ? stateDistrictData[form.state] || [] : [];

  return (

    <div className="font-sans bg-[#f5f0ea] min-h-screen">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-tr from-[#0f1d3a] via-[#1e3160] to-[#162448] py-6 px-4 text-center relative overflow-hidden ">
        <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[#f4a92a] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#f4a92a] opacity-5 pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block bg-[#f4a92a]/20 border border-[#f4a92a]/40 text-[#f4c96a] rounded-full px-4 py-1 text-xs font-extrabold tracking-wide mb-4">ओबीसी महासभा</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f4a92a] mb-1">सदस्यता</h1>
          <p className="text-[#94a8c8] text-base max-w-xl mx-auto leading-relaxed">
            हमारे आंदोलन में शामिल हों और भारत के सबसे बड़े ओबीसी सामुदायिक संगठन का हिस्सा बनें।
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 py-12">

        {/* ── Benefits ── */}
        <SectionHeader title="सदस्यता लाभ" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {benefits.map(b => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-lg p-4 flex items-start gap-4 border border-[#e8dfd0] shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#fff4df] flex items-center justify-center">
                  <Icon size={22} color="#f4a92a" />
                </div>
                <div>
                  <p className="m-0 font-bold text-sm text-[#0f1d3a]">{b.title}</p>
                  <p className="m-0 text-sm text-[#f4a92a] font-semibold">{b.subtitle}</p>
                  <p className="m-0 text-sm text-gray-600 leading-relaxed mt-1">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Offline Download Banner ── */}
        <div className="bg-gradient-to-r from-[#0f1d3a] to-[#1e3160] rounded-xl p-6 mb-14 flex items-center justify-between flex-wrap gap-4 shadow-lg">
          <div>
            <p className="m-0 font-extrabold text-white">ऑफलाइन फॉर्म डाउनलोड करें</p>
            <p className="m-0 text-[#94a8c8] text-sm">पीडीएफ फॉर्म डाउनलोड करें और सबमिट करें</p>
          </div>
          <button className="inline-flex items-center gap-3 bg-[#f4a92a] text-[#0f1d3a] px-5 py-3 rounded-lg font-extrabold text-sm shadow-md hover:opacity-95">
            <Download size={17} />
            पीडीएफ फॉर्म डाउनलोड करें
          </button>
        </div>

        {/* ── Online Registration ── */}
        <SectionHeader title="ऑनलाइन पंजीकरण" />

        {submitted ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e8dfd0]">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fff4df] flex items-center justify-center mx-auto mb-5">
              <BadgeCheck size={36} color="#f4a92a" />
            </div>
            <h3 className="m-0 mb-2 text-xl font-extrabold text-[#0f1d3a]">पंजीकरण सफल!</h3>
            <p className="text-gray-500 mb-7">आपका आवेदन प्राप्त हो गया है। जल्द ही संपर्क किया जाएगा।</p>
            <button onClick={() => { setSubmitted(false); }} className="bg-[#0f1d3a] text-white px-6 py-3 rounded-lg font-semibold">नया पंजीकरण करें</button>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 md:p-10 shadow-lg">
            <form onSubmit={handleSubmit}>

              {/* Image Upload Section */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <label className="text-sm font-semibold text-[#0f2056] mb-4 block">प्रोफाइल फोटो <R /></label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
                    errors.imageFile
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-gray-50 hover:border-[#e87722] hover:bg-[#fff7f0]"
                  }`}
                >
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                  
                  <div className="flex flex-col items-center gap-4">
                    {imagePreview ? (
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#e87722] shadow-lg bg-white flex items-center justify-center">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-[#0f2056] mb-2">
                            {form.imageFile?.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              const input = document.getElementById("imageInput") as HTMLInputElement;
                              input.click();
                            }}
                            className="text-sm text-[#e87722] hover:text-[#d46a18] font-semibold"
                          >
                            फोटो बदलें
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[#fff4df] flex items-center justify-center mx-auto mb-3 border-2 border-[#e87722]">
                          <svg
                            className="w-8 h-8 text-[#e87722]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-[#0f2056] mb-2">
                          फोटो अपलोड करें या ड्रैग करें
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                          JPG या PNG (5MB तक)
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            const input = document.getElementById("imageInput") as HTMLInputElement;
                            input.click();
                          }}
                          className="inline-block bg-[#e87722] hover:bg-[#d46a18] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          फाइल चुनें
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Clickable area overlay */}
                  <label htmlFor="imageInput" className="absolute inset-0 cursor-pointer" />
                </div>
                
                {errors.imageFile && (
                  <p className="text-red-500 text-xs mt-2">⚠️ {errors.imageFile}</p>
                )}
              </div>

              {/* 1 & 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">1. सदस्य का नाम <R /></label>
                  <input 
                    name="memberName" 
                    value={form.memberName} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="श्री/श्रीमति/" 
                    required 
                    className={`w-full border rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:ring-4 transition ${errors.memberName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.memberName} />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">2. पिता/पति का नाम <R /></label>
                  <input 
                    name="fatherName" 
                    value={form.fatherName} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="श्री" 
                    required 
                    className={`w-full border rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:ring-4 transition ${errors.fatherName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.fatherName} />
                </div>
              </div>

              {/* 3 & 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">3. व्यवसाय की प्रकृति</label>
                  <input name="businessNature" value={form.businessNature} onChange={handleChange} placeholder="व्यापार, नौकरी, सेवा..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">4. संगठन में स्थिति</label>
                  <input name="organizationPosition" value={form.organizationPosition} onChange={handleChange} placeholder="सदस्य, पदाधिकारी..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20 transition" />
                </div>
              </div>

              {/* State & District */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">राज्य <R /></label>
                  <select name="state" value={form.state} onChange={handleChange} onBlur={handleBlur} required className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.state ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`}>
                    <option value="">-- राज्य चुनें --</option>
                    {Object.keys(stateDistrictData).sort().map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ErrorText message={errors.state} />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">जिला <R /></label>
                  <select name="district" value={form.district} onChange={handleChange} onBlur={handleBlur} required disabled={!form.state}
                    className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-4 transition ${!form.state ? 'border-gray-200 bg-gray-50 text-gray-400' : 'border-gray-200 bg-white text-[#1a1a2e]'} ${errors.district ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'focus:border-[#e87722] focus:ring-[#e87722]/20'}`}>
                    <option value="">{form.state ? "-- जिला चुनें --" : "-- पहले राज्य चुनें --"}</option>
                    {districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <ErrorText message={errors.district} />
                </div>
              </div>

              {/* 5 */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">5. निवास का पता <R /></label>
                <textarea 
                  name="residenceAddress" 
                  value={form.residenceAddress} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  placeholder="पूरा निवास पता लिखें (गली, शहर, जिला, पिन कोड)" 
                  rows={3} 
                  required
                  className={`w-full border rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:ring-4 transition ${errors.residenceAddress ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                />
                <ErrorText message={errors.residenceAddress} />
              </div>

              {/* 6 */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">6. व्यवसाय / ऑफिस का पता</label>
                <textarea 
                  name="officeAddress" 
                  value={form.officeAddress} 
                  onChange={handleChange} 
                  placeholder="ऑफिस या व्यवसाय का पूरा पता लिखें" 
                  rows={3} 
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" 
                />
              </div>

              {/* 7 Contact */}
              <div className="mb-2"><label className="text-sm font-semibold text-[#0f2056] mb-1 block">7. सम्पर्क सूत्र</label></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">निवास</label>
                  <input name="residencePhone" value={form.residencePhone} onChange={handleChange} placeholder="दूरभाष नंबर" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" /></div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">ऑफिस</label>
                  <input name="officePhone" value={form.officePhone} onChange={handleChange} placeholder="ऑफिस नंबर"  inputMode="numeric"
  pattern="[0-9]*" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">मोबाइल <R /></label>
                  <input 
                    name="mobile" 
                    value={form.mobile} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    placeholder="+91 या 10 अंक" 
                    type=""
                    required 
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.mobile ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : isFieldValid("mobile", form.mobile) ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.mobile} isValid={isFieldValid("mobile", form.mobile)} />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">व्हाट्सएप</label>
                  <input 
                    name="whatsapp" 
                    value={form.whatsapp} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    placeholder="व्हाट्सएप नंबर (वैकल्पिक)" 
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.whatsapp ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : isFieldValid("whatsapp", form.whatsapp) ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.whatsapp} isValid={isFieldValid("whatsapp", form.whatsapp)} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">ई-मेल <R /></label>
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="आपका@ईमेल.कॉम" 
                    required 
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : isFieldValid("email", form.email) ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.email} isValid={isFieldValid("email", form.email)} />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">पैन नंबर (वैकल्पिक)</label>
                  <input 
                    name="pan" 
                    value={form.pan} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    placeholder="ABCDE1234F" 
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.pan ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : isFieldValid("pan", form.pan) ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                  />
                  <ErrorText message={errors.pan} isValid={isFieldValid("pan", form.pan)} />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-500 mb-1 block">आधार नंबर (वैकल्पिक)</label>
                <input 
                  name="aadhaar" 
                  value={form.aadhaar} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={12}
                  placeholder="12 अंकों का आधार नंबर" 
                  className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.aadhaar ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : isFieldValid("aadhaar", form.aadhaar) ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`} 
                />
                <ErrorText message={errors.aadhaar} isValid={isFieldValid("aadhaar", form.aadhaar)} />
              </div>

              {/* 8 */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">8. शैक्षणिक योग्यता एवं प्रशिक्षण / कंप्यूटर उपलब्धि <R /></label>
                <select 
                  name="education" 
                  value={form.education} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.education ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`}
                >
                  <option value="">-- योग्यता चुनें --</option>
                  {educationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>


                {/* Other input show when "अन्य" selected */}
{form.education === "अन्य" && (
  <input
    type="text"
    name="otherEducation"
    value={form.otherEducation || ""}
    onChange={handleChange}
    onBlur={handleBlur}
    required
    placeholder="अपनी योग्यता लिखें"
    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white mt-3 focus:outline-none focus:ring-4 transition ${
      errors.otherEducation
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        : "border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20"
    }`}
  />
)}
                <ErrorText message={errors.education} />
              </div>

              {/* 9 & 10 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

{/* DOB */}
<div className="flex flex-col">
  <label className="text-sm font-semibold text-[#0f2056] mb-1">
    9. जन्म दिनांक <R />
  </label>

  <input 
    type="date" 
    name="dob" 
    value={form.dob} 
    onChange={handleChange}
    onBlur={handleBlur}
    max={today}   // ✅ future date disabled
    required 
    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${
      errors.dob 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
        : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'
    }`}
  />

  <ErrorText message={errors.dob} />
</div>


{/* Marriage Date */}
<div className="flex flex-col">
  <label className="text-sm font-semibold text-[#0f2056] mb-1">
    10. विवाह वर्षगांठ
  </label>

  <input 
    type="date" 
    name="marriageDate" 
    value={form.marriageDate} 
    onChange={handleChange}
    max={today}   // ✅ future date disabled
    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" 
  />

</div>

</div>

              {/* 11 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">11. रक्त समूह <R /></label>
                  <select 
                    name="bloodGroup" 
                    value={form.bloodGroup} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.bloodGroup ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`}
                  >
                    <option value="">-- रक्त समूह चुनें --</option>
                    {bloodGroupOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ErrorText message={errors.bloodGroup} />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#0f2056] mb-1">टी-शर्ट साइज <R /></label>
                  <select 
                    name="tshirtSize" 
                    value={form.tshirtSize} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-4 transition ${errors.tshirtSize ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#e87722] focus:ring-[#e87722]/20'}`}
                  >
                    <option value="">-- साइज चुनें --</option>
                    {tshirtSizeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ErrorText message={errors.tshirtSize} />
                </div>
              </div>

              {/* 12 */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">12. अन्य सामाजिक एवं धार्मिक गतिविधियों के बारे में विवरण</label>
                <textarea name="socialWork" value={form.socialWork} onChange={handleChange} placeholder="सामाजिक/धार्मिक गतिविधियों का विवरण लिखें" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
              </div>

              {/* 13 */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">13. अन्य कोई विशेष उपलब्धि</label>
                <textarea name="specialAchievement" value={form.specialAchievement} onChange={handleChange} placeholder="कोई विशेष उपलब्धि हो तो लिखें" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white resize-y min-h-[80px] focus:outline-none focus:border-[#e87722] focus:ring-4 focus:ring-[#e87722]/20" />
              </div>

              {/* Membership Radio */}
              <div className="mb-7">
                <label className="text-sm font-semibold text-[#0f2056] mb-1 block">सदस्यता प्रकार <R /></label>
                <div className="flex gap-3 flex-wrap mt-2">
                  {membershipOptions.map(opt => (
                    <label key={opt.id} className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer select-none text-sm font-semibold transition ${form.membershipType === opt.id ? 'border-[#e87722] bg-[#fff7f0] text-[#e87722]' : 'border-gray-200 text-[#0f2056]'}`}>
                      <input type="radio" name="membershipType" value={opt.id} checked={form.membershipType === opt.id} onChange={handleChange} className="accent-[#e87722]" />
                      {opt.label} <span className="text-[#e87722] font-bold">{opt.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 flex-wrap">
                <button 
                  type="submit" 
                  disabled={!isFormValid()}
                  className={`flex-1 min-w-[200px] text-white rounded-lg py-3 font-bold transition ${
                    isFormValid()
                      ? "bg-[#e87722] hover:bg-[#d46a18]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  पंजीकरण जमा करें
                </button>
                <a href="#" className="inline-flex items-center gap-2 border-2 border-[#e87722] text-[#e87722] hover:bg-[#e87722] hover:text-white rounded-lg py-3 px-5 font-bold"><Download size={16} /> फॉर्म डाउनलोड करें</a>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const SectionHeader = ({ title }) => (
  <div className="text-center mb-6">
    <h2 className="m-0 font-extrabold text-lg text-[#0f1d3a]">{title}</h2>
    <div className="w-12 h-1 bg-[#f4a92a] rounded mx-auto mt-2" />
  </div>
);

const R = () => <span className="text-[#e87722]">*</span>;

const ErrorText = ({ message, isValid }: { message?: string; isValid?: boolean }) => {
  if (message) {
    return (
      <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
        <span>✗</span>
        <span>{message}</span>
      </div>
    );
  }
  if (isValid) {
    return (
      <div className="flex items-center gap-1 text-green-600 text-xs mt-1">
        <span>✓</span>
        <span>सही है</span>
      </div>
    );
  }
  return null;
};