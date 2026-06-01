const set1 = [
  {
    id: 1,
    question: "Ek student exam se pehle itna anxious ho jata hai ki padha hua bhi yaad nahi rehta. Nurse ke hisab se sabse pehla intervention kya hona chahiye?",
    options: [
      "Student ko punish karna",
      "Anxiety level assess karna",
      "Turant medication dena",
      "Usse padhai chhodne bolna"
    ],
    answer: "Anxiety level assess karna",
    explanation: "Nursing process me assessment hamesha pehla step hota hai. Anxiety memory aur concentration ko affect karti hai. Pehle severity assess karni zaroori hai. Baaki options bina assessment ke appropriate nahi hain.",
    topic: "Anxiety",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Patient baar-baar painful surgery ke details bhool jata hai aur kehta hai ki use kuch yaad nahi. Kaunsa defense mechanism sabse adhik sambhavit hai?",
    options: [
      "Projection",
      "Repression",
      "Regression",
      "Compensation"
    ],
    answer: "Repression",
    explanation: "Repression me painful ya unacceptable thoughts unconscious mind me push ho jate hain. Patient jaanbujhkar nahi bhool raha hota. Ye ego ko anxiety se protect karta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Ward me ek child patient injection ke baad nurse ke toy demonstration ko dekhkar bina dare injection lene lagta hai. Ye kis learning principle ka example hai?",
    options: [
      "Trial and error",
      "Classical conditioning",
      "Observational learning",
      "Insight learning"
    ],
    answer: "Observational learning",
    explanation: "Child dusre ko observe karke behavior seekh raha hai. Bandura ke social learning theory ka ye classic example hai. Modeling nursing education me bhi useful hai.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Ek patient har situation me khud ko failure maanta hai aur positive feedback ko ignore karta hai. Iska sabse adhik sambandh kis concept se hai?",
    options: [
      "High motivation",
      "Good adjustment",
      "Strong memory",
      "Low self-esteem"
    ],
    answer: "Low self-esteem",
    explanation: "Low self-esteem wale individuals apni abilities ko underestimate karte hain. Positive achievements ko bhi accept nahi karte. Isse coping aur mental health dono affect hote hain.",
    topic: "Self Concept",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Patient apne gusse ko doctor par nahi dikha pata aur ghar jaakar family par chillata hai. Ye kis defense mechanism ka udaharan hai?",
    options: [
      "Displacement",
      "Denial",
      "Identification",
      "Reaction formation"
    ],
    answer: "Displacement",
    explanation: "Displacement me emotion asli source se hatkar kisi safer target par express hota hai. Yahan patient doctor ki jagah family par gussa nikal raha hai. Ye common defense mechanism hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Nurse patient ko reward deti hai jab wo prescribed exercises complete karta hai. Isse behavior improve hota hai. Ye kis principle par based hai?",
    options: [
      "Punishment",
      "Negative transfer",
      "Positive reinforcement",
      "Generalization"
    ],
    answer: "Positive reinforcement",
    explanation: "Reward desired behavior ko increase karta hai. Operant conditioning me positive reinforcement bahut effective technique mani jati hai. Patient compliance bhi improve hoti hai.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Ek elderly patient apni retirement ke baad bhi community service me actively participate karta hai aur life se satisfied hai. Erikson ke anusaar ye kis stage ka successful outcome hai?",
    options: [
      "Identity",
      "Ego integrity",
      "Autonomy",
      "Initiative"
    ],
    answer: "Ego integrity",
    explanation: "Old age me individual apni life ko evaluate karta hai. Satisfaction aur acceptance hone par ego integrity develop hoti hai. Varna despair develop ho sakta hai.",
    topic: "Developmental Psychology",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Patient ke BP measurement ke time white coat dekhte hi anxiety badh jati hai. Ye kis learning process ka example hai?",
    options: [
      "Insight learning",
      "Observational learning",
      "Latent learning",
      "Classical conditioning"
    ],
    answer: "Classical conditioning",
    explanation: "White coat ek conditioned stimulus ban gaya hai jo anxiety response trigger kar raha hai. Classical conditioning me association ke through response develop hota hai.",
    topic: "Learning",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Student ko padhai ke liye internal desire hai aur wo marks ke bina bhi seekhna chahta hai. Isse kya kaha jayega?",
    options: [
      "Intrinsic motivation",
      "Extrinsic motivation",
      "Conflict",
      "Frustration"
    ],
    answer: "Intrinsic motivation",
    explanation: "Intrinsic motivation andar se aati hai. Individual reward ke liye nahi balki knowledge ya satisfaction ke liye kaam karta hai. Ye long-term learning me useful hoti hai.",
    topic: "Motivation",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Ek patient diagnosis accept karne se mana karta hai aur reports ko galat batata hai. Sabse sambhavit defense mechanism kaunsa hai?",
    options: [
      "Sublimation",
      "Rationalization",
      "Projection",
      "Denial"
    ],
    answer: "Denial",
    explanation: "Denial me individual reality ko accept karne se inkar karta hai. Serious illness ke initial phase me ye commonly dekha jata hai. Temporary coping mechanism ho sakta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Patient ka dhyan baar-baar environment ke noises ki taraf chala jata hai aur wo nurse ki baat nahi sun pata. Sabse adhik affected process kaunsi hai?",
    options: [
      "Memory",
      "Attention",
      "Intelligence",
      "Perception"
    ],
    answer: "Attention",
    explanation: "Attention information ko select karne ki process hai. Agar attention disturb ho to communication aur learning dono affect hote hain. Nursing assessment me iska dhyan rakha jata hai.",
    topic: "Attention",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Ek child difficult puzzle ko kuch der observe karne ke baad achanak solve kar leta hai. Ye kis type ki learning hai?",
    options: [
      "Conditioning",
      "Imitation",
      "Insight learning",
      "Reinforcement learning"
    ],
    answer: "Insight learning",
    explanation: "Insight learning me solution achanak samajh me aata hai. Kohler ne is concept ko explain kiya tha. Isme reasoning aur understanding ka role hota hai.",
    topic: "Learning",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Nurse patient ke emotional response ko samajhne ke liye active listening ka use karti hai. Isse sabse adhik kya improve hota hai?",
    options: [
      "Therapeutic communication",
      "Punishment",
      "Memory span",
      "Conditioning"
    ],
    answer: "Therapeutic communication",
    explanation: "Active listening trust aur rapport build karta hai. Patient apni feelings openly express kar pata hai. Effective nurse-patient relationship ke liye ye essential skill hai.",
    topic: "Communication",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient kehta hai ki uski treatment fail hui kyunki staff incompetent tha, jabki wo khud instructions follow nahi kar raha tha. Ye kis defense mechanism ka example hai?",
    options: [
      "Regression",
      "Compensation",
      "Repression",
      "Projection"
    ],
    answer: "Projection",
    explanation: "Projection me individual apni galti ya feelings dusron par attribute karta hai. Patient apni responsibility accept nahi kar raha aur blame staff par daal raha hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Hospitalized child parents se alag hone par thumb sucking shuru kar deta hai. Ye kis defense mechanism ko indicate karta hai?",
    options: [
      "Denial",
      "Displacement",
      "Regression",
      "Rationalization"
    ],
    answer: "Regression",
    explanation: "Regression me stress ke samay vyakti developmental stage ke purane behaviors dikhata hai. Thumb sucking childhood behavior hai jo anxiety me wapas aa sakta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Patient stressful feelings ko painting aur music me convert karta hai. Ye kis defense mechanism ka healthy example hai?",
    options: [
      "Projection",
      "Sublimation",
      "Denial",
      "Regression"
    ],
    answer: "Sublimation",
    explanation: "Sublimation sabse mature defense mechanisms me se ek hai. Negative emotions ko socially acceptable activities me channel kiya jata hai. Isse adjustment improve hota hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Ek nurse patient ke facial expression, tone aur gestures ko interpret karke uski feelings samajhti hai. Ye kis psychological process se juda hai?",
    options: [
      "Learning",
      "Motivation",
      "Memory",
      "Perception"
    ],
    answer: "Perception",
    explanation: "Perception sensory information ko meaning dene ki process hai. Non-verbal cues ko samajhna effective nursing care ke liye important hai. Accurate perception communication improve karti hai.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Student ko practical exam me success milne ke baad uska confidence aur performance dono improve ho jate hain. Iska sabse adhik sambandh kis concept se hai?",
    options: [
      "Self-efficacy",
      "Conflict",
      "Illusion",
      "Hallucination"
    ],
    answer: "Self-efficacy",
    explanation: "Self-efficacy apni capability par belief ko darshata hai. Success experiences ise strong banate hain. Higher self-efficacy better performance aur persistence se judi hoti hai.",
    topic: "Personality",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Patient ko discharge instructions yaad rakhne me dikkat hai. Nurse information ko chhote meaningful groups me divide karti hai. Ye technique kya kehlati hai?",
    options: [
      "Extinction",
      "Generalization",
      "Chunking",
      "Suppression"
    ],
    answer: "Chunking",
    explanation: "Chunking memory ko improve karne ki technique hai jisme information ko small meaningful units me organize kiya jata hai. Patient education me ye bahut useful hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Ek patient do equally attractive job offers ke beech decision nahi le pa raha. Ye kis type ka conflict hai?",
    options: [
      "Avoidance-avoidance conflict",
      "Approach-approach conflict",
      "Approach-avoidance conflict",
      "Double approach-avoidance conflict"
    ],
    answer: "Approach-approach conflict",
    explanation: "Approach-approach conflict tab hota hai jab do positive options me se ek choose karna ho. Dono options desirable hote hain. Isliye decision lena mushkil ho sakta hai.",
    topic: "Conflict",
    difficulty: "hard"
  }
];

export default set1;

// Answer Key:
// [2,2,3,4,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5