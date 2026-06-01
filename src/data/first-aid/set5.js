const set5 = [
  {
    id: 1,
    question: "Crush injury ke baad patient ko monitor karte waqt sabse dangerous complication kya ho sakti hai?",
    options: ["Hypothermia", "Crush syndrome", "Otitis media", "Conjunctivitis"],
    answer: "Crush syndrome",
    explanation: "Crush syndrome me muscle breakdown products blood me release hote hain. Isse kidney failure aur electrolyte imbalance ho sakta hai.",
    topic: "Trauma Care",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Severe burn patient me airway burn ka sabse important indicator kya hai?",
    options: ["Leg pain", "Nail discoloration", "Abdominal distension", "Facial burns aur soot around mouth"],
    answer: "Facial burns aur soot around mouth",
    explanation: "Face burn aur mouth ke aas-paas soot inhalation injury ka warning sign hai. Airway edema rapidly develop ho sakta hai.",
    topic: "Burn Management",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "CPR ke dauran pulse absent aur patient unresponsive ho to priority kya hai?",
    options: ["High-quality chest compressions", "Patient ko bithana", "Water dena", "Temperature lena"],
    answer: "High-quality chest compressions",
    explanation: "Cardiac arrest me effective chest compressions survival improve karti hain. Delay harmful ho sakta hai.",
    topic: "CPR",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Heat stroke me organ damage ka primary reason kya hai?",
    options: ["Low glucose", "Mild dehydration", "Extremely high body temperature", "Ear infection"],
    answer: "Extremely high body temperature",
    explanation: "Heat stroke me severe hyperthermia cells aur organs ko damage kar sakti hai. Rapid cooling zaruri hota hai.",
    topic: "Heat Emergencies",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Open fracture me infection risk kam karne ke liye kya karna chahiye?",
    options: ["Warm oil lagana", "Sterile dressing apply karna", "Massage karna", "Bone ko push karna"],
    answer: "Sterile dressing apply karna",
    explanation: "Sterile dressing wound contamination kam karti hai. Bone ko andar push karna avoid karna chahiye.",
    topic: "Fracture Care",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Hypoglycemia patient me immediate first aid kya hai agar patient conscious ho?",
    options: ["Fast-acting glucose dena", "Insulin dena", "Antibiotic dena", "Exercise karwana"],
    answer: "Fast-acting glucose dena",
    explanation: "Conscious hypoglycemic patient ko jaldi absorb hone wali sugar deni chahiye. Insulin condition ko aur worsen karega.",
    topic: "Medical Emergency",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Embedded object eye me ho to kya avoid karna chahiye?",
    options: ["Eye shield lagana", "Refer karna", "Observation", "Object remove karne ki koshish"],
    answer: "Object remove karne ki koshish",
    explanation: "Embedded object nikalne se permanent eye damage ho sakta hai. Eye ko stabilize karke refer karna chahiye.",
    topic: "Eye Trauma",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Anaphylaxis me sabse pehle kis system par life-threatening effect hota hai?",
    options: ["Digestive system", "Urinary system", "Respiratory system", "Reproductive system"],
    answer: "Respiratory system",
    explanation: "Airway edema aur bronchospasm severe breathing difficulty create kar sakte hain. Isliye epinephrine priority hai.",
    topic: "Anaphylaxis",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Head injury ke baad patient ko repeatedly sone dena kyon risky ho sakta hai?",
    options: ["Neurological deterioration miss ho sakti hai", "BP badh jata hai", "Weight kam ho jata hai", "Pulse slow ho jati hai"],
    answer: "Neurological deterioration miss ho sakti hai",
    explanation: "Frequent neurological assessment zaruri hoti hai. Excessive sleep worsening signs ko hide kar sakti hai.",
    topic: "Head Injury",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Shock patient me cold clammy skin kis mechanism ki wajah se hoti hai?",
    options: ["Peripheral vasoconstriction", "Liver enlargement", "Hyperglycemia", "Hyperventilation only"],
    answer: "Peripheral vasoconstriction",
    topic: "Shock",
    difficulty: "hard",
    explanation: "Body blood ko vital organs ki taraf divert karti hai. Isse skin thandi aur clammy ho sakti hai."
  },
  {
    id: 11,
    question: "Tension pneumothorax ka classic sign kya ho sakta hai?",
    options: ["Mild itching", "Diarrhea", "Normal breathing", "Tracheal deviation"],
    answer: "Tracheal deviation",
    explanation: "Tension pneumothorax ek life-threatening emergency hai. Tracheal deviation advanced sign mana jata hai.",
    topic: "Chest Trauma",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Poison inhalation case me sabse pehla intervention kya hai?",
    options: ["Fresh air me le jana", "Milk pilana", "Massage karna", "Walking karwana"],
    answer: "Fresh air me le jana",
    explanation: "Source se remove karna aur fresh air provide karna priority hai. Yeh further exposure rokta hai.",
    topic: "Poisoning",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Seizure ke dauran patient ko forcefully hold karna kyon galat hai?",
    options: ["BP badhta hai", "Pulse kam hoti hai", "Injury risk badhta hai", "Fever ho jata hai"],
    answer: "Injury risk badhta hai",
    explanation: "Restraint se musculoskeletal injury ka risk badh jata hai. Safety provide karna better approach hai.",
    topic: "Neurological Emergency",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Snake bite victim ko calm rakhna kyon important hai?",
    options: ["Pain increase karne ke liye", "Venom spread slow karne ke liye", "BP badhane ke liye", "Fever rokne ke liye"],
    answer: "Venom spread slow karne ke liye",
    explanation: "Anxiety aur movement circulation badha sakte hain. Calm rehne se venom spread relatively slow ho sakta hai.",
    topic: "Bites and Stings",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Electrical injury ke baad ECG monitoring kyon important hai?",
    options: ["Vision improve karne ke liye", "Weight assess karne ke liye", "Pain assess karne ke liye", "Arrhythmia detect karne ke liye"],
    answer: "Arrhythmia detect karne ke liye",
    explanation: "Electrical current heart rhythm disturb kar sakta hai. ECG monitoring serious complications identify karti hai.",
    topic: "Electrical Injury",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Frostbite area ko direct heat source se warm kyon nahi karna chahiye?",
    options: ["Color change hota hai", "Pulse badhti hai", "Burn injury ho sakti hai", "Weight badhta hai"],
    answer: "Burn injury ho sakti hai",
    explanation: "Frozen tissue sensitive hota hai. Direct heat additional tissue damage kar sakti hai.",
    topic: "Cold Emergencies",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Drowning victim me survival ka sabse important factor kya hai?",
    options: ["Early oxygenation aur ventilation", "Hair color", "Body weight", "Age only"],
    answer: "Early oxygenation aur ventilation",
    explanation: "Drowning me hypoxia main problem hai. Early airway support outcome improve karta hai.",
    topic: "Drowning",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Asthma attack me patient ko kis position me bithana helpful hota hai?",
    options: ["Flat supine", "Upright position", "Trendelenburg", "Prone"],
    answer: "Upright position",
    explanation: "Upright position breathing effort ko improve karti hai aur lung expansion me madad karti hai.",
    topic: "Respiratory Emergency",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Mass casualty triage me green tag kis patient ko diya jata hai?",
    options: ["Immediate care", "Delayed care", "Minor injury", "Deceased"],
    answer: "Minor injury",
    explanation: "Green tag walking wounded ya minor injury patients ke liye use hota hai.",
    topic: "Disaster First Aid",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Recovery position ka ek major benefit kya hai?",
    options: ["BP increase", "Temperature increase", "Pain relief", "Aspiration risk kam karna"],
    answer: "Aspiration risk kam karna",
    explanation: "Recovery position airway protection aur secretion drainage me help karti hai.",
    topic: "Emergency Positioning",
    difficulty: "medium"
  }
];

export default set5;