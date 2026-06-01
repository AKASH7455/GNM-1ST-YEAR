const set2 = [
  {
    id: 1,
    question: "Ek patient hospital admission ke baad baar-baar bell bajata hai aur nurse se har chhoti baat me help maangta hai. Is behavior ka sabse sambhavit psychological explanation kya hai?",
    options: [
      "Dependency need",
      "Delusion",
      "Insight learning",
      "Intelligence deficit"
    ],
    answer: "Dependency need",
    explanation:
      "Hospitalization ke dauran patient insecure feel kar sakta hai aur support ki zarurat badh sakti hai. Dependency need ke karan patient baar-baar reassurance maangta hai. Nurse ko patience ke saath independence encourage karni chahiye. Ye behavior psychosis se alag hai.",
    topic: "Motivation and Needs",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Ek patient apni serious illness ke bawajood kehta hai ki 'Mere saath kuch galat nahi ho sakta'. Ye kis defense mechanism ko darshata hai?",
    options: [
      "Projection",
      "Denial",
      "Displacement",
      "Sublimation"
    ],
    answer: "Denial",
    explanation:
      "Denial me vyakti reality ko accept karne se mana karta hai. Serious diagnosis ke initial stage me ye common response hai. Isse temporary emotional protection mil sakti hai. Lekin prolonged denial treatment ko affect kar sakta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Nurse patient ko diabetic diet ke baare me sikhati hai aur patient turant us knowledge ko meal selection me apply karta hai. Ye learning ka kaunsa domain hai?",
    options: [
      "Affective domain",
      "Psychomotor domain",
      "Cognitive domain",
      "Behavioral inhibition"
    ],
    answer: "Cognitive domain",
    explanation:
      "Cognitive domain knowledge, understanding aur problem solving se related hota hai. Patient ne information ko samjha aur practical decision me use kiya. Ye sirf emotional ya motor skill response nahi hai. Nursing education me cognitive learning bahut important hai.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Ek patient treatment ke dauran nurse ko apni maa ki tarah treat karne lagta hai. Is phenomenon ko kya kaha jata hai?",
    options: [
      "Suppression",
      "Perception",
      "Transference",
      "Repression"
    ],
    answer: "Transference",
    explanation:
      "Transference me patient apni purani feelings ya relationships ko healthcare provider par project karta hai. Therapeutic relationship me is concept ko samajhna zaroori hai. Nurse ko professional boundaries maintain karni chahiye.",
    topic: "Therapeutic Relationship",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Ek nursing student exam me fail hone ke baad aur mehnat karke next attempt me top karta hai. Ye kis defense mechanism ka healthy example hai?",
    options: [
      "Compensation",
      "Regression",
      "Denial",
      "Projection"
    ],
    answer: "Compensation",
    explanation:
      "Compensation me individual weakness ya failure ko kisi positive effort se balance karta hai. Student ne failure ko motivation bana kar performance improve ki. Ye adaptive coping ka example hai. Nursing students me ye commonly dekha jata hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Patient discharge instructions ko dhyan se sun raha hai, lekin TV chalne ke karan baar-baar distract ho raha hai. Kaunsa psychological factor sabse adhik affect hua hai?",
    options: [
      "Memory",
      "Perception",
      "Attention",
      "Personality"
    ],
    answer: "Attention",
    explanation:
      "Attention information par focus karne ki capacity hai. Environmental distractions attention ko reduce kar sakte hain. Effective patient teaching ke liye quiet environment zaroori hota hai. Attention ke bina learning bhi poor ho sakti hai.",
    topic: "Attention",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Ek adolescent apni identity ko lekar confused hai aur career choices ko lekar struggle kar raha hai. Erikson ke anusaar ye kis developmental conflict se related hai?",
    options: [
      "Trust vs Mistrust",
      "Identity vs Role Confusion",
      "Generativity vs Stagnation",
      "Integrity vs Despair"
    ],
    answer: "Identity vs Role Confusion",
    explanation:
      "Adolescence me identity formation major developmental task hota hai. Is stage me role confusion common hota hai. Successful resolution se strong self-identity develop hoti hai. Erikson theory me ye important concept hai.",
    topic: "Developmental Psychology",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Ek patient kehta hai ki usse awaazein sunai deti hain jabki room me koi nahi hai. Ye kis condition ka example hai?",
    options: [
      "Illusion",
      "Delusion",
      "Insight",
      "Hallucination"
    ],
    answer: "Hallucination",
    explanation:
      "Hallucination bina kisi external stimulus ke sensory perception hoti hai. Auditory hallucinations psychiatric disorders me common hain. Illusion me real stimulus hota hai, jabki hallucination me nahi. Nursing assessment me iska documentation zaroori hai.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Patient apne treatment goals khud set karta hai aur unhe achieve karne ke liye actively participate karta hai. Iska sambandh kis concept se hai?",
    options: [
      "Self-determination",
      "Repression",
      "Extinction",
      "Transference"
    ],
    answer: "Self-determination",
    explanation:
      "Self-determination autonomy aur personal control ko reflect karta hai. Jab patient care decisions me participate karta hai to compliance improve hoti hai. Modern nursing patient-centered care par focus karti hai.",
    topic: "Motivation",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Ek patient smoking continue karta hai aur kehta hai, 'Mere dadaji bhi smoke karte the aur 90 saal jiye'. Ye kis defense mechanism ka udaharan hai?",
    options: [
      "Projection",
      "Regression",
      "Reaction formation",
      "Rationalization"
    ],
    answer: "Rationalization",
    explanation:
      "Rationalization me individual apne behavior ke liye socially acceptable excuses banata hai. Patient smoking ke risk ko justify kar raha hai. Isse reality temporarily less threatening lagti hai. Health education me is barrier ko identify karna zaroori hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nurse patient ko injection lagane ka demonstration deti hai aur phir patient practice karta hai. Ye learning ka kaunsa domain primarily involve karta hai?",
    options: [
      "Affective",
      "Psychomotor",
      "Cognitive",
      "Perceptual"
    ],
    answer: "Psychomotor",
    explanation:
      "Psychomotor domain physical skills aur coordinated movements se related hai. Demonstration aur return demonstration nursing education ki common techniques hain. Skill mastery practice se develop hoti hai.",
    topic: "Learning Domains",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Ek patient stressful situation me bahut zyada polite aur friendly behave karta hai, jabki andar se gussa feel kar raha hota hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Compensation",
      "Suppression",
      "Reaction formation",
      "Displacement"
    ],
    answer: "Reaction formation",
    explanation:
      "Reaction formation me vyakti apni actual feelings ke opposite behavior display karta hai. Yahan patient gusse ki jagah excessive friendliness dikha raha hai. Ye anxiety ko manage karne ka unconscious tareeka hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Ek patient har baar medicine lene ke baad recovery feel karta hai aur treatment par bharosa badh jata hai. Isse motivation kis factor se influence ho rahi hai?",
    options: [
      "Past success experience",
      "Intelligence",
      "Defense mechanism",
      "Perception error"
    ],
    answer: "Past success experience",
    explanation:
      "Positive outcomes future motivation ko strengthen karte hain. Jab patient improvement dekhta hai to treatment adherence badh jati hai. Previous success confidence aur cooperation dono improve karti hai.",
    topic: "Motivation",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient IV stand ki shadow ko raat me kisi insaan ki tarah samajh leta hai. Ye kis psychological phenomenon ka example hai?",
    options: [
      "Hallucination",
      "Delusion",
      "Insight",
      "Illusion"
    ],
    answer: "Illusion",
    explanation:
      "Illusion me real stimulus ki galat interpretation hoti hai. Shadow actual stimulus tha lekin patient ne uska meaning galat samjha. Hallucination me koi real stimulus hota hi nahi hai.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Ek patient ICU admission ke baad bachchon ki tarah rokar attention maangta hai. Ye kis defense mechanism ko indicate karta hai?",
    options: [
      "Projection",
      "Denial",
      "Regression",
      "Sublimation"
    ],
    answer: "Regression",
    explanation:
      "Regression me vyakti stress ke samay earlier developmental behaviors dikhata hai. ICU jaise stressful environment me ye dekha ja sakta hai. Nurse ko supportive approach rakhni chahiye.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Ek patient apni frustration ko exercise aur sports me convert karta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Displacement",
      "Sublimation",
      "Denial",
      "Projection"
    ],
    answer: "Sublimation",
    explanation:
      "Sublimation unhealthy impulses ko socially acceptable activities me transform karta hai. Ye mature defense mechanism mana jata hai. Stress management me iska positive role hota hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Maslow hierarchy ke anusaar severe dehydration wale patient me sabse pehle kis need par focus karna chahiye?",
    options: [
      "Physiological need",
      "Esteem need",
      "Love and belonging need",
      "Self-actualization need"
    ],
    answer: "Physiological need",
    explanation:
      "Maslow hierarchy me physiological needs sabse basic hoti hain. Dehydration life-threatening ho sakti hai isliye pehle fluid balance correct karna zaroori hai. Higher level needs baad me address ki jati hain.",
    topic: "Maslow Hierarchy",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Patient ko apni disease ke baare me complete knowledge hai aur wo apni condition ko realistically samajhta hai. Isse kya kaha jata hai?",
    options: [
      "Delusion",
      "Insight",
      "Hallucination",
      "Projection"
    ],
    answer: "Insight",
    explanation:
      "Insight apni condition aur reality ko accurately samajhne ki ability hai. Good insight treatment adherence improve karti hai. Psychiatric assessment me insight evaluate ki jati hai.",
    topic: "Mental Status",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Patient ko ek hi room me alag-alag smells ke beech medicine ki smell identify karni hai. Isme sabse adhik kis process ka role hai?",
    options: [
      "Memory",
      "Motivation",
      "Perception",
      "Conflict"
    ],
    answer: "Perception",
    explanation:
      "Perception sensory information ko organize aur interpret karti hai. Smell ko identify karna sirf sensation nahi balki perception ka bhi kaam hai. Accurate perception environment ko samajhne me help karti hai.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Ek nursing student ko promotion milega lekin uske saath workload bhi badhega. Ye kis type ka conflict hai?",
    options: [
      "Approach-Approach",
      "Avoidance-Avoidance",
      "Double Approach-Avoidance",
      "Approach-Avoidance"
    ],
    answer: "Approach-Avoidance",
    explanation:
      "Approach-avoidance conflict me ek hi goal ke positive aur negative dono aspects hote hain. Promotion desirable hai lekin workload undesirable hai. Isliye decision making difficult ho jati hai.",
    topic: "Conflict",
    difficulty: "hard"
  }
];

export default set2;

// Answer Key:
// [1,2,3,3,1,3,2,4,1,4,2,3,1,4,3,2,1,2,3,4]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5