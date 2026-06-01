const set1 = [
  {
    id: 1,
    question: "Head injury ke baad patient ka right pupil dilated aur fixed hai. Ye sabse adhik kis cranial nerve ke compression ko indicate karta hai?",
    options: ["Optic Nerve", "Oculomotor Nerve", "Trochlear Nerve", "Abducens Nerve"],
    answer: "Oculomotor Nerve",
    explanation: "Oculomotor Nerve (CN III) pupil constriction control karti hai. Iske compression se pupil dilated aur fixed ho jata hai. Baaki nerves eye movement se related hain lekin pupillary constriction directly control nahi karti.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Severe hemorrhage ke dauran sabse pehle kis mechanism se blood pressure maintain karne ki koshish hoti hai?",
    options: ["ADH secretion decrease", "Baroreceptor reflex activation", "RBC production increase", "Platelet destruction"],
    answer: "Baroreceptor reflex activation",
    explanation: "Acute blood loss me body turant Baroreceptor reflex activate karti hai jisse heart rate aur vasoconstriction badhta hai. RBC production baad me hoti hai.",
    topic: "Cardiovascular Physiology",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Alveoli me gas exchange ke liye sabse important factor kya hai?",
    options: ["Thick membrane", "Large diffusion distance", "Thin respiratory membrane", "Low surface area"],
    answer: "Thin respiratory membrane",
    explanation: "Thin membrane oxygen aur carbon dioxide diffusion ko fast banati hai. Thick membrane gas exchange ko slow karti hai.",
    topic: "Respiratory System",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Kidney me Glomerular Filtration Rate kam hone par sabse pehle kaunsa hormone activate hota hai?",
    options: ["Insulin", "Renin", "Calcitonin", "Thyroxine"],
    answer: "Renin",
    explanation: "Low renal perfusion par Juxtaglomerular cells Renin release karte hain. Ye RAAS system activate karke BP maintain karta hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "ECG me QRS complex kis event ko represent karta hai?",
    options: ["Atrial depolarization", "Atrial repolarization", "Ventricular depolarization", "Ventricular relaxation"],
    answer: "Ventricular depolarization",
    explanation: "QRS complex ventricles ke electrical activation ko show karta hai. P wave atrial depolarization aur T wave ventricular repolarization ko show karti hai.",
    topic: "Cardiovascular System",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Calcium level bahut kam hone par sabse pehle kaunsi gland response degi?",
    options: ["Pituitary Gland", "Thyroid Gland", "Parathyroid Gland", "Adrenal Gland"],
    answer: "Parathyroid Gland",
    explanation: "Low calcium par PTH release hota hai jo serum calcium ko increase karta hai. Ye calcium homeostasis ka main regulator hai.",
    topic: "Endocrine System",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Oxygen dissociation curve right shift hone ka effect kya hoga?",
    options: ["Tissues ko oxygen release badhega", "Hemoglobin oxygen strongly bind karega", "Oxygen transport ruk jayega", "CO2 transport band hoga"],
    answer: "Tissues ko oxygen release badhega",
    explanation: "Right shift se hemoglobin oxygen ko easily tissues me release karta hai. Exercise aur fever me ye physiological adaptation hoti hai.",
    topic: "Respiratory Physiology",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Adult human body me sabse lambi haddi kaunsi hoti hai?",
    options: ["Tibia", "Humerus", "Femur", "Radius"],
    answer: "Femur",
    explanation: "Femur body ki longest aur strongest bone hai. Ye weight bearing me important role nibhati hai.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Liver failure me blood clotting disorder ka main anatomical reason kya hai?",
    options: ["Platelet overproduction", "Clotting factor synthesis kam hona", "RBC destruction ruk jana", "Neutrophil increase hona"],
    answer: "Clotting factor synthesis kam hona",
    explanation: "Liver adhiktar clotting factors banata hai. Liver damage se coagulation factors kam ho jate hain aur bleeding risk badh jata hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Neuromuscular junction par neurotransmitter kaunsa release hota hai?",
    options: ["Dopamine", "Acetylcholine", "Serotonin", "GABA"],
    answer: "Acetylcholine",
    explanation: "Skeletal muscle contraction ke liye Acetylcholine essential neurotransmitter hai. Iske bina muscle activation nahi hota.",
    topic: "Muscular System",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Agar vagus nerve excessively stimulate ho jaye to kya hoga?",
    options: ["Heart rate badhega", "Blood glucose badhega", "Heart rate kam hoga", "Respiration band hogi"],
    answer: "Heart rate kam hoga",
    explanation: "Vagus nerve parasympathetic nerve hai jo heart rate ko slow karti hai. Excess stimulation se bradycardia ho sakta hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "RBC production ka primary site adult me kya hai?",
    options: ["Yellow marrow", "Red bone marrow", "Spleen", "Liver"],
    answer: "Red bone marrow",
    explanation: "Adult me erythropoiesis mainly red bone marrow me hoti hai. Liver aur spleen fetal life me zyada active hote hain.",
    topic: "Hematology",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Protein digestion ka major hissa kis organ me complete hota hai?",
    options: ["Mouth", "Esophagus", "Small Intestine", "Large Intestine"],
    answer: "Small Intestine",
    explanation: "Stomach digestion start karta hai lekin majority digestion aur absorption small intestine me complete hoti hai.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Blood-brain barrier ka main function kya hai?",
    options: ["CSF banana", "Brain ko harmful substances se protect karna", "Neuron divide karna", "Oxygen production"],
    answer: "Brain ko harmful substances se protect karna",
    explanation: "Blood-brain barrier selective permeability provide karta hai. Ye toxins aur pathogens ko brain tissue tak pahunchne se rokta hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Cardiac output kis formula se calculate hota hai?",
    options: ["Stroke Volume × Heart Rate", "BP × Pulse", "RBC × Plasma", "Heart Rate ÷ Stroke Volume"],
    answer: "Stroke Volume × Heart Rate",
    explanation: "Cardiac output ek minute me heart dwara pump kiya gaya blood hota hai. Iska formula Stroke Volume × Heart Rate hai.",
    topic: "Cardiovascular Physiology",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Insulin ki deficiency se sabse adhik kaunsa metabolic effect hota hai?",
    options: ["Hypoglycemia", "Hyperglycemia", "Hypocalcemia", "Anemia"],
    answer: "Hyperglycemia",
    explanation: "Insulin glucose ko cells me enter karne me madad karta hai. Iski kami se blood glucose level badh jata hai.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Pleura ka primary physiological role kya hai?",
    options: ["Blood filtration", "Friction kam karna", "Hormone secretion", "RBC formation"],
    answer: "Friction kam karna",
    explanation: "Pleural fluid lungs aur chest wall ke beech friction ko reduce karta hai aur smooth breathing facilitate karta hai.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Vitamin B12 deficiency se kis type ka anemia develop hota hai?",
    options: ["Microcytic anemia", "Megaloblastic anemia", "Hemolytic anemia", "Aplastic anemia"],
    answer: "Megaloblastic anemia",
    explanation: "Vitamin B12 DNA synthesis ke liye zaroori hai. Deficiency me large immature RBCs develop hote hain.",
    topic: "Hematology",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Thyroid hormones ka primary effect kya hai?",
    options: ["Metabolic rate increase karna", "Blood clotting karna", "Urine formation rokna", "Platelet banana"],
    answer: "Metabolic rate increase karna",
    explanation: "Thyroid hormones body metabolism ko regulate karte hain. Hyperthyroidism me metabolism excessive badh jata hai.",
    topic: "Endocrine System",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Cerebellum damage hone par patient me sabse common finding kya hogi?",
    options: ["Memory loss", "Ataxia", "Blindness", "Paralysis of diaphragm"],
    answer: "Ataxia",
    explanation: "Cerebellum coordination aur balance control karta hai. Damage se gait disturbance aur ataxia develop hoti hai.",
    topic: "Nervous System",
    difficulty: "hard"
  },
  {
    id: 21,
    question: "Nephron ka kaunsa part water reabsorption me ADH ke prati sabse sensitive hota hai?",
    options: ["Proximal tubule", "Loop of Henle", "Collecting duct", "Bowman capsule"],
    answer: "Collecting duct",
    explanation: "ADH collecting duct ki permeability badhata hai jisse water reabsorption increase hota hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Hypoxia ki condition me erythropoietin ka major source kya hai?",
    options: ["Liver", "Kidney", "Spleen", "Pancreas"],
    answer: "Kidney",
    explanation: "Kidney oxygen deficiency ko detect karke erythropoietin release karti hai jo RBC production stimulate karta hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "Sinoatrial node ko heart ka natural pacemaker kyu kaha jata hai?",
    options: ["Sabse bada node hai", "Sabse fast impulse generate karta hai", "Valve control karta hai", "Blood filter karta hai"],
    answer: "Sabse fast impulse generate karta hai",
    explanation: "SA node spontaneous depolarization ki highest rate rakhta hai. Isi wajah se heart rhythm initiate karta hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Joint cavity me Synovial fluid ka main function kya hai?",
    options: ["Bone growth", "Lubrication", "RBC production", "Calcium storage"],
    answer: "Lubrication",
    explanation: "Synovial fluid friction reduce karta hai aur joint movement ko smooth banata hai.",
    topic: "Skeletal System",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Respiratory center primarily kis structure me located hota hai?",
    options: ["Cerebrum", "Medulla Oblongata", "Thalamus", "Cerebellum"],
    answer: "Medulla Oblongata",
    explanation: "Medulla breathing rhythm control karti hai. Damage hone par respiration severely affect ho sakti hai.",
    topic: "Respiratory System",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Macula densa ka major role kya hai?",
    options: ["Blood clotting", "Tubular sodium monitor karna", "Bile secretion", "Insulin release"],
    answer: "Tubular sodium monitor karna",
    explanation: "Macula densa nephron me sodium concentration detect karti hai aur GFR regulation me help karti hai.",
    topic: "Urinary System",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Sympathetic stimulation se pupil par kya effect hota hai?",
    options: ["Constriction", "Dilation", "No change", "Permanent fixation"],
    answer: "Dilation",
    explanation: "Fight-or-flight response me sympathetic system pupil ko dilate karta hai taki vision field improve ho.",
    topic: "Nervous System",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Osteoclast cells ka primary function kya hai?",
    options: ["Bone formation", "Bone resorption", "Cartilage formation", "Collagen synthesis"],
    answer: "Bone resorption",
    explanation: "Osteoclasts bone breakdown karte hain jabki Osteoblasts bone formation karte hain.",
    topic: "Skeletal System",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "Portal circulation directly kis do organs ko connect karti hai?",
    options: ["Heart aur Kidney", "Liver aur Intestine", "Lung aur Heart", "Brain aur Spinal Cord"],
    answer: "Liver aur Intestine",
    explanation: "Portal vein intestine se absorbed nutrients ko liver tak pahunchati hai processing ke liye.",
    topic: "Digestive System",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "Myocardial infarction me sabse pehle kis tissue ko irreversible damage ka risk hota hai?",
    options: ["Epicardium", "Endocardium", "Subendocardial region", "Pericardium"],
    answer: "Subendocardial region",
    explanation: "Subendocardial area blood supply compromise hone par sabse pehle ischemic injury suffer karta hai. Ye exam me frequently pucha jane wala concept hai.",
    topic: "Cardiovascular System",
    difficulty: "hard"
  }
];

export default set1;