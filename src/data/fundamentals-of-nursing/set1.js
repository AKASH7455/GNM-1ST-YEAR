const set1 = [
  {
    id: 1,
    question: "Post-operative patient ko bed se wheelchair par transfer karte waqt nurse sabse pehle kya assess karegi?",
    options: [
      "Patient ka diet chart",
      "Patient ka blood group",
      "Patient ki mobility aur strength",
      "Patient ke relatives ki sankhya"
    ],
    answer: "Patient ki mobility aur strength",
    explanation: "Safe transfer ke liye sabse pehle mobility aur muscle strength assess karna zaroori hai. Isse fall risk ka pata chalta hai. Baaki options transfer safety ko directly affect nahi karte. Patient safety nursing care ka primary goal hai.",
    topic: "Patient Safety and Transfer",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Nurse medication dene se pehle patient identity verify karne ke liye best action kya hai?",
    options: [
      "Do identifiers verify karna",
      "Sirf bed number dekhna",
      "Relative se naam puchhna",
      "Ward register check karna"
    ],
    answer: "Do identifiers verify karna",
    explanation: "Medication errors prevent karne ke liye do identifiers use karna standard practice hai. Bed number ya relative ki information sufficient nahi hoti. Correct patient ko correct medicine milna patient safety ka important part hai.",
    topic: "Medication Safety",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Pressure ulcer risk wale patient ke liye sabse effective preventive intervention kya hai?",
    options: [
      "Fluid restriction",
      "Head end hamesha high rakhna",
      "Daily weight check",
      "Regular repositioning schedule"
    ],
    answer: "Regular repositioning schedule",
    explanation: "Pressure ulcer prolonged pressure ki wajah se hota hai. Regular repositioning tissue perfusion maintain karti hai. Baaki interventions supportive ho sakte hain par primary prevention nahi hain. Nursing care me pressure relief essential hai.",
    topic: "Pressure Ulcer Prevention",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Agar patient achanak gir jaye to nurse ki priority kya honi chahiye?",
    options: [
      "Incident report turant likhna",
      "Patient ki condition assess karna",
      "Family ko call karna",
      "Patient ko turant khada karna"
    ],
    answer: "Patient ki condition assess karna",
    explanation: "Fall ke baad sabse pehle injury aur vital condition assess karna zaroori hai. Assessment ke bina patient ko move karna unsafe ho sakta hai. Documentation baad me ki jaati hai. ABC approach follow karni chahiye.",
    topic: "Fall Management",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Hand hygiene ka sabse important purpose kya hai?",
    options: [
      "Infection transmission ko rokna",
      "Gloves ki requirement khatam karna",
      "Patient ko comfortable banana",
      "Documentation improve karna"
    ],
    answer: "Infection transmission ko rokna",
    explanation: "Hand hygiene healthcare-associated infections ko significantly reduce karti hai. Yeh infection control ka sabse effective method mana jata hai. Gloves hand hygiene ka substitute nahi hain. Patient aur nurse dono ko protection milti hai.",
    topic: "Infection Control",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Nurse sterile dressing kar rahi hai. Agar sterile field wet ho jaye to kya maana jayega?",
    options: [
      "Field abhi bhi sterile hai",
      "Sirf edge contaminated hai",
      "Field contaminated mana jayega",
      "Sirf instruments replace karne honge"
    ],
    answer: "Field contaminated mana jayega",
    explanation: "Moisture microorganisms ko transfer kar sakti hai, isliye wet sterile field contaminated maani jaati hai. Sterility maintain karna wound infection prevention ke liye zaroori hai. Procedure ko safely restart karna chahiye.",
    topic: "Aseptic Technique",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Bedridden patient me deep breathing exercise ka major benefit kya hai?",
    options: [
      "Blood sugar kam karna",
      "Atelectasis prevent karna",
      "Pulse rate kam karna",
      "Digestion improve karna"
    ],
    answer: "Atelectasis prevent karna",
    explanation: "Deep breathing alveoli ko expand karti hai aur lung collapse ko prevent karti hai. Post-operative patients me yeh especially important hai. Respiratory complications kam hoti hain. Yeh evidence-based nursing intervention hai.",
    topic: "Respiratory Care",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Nurse oral medication dene ja rahi hai aur patient vomiting kar raha hai. Sabse appropriate action kya hai?",
    options: [
      "Medicine force se dena",
      "Dose double karna",
      "Medicine discard karna",
      "Medication hold karke physician ko inform karna"
    ],
    answer: "Medication hold karke physician ko inform karna",
    explanation: "Vomiting ki condition me oral medication retain nahi ho sakti. Nurse ko patient condition assess karke physician ko inform karna chahiye. Forcefully medicine dena aspiration risk badha sakta hai. Patient safety priority hai.",
    topic: "Medication Administration",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Vital signs record karte waqt abnormal BP milne par nurse ka pehla step kya hona chahiye?",
    options: [
      "Measurement ko recheck karna",
      "Record delete karna",
      "Patient ko discharge karna",
      "Family ko panic karna"
    ],
    answer: "Measurement ko recheck karna",
    explanation: "Abnormal finding milne par accuracy confirm karna zaroori hai. Reassessment nursing process ka important step hai. Wrong reading par action lena inappropriate ho sakta hai. Accurate data clinical decisions ko support karta hai.",
    topic: "Vital Signs",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Urinary catheter care ke dauran drainage bag ko kis position me rakhna chahiye?",
    options: [
      "Bed par patient ke paas",
      "Patient ke abdomen par",
      "Head level se upar",
      "Bladder level se neeche"
    ],
    answer: "Bladder level se neeche",
    explanation: "Drainage bag bladder se neeche rakhne se urine backflow prevent hota hai. Backflow infection risk badha sakta hai. Catheter-associated infection prevention nursing responsibility hai. Proper positioning essential hai.",
    topic: "Catheter Care",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nurse ko medication error ka pata chalta hai. Sabse appropriate action kya hai?",
    options: [
      "Error ko hide karna",
      "Patient assess karke report karna",
      "Record destroy karna",
      "Dusri nurse ko blame karna"
    ],
    answer: "Patient assess karke report karna",
    explanation: "Medication error ke baad patient assessment aur prompt reporting zaroori hai. Transparency patient safety culture ka part hai. Error hide karna unethical hai. Documentation aur monitoring bhi important hain.",
    topic: "Medication Error Management",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Nasogastric tube feeding se pehle nurse ko sabse pehle kya verify karna chahiye?",
    options: [
      "Patient ka weight",
      "Room temperature",
      "Tube placement",
      "Visitor timing"
    ],
    answer: "Tube placement",
    explanation: "Incorrect tube placement aspiration aur serious complications ka cause ban sakta hai. Feeding se pehle placement verify karna mandatory hai. Yeh patient safety ka critical step hai. Baaki options secondary importance rakhte hain.",
    topic: "Enteral Feeding",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Nursing process ka assessment phase kis purpose ke liye use hota hai?",
    options: [
      "Patient data collect karna",
      "Care evaluate karna",
      "Diagnosis prescribe karna",
      "Treatment complete karna"
    ],
    answer: "Patient data collect karna",
    explanation: "Assessment nursing process ka first step hai jisme subjective aur objective data collect kiya jata hai. Accurate assessment se hi sahi planning hoti hai. Poor assessment poor outcomes ka cause ban sakta hai.",
    topic: "Nursing Process",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Isolation room me enter karte waqt PPE sequence ka important purpose kya hai?",
    options: [
      "Time bachana",
      "Patient ko impress karna",
      "Documentation avoid karna",
      "Cross infection prevent karna"
    ],
    answer: "Cross infection prevent karna",
    explanation: "PPE healthcare worker aur patient dono ko infection se protect karta hai. Correct sequence contamination risk ko reduce karta hai. Infection control standards ka strict follow-up zaroori hai.",
    topic: "Isolation Techniques",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Agar patient pain score 8/10 report kare to nurse ki priority kya honi chahiye?",
    options: [
      "Pain ignore karna",
      "Sirf document karna",
      "Pain assess karke intervention dena",
      "Patient ko wait karne bolna"
    ],
    answer: "Pain assess karke intervention dena",
    explanation: "Severe pain immediate assessment aur management demand karta hai. Pain fifth vital sign mana jata hai. Effective pain control recovery improve karta hai. Documentation alone sufficient nahi hai.",
    topic: "Pain Management",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Confused elderly patient ke room me fall prevention ke liye sabse appropriate intervention kya hai?",
    options: [
      "Room dark rakhna",
      "Bed ko low position me rakhna",
      "Call bell hata dena",
      "Patient ko akela chhod dena"
    ],
    answer: "Bed ko low position me rakhna",
    explanation: "Low bed position fall injury risk ko reduce karti hai. Confused patients high-risk category me aate hain. Environment ko safe banana nursing responsibility hai. Call bell accessible honi chahiye.",
    topic: "Fall Prevention",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nurse IV site assess karte waqt redness, swelling aur pain notice karti hai. Sabse likely complication kya hai?",
    options: [
      "Normal finding",
      "Dehydration",
      "Hypertension",
      "Phlebitis"
    ],
    answer: "Phlebitis",
    explanation: "Redness, swelling aur tenderness phlebitis ke common signs hain. Early detection se complications prevent kiye ja sakte hain. IV site regular monitoring safe infusion therapy ka part hai.",
    topic: "IV Therapy",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Patient education effective hone ka best indicator kya hai?",
    options: [
      "Patient procedure ko correctly demonstrate kare",
      "Patient sirf haan bole",
      "Family smile kare",
      "Nurse satisfied ho"
    ],
    answer: "Patient procedure ko correctly demonstrate kare",
    explanation: "Return demonstration learning ka strongest evidence hota hai. Isse pata chalta hai ki patient ne knowledge ko apply karna seekh liya hai. Verbal agreement alone sufficient nahi hota.",
    topic: "Patient Education",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Documentation me late entry karte waqt nurse ko kya karna chahiye?",
    options: [
      "Purani timing likh deni chahiye",
      "Entry skip kar deni chahiye",
      "Actual late entry mention karni chahiye",
      "Dusre staff ka naam use karna chahiye"
    ],
    answer: "Actual late entry mention karni chahiye",
    explanation: "Legal aur ethical documentation accurate honi chahiye. Late entry ko clearly indicate karna professional standard hai. Incorrect timing legal issues create kar sakti hai.",
    topic: "Documentation",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Nurse patient confidentiality maintain karne ke liye kya karegi?",
    options: [
      "Case details public area me discuss karegi",
      "Information sirf authorized persons ke saath share karegi",
      "Social media par post karegi",
      "Friends ko bata degi"
    ],
    answer: "Information sirf authorized persons ke saath share karegi",
    explanation: "Confidentiality nursing ethics ka core principle hai. Patient information ko sirf authorized individuals ke saath share kiya jana chahiye. Privacy violations legal aur professional consequences la sakte hain.",
    topic: "Nursing Ethics",
    difficulty: "hard"
  }
];

export default set1;

// Answer Key:
// [3,1,4,2,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5