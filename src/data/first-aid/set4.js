const set4 = [
  {
    id: 1,
    question: "Airway obstruction wale patient me stridor kis baat ka sanket hai?",
    options: ["Normal airflow", "Cardiac problem", "Mild dehydration", "Upper airway narrowing"],
    answer: "Upper airway narrowing",
    explanation: "Stridor upper airway obstruction ka important sign hai. Yeh emergency assessment demand karta hai.",
    topic: "Airway Management",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Burn patient me fluid resuscitation ki zarurat sabse zyada kis wajah se padti hai?",
    options: ["Plasma loss aur fluid shift", "Fever", "Pain", "Anxiety"],
    answer: "Plasma loss aur fluid shift",
    explanation: "Burns me fluid shift aur plasma loss hota hai jo hypovolemia ka risk badhata hai.",
    topic: "Burn Management",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Heat stroke ka sabse serious indicator kya hai?",
    options: ["Heavy sweating", "Mild headache", "Altered consciousness", "Muscle cramps"],
    answer: "Altered consciousness",
    explanation: "CNS dysfunction heat stroke ki hallmark finding hai.",
    topic: "Heat Emergencies",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Fracture site ko unnecessary move karne ka major risk kya hai?",
    options: ["Skin dryness", "Further tissue damage", "Weight gain", "Mild fever"],
    answer: "Further tissue damage",
    explanation: "Movement se nerves, vessels aur tissues ko extra damage ho sakta hai.",
    topic: "Fracture Care",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Drowning victim me sabse pehla assessment kya hoga?",
    options: ["Temperature", "Blood sugar", "Breathing status", "Weight"],
    answer: "Breathing status",
    explanation: "Drowning me primary concern hypoxia hota hai.",
    topic: "Drowning",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Shock ka early compensatory sign kya hai?",
    options: ["Tachycardia", "Bradycardia", "Warm skin", "Slow respiration"],
    answer: "Tachycardia",
    explanation: "Perfusion maintain karne ke liye heart rate badhta hai.",
    topic: "Shock",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Anaphylaxis me airway compromise ka common cause kya hai?",
    options: ["Hyperglycemia", "Laryngeal edema", "Anemia", "Dehydration"],
    answer: "Laryngeal edema",
    explanation: "Laryngeal swelling airway obstruction ka major reason hai.",
    topic: "Anaphylaxis",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Head injury ke baad unequal pupils kis condition ka warning sign hain?",
    options: ["Normal recovery", "Stress", "Dehydration", "Raised intracranial pressure"],
    answer: "Raised intracranial pressure",
    explanation: "Unequal pupils neurological deterioration indicate kar sakte hain.",
    topic: "Head Injury",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Poison ingestion ke baad vomiting induce karna kyon avoid kiya jata hai?",
    options: ["Aspiration aur injury ka risk", "BP badhta hai", "Pulse slow hoti hai", "Weight kam hota hai"],
    answer: "Aspiration aur injury ka risk",
    explanation: "Kuch poisons aspiration aur tissue injury kar sakte hain.",
    topic: "Poisoning",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "CPR me interruptions minimum rakhne ka main reason kya hai?",
    options: ["Pain kam karna", "Rib fracture rokna", "Pulse slow karna", "Coronary perfusion maintain karna"],
    answer: "Coronary perfusion maintain karna",
    explanation: "Continuous compressions effective circulation maintain karti hain.",
    topic: "CPR",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Electrical injury ke baad sabse serious hidden complication kya ho sakti hai?",
    options: ["Hair fall", "Cardiac arrhythmia", "Skin itching", "Mild fever"],
    answer: "Cardiac arrhythmia",
    explanation: "Electrical current heart rhythm disturb kar sakta hai.",
    topic: "Electrical Injury",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Open chest wound me kaunsi dressing recommended hai?",
    options: ["Dry cotton", "Warm towel", "Occlusive dressing", "Elastic wrap"],
    answer: "Occlusive dressing",
    explanation: "Occlusive dressing air entry ko control karne me help karti hai.",
    topic: "Chest Trauma",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Hypothermia patient ko handle karte waqt kya dhyan rakhna chahiye?",
    options: ["Gentle handling", "Rapid exercise", "Cold bath", "Aggressive massage"],
    answer: "Gentle handling",
    explanation: "Rough handling se arrhythmia ka risk badh sakta hai.",
    topic: "Cold Emergencies",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Eye me embedded object hone par kya karna chahiye?",
    options: ["Remove karna", "Push karna", "Wash aggressively", "Shield aur refer karna"],
    answer: "Shield aur refer karna",
    explanation: "Object remove karne ki koshish injury ko aur badha sakti hai.",
    topic: "Eye Trauma",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Seizure ke dauran sabse important nursing action kya hai?",
    options: ["Mouth me spoon dalna", "Patient ko pakadna", "Injury se protect karna", "Paani pilana"],
    answer: "Injury se protect karna",
    explanation: "Patient safety seizure management ka main goal hai.",
    topic: "Neurological Emergency",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Snake bite victim me limb ko kaise rakhna chahiye?",
    options: ["Heart se upar", "Massage karte hue", "Immobilized position me", "Lagatar move karte hue"],
    answer: "Immobilized position me",
    explanation: "Immobilization venom spread ko slow kar sakti hai.",
    topic: "Bites and Stings",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Mass casualty triage me Red tag kis patient ko diya jata hai?",
    options: ["Immediate treatment required", "Minor injury", "Delayed treatment", "Deceased"],
    answer: "Immediate treatment required",
    explanation: "Red category patients ko urgent intervention ki zarurat hoti hai.",
    topic: "Disaster First Aid",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Asthma attack me first aid ki priority kya hai?",
    options: ["Heavy meal", "Walking", "Reliever inhaler dena", "Flat sulana"],
    answer: "Reliever inhaler dena",
    explanation: "Bronchodilator airway narrowing ko reduce karta hai.",
    topic: "Respiratory Emergency",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Severe bleeding me pale skin kis wajah se hoti hai?",
    options: ["Infection", "Fever", "Peripheral vasoconstriction", "Liver disease"],
    answer: "Peripheral vasoconstriction",
    explanation: "Body vital organs ko blood supply maintain karne ke liye vessels constrict karti hai.",
    topic: "Bleeding Control",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Recovery position ka primary purpose kya hai?",
    options: ["Pain relief", "Temperature control", "BP increase", "Airway patency maintain karna"],
    answer: "Airway patency maintain karna",
    explanation: "Recovery position airway ko open rakhti hai aur aspiration risk kam karti hai.",
    topic: "Emergency Positioning",
    difficulty: "medium"
  }
];

export default set4;