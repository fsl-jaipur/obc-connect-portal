import {
    GraduationCap,
    Stethoscope,
    Car,
    UtensilsCrossed,
    Users,
    CheckCircle2,
  } from "lucide-react";
  
  const objectives = [
    {
      icon: Users,
      title: "सभी वर्गों के लिए छूट",
      description:
        "छात्र-छात्राओं, युवाओं, महिलाओं, वयस्क और प्रौढ़ अवस्था वाले सभी वर्गों में विभिन्न जरूरतमंद क्षेत्रों में 10 से 30 प्रतिशत की अतिरिक्त छूट दिलाना।",
    },
    {
      icon: GraduationCap,
      title: "शिक्षा में छूट",
      description:
        "स्कूल, महाविद्यालय और कोचिंग की फीस में छूट दिलाने का प्रयास।",
    },
    {
      icon: Stethoscope,
      title: "स्वास्थ्य सेवा में छूट",
      description: "हॉस्पिटलों में इलाज की लागत में छूट का प्रावधान।",
    },
    {
      icon: Car,
      title: "वाहन सेवा में छूट",
      description:
        "चार पहिया और दो पहिया वाहन की सर्विस के शुल्क में छूट दिलाना।",
    },
    {
      icon: UtensilsCrossed,
      title: "होटल/रेस्टोरेंट में छूट",
      description: "होटल और रेस्टोरेंट में सदस्यों के लिए विशेष छूट।",
    },
  ];
  
  const AllObjectives = () => {
    return (
      <div className="min-h-screen py-20 px-4 bg-cream-pattern">
        
        <h1 className="text-3xl font-bold text-center mb-10">
          सभी उद्देश्य
        </h1>
  
        <div className="max-w-4xl mx-auto space-y-5">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="flex gap-5 bg-card rounded-xl p-6 border shadow"
            >
              <div className="w-14 h-14 bg-green-500 flex items-center justify-center rounded-xl">
                <obj.icon className="h-7 w-7 text-white" />
              </div>
  
              <div>
                <h3 className="text-lg font-bold flex gap-2 items-center">
                  <CheckCircle2 className="text-green-500" />
                  {obj.title}
                </h3>
  
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    );
  };
  
  export default AllObjectives;
  