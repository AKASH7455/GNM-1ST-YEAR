const set1 = [
  {
    id: 1,
    question: "Ek urban slum survey me nurse dekhti hai ki kai parivaron me bachchon ka school dropout rate bahut zyada hai. Is situation ko samajhne ke liye sabse pehle kis sociological factor ka assessment karna chahiye?",
    options: [
      "Parivar ki social aur economic condition",
      "Bachche ka blood group",
      "Parivar ka favourite food",
      "Ghar ka paint color"
    ],
    answer: "Parivar ki social aur economic condition",
    explanation: "School dropout aksar poverty, parental education aur social environment se juda hota hai. Sociology me social determinants ko assess karna important hai. Blood group, food preference aur paint color ka direct relation nahi hota. Community assessment me socio-economic factors priority hote hain.",
    topic: "Social Factors",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Ek patient treatment follow nahi kar raha kyunki uske community ke log traditional healer par zyada trust karte hain. Nurse ko is behavior ko kis concept se relate karna chahiye?",
    options: [
      "Social mobility",
      "Culture aur belief system",
      "Industrialization",
      "Urbanization"
    ],
    answer: "Culture aur belief system",
    explanation: "Health behavior par culture aur beliefs ka strong influence hota hai. Patient ka decision uske community norms se affect ho raha hai. Social mobility aur urbanization yahan primary factor nahi hain. Culturally sensitive nursing care zaroori hai.",
    topic: "Culture",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Ek adolescent apne peer group ke pressure me smoking start kar deta hai. Ye kis sociological process ka example hai?",
    options: [
      "Social isolation",
      "Social conflict",
      "Socialization",
      "Migration"
    ],
    answer: "Socialization",
    explanation: "Socialization ke dauran individual society aur group se behaviors seekhta hai. Peer influence adolescence me bahut powerful hota hai. Smoking behavior social learning ka example hai. Isliye socialization sabse sahi answer hai.",
    topic: "Socialization",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Community health nurse ko pata chalta hai ki ek family me decision-making sirf sabse bade male member dwara hoti hai. Ye kis family pattern ko indicate karta hai?",
    options: [
      "Matriarchal family",
      "Nuclear family",
      "Egalitarian family",
      "Patriarchal family"
    ],
    answer: "Patriarchal family",
    explanation: "Patriarchal family me authority male head ke paas hoti hai. Healthcare decisions bhi aksar wahi leta hai. Matriarchal me female authority hoti hai. Community visits me family structure ko samajhna nursing planning ke liye important hai.",
    topic: "Family",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Ek gaon ki ladki higher education ke baad government officer ban jaati hai. Ye kis sociological concept ka example hai?",
    options: [
      "Social change",
      "Social mobility",
      "Social control",
      "Social isolation"
    ],
    answer: "Social mobility",
    explanation: "Social mobility ka matlab social status me change hona hai. Education upward mobility ka major factor hai. Is case me individual lower status se higher social position tak pahunchi hai. Sociology me ye classic example mana jata hai.",
    topic: "Social Mobility",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek hospital me alag-alag religion ke patients admit hain. Nurse sabko equal respect deti hai. Ye kis sociological principle ko support karta hai?",
    options: [
      "Ethnocentrism",
      "Discrimination",
      "Cultural diversity ka respect",
      "Social exclusion"
    ],
    answer: "Cultural diversity ka respect",
    explanation: "Professional nursing practice me cultural diversity ko respect karna essential hai. Har patient ko equal care milni chahiye. Ethnocentrism aur discrimination ethical principles ke opposite hain. Patient-centered care isi approach par based hoti hai.",
    topic: "Cultural Diversity",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Ek community me vaccination ke khilaf afwaah failne se log vaccine nahi lagwa rahe. Nurse ke liye sabse effective sociological intervention kya hoga?",
    options: [
      "Community leaders ko involve karna",
      "Sab logon ko force karna",
      "Health services band kar dena",
      "Rumors ko ignore karna"
    ],
    answer: "Community leaders ko involve karna",
    explanation: "Community leaders logon par social influence rakhte hain. Unko involve karne se trust build hota hai aur behavior change aasaan hota hai. Force ya ignore karna effective nahi hai. Sociology community participation ko promote karti hai.",
    topic: "Community Influence",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Ek patient apni illness ke baare me family se chhupa raha hai kyunki use social rejection ka dar hai. Ye kis concept se sabse adhik related hai?",
    options: [
      "Acculturation",
      "Socialization",
      "Role conflict",
      "Social stigma"
    ],
    answer: "Social stigma",
    explanation: "Social stigma tab hota hai jab society kisi condition ko negative nazariye se dekhti hai. Fear of rejection patient ko information chhupane par majboor kar sakta hai. Stigma treatment adherence aur mental health dono ko affect karta hai.",
    topic: "Social Stigma",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Rapid urbanization ke baad ek area me lifestyle diseases badh rahi hain. Iska primary sociological reason kya ho sakta hai?",
    options: [
      "Badalte social aur lifestyle patterns",
      "Blood group distribution",
      "Genetics ka complete absence",
      "Climate ka koi effect nahi"
    ],
    answer: "Badalte social aur lifestyle patterns",
    explanation: "Urbanization ke saath diet, physical activity aur stress patterns badalte hain. Ye NCDs ke risk ko increase karte hain. Sociology environment aur behavior ke relation ko explain karti hai. Isi wajah se option 1 sahi hai.",
    topic: "Urbanization",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Ek patient simultaneously employee, father aur caregiver ki responsibilities nibha raha hai aur stress me hai. Ye kis concept ka example hai?",
    options: [
      "Social stratification",
      "Cultural lag",
      "Role conflict",
      "Social control"
    ],
    answer: "Role conflict",
    explanation: "Jab ek vyakti ki multiple social roles ek doosre se takraati hain to role conflict hota hai. Isse stress aur adjustment problems develop ho sakti hain. Nurses ko psychosocial assessment me is factor ko identify karna chahiye.",
    topic: "Role Conflict",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Ek society me log laws aur norms follow karte hain kyunki violation par punishment mil sakti hai. Ye kis mechanism ka example hai?",
    options: [
      "Social mobility",
      "Social control",
      "Social change",
      "Cultural diffusion"
    ],
    answer: "Social control",
    explanation: "Social control society me order maintain karta hai. Laws, norms aur sanctions iska hissa hain. Ye acceptable behavior ko encourage karta hai. Healthcare settings me bhi institutional rules social control ka example hain.",
    topic: "Social Control",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Ek migrant family naye shehar me settle hone ke baad dheere-dheere local customs apnane lagti hai. Ye kis process ko darshata hai?",
    options: [
      "Social exclusion",
      "Deviance",
      "Acculturation",
      "Role strain"
    ],
    answer: "Acculturation",
    explanation: "Acculturation me individuals ya groups doosri culture ke elements adopt karte hain. Migration ke baad ye process common hota hai. Health beliefs aur practices bhi isse influence ho sakte hain. Community nursing me ye concept important hai.",
    topic: "Acculturation",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Ek village me women self-help groups ke baad health awareness aur income dono improve hue. Ye kis phenomenon ko indicate karta hai?",
    options: [
      "Social empowerment",
      "Social isolation",
      "Cultural shock",
      "Deviant behavior"
    ],
    answer: "Social empowerment",
    explanation: "Empowerment se individuals aur groups apne decisions aur resources par control badhate hain. Women groups community development me major role play karte hain. Health outcomes bhi empowerment se improve hote hain.",
    topic: "Empowerment",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Hospital survey me pata chalta hai ki low-income groups ko healthcare access me zyada problems aa rahi hain. Ye kis sociological issue ko reflect karta hai?",
    options: [
      "Socialization",
      "Cultural integration",
      "Family cycle",
      "Social inequality"
    ],
    answer: "Social inequality",
    explanation: "Social inequality resources aur opportunities ke unequal distribution ko darshati hai. Healthcare access bhi iska ek major indicator hai. Nurses ko vulnerable populations ki needs identify karni chahiye. Health equity public health ka important goal hai.",
    topic: "Social Inequality",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Ek adolescent online communities se behavior aur attitudes seekh raha hai. Sociology ke hisab se ye kaunsa agent hai?",
    options: [
      "Legal system",
      "Religious institution",
      "Mass media",
      "Economic class"
    ],
    answer: "Mass media",
    explanation: "Mass media aur digital platforms modern socialization agents hain. Ye beliefs, attitudes aur behavior ko influence karte hain. Adolescents par iska impact especially strong hota hai. Health education me bhi media ka use hota hai.",
    topic: "Agents of Socialization",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Ek nurse observe karti hai ki kuch families health decisions me elders ki advice ko doctor se bhi zyada importance deti hain. Iska best sociological explanation kya hai?",
    options: [
      "Biological inheritance",
      "Traditional social norms",
      "Climate effect",
      "Genetic dominance"
    ],
    answer: "Traditional social norms",
    explanation: "Traditional societies me elders authority figures hote hain. Unki advice ko social acceptance milti hai. Health-seeking behavior par family norms ka strong impact hota hai. Effective nursing care ke liye is influence ko samajhna zaroori hai.",
    topic: "Social Norms",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Ek community me sanitation campaign ke baad open defecation me kami aati hai. Ye kis process ka outcome hai?",
    options: [
      "Migration",
      "Role conflict",
      "Social stratification",
      "Social change"
    ],
    answer: "Social change",
    explanation: "Social change society ke behavior aur practices me transformation ko darshata hai. Health campaigns aksar positive social change laate hain. Sanitation improvement community health outcomes ko directly affect karta hai.",
    topic: "Social Change",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Ek patient ko HIV diagnosis ke baad job aur social relations dono me discrimination face karni pad rahi hai. Nurse ko sabse pehle kis issue ko identify karna chahiye?",
    options: [
      "Economic planning",
      "Social stigma aur discrimination",
      "Migration trend",
      "Urban growth"
    ],
    answer: "Social stigma aur discrimination",
    explanation: "HIV patients ke saath stigma aur discrimination common social issues hain. Ye mental health aur treatment adherence ko affect kar sakte hain. Nurse ko advocacy aur counseling provide karni chahiye. Patient rights ka protection bhi zaroori hai.",
    topic: "Discrimination",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Ek society me occupation, income aur education ke basis par log alag social levels me divide hain. Is concept ko kya kaha jata hai?",
    options: [
      "Acculturation",
      "Social control",
      "Social stratification",
      "Role strain"
    ],
    answer: "Social stratification",
    explanation: "Social stratification society ko different hierarchical groups me divide karti hai. Income, education aur occupation common indicators hain. Health outcomes bhi social class ke hisab se vary kar sakte hain. Ye sociology ka core concept hai.",
    topic: "Social Stratification",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community health program me local residents ko planning aur implementation me shamil kiya gaya. Is approach ka sabse bada benefit kya hai?",
    options: [
      "Community trust aur participation badhna",
      "Nurse ki responsibility khatam hona",
      "Disease automatically cure hona",
      "Assessment ki zaroorat khatam hona"
    ],
    answer: "Community trust aur participation badhna",
    explanation: "Community participation sustainable health programs ka foundation hai. Jab log planning me shamil hote hain to ownership aur trust badhta hai. Program acceptance aur effectiveness dono improve hote hain. Public health nursing me ye key principle hai.",
    topic: "Community Participation",
    difficulty: "hard"
  }
];

export default set1;

// Answer Key:
// [1,2,3,4,2,3,1,4,1,3,2,3,1,4,3,2,4,2,3,1]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5