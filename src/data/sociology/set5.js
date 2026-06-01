// Answer Key:
// [2,4,1,3,1,4,2,3,4,1,3,2,1,4,2,3,2,4,3,1]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set5 = [
  {
    id: 1,
    question: "Ek community survey me nurse paati hai ki low-income families me malnutrition zyada hai. Iska sabse uchit sociological explanation kya hai?",
    options: [
      "Genetic disorder",
      "Socio-economic status ka prabhav",
      "Climate change",
      "Blood group variation"
    ],
    answer: "Socio-economic status ka prabhav",
    explanation: "Socio-economic status food availability, education aur healthcare access ko affect karta hai. Low-income families me nutritious food ki kami ho sakti hai. Malnutrition ke social determinants ko samajhna community nursing ka important hissa hai. Genetics yahan primary factor nahi hai.",
    topic: "Socio-Economic Factors",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Ek gaon me log vaccination se mana kar rahe hain kyunki unhe lagta hai ki vaccine se infertility hoti hai. Yeh kis factor ka prabhav hai?",
    options: [
      "Urbanization",
      "Social mobility",
      "Role strain",
      "Cultural beliefs aur myths"
    ],
    answer: "Cultural beliefs aur myths",
    explanation: "Health myths aur cultural beliefs vaccination acceptance ko prabhavit kar sakte hain. Nurse ko culturally appropriate health education deni chahiye. Myths ko evidence-based information se replace karna zaroori hai. Public health programs me yeh common challenge hai.",
    topic: "Culture and Health",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Ek nurse dekhti hai ki adolescent apne parents ki bajay friends ki advice zyada follow karta hai. Yeh kis agent of socialization ka prabhav hai?",
    options: [
      "Peer group",
      "Religion",
      "Government",
      "Hospital"
    ],
    answer: "Peer group",
    explanation: "Adolescence me peer group ka influence bahut strong hota hai. Behavior, attitudes aur decisions par friends ka effect padta hai. Positive aur negative dono behaviors peer influence se develop ho sakte hain. Health education me peer leaders ka use kiya jata hai.",
    topic: "Socialization",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Ek patient ko leprosy hone ke baad society ke log usse avoid karne lagte hain. Yeh kis sociological concept ka example hai?",
    options: [
      "Social mobility",
      "Acculturation",
      "Social stigma",
      "Social integration"
    ],
    answer: "Social stigma",
    explanation: "Leprosy aur kuch anya diseases ke saath stigma juda hota hai. Stigma patient ko emotionally aur socially affect karta hai. Isse treatment-seeking behavior bhi prabhavit ho sakta hai. Nurse ko stigma reduction me role nibhana chahiye.",
    topic: "Social Stigma",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Ek farmer ka beta engineer ban kar higher social position achieve karta hai. Yeh kis concept ka udaharan hai?",
    options: [
      "Upward social mobility",
      "Role conflict",
      "Social control",
      "Cultural lag"
    ],
    answer: "Upward social mobility",
    explanation: "Jab vyakti lower social position se higher position tak pahunchta hai to ise upward social mobility kehte hain. Education iska major tool hai. Social mobility society me opportunities ko reflect karti hai.",
    topic: "Social Mobility",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek community me modern health facilities available hain lekin log purani practices hi follow karte hain. Yeh kis concept ko darshata hai?",
    options: [
      "Social integration",
      "Role conflict",
      "Migration",
      "Cultural lag"
    ],
    answer: "Cultural lag",
    explanation: "Material development aur social beliefs ke beech gap ko cultural lag kehte hain. Facilities improve ho gayi hain lekin attitudes dheere badal rahe hain. Health education se is gap ko kam kiya ja sakta hai.",
    topic: "Cultural Lag",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Ek patient treatment ke baare me decision lene se pehle family elders ki salah leta hai. Yeh kis factor ko darshata hai?",
    options: [
      "Mass media influence",
      "Traditional authority",
      "Urbanization",
      "Social mobility"
    ],
    answer: "Traditional authority",
    explanation: "Traditional authority me elders aur senior family members decision making me important role rakhte hain. Kai communities me health decisions bhi isi pattern ko follow karte hain. Nurse ko family structure samajhna chahiye.",
    topic: "Authority",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Income, education aur occupation ke aadhar par society ka division kis concept se sambandhit hai?",
    options: [
      "Social control",
      "Acculturation",
      "Social stratification",
      "Migration"
    ],
    answer: "Social stratification",
    explanation: "Social stratification society ko alag-alag social layers me divide karti hai. Iska health outcomes aur healthcare access par bhi effect padta hai. Public health planning me yeh concept important hai.",
    topic: "Social Stratification",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Ek migrant family naye shehar me local customs aur language apna leti hai. Yeh kis process ko darshata hai?",
    options: [
      "Socialization",
      "Role strain",
      "Social control",
      "Acculturation"
    ],
    answer: "Acculturation",
    explanation: "Acculturation me ek culture dusri culture ke elements ko adopt karta hai. Migration ke baad yeh process commonly dekha jata hai. Iska impact health practices par bhi pad sakta hai.",
    topic: "Acculturation",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Ek health campaign ke baad log tobacco use kam kar dete hain aur healthy habits apnate hain. Yeh kis concept ka example hai?",
    options: [
      "Social change",
      "Role conflict",
      "Migration",
      "Social isolation"
    ],
    answer: "Social change",
    explanation: "Behavior aur attitudes me positive transformation social change ka example hai. Health campaigns community behavior ko improve kar sakte hain. Public health interventions isi principle par kaam karte hain.",
    topic: "Social Change",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Ek working mother ko office aur ghar dono ki responsibilities manage karne me stress ho raha hai. Yeh kya hai?",
    options: [
      "Social mobility",
      "Migration",
      "Role conflict",
      "Social control"
    ],
    answer: "Role conflict",
    explanation: "Multiple roles ki expectations jab ek dusre se takrati hain to role conflict hota hai. Isse stress aur burnout develop ho sakta hai. Nursing assessment me psychosocial stressors identify karne chahiye.",
    topic: "Role Conflict",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Jab log laws aur penalties ke karan public rules follow karte hain, ise kya kehte hain?",
    options: [
      "Social integration",
      "Social control",
      "Socialization",
      "Social mobility"
    ],
    answer: "Social control",
    explanation: "Social control society me order aur discipline maintain karta hai. Laws aur regulations iske important tools hain. Public health laws bhi social control ka example hain.",
    topic: "Social Control",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Ek women self-help group ke baad mahilayein apne health decisions khud lene lagti hain. Yeh kis process ko darshata hai?",
    options: [
      "Empowerment",
      "Role strain",
      "Migration",
      "Social stigma"
    ],
    answer: "Empowerment",
    explanation: "Empowerment individuals ko decision making aur resources par control deta hai. Women empowerment community health ko improve karta hai. Public health programs me yeh important objective hai.",
    topic: "Empowerment",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Ek shehar me sedentary lifestyle aur fast food consumption badhne se obesity cases badh rahe hain. Yeh kis phenomenon se related hai?",
    options: [
      "Social mobility",
      "Acculturation",
      "Role strain",
      "Urbanization"
    ],
    answer: "Urbanization",
    explanation: "Urbanization lifestyle changes laati hai jo obesity aur NCDs ka risk badhati hain. Physical activity kam aur unhealthy diet zyada ho sakti hai. Community health nursing me yeh ek major concern hai.",
    topic: "Urbanization",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Ek community me alag religions ke log milkar blood donation camp organize karte hain. Yeh kis concept ko promote karta hai?",
    options: [
      "Social integration",
      "Social stigma",
      "Role conflict",
      "Migration"
    ],
    answer: "Social integration",
    explanation: "Social integration groups ke beech unity aur cooperation ko badhava deti hai. Community trust aur participation badhta hai. Health programs ki success me yeh important role nibhata hai.",
    topic: "Social Integration",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Ek adolescent social media influencers se dressing aur lifestyle habits seekhta hai. Yeh kis agent of socialization ka example hai?",
    options: [
      "Family",
      "Religion",
      "Mass media",
      "Hospital"
    ],
    answer: "Mass media",
    explanation: "Mass media modern society me behavior aur attitudes ko shape karta hai. Social media ka adolescents par strong influence hota hai. Health communication bhi isi channel ka use karti hai.",
    topic: "Agents of Socialization",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Ek patient caste discrimination ke karan healthcare services tak aasani se nahi pahunch pa raha. Yeh kis issue ko indicate karta hai?",
    options: [
      "Role strain",
      "Social inequality",
      "Socialization",
      "Urbanization"
    ],
    answer: "Social inequality",
    explanation: "Social inequality resources aur opportunities ke unequal distribution ko darshati hai. Healthcare access par iska direct prabhav pad sakta hai. Nurses ko equitable care provide karni chahiye.",
    topic: "Social Inequality",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Ek TB patient apni disease chhupata hai kyunki use logon ki reaction ka dar hai. Is behavior ka mukhya karan kya hai?",
    options: [
      "Social mobility",
      "Role conflict",
      "Migration",
      "Fear of stigma"
    ],
    answer: "Fear of stigma",
    explanation: "Disease-related stigma patients ko diagnosis aur treatment chhupane par majboor kar sakta hai. Isse treatment delay aur mental stress badh sakta hai. Nurse ko supportive environment provide karna chahiye.",
    topic: "Stigma",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Ek adolescent apne friends ko dekhkar smoking shuru kar deta hai. Yeh kis process ka example hai?",
    options: [
      "Acculturation",
      "Social control",
      "Social learning",
      "Migration"
    ],
    answer: "Social learning",
    explanation: "Social learning observation aur imitation ke through hoti hai. Peer group behaviors ko influence karta hai. Adolescents me risky habits isi process se develop ho sakti hain.",
    topic: "Social Learning",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community health planning me local residents ko involve karne ka sabse bada fayda kya hai?",
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

export default set5;