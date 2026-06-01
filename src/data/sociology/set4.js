// Answer Key:
// [4,1,3,2,1,4,2,3,1,4,3,2,4,1,2,3,4,2,3,1]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set4 = [
  {
    id: 1,
    question: "Ek community me kuch log health center ki jagah jhaad-phoonk ko prefer karte hain. Nurse ko sabse pehle kis sociological factor ko assess karna chahiye?",
    options: [
      "Occupation pattern",
      "Income source",
      "Family size",
      "Cultural beliefs"
    ],
    answer: "Cultural beliefs",
    explanation: "Health-seeking behavior par cultural beliefs ka direct effect hota hai. Agar community traditional healing par trust karti hai to nurse ko un beliefs ko samajhkar health education deni chahiye. Family size ya occupation yahan primary factor nahi hai. Culturally sensitive care nursing ka important principle hai.",
    topic: "Culture",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Ek child sabse pehle language, values aur acceptable behavior kis social institution se seekhta hai?",
    options: [
      "Family",
      "Hospital",
      "Government",
      "Workplace"
    ],
    answer: "Family",
    explanation: "Family primary agent of socialization hai. Bachcha sabse pehle norms aur values family se hi seekhta hai. School aur media baad me influence karte hain. Nursing assessment me family environment ka evaluation important hota hai.",
    topic: "Socialization",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Ek HIV patient ko society me baar-baar rejection aur discrimination face karna pad raha hai. Yeh kis sociological concept ka example hai?",
    options: [
      "Social mobility",
      "Social integration",
      "Social stigma",
      "Acculturation"
    ],
    answer: "Social stigma",
    explanation: "Social stigma negative labeling aur discrimination ko darshata hai. HIV patients aksar stigma ke karan treatment delay karte hain. Nurse ko counseling aur advocacy provide karni chahiye. Yeh public health concern bhi hai.",
    topic: "Social Stigma",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Ek adolescent ghar par obedient hai lekin friends ke saath risky behavior karta hai. Yeh kis sociological process ko reflect karta hai?",
    options: [
      "Urbanization",
      "Role strain",
      "Migration",
      "Peer influence"
    ],
    answer: "Peer influence",
    explanation: "Peer group adolescence me behavior ko strongly influence karta hai. Risk-taking behaviors aksar peers se seekhe ya reinforce hote hain. Nurse ko adolescent counseling me peer pressure assess karna chahiye. Yeh socialization ka important aspect hai.",
    topic: "Peer Group",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Ek daily wage worker ka beta IAS officer ban jata hai. Sociology me ise kya kaha jayega?",
    options: [
      "Upward social mobility",
      "Role conflict",
      "Social control",
      "Social isolation"
    ],
    answer: "Upward social mobility",
    explanation: "Social mobility social status me change ko darshati hai. Education aur opportunities upward mobility ke major factors hain. Yeh social development ka positive indicator hai. Public health outcomes bhi mobility se influence ho sakte hain.",
    topic: "Social Mobility",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek village me modern hospital ban gaya hai lekin log purane health myths ko hi follow kar rahe hain. Yeh kis concept ka example hai?",
    options: [
      "Social integration",
      "Social control",
      "Role conflict",
      "Cultural lag"
    ],
    answer: "Cultural lag",
    explanation: "Cultural lag tab hota hai jab technology ya facilities jaldi badal jayein lekin beliefs aur values dheere change hon. Hospital available hai par soch purani hai. Health education se is gap ko kam kiya ja sakta hai.",
    topic: "Cultural Lag",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Jab log laws aur regulations ke dar se public places par smoking avoid karte hain, to yeh kya hai?",
    options: [
      "Socialization",
      "Social control",
      "Acculturation",
      "Migration"
    ],
    answer: "Social control",
    explanation: "Social control society me acceptable behavior maintain karne ka mechanism hai. Laws aur penalties iska hissa hote hain. Smoking restrictions public health protection ke liye lagayi jati hain. Nursing professionals bhi health policies ko support karte hain.",
    topic: "Social Control",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Income, education aur occupation ke basis par society ka division kis concept ko darshata hai?",
    options: [
      "Role conflict",
      "Acculturation",
      "Social stratification",
      "Urbanization"
    ],
    answer: "Social stratification",
    explanation: "Social stratification society ko different levels me divide karti hai. Education, income aur occupation common indicators hain. Health inequalities bhi stratification se judi hoti hain. Community health planning me yeh concept important hai.",
    topic: "Social Stratification",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Ek patient treatment lene se pehle family elders ki permission ka wait karta hai. Iska sabse uchit explanation kya hai?",
    options: [
      "Traditional authority",
      "Social mobility",
      "Migration",
      "Urbanization"
    ],
    answer: "Traditional authority",
    explanation: "Traditional authority customs aur elders ke influence par based hoti hai. Kai societies me important decisions elders lete hain. Health behavior bhi is authority se influence hota hai. Nurse ko family dynamics samajhne chahiye.",
    topic: "Authority",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Ek migrant family local customs aur language ko gradually adopt kar leti hai. Is process ko kya kahenge?",
    options: [
      "Role strain",
      "Social stigma",
      "Social mobility",
      "Acculturation"
    ],
    answer: "Acculturation",
    explanation: "Acculturation me log dusri culture ke elements ko apna lete hain. Migration ke baad yeh process common hota hai. Iska impact health beliefs aur practices par bhi pad sakta hai. Community nurse ko cultural adaptation samajhna chahiye.",
    topic: "Acculturation",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Ek community me obesity aur diabetes ke cases rapid urban growth ke baad badhne lage. Iska major sociological factor kya hai?",
    options: [
      "Genetics only",
      "Religion",
      "Urbanization",
      "Family size"
    ],
    answer: "Urbanization",
    explanation: "Urbanization lifestyle changes laati hai jaise sedentary habits aur unhealthy diet. Yeh NCDs ka risk badhati hai. Community health nursing me urban health problems ka assessment zaroori hai. Genetics akela factor nahi hai.",
    topic: "Urbanization",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Ek woman self-help group ki member banne ke baad apne healthcare decisions khud lene lagti hai. Yeh kis process ko darshata hai?",
    options: [
      "Social isolation",
      "Empowerment",
      "Role conflict",
      "Migration"
    ],
    answer: "Empowerment",
    explanation: "Empowerment individuals ko resources aur decisions par control deta hai. Women empowerment health outcomes ko improve karta hai. Community development programs me empowerment ek major objective hota hai.",
    topic: "Empowerment",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Ek TB patient apni disease ko society se chhupata hai kyunki use logon ki reaction ka dar hai. Yeh kis factor ka result hai?",
    options: [
      "Social mobility",
      "Role strain",
      "Acculturation",
      "Fear of stigma"
    ],
    answer: "Fear of stigma",
    explanation: "Disease-related stigma patients ko diagnosis aur treatment chhupane par majboor kar sakta hai. Isse treatment adherence aur mental health dono affect hote hain. Nurse ko confidential aur supportive care deni chahiye.",
    topic: "Stigma",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Ek child social media influencers se dressing aur behavior patterns seekh raha hai. Kaunsa agent of socialization active hai?",
    options: [
      "Mass media",
      "Family",
      "Religion",
      "Occupation"
    ],
    answer: "Mass media",
    explanation: "Mass media modern socialization ka powerful source hai. Social media attitudes aur behavior ko shape karta hai. Adolescents aur children par iska impact zyada hota hai. Health promotion campaigns bhi media ka use karti hain.",
    topic: "Agents of Socialization",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Ek nurse observe karti hai ki working mother ko ghar aur office dono ki responsibilities manage karne me difficulty ho rahi hai. Yeh kya hai?",
    options: [
      "Migration",
      "Role conflict",
      "Social control",
      "Social mobility"
    ],
    answer: "Role conflict",
    explanation: "Role conflict tab hota hai jab multiple roles ki expectations ek doosre se takrati hain. Isse stress aur burnout ho sakta hai. Nursing assessment me psychosocial stressors identify karna zaroori hai.",
    topic: "Role Conflict",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Ek sanitation campaign ke baad community me open defecation significantly kam ho jata hai. Yeh kis process ka example hai?",
    options: [
      "Social stigma",
      "Migration",
      "Social change",
      "Role strain"
    ],
    answer: "Social change",
    explanation: "Social change society ke behavior aur attitudes me long-term transformation ko darshata hai. Sanitation campaigns positive behavioral changes la sakti hain. Public health interventions ka yahi objective hota hai.",
    topic: "Social Change",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Alag-alag religions ke log milkar blood donation camp organize karte hain. Yeh kis concept ko strengthen karta hai?",
    options: [
      "Role conflict",
      "Social isolation",
      "Social mobility",
      "Social integration"
    ],
    answer: "Social integration",
    explanation: "Social integration groups ke beech unity aur cooperation ko badhava deti hai. Community participation aur trust improve hota hai. Public health programs ki success me integration important hai.",
    topic: "Social Integration",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Ek patient ko caste ke karan healthcare access me problems face karni pad rahi hain. Yeh kis issue ko indicate karta hai?",
    options: [
      "Role conflict",
      "Social inequality",
      "Urbanization",
      "Socialization"
    ],
    answer: "Social inequality",
    explanation: "Social inequality resources aur opportunities ke unequal distribution ko darshati hai. Healthcare access par iska direct effect pad sakta hai. Nurses ko equitable care aur advocacy provide karni chahiye.",
    topic: "Social Inequality",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Ek adolescent apne peer group se smoking aur alcohol use seekh leta hai. Yeh kis sociological process ka example hai?",
    options: [
      "Acculturation",
      "Migration",
      "Social learning",
      "Social mobility"
    ],
    answer: "Social learning",
    explanation: "Social learning ke through individuals dusron ko observe karke behaviors adopt karte hain. Peer influence adolescence me bahut strong hota hai. Health education programs is factor ko target karte hain.",
    topic: "Social Learning",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community health planning me local residents ko actively involve karne ka sabse bada benefit kya hai?",
    options: [
      "Community ownership aur participation",
      "Disease ka instant cure",
      "Assessment ki zarurat khatam",
      "Nurse ki responsibility khatam"
    ],
    answer: "Community ownership aur participation",
    explanation: "Community involvement se trust aur ownership badhta hai. Programs zyada sustainable aur acceptable bante hain. Community participation public health nursing ka core principle hai.",
    topic: "Community Participation",
    difficulty: "hard"
  }
];

export default set4;