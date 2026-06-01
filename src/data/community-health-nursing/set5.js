// Answer Position Pattern:
// 3,1,4,2,1,3,2,4,1,4,2,3,4,1,3,2,1,4,2,3

const set5 = [
  {
    id: 1,
    question: "Village me Hepatitis A ke kai cases report hue hain. Sabse pehla public health action kya hona chahiye?",
    options: ["Mass vaccination", "Hospital expansion", "Water source investigation", "School closure"],
    answer: "Water source investigation",
    explanation: "Hepatitis A contaminated water aur food se spread hota hai. Source investigation outbreak control ka pehla step hai.",
    topic: "Communicable Diseases",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Maternal mortality ko kam karne ke liye sabse effective intervention kya mana jata hai?",
    options: ["Skilled birth attendance", "School health program", "Deworming", "Vitamin A campaign"],
    answer: "Skilled birth attendance",
    explanation: "Skilled birth attendance complications ko early identify aur manage karne me madad karti hai.",
    topic: "Maternal Health",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Community me obesity badhne ka sabse important modifiable risk factor kya hai?",
    options: ["Genetics", "Age", "Gender", "Physical inactivity"],
    answer: "Physical inactivity",
    explanation: "Sedentary lifestyle obesity aur NCDs ka major modifiable risk factor hai.",
    topic: "Non-Communicable Diseases",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "School health examination ka mukhya uddeshya kya hai?",
    options: ["Teacher evaluation", "Health problems ki early detection", "Income assessment", "Attendance monitoring"],
    answer: "Health problems ki early detection",
    explanation: "Regular screening se diseases aur developmental issues early stage me pakde ja sakte hain.",
    topic: "School Health",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Primary prevention ka sabse achha example kaunsa hai?",
    options: ["Immunization", "Rehabilitation", "Physiotherapy", "Disability pension"],
    answer: "Immunization",
    explanation: "Immunization disease hone se pehle protection provide karta hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Community survey me low sanitation coverage milti hai. Sabse bada health risk kya hoga?",
    options: ["Anemia", "Hypertension", "Water-borne diseases", "Diabetes"],
    answer: "Water-borne diseases",
    explanation: "Poor sanitation diarrheal diseases aur enteric infections ka risk badhati hai.",
    topic: "Environmental Health",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "DOTS strategy ka primary objective kya hai?",
    options: ["Nutrition improve karna", "TB treatment adherence ensure karna", "Immunization coverage badhana", "Maternal mortality kam karna"],
    answer: "TB treatment adherence ensure karna",
    explanation: "DOTS TB patients ko complete treatment lene me help karta hai aur resistance rokta hai.",
    topic: "Tuberculosis Control",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Disaster relief camp me sabse pehle kis facility ki vyavastha honi chahiye?",
    options: ["Library", "Sports area", "Entertainment hall", "Safe water supply"],
    answer: "Safe water supply",
    explanation: "Safe water communicable disease outbreaks ko rokne ke liye sabse pehli zarurat hoti hai.",
    topic: "Disaster Management",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Incidence rate kya measure karta hai?",
    options: ["Naye disease cases", "Total cases", "Birth rate", "Death rate"],
    answer: "Naye disease cases",
    explanation: "Incidence disease ke naye cases aur risk ko reflect karta hai.",
    topic: "Biostatistics",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Community participation ka sabse bada fayda kya hai?",
    options: ["Political influence", "Tax reduction", "Hospital crowding", "Program sustainability"],
    answer: "Program sustainability",
    explanation: "Community ownership se programs lambe samay tak safal rehte hain.",
    topic: "Community Participation",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Health education me demonstration method kab use karni chahiye?",
    options: ["Theory explain karne ke liye", "Skill sikhane ke liye", "Attendance lene ke liye", "Survey karne ke liye"],
    answer: "Skill sikhane ke liye",
    explanation: "Demonstration practical skills jaise hand washing ya ORS preparation sikhane ke liye best hai.",
    topic: "Health Education",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Agar community me malaria cases badh rahe hain to sabse pehla vector control measure kya hoga?",
    options: ["Mass X-ray", "School closure", "Mosquito breeding sites remove karna", "Blood donation"],
    answer: "Mosquito breeding sites remove karna",
    explanation: "Breeding site control malaria prevention ka sabse effective environmental measure hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Community diagnosis ka primary objective kya hai?",
    options: ["Budget banana", "Election planning", "Tax collection", "Priority health problems identify karna"],
    answer: "Priority health problems identify karna",
    explanation: "Community diagnosis se major health needs aur priorities identify ki jati hain.",
    topic: "Community Diagnosis",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Cold chain maintain karne ka mukhya uddeshya kya hai?",
    options: ["Vaccine potency maintain karna", "Electricity bachana", "Transport cost kam karna", "Records maintain karna"],
    answer: "Vaccine potency maintain karna",
    explanation: "Cold chain vaccine ki effectiveness ko preserve karti hai.",
    topic: "Immunization",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Under-five clinic ka sabse important function kya hai?",
    options: ["Adult treatment", "Geriatric care", "Growth monitoring", "Surgery services"],
    answer: "Growth monitoring",
    explanation: "Growth monitoring se malnutrition aur developmental problems jaldi identify hoti hain.",
    topic: "Child Health",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Home visit ka sabse important principle kya hai?",
    options: ["Emergency only", "Planned aur purposeful approach", "Random timing", "Short duration"],
    answer: "Planned aur purposeful approach",
    explanation: "Home visit clear objectives aur planning ke saath honi chahiye.",
    topic: "Home Visit",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "ASHA worker ka primary role kya hai?",
    options: ["Community aur health system ke beech link", "Major surgery", "Hospital administration", "Drug manufacturing"],
    answer: "Community aur health system ke beech link",
    explanation: "ASHA community ko health services se connect karti hai.",
    topic: "National Health Mission",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Attack rate kis situation me sabse adhik useful hota hai?",
    options: ["Census", "Migration study", "Income survey", "Outbreak investigation"],
    answer: "Outbreak investigation",
    explanation: "Attack rate outbreak ke dauran disease occurrence ko assess karta hai.",
    topic: "Epidemiology",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Secondary prevention ka example kaunsa hai?",
    options: ["Immunization", "Hypertension screening", "Rehabilitation", "Health promotion"],
    answer: "Hypertension screening",
    explanation: "Screening disease ki early detection aur prompt treatment ke liye hoti hai.",
    topic: "Levels of Prevention",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Community Health Nursing ka ultimate goal kya hai?",
    options: ["Hospital workload badhana", "Disease treatment tak simit rehna", "Community health status improve karna", "Records maintain karna"],
    answer: "Community health status improve karna",
    explanation: "Community Health Nursing ka focus health promotion, prevention aur quality of life improve karna hai.",
    topic: "Community Health Nursing",
    difficulty: "medium"
  }
];

export default set5;