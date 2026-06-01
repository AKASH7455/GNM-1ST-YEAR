const set3 = [
  {
    id: 1,
    question: "Patient ko smell identify karne me dikkat ho rahi hai. Sabse adhik kaunsi cranial nerve affected hai?",
    options: ["Optic Nerve", "Olfactory Nerve", "Facial Nerve", "Vagus Nerve"],
    answer: "Olfactory Nerve",
    explanation: "Olfactory Nerve smell sensation carry karti hai. Iske damage se anosmia develop hoti hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Exercise ke dauran cardiac output badhne ka mukhya reason kya hai?",
    options: ["Platelet increase", "RBC destruction", "Heart rate aur stroke volume dono badhna", "Blood viscosity increase"],
    answer: "Heart rate aur stroke volume dono badhna",
    explanation: "Exercise me sympathetic stimulation se heart rate aur stroke volume dono increase hote hain.",
    topic: "Cardiovascular Physiology",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Alveolar macrophages ka primary function kya hai?",
    options: ["Foreign particles ko remove karna", "Surfactant production", "Oxygen storage", "Gas exchange"],
    answer: "Foreign particles ko remove karna",
    explanation: "Alveolar macrophages lungs ko infection aur debris se protect karte hain.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Kidney me protein filtration ko rokne wala sabse important structure kaunsa hai?",
    options: ["Loop of Henle", "Collecting Duct", "Distal Tubule", "Glomerular Basement Membrane"],
    answer: "Glomerular Basement Membrane",
    explanation: "Glomerular Basement Membrane filtration barrier ka major component hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Vagus nerve cut hone par heart rate par kya effect hoga?",
    options: ["Heart rate badhega", "Heart rate kam hoga", "Koi effect nahi", "Heart stop ho jayega"],
    answer: "Heart rate badhega",
    explanation: "Vagus nerve parasympathetic effect deti hai. Iske remove hone se heart rate badhta hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Vitamin K deficiency ka sabse direct effect kya hoga?",
    options: ["Bone growth kam hona", "Blood clotting me kami", "Vision loss", "Muscle weakness"],
    answer: "Blood clotting me kami",
    explanation: "Vitamin K clotting factors ke synthesis ke liye zaroori hai.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Hyperthyroidism me sabse common finding kya hoti hai?",
    options: ["Weight gain", "Bradycardia", "Hypothermia", "Weight loss"],
    answer: "Weight loss",
    explanation: "Thyroid hormone excess se metabolism badhta hai aur weight loss hota hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Body ki sabse chhoti bone kaunsi hai?",
    options: ["Femur", "Stapes", "Ulna", "Radius"],
    answer: "Stapes",
    explanation: "Stapes middle ear me present hoti hai aur body ki sabse chhoti bone hai.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Atrial fibrillation me sabse bada risk kya hota hai?",
    options: ["Thrombus formation", "Kidney failure", "Bone fracture", "Hypoglycemia"],
    answer: "Thrombus formation",
    explanation: "Blood stasis ke karan clot formation aur stroke ka risk badhta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Neuromuscular junction par calcium ka role kya hai?",
    options: ["ATP synthesis", "Glucose transport", "Acetylcholine release facilitate karna", "Protein digestion"],
    answer: "Acetylcholine release facilitate karna",
    explanation: "Calcium influx neurotransmitter release ko trigger karta hai.",
    topic: "Muscular System",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Hypoxia ke response me erythropoietin ka primary source kya hai?",
    options: ["Liver", "Kidney", "Heart", "Pancreas"],
    answer: "Kidney",
    explanation: "Kidney hypoxia detect karke erythropoietin release karti hai.",
    topic: "Urinary Physiology",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Synovial joints ki khasiyat kya hai?",
    options: ["Immovable", "Slightly movable", "Fusion of bones", "Freely movable"],
    answer: "Freely movable",
    explanation: "Synovial joints body me maximum movement allow karte hain.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Pancreatic lipase kis nutrient ki digestion karta hai?",
    options: ["Fat", "Protein", "Minerals", "Vitamins"],
    answer: "Fat",
    explanation: "Pancreatic lipase fats ko fatty acids aur glycerol me todta hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Vision center brain ke kis lobe me hota hai?",
    options: ["Frontal", "Parietal", "Occipital", "Temporal"],
    answer: "Occipital",
    explanation: "Occipital lobe visual information processing ke liye responsible hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "AB blood group ko universal recipient kyu kaha jata hai?",
    options: ["Hemoglobin zyada hota hai", "Anti-A aur Anti-B antibodies absent hoti hain", "RBC kam hote hain", "Platelets zyada hote hain"],
    answer: "Anti-A aur Anti-B antibodies absent hoti hain",
    explanation: "AB group wale sabhi ABO blood groups ka blood receive kar sakte hain.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Glucagon ka primary action kya hai?",
    options: ["BP kam karna", "Blood glucose badhana", "Calcium kam karna", "Urine output kam karna"],
    answer: "Blood glucose badhana",
    explanation: "Glucagon glycogen breakdown ko stimulate karta hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Surfactant deficiency ka direct effect kya hoga?",
    options: ["Lung collapse", "Anemia", "Hyperglycemia", "Hypertension"],
    answer: "Lung collapse",
    explanation: "Surfactant alveoli ko collapse hone se bachata hai.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Parasitic infection me kaunsi WBC sabse adhik badhti hai?",
    options: ["Basophils", "Neutrophils", "Monocytes", "Eosinophils"],
    answer: "Eosinophils",
    explanation: "Eosinophils parasites aur allergies ke against important role nibhate hain.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Parasympathetic stimulation digestion par kya effect karti hai?",
    options: ["Digestion increase", "Digestion stop", "Pupil dilation", "Heart rate increase"],
    answer: "Digestion increase",
    explanation: "Parasympathetic system rest-and-digest response ko promote karta hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Mitral valve kin chambers ke beech present hota hai?",
    options: ["RA-RV", "LV-Aorta", "RV-Pulmonary Artery", "LA-LV"],
    answer: "LA-LV",
    explanation: "Mitral valve left atrium aur left ventricle ke beech hota hai.",
    topic: "Cardiovascular System",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "ADH ki kami me urine kaisa hoga?",
    options: ["Dilute aur zyada quantity me", "Concentrated aur kam quantity me", "Protein rich", "Blood mixed"],
    answer: "Dilute aur zyada quantity me",
    explanation: "ADH water reabsorption badhata hai. Kami me polyuria hoti hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Bone formation ke liye kaunsi cell responsible hai?",
    options: ["Osteoclast", "Chondrocyte", "Osteoblast", "Fibroblast"],
    answer: "Osteoblast",
    explanation: "Osteoblast nayi bone matrix banate hain.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Portal circulation ka blood sabse pehle kis organ me enter karta hai?",
    options: ["Liver", "Heart", "Lung", "Kidney"],
    answer: "Liver",
    explanation: "Portal vein intestine se absorbed nutrients ko liver tak le jati hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Medulla oblongata ka major function kya hai?",
    options: ["Memory", "Vision", "Speech", "Respiration aur cardiovascular control"],
    answer: "Respiration aur cardiovascular control",
    explanation: "Medulla me vital centers present hote hain jo breathing aur circulation control karte hain.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "Carbon monoxide poisoning me tissue hypoxia ka reason kya hai?",
    options: ["Hemoglobin se strong binding", "Platelet decrease", "WBC increase", "RBC destruction"],
    answer: "Hemoglobin se strong binding",
    explanation: "CO hemoglobin se oxygen ki tulna me bahut zyada affinity se bind karta hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Renin release ka sabse powerful stimulus kya hai?",
    options: ["High calcium", "Low renal blood pressure", "High glucose", "High oxygen"],
    answer: "Low renal blood pressure",
    explanation: "Kidney perfusion kam hone par renin release hota hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "SA Node ko natural pacemaker kyu kaha jata hai?",
    options: ["Natural pacemaker ka role", "Valve control", "Coronary circulation", "RBC production"],
    answer: "Natural pacemaker ka role",
    explanation: "SA Node sabse fast spontaneous depolarization karta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Patella kis type ki bone hai?",
    options: ["Long Bone", "Flat Bone", "Sesamoid Bone", "Irregular Bone"],
    answer: "Sesamoid Bone",
    explanation: "Patella tendon ke andar develop hone wali sabse badi sesamoid bone hai.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Small intestine me absorption badhane wali structure kaunsi hai?",
    options: ["Villi aur Microvilli", "Thick wall", "Mucus absence", "Low blood supply"],
    answer: "Villi aur Microvilli",
    explanation: "Ye surface area ko bahut zyada increase karti hain.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "Right ventricular failure ka classic consequence kya hai?",
    options: ["Pulmonary edema", "Metabolic alkalosis", "Hyperthyroidism", "Systemic venous congestion"],
    answer: "Systemic venous congestion",
    explanation: "Right ventricular failure se peripheral edema aur venous congestion develop hoti hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  }
];

export default set3;