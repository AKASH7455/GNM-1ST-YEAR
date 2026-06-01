const set2 = [
  {
    id: 1,
    question: "Liver cirrhosis patient me ascites develop ho gaya hai. Nurse ko diet planning me sabse pehle kis restriction par focus karna chahiye?",
    options: [
      "Sodium restriction",
      "Vitamin C restriction",
      "Carbohydrate restriction",
      "Iron restriction"
    ],
    answer: "Sodium restriction",
    explanation:
      "Ascites me body fluid retention hota hai. Sodium water retention ko badhata hai isliye sodium restriction important nursing intervention hai. Carbohydrate, iron aur vitamin C restriction directly ascites management ka primary goal nahi hote. Clinical practice me low-salt diet routinely advise ki jati hai.",
    topic: "Liver Nutrition",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Antenatal clinic me ek pregnant woman ka Hb 8 g/dL hai. Iron absorption improve karne ke liye nurse kis beverage ki salah degi?",
    options: [
      "Tea",
      "Orange juice",
      "Coffee",
      "Soft drink"
    ],
    answer: "Orange juice",
    explanation:
      "Orange juice me Vitamin C hota hai jo iron absorption ko enhance karta hai. Tea aur coffee iron absorption ko reduce kar sakte hain. Severe anemia prevention ke liye iron-rich foods ke saath Vitamin C lena evidence-based recommendation hai.",
    topic: "Maternal Nutrition",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Community survey me ek preschool child ka weight-for-age bahut low mila. Yeh kis nutritional indicator ko suggest karta hai?",
    options: [
      "Overnutrition",
      "Obesity",
      "Underweight",
      "Normal growth"
    ],
    answer: "Underweight",
    explanation:
      "Weight-for-age low hona underweight ko indicate karta hai. Yeh chronic ya acute malnutrition dono ka signal ho sakta hai. Growth monitoring community nutrition assessment ka important part hai. Early identification se timely intervention possible hota hai.",
    topic: "Nutritional Assessment",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Patient ko peptic ulcer disease hai. Nurse kis dietary advice ko sabse appropriate maane gi?",
    options: [
      "Highly spicy foods lena",
      "Long fasting periods rakhna",
      "Frequent balanced meals lena",
      "Excess coffee consume karna"
    ],
    answer: "Frequent balanced meals lena",
    explanation:
      "Peptic ulcer patient me frequent small meals gastric irritation kam kar sakte hain. Excess spicy foods aur coffee symptoms worsen kar sakte hain. Long fasting se gastric discomfort badh sakta hai. Therapeutic nutrition symptom management me important role nibhati hai.",
    topic: "Therapeutic Diet",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Severe burns wale patient me nitrogen balance maintain karne ke liye kis nutrient ki requirement sabse zyada badh jati hai?",
    options: [
      "Protein",
      "Fluoride",
      "Sodium",
      "Iodine"
    ],
    answer: "Protein",
    explanation:
      "Burns ke baad protein breakdown increase ho jata hai aur tissue repair ke liye high protein intake zaroori hota hai. Nitrogen balance maintain karne me protein key role play karta hai. Isliye burn patients ko protein-rich diet di jati hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Nurse ek elderly patient ko osteoporosis prevention ke liye counseling de rahi hai. Kaunsa nutrient sabse zyada emphasize kiya jana chahiye?",
    options: [
      "Vitamin K",
      "Calcium",
      "Iron",
      "Vitamin B12"
    ],
    answer: "Calcium",
    explanation:
      "Calcium bone health ke liye essential hai aur osteoporosis prevention me major role rakhta hai. Vitamin D bhi important hai lekin bone mineralization ka primary mineral calcium hai. Elderly patients me adequate calcium intake critical hota hai.",
    topic: "Geriatric Nutrition",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Type 1 diabetes wale child ko insulin diya gaya hai. Meal delay hone par sabse immediate nutritional risk kya hai?",
    options: [
      "Hypercalcemia",
      "Hypoglycemia",
      "Hypernatremia",
      "Goiter"
    ],
    answer: "Hypoglycemia",
    explanation:
      "Insulin administration ke baad meal delay hone se blood glucose dangerously low ho sakta hai. Hypoglycemia ek emergency condition hai. Nurse ko meal timing aur insulin coordination par dhyan dena chahiye. Patient safety ke liye yeh critical concept hai.",
    topic: "Diabetic Nutrition",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Parenteral nutrition receive kar rahe patient me catheter site redness aur fever develop ho gaya hai. Sabse likely complication kya hai?",
    options: [
      "Vitamin deficiency",
      "Constipation",
      "Dehydration",
      "Catheter-related infection"
    ],
    answer: "Catheter-related infection",
    explanation:
      "Parenteral nutrition central venous catheter ke through diya jata hai. Redness aur fever infection ke warning signs hain. Aseptic technique maintain karna bahut important hai. Infection ko early identify karna nurse ki responsibility hai.",
    topic: "Parenteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "School health program me nurse ko child ke diet history me sirf polished rice aur bahut kam pulses milti hain. Kaunsi deficiency ka risk sabse zyada hai?",
    options: [
      "Protein deficiency",
      "Vitamin K excess",
      "Fluorosis",
      "Hyperthyroidism"
    ],
    answer: "Protein deficiency",
    explanation:
      "Diet me protein-rich foods ki kami hone par protein deficiency ka risk badh jata hai. Pulses important plant protein source hain. Long-term inadequate intake growth aur immunity dono ko affect kar sakta hai. Community nutrition assessment me dietary pattern evaluate karna zaroori hai.",
    topic: "Protein Nutrition",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Renal failure patient ko potassium restricted diet prescribe ki gayi hai. Nurse kis food ko avoid karne ki salah degi?",
    options: [
      "Apple",
      "Rice",
      "Cabbage",
      "Banana"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium-rich food hai. Renal failure me potassium accumulation life-threatening arrhythmias ka risk badha sakta hai. Isliye high-potassium foods ko limit karna important hai. Dietary counseling patient safety ka important part hai.",
    topic: "Renal Nutrition",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Kwashiorkor wale child me edema ka primary reason kya hota hai?",
    options: [
      "High hemoglobin",
      "Protein deficiency",
      "Excess Vitamin C",
      "High calcium"
    ],
    answer: "Protein deficiency",
    explanation:
      "Protein deficiency se plasma oncotic pressure decrease hota hai jisse fluid tissues me leak karta hai aur edema develop hota hai. Yeh kwashiorkor ki hallmark feature hai. Clinical assessment me edema aur growth failure dono evaluate kiye jate hain.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Patient me bleeding gums aur poor wound healing dekhi gayi. Kaunsi deficiency sabse likely hai?",
    options: [
      "Vitamin D deficiency",
      "Vitamin A deficiency",
      "Vitamin C deficiency",
      "Vitamin K deficiency"
    ],
    answer: "Vitamin C deficiency",
    explanation:
      "Vitamin C collagen synthesis ke liye important hai. Iski deficiency se scurvy, bleeding gums aur delayed wound healing ho sakti hai. Clinical nutrition me deficiency signs ko identify karna important nursing skill hai.",
    topic: "Vitamin Nutrition",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Enteral feeding shuru karne se pehle nasogastric tube placement verify karne ka sabse important reason kya hai?",
    options: [
      "Aspiration prevent karna",
      "Digestion improve karna",
      "Weight gain badhana",
      "Vitamin absorption badhana"
    ],
    answer: "Aspiration prevent karna",
    explanation:
      "Incorrect tube placement se feed lungs me ja sakta hai aur aspiration pneumonia ho sakti hai. Placement verification patient safety ka critical step hai. Enteral nutrition administration se pehle nurse ko iski confirmation karni chahiye.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Antenatal mother ko iodine deficiency ke consequences samjhate waqt nurse kis risk ka mention karegi?",
    options: [
      "Night blindness only",
      "Neural tube defect only",
      "Scurvy",
      "Impaired fetal brain development"
    ],
    answer: "Impaired fetal brain development",
    explanation:
      "Iodine fetal neurological development ke liye essential hai. Deficiency cognitive impairment aur developmental issues ka risk badha sakti hai. Maternal nutrition counseling me iodized salt ka use strongly recommend kiya jata hai.",
    topic: "Maternal Nutrition",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Obese patient ko weight reduction program me nurse kaunsi dietary strategy recommend karegi?",
    options: [
      "Balanced calorie deficit diet",
      "Unlimited fruit juice",
      "Frequent sugary snacks",
      "High trans-fat diet"
    ],
    answer: "Balanced calorie deficit diet",
    explanation:
      "Weight reduction ke liye calorie deficit scientifically proven strategy hai. Crash diets sustainable nahi hoti. Balanced nutrition maintain karte hue calorie reduction karna safest approach hai. Long-term lifestyle modification important hai.",
    topic: "Weight Management",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Infant feeding counseling ke dauran nurse complementary feeding kab start karne ki salah degi?",
    options: [
      "Birth ke turant baad",
      "6 months ke baad",
      "3 months par",
      "1 saal ke baad"
    ],
    answer: "6 months ke baad",
    explanation:
      "WHO recommendations ke anusaar pehle 6 mahine exclusive breastfeeding aur uske baad complementary feeding start ki jati hai. Isse growth aur development support hota hai. Early ya delayed introduction dono problems create kar sakte hain.",
    topic: "Infant Nutrition",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "A patient receiving long-term alcohol consumption history presents with neuropathy. Kaunsi vitamin deficiency sabse likely hai?",
    options: [
      "Vitamin D",
      "Vitamin K",
      "Thiamine (Vitamin B1)",
      "Vitamin C"
    ],
    answer: "Thiamine (Vitamin B1)",
    explanation:
      "Chronic alcoholism me Thiamine deficiency common hoti hai aur neuropathy ya neurological symptoms produce kar sakti hai. Early recognition important hai. Vitamin supplementation treatment ka important part hota hai.",
    topic: "Vitamin Nutrition",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Community health nurse ko fluorosis prevalent area me kaunsi preventive advice deni chahiye?",
    options: [
      "High fluoride water continue karna",
      "Safe low-fluoride drinking water use karna",
      "Extra iodine lena",
      "Extra sodium lena"
    ],
    answer: "Safe low-fluoride drinking water use karna",
    explanation:
      "Fluorosis excessive fluoride exposure se hota hai. Prevention ke liye safe water source ka use sabse effective measure hai. Community-level interventions public health nutrition ka important part hain.",
    topic: "Community Nutrition",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Constipation se suffer kar rahe bedridden patient ke liye sabse appropriate dietary modification kya hai?",
    options: [
      "Fiber-rich diet",
      "Protein-free diet",
      "Fluid restriction",
      "Fat-free diet"
    ],
    answer: "Fiber-rich diet",
    explanation:
      "Fiber stool bulk increase karta hai aur bowel movement improve karta hai. Adequate hydration ke saath fiber constipation management ka cornerstone hai. Bedridden patients me bowel care nursing management ka important aspect hai.",
    topic: "Dietary Fiber",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Rickets prevention ke liye child nutrition counseling me kis nutrient ko sabse zyada emphasize kiya jata hai?",
    options: [
      "Vitamin K",
      "Vitamin B12",
      "Iron",
      "Vitamin D"
    ],
    answer: "Vitamin D",
    explanation:
      "Vitamin D calcium absorption aur bone mineralization ke liye essential hai. Deficiency se rickets develop ho sakta hai. Sunlight exposure aur Vitamin D rich foods dono prevention me important role play karte hain.",
    topic: "Child Nutrition",
    difficulty: "hard"
  }
];

export default set2;

// Answer Key:
// [1,2,3,4,1,2,2,4,1,4,2,3,1,4,1,2,3,2,1,4]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 3
// Option 4 = 7