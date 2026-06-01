const set3 = [
  {
    id: 1,
    question: "Road accident ke baad patient unconscious hai aur pulse present hai, lekin breathing absent hai. Sabse pehla intervention kya hoga?",
    options: [
      "Recovery position",
      "Rescue breathing start karna",
      "IV Fluid lagana",
      "Patient ko baithana"
    ],
    answer: "Rescue breathing start karna",
    explanation: "Pulse present hone par immediate chest compression zaruri nahi hoti. Priority artificial ventilation provide karna hai. Recovery position tab use hoti hai jab patient breathing kar raha ho.",
    topic: "CPR",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Open fracture me first-aid ka sabse important nursing action kya hai?",
    options: [
      "Bone ko andar push karna",
      "Massage karna",
      "Sterile dressing se cover karna",
      "Heat apply karna"
    ],
    answer: "Sterile dressing se cover karna",
    explanation: "Open fracture me infection ka risk bahut high hota hai. Sterile dressing wound protection deti hai. Bone ko andar push karna tissue damage badha sakta hai.",
    topic: "Fracture Care",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Burn patient me Rule of Nine ka primary purpose kya hai?",
    options: [
      "Pain assess karna",
      "Burn depth assess karna",
      "Burn surface area estimate karna",
      "Infection detect karna"
    ],
    answer: "Burn surface area estimate karna",
    explanation: "Rule of Nine burn ke percentage area ka estimation karta hai. Isse fluid replacement aur severity assessment me madad milti hai.",
    topic: "Burn Management",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Severe allergic reaction me epinephrine kis route se commonly diya jata hai?",
    options: [
      "Oral",
      "Subcutaneous",
      "Intradermal",
      "Intramuscular"
    ],
    answer: "Intramuscular",
    explanation: "Anaphylaxis me IM epinephrine fastest aur recommended route hai. Oral route emergency situation me effective nahi hota.",
    topic: "Anaphylaxis",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Head injury patient me vomiting repeatedly ho rahi hai. Yeh kis baat ka warning sign ho sakta hai?",
    options: [
      "Increased intracranial pressure",
      "Normal recovery",
      "Dehydration only",
      "Minor anxiety"
    ],
    answer: "Increased intracranial pressure",
    explanation: "Repeated vomiting head injury ke baad serious neurological deterioration indicate kar sakti hai. Immediate assessment zaruri hai.",
    topic: "Head Injury",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Heat exhaustion me patient ki skin aam taur par kaisi hoti hai?",
    options: [
      "Dry aur hot",
      "Cold aur cyanosed",
      "Cool aur moist",
      "Burned appearance"
    ],
    answer: "Cool aur moist",
    explanation: "Heat exhaustion me excessive sweating hoti hai, isliye skin cool aur moist rehti hai. Heat stroke me skin aksar hot aur dry ho sakti hai.",
    topic: "Heat Emergencies",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Poisoning case me poison container ko hospital le jane ka main reason kya hai?",
    options: [
      "Legal record ke liye",
      "Poison identify karne ke liye",
      "Patient ko dikhane ke liye",
      "Disposal ke liye"
    ],
    answer: "Poison identify karne ke liye",
    explanation: "Poison ki identification se specific treatment aur antidote selection me madad milti hai. Isliye container valuable evidence hota hai.",
    topic: "Poisoning",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Electrical injury ke baad sabse pehle kis system ko closely assess karna chahiye?",
    options: [
      "Digestive system",
      "Urinary system",
      "Cardiovascular system",
      "Reproductive system"
    ],
    answer: "Cardiovascular system",
    explanation: "Electrical current cardiac arrhythmias cause kar sakta hai. Isliye heart monitoring bahut important hoti hai.",
    topic: "Electrical Injury",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Seizure ke dauran patient ke sir ke niche soft support rakhne ka purpose kya hai?",
    options: [
      "Head injury prevent karna",
      "Seizure rokna",
      "Breathing increase karna",
      "BP control karna"
    ],
    answer: "Head injury prevent karna",
    explanation: "Seizure ke dauran uncontrolled movements se head injury ho sakti hai. Soft support protective measure hai.",
    topic: "Neurological Emergency",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Chest compression ke dauran adult patient me recommended depth lagbhag kitni hoti hai?",
    options: [
      "1 cm",
      "2 cm",
      "3 cm",
      "5–6 cm"
    ],
    answer: "5–6 cm",
    explanation: "Adequate perfusion ke liye compression depth 5–6 cm recommended hai. Shallow compression effective circulation nahi deti.",
    topic: "CPR",
    difficulty: "hard"
  },

  {
    id: 11,
    question: "Snake bite victim ko zyada chalne se kyon roka jata hai?",
    options: [
      "Venom spread kam karne ke liye",
      "Pain badhane ke liye",
      "BP badhane ke liye",
      "Temperature maintain karne ke liye"
    ],
    answer: "Venom spread kam karne ke liye",
    explanation: "Movement lymphatic circulation badhata hai aur venom jaldi spread ho sakta hai. Immobilization recommended hai.",
    topic: "Bites and Stings",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Eye chemical injury me irrigation ke liye sabse suitable fluid kya hai?",
    options: [
      "Normal saline",
      "Alcohol",
      "Hydrogen peroxide",
      "Oil"
    ],
    answer: "Normal saline",
    explanation: "Normal saline safe aur effective irrigation fluid hai. Chemicals ko dilute aur remove karne me madad karta hai.",
    topic: "Eye Injury",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Shock ke early sign me sabse common finding kya hoti hai?",
    options: [
      "Bradycardia",
      "Warm skin",
      "Tachycardia",
      "Slow breathing"
    ],
    answer: "Tachycardia",
    explanation: "Body blood pressure maintain karne ke liye heart rate badhati hai. Tachycardia shock ka early compensatory sign hai.",
    topic: "Shock",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Fracture splinting karte waqt kis area ko immobilize karna chahiye?",
    options: [
      "Sirf fracture site",
      "Fracture ke upar aur niche ke joints",
      "Sirf distal joint",
      "Sirf proximal joint"
    ],
    answer: "Fracture ke upar aur niche ke joints",
    explanation: "Proper immobilization ke liye fracture ke dono side ke joints stabilize kiye jate hain. Isse movement aur damage kam hota hai.",
    topic: "Fracture Care",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Drowning victim me sabse bada immediate threat kya hota hai?",
    options: [
      "Hypoxia",
      "Fracture",
      "Hyperglycemia",
      "Anemia"
    ],
    answer: "Hypoxia",
    explanation: "Drowning me oxygen deficiency sabse pehla aur serious concern hota hai. Airway aur breathing support priority hai.",
    topic: "Drowning",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Frostbite area ko rub karna kyon avoid kiya jata hai?",
    options: [
      "Color change hota hai",
      "Tissue damage badh sakta hai",
      "Pain kam ho jata hai",
      "Temperature badh jata hai"
    ],
    answer: "Tissue damage badh sakta hai",
    explanation: "Frozen tissues bahut fragile hote hain. Rubbing se cellular injury aur necrosis ka risk badhta hai.",
    topic: "Cold Emergencies",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Severe bleeding patient me pale skin ka major reason kya hota hai?",
    options: [
      "Peripheral vasoconstriction",
      "Fever",
      "Infection",
      "Liver disease"
    ],
    answer: "Peripheral vasoconstriction",
    explanation: "Body vital organs ko blood supply maintain karne ke liye peripheral vessels constrict karti hai. Isse skin pale dikh sakti hai.",
    topic: "Bleeding Control",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Airway obstruction wale conscious adult me abdominal thrusts ka purpose kya hai?",
    options: [
      "Lung expansion",
      "BP increase",
      "Foreign body expel karna",
      "Pulse improve karna"
    ],
    answer: "Foreign body expel karna",
    explanation: "Abdominal thrusts airway pressure create karte hain jo obstructing object ko bahar nikalne me madad karta hai.",
    topic: "Airway Emergency",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Disaster triage me red tag kis patient ko diya jata hai?",
    options: [
      "Minor injury",
      "Delayed treatment",
      "Immediate treatment required",
      "Deceased patient"
    ],
    answer: "Immediate treatment required",
    topic: "Disaster First Aid",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Recovery position ka main objective kya hai?",
    options: [
      "Temperature control",
      "Pain relief",
      "BP increase",
      "Airway patency maintain karna"
    ],
    answer: "Airway patency maintain karna",
    explanation: "Recovery position airway open rakhti hai aur aspiration risk kam karti hai. Unconscious breathing patient ke liye recommended hai.",
    topic: "Emergency Positioning",
    difficulty: "medium"
  }
];

export default set3;