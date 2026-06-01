const set4 = [
  {
    id: 1,
    question: "Ek village me 30% bacche underweight paye gaye. Community Health Nurse ka sabse pehla kadam kya hona chahiye?",
    options: [
      "Mass hospitalization",
      "Detailed nutritional assessment karna",
      "School band karna",
      "Vaccination rok dena"
    ],
    answer: "Detailed nutritional assessment karna",
    explanation: "Underweight cases ka root cause samajhna zaruri hai. Nutritional assessment se dietary deficiency, infection ya socioeconomic factors identify kiye ja sakte hain.",
    topic: "Nutrition",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Agar kisi area me Maternal Mortality Rate achanak badh jaye to sabse pehle kis factor ka review karna chahiye?",
    options: [
      "Transport facility",
      "ANC, delivery aur emergency obstetric services",
      "School attendance",
      "Employment rate"
    ],
    answer: "ANC, delivery aur emergency obstetric services",
    explanation: "Maternal mortality directly antenatal care, skilled birth attendance aur emergency obstetric care se related hoti hai.",
    topic: "Maternal Health",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Community me Flu outbreak ke dauran sabse vulnerable population kaunsi mani jati hai?",
    options: [
      "Healthy adults",
      "College students",
      "Elderly aur chronic disease patients",
      "Athletes"
    ],
    answer: "Elderly aur chronic disease patients",
    explanation: "Elderly aur chronic illness wale logon me complications aur mortality ka risk adhik hota hai.",
    topic: "Communicable Diseases",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Health education program ki effectiveness assess karne ka sabse objective tareeka kya hai?",
    options: [
      "Participant feedback",
      "Attendance count",
      "Knowledge aur behavior change assessment",
      "Venue inspection"
    ],
    answer: "Knowledge aur behavior change assessment",
    explanation: "Actual learning aur behavior change hi health education ki effectiveness ko measure karte hain.",
    topic: "Health Education",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Community diagnosis me morbidity data ka upyog kis liye kiya jata hai?",
    options: [
      "Disease burden identify karne ke liye",
      "Income calculate karne ke liye",
      "Birth registration ke liye",
      "School planning ke liye"
    ],
    answer: "Disease burden identify karne ke liye",
    explanation: "Morbidity data disease frequency aur health needs ko samajhne me madad karta hai.",
    topic: "Community Diagnosis",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Primary prevention ka ek aur example kaunsa hai?",
    options: [
      "Screening test",
      "Health promotion activities",
      "Rehabilitation center",
      "Physiotherapy"
    ],
    answer: "Health promotion activities",
    explanation: "Primary prevention disease hone se pehle risk factors ko control karta hai. Health promotion iska important hissa hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Agar kisi gaon me malaria ke cases repeatedly aa rahe hon to sabse important epidemiological measure kya hoga?",
    options: [
      "Source reduction aur vector surveillance",
      "Hospital expansion",
      "School closure",
      "Mass X-ray"
    ],
    answer: "Source reduction aur vector surveillance",
    explanation: "Malaria control ke liye vector breeding sites ko eliminate karna aur surveillance maintain karna zaruri hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "School health program me periodic health examination ka mukhya uddeshya kya hai?",
    options: [
      "Academic performance badhana",
      "Early health problem detection",
      "Teacher evaluation",
      "Attendance monitoring"
    ],
    answer: "Early health problem detection",
    explanation: "Regular screening se diseases aur developmental problems early stage me detect ki ja sakti hain.",
    topic: "School Health",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Community participation ko sustain karne ke liye sabse zaruri factor kya hai?",
    options: [
      "Community ownership",
      "Government pressure",
      "Frequent punishment",
      "Strict supervision only"
    ],
    answer: "Community ownership",
    explanation: "Jab community ko lagta hai ki program unka apna hai tab participation aur sustainability dono badhte hain.",
    topic: "Community Participation",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Antenatal mother ko TT vaccination dene ka primary objective kya hai?",
    options: [
      "Maternal aur neonatal tetanus prevention",
      "Anemia treatment",
      "Weight gain",
      "Blood pressure control"
    ],
    answer: "Maternal aur neonatal tetanus prevention",
    explanation: "TT vaccine maa aur newborn dono ko tetanus infection se protection deti hai.",
    topic: "Maternal Health",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Community survey me attack rate kis situation me adhik useful hota hai?",
    options: [
      "Outbreak investigation",
      "Population census",
      "Income survey",
      "Migration study"
    ],
    answer: "Outbreak investigation",
    explanation: "Attack rate specific outbreak ke dauran disease occurrence ko measure karne ke liye use hota hai.",
    topic: "Epidemiology",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Disaster ke baad relief camp me sabse pehle kis cheez ki vyavastha honi chahiye?",
    options: [
      "Entertainment facilities",
      "Safe water aur sanitation",
      "Sports activities",
      "Library services"
    ],
    answer: "Safe water aur sanitation",
    explanation: "Disaster ke baad communicable disease outbreaks rokne ke liye safe water aur sanitation sabse pehli priority hoti hai.",
    topic: "Disaster Management",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Home visit ke dauran family health assessment me sabse important observation kya hai?",
    options: [
      "Family ka health behavior pattern",
      "Furniture arrangement",
      "TV channels",
      "Wall decoration"
    ],
    answer: "Family ka health behavior pattern",
    explanation: "Health practices aur behavior family ke disease risk aur health outcomes ko directly affect karte hain.",
    topic: "Home Visit",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Community me Vitamin D deficiency rokne ke liye sabse practical intervention kya hai?",
    options: [
      "Sunlight exposure promote karna",
      "Antibiotics dena",
      "Isolation karna",
      "Water chlorination"
    ],
    answer: "Sunlight exposure promote karna",
    explanation: "Vitamin D synthesis ke liye sunlight exposure bahut important hai. Yeh simple aur cost-effective strategy hai.",
    topic: "Nutrition",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Health planning me resource assessment kyon kiya jata hai?",
    options: [
      "Available manpower aur facilities identify karne ke liye",
      "Election planning ke liye",
      "School admission ke liye",
      "Tax collection ke liye"
    ],
    answer: "Available manpower aur facilities identify karne ke liye",
    explanation: "Resource assessment realistic planning aur effective implementation ke liye zaruri hai.",
    topic: "Health Planning",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Ek child ka immunization record incomplete hai. Nurse ka priority action kya hoga?",
    options: [
      "Catch-up immunization schedule banana",
      "Vaccination permanently stop karna",
      "School se nikal dena",
      "Record destroy karna"
    ],
    answer: "Catch-up immunization schedule banana",
    explanation: "Missed vaccines ko catch-up schedule ke through complete kiya jata hai taki protection maintain rahe.",
    topic: "Immunization",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "ASHA worker ki performance ka best indicator kya ho sakta hai?",
    options: [
      "Community service utilization me vriddhi",
      "Village population increase",
      "Road construction",
      "School result"
    ],
    answer: "Community service utilization me vriddhi",
    explanation: "ASHA ka role health services tak pahunch aur utilization badhana hai. Yeh uski effectiveness ko reflect karta hai.",
    topic: "National Health Mission",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Prevalence rate ka sabse bada limitation kya hai?",
    options: [
      "Disease duration se prabhavit hota hai",
      "Kabhi calculate nahi kiya ja sakta",
      "Deaths ko include nahi karta",
      "Population data ki zarurat nahi hoti"
    ],
    answer: "Disease duration se prabhavit hota hai",
    explanation: "Prevalence disease duration aur incidence dono se influence hota hai. Isliye interpretation me saavdhani zaruri hai.",
    topic: "Biostatistics",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Community Health Nursing ka sabse important philosophy statement kaunsa hai?",
    options: [
      "Health sabka adhikar hai",
      "Hospital hi health ka kendra hai",
      "Sirf doctors health improve kar sakte hain",
      "Disease unavoidable hai"
    ],
    answer: "Health sabka adhikar hai",
    explanation: "Community Health Nursing equity aur universal access ke principle par based hai.",
    topic: "Community Health Nursing",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Ek community me Hypertension screening camp lagaya gaya hai. Yeh kis level of prevention ka example hai?",
    options: [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    answer: "Secondary prevention",
    explanation: "Screening disease ki early detection ke liye ki jati hai, jo secondary prevention ka mukhya uddeshya hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  }
];

export default set4;