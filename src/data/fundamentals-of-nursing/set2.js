const set2 = [
  {
    id: 1,
    question: "Nurse ek unconscious patient ko oral care de rahi hai. Aspiration prevent karne ke liye sabse appropriate position kaunsi hogi?",
    options: [
      "Supine position",
      "Lateral position with head turned",
      "Trendelenburg position",
      "High Fowler's position"
    ],
    answer: "Lateral position with head turned",
    explanation: "Unconscious patient me gag reflex absent ho sakta hai. Lateral position secretions ko bahar drain hone deti hai aur aspiration risk kam karti hai. Supine position aspiration risk badha sakti hai. Patient safety ke liye yeh preferred nursing intervention hai.",
    topic: "Oral Hygiene",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Bed making ke dauran wrinkle-free sheet maintain karna sabse zyada kis complication ko prevent karta hai?",
    options: [
      "Pressure injury formation",
      "Hypertension",
      "Constipation",
      "Hypoglycemia"
    ],
    answer: "Pressure injury formation",
    explanation: "Wrinkled sheets skin par friction aur pressure create karti hain. Yeh pressure sores develop kar sakti hain. Smooth bed surface patient comfort aur skin integrity maintain karti hai. Long-term bedridden patients me yeh bahut important hai.",
    topic: "Bed Making",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Nurse pulse assess kar rahi hai aur rhythm irregular feel hoti hai. Agla nursing action kya hona chahiye?",
    options: [
      "Pulse ignore karna",
      "Patient ko discharge karna",
      "Full one minute tak pulse count karna",
      "Sirf documentation karna"
    ],
    answer: "Full one minute tak pulse count karna",
    explanation: "Irregular pulse ke case me complete one minute count accurate assessment deta hai. Short duration count error produce kar sakta hai. Accurate data physician ko correct clinical information provide karta hai. Assessment nursing process ka foundation hai.",
    topic: "Vital Signs",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Agar oxygen cylinder use karte waqt nurse grease ya oil apply kare to sabse bada risk kya hoga?",
    options: [
      "Oxygen flow increase hoga",
      "Patient comfort badhega",
      "Humidity improve hogi",
      "Fire ya explosion ho sakta hai"
    ],
    answer: "Fire ya explosion ho sakta hai",
    explanation: "Oxygen highly combustible environment create karta hai. Oil aur grease ignition risk ko bahut badha dete hain. Oxygen safety protocols strictly follow karna zaroori hai. Yeh serious patient aur staff hazard hai.",
    topic: "Oxygen Therapy",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Nurse ko dressing change ke dauran wound se foul smell aur purulent drainage milti hai. Sabse pehla nursing concern kya hoga?",
    options: [
      "Possible wound infection",
      "Patient dehydration",
      "Nutritional deficiency",
      "Sleep disturbance"
    ],
    answer: "Possible wound infection",
    explanation: "Foul odor aur purulent drainage infection ke classic signs hain. Early recognition aur reporting se complications prevent ki ja sakti hain. Wound assessment nursing responsibility ka important part hai. Delay se sepsis ka risk badh sakta hai.",
    topic: "Wound Care",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Sterile gloves pehente waqt sabse common principle kya yaad rakhna chahiye?",
    options: [
      "Glove ka outer surface touch kar sakte hain",
      "Sterile surface ko sterile surface hi touch kare",
      "Gloves pehenne ke baad hand wash ki zarurat nahi",
      "Gloves ko kisi bhi surface par rakh sakte hain"
    ],
    answer: "Sterile surface ko sterile surface hi touch kare",
    explanation: "Sterility maintain karne ka basic rule hai ki sterile objects sirf sterile objects se contact karein. Non-sterile contact contamination create karta hai. Aseptic technique infection prevention ka major component hai.",
    topic: "Sterile Technique",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Nurse intake-output chart maintain kar rahi hai. Kis patient me yeh monitoring sabse zyada important hogi?",
    options: [
      "Minor skin abrasion patient",
      "Stable OPD patient",
      "Patient with renal failure",
      "Patient waiting area me baitha hai"
    ],
    answer: "Patient with renal failure",
    explanation: "Renal failure me fluid balance closely monitor karna zaroori hota hai. Intake-output records kidney function aur treatment response evaluate karne me help karte hain. Fluid overload ya deficit dono dangerous ho sakte hain.",
    topic: "Fluid Balance",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Patient ko enema dene ke baad severe abdominal pain develop ho jata hai. Nurse ki priority kya honi chahiye?",
    options: [
      "Dusra enema dena",
      "Pain ignore karna",
      "Procedure stop karke assess karna",
      "Patient ko walk karwana"
    ],
    answer: "Procedure stop karke assess karna",
    explanation: "Severe pain complication ya bowel injury ka sign ho sakta hai. Procedure continue karna unsafe hai. Assessment aur physician notification zaroori hai. Patient safety hamesha first priority hoti hai.",
    topic: "Enema Administration",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Agar patient ka temperature 39.5°C hai to nurse ka immediate nursing goal kya hoga?",
    options: [
      "Body temperature reduce karna",
      "Weight measure karna",
      "Vision test karna",
      "Patient transfer karna"
    ],
    answer: "Body temperature reduce karna",
    explanation: "High fever metabolic demand aur complications increase kar sakta hai. Nursing interventions temperature control aur cause identification par focus karte hain. Prompt action patient outcomes improve karta hai.",
    topic: "Temperature Regulation",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Blood transfusion shuru hone ke 10 minute baad patient chills aur dyspnea complain karta hai. Nurse kya karegi?",
    options: [
      "Transfusion speed increase karegi",
      "Blanket dekar continue karegi",
      "Wait and watch karegi",
      "Transfusion immediately stop karegi"
    ],
    answer: "Transfusion immediately stop karegi",
    explanation: "Chills aur dyspnea transfusion reaction ke signs ho sakte hain. Immediate discontinuation patient ko severe complications se protect karta hai. Further assessment aur physician notification required hai.",
    topic: "Blood Transfusion",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nursing diagnosis formulate karte waqt sabse pehle kis data ka analysis kiya jata hai?",
    options: [
      "Collected assessment data",
      "Doctor prescription",
      "Patient bill",
      "Hospital policy"
    ],
    answer: "Collected assessment data",
    explanation: "Nursing diagnosis assessment findings par based hoti hai. Accurate diagnosis ke liye collected data ka analysis essential hai. Nursing process ke logical sequence ko follow karna chahiye.",
    topic: "Nursing Process",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Nurse suctioning perform kar rahi hai. Har suction pass kitne second se zyada nahi hona chahiye?",
    options: [
      "30 second",
      "25 second",
      "15 second",
      "60 second"
    ],
    answer: "15 second",
    explanation: "Prolonged suctioning hypoxia aur tissue trauma cause kar sakti hai. Isliye suction duration generally 10–15 seconds tak limit rakhi jaati hai. Patient oxygenation maintain karna zaroori hai.",
    topic: "Airway Management",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Patient ko hot water bag dene se pehle nurse sabse important kya check karegi?",
    options: [
      "Water temperature",
      "Patient surname",
      "Room color",
      "Meal timing"
    ],
    answer: "Water temperature",
    explanation: "Excessively hot water burns cause kar sakta hai. Temperature assess karke safe application ensure ki jaati hai. Elderly aur unconscious patients me burn risk aur zyada hota hai.",
    topic: "Comfort Measures",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Medication administration ke 'Right Time' principle ka purpose kya hai?",
    options: [
      "Documentation reduce karna",
      "Therapeutic effect maintain karna",
      "Medicine cost kam karna",
      "Ward rounds avoid karna"
    ],
    answer: "Therapeutic effect maintain karna",
    explanation: "Correct timing medicine ke desired blood level aur effect ko maintain karta hai. Delayed ya early administration treatment outcomes ko affect kar sakta hai. Safe medication practice me timing important hai.",
    topic: "Medication Administration",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Post-operative patient deep vein thrombosis prevent karne ke liye nurse kya encourage karegi?",
    options: [
      "Leg exercises aur early ambulation",
      "Complete bed rest",
      "Fluid restriction",
      "Head low position"
    ],
    answer: "Leg exercises aur early ambulation",
    explanation: "Mobility venous stasis ko reduce karti hai aur clot formation prevent karti hai. Early ambulation post-operative nursing care ka key component hai. DVT prevention patient safety ke liye essential hai.",
    topic: "Post-Operative Care",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Patient ko seizure aata hai. Nurse ka sabse appropriate immediate action kya hoga?",
    options: [
      "Mouth me spoon dalna",
      "Patient ko tightly pakadna",
      "Patient ko floor par gira dena",
      "Injury se protect karna"
    ],
    answer: "Injury se protect karna",
    explanation: "Seizure ke dauran primary goal injury prevention hota hai. Mouth me objects dalna dangerous hai. Restraining bhi injury risk badha sakta hai. Airway aur safety par focus karna chahiye.",
    topic: "Emergency Nursing",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nurse patient ke skin turgor ko assess kar rahi hai. Yeh primarily kis cheez ka indicator hai?",
    options: [
      "Hydration status",
      "Blood group",
      "Pain intensity",
      "Hearing ability"
    ],
    answer: "Hydration status",
    explanation: "Skin turgor hydration evaluate karne ka common method hai. Poor turgor dehydration indicate kar sakta hai. Yeh assessment especially elderly aur critically ill patients me useful hai.",
    topic: "Physical Assessment",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Agar sterile field nurse ki waist level se neeche chali jaye to usse kya maana jayega?",
    options: [
      "Partially sterile",
      "Conditionally sterile",
      "Completely sterile",
      "Contaminated"
    ],
    answer: "Contaminated",
    explanation: "Sterile field ko hamesha nurse ki vision aur waist level ke upar maintain kiya jata hai. Waist level ke neeche field observe nahi ki ja sakti, isliye contaminated maani jaati hai. Aseptic principles strict hote hain.",
    topic: "Aseptic Technique",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Nurse discharge teaching complete karti hai. Learning evaluate karne ka best method kya hai?",
    options: [
      "Patient se repeat demonstration karwana",
      "Pamphlet dekar bhejna",
      "Family ko instructions de dena",
      "Sirf signature le lena"
    ],
    answer: "Patient se repeat demonstration karwana",
    explanation: "Return demonstration actual understanding aur skill competency show karti hai. Sirf verbal agreement learning confirm nahi karta. Effective discharge education readmission risk kam karti hai.",
    topic: "Health Education",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Professional nursing ethics ke according informed consent ke bina invasive procedure karna kis principle ka violation hai?",
    options: [
      "Justice",
      "Autonomy",
      "Fidelity",
      "Confidentiality"
    ],
    answer: "Autonomy",
    explanation: "Autonomy patient ke decision-making rights ko protect karta hai. Informed consent ke bina procedure karna patient ke rights violate karta hai. Ethical aur legal nursing practice me consent mandatory hai.",
    topic: "Nursing Ethics",
    difficulty: "hard"
  }
];

export default set2;

// Answer Key:
// [2,1,3,4,1,2,3,3,1,4,1,3,1,2,1,4,1,4,1,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5
