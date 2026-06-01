const set3 = [
  {
    id: 1,
    question: "Ek patient surgery ke baad nurse se kehta hai, 'Mujhe lagta hai main kabhi theek nahi ho paunga.' Nurse ka sabse therapeutic response kya hoga?",
    options: [
      "Aap negative sochna band kariye",
      "Aapko aisa kyu lag raha hai, thoda aur batayiye",
      "Sab patients theek ho jate hain",
      "Is baare me mat sochiye"
    ],
    answer: "Aapko aisa kyu lag raha hai, thoda aur batayiye",
    explanation:
      "Therapeutic communication me patient ko feelings express karne ka mauka diya jata hai. Open-ended question patient ke emotions explore karne me help karta hai. False reassurance dena ya feelings ko ignore karna appropriate nahi hai. Nursing care me empathy important hai.",
    topic: "Therapeutic Communication",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Ek patient apne smoking habit ko justify karte hue kehta hai ki 'Stress kam karne ke liye ye zaroori hai'. Ye kis defense mechanism ka example hai?",
    options: [
      "Projection",
      "Rationalization",
      "Regression",
      "Denial"
    ],
    answer: "Rationalization",
    explanation:
      "Rationalization me vyakti apne behavior ke liye logical lagne wale excuses deta hai. Patient smoking ke harmful effects ko ignore kar raha hai. Is defense mechanism ka uddeshya anxiety ko kam karna hota hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Patient ko discharge ke baad medication schedule yaad rakhna hai. Nurse information ko chart form me organize karti hai. Isse kis memory process me madad milegi?",
    options: [
      "Sensation",
      "Perception",
      "Encoding",
      "Projection"
    ],
    answer: "Encoding",
    explanation:
      "Encoding memory formation ka pehla important step hai. Organized information ko brain easily process aur store karta hai. Effective patient education memory retention improve karti hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Ek patient doctor ke saamne shaant rehta hai lekin ghar jaakar family par gussa nikalta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Sublimation",
      "Regression",
      "Denial",
      "Displacement"
    ],
    answer: "Displacement",
    explanation:
      "Displacement me emotions original source se hatkar safer target par express kiye jate hain. Patient doctor par gussa nahi dikha pa raha aur family par express kar raha hai. Ye common defense mechanism hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Maslow hierarchy ke anusaar oxygen deficiency wale patient me sabse pehle kis need ko address karna chahiye?",
    options: [
      "Physiological need",
      "Esteem need",
      "Love and belonging need",
      "Self-actualization need"
    ],
    answer: "Physiological need",
    explanation:
      "Oxygen survival ke liye essential hai. Maslow ke according physiological needs sabse pehle satisfy honi chahiye. Higher level needs tabhi important hoti hain jab basic needs meet ho jayein.",
    topic: "Maslow Hierarchy",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Ek child apne teacher ko observe karke hand washing technique seekhta hai. Ye kis learning theory ka example hai?",
    options: [
      "Classical conditioning",
      "Observational learning",
      "Insight learning",
      "Trial and error"
    ],
    answer: "Observational learning",
    explanation:
      "Bandura ke social learning theory ke anusaar log dusron ko observe karke behavior seekhte hain. Modeling health education me bhi bahut useful hai. Child ne direct observation se skill seekhi.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Adolescent patient apni appearance aur peer acceptance ko lekar bahut concerned hai. Erikson ke kis developmental stage se ye related hai?",
    options: [
      "Autonomy vs Shame",
      "Identity vs Role Confusion",
      "Integrity vs Despair",
      "Trust vs Mistrust"
    ],
    answer: "Identity vs Role Confusion",
    explanation:
      "Adolescence me self-identity develop hoti hai. Peer group aur self-image ka influence bahut zyada hota hai. Successful resolution se strong identity develop hoti hai.",
    topic: "Developmental Psychology",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Patient ko lagta hai ki ward ke sab log uske khilaf conspiracy kar rahe hain jabki koi evidence nahi hai. Ye kya hai?",
    options: [
      "Hallucination",
      "Illusion",
      "Insight",
      "Delusion"
    ],
    answer: "Delusion",
    explanation:
      "Delusion ek false fixed belief hota hai jo evidence ke bawajood nahi badalta. Yahan patient irrational belief maintain kar raha hai. Ye psychotic disorders me dekha ja sakta hai.",
    topic: "Thought Disorders",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Ek patient recovery ke baad bhi future complications ko lekar realistic planning karta hai. Isse personality ki kaunsi quality reflect hoti hai?",
    options: [
      "Adjustment",
      "Hallucination",
      "Conflict",
      "Projection"
    ],
    answer: "Adjustment",
    explanation:
      "Adjustment ka matlab environment aur challenges ke saath effectively cope karna hai. Realistic planning healthy adaptation ko indicate karti hai. Nursing assessment me adjustment patterns important hote hain.",
    topic: "Adjustment",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Ek patient cancer diagnosis ko accept nahi karta aur reports ko galat batata hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Compensation",
      "Projection",
      "Regression",
      "Denial"
    ],
    answer: "Denial",
    explanation:
      "Denial me reality ko reject kiya jata hai. Serious illness ke early stages me ye common reaction hai. Ye temporary protection de sakta hai lekin prolonged denial treatment delay kar sakta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Nurse patient education ke dauran repeated practice karwati hai jisse skill improve hoti hai. Ye kis principle ko support karta hai?",
    options: [
      "Insight",
      "Reinforcement",
      "Hallucination",
      "Suppression"
    ],
    answer: "Reinforcement",
    explanation:
      "Repeated practice aur feedback learning ko strengthen karte hain. Reinforcement desired behavior ko maintain karta hai. Nursing skills training me iska bahut role hota hai.",
    topic: "Learning",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Ek patient stress ke samay bachchon ki tarah baat karne lagta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Compensation",
      "Projection",
      "Regression",
      "Sublimation"
    ],
    answer: "Regression",
    explanation:
      "Regression me vyakti stress ke dauran earlier developmental behaviors dikhata hai. Childlike speech anxiety se temporary relief de sakti hai. Ye unconscious defense mechanism hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Patient ko apni treatment decisions me involve kiya jata hai. Isse sabse adhik kya improve hota hai?",
    options: [
      "Self-esteem",
      "Illusion",
      "Hallucination",
      "Repression"
    ],
    answer: "Self-esteem",
    explanation:
      "Decision making me involvement patient ko value aur respect ka feeling deta hai. Isse confidence aur cooperation dono improve hote hain. Patient-centered care ka ye important principle hai.",
    topic: "Self Concept",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Patient ko raat me curtain ki shadow kisi insaan ki tarah dikhti hai. Ye kis phenomenon ka example hai?",
    options: [
      "Hallucination",
      "Projection",
      "Insight",
      "Illusion"
    ],
    answer: "Illusion",
    explanation:
      "Illusion me real stimulus ki incorrect interpretation hoti hai. Curtain aur shadow real stimulus the. Hallucination se difference ye hai ki hallucination me koi external stimulus nahi hota.",
    topic: "Perception",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Ek student sports me excellent performance karke academic weakness ko compensate karta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Denial",
      "Regression",
      "Compensation",
      "Projection"
    ],
    answer: "Compensation",
    explanation:
      "Compensation me weakness ko kisi dusri strength se balance kiya jata hai. Ye generally healthy adjustment mechanism mana jata hai. Self-confidence maintain karne me madad karta hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Patient apni aggressive feelings ko painting aur music me express karta hai. Ye kis defense mechanism ka example hai?",
    options: [
      "Denial",
      "Sublimation",
      "Projection",
      "Regression"
    ],
    answer: "Sublimation",
    explanation:
      "Sublimation negative impulses ko socially acceptable activities me convert karta hai. Ye mature defense mechanism hai. Stress management ke liye healthy option mana jata hai.",
    topic: "Defense Mechanisms",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Ek patient treatment ke benefits aur risks dono ko samajhkar informed decision leta hai. Isme sabse adhik kis process ka role hai?",
    options: [
      "Cognition",
      "Projection",
      "Hallucination",
      "Conflict"
    ],
    answer: "Cognition",
    explanation:
      "Cognition me thinking, reasoning aur decision making shamil hote hain. Informed decisions ke liye information ko analyze karna zaroori hota hai. Patient education cognition ko support karti hai.",
    topic: "Cognitive Processes",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Patient ko apni illness aur treatment ki reality ka accurate understanding hai. Isse kya kaha jata hai?",
    options: [
      "Perception",
      "Insight",
      "Delusion",
      "Illusion"
    ],
    answer: "Insight",
    explanation:
      "Insight apni condition ko realistically samajhne ki ability hai. Good insight treatment adherence aur recovery outcomes ko improve karti hai. Mental status examination me iska assessment hota hai.",
    topic: "Mental Status Examination",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Patient ko kai instructions me se sirf important points yaad rehte hain. Ye memory ke kis process se related hai?",
    options: [
      "Motivation",
      "Perception",
      "Retention",
      "Conflict"
    ],
    answer: "Retention",
    explanation:
      "Retention stored information ko maintain karne ki ability hai. Agar patient important points yaad rakh pa raha hai to retention effective hai. Nursing teaching ka goal retention improve karna hota hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Ek nurse ko promotion chahiye lekin naye department me shift nahi hona chahti. Ye kis type ka conflict hai?",
    options: [
      "Approach-Approach",
      "Avoidance-Avoidance",
      "Double Approach-Avoidance",
      "Approach-Avoidance"
    ],
    answer: "Approach-Avoidance",
    explanation:
      "Approach-avoidance conflict me ek hi goal ke positive aur negative aspects hote hain. Promotion attractive hai lekin transfer undesirable hai. Is wajah se decision making difficult ho jati hai.",
    topic: "Conflict",
    difficulty: "hard"
  }
];

export default set3;

// Answer Key:
// [2,2,3,4,1,2,2,4,1,4,2,3,1,4,3,2,1,2,3,4]

// Option 1 = 5
// Option 2 = 6
// Option 3 = 4
// Option 4 = 5