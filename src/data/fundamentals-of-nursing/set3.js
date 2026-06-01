const set3 = [
  {
    id: 1,
    question: "Nurse ek patient ko passive range of motion exercises de rahi hai. Is intervention ka primary purpose kya hai?",
    options: [
      "Joint flexibility maintain karna",
      "Blood pressure kam karna",
      "Body temperature control karna",
      "Vision improve karna"
    ],
    answer: "Joint flexibility maintain karna",
    explanation: "Passive ROM exercises un patients ke liye use ki jaati hain jo khud movement nahi kar sakte. Yeh joint stiffness aur contracture prevent karti hain. Blood circulation bhi improve hoti hai. Long-term immobilization ke complications ko reduce karne me madad milti hai.",
    topic: "Mobility and Exercise",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Nurse ko IV infusion site par coolness aur swelling milti hai. Yeh kis complication ka sign hai?",
    options: [
      "Phlebitis",
      "Infiltration",
      "Hemorrhage",
      "Infection"
    ],
    answer: "Infiltration",
    explanation: "Infiltration tab hoti hai jab IV fluid vein ke bahar surrounding tissue me chala jata hai. Coolness aur swelling common signs hain. IV infusion turant stop karke site assess karni chahiye. Delay se tissue damage ho sakta hai.",
    topic: "IV Therapy",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Nurse postoperative patient ko incentive spirometer use karne ke liye encourage karti hai. Iska main benefit kya hai?",
    options: [
      "Pain control karna",
      "Urine output badhana",
      "Lung expansion improve karna",
      "Blood glucose reduce karna"
    ],
    answer: "Lung expansion improve karna",
    explanation: "Incentive spirometer deep breathing promote karta hai aur atelectasis prevent karta hai. Postoperative respiratory complications kam hoti hain. Yeh especially abdominal aur thoracic surgery patients ke liye important hai.",
    topic: "Respiratory Care",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Nurse patient ko nasogastric tube ke through feeding de rahi hai. Feeding ke dauran patient ko kis position me rakhna chahiye?",
    options: [
      "Supine",
      "Prone",
      "Side lying",
      "High Fowler's"
    ],
    answer: "High Fowler's",
    explanation: "High Fowler's position aspiration risk ko significantly reduce karti hai. Feeding ke dauran aur baad me kuch samay tak patient ko upright rakhna chahiye. Yeh enteral feeding safety ka important principle hai.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Agar patient ko latex allergy hai to nurse ka sabse important action kya hoga?",
    options: [
      "Latex-free supplies use karna",
      "Patient ko gloves pehnana",
      "Room change karna",
      "Diet modify karna"
    ],
    answer: "Latex-free supplies use karna",
    explanation: "Latex allergy me exposure avoid karna sabse important intervention hai. Latex-containing gloves aur equipment allergic reaction trigger kar sakte hain. Severe cases me anaphylaxis bhi ho sakta hai.",
    topic: "Patient Safety",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Nurse tracheostomy care kar rahi hai. Sterile technique use karne ka main reason kya hai?",
    options: [
      "Patient comfort badhana",
      "Procedure fast karna",
      "Respiratory infection prevent karna",
      "Cost reduce karna"
    ],
    answer: "Respiratory infection prevent karna",
    explanation: "Tracheostomy direct airway access provide karti hai. Infection ka risk high hota hai. Sterile technique microorganisms ko airway me enter hone se rokne me madad karti hai. Yeh patient safety ke liye essential hai.",
    topic: "Tracheostomy Care",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Nurse ek confused patient ko repeatedly bed se uthte hue dekh rahi hai. Sabse appropriate nursing intervention kya hai?",
    options: [
      "Patient ko ignore karna",
      "Physical restraint immediately lagana",
      "Frequent observation aur safety measures lagana",
      "Patient ko discharge karna"
    ],
    answer: "Frequent observation aur safety measures lagana",
    explanation: "Confused patients me fall risk high hota hai. Frequent monitoring aur environmental safety measures first-line interventions hain. Restraints sirf last resort hone chahiye. Patient dignity aur safety dono maintain karni chahiye.",
    topic: "Patient Safety",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Nurse medication administration ke dauran patient medicine lene se mana kar deta hai. Nurse kya karegi?",
    options: [
      "Medicine forcefully degi",
      "Refusal document karke physician ko inform karegi",
      "Dose double karegi",
      "Medicine secretly de degi"
    ],
    answer: "Refusal document karke physician ko inform karegi",
    explanation: "Competent patient ko treatment refuse karne ka right hota hai. Nurse ko refusal document karna aur physician ko notify karna chahiye. Forcefully medication dena unethical aur illegal ho sakta hai.",
    topic: "Medication Administration",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Patient ki skin pale, cold aur clammy hai. Nurse ko sabse pehle kis condition ka suspicion hona chahiye?",
    options: [
      "Shock",
      "Hypertension",
      "Hyperthyroidism",
      "Obesity"
    ],
    answer: "Shock",
    explanation: "Pale, cold aur clammy skin shock ke common signs hain. Peripheral perfusion reduce ho jati hai. Early recognition life-saving ho sakta hai. Vital signs aur circulation immediately assess karni chahiye.",
    topic: "Emergency Nursing",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Aseptic dressing change ke dauran sterile glove accidentally non-sterile surface ko touch kar le to kya karna chahiye?",
    options: [
      "Procedure continue karna",
      "Sirf hand wash karna",
      "Glove ko alcohol se clean karna",
      "Sterile glove replace karna"
    ],
    answer: "Sterile glove replace karna",
    explanation: "Sterile glove non-sterile surface touch karte hi contaminated mani jati hai. Infection prevention ke liye nayi sterile glove use karni chahiye. Aseptic technique me compromise acceptable nahi hai.",
    topic: "Aseptic Technique",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nurse patient ke pain assessment ke liye numeric rating scale use karti hai. Yeh nursing process ke kis step ka part hai?",
    options: [
      "Assessment",
      "Planning",
      "Implementation",
      "Evaluation"
    ],
    answer: "Assessment",
    explanation: "Pain assessment subjective data collection ka part hai. Accurate assessment se appropriate interventions plan ki ja sakti hain. Nursing process ka pehla step assessment hi hota hai.",
    topic: "Nursing Process",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Bedridden patient me foot drop prevent karne ke liye nurse kya use kar sakti hai?",
    options: [
      "Ice pack",
      "Foot board",
      "Hot water bag",
      "Abdominal binder"
    ],
    answer: "Foot board",
    explanation: "Foot board feet ko proper alignment me rakhta hai aur plantar flexion prevent karta hai. Long-term immobilized patients me foot drop common complication hai. Prevention nursing care ka important aspect hai.",
    topic: "Mobility and Positioning",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Nurse urinary catheter removal ke baad kis finding ko priority se monitor karegi?",
    options: [
      "Patient ki voiding ability",
      "Hair growth",
      "Vision changes",
      "Skin color only"
    ],
    answer: "Patient ki voiding ability",
    explanation: "Catheter removal ke baad spontaneous urination assess karna zaroori hai. Urinary retention complication ho sakti hai. Early identification se timely intervention possible hota hai.",
    topic: "Urinary Elimination",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient ko chest pain aur sweating ho rahi hai. Nurse ka first action kya hoga?",
    options: [
      "Pain ignore karna",
      "Patient ko walk karwana",
      "Immediate assessment aur help bulana",
      "Discharge papers tayyar karna"
    ],
    answer: "Immediate assessment aur help bulana",
    explanation: "Chest pain potentially life-threatening condition ka sign ho sakta hai. Rapid assessment aur emergency response zaroori hai. Delay patient outcome ko negatively affect kar sakta hai.",
    topic: "Emergency Nursing",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Nurse patient education ke baad puchti hai ki patient ne kya samjha. Yeh kis technique ka example hai?",
    options: [
      "Teach-back method",
      "Isolation technique",
      "Aseptic technique",
      "Delegation"
    ],
    answer: "Teach-back method",
    explanation: "Teach-back method patient understanding verify karne ka effective way hai. Patient apne words me information repeat karta hai. Isse learning gaps identify kiye ja sakte hain.",
    topic: "Patient Education",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Nurse oxygen therapy de rahi hai. Oxygen humidification ka main purpose kya hai?",
    options: [
      "Oxygen color improve karna",
      "Airway mucosa drying prevent karna",
      "Cylinder weight kam karna",
      "Pulse rate increase karna"
    ],
    answer: "Airway mucosa drying prevent karna",
    explanation: "Dry oxygen airway mucosa ko irritate aur dry kar sakta hai. Humidification comfort aur secretion management improve karti hai. Long-term oxygen therapy me yeh especially important hai.",
    topic: "Oxygen Therapy",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nurse ko patient ke sacral area par non-blanchable redness milti hai. Yeh pressure injury ka kaunsa stage indicate karta hai?",
    options: [
      "Stage I",
      "Stage II",
      "Stage III",
      "Stage IV"
    ],
    answer: "Stage I",
    explanation: "Non-blanchable erythema Stage I pressure injury ki hallmark finding hai. Early detection se progression prevent ki ja sakti hai. Repositioning aur skin care immediately implement karni chahiye.",
    topic: "Pressure Injury Care",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Nurse sterile field prepare kar rahi hai. Sterile field ka 1-inch border kaisa mana jata hai?",
    options: [
      "Completely sterile",
      "Partially sterile",
      "Contaminated",
      "Highly sterile"
    ],
    answer: "Contaminated",
    explanation: "Sterile field ka outer 1-inch border contaminated mana jata hai. Instruments aur supplies ko is area se door rakhna chahiye. Yeh aseptic principles ka important rule hai.",
    topic: "Sterile Technique",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Nurse fluid overload patient me sabse pehle kis sign ko monitor karegi?",
    options: [
      "Crackles in lungs",
      "Hair texture",
      "Eye color",
      "Nail length"
    ],
    answer: "Crackles in lungs",
    explanation: "Fluid overload me pulmonary congestion develop ho sakti hai. Crackles early respiratory compromise ka sign hain. Timely assessment severe complications prevent kar sakta hai.",
    topic: "Fluid and Electrolyte Balance",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Patient ki confidential report galti se unauthorized person ko mil jati hai. Yeh kis ethical principle ka violation hai?",
    options: [
      "Beneficence",
      "Justice",
      "Autonomy",
      "Confidentiality"
    ],
    answer: "Confidentiality",
    explanation: "Patient information ko secure rakhna nursing ethical responsibility hai. Unauthorized disclosure privacy rights violate karta hai. Isse legal aur professional consequences ho sakte hain.",
    topic: "Nursing Ethics",
    difficulty: "hard"
  }
];

export default set3;

// Answer Key:
// [1,2,3,4,1,3,3,2,1,4,1,2,1,3,1,2,1,3,1,4]

// Option 1 = 6
// Option 2 = 4
// Option 3 = 5
// Option 4 = 5
