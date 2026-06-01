const set4 = [
  {
    id: 1,
    question: "Patient me intracranial pressure badhne par sabse pehle kis physiological parameter me change dekha ja sakta hai?",
    options: [
      "Urine output increase",
      "Level of consciousness me change",
      "Blood glucose decrease",
      "Hemoglobin increase"
    ],
    answer: "Level of consciousness me change",
    explanation: "Increased intracranial pressure ka sabse early sign altered level of consciousness hota hai. Nurse ko neurological assessment par close monitoring karni chahiye.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Coronary artery blockage ke turant baad myocardium me sabse pehla effect kya hota hai?",
    options: [
      "Permanent necrosis",
      "Loss of contractility",
      "Valve rupture",
      "RBC destruction"
    ],
    answer: "Loss of contractility",
    explanation: "Ischemia ke kuch seconds ke andar myocardial contractility reduce ho jati hai. Necrosis baad me develop hoti hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Agar surfactant completely absent ho jaye to sabse adhik kya hoga?",
    options: [
      "Alveolar collapse",
      "Hyperglycemia",
      "Hypertension",
      "Polycythemia"
    ],
    answer: "Alveolar collapse",
    explanation: "Surfactant surface tension ko kam karta hai. Iski absence me alveoli collapse ho sakte hain.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Glomerular filtration ke liye sabse important force kaunsi hai?",
    options: [
      "Osmotic pressure",
      "Capsular pressure",
      "Oncotic pressure",
      "Glomerular hydrostatic pressure"
    ],
    answer: "Glomerular hydrostatic pressure",
    explanation: "Ye filtration ko drive karne wali primary force hai. Baaki pressures filtration ko oppose karte hain.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Spinal cord ke dorsal root ka main function kya hai?",
    options: [
      "Sensory impulses carry karna",
      "Motor impulses carry karna",
      "Hormone secretion",
      "CSF production"
    ],
    answer: "Sensory impulses carry karna",
    explanation: "Dorsal root sensory information ko spinal cord tak le jata hai. Ventral root motor impulses carry karta hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Iron deficiency anemia me RBC ka typical appearance kaisa hota hai?",
    options: [
      "Macrocytic",
      "Normocytic",
      "Microcytic hypochromic",
      "Sickle shaped"
    ],
    answer: "Microcytic hypochromic",
    explanation: "Iron deficiency me RBC chhote aur pale dikhte hain kyunki hemoglobin synthesis kam hoti hai.",
    topic: "Hematology",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Aldosterone ka direct effect kis electrolyte par sabse zyada hota hai?",
    options: [
      "Calcium",
      "Magnesium",
      "Potassium",
      "Sodium"
    ],
    answer: "Sodium",
    explanation: "Aldosterone sodium reabsorption increase karta hai aur potassium excretion badhata hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Fracture healing me callus formation kis stage me hoti hai?",
    options: [
      "Inflammatory stage",
      "Callus stage",
      "Remodeling stage",
      "Necrosis stage"
    ],
    answer: "Callus stage",
    explanation: "Soft aur hard callus formation fracture healing ka important intermediate phase hai.",
    topic: "Skeletal System",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Left ventricular hypertrophy ka sabse common physiological cause kya hai?",
    options: [
      "Systemic hypertension",
      "Anemia",
      "Hypoglycemia",
      "Leukopenia"
    ],
    answer: "Systemic hypertension",
    explanation: "High systemic pressure ke against pump karne se left ventricle hypertrophy develop karta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Muscle contraction ke dauran ATP ka primary role kya hai?",
    options: [
      "Oxygen transport",
      "Actin-myosin cross bridge cycle",
      "Calcium storage",
      "Nerve conduction"
    ],
    answer: "Actin-myosin cross bridge cycle",
    explanation: "ATP muscle contraction aur relaxation dono ke liye essential hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Blood group O negative ko universal donor kyu mana jata hai?",
    options: [
      "Antigen absent hote hain",
      "Hemoglobin zyada hota hai",
      "Platelets absent hote hain",
      "Plasma kam hota hai"
    ],
    answer: "Antigen absent hote hain",
    explanation: "O negative RBCs par A, B aur Rh antigen nahi hote, isliye compatibility sabse adhik hoti hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Parathyroid hormone ka secretion kab badhta hai?",
    options: [
      "High calcium level",
      "Low calcium level",
      "High glucose level",
      "Low sodium level"
    ],
    answer: "Low calcium level",
    explanation: "PTH serum calcium ko maintain karne ke liye low calcium par release hota hai.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Pepsin enzyme ka primary function kya hai?",
    options: [
      "Fat digestion",
      "Protein digestion",
      "Carbohydrate digestion",
      "Vitamin synthesis"
    ],
    answer: "Protein digestion",
    explanation: "Pepsin stomach me proteins ko peptides me todna start karta hai.",
    topic: "Digestive System",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Cerebrospinal fluid ka major production site kaunsa hai?",
    options: [
      "Hypothalamus",
      "Pituitary",
      "Choroid Plexus",
      "Cerebellum"
    ],
    answer: "Choroid Plexus",
    explanation: "CSF mainly brain ventricles ke choroid plexus dwara produce hota hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Carbon dioxide ka blood me sabse adhik transport kis form me hota hai?",
    options: [
      "Dissolved gas",
      "Carbaminohemoglobin",
      "Bicarbonate ion",
      "Carbonic acid"
    ],
    answer: "Bicarbonate ion",
    explanation: "Lagbhag 70% CO2 bicarbonate form me transport hoti hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Nephron ka kaunsa part maximum water reabsorption karta hai?",
    options: [
      "Proximal Convoluted Tubule",
      "Distal Tubule",
      "Collecting Duct",
      "Bowman Capsule"
    ],
    answer: "Proximal Convoluted Tubule",
    explanation: "Filtered water ka adhiktar hissa PCT me reabsorb hota hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Sympathetic stimulation ke dauran bronchial tubes par kya effect hota hai?",
    options: [
      "Bronchoconstriction",
      "Bronchodilation",
      "No change",
      "Airway collapse"
    ],
    answer: "Bronchodilation",
    explanation: "Fight-or-flight response me oxygen supply badhane ke liye bronchi dilate hoti hain.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Platelets ka normal physiological role kya hai?",
    options: [
      "Oxygen transport",
      "Immunity",
      "Blood clotting",
      "Hormone production"
    ],
    answer: "Blood clotting",
    explanation: "Platelets hemostasis aur clot formation ke liye essential hote hain.",
    topic: "Hematology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Hypothalamus ka sabse important endocrine function kya hai?",
    options: [
      "Releasing hormones banana",
      "RBC banana",
      "Bile secretion",
      "Insulin storage"
    ],
    answer: "Releasing hormones banana",
    explanation: "Hypothalamus pituitary gland ko regulate karne wale hormones produce karta hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Shoulder joint kis type ka synovial joint hai?",
    options: [
      "Hinge joint",
      "Pivot joint",
      "Condyloid joint",
      "Ball and socket joint"
    ],
    answer: "Ball and socket joint",
    explanation: "Shoulder body ka sabse mobile joint hai jo ball and socket category me aata hai.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Myocardial infarction me sabse pehle kis biomarker ka level badhta hai?",
    options: [
      "Troponin",
      "Albumin",
      "Bilirubin",
      "Hemoglobin"
    ],
    answer: "Troponin",
    explanation: "Troponin myocardial injury ka sabse sensitive aur specific marker hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Muscle fatigue ka ek major physiological cause kya hai?",
    options: [
      "ATP depletion",
      "Excess calcium",
      "Excess oxygen",
      "Increased glycogen"
    ],
    answer: "ATP depletion",
    explanation: "Prolonged activity ke dauran ATP availability kam hone se fatigue develop hoti hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "Intrinsic pathway of coagulation kis factor ke activation se start hota hai?",
    options: [
      "Factor XII",
      "Factor II",
      "Factor VII",
      "Factor X"
    ],
    answer: "Factor XII",
    explanation: "Contact activation ke baad Factor XII intrinsic pathway ko initiate karta hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Calcitonin ka primary effect kya hai?",
    options: [
      "Blood calcium badhana",
      "Blood calcium kam karna",
      "Blood glucose badhana",
      "Blood pressure badhana"
    ],
    answer: "Blood calcium kam karna",
    explanation: "Calcitonin osteoclast activity ko suppress karke calcium level reduce karta hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "Small intestine me iron absorption sabse adhik kahan hoti hai?",
    options: [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Colon"
    ],
    answer: "Duodenum",
    explanation: "Iron absorption ka major site duodenum hota hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Cerebellum ka primary function kya hai?",
    options: [
      "Language",
      "Vision",
      "Coordination aur balance",
      "Hormone secretion"
    ],
    answer: "Coordination aur balance",
    explanation: "Cerebellum posture, balance aur smooth movement maintain karta hai.",
    topic: "Nervous System",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Respiratory acidosis ka common cause kya hai?",
    options: [
      "Hyperventilation",
      "Hypoventilation",
      "Vomiting",
      "Diarrhea"
    ],
    answer: "Hypoventilation",
    explanation: "CO2 retention ke karan respiratory acidosis develop hoti hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Macula densa ka primary role kya hai?",
    options: [
      "Tubular sodium monitor karna",
      "Insulin banana",
      "Bile banana",
      "RBC store karna"
    ],
    answer: "Tubular sodium monitor karna",
    explanation: "Macula densa GFR aur renin release regulation me important role nibhati hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "SA node normally kis chamber me located hota hai?",
    options: [
      "Right Atrium",
      "Left Atrium",
      "Right Ventricle",
      "Left Ventricle"
    ],
    answer: "Right Atrium",
    explanation: "SA node superior vena cava ke opening ke paas right atrium me hota hai.",
    topic: "Cardiovascular System",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Osteoclast cells ka primary function kya hai?",
    options: [
      "Bone formation",
      "Cartilage formation",
      "Bone resorption",
      "Collagen synthesis"
    ],
    answer: "Bone resorption",
    explanation: "Osteoclasts old bone ko break down karte hain jabki osteoblasts new bone banate hain.",
    topic: "Skeletal System",
    difficulty: "hard"
  }
];

export default set4;