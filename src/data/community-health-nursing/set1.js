const set1 = [
  {
    id: 1,
    question: "Ek gaon me Diarrhea ke cases achanak badh gaye hain. Community Health Nurse ki sabse pehli priority kya hogi?",
    options: ["Hospital referral list banana", "Source of contamination identify karna", "Naye staff recruit karna", "School survey karna"],
    answer: "Source of contamination identify karna",
    explanation: "Outbreak management me sabse pehla step source identify karna hota hai. Isse transmission chain todne me madad milti hai. Baaki options baad ke steps ho sakte hain.",
    topic: "Disease Prevention",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Home visit ke dauran Nurse dekhti hai ki TB patient dawa irregular le raha hai. Sabse appropriate action kya hai?",
    options: ["Patient ko ignore karna", "DOTS adherence reinforce karna", "Treatment turant band karna", "Family ko alag kar dena"],
    answer: "DOTS adherence reinforce karna",
    explanation: "TB control me treatment adherence bahut important hai. Irregular treatment drug resistance ka risk badhata hai. DOTS strategy isliye use ki jati hai.",
    topic: "Tuberculosis Control",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "High-risk pregnancy identify karne ka primary objective kya hai?",
    options: ["Delivery cost kam karna", "Hospital workload kam karna", "Maternal aur fetal complications prevent karna", "Record maintain karna"],
    answer: "Maternal aur fetal complications prevent karna",
    explanation: "High-risk cases ki early identification se timely intervention possible hota hai. Isse maternal aur neonatal morbidity kam hoti hai.",
    topic: "Maternal Health",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Community diagnosis karte waqt sabse pehle kis cheez ka assessment kiya jata hai?",
    options: ["Health needs aur problems", "Medicine stock", "Building design", "Nurse ki duty roster"],
    answer: "Health needs aur problems",
    explanation: "Community diagnosis ka base community ki health needs aur problems hoti hain. Isi ke basis par planning aur intervention hota hai.",
    topic: "Community Assessment",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "ASHA worker ka mukhya role kis se sambandhit hai?",
    options: ["Community aur health system ke beech link", "Hospital administration", "Medical college management", "Drug manufacturing"],
    answer: "Community aur health system ke beech link",
    explanation: "ASHA community level par awareness, referral aur follow-up me important role nibhati hai. Yeh health services tak pahunch badhati hai.",
    topic: "National Health Mission",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek village survey me IMR zyada paya gaya. Sabse pehle kis factor ka analysis karna chahiye?",
    options: ["Road construction", "Infant care practices", "Crop production", "Market availability"],
    answer: "Infant care practices",
    explanation: "IMR directly infant care, immunization, nutrition aur infection control se related hota hai. In factors ka assessment priority hota hai.",
    topic: "Child Health",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Primary prevention ka best example kaunsa hai?",
    options: ["Rehabilitation therapy", "Immunization", "Disability pension", "Physiotherapy"],
    answer: "Immunization",
    explanation: "Primary prevention disease hone se pehle protection provide karta hai. Immunization iska classic example hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Community Health Nursing ka focus kis par hota hai?",
    options: ["Sirf individual patient", "Sirf hospital care", "Population-based care", "Operation theatre management"],
    answer: "Population-based care",
    explanation: "Community Health Nursing individual ke sath-sath family aur community level par health promotion par focus karti hai.",
    topic: "Community Health Nursing",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Cold chain maintain na hone par sabse adhik prabhav kis par padega?",
    options: ["Vaccines ki potency", "Hospital furniture", "Patient records", "Water supply"],
    answer: "Vaccines ki potency",
    explanation: "Cold chain break hone par vaccine effectiveness kam ho sakti hai. Isliye recommended temperature maintain karna zaruri hai.",
    topic: "Immunization",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Health education session ke baad learning evaluate karne ka sabse achha method kya hai?",
    options: ["Attendance count", "Return demonstration", "Room inspection", "Budget analysis"],
    answer: "Return demonstration",
    explanation: "Return demonstration se pata chalta hai ki learner ne skill ko sahi samjha aur apply kar sakta hai ya nahi.",
    topic: "Health Education",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Epidemiological triad me kaunsa component shamil nahi hota?",
    options: ["Agent", "Host", "Environment", "Finance"],
    answer: "Finance",
    explanation: "Epidemiological triad me agent, host aur environment shamil hote hain. Finance disease causation model ka part nahi hai.",
    topic: "Epidemiology",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Agar ek area me Measles outbreak ho jaye to sabse pehla public health measure kya hoga?",
    options: ["Mass screening aur surveillance", "School band karna", "Road block karna", "Migration karwana"],
    answer: "Mass screening aur surveillance",
    explanation: "Outbreak control ke liye surveillance aur case detection bahut important hai. Isse spread ko monitor aur control kiya jata hai.",
    topic: "Outbreak Investigation",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Family planning counseling me informed choice ka matlab kya hai?",
    options: ["Nurse method decide kare", "Family method decide kare bina jankari", "Client ko puri jankari dekar decision lene dena", "Doctor hi decision le"],
    answer: "Client ko puri jankari dekar decision lene dena",
    explanation: "Informed choice patient autonomy ko support karta hai. Counseling unbiased aur complete honi chahiye.",
    topic: "Family Planning",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Secondary prevention ka example kaunsa hai?",
    options: ["Health promotion", "Screening test", "Rehabilitation", "Vocational training"],
    answer: "Screening test",
    explanation: "Secondary prevention disease ki early detection aur treatment par focus karta hai. Screening iska mukhya example hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Community survey me prevalence rate kis cheez ko darshata hai?",
    options: ["Naye cases", "Maujood total cases", "Deaths only", "Births only"],
    answer: "Maujood total cases",
    explanation: "Prevalence kisi samay par disease ke total existing cases ko darshata hai. Incidence naye cases ko batata hai.",
    topic: "Biostatistics",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Safe drinking water ensure karne ke liye sabse commonly use ki jane wali chemical method kya hai?",
    options: ["Chlorination", "Radiation", "Freezing", "Filtration cloth"],
    answer: "Chlorination",
    explanation: "Chlorination economical aur effective water disinfection method hai. Yeh disease transmission kam karta hai.",
    topic: "Environmental Health",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Antenatal mother me severe anemia detect hota hai. Community Nurse ka priority action kya hoga?",
    options: ["Referral aur treatment initiation", "Home isolation", "Vaccination stop karna", "Delivery postpone karna"],
    answer: "Referral aur treatment initiation",
    explanation: "Severe anemia maternal aur fetal risk badhata hai. Timely referral aur management zaruri hai.",
    topic: "Maternal Health",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Health indicator ke roop me IMR ka upyog kyon kiya jata hai?",
    options: ["Adult literacy batata hai", "Community health status reflect karta hai", "Income level batata hai", "Migration batata hai"],
    answer: "Community health status reflect karta hai",
    explanation: "IMR ek sensitive health indicator hai jo nutrition, maternal care aur health services ki quality ko indirectly reflect karta hai.",
    topic: "Health Indicators",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Community participation ka sabse bada fayda kya hai?",
    options: ["Program acceptance aur sustainability", "Budget reduction only", "Nurse workload increase", "Record duplication"],
    answer: "Program acceptance aur sustainability",
    explanation: "Jab community involve hoti hai to ownership badhta hai aur health programs zyada effective rehte hain.",
    topic: "Community Participation",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Home visit ka sabse important principle kya hai?",
    options: ["Nurse convenience", "Planned aur purposeful approach", "Short duration only", "Unannounced visit always"],
    answer: "Planned aur purposeful approach",
    explanation: "Home visit systematic aur goal-oriented honi chahiye. Isse assessment aur intervention effective hote hain.",
    topic: "Home Visit",
    difficulty: "hard"
  },
  {
    id: 21,
    question: "Tertiary prevention kis par focus karta hai?",
    options: ["Disability limitation aur rehabilitation", "Vaccination", "Health promotion", "Case finding"],
    answer: "Disability limitation aur rehabilitation",
    explanation: "Tertiary prevention disease ke baad disability ko kam karne aur rehabilitation par focus karta hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Vector-borne disease control me sabse effective community strategy kya hai?",
    options: ["Breeding sites elimination", "School closure", "Food restriction", "Migration control"],
    answer: "Breeding sites elimination",
    explanation: "Mosquito breeding sites hatane se vector population kam hoti hai aur disease transmission control hota hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "Demographic data collect karte waqt dependency ratio kis liye useful hai?",
    options: ["Economic burden assess karne ke liye", "Blood group assess karne ke liye", "Disease diagnosis ke liye", "Drug calculation ke liye"],
    answer: "Economic burden assess karne ke liye",
    explanation: "Dependency ratio working aur dependent population ke relation ko darshata hai. Planning me iska upyog hota hai.",
    topic: "Demography",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "School health program ka major objective kya hai?",
    options: ["Student health promotion", "School income badhana", "Teacher recruitment", "Building expansion"],
    answer: "Student health promotion",
    explanation: "School health services physical, mental aur social well-being ko improve karne par focus karti hain.",
    topic: "School Health Services",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Community health record maintain karne ka mukhya uddeshya kya hai?",
    options: ["Continuity of care", "Decoration", "Marketing", "Revenue generation"],
    answer: "Continuity of care",
    explanation: "Accurate records se follow-up, evaluation aur continuity of care ensure hoti hai.",
    topic: "Records and Reports",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Malnutrition survey me MUAC measurement kis group ke liye adhik upyogi hai?",
    options: ["Under-five children", "Pregnant women only", "Elderly only", "Adolescents only"],
    answer: "Under-five children",
    explanation: "MUAC under-five children me acute malnutrition identify karne ka simple aur reliable tool hai.",
    topic: "Nutrition",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Health planning cycle ka pehla step kya mana jata hai?",
    options: ["Situation analysis", "Implementation", "Evaluation", "Budget approval"],
    answer: "Situation analysis",
    explanation: "Health planning assessment se shuru hoti hai. Situation analysis ke bina effective planning sambhav nahi hai.",
    topic: "Health Planning",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Community me behavioral change lane ke liye sabse zaruri factor kya hai?",
    options: ["Active participation aur motivation", "Forceful orders", "Punishment", "Political pressure"],
    answer: "Active participation aur motivation",
    explanation: "Long-term behavioral change tabhi hota hai jab log actively participate karein aur motivate hon.",
    topic: "Behavior Change Communication",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "Incidence rate kis cheez ko measure karta hai?",
    options: ["Disease ke naye cases", "Total existing cases", "Death rate only", "Birth rate only"],
    answer: "Disease ke naye cases",
    explanation: "Incidence disease ke naye cases ko measure karta hai aur risk assess karne me useful hota hai.",
    topic: "Biostatistics",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Community Health Nurse ko disaster situation me sabse pehle kya karna chahiye?",
    options: ["Triage aur priority assessment", "Detailed record filing", "Research survey", "Routine vaccination"],
    answer: "Triage aur priority assessment",
    explanation: "Disaster management me limited resources ke beech sabse critical patients ko identify karna priority hoti hai. Triage life-saving step hai.",
    topic: "Disaster Management",
    difficulty: "hard"
  }
];

export default set1;