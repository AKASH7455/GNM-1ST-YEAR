const set4 = [
  {
    id: 1,
    question: "ICU me admitted septic patient ka serum albumin bahut low hai. Nurse ko kis nutritional intervention ko priority deni chahiye?",
    options: [
      "Low protein diet",
      "High protein diet",
      "Salt-free water only",
      "Fat-free diet"
    ],
    answer: "High protein diet",
    explanation:
      "Sepsis aur critical illness me protein catabolism increase ho jata hai. Low serum albumin poor nutritional status ka indicator ho sakta hai. High protein intake tissue repair aur immune function support karta hai. Low protein diet condition ko aur worsen kar sakti hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Night blindness se suffer kar rahe child ke diet plan me kis food ko include karna sabse appropriate hoga?",
    options: [
      "White rice",
      "Sugar syrup",
      "Carrot",
      "Butter biscuit"
    ],
    answer: "Carrot",
    explanation:
      "Carrot beta-carotene ka rich source hai jo Vitamin A me convert hota hai. Vitamin A deficiency night blindness ka common cause hai. Diet counseling me Vitamin A rich foods ko emphasize kiya jata hai. Early correction vision complications ko prevent kar sakti hai.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Community survey me adolescent girls me anemia prevalence high mili. Sabse effective nutrition strategy kya hogi?",
    options: [
      "Iron-Folic Acid supplementation",
      "Low protein diet",
      "Calcium restriction",
      "Fluid restriction"
    ],
    answer: "Iron-Folic Acid supplementation",
    explanation:
      "Adolescent girls me iron deficiency anemia common hai. Iron aur folic acid supplementation RBC production support karti hai. Community programs me IFA tablets anemia control ka major component hain. Dietary counseling bhi saath me zaroori hai.",
    topic: "Community Nutrition",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Type 2 diabetes patient ko diet education dete waqt nurse kis advice ko sabse appropriate maane gi?",
    options: [
      "Sugary drinks increase karna",
      "Meals skip karna",
      "Unlimited sweets lena",
      "Controlled carbohydrate intake"
    ],
    answer: "Controlled carbohydrate intake",
    explanation:
      "Diabetes management me carbohydrate control blood glucose regulation ke liye essential hai. Sugary drinks aur sweets glucose spikes create kar sakte hain. Regular balanced meals glycemic control improve karte hain.",
    topic: "Diabetic Nutrition",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Renal failure patient me hyperphosphatemia prevent karne ke liye kis food ko limit kiya ja sakta hai?",
    options: [
      "Dairy products",
      "Apple",
      "Cucumber",
      "Lauki"
    ],
    answer: "Dairy products",
    explanation:
      "Dairy products phosphorus-rich hote hain. Chronic kidney disease me phosphorus accumulation bone aur cardiovascular complications create kar sakta hai. Renal diet planning me phosphorus restriction important hai.",
    topic: "Renal Nutrition",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Pregnant woman me megaloblastic anemia ka risk kam karne ke liye kis nutrient ka adequate intake zaroori hai?",
    options: [
      "Sodium",
      "Folic Acid",
      "Fluoride",
      "Vitamin K"
    ],
    answer: "Folic Acid",
    explanation:
      "Folic acid DNA synthesis aur RBC formation ke liye essential hai. Pregnancy me demand badh jati hai. Deficiency me megaloblastic anemia aur fetal complications dono ka risk badhta hai.",
    topic: "Maternal Nutrition",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Burn patient ke nutritional assessment me positive nitrogen balance achieve karne ka primary purpose kya hai?",
    options: [
      "Tissue repair promote karna",
      "Fluid loss badhana",
      "Blood sugar increase karna",
      "Weight loss karna"
    ],
    answer: "Tissue repair promote karna",
    explanation:
      "Positive nitrogen balance indicate karta hai ki body me protein synthesis breakdown se zyada ho rahi hai. Burn patients me healing aur tissue regeneration ke liye yeh desirable goal hai. Adequate protein intake iske liye required hota hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Kwashiorkor wale child me edema develop hone ka direct cause kya hota hai?",
    options: [
      "Excess calcium",
      "Low serum albumin",
      "Vitamin C excess",
      "Hyperglycemia"
    ],
    answer: "Low serum albumin",
    explanation:
      "Protein deficiency ke karan serum albumin level kam ho jata hai. Oncotic pressure reduce hone se fluid tissues me accumulate hota hai aur edema develop hota hai. Yeh kwashiorkor ki classic finding hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Post-operative patient me constipation prevent karne ke liye nurse kis dietary component ko increase karne ki salah degi?",
    options: [
      "Fiber",
      "Refined sugar",
      "Trans-fat",
      "Saturated fat"
    ],
    answer: "Fiber",
    explanation:
      "Dietary fiber bowel motility improve karta hai aur stool bulk badhata hai. Post-operative constipation prevention me adequate fluids ke saath fiber useful hota hai. Non-pharmacological management ka important part hai.",
    topic: "Dietary Fiber",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Osteomalacia se affected adult patient me sabse important nutrient deficiency kaunsi hoti hai?",
    options: [
      "Vitamin K",
      "Iron",
      "Calcium only",
      "Vitamin D"
    ],
    answer: "Vitamin D",
    explanation:
      "Vitamin D deficiency bone mineralization ko affect karti hai aur osteomalacia ka major cause hai. Adequate sunlight exposure aur dietary intake treatment ka part hote hain. Calcium bhi important hai lekin primary deficiency Vitamin D hai.",
    topic: "Vitamin Nutrition",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Liver cirrhosis patient me sodium restriction ka primary objective kya hai?",
    options: [
      "Ascites reduce karna",
      "Hemoglobin increase karna",
      "Vision improve karna",
      "Calcium absorption badhana"
    ],
    answer: "Ascites reduce karna",
    explanation:
      "Sodium water retention ko increase karta hai. Cirrhosis me sodium restriction ascites aur edema control karne me help karta hai. Therapeutic diet management ka yeh important component hai.",
    topic: "Liver Nutrition",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "School health screening me ek child ka BMI age ke hisab se bahut high mila. Yeh kis condition ki taraf indicate karta hai?",
    options: [
      "Undernutrition",
      "Obesity",
      "Protein deficiency",
      "Wasting"
    ],
    answer: "Obesity",
    explanation:
      "High BMI overweight ya obesity ka indicator ho sakta hai. Childhood obesity future cardiovascular aur metabolic diseases ka risk badhati hai. Early intervention aur nutrition education zaroori hai.",
    topic: "Nutritional Assessment",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Scurvy prevention ke liye nurse kis food group ko emphasize karegi?",
    options: [
      "Citrus fruits",
      "Refined cereals",
      "Sugary beverages",
      "Animal fat"
    ],
    answer: "Citrus fruits",
    explanation:
      "Scurvy Vitamin C deficiency se hota hai. Citrus fruits Vitamin C ke excellent sources hain. Adequate intake collagen synthesis aur wound healing support karta hai.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Enteral feeding ke dauran aspiration risk kam karne ke liye patient ko kis position me rakhna chahiye?",
    options: [
      "Supine flat",
      "Trendelenburg",
      "Prone",
      "Head elevated 30–45°"
    ],
    answer: "Head elevated 30–45°",
    explanation:
      "Head elevation aspiration pneumonia ka risk significantly reduce karti hai. Enteral feeding safety protocols me yeh standard nursing intervention mana jata hai. Flat position risk badha sakti hai.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Iodine deficiency disorders ko prevent karne ka sabse effective public health measure kya hai?",
    options: [
      "Universal salt iodization",
      "Iron injections",
      "Vitamin A syrup",
      "Protein supplements"
    ],
    answer: "Universal salt iodization",
    explanation:
      "Iodized salt population level par iodine deficiency prevent karne ka proven method hai. Isse goiter aur developmental complications dono reduce hote hain. Public health nutrition programs me iska major role hai.",
    topic: "Community Nutrition",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Breastfeeding mother ko additional calories ki zarurat primarily kis wajah se hoti hai?",
    options: [
      "Blood pressure maintain karne ke liye",
      "Milk production ke liye",
      "Vision improve karne ke liye",
      "Bone fracture heal karne ke liye"
    ],
    answer: "Milk production ke liye",
    explanation:
      "Lactation ke dauran energy requirement increase ho jati hai kyunki breast milk synthesis ke liye additional calories aur nutrients chahiye hote hain. Maternal nutrition directly infant health ko affect karti hai.",
    topic: "Lactation Nutrition",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Severe diarrhea ke baad potassium replacement ke liye kaunsa food sabse suitable hai?",
    options: [
      "Banana",
      "White sugar",
      "Butter",
      "Tea"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium ka rich source hai aur diarrhea ke baad electrolyte losses ko replace karne me help karta hai. Potassium balance muscle aur cardiac function ke liye important hai.",
    topic: "Mineral Nutrition",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Parenteral nutrition receive kar rahe patient me catheter care ka sabse important principle kya hai?",
    options: [
      "Frequent disconnection",
      "Strict aseptic technique",
      "Open handling",
      "Unsterile dressing changes"
    ],
    answer: "Strict aseptic technique",
    explanation:
      "Parenteral nutrition patients me bloodstream infection ka risk high hota hai. Strict aseptic technique infection prevention ka cornerstone hai. Nursing vigilance patient safety ke liye essential hai.",
    topic: "Parenteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Marasmus me sabse common nutritional deficiency pattern kya hota hai?",
    options: [
      "Severe calorie deficiency",
      "Excess protein intake",
      "Vitamin K excess",
      "Sodium overload"
    ],
    answer: "Severe calorie deficiency",
    explanation:
      "Marasmus primarily severe energy deficiency ka result hai. Child me marked wasting aur loss of subcutaneous fat dekha jata hai. Protein-energy malnutrition ke assessment me iski identification important hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Exclusive breastfeeding kitne mahine tak recommend ki jati hai?",
    options: [
      "2 months",
      "4 months",
      "12 months",
      "6 months"
    ],
    answer: "6 months",
    explanation:
      "WHO recommendation ke anusaar pehle 6 mahine tak exclusive breastfeeding di jani chahiye. Is period me breast milk infant ki nutritional aur hydration needs ko adequately meet karta hai.",
    topic: "Infant Nutrition",
    difficulty: "medium"
  }
];

export default set4;

// Answer Key:
// [2,3,1,4,1,2,1,2,1,4,1,2,1,4,1,2,1,2,1,4]

// Option 1 = 8
// Option 2 = 5
// Option 3 = 2
// Option 4 = 5