const set4 = [
  {
    id: 1,
    question: "Nurse ek patient ka admission assessment kar rahi hai. Sabse pehle kis type ka data collect kiya jata hai?",
    options: [
      "Subjective aur objective data",
      "Sirf laboratory data",
      "Sirf physician notes",
      "Sirf family history"
    ],
    answer: "Subjective aur objective data",
    explanation: "Admission assessment me patient se subjective information aur physical examination se objective data collect kiya jata hai. Yeh nursing process ka foundation hota hai. Accurate assessment se hi sahi care plan ban sakta hai.",
    topic: "Nursing Process",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Patient ko bed bath dete waqt nurse ko skin folds par redness milti hai. Sabse appropriate intervention kya hai?",
    options: [
      "Area ko tightly bandage karna",
      "Area ko clean aur dry rakhna",
      "Area par powder ki thick layer lagana",
      "Redness ignore karna"
    ],
    answer: "Area ko clean aur dry rakhna",
    explanation: "Skin folds me moisture accumulation skin breakdown ka risk badhata hai. Area ko clean aur dry rakhna infection aur pressure injury prevent karta hai. Regular assessment bhi important hai.",
    topic: "Personal Hygiene",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Nurse patient ko ambulate karwa rahi hai aur patient ko dizziness feel hoti hai. Nurse ka first action kya hoga?",
    options: [
      "Patient ko chalne ke liye encourage karna",
      "Patient ko turant bitha ya lita dena",
      "Vital signs baad me lena",
      "Patient ko akela chhod dena"
    ],
    answer: "Patient ko turant bitha ya lita dena",
    explanation: "Dizziness fall risk ko increase karta hai. Patient ko safe position me lana immediate priority hai. Iske baad vital signs aur underlying cause assess kiya jata hai.",
    topic: "Patient Safety",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Agar sterile dressing pack kholte waqt nurse uske andar ke surface ko touch kar leti hai to kya mana jayega?",
    options: [
      "Pack abhi bhi sterile hai",
      "Sirf corner contaminated hai",
      "Pack ko use kiya ja sakta hai",
      "Pack contaminated ho gaya"
    ],
    answer: "Pack contaminated ho gaya",
    explanation: "Sterile surface ko non-sterile touch contamination create karta hai. Infection prevention ke liye contaminated pack ko replace karna chahiye. Aseptic technique compromise nahi honi chahiye.",
    topic: "Aseptic Technique",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Patient ki respiratory rate 32/min hai. Nurse ko sabse pehle kya karna chahiye?",
    options: [
      "Respiratory distress assess karna",
      "Patient ko discharge karna",
      "Food intake record karna",
      "Weight check karna"
    ],
    answer: "Respiratory distress assess karna",
    explanation: "Respiratory rate 32/min tachypnea indicate karti hai. Nurse ko breathing pattern, oxygenation aur distress signs assess karne chahiye. Early intervention complications prevent kar sakta hai.",
    topic: "Vital Signs",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Nurse ko medication vial par expiry date cross hui milti hai. Kya karna chahiye?",
    options: [
      "Dose half karke dena",
      "Medicine use karna agar color normal ho",
      "Medicine discard karna",
      "Patient se permission lena"
    ],
    answer: "Medicine discard karna",
    explanation: "Expired medication ki potency aur safety guarantee nahi hoti. Safe medication administration ke liye expired drug use nahi karni chahiye. Yeh medication safety ka important rule hai.",
    topic: "Medication Safety",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Bedridden patient me constipation prevent karne ke liye sabse effective nursing measure kya hai?",
    options: [
      "Adequate fluids aur mobility encourage karna",
      "Daily enema dena",
      "Food intake reduce karna",
      "Strict bed rest dena"
    ],
    answer: "Adequate fluids aur mobility encourage karna",
    explanation: "Hydration aur activity bowel motility improve karte hain. Constipation prevention ke liye yeh first-line interventions hain. Daily enema routine use ke liye recommended nahi hai.",
    topic: "Bowel Elimination",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Nurse suction machine use karne se pehle kya verify karegi?",
    options: [
      "Patient ka blood group",
      "Machine properly functioning hai",
      "Patient ka diet chart",
      "Room temperature"
    ],
    answer: "Machine properly functioning hai",
    explanation: "Emergency airway management me equipment readiness critical hai. Functioning suction machine airway clearance ke liye essential hai. Equipment failure serious complications cause kar sakta hai.",
    topic: "Airway Management",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Patient ko fever hai aur nurse tepid sponge bath de rahi hai. Is intervention ka goal kya hai?",
    options: [
      "Body temperature reduce karna",
      "Pulse rate increase karna",
      "Appetite improve karna",
      "Sleep induce karna"
    ],
    answer: "Body temperature reduce karna",
    explanation: "Tepid sponge bath heat loss promote karta hai aur fever management me help karta hai. Yeh supportive nursing intervention hai. Patient comfort bhi improve hota hai.",
    topic: "Temperature Management",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Blood transfusion ke dauran nurse ko patient me itching aur rash notice hota hai. Sabse pehla action kya hai?",
    options: [
      "Rate increase karna",
      "Observation continue karna",
      "Physician ko baad me batana",
      "Transfusion stop karna"
    ],
    answer: "Transfusion stop karna",
    explanation: "Itching aur rash allergic transfusion reaction ke signs ho sakte hain. Immediate transfusion stop karna patient safety ke liye zaroori hai. Further assessment aur notification required hai.",
    topic: "Blood Transfusion",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nurse patient ke urine output ko monitor kar rahi hai. Adult patient me adequate hourly urine output kitna mana jata hai?",
    options: [
      "Lagbhag 30 mL/hr ya usse adhik",
      "5 mL/hr",
      "10 mL/hr",
      "15 mL/hr"
    ],
    answer: "Lagbhag 30 mL/hr ya usse adhik",
    explanation: "Adequate urine output kidney perfusion aur hydration ka indicator hai. 30 mL/hr se kam output renal compromise indicate kar sakta hai. Regular monitoring important hai.",
    topic: "Urinary Elimination",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Nurse tracheostomy patient ki care kar rahi hai. Sabse priority assessment kya hai?",
    options: [
      "Skin color",
      "Airway patency",
      "Hair condition",
      "Nail growth"
    ],
    answer: "Airway patency",
    explanation: "Airway hamesha highest priority hoti hai. Tracheostomy blockage severe respiratory distress cause kar sakti hai. ABC principle ke hisab se airway assessment sabse pehle aata hai.",
    topic: "Tracheostomy Care",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Patient ko prolonged bed rest diya gaya hai. Kis complication ka risk sabse zyada hota hai?",
    options: [
      "Pressure ulcer",
      "Improved circulation",
      "Increased muscle strength",
      "Enhanced appetite"
    ],
    answer: "Pressure ulcer",
    explanation: "Long-term immobility skin breakdown aur pressure ulcer risk ko increase karti hai. Repositioning aur skin care prevention ke key measures hain. Early prevention essential hai.",
    topic: "Immobility Complications",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Nurse medication administer karne se pehle allergy status verify karti hai. Yeh kis principle ko support karta hai?",
    options: [
      "Patient entertainment",
      "Patient safety",
      "Hospital finance",
      "Staff scheduling"
    ],
    answer: "Patient safety",
    explanation: "Allergy verification adverse drug reactions prevent karta hai. Medication administration me safety checks mandatory hain. Yeh nursing accountability ka important part hai.",
    topic: "Medication Administration",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Nurse patient ke intake-output chart me negative fluid balance notice karti hai. Iska matlab kya hai?",
    options: [
      "Output intake se zyada hai",
      "Intake output se zyada hai",
      "Fluid balance normal hai",
      "Data invalid hai"
    ],
    answer: "Output intake se zyada hai",
    explanation: "Negative fluid balance dehydration ya fluid loss indicate kar sakta hai. Accurate monitoring aur assessment zaroori hai. Clinical condition ke according intervention ki jaati hai.",
    topic: "Fluid Balance",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Patient ko seizure ke baad postictal phase me nurse kya expect karegi?",
    options: [
      "Extreme alertness",
      "Hyperactivity",
      "Confusion aur drowsiness",
      "Immediate normal status"
    ],
    answer: "Confusion aur drowsiness",
    explanation: "Postictal phase me patient generally confused, sleepy aur weak feel karta hai. Safety aur airway monitoring important hoti hai. Yeh expected finding hai.",
    topic: "Neurological Care",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nurse wound healing ko improve karne ke liye kis nutritional element ko important maanti hai?",
    options: [
      "Protein",
      "Excess sugar",
      "Soft drinks",
      "High sodium only"
    ],
    answer: "Protein",
    explanation: "Protein tissue repair aur wound healing ke liye essential nutrient hai. Deficiency healing delay kar sakti hai. Adequate nutrition nursing care ka important component hai.",
    topic: "Nutrition and Healing",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Patient education session ke baad patient procedure correctly demonstrate karta hai. Yeh kya indicate karta hai?",
    options: [
      "Teaching ineffective thi",
      "Learning successful hui",
      "Patient guess kar raha tha",
      "Documentation ki zarurat nahi"
    ],
    answer: "Learning successful hui",
    explanation: "Return demonstration learning ka best evidence mana jata hai. Isse patient ki understanding aur skill competency verify hoti hai. Effective education outcomes improve karti hai.",
    topic: "Patient Education",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Nurse ko patient ke IV site par redness aur warmth milti hai. Sabse likely condition kya hai?",
    options: [
      "Phlebitis",
      "Normal finding",
      "Hypoglycemia",
      "Dehydration"
    ],
    answer: "Phlebitis",
    explanation: "Redness, warmth aur tenderness phlebitis ke common signs hain. IV site ko assess karke appropriate intervention karna chahiye. Delay complication risk badha sakta hai.",
    topic: "IV Therapy",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Patient ke records ko unauthorized person ke saath share karna kis ethical principle ka violation hai?",
    options: [
      "Justice",
      "Autonomy",
      "Beneficence",
      "Confidentiality"
    ],
    answer: "Confidentiality",
    explanation: "Patient information private rakhna nursing ethical duty hai. Unauthorized disclosure privacy rights ko violate karta hai. Legal aur professional consequences ho sakte hain.",
    topic: "Nursing Ethics",
    difficulty: "hard"
  }
];

export default set4;

// Answer Key:
// [1,2,2,4,1,3,1,2,1,4,1,2,1,2,1,3,1,2,1,4]

// Option 1 = 8
// Option 2 = 6
// Option 3 = 3
// Option 4 = 3
