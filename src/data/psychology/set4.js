const set4 = [
  {
    id: 1,
    question: "Ek patient apne recent accident ki details yaad nahi kar pa raha, lekin purani childhood memories clearly bata raha hai. Sabse sambhavit explanation kya hai?",
    options: [
      "Retrograde amnesia",
      "Hallucination",
      "Delusion",
      "Insight"
    ],
    answer: "Retrograde amnesia",
    explanation:
      "Retrograde amnesia me patient recent traumatic event se pehle ya uske aas-paas ki memories recall nahi kar pata. Purani memories aksar preserved rehti hain. Head injury aur severe emotional trauma ke baad ye condition dekhi ja sakti hai. Nursing assessment me memory pattern observe karna important hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Ek patient har baar injection ke naam se hi darne lagta hai kyunki pehle usse painful injection laga tha. Ye kis learning principle ka example hai?",
    options: [
      "Insight learning",
      "Classical conditioning",
      "Latent learning",
      "Trial and error"
    ],
    answer: "Classical conditioning",
    explanation:
      "Classical conditioning me ek neutral stimulus kisi unpleasant experience ke saath associate ho jata hai. Injection ka naam anxiety trigger kar raha hai. Ye learned emotional response hai. Healthcare settings me aise associations common hote hain.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Patient apni disease ke baare me poori jaankari lene ke baad treatment ke risks aur benefits compare karta hai. Ye kis mental process ka udaharan hai?",
    options: [
      "Perception",
      "Motivation",
      "Reasoning",
      "Sensation"
    ],
    answer: "Reasoning",
    explanation:
      "Reasoning me facts ka analysis karke logical conclusion nikala jata hai. Patient available information ka use decision making ke liye kar raha hai. Clinical settings me informed consent ke liye reasoning zaroori hai. Ye higher cognitive function hai.",
    topic: "Thinking and Reasoning",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Ek patient ko lagta hai ki TV anchor usse secret messages bhej raha hai. Ye kis condition ka example hai?",
    options: [
      "Illusion",
      "Insight",
      "Memory loss",
      "Delusion of reference"
    ],
    answer: "Delusion of reference",
    explanation:
      "Delusion of reference me patient believe karta hai ki normal events specifically uske liye messages carry kar rahe hain. Reality-based evidence is belief ko change nahi karta. Ye psychotic disorders me dekha ja sakta hai. Nursing documentation me exact statements note karni chahiye.",
    topic: "Thought Disorders",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Ek nursing student difficult topic ko samajhne ke liye diagrams aur flowcharts ka use karta hai. Isse learning kis wajah se improve hoti hai?",
    options: [
      "Better organization of information",
      "Reduced intelligence",
      "Defense mechanism activation",
      "Perceptual distortion"
    ],
    answer: "Better organization of information",
    explanation:
      "Organized information ko brain aasani se process aur retain karta hai. Diagrams aur flowcharts concepts ke relationships ko clear karte hain. Isse understanding aur recall dono improve hote hain. Nursing education me ye effective strategy hai.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek patient stressful news sunne ke baad bhi calm rehkar problem-solving approach use karta hai. Ye kis coping style ko darshata hai?",
    options: [
      "Emotion-focused avoidance",
      "Problem-focused coping",
      "Regression",
      "Denial"
    ],
    answer: "Problem-focused coping",
    explanation:
      "Problem-focused coping me individual stressor ko directly address karne ki koshish karta hai. Ye adaptive aur effective coping strategy mani jati hai. Healthcare situations me isse adjustment improve hota hai. Patient reality ko accept kar raha hai.",
    topic: "Coping Mechanisms",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Ek patient kehta hai ki 'Mujhe lagta hai main kuch bhi sahi nahi kar sakta.' Ye kis psychological issue ka indicator ho sakta hai?",
    options: [
      "High self-esteem",
      "Low self-esteem",
      "Insight",
      "Creativity"
    ],
    answer: "Low self-esteem",
    explanation:
      "Low self-esteem wale individuals apni abilities ko underestimate karte hain. Negative self-talk aur self-doubt common hote hain. Isse motivation aur recovery dono affect ho sakte hain. Nurse ko supportive communication use karna chahiye.",
    topic: "Self Concept",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Patient ko room me kisi ke chalne ki awaaz sunai deti hai jabki wahan koi nahi hai. Ye kya hai?",
    options: [
      "Illusion",
      "Delusion",
      "Insight",
      "Auditory hallucination"
    ],
    answer: "Auditory hallucination",
    explanation:
      "Auditory hallucination bina kisi external stimulus ke awaaz sunna hai. Ye psychiatric conditions me common symptom hai. Illusion me real stimulus hota hai jabki hallucination me nahi. Assessment ke dauran content aur frequency note karni chahiye.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Maslow hierarchy ke anusaar hospitalized patient me safety needs ka example kya hai?",
    options: [
      "Infection prevention and secure environment",
      "Self-actualization goals",
      "Social recognition",
      "Creative activities"
    ],
    answer: "Infection prevention and secure environment",
    explanation:
      "Safety needs me protection, stability aur security shamil hote hain. Infection control aur safe environment patient ki safety ko support karte hain. Physiological needs ke baad safety needs ko address kiya jata hai.",
    topic: "Maslow Hierarchy",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Ek patient apni unacceptable feelings ko dusre logon par attribute karta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Denial",
      "Compensation",
      "Regression",
      "Projection"
    ],
    answer: "Projection",
    explanation:
      "Projection me vyakti apni feelings ya impulses ko dusron se jod deta hai. Isse anxiety temporarily kam ho sakti hai. Psychiatric nursing me ye defense mechanism frequently assess kiya jata hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Patient discharge instructions ko repeat karke nurse ko batata hai. Ye technique kis purpose ke liye use hoti hai?",
    options: [
      "Evaluation of understanding",
      "Memory suppression",
      "Conflict creation",
      "Projection assessment"
    ],
    answer: "Evaluation of understanding",
    explanation:
      "Teach-back method patient understanding evaluate karne ka effective tareeka hai. Isse nurse ko pata chalta hai ki information correctly samjhi gayi ya nahi. Patient safety aur compliance dono improve hote hain.",
    topic: "Communication",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Ek child repeatedly unsuccessful attempts ke baad puzzle solve kar leta hai. Ye kis learning method ka example hai?",
    options: [
      "Classical conditioning",
      "Observational learning",
      "Trial and error learning",
      "Insight learning"
    ],
    answer: "Trial and error learning",
    explanation:
      "Trial and error learning me individual alag-alag attempts karta hai jab tak correct solution na mil jaye. Thorndike ne is principle ko explain kiya tha. Practice aur repetition is process ka hissa hain.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Ek patient realistic goals set karta hai aur unke liye consistently kaam karta hai. Ye kis trait ko reflect karta hai?",
    options: [
      "Motivation",
      "Hallucination",
      "Illusion",
      "Regression"
    ],
    answer: "Motivation",
    explanation:
      "Motivation behavior ko initiate aur sustain karti hai. Goal-directed behavior strong motivation ko indicate karta hai. Rehabilitation aur recovery me motivation ka important role hai.",
    topic: "Motivation",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient apni terminal illness ke baad bhi meaningful relationships aur achievements par focus karta hai. Erikson ke anusaar ye kis outcome ko darshata hai?",
    options: [
      "Role confusion",
      "Mistrust",
      "Despair",
      "Ego integrity"
    ],
    answer: "Ego integrity",
    explanation:
      "Ego integrity me individual apni life ko acceptance aur satisfaction ke saath dekhta hai. Old age me ye positive developmental outcome mana jata hai. Isse emotional peace aur adjustment improve hota hai.",
    topic: "Developmental Psychology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Ek patient apni anxiety ko gardening aur exercise me convert karta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Projection",
      "Denial",
      "Sublimation",
      "Regression"
    ],
    answer: "Sublimation",
    explanation:
      "Sublimation negative emotions ko socially acceptable activities me channel karta hai. Ye mature defense mechanism hai. Stress management ke liye healthy aur adaptive mana jata hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Ek patient surgery ke baad baar-baar nurse se same question puchta hai kyunki usse jawab yaad nahi rehta. Sabse adhik kaunsa process affected hai?",
    options: [
      "Perception",
      "Memory",
      "Insight",
      "Motivation"
    ],
    answer: "Memory",
    explanation:
      "Repeated questioning recent information retain karne me difficulty ko indicate karta hai. Memory impairment temporary ya permanent ho sakti hai. Nursing assessment me orientation aur recall check kiye jate hain.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Ek patient apne treatment decisions me actively participate karta hai aur responsibility leta hai. Ye kis concept ko darshata hai?",
    options: [
      "Autonomy",
      "Hallucination",
      "Delusion",
      "Projection"
    ],
    answer: "Autonomy",
    explanation:
      "Autonomy ka matlab apne decisions khud lena aur responsibility accept karna hai. Patient-centered care autonomy ko encourage karti hai. Isse satisfaction aur adherence improve hote hain.",
    topic: "Personality Development",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Patient stress ke dauran bachpan ki habits jaise thumb sucking dikhane lagta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Compensation",
      "Regression",
      "Reaction formation",
      "Suppression"
    ],
    answer: "Regression",
    explanation:
      "Regression me individual earlier developmental stage ke behaviors par wapas chala jata hai. Ye stress aur anxiety ke response me hota hai. Healthcare settings me severe stress ke dauran dekha ja sakta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Patient ko medication ke side effects aur benefits dono explain kiye gaye. Information ko samajhkar decision lena kis domain se related hai?",
    options: [
      "Affective domain",
      "Psychomotor domain",
      "Cognitive domain",
      "Behavioral domain"
    ],
    answer: "Cognitive domain",
    explanation:
      "Cognitive domain knowledge, comprehension aur decision making se related hai. Patient information process karke logical choice kar raha hai. Nursing teaching ka major focus cognitive learning hota hai.",
    topic: "Learning Domains",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Ek nurse ko do equally attractive job offers milte hain aur use ek choose karna hai. Ye kis type ka conflict hai?",
    options: [
      "Approach-Avoidance",
      "Avoidance-Avoidance",
      "Double Approach-Avoidance",
      "Approach-Approach"
    ],
    answer: "Approach-Approach",
    explanation:
      "Approach-approach conflict tab hota hai jab do positive options me se ek select karna ho. Dono alternatives desirable hote hain. Isliye decision difficult lag sakta hai lekin outcome generally positive hota hai.",
    topic: "Conflict",
    difficulty: "hard"
  }
];

export default set4;

// Answer Key:
// [1,2,3,4,1,2,2,4,1,4,1,3,1,4,3,2,1,2,3,4]

// Option 1 = 6
// Option 2 = 4
// Option 3 = 4
// Option 4 = 6