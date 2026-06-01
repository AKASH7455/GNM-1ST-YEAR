// Answer Key:
// [2,4,1,3,2,4,1,3,4,2,3,1,4,3,1,2,3,1,2,4]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set3 = [
  {
    id: 1,
    question: "Ek nurse notice karti hai ki community me log TB patient se door reh rahe hain, jabki treatment chal raha hai. Yeh situation kis sociological issue ko sabse adhik darshati hai?",
    options: [
      "Social mobility",
      "Social stigma",
      "Socialization",
      "Cultural diffusion"
    ],
    answer: "Social stigma",
    explanation: "TB patient se door rehna stigma ka example hai. Stigma patient ki mental health aur treatment adherence dono ko affect karta hai. Nurse ko health education aur awareness provide karni chahiye. Social mobility ya cultural diffusion yahan primary issue nahi hai.",
    topic: "Social Stigma",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Ek gaon me smartphone aur internet aa gaya hai lekin log ab bhi health myths par vishwas karte hain. Yeh kis concept ko darshata hai?",
    options: [
      "Social change",
      "Role conflict",
      "Social control",
      "Cultural lag"
    ],
    answer: "Cultural lag",
    explanation: "Technology jaldi badal gayi lekin beliefs utni tezi se nahi badle. Isi gap ko cultural lag kaha jata hai. Health practices me yeh common dekha jata hai. Nurse ko scientific awareness badhani chahiye.",
    topic: "Cultural Lag",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Ek labourer ka beta MBBS complete karke doctor ban jata hai. Sociology ke hisab se yeh kya hai?",
    options: [
      "Upward social mobility",
      "Social isolation",
      "Role strain",
      "Acculturation"
    ],
    answer: "Upward social mobility",
    explanation: "Jab vyakti lower status se higher status par pahunchta hai to ise upward social mobility kehte hain. Education iska major factor hai. Yeh society me opportunities ki importance ko darshata hai. Nursing me bhi social determinants ko samajhna zaroori hai.",
    topic: "Social Mobility",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Ek adolescent ghar par obedient child aur school me rebellious student ki tarah behave karta hai. Yeh kis concept ka example hai?",
    options: [
      "Social integration",
      "Social stratification",
      "Role conflict",
      "Social control"
    ],
    answer: "Role conflict",
    explanation: "Different settings me contradictory expectations role conflict create karti hain. Adolescent ko alag roles nibhane pad rahe hain. Isse stress aur behavioral issues develop ho sakte hain. Psychosocial assessment me isko identify karna important hai.",
    topic: "Role Conflict",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Ek health worker vaccination campaign me local religious leaders ko involve karta hai. Iska main benefit kya hai?",
    options: [
      "Disease automatic khatam ho jayegi",
      "Community acceptance badhegi",
      "Hospital ki zarurat nahi rahegi",
      "Genetic diseases kam ho jayengi"
    ],
    answer: "Community acceptance badhegi",
    explanation: "Religious leaders community par strong influence rakhte hain. Unki participation trust aur acceptance ko badhati hai. Vaccination coverage improve ho sakta hai. Public health interventions me community participation important hai.",
    topic: "Community Participation",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Ek migrant family naye shehar me local language aur customs apna leti hai. Yeh kis process ka udaharan hai?",
    options: [
      "Social stratification",
      "Deviance",
      "Social control",
      "Acculturation"
    ],
    answer: "Acculturation",
    explanation: "Acculturation me ek group dusri culture ke practices aur values adopt karta hai. Migration ke baad yeh common process hai. Iska impact health beliefs par bhi pad sakta hai. Community nurse ko cultural adaptation samajhni chahiye.",
    topic: "Acculturation",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Ek bachcha sabse pehle social values aur acceptable behavior kis institution se seekhta hai?",
    options: [
      "Family",
      "Government",
      "Hospital",
      "Industry"
    ],
    answer: "Family",
    explanation: "Family primary agent of socialization hai. Bachcha sabse pehle norms, values aur behavior family se hi seekhta hai. School aur media secondary role play karte hain. Nursing me family influence ko samajhna zaroori hai.",
    topic: "Socialization",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Jab log kanoon aur social norms follow karte hain kyunki violation par punishment mil sakti hai, ise kya kehte hain?",
    options: [
      "Social mobility",
      "Social integration",
      "Social control",
      "Cultural diffusion"
    ],
    answer: "Social control",
    explanation: "Social control society me order maintain karta hai. Laws, rules aur sanctions iska hissa hain. Yeh acceptable behavior ko encourage karta hai. Healthcare institutions me bhi social control dekha jata hai.",
    topic: "Social Control",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Income aur occupation ke basis par society ka division kis concept se related hai?",
    options: [
      "Role strain",
      "Socialization",
      "Migration",
      "Social stratification"
    ],
    answer: "Social stratification",
    explanation: "Social stratification society ko different layers me divide karti hai. Income aur occupation common indicators hain. Health outcomes bhi social class se influence hote hain. Public health planning me yeh important concept hai.",
    topic: "Social Stratification",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Ek HIV patient treatment lene se dar raha hai kyunki use logon ke judgement ka fear hai. Sabse bada factor kya hai?",
    options: [
      "Role strain",
      "Social stigma",
      "Urbanization",
      "Migration"
    ],
    answer: "Social stigma",
    explanation: "HIV se juda stigma treatment delay aur poor adherence ka common reason hai. Fear of discrimination patient ko care lene se rok sakta hai. Nurse ko counseling aur support provide karna chahiye. Stigma reduction community health ka important goal hai.",
    topic: "Social Stigma",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Ek shehar me fast food culture aur sedentary lifestyle badhne se obesity cases increase ho rahe hain. Yeh kis phenomenon se related hai?",
    options: [
      "Acculturation",
      "Social mobility",
      "Urbanization",
      "Social control"
    ],
    answer: "Urbanization",
    explanation: "Urbanization lifestyle changes ko badhava deti hai. Physical activity kam aur unhealthy dietary patterns zyada ho sakte hain. Isse obesity aur NCDs ka risk badhta hai. Community health nursing me yeh major concern hai.",
    topic: "Urbanization",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Women self-help group ke baad mahilayein apne health decisions khud lene lagi hain. Yeh kya darshata hai?",
    options: [
      "Empowerment",
      "Social isolation",
      "Role conflict",
      "Deviance"
    ],
    answer: "Empowerment",
    explanation: "Empowerment individuals ko decision-making power deta hai. Women empowerment health outcomes aur social status dono improve karta hai. Community development programs ka yeh important objective hai. Nursing interventions me empowerment promote kiya jata hai.",
    topic: "Empowerment",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Ek patient treatment ke liye pehle family elders ki permission leta hai. Is behavior ka sambandh kis factor se hai?",
    options: [
      "Migration",
      "Social mobility",
      "Mass media",
      "Traditional authority"
    ],
    answer: "Traditional authority",
    explanation: "Traditional authority customs aur elders ke influence par based hoti hai. Kai communities me elders important decisions lete hain. Health-seeking behavior bhi isse affect hota hai. Nurse ko family dynamics samajhna chahiye.",
    topic: "Authority",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Ek adolescent apne peer group ke influence me smoking shuru kar deta hai. Yeh kis process ka example hai?",
    options: [
      "Social control",
      "Social mobility",
      "Socialization",
      "Acculturation"
    ],
    answer: "Socialization",
    explanation: "Socialization ke dauran individuals group se behaviors aur attitudes seekhte hain. Peer influence adolescence me bahut strong hota hai. Smoking behavior social learning ka example hai. Health education me peer influence ko dhyan me rakha jata hai.",
    topic: "Socialization",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Ek community campaign ke baad open defecation significantly kam ho jata hai. Yeh kis concept ka result hai?",
    options: [
      "Social change",
      "Role strain",
      "Migration",
      "Cultural lag"
    ],
    answer: "Social change",
    explanation: "Behavior aur attitudes me positive transformation social change ko darshata hai. Sanitation campaigns iska practical example hain. Isse community health improve hoti hai. Public health programs ka main goal bhi yahi hota hai.",
    topic: "Social Change",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Ek patient simultaneously employee, parent aur caregiver ki responsibilities nibha raha hai aur stress feel kar raha hai. Isse kya kahenge?",
    options: [
      "Urbanization",
      "Role strain",
      "Social stigma",
      "Social control"
    ],
    answer: "Role strain",
    explanation: "Role strain tab hota hai jab ek hi vyakti par bahut zyada expectations aur responsibilities hoti hain. Isse stress develop hota hai. Nurses ko psychosocial assessment me is factor ko evaluate karna chahiye.",
    topic: "Role Strain",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Alag-alag religions ke log milkar health awareness program chalate hain. Yeh kis concept ko promote karta hai?",
    options: [
      "Social isolation",
      "Deviance",
      "Social integration",
      "Role conflict"
    ],
    answer: "Social integration",
    explanation: "Social integration groups ke beech cooperation aur unity ko badhava deti hai. Community participation aur trust improve hota hai. Health programs ki success me integration ka bada role hota hai.",
    topic: "Social Integration",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Ek child online platforms aur influencers se behavior aur attitudes seekh raha hai. Kaunsa agent of socialization active hai?",
    options: [
      "Mass media",
      "Family only",
      "Religion only",
      "Occupation"
    ],
    answer: "Mass media",
    explanation: "Mass media modern society ka powerful socialization agent hai. Social media beliefs aur behavior ko influence karta hai. Adolescents par iska effect aur bhi zyada hota hai. Health communication me media ka role important hai.",
    topic: "Agents of Socialization",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Ek patient ko caste ke basis par healthcare access me difficulty ho rahi hai. Yeh kis issue ka example hai?",
    options: [
      "Migration",
      "Social inequality",
      "Urbanization",
      "Acculturation"
    ],
    answer: "Social inequality",
    explanation: "Social inequality resources aur opportunities ke unequal distribution ko darshati hai. Healthcare access par iska direct effect pad sakta hai. Nurses ko equitable care provide karni chahiye. Health equity public health ka important objective hai.",
    topic: "Social Inequality",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Ek community me awareness programs ke baad child marriage cases kam ho jate hain. Yeh sabse achha example kis cheez ka hai?",
    options: [
      "Role conflict",
      "Social mobility",
      "Socialization",
      "Social change"
    ],
    answer: "Social change",
    explanation: "Child marriage me reduction society ke attitudes aur practices me positive transformation ko darshata hai. Yeh social change ka practical example hai. Community education aur awareness is process ko support karte hain.",
    topic: "Social Change",
    difficulty: "hard"
  }
];

export default set3;