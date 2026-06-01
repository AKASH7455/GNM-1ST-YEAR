const set5 = [
  {
    id: 1,
    question: "Severe head injury ke baad patient ki right side body weak ho gayi hai. Sabse probable lesion kahan hoga?",
    options: ["Right Cerebrum", "Left Cerebrum", "Cerebellum", "Medulla"],
    answer: "Left Cerebrum",
    explanation: "Motor pathways adhiktar cross karte hain. Left cerebral hemisphere ki injury se right side weakness develop hoti hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Cardiac tamponade me cardiac output kam hone ka main reason kya hai?",
    options: ["Valve stenosis", "Coronary blockage", "Pericardial pressure se ventricular filling kam hona", "Increased RBC count"],
    answer: "Pericardial pressure se ventricular filling kam hona",
    explanation: "Pericardial fluid accumulation ventricles ko fill hone se rokta hai, jisse cardiac output gir jata hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Type II pneumocytes ka primary function kya hai?",
    options: ["Surfactant secretion", "Gas exchange", "Mucus production", "Immune response"],
    answer: "Surfactant secretion",
    explanation: "Type II pneumocytes surfactant banati hain jo alveolar collapse ko prevent karta hai.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Glomerular filtration rate ko sabse accurately assess karne ke liye kaunsa substance use kiya jata hai?",
    options: ["Glucose", "Urea", "Creatinine", "Inulin"],
    answer: "Inulin",
    explanation: "Inulin ideal filtration marker hai kyunki ye filter hota hai par reabsorb ya secrete nahi hota.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Myasthenia Gravis me primary defect kahan hota hai?",
    options: ["Neuromuscular junction", "Spinal cord", "Cerebellum", "Peripheral nerve myelin"],
    answer: "Neuromuscular junction",
    explanation: "Acetylcholine receptors par antibodies attack karti hain jisse muscle weakness hoti hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Intrinsic factor ki deficiency se kis vitamin ka absorption affect hota hai?",
    options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
    answer: "Vitamin B12",
    explanation: "Intrinsic factor stomach me banta hai aur Vitamin B12 absorption ke liye essential hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Primary hyperparathyroidism me blood calcium level par kya effect hoga?",
    options: ["Decrease", "Increase", "No change", "Initially decrease then increase"],
    answer: "Increase",
    explanation: "Excess PTH bone resorption aur calcium reabsorption badhata hai jisse hypercalcemia hoti hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Epiphyseal plate ka closure hone ke baad kya ruk jata hai?",
    options: ["Bone remodeling", "Bone thickness growth", "Longitudinal bone growth", "Calcium deposition"],
    answer: "Longitudinal bone growth",
    explanation: "Epiphyseal plate close hone ke baad bone length increase nahi hoti.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Complete AV block me ventricles contract kis mechanism se karte hain?",
    options: ["SA node impulses", "Escape pacemaker activity", "Atrial contraction", "Sympathetic stimulation only"],
    answer: "Escape pacemaker activity",
    explanation: "AV block me ventricles apna slow intrinsic pacemaker rhythm develop kar lete hain.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Skeletal muscle relaxation ke liye calcium ko kahan pump kiya jata hai?",
    options: ["Mitochondria", "Nucleus", "Sarcoplasmic Reticulum", "Golgi Body"],
    answer: "Sarcoplasmic Reticulum",
    explanation: "Relaxation ke liye calcium SR me wapas store kiya jata hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Fetal hemoglobin oxygen ko adult hemoglobin se zyada strongly kyu bind karta hai?",
    options: ["Low affinity for oxygen", "High affinity for oxygen", "Less iron content", "More RBC count"],
    answer: "High affinity for oxygen",
    explanation: "Fetal hemoglobin placenta se oxygen extraction ko efficient banata hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Posterior pituitary kaunsa hormone release karti hai?",
    options: ["TSH", "ACTH", "ADH", "FSH"],
    answer: "ADH",
    explanation: "Posterior pituitary ADH aur Oxytocin release karti hai.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Lacteals ka primary function kya hai?",
    options: ["Protein absorption", "Fat absorption", "Iron absorption", "Water secretion"],
    answer: "Fat absorption",
    explanation: "Lacteals intestinal villi me hote hain aur dietary fats absorb karte hain.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Broca's area damage hone par patient me kya problem hogi?",
    options: ["Vision loss", "Speech production difficulty", "Hearing loss", "Memory loss"],
    answer: "Speech production difficulty",
    explanation: "Broca's area speech formation ke liye responsible hota hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Bohr effect ka result kya hota hai?",
    options: ["Tissues me oxygen release increase", "Oxygen binding increase", "CO2 transport stop", "Hemoglobin synthesis increase"],
    answer: "Tissues me oxygen release increase",
    explanation: "High CO2 aur low pH par hemoglobin oxygen ko tissues me zyada release karta hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Countercurrent mechanism primarily kis structure me hota hai?",
    options: ["Collecting Duct", "Loop of Henle", "Bowman Capsule", "Distal Tubule"],
    answer: "Loop of Henle",
    explanation: "Urine concentration ke liye countercurrent mechanism Loop of Henle me operate karta hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Sympathetic stimulation se pupil par kya effect hota hai?",
    options: ["Constriction", "Dilation", "No change", "Fixed pupil"],
    answer: "Dilation",
    explanation: "Fight-or-flight response me pupil dilate hoti hai taki vision improve ho.",
    topic: "Nervous System",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Thrombocytopenia me sabse expected clinical finding kya hogi?",
    options: ["Hypertension", "Excessive bleeding tendency", "Hyperglycemia", "Bradycardia"],
    answer: "Excessive bleeding tendency",
    explanation: "Platelet count kam hone se clot formation affect hoti hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Insulin ka sabse important metabolic effect kya hai?",
    options: ["Blood glucose kam karna", "Blood calcium badhana", "RBC production", "Blood pressure badhana"],
    answer: "Blood glucose kam karna",
    explanation: "Insulin glucose uptake badhakar blood sugar level reduce karta hai.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Haversian canal kis tissue me paya jata hai?",
    options: ["Cartilage", "Compact Bone", "Skeletal Muscle", "Ligament"],
    answer: "Compact Bone",
    explanation: "Haversian system compact bone ki structural unit hoti hai.",
    topic: "Skeletal System",
    difficulty: "hard"
  },
  {
    id: 21,
    question: "Mitral stenosis ka sabse direct effect kis chamber par hota hai?",
    options: ["Left Atrium", "Right Atrium", "Right Ventricle", "Aorta"],
    answer: "Left Atrium",
    explanation: "Mitral stenosis me left atrium ko blood push karne me zyada pressure lagta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Rigor mortis ka physiological reason kya hai?",
    options: ["ATP depletion", "Excess oxygen", "High glucose", "Increased calcium excretion"],
    answer: "ATP depletion",
    explanation: "Death ke baad ATP khatam hone se actin-myosin detach nahi ho pate.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "Basophils ka major function kya hai?",
    options: ["Histamine release", "Oxygen transport", "Clot formation", "Antibody production"],
    answer: "Histamine release",
    explanation: "Basophils allergic reactions me histamine release karte hain.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Thyroid gland ka functional unit kya hai?",
    options: ["Acinus", "Follicle", "Nephron", "Osteon"],
    answer: "Follicle",
    explanation: "Thyroid follicles thyroid hormones ko synthesize aur store karte hain.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Portal vein ka blood kis organ se sabse adhik aata hai?",
    options: ["Small Intestine", "Heart", "Lung", "Kidney"],
    answer: "Small Intestine",
    explanation: "Absorbed nutrients ka adhiktar blood small intestine se portal vein me aata hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Reticular activating system damage hone par kya ho sakta hai?",
    options: ["Coma", "Hyperthyroidism", "Polycythemia", "Tachycardia"],
    answer: "Coma",
    explanation: "RAS consciousness maintain karne me important role nibhata hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Respiratory center ko sabse powerful stimulus kya provide karta hai?",
    options: ["Increased CO2", "Increased Oxygen", "Increased Sodium", "Increased Calcium"],
    answer: "Increased CO2",
    explanation: "Carbon dioxide level badhne par respiration strongly stimulate hoti hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Juxtaglomerular cells ka primary secretion kya hai?",
    options: ["ADH", "Renin", "Insulin", "Erythropoietin"],
    answer: "Renin",
    explanation: "Renin RAAS system ko activate karta hai aur BP regulate karta hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "Purkinje fibers ka main role kya hai?",
    options: ["Fast ventricular impulse conduction", "Valve closure", "Blood filtration", "Hormone secretion"],
    answer: "Fast ventricular impulse conduction",
    explanation: "Purkinje fibers ventricles me electrical impulses ko rapidly conduct karte hain.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "Osteomalacia ka primary cause kya hai?",
    options: ["Vitamin D deficiency", "Vitamin C deficiency", "Iron deficiency", "Vitamin K deficiency"],
    answer: "Vitamin D deficiency",
    explanation: "Vitamin D deficiency se bone mineralization proper nahi hoti aur osteomalacia develop hoti hai.",
    topic: "Skeletal System",
    difficulty: "hard"
  }
];

export default set5;