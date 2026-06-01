const set2 = [
  {
    id: 1,
    question: "Patient me facial paralysis ke saath taste sensation bhi lose ho gayi hai. Sabse adhik kaunsi cranial nerve affected hai?",
    options: ["Trigeminal Nerve", "Facial Nerve", "Glossopharyngeal Nerve", "Hypoglossal Nerve"],
    answer: "Facial Nerve",
    explanation: "Facial Nerve (CN VII) facial muscles aur anterior tongue ke taste sensation ko control karti hai. Isliye facial paralysis ke saath taste loss iska important sign hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Severe dehydration me body ka sabse immediate physiological response kya hoga?",
    options: ["ADH secretion increase", "Insulin secretion increase", "RBC destruction", "Platelet decrease"],
    answer: "ADH secretion increase",
    explanation: "Dehydration me ADH release badhta hai jisse kidney water conserve karti hai. Isse urine output kam hota hai aur fluid balance maintain rehta hai.",
    topic: "Urinary Physiology",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Normal adult me oxygen ka sabse adhik transport kis form me hota hai?",
    options: ["Plasma me dissolved", "Bicarbonate form", "Hemoglobin se bound", "Carbamino compounds"],
    answer: "Hemoglobin se bound",
    explanation: "Lagbhag 98% oxygen Hemoglobin ke saath transport hoti hai. Plasma me dissolved oxygen bahut kam hoti hai.",
    topic: "Respiratory Physiology",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Parathyroid hormone ka major target organ kaunsa hai?",
    options: ["Bone", "Skin", "Pancreas", "Spleen"],
    answer: "Bone",
    explanation: "PTH bone se calcium release karwata hai aur serum calcium level badhata hai. Kidney aur intestine par bhi indirect effect hota hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Cardiac muscle ki khas property jo usse skeletal muscle se alag banati hai?",
    options: ["Voluntary control", "Intercalated discs", "No mitochondria", "Single blood supply"],
    answer: "Intercalated discs",
    explanation: "Intercalated discs cardiac muscle cells ko electrically connect karte hain. Isi wajah se heart coordinated contraction karta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Vitamin D deficiency me calcium absorption sabse adhik kis organ me affect hota hai?",
    options: ["Large intestine", "Stomach", "Small intestine", "Esophagus"],
    answer: "Small intestine",
    explanation: "Vitamin D small intestine me calcium absorption ko facilitate karta hai. Deficiency me calcium uptake significantly kam ho jata hai.",
    topic: "Digestive Physiology",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Patient ko spinal cord injury T1 level ke niche hui hai. Sabse pehle kis function par prabhav padega?",
    options: ["Lower limb movement", "Vision", "Hearing", "Taste"],
    answer: "Lower limb movement",
    explanation: "T1 ke niche spinal cord injury se lower body ke motor aur sensory pathways affect hote hain. Cranial functions generally preserved rehte hain.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Body ka sabse bada lymphoid organ kaunsa hai?",
    options: ["Thymus", "Spleen", "Tonsil", "Appendix"],
    answer: "Spleen",
    explanation: "Spleen sabse bada lymphoid organ hai. Ye blood filtration aur immune response me important role nibhata hai.",
    topic: "Lymphatic System",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Metabolic acidosis me body ka compensatory response kya hoga?",
    options: ["Respiration slow hona", "Respiration fast hona", "Heart rate decrease", "Urine output band hona"],
    answer: "Respiration fast hona",
    explanation: "Acidosis me body excess CO2 ko remove karne ke liye hyperventilation karti hai. Ye respiratory compensation hai.",
    topic: "Acid Base Balance",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Acetylcholine receptor blockade ka direct effect kya hoga?",
    options: ["Muscle paralysis", "Increased contraction", "Hyperglycemia", "Polyuria"],
    answer: "Muscle paralysis",
    explanation: "Neuromuscular junction par Acetylcholine action block hone se muscle contraction nahi ho pata aur paralysis develop hota hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Coronary arteries ka primary function kya hai?",
    options: ["Lungs ko blood dena", "Heart muscle ko blood supply dena", "Brain perfusion", "Kidney filtration"],
    answer: "Heart muscle ko blood supply dena",
    explanation: "Coronary arteries myocardium ko oxygen aur nutrients provide karti hain. Inka blockage myocardial infarction ka major cause hai.",
    topic: "Cardiovascular System",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Nephron me maximum glucose reabsorption kis segment me hota hai?",
    options: ["Loop of Henle", "Collecting Duct", "Proximal Convoluted Tubule", "Distal Tubule"],
    answer: "Proximal Convoluted Tubule",
    explanation: "PCT me filtered glucose ka lagbhag poora hissa reabsorb ho jata hai. Diabetes me threshold cross hone par glycosuria hoti hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Agar bile secretion completely block ho jaye to sabse adhik kis nutrient ki absorption affect hogi?",
    options: ["Protein", "Fat", "Water", "Sodium"],
    answer: "Fat",
    explanation: "Bile fats ko emulsify karti hai. Iske bina fat digestion aur fat-soluble vitamin absorption severely affect hota hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Blood clot formation ka sabse pehla step kya hai?",
    options: ["Fibrin formation", "Platelet plug formation", "Clot retraction", "RBC destruction"],
    answer: "Platelet plug formation",
    explanation: "Vessel injury ke turant baad platelets aggregate karke platelet plug banate hain. Fibrin baad me clot ko stabilize karta hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Skeletal muscle contraction ke liye direct trigger kya hota hai?",
    options: ["Calcium ion release", "Potassium loss", "Glucose increase", "ATP destruction"],
    answer: "Calcium ion release",
    explanation: "Calcium troponin se bind karke actin-myosin interaction allow karta hai. Iske bina contraction possible nahi hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Pituitary gland ko master gland kyu kaha jata hai?",
    options: ["Sabse badi gland hai", "Dusri endocrine glands ko regulate karti hai", "Blood filter karti hai", "RBC banati hai"],
    answer: "Dusri endocrine glands ko regulate karti hai",
    explanation: "Pituitary TSH, ACTH, FSH jaise hormones release karti hai jo dusri endocrine glands ko control karte hain.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Pleural cavity me air enter hone par sabse probable condition kya hogi?",
    options: ["Pneumothorax", "Hemothorax", "Pericarditis", "Ascites"],
    answer: "Pneumothorax",
    explanation: "Pleural cavity me air aane se lung collapse ho sakta hai. Is condition ko pneumothorax kaha jata hai.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "WBC ka kaunsa type acute bacterial infection me sabse pehle increase hota hai?",
    options: ["Eosinophils", "Neutrophils", "Basophils", "Monocytes"],
    answer: "Neutrophils",
    explanation: "Neutrophils bacterial infection ke first-line defenders hote hain. Neutrophilia acute infection ka common finding hai.",
    topic: "Hematology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Hypothyroidism me sabse expected physiological change kya hoga?",
    options: ["Metabolic rate decrease", "Heart rate increase", "Temperature increase", "Weight loss"],
    answer: "Metabolic rate decrease",
    explanation: "Thyroid hormones kam hone par metabolism slow ho jata hai. Weight gain aur cold intolerance common findings hain.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Cerebrum ka primary function kya hai?",
    options: ["Balance maintain karna", "Higher mental functions", "Respiration control", "Reflex action"],
    answer: "Higher mental functions",
    explanation: "Thinking, memory, reasoning aur voluntary activities cerebrum ke major functions hain.",
    topic: "Nervous System",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Aldosterone secretion badhne par kya hoga?",
    options: ["Sodium retention increase", "Potassium retention increase", "Glucose excretion", "Protein synthesis stop"],
    answer: "Sodium retention increase",
    explanation: "Aldosterone kidney me sodium reabsorption aur potassium excretion badhata hai. Isse blood volume bhi badhta hai.",
    topic: "Endocrine Physiology",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Hemoglobin ka normal physiological role kya hai?",
    options: ["Hormone secretion", "Oxygen transport", "Clot formation", "Antibody production"],
    answer: "Oxygen transport",
    explanation: "Hemoglobin RBC ke andar oxygen ko lungs se tissues tak transport karta hai. Ye gas transport ka main protein hai.",
    topic: "Hematology",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Aortic valve failure ka direct effect kya hoga?",
    options: ["Blood backflow into left ventricle", "Right atrial enlargement", "Pulmonary collapse", "Kidney ischemia"],
    answer: "Blood backflow into left ventricle",
    explanation: "Aortic valve incompetence se diastole me blood aorta se wapas left ventricle me aa jata hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Red bone marrow ka primary function kya hai?",
    options: ["Fat storage", "Blood cell production", "Calcium excretion", "Hormone synthesis"],
    answer: "Blood cell production",
    explanation: "Red bone marrow hematopoiesis ka major site hai jahan RBC, WBC aur platelets bante hain.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Respiratory center ko blood me kis factor ki increase sabse strongly stimulate karti hai?",
    options: ["Oxygen", "Carbon dioxide", "Calcium", "Sodium"],
    answer: "Carbon dioxide",
    explanation: "CO2 level badhne par respiratory center strongly stimulate hota hai aur ventilation increase karta hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Juxtaglomerular apparatus ka major function kya hai?",
    options: ["Insulin secretion", "Blood pressure regulation", "Bile production", "RBC destruction"],
    answer: "Blood pressure regulation",
    explanation: "JGA renin release karke RAAS system activate karta hai jo blood pressure control me important hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Sympathetic nervous system activation se kya hoga?",
    options: ["Heart rate decrease", "Heart rate increase", "Pupil constriction", "Digestion increase"],
    answer: "Heart rate increase",
    explanation: "Fight-or-flight response me sympathetic stimulation heart rate aur cardiac output dono badhata hai.",
    topic: "Nervous System",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Osteoporosis me sabse major pathological change kya hota hai?",
    options: ["Bone density decrease", "Cartilage increase", "Muscle hypertrophy", "RBC overproduction"],
    answer: "Bone density decrease",
    explanation: "Osteoporosis me bone mass aur density kam ho jati hai jisse fracture risk badh jata hai.",
    topic: "Skeletal System",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "Portal vein ka blood sabse pehle kis organ me enter karta hai?",
    options: ["Heart", "Liver", "Kidney", "Lung"],
    answer: "Liver",
    explanation: "Portal vein gastrointestinal tract se absorbed nutrients ko liver tak le jati hai processing ke liye.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "Left ventricular failure ka sabse pehla major effect kis organ par dekha jata hai?",
    options: ["Lungs", "Liver", "Spleen", "Pancreas"],
    answer: "Lungs",
    explanation: "Left ventricle failure se pulmonary congestion develop hoti hai. Isliye dyspnea aur pulmonary edema common findings hain.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  }
];

export default set2;