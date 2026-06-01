const set3 = [
  {
    id: 1,
    question: "ICU me ventilator par admitted patient ko enteral feeding di ja rahi hai. Feeding intolerance ka sabse early indicator kya ho sakta hai?",
    options: [
      "Abdominal distension",
      "Weight gain",
      "Improved appetite",
      "Increased hemoglobin"
    ],
    answer: "Abdominal distension",
    explanation:
      "Abdominal distension enteral feeding intolerance ka early sign ho sakta hai. Iske saath nausea, vomiting aur high gastric residual volume bhi dekha ja sakta hai. Nurse ko feeding continue karne se pehle assessment karni chahiye. Early detection aspiration aur complications ko prevent karta hai.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Megaloblastic anemia wale patient ke diet plan me kis nutrient par sabse zyada focus kiya jayega?",
    options: [
      "Vitamin K",
      "Vitamin B12",
      "Fluoride",
      "Sodium"
    ],
    answer: "Vitamin B12",
    explanation:
      "Vitamin B12 deficiency megaloblastic anemia ka common cause hai. Iski kami RBC maturation ko affect karti hai. Dietary counseling aur supplementation treatment ka important part hai. Folate deficiency bhi similar picture de sakti hai lekin yahan B12 key nutrient hai.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Community health nurse ko ek village me multiple children me bow legs aur delayed walking milta hai. Sabse likely nutritional deficiency kya hai?",
    options: [
      "Vitamin C deficiency",
      "Iron deficiency",
      "Vitamin D deficiency",
      "Vitamin K deficiency"
    ],
    answer: "Vitamin D deficiency",
    explanation:
      "Bow legs aur delayed bone development rickets ki taraf indicate karte hain jo Vitamin D deficiency se hota hai. Vitamin D calcium metabolism ke liye essential hai. Child nutrition programs me sunlight exposure aur dietary intake dono important hote hain.",
    topic: "Child Nutrition",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Post-MI patient ko cardiac diet di gayi hai. Nurse kis food item ko avoid karne ki advice degi?",
    options: [
      "Fresh fruits",
      "Oats",
      "Boiled vegetables",
      "Deep-fried snacks"
    ],
    answer: "Deep-fried snacks",
    explanation:
      "Deep-fried foods me saturated aur trans fats zyada ho sakte hain jo cardiovascular risk ko badhate hain. Cardiac diet ka goal heart workload aur lipid levels ko control karna hota hai. Fresh fruits aur vegetables generally beneficial hote hain.",
    topic: "Cardiac Nutrition",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Marasmus se affected child me sabse prominent clinical feature kya hota hai?",
    options: [
      "Severe muscle wasting",
      "Generalized edema",
      "Moon face",
      "Hypertension"
    ],
    answer: "Severe muscle wasting",
    explanation:
      "Marasmus severe calorie deficiency ka result hota hai jisme marked muscle wasting aur fat loss dekha jata hai. Edema usually kwashiorkor me prominent hota hai. Child extremely thin appearance show karta hai. Growth monitoring early diagnosis me help karti hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Pregnancy ke first trimester me neural tube defect prevention ke liye kaunsi supplementation sabse important hai?",
    options: [
      "Calcium",
      "Folic Acid",
      "Vitamin K",
      "Potassium"
    ],
    answer: "Folic Acid",
    explanation:
      "Folic acid neural tube development ke liye essential hai. Early pregnancy me deficiency congenital anomalies ka risk badha sakti hai. Isliye conception se pehle aur first trimester me supplementation recommend ki jati hai.",
    topic: "Maternal Nutrition",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Burn unit me admitted patient ke nutritional management ka primary objective kya hai?",
    options: [
      "Protein aur calorie requirements ko meet karna",
      "Fluid completely restrict karna",
      "Carbohydrate eliminate karna",
      "Vitamin intake stop karna"
    ],
    answer: "Protein aur calorie requirements ko meet karna",
    explanation:
      "Burn patients me hypermetabolic state develop hoti hai. Tissue repair aur healing ke liye high protein aur high calorie intake required hota hai. Inadequate nutrition se recovery delay ho sakti hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Chronic kidney disease patient me hyperkalemia prevent karne ke liye kis food ko limit karna chahiye?",
    options: [
      "Rice",
      "Apple",
      "Banana",
      "Cabbage"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium-rich food hai. CKD me potassium excretion reduce ho sakta hai jisse hyperkalemia ka risk badhta hai. Nurse ko dietary potassium restriction par education deni chahiye.",
    topic: "Renal Nutrition",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "A child presents with bleeding gums and delayed wound healing. Kaunsi deficiency sabse likely hai?",
    options: [
      "Vitamin C deficiency",
      "Vitamin D deficiency",
      "Iodine deficiency",
      "Protein excess"
    ],
    answer: "Vitamin C deficiency",
    explanation:
      "Vitamin C collagen synthesis ke liye essential hai. Iski deficiency se scurvy develop ho sakta hai jisme bleeding gums aur poor wound healing common findings hain. Dietary correction primary management hai.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Parenteral nutrition receive kar rahe patient me sabse serious complication kaunsa ho sakta hai?",
    options: [
      "Constipation",
      "Mild hunger",
      "Dry lips",
      "Bloodstream infection"
    ],
    answer: "Bloodstream infection",
    explanation:
      "Parenteral nutrition central venous access se diya jata hai. Catheter-related bloodstream infection life-threatening complication ho sakta hai. Strict aseptic technique prevention ka main method hai.",
    topic: "Parenteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Iron deficiency anemia wale patient ko nurse kis combination ki advice degi?",
    options: [
      "Iron-rich foods with Vitamin C",
      "Iron tablet with tea",
      "Iron tablet with coffee",
      "Iron-rich food with soft drinks"
    ],
    answer: "Iron-rich foods with Vitamin C",
    explanation:
      "Vitamin C iron absorption ko improve karta hai. Tea aur coffee absorption ko reduce kar sakte hain. Anemia management me dietary modification aur supplementation dono important hote hain.",
    topic: "Mineral Nutrition",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Goiter prevention ke liye public health nutrition program me kis intervention ko priority di jati hai?",
    options: [
      "Vitamin A supplementation",
      "Calcium tablets",
      "Use of iodized salt",
      "High protein diet"
    ],
    answer: "Use of iodized salt",
    explanation:
      "Iodine deficiency goiter ka major cause hai. Iodized salt use karna deficiency prevention ka sabse effective community strategy hai. Public health programs isi intervention par focus karte hain.",
    topic: "Community Nutrition",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Type 2 diabetes patient ke meal planning ka primary goal kya hai?",
    options: [
      "Maintain blood glucose control",
      "Increase sugar intake",
      "Avoid all vegetables",
      "Increase trans-fat intake"
    ],
    answer: "Maintain blood glucose control",
    explanation:
      "Diabetic diet ka main objective blood glucose levels ko stable rakhna hai. Balanced meals, portion control aur lifestyle modification management ke key components hain.",
    topic: "Diabetic Nutrition",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Osteoporosis risk wali postmenopausal woman ke liye kaunsa nutrient sabse important hai?",
    options: [
      "Iron",
      "Potassium",
      "Vitamin C",
      "Calcium"
    ],
    answer: "Calcium",
    explanation:
      "Calcium bone mineral density maintain karne ke liye essential hai. Postmenopausal women me osteoporosis ka risk zyada hota hai. Adequate calcium intake fracture prevention me help karta hai.",
    topic: "Geriatric Nutrition",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Kwashiorkor me edema develop hone ka primary mechanism kya hai?",
    options: [
      "Low serum protein levels",
      "Excess calcium",
      "High sodium intake",
      "Vitamin C deficiency"
    ],
    answer: "Low serum protein levels",
    explanation:
      "Protein deficiency serum albumin ko reduce karti hai jisse oncotic pressure kam ho jata hai. Result me fluid tissues me accumulate hota hai aur edema develop hota hai. Yeh kwashiorkor ki hallmark finding hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Exclusive breastfeeding ke baare me WHO recommendation kya hai?",
    options: [
      "2 months",
      "4 months",
      "12 months",
      "6 months"
    ],
    answer: "6 months",
    explanation:
      "WHO ke anusaar pehle 6 mahine tak sirf breast milk dena recommend kiya jata hai. Isse infant ki nutritional aur immunological needs adequately meet hoti hain. Early supplementation generally recommended nahi hoti.",
    topic: "Infant Nutrition",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Liver disease patient me ammonia production reduce karne ke liye severe hepatic encephalopathy me kis dietary modification ki zarurat ho sakti hai?",
    options: [
      "Protein restriction",
      "Vitamin C restriction",
      "Calcium restriction",
      "Water restriction"
    ],
    answer: "Protein restriction",
    explanation:
      "Severe hepatic encephalopathy me excess protein ammonia production badha sakta hai. Temporary protein restriction physician order ke according ki ja sakti hai. Individualized nutrition planning zaroori hoti hai.",
    topic: "Liver Nutrition",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Nutrition assessment ke dauran BMI 18.5 se kam milta hai. Yeh kis condition ko indicate karta hai?",
    options: [
      "Obesity",
      "Overweight",
      "Underweight",
      "Normal weight"
    ],
    answer: "Underweight",
    explanation:
      "BMI 18.5 se kam hona underweight category me aata hai. Yeh inadequate nutritional status ka indicator ho sakta hai. Further dietary assessment aur intervention ki zarurat hoti hai.",
    topic: "Nutritional Assessment",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Constipation prevention ke liye sabse effective dietary advice kya hai?",
    options: [
      "Increase dietary fiber intake",
      "Avoid fluids completely",
      "Increase refined sugar",
      "Reduce vegetables"
    ],
    answer: "Increase dietary fiber intake",
    explanation:
      "Fiber stool bulk badhata hai aur bowel movements ko facilitate karta hai. Adequate fluid intake ke saath fiber constipation prevention ka cornerstone hai. Long-term bowel health ke liye bhi beneficial hai.",
    topic: "Dietary Fiber",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Severe dehydration ke baad patient me potassium replacement ke liye kaunsa food useful hai?",
    options: [
      "White bread",
      "Butter",
      "Sugar candy",
      "Banana"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium ka rich source hai. Diarrhea ya dehydration ke baad potassium losses ko replace karne me madad karta hai. Electrolyte balance maintain karna patient recovery ke liye important hai.",
    topic: "Mineral Nutrition",
    difficulty: "hard"
  }
];

export default set3;

// Answer Key:
// [1,2,3,4,1,2,1,3,1,4,1,3,1,4,1,4,1,3,1,4]

// Option 1 = 8
// Option 2 = 2
// Option 3 = 4
// Option 4 = 6