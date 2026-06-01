const set5 = [
  {
    id: 1,
    question: "Severe burn patient ke nutritional management me sabse important priority kya hai?",
    options: [
      "Low calorie diet dena",
      "High protein aur high calorie diet dena",
      "Fluid restriction karna",
      "Fat completely avoid karna"
    ],
    answer: "High protein aur high calorie diet dena",
    explanation:
      "Burn patient me metabolic rate bahut increase ho jata hai aur tissue repair ki demand bhi badh jati hai. High protein aur calorie intake wound healing aur recovery ko support karta hai. Low calorie diet healing delay kar sakti hai. Isliye nutritional support burn management ka major component hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Night blindness se bachav ke liye kaunsa nutrient sabse adhik zaroori hai?",
    options: [
      "Vitamin C",
      "Vitamin D",
      "Vitamin A",
      "Vitamin K"
    ],
    answer: "Vitamin A",
    explanation:
      "Vitamin A retina ke normal function ke liye zaroori hai. Iski deficiency se night blindness develop ho sakti hai. Carrot, green leafy vegetables aur liver iske important sources hain. Community nutrition me yeh high-yield topic hai.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Iron deficiency anemia wale patient ko iron absorption improve karne ke liye kya advise karna chahiye?",
    options: [
      "Tea ke saath iron lena",
      "Coffee ke saath iron lena",
      "Iron ke saath Vitamin C rich food lena",
      "Milk ke saath iron lena"
    ],
    answer: "Iron ke saath Vitamin C rich food lena",
    explanation:
      "Vitamin C iron absorption ko significantly increase karta hai. Tea aur coffee iron absorption ko reduce kar sakte hain. Orange juice ya lemon water ke saath iron lena beneficial hota hai. Yeh anemia management ka important principle hai.",
    topic: "Mineral Nutrition",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Enteral feeding ke dauran aspiration risk kam karne ke liye patient ko kis position me rakhna chahiye?",
    options: [
      "Flat supine position",
      "Prone position",
      "Trendelenburg position",
      "Head end 30–45 degree elevate"
    ],
    answer: "Head end 30–45 degree elevate",
    explanation:
      "Head elevation aspiration risk ko reduce karti hai aur feeding tolerance improve karti hai. Flat position aspiration pneumonia ka risk badha sakti hai. Enteral feeding safety protocols me yeh standard intervention hai.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Kwashiorkor me edema develop hone ka mukhya karan kya hota hai?",
    options: [
      "Low serum albumin",
      "Excess Vitamin C",
      "High calcium level",
      "Excess carbohydrate intake"
    ],
    answer: "Low serum albumin",
    explanation:
      "Protein deficiency ke karan serum albumin kam ho jata hai. Isse oncotic pressure reduce hota hai aur fluid tissues me accumulate hone lagta hai. Edema kwashiorkor ki hallmark finding hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Pregnancy ke early weeks me neural tube defects prevent karne ke liye kis nutrient ki supplementation sabse important hai?",
    options: [
      "Calcium",
      "Folic Acid",
      "Sodium",
      "Vitamin E"
    ],
    answer: "Folic Acid",
    explanation:
      "Folic acid fetal neural tube development ke liye essential hai. Deficiency neural tube defects ka risk badha sakti hai. Isliye pregnancy planning aur first trimester me supplementation recommend ki jati hai.",
    topic: "Maternal Nutrition",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Type 2 diabetes patient ke diet plan ka primary goal kya hai?",
    options: [
      "Maintain blood glucose control",
      "Increase sugar intake",
      "Avoid all carbohydrates",
      "Increase saturated fat intake"
    ],
    answer: "Maintain blood glucose control",
    explanation:
      "Diabetic diet ka main objective blood glucose levels ko target range me rakhna hota hai. Balanced meals aur portion control isme important role play karte hain. Complete carbohydrate avoidance recommended nahi hai.",
    topic: "Diabetic Nutrition",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Parenteral nutrition receive kar rahe patient me sabse serious complication kya ho sakta hai?",
    options: [
      "Constipation",
      "Catheter-related bloodstream infection",
      "Mild nausea",
      "Temporary hunger"
    ],
    answer: "Catheter-related bloodstream infection",
    explanation:
      "Parenteral nutrition central venous access ke through diya jata hai. Infection life-threatening ho sakta hai. Strict aseptic technique aur catheter care infection prevention ke liye essential hain.",
    topic: "Parenteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Scurvy kis nutrient ki deficiency se hota hai?",
    options: [
      "Vitamin C",
      "Vitamin D",
      "Vitamin K",
      "Vitamin B12"
    ],
    answer: "Vitamin C",
    explanation:
      "Vitamin C collagen synthesis ke liye zaroori hai. Iski deficiency se bleeding gums, poor wound healing aur scurvy develop ho sakta hai. Citrus fruits iske major dietary sources hain.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Goiter prevention ke liye sabse effective public health measure kya hai?",
    options: [
      "Iron supplementation",
      "Protein supplementation",
      "Vitamin A supplementation",
      "Use of iodized salt"
    ],
    answer: "Use of iodized salt",
    explanation:
      "Iodine deficiency goiter ka major cause hai. Universal salt iodization public health level par iodine deficiency disorders prevent karne ka proven method hai. Yeh community nutrition ka important intervention hai.",
    topic: "Community Nutrition",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Constipation se bachav ke liye diet me kya increase karna chahiye?",
    options: [
      "Dietary fiber",
      "Refined sugar",
      "Trans-fat",
      "Processed snacks"
    ],
    answer: "Dietary fiber",
    explanation:
      "Fiber stool bulk badhata hai aur bowel movements ko improve karta hai. Adequate water intake ke saath fiber constipation prevention me effective hota hai. Fruits aur vegetables iske achhe sources hain.",
    topic: "Dietary Fiber",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Osteoporosis prevention ke liye elderly patient ko kis nutrient par focus karna chahiye?",
    options: [
      "Iron",
      "Potassium",
      "Calcium",
      "Sodium"
    ],
    answer: "Calcium",
    explanation:
      "Calcium bone strength maintain karne ke liye essential hai. Elderly patients me osteoporosis ka risk zyada hota hai. Adequate calcium intake fractures ke risk ko reduce karta hai.",
    topic: "Geriatric Nutrition",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Marasmus ka sabse characteristic feature kya hai?",
    options: [
      "Severe wasting and loss of fat",
      "Generalized edema",
      "Moon face",
      "Hypertension"
    ],
    answer: "Severe wasting and loss of fat",
    explanation:
      "Marasmus severe calorie deficiency ka result hai. Isme marked wasting aur subcutaneous fat loss dekha jata hai. Edema usually kwashiorkor me prominent hota hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Chronic kidney disease patient me hyperkalemia prevent karne ke liye kis food ko limit karna chahiye?",
    options: [
      "Rice",
      "Apple",
      "Cabbage",
      "Banana"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium-rich food hai. CKD patients me potassium excretion kam ho sakta hai aur hyperkalemia life-threatening arrhythmias ka risk badha sakta hai. Dietary counseling bahut important hai.",
    topic: "Renal Nutrition",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Liver cirrhosis patient me ascites control karne ke liye kis dietary restriction ki zarurat hoti hai?",
    options: [
      "Sodium restriction",
      "Vitamin C restriction",
      "Iron restriction",
      "Calcium restriction"
    ],
    answer: "Sodium restriction",
    explanation:
      "Sodium water retention ko increase karta hai. Ascites aur edema management me sodium restriction ek standard dietary intervention hai. Nurse ko low-salt diet ke baare me education deni chahiye.",
    topic: "Liver Nutrition",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Exclusive breastfeeding kitne mahine tak recommend ki jati hai?",
    options: [
      "3 months",
      "6 months",
      "9 months",
      "12 months"
    ],
    answer: "6 months",
    explanation:
      "WHO ke anusaar pehle 6 mahine tak sirf breast milk dena recommend kiya jata hai. Isse infant ki nutritional aur hydration needs adequately meet hoti hain. Uske baad complementary feeding start ki jati hai.",
    topic: "Infant Nutrition",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Severe diarrhea ke baad potassium replacement ke liye kaunsa food sabse useful hai?",
    options: [
      "Banana",
      "Butter",
      "Sugar candy",
      "White bread"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium ka rich source hai aur diarrhea ke baad electrolyte losses ko replace karne me madad karta hai. Potassium cardiac aur muscular function ke liye essential hai.",
    topic: "Mineral Nutrition",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Obese patient ke weight reduction plan ka sabse important principle kya hai?",
    options: [
      "Unlimited fruit juice",
      "Frequent sugary snacks",
      "High trans-fat intake",
      "Calorie deficit with balanced diet"
    ],
    answer: "Calorie deficit with balanced diet",
    explanation:
      "Weight reduction ke liye calorie expenditure ko intake se zyada rakhna zaroori hai. Balanced diet nutritional deficiencies se bachati hai. Crash diets long-term effective nahi hoti.",
    topic: "Weight Management",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Rickets se bachav ke liye sabse important nutrient kaunsa hai?",
    options: [
      "Vitamin D",
      "Vitamin K",
      "Vitamin C",
      "Iron"
    ],
    answer: "Vitamin D",
    explanation:
      "Vitamin D calcium absorption aur bone mineralization ke liye essential hai. Deficiency se rickets develop ho sakta hai. Sunlight exposure aur Vitamin D rich foods prevention me important hain.",
    topic: "Child Nutrition",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Lactating mother ki calorie requirement pregnancy ke baad bhi kyun badhi rehti hai?",
    options: [
      "Vision improve karne ke liye",
      "Blood pressure control ke liye",
      "Bone growth ke liye",
      "Breast milk production ke liye"
    ],
    answer: "Breast milk production ke liye",
    explanation:
      "Breast milk synthesis ke liye additional energy aur nutrients ki zarurat hoti hai. Adequate maternal nutrition infant growth aur health ko directly support karti hai. Lactation period me calorie requirement increase ho jati hai.",
    topic: "Lactation Nutrition",
    difficulty: "medium"
  }
];

export default set5;

// Answer Key:
// [2,3,3,4,1,2,1,2,1,4,1,3,1,4,1,2,1,4,1,4]

// Option 1 = 8
// Option 2 = 4
// Option 3 = 3
// Option 4 = 5