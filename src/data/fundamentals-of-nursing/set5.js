// Answer Key:
// [3,1,4,2,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

const set5 = [
  {
    id: 1,
    question: "Patient ko achanak severe shortness of breath hoti hai. Nurse ka priority action kya hoga?",
    options: [
      "Diet history lena",
      "Family ko call karna",
      "Airway aur oxygenation assess karna",
      "Weight check karna"
    ],
    answer: "Airway aur oxygenation assess karna",
    topic: "Emergency Nursing",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Bedridden patient me pressure ulcer risk kam karne ke liye sabse important intervention kya hai?",
    options: [
      "Regular repositioning",
      "Daily weighing",
      "Fluid restriction",
      "Room temperature badhana"
    ],
    answer: "Regular repositioning",
    topic: "Pressure Ulcer Prevention",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Blood transfusion ke dauran patient ko severe itching aur dyspnea ho jati hai. Nurse kya karegi?",
    options: [
      "Rate slow karegi",
      "Observation continue karegi",
      "Antipyretic degi",
      "Transfusion immediately stop karegi"
    ],
    answer: "Transfusion immediately stop karegi",
    topic: "Blood Transfusion",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Medication administration me patient identity verify karna kis principle ka hissa hai?",
    options: [
      "Right Documentation",
      "Right Patient",
      "Right Route",
      "Right Time"
    ],
    answer: "Right Patient",
    topic: "Medication Administration",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Nurse sterile dressing karte waqt contamination avoid karne ke liye kya follow karegi?",
    options: [
      "Sterile field ko waist level ke upar rakhna",
      "Field ko unattended chhodna",
      "Non-sterile gloves use karna",
      "Sterile border touch karna"
    ],
    answer: "Sterile field ko waist level ke upar rakhna",
    topic: "Aseptic Technique",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Post-operative patient ko deep breathing exercises kyun karwayi jati hain?",
    options: [
      "Blood sugar control ke liye",
      "Constipation prevent karne ke liye",
      "Atelectasis prevent karne ke liye",
      "Vision improve karne ke liye"
    ],
    answer: "Atelectasis prevent karne ke liye",
    topic: "Respiratory Care",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Confused elderly patient ke liye fall prevention ka best intervention kya hai?",
    options: [
      "Call bell hata dena",
      "Bed low position me rakhna",
      "Patient ko akela chhodna",
      "Lights off rakhna"
    ],
    answer: "Bed low position me rakhna",
    topic: "Patient Safety",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Patient confidentiality maintain karna kis ethical principle ka example hai?",
    options: [
      "Justice",
      "Beneficence",
      "Autonomy",
      "Confidentiality"
    ],
    answer: "Confidentiality",
    topic: "Nursing Ethics",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Urinary catheter remove karne ke baad nurse sabse pehle kya monitor karegi?",
    options: [
      "Voiding ability",
      "Hair growth",
      "Eye color",
      "Hearing level"
    ],
    answer: "Voiding ability",
    topic: "Urinary Elimination",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "NG tube feeding se pehle sabse important assessment kya hai?",
    options: [
      "Patient weight",
      "Room temperature",
      "Visitor count",
      "Tube placement"
    ],
    answer: "Tube placement",
    topic: "Enteral Feeding",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Medication error hone par nurse ka first action kya hona chahiye?",
    options: [
      "Error hide karna",
      "Patient assess karna aur report karna",
      "Chart destroy karna",
      "Relative ko blame karna"
    ],
    answer: "Patient assess karna aur report karna",
    topic: "Medication Safety",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "IV site par redness, warmth aur tenderness kis complication ka sign hai?",
    options: [
      "Infiltration",
      "Extravasation",
      "Phlebitis",
      "Normal finding"
    ],
    answer: "Phlebitis",
    topic: "IV Therapy",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Nursing process ka first step kya hai?",
    options: [
      "Assessment",
      "Planning",
      "Implementation",
      "Evaluation"
    ],
    answer: "Assessment",
    topic: "Nursing Process",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient ko seizure aa raha hai. Nurse ka priority action kya hoga?",
    options: [
      "Mouth me spoon dalna",
      "Patient ko tightly pakadna",
      "Water pilana",
      "Injury se protect karna"
    ],
    answer: "Injury se protect karna",
    topic: "Emergency Nursing",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Immobile patient me DVT prevent karne ke liye kya encourage karna chahiye?",
    options: [
      "Strict bed rest",
      "Fluid restriction",
      "Leg exercises aur ambulation",
      "Head low position"
    ],
    answer: "Leg exercises aur ambulation",
    topic: "Mobility and Exercise",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Patient teaching effective hui ya nahi, iska best indicator kya hai?",
    options: [
      "Patient smile kare",
      "Patient return demonstration kare",
      "Family agree kare",
      "Nurse satisfy ho"
    ],
    answer: "Patient return demonstration kare",
    topic: "Patient Education",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Oxygen therapy ke dauran room me smoking allow kyun nahi hoti?",
    options: [
      "Patient disturb hota hai",
      "Bad smell aati hai",
      "Documentation issue hota hai",
      "Fire risk badhta hai"
    ],
    answer: "Fire risk badhta hai",
    topic: "Oxygen Therapy",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Hand hygiene ka primary purpose kya hai?",
    options: [
      "Infection transmission rokna",
      "Gloves replace karna",
      "Documentation improve karna",
      "Patient comfort badhana"
    ],
    answer: "Infection transmission rokna",
    topic: "Infection Control",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Fluid overload patient me kaunsi finding expected hai?",
    options: [
      "Dry skin",
      "Low urine output only",
      "Lung crackles",
      "Weight loss"
    ],
    answer: "Lung crackles",
    topic: "Fluid Balance",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Documentation me late entry karte waqt kya likhna chahiye?",
    options: [
      "Original time",
      "Actual late entry mention karni chahiye",
      "Entry skip kar deni chahiye",
      "Dusre nurse ka naam likhna chahiye"
    ],
    answer: "Actual late entry mention karni chahiye",
    topic: "Documentation",
    difficulty: "hard"
  }
];

export default set5;