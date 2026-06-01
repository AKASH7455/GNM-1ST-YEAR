const set1 = [
  {
    id: 1,
    question: "Ek gaon me baar-baar water borne disease ke cases aa rahe hain. Investigation ke dauran sabse pehle kis environmental factor ko assess karna chahiye?",
    options: [
      "School attendance",
      "Road condition",
      "Drinking water source",
      "Electricity supply"
    ],
    answer: "Drinking water source",
    explanation: "Water borne diseases adhiktar contaminated water se failti hain. Isliye outbreak investigation me pehle water source ka assessment kiya jata hai. Baaki factors disease transmission se directly sambandhit nahi hain.",
    topic: "Water Hygiene",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Solid waste management me source level segregation ka sabse bada fayda kya hai?",
    options: [
      "Waste treatment ko adhik prabhavi banana",
      "Rainfall badhana",
      "Temperature control karna",
      "Population growth rokna"
    ],
    answer: "Waste treatment ko adhik prabhavi banana",
    explanation: "Segregation se recyclable, infectious aur general waste ko alag kiya ja sakta hai. Isse disposal aur treatment dono adhik safe aur efficient hote hain.",
    topic: "Waste Management",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Overcrowded housing condition me sabse adhik kis disease ke spread ka risk hota hai?",
    options: [
      "Diabetes",
      "Hypertension",
      "Osteoporosis",
      "Tuberculosis"
    ],
    answer: "Tuberculosis",
    explanation: "TB ek airborne disease hai jo overcrowding aur poor ventilation me adhik failti hai. Environmental hygiene me adequate living space ka bahut mahatva hai.",
    topic: "Housing Hygiene",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Community sanitation programme ka primary objective kya hota hai?",
    options: [
      "Entertainment badhana",
      "Disease transmission kam karna",
      "Income increase karna",
      "Transport improve karna"
    ],
    answer: "Disease transmission kam karna",
    explanation: "Sanitation ka mukhya uddeshya environmental contamination aur communicable diseases ko rokna hai. Yeh public health protection ka basic component hai.",
    topic: "Sanitation",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Open defecation ka sabse serious public health consequence kya hai?",
    options: [
      "Feco-oral diseases ka spread",
      "Noise pollution",
      "Road damage",
      "Electricity loss"
    ],
    answer: "Feco-oral diseases ka spread",
    explanation: "Open defecation se water aur food contamination hoti hai. Isse Typhoid, Cholera aur Dysentery jaise diseases ka risk badhta hai.",
    topic: "Excreta Disposal",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Mosquito control me sabse effective environmental measure kya mana jata hai?",
    options: [
      "Street light lagana",
      "Tree cutting",
      "Stagnant water hatana",
      "Wall painting"
    ],
    answer: "Stagnant water hatana",
    explanation: "Mosquito breeding stagnant water me hoti hai. Source reduction vector control ka sabse prabhavi aur sustainable method hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "School hygiene inspection ke dauran sabse adhik kis factor par dhyan dena chahiye?",
    options: [
      "Building color",
      "Safe water aur sanitation",
      "Teacher age",
      "Uniform quality"
    ],
    answer: "Safe water aur sanitation",
    explanation: "School environment me safe drinking water aur sanitation facilities infection prevention ke liye sabse important hain.",
    topic: "School Hygiene",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Indoor air pollution ka major source rural households me aksar kya hota hai?",
    options: [
      "Filtered water",
      "Refrigerator",
      "LED bulb",
      "Biomass fuel combustion"
    ],
    answer: "Biomass fuel combustion",
    explanation: "Wood, crop residue aur dung fuel jalane se smoke generate hota hai jo respiratory diseases ka risk badhata hai.",
    topic: "Air Hygiene",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Chlorination ka mukhya uddeshya kya hai?",
    options: [
      "Pathogens ko destroy karna",
      "Taste badhana",
      "Color badhana",
      "Minerals badhana"
    ],
    answer: "Pathogens ko destroy karna",
    explanation: "Chlorination ek effective disinfection method hai jo water me maujood disease causing microorganisms ko nash karne ke liye use hoti hai.",
    topic: "Water Purification",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Improper biomedical waste disposal ka sabse bada risk kya hai?",
    options: [
      "Tourism kam hona",
      "Traffic increase",
      "Rainfall kam hona",
      "Healthcare associated infection spread"
    ],
    answer: "Healthcare associated infection spread",
    explanation: "Biomedical waste me infectious material ho sakta hai. Galat disposal se infection healthcare workers aur community dono tak pahunch sakta hai.",
    topic: "Biomedical Waste",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Noise pollution ka long-term health effect sabse adhik kis roop me dekha jata hai?",
    options: [
      "Improved vision",
      "Hearing loss",
      "Increased height",
      "Weight gain"
    ],
    answer: "Hearing loss",
    explanation: "Continuous loud noise exposure auditory damage kar sakta hai. Hearing impairment environmental health concern hai.",
    topic: "Noise Pollution",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Sanitary landfill ka mukhya advantage kya hai?",
    options: [
      "Water pollution badhana",
      "Humidity badhana",
      "Vector breeding control karna",
      "Temperature increase karna"
    ],
    answer: "Vector breeding control karna",
    explanation: "Proper covering se flies, rodents aur insects ki breeding kam hoti hai. Yeh safe waste disposal ka accepted method hai.",
    topic: "Waste Management",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Safe drinking water ki sabse mahatvapurn quality kya hai?",
    options: [
      "Disease causing organisms se mukt hona",
      "Bahut thanda hona",
      "High mineral content hona",
      "Colorful hona"
    ],
    answer: "Disease causing organisms se mukt hona",
    explanation: "Safe water microbiologically safe hona chahiye. Public health ke liye pathogenic organisms ka absence sabse zaruri hai.",
    topic: "Water Hygiene",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Fly control se sabse adhik kis disease group ki prevention hoti hai?",
    options: [
      "Asthma",
      "Diabetes",
      "Hypertension",
      "Typhoid aur Dysentery"
    ],
    answer: "Typhoid aur Dysentery",
    explanation: "Flies pathogens ko fecal matter se food tak transfer kar sakti hain. Isliye fly control feco-oral diseases prevention me important hai.",
    topic: "Vector Control",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Poor ventilation wale ghar me sabse adhik kis problem ka risk badhta hai?",
    options: [
      "Road accident",
      "Water scarcity",
      "Respiratory infection spread",
      "Food shortage"
    ],
    answer: "Respiratory infection spread",
    explanation: "Poor ventilation se air exchange kam hota hai aur infectious droplets accumulate ho sakte hain. Isse respiratory diseases ka transmission badhta hai.",
    topic: "Ventilation",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Environmental hygiene programme ka final goal kya hai?",
    options: [
      "Industrialization",
      "Health promotion aur disease prevention",
      "Urbanization",
      "Population increase"
    ],
    answer: "Health promotion aur disease prevention",
    explanation: "Environmental hygiene ka uddeshya healthy environment create karna aur disease burden ko kam karna hai.",
    topic: "Environmental Hygiene",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Potable water ka arth kya hota hai?",
    options: [
      "Industrial water",
      "Irrigation water",
      "Waste water",
      "Peene yogya surakshit jal"
    ],
    answer: "Peene yogya surakshit jal",
    explanation: "Potable water human consumption ke liye safe hota hai aur acceptable microbiological standards ko meet karta hai.",
    topic: "Water Hygiene",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Open burning of household waste ka sabse bada environmental effect kya hai?",
    options: [
      "Air pollution",
      "Water purification",
      "Soil improvement",
      "Noise reduction"
    ],
    answer: "Air pollution",
    explanation: "Waste burning se harmful gases aur particulate matter nikalte hain jo respiratory aur environmental health ko prabhavit karte hain.",
    topic: "Air Hygiene",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Food hygiene maintain karne ka sabse effective tarika kya hai?",
    options: [
      "Food ko khula rakhna",
      "Food ko sunlight me chhodna",
      "Safe handling aur proper storage",
      "Uncovered transportation"
    ],
    answer: "Safe handling aur proper storage",
    explanation: "Food contamination ko rokne ke liye hygienic handling aur proper storage bahut zaruri hai. Yeh food borne diseases ko prevent karta hai.",
    topic: "Food Hygiene",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community me unsafe water supply ka sabse common result kya hota hai?",
    options: [
      "Improved immunity",
      "Water borne disease outbreak",
      "Better nutrition",
      "Reduced infection rate"
    ],
    answer: "Water borne disease outbreak",
    explanation: "Unsafe water supply communicable diseases jaise Cholera, Typhoid aur Hepatitis A ke outbreaks ka major karan hoti hai.",
    topic: "Water Hygiene",
    difficulty: "hard"
  }
];

export default set1;