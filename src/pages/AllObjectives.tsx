import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  GraduationCap,
  Stethoscope,
  Car,
  UtensilsCrossed,
  Users,
  CheckCircle2,
  Briefcase,
  Home,
  HeartHandshake,
  BookOpenCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";


// ✅ Type define for objective
interface Objective {
  icon: LucideIcon;
  title: string;
  description: string;
}


// ✅ Data with type
const objectives: Objective[] = [
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
    description:
      "हॉस्पिटलों में इलाज की लागत में छूट का प्रावधान।",
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
    description:
      "होटल और रेस्टोरेंट में सदस्यों के लिए विशेष छूट।",
  },
  {
    icon: Briefcase,
    title: "रोजगार सहायता",
    description:
      "युवाओं को रोजगार और स्वरोजगार के अवसर उपलब्ध कराने में सहायता।",
  },
  {
    icon: Home,
    title: "आवास सहायता",
    description:
      "जरूरतमंद परिवारों को आवास और रहने की सुविधा में सहायता।",
  },
  {
    icon: HeartHandshake,
    title: "सामाजिक सहयोग",
    description:
      "जरूरतमंद लोगों को सामाजिक और आर्थिक सहयोग प्रदान करना।",
  },
  {
    icon: BookOpenCheck,
    title: "छात्रवृत्ति सहायता",
    description:
      "छात्रों को छात्रवृत्ति और शिक्षा सहायता प्रदान करना।",
  },
];


const AllObjectives: React.FC = () => {

  // ✅ typed ref
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });


  return (
    <section
      ref={ref}
      className="py-20 bg-cream-pattern min-h-screen"
    >

      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-1.5 bg-green-india-light text-secondary rounded-full text-sm font-semibold mb-4">
            सदस्यता अभियान
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            सभी <span className="text-secondary">उद्देश्य</span>
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            ओ.बी.सी. महासभा के सदस्य बनकर इन सभी लाभों का फायदा उठाएं
          </p>

        </motion.div>


        {/* Objectives list */}
        <div className="max-w-4xl mx-auto space-y-5">

          {objectives.map((obj, index) => {

            const Icon = obj.icon;

            return (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  flex gap-5
                  bg-card
                  rounded-xl
                  p-6
                  border border-border
                  hover:border-secondary/30
                  shadow-sm
                  hover:shadow-lg
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    shrink-0
                    w-14 h-14
                    rounded-xl
                    bg-gradient-green
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Icon className="h-7 w-7 text-secondary-foreground" />
                </div>


                {/* Content */}
                <div className="flex-1">

                  <h3 className="
                    text-lg
                    font-heading
                    font-bold
                    text-foreground
                    mb-2
                    flex items-center gap-2
                  ">

                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />

                    {obj.title}

                  </h3>


                  <p className="text-muted-foreground leading-relaxed">
                    {obj.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default AllObjectives;