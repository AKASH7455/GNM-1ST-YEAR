const set2 = [
  {
    id: 1,
    question: "Ek gaon me 2 hafte ke andar Typhoid ke kai cases report hue hain. Community Health Nurse ko sabse pehle kya karna chahiye?",
    options: [
      "Mass vaccination shuru karna",
      "School band kar dena",
      "Water source aur sanitation ki investigation karna",
      "Sab patients ko referral dena"
    ],
    answer: "Water source aur sanitation ki investigation karna",
    explanation: "Typhoid adhiktar contaminated food aur water se spread hota hai. Source identify kiye bina outbreak control karna mushkil hota hai. Investigation epidemiological process ka pehla step hai.",
    topic: "Outbreak Investigation",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Community survey me Crude Birth Rate nikalne ka mukhya uddeshya kya hai?",
    options: [
      "Population growth trend samajhna",
      "Disease prevalence nikalna",
      "Infant mortality calculate karna",
      "Migration assess karna"
    ],
    answer: "Population growth trend samajhna",
    explanation: "Crude Birth Rate population increase ka important indicator hai. Yeh future health planning aur resource allocation me madad karta hai.",
    topic: "Demography",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Ek bacche ko severe acute malnutrition diagnose hua hai. Community level par priority kya hogi?",
    options: [
      "Routine follow-up",
      "Nutrition counseling only",
      "Immediate nutritional management aur referral",
      "School enrollment"
    ],
    answer: "Immediate nutritional management aur referral",
    explanation: "Severe acute malnutrition mortality risk badhata hai. Immediate intervention aur referral zaruri hai. Sirf counseling par nirbhar rehna kaafi nahi hota.",
    topic: "Nutrition",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Primary Health Care me 'appropriate technology' ka matlab kya hai?",
    options: [
      "Sabse mehengi technology",
      "Community ke liye suitable aur affordable technology",
      "Sirf imported equipment",
      "Specialist level machinery"
    ],
    answer: "Community ke liye suitable aur affordable technology",
    explanation: "Appropriate technology local resources ke hisab se practical aur cost-effective honi chahiye. Isi se wide coverage milti hai.",
    topic: "Primary Health Care",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Agar kisi village me immunization coverage 50% se kam ho to sabse bada risk kya hai?",
    options: [
      "Herd immunity ka toot jana",
      "Hospital building damage",
      "Population decrease",
      "Income reduction"
    ],
    answer: "Herd immunity ka toot jana",
    explanation: "Low immunization coverage se vaccine preventable diseases ke outbreaks ka risk badh jata hai. Herd immunity community protection deti hai.",
    topic: "Immunization",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Home visit ke dauran Nurse ko family me domestic violence ka suspicion hota hai. Sabse appropriate nursing action kya hai?",
    options: [
      "Case ignore karna",
      "Police complaint khud file kar dena",
      "Family ko publicly confront karna",
      "Confidential assessment aur support provide karna"
    ],
    answer: "Confidential assessment aur support provide karna",
    explanation: "Domestic violence cases me confidentiality aur safety bahut important hoti hai. Trust build karke appropriate referral aur support diya jata hai.",
    topic: "Home Visit",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Community diagnosis ke liye sabse useful data source kaunsa mana jata hai?",
    options: [
      "Community health records",
      "Political reports",
      "Market survey",
      "Transport records"
    ],
    answer: "Community health records",
    explanation: "Health records disease pattern, mortality aur morbidity trends ko reflect karte hain. Yeh community assessment ka strong source hote hain.",
    topic: "Community Diagnosis",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Ek pregnant woman ka hemoglobin 6 g/dL hai. Community Nurse ko kya karna chahiye?",
    options: [
      "Routine ANC continue karna",
      "Immediate referral for specialized care",
      "Next month review karna",
      "Sirf diet advice dena"
    ],
    answer: "Immediate referral for specialized care",
    explanation: "Hb 6 g/dL severe anemia indicate karta hai. Maternal aur fetal complications ke risk ko dekhte hue urgent referral zaruri hai.",
    topic: "Maternal Health",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Health education me audiovisual aids ka sabse bada fayda kya hai?",
    options: [
      "Learning aur retention improve karna",
      "Program duration badhana",
      "Record keeping kam karna",
      "Budget increase karna"
    ],
    answer: "Learning aur retention improve karna",
    explanation: "Visual aur auditory stimulation learning ko effective banati hai. Participants concepts ko zyada achhi tarah yaad rakh pate hain.",
    topic: "Health Education",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Vector-borne disease prevention me larvicidal measures ka objective kya hai?",
    options: [
      "Adult mosquito treatment",
      "Disease diagnosis",
      "Larvae ko destroy karna",
      "Water purification"
    ],
    answer: "Larvae ko destroy karna",
    explanation: "Larvicidal measures mosquito lifecycle ko early stage me hi rok dete hain. Isse vector population kam hoti hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Under-five clinic ka primary objective kya hai?",
    options: [
      "Child growth aur development monitoring",
      "Adult treatment",
      "Geriatric care",
      "Surgical services"
    ],
    answer: "Child growth aur development monitoring",
    explanation: "Under-five clinics growth monitoring, immunization aur nutrition surveillance ke liye important hote hain.",
    topic: "Child Health",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Agar community me Fluoride level bahut high ho to kaunsi condition develop ho sakti hai?",
    options: [
      "Scurvy",
      "Rickets",
      "Night blindness",
      "Fluorosis"
    ],
    answer: "Fluorosis",
    explanation: "Excess fluoride exposure dental aur skeletal fluorosis ka karan ban sakta hai. Water quality monitoring zaruri hai.",
    topic: "Environmental Health",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Secondary prevention ka best example kaunsa hai?",
    options: [
      "Rehabilitation therapy",
      "Hypertension screening",
      "Disability support",
      "Vocational training"
    ],
    answer: "Hypertension screening",
    explanation: "Secondary prevention disease ki early detection aur treatment par focus karta hai. Screening iska classic example hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "ASHA worker ka ek important function kya hai?",
    options: [
      "Community aur health system ke beech link banana",
      "Major surgery karna",
      "Drug manufacturing",
      "Hospital administration"
    ],
    answer: "Community aur health system ke beech link banana",
    explanation: "ASHA community level par awareness, referral aur follow-up activities me important role nibhati hai.",
    topic: "National Health Mission",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Incidence rate me denominator kis population ko represent karta hai?",
    options: [
      "At-risk population",
      "Total deaths",
      "Recovered cases",
      "Hospital admissions"
    ],
    answer: "At-risk population",
    explanation: "Incidence un logon me calculate ki jati hai jo disease develop kar sakte hain. Isliye denominator at-risk population hoti hai.",
    topic: "Biostatistics",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "School health services me vision screening ka main purpose kya hai?",
    options: [
      "Learning difficulties ko early identify karna",
      "Attendance calculate karna",
      "Teacher evaluation",
      "Building inspection"
    ],
    answer: "Learning difficulties ko early identify karna",
    explanation: "Poor vision academic performance ko affect kar sakti hai. Early screening timely correction me madad karti hai.",
    topic: "School Health",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Community participation ko badhane ke liye sabse effective strategy kya hai?",
    options: [
      "People ko planning process me involve karna",
      "Sirf written notice dena",
      "Punishment lagana",
      "External control rakhna"
    ],
    answer: "People ko planning process me involve karna",
    explanation: "Jab log decision making me shamil hote hain to ownership aur participation dono badhte hain.",
    topic: "Community Participation",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Disaster ke baad sabse pehle kis public health issue ko address karna zaruri hota hai?",
    options: [
      "Tourism development",
      "Sanitation aur safe water supply",
      "Sports activities",
      "Tax collection"
    ],
    answer: "Sanitation aur safe water supply",
    explanation: "Disaster ke baad water-borne diseases ka risk bahut badh jata hai. Safe water aur sanitation priority hoti hai.",
    topic: "Disaster Management",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Health planning cycle ka final step kya hota hai?",
    options: [
      "Situation analysis",
      "Evaluation",
      "Priority setting",
      "Implementation"
    ],
    answer: "Evaluation",
    explanation: "Evaluation se pata chalta hai ki objectives achieve hue ya nahi. Iske findings future planning me use ki jati hain.",
    topic: "Health Planning",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community Health Nursing ka ultimate goal kya hai?",
    options: [
      "Sirf disease treatment",
      "Hospital occupancy badhana",
      "Community ki health status improve karna",
      "Medical records maintain karna"
    ],
    answer: "Community ki health status improve karna",
    explanation: "Community Health Nursing ka focus health promotion, disease prevention aur overall community well-being par hota hai.",
    topic: "Community Health Nursing",
    difficulty: "medium"
  }
];

export default set2;