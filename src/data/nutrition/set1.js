const set1 = [
  {
    id: 1,
    question: "Post-operative patient ko wound healing slow ho rahi hai. Nurse ko sabse pehle kis nutrient deficiency ka suspicion karna chahiye?",
    options: [
      "Protein deficiency",
      "Vitamin D deficiency",
      "Fluoride deficiency",
      "Iodine deficiency"
    ],
    answer: "Protein deficiency",
    explanation:
      "Protein tissue repair aur cell regeneration ke liye essential hai. Post-operative wound healing me adequate protein bahut zaroori hota hai. Vitamin D, fluoride aur iodine ke apne roles hain lekin direct wound healing par protein ka impact sabse zyada hota hai. Clinical setting me low albumin bhi delayed healing se associated hota hai.",
    topic: "Therapeutic Nutrition",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Severe diarrhea ke baad admit patient me dehydration aur electrolyte imbalance hai. Nurse ko kaunsa food recommend karna chahiye jo potassium replenish karne me madad kare?",
    options: [
      "White bread",
      "Banana",
      "Butter",
      "Sugar candy"
    ],
    answer: "Banana",
    explanation:
      "Banana potassium ka achha source hai aur diarrhea ke baad lost potassium ko replace karne me madad karta hai. White bread aur sugar mainly carbohydrate dete hain. Butter me potassium significant amount me nahi hota. Electrolyte correction patient safety ke liye important hai.",
    topic: "Mineral Nutrition",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Night duty ke dauran ek child patient me frequent infections aur night blindness dekhi gayi. Yeh kis nutrient ki kami ko indicate karta hai?",
    options: [
      "Vitamin K",
      "Vitamin E",
      "Vitamin A",
      "Vitamin B12"
    ],
    answer: "Vitamin A",
    explanation:
      "Vitamin A vision aur epithelial tissue integrity ke liye important hai. Iski deficiency se night blindness aur infection susceptibility badh sakti hai. Vitamin K clotting se related hai. Vitamin E aur B12 ke deficiency manifestations alag hote hain.",
    topic: "Vitamin Nutrition",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Pregnant woman ki assessment me nurse ko neural tube defects prevent karne ke liye kis nutrient intake par focus karna chahiye?",
    options: [
      "Calcium",
      "Protein",
      "Vitamin C",
      "Folic Acid"
    ],
    answer: "Folic Acid",
    explanation:
      "Folic acid pregnancy ke early weeks me neural tube development ke liye critical hai. Iski deficiency congenital defects ka risk badha sakti hai. Calcium aur protein bhi important hain lekin specific prevention folic acid se hoti hai. Antenatal counseling me is par khas zor diya jata hai.",
    topic: "Maternal Nutrition",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "ICU patient ko enteral feeding di ja rahi hai. Nurse ko aspiration risk kam karne ke liye kya karna chahiye?",
    options: [
      "Head end 30–45 degree elevate rakhna",
      "Patient ko flat sulana",
      "Feeding ke turant baad prone position dena",
      "Tube feeding ko rapid push karna"
    ],
    answer: "Head end 30–45 degree elevate rakhna",
    explanation:
      "Enteral feeding ke dauran head elevation aspiration risk ko significantly reduce karti hai. Flat position aspiration ko increase kar sakti hai. Rapid feeding bhi intolerance aur aspiration ka risk badhati hai. Yeh patient safety ka important nursing intervention hai.",
    topic: "Enteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Community survey me kai bachchon me goiter dekha gaya. Sabse likely nutritional deficiency kya hai?",
    options: [
      "Iron deficiency",
      "Iodine deficiency",
      "Magnesium deficiency",
      "Copper deficiency"
    ],
    answer: "Iodine deficiency",
    explanation:
      "Iodine thyroid hormone synthesis ke liye essential hai. Iski kami se thyroid enlargement yani goiter develop ho sakta hai. Iron deficiency anemia produce karti hai. Community health programs me iodized salt promotion isi wajah se kiya jata hai.",
    topic: "Micronutrient Deficiency",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Burn patient ka metabolic demand bahut increase ho gaya hai. Diet planning me sabse important priority kya hogi?",
    options: [
      "Low calorie diet",
      "High carbohydrate only",
      "High protein aur high calorie diet",
      "Fat-free diet"
    ],
    answer: "High protein aur high calorie diet",
    explanation:
      "Burn injuries me tissue breakdown aur energy expenditure dono badh jate hain. Isliye high protein aur high calorie diet healing support karti hai. Low calorie ya fat-free diet recovery ko delay kar sakti hai. Nutrition burn management ka key component hai.",
    topic: "Clinical Nutrition",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Anemia prevention program ke dauran nurse adolescent girls ko kis food combination ki advice degi jisse iron absorption improve ho?",
    options: [
      "Tea ke saath iron tablet",
      "Milk ke saath iron tablet",
      "Iron-rich food ke saath coffee",
      "Iron-rich food ke saath citrus fruits"
    ],
    answer: "Iron-rich food ke saath citrus fruits",
    explanation:
      "Vitamin C iron absorption ko enhance karta hai. Citrus fruits ke saath iron-rich food lene se absorption better hota hai. Tea aur coffee iron absorption ko reduce kar sakte hain. Community nutrition education me yeh bahut important concept hai.",
    topic: "Iron Nutrition",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Patient ka BMI 31 kg/m² hai aur type 2 diabetes newly diagnosed hai. Diet counseling me pehla focus kya hona chahiye?",
    options: [
      "Weight reduction through calorie control",
      "Unlimited fruit intake",
      "High sugar beverages",
      "Skipping breakfast daily"
    ],
    answer: "Weight reduction through calorie control",
    explanation:
      "Obesity type 2 diabetes ke major risk factors me se ek hai. Controlled calorie intake aur weight reduction glycemic control improve karte hain. High sugar beverages harmful hote hain. Balanced meal planning diabetic care ka foundation hai.",
    topic: "Diabetic Nutrition",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Parenteral nutrition receive kar rahe patient me infection prevention ke liye nurse ko kis cheez par sabse zyada dhyan dena chahiye?",
    options: [
      "Frequent tube shaking",
      "Extra sugar add karna",
      "Flow rate ignore karna",
      "Strict aseptic technique maintain karna"
    ],
    answer: "Strict aseptic technique maintain karna",
    explanation:
      "Parenteral nutrition central venous access se diya jata hai jahan infection risk high hota hai. Strict aseptic technique se catheter-related infections prevent kiye ja sakte hain. Flow rate aur solution handling bhi important hain. Patient safety ke liye asepsis essential hai.",
    topic: "Parenteral Nutrition",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Kwashiorkor se affected child me sabse characteristic finding kya ho sakti hai?",
    options: [
      "Severe dehydration only",
      "Edema with protein deficiency",
      "Hypertension",
      "Hyperthyroidism"
    ],
    answer: "Edema with protein deficiency",
    explanation:
      "Kwashiorkor primarily protein deficiency disorder hai jisme edema commonly dekha jata hai. Serum protein levels low hone se fluid tissues me shift hota hai. Hypertension aur hyperthyroidism iski typical features nahi hain. Pediatric nutrition me yeh high-yield concept hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Rickets se affected child ke nutritional management me kaunsa nutrient sabse important hai?",
    options: [
      "Vitamin K",
      "Vitamin B6",
      "Vitamin D",
      "Vitamin C"
    ],
    answer: "Vitamin D",
    explanation:
      "Vitamin D calcium metabolism aur bone mineralization ke liye zaroori hai. Deficiency se rickets develop ho sakta hai. Vitamin K clotting ke liye important hai. Nurse ko diet aur sunlight exposure dono par counseling deni chahiye.",
    topic: "Vitamin D Nutrition",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Cardiac patient ko sodium-restricted diet prescribe ki gayi hai. Nurse ko kis food ko avoid karne ki advice deni chahiye?",
    options: [
      "Processed salted snacks",
      "Fresh fruits",
      "Boiled vegetables",
      "Plain rice"
    ],
    answer: "Processed salted snacks",
    explanation:
      "Processed snacks me sodium content kaafi high hota hai jo fluid retention aur blood pressure badha sakta hai. Fresh fruits aur plain rice comparatively safer options hain. Cardiac nutrition me sodium restriction ek major intervention hai.",
    topic: "Cardiac Nutrition",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Chronic kidney disease patient ko diet counseling dete waqt nurse kis nutrient ke excessive intake se bachne ki salah degi?",
    options: [
      "Water-soluble vitamins",
      "Fiber",
      "Simple hydration only",
      "Protein"
    ],
    answer: "Protein",
    explanation:
      "CKD me excessive protein nitrogenous waste load badha sakta hai. Disease stage ke according protein intake carefully plan kiya jata hai. Fiber aur vitamins generally different considerations rakhte hain. Renal nutrition individualized hoti hai.",
    topic: "Renal Nutrition",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Under-five child me marasmus ka assessment karte waqt nurse sabse likely kya observe karegi?",
    options: [
      "Generalized edema",
      "Moon face",
      "Severe wasting and loss of subcutaneous fat",
      "Fluid overload"
    ],
    answer: "Severe wasting and loss of subcutaneous fat",
    explanation:
      "Marasmus severe calorie deficiency se related hota hai jisme marked wasting dekhi jati hai. Edema usually kwashiorkor me prominent hota hai. Child extremely thin aur weak nazar aa sakta hai. Growth monitoring me early detection important hai.",
    topic: "Protein Energy Malnutrition",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Lactating mother ki nutritional requirement pregnancy ke comparison me kis wajah se increase hoti hai?",
    options: [
      "Milk production ke liye additional nutrients chahiye",
      "Bone growth restart hoti hai",
      "Thyroid failure prevent karna hota hai",
      "BP control ke liye"
    ],
    answer: "Milk production ke liye additional nutrients chahiye",
    explanation:
      "Lactation ke dauran mother ko breast milk synthesis ke liye extra energy aur nutrients ki zaroorat hoti hai. Yeh infant growth ko directly affect karta hai. Isliye balanced aur adequate diet bahut important hai. Nursing counseling ka major focus bhi yahi hota hai.",
    topic: "Lactation Nutrition",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Scurvy se affected patient me nurse ko kaunsi dietary advice deni chahiye?",
    options: [
      "Refined sugar increase karna",
      "High saturated fat diet",
      "Protein completely stop karna",
      "Vitamin C rich foods include karna"
    ],
    answer: "Vitamin C rich foods include karna",
    explanation:
      "Scurvy vitamin C deficiency se hota hai. Citrus fruits aur other vitamin C rich foods collagen synthesis aur healing improve karte hain. Refined sugar ya saturated fat iska treatment nahi hain. Nutritional correction primary management hai.",
    topic: "Vitamin C Nutrition",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Nurse ek malnourished child ka Mid Upper Arm Circumference assess kar rahi hai. Yeh assessment kis purpose ke liye useful hai?",
    options: [
      "Vision assessment",
      "Nutritional status screening",
      "Hearing assessment",
      "Cardiac output measurement"
    ],
    answer: "Nutritional status screening",
    explanation:
      "MUAC malnutrition screening ka simple aur effective tool hai. Community settings me undernutrition identify karne ke liye widely use kiya jata hai. Hearing aur vision assessment se iska relation nahi hai. Early detection timely intervention me help karta hai.",
    topic: "Nutritional Assessment",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Hospitalized patient ko constipation ho raha hai. Diet modification me nurse sabse pehle kya suggest karegi?",
    options: [
      "Fiber completely avoid karna",
      "Fluid restriction karna",
      "Fiber-rich diet aur adequate fluids",
      "Only liquid sugar diet"
    ],
    answer: "Fiber-rich diet aur adequate fluids",
    explanation:
      "Fiber stool bulk badhata hai aur adequate fluids bowel movement ko support karte hain. Constipation management me yeh first-line dietary approach hai. Fiber restriction problem ko worsen kar sakta hai. Non-pharmacological nursing care ka important part hai.",
    topic: "Dietary Fiber",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Exclusive breastfeeding ke baare me counseling dete waqt nurse 6 mahine tak kis advice ko support karegi?",
    options: [
      "Breast milk ke saath honey dena",
      "Water regularly dena",
      "Animal milk start kar dena",
      "Sirf breast milk dena"
    ],
    answer: "Sirf breast milk dena",
    explanation:
      "Exclusive breastfeeding ke dauran pehle 6 mahine tak sirf breast milk recommend kiya jata hai. Isme infant ki nutritional aur hydration needs puri ho jati hain. Honey aur animal milk early introduction se risks badh sakte hain. WHO recommendations bhi isi approach ko support karti hain.",
    topic: "Infant Nutrition",
    difficulty: "hard"
  }
];

export default set1;

// Answer Key:
// [1,2,3,4,1,2,3,4,1,4,2,3,1,4,3,2,4,2,3,4]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5