const set1 = [
  {
    id: 1,
    question: "Patient ne kaha, 'I ___ the medicine before breakfast.' Yahan sahi verb kaun sa hoga?",
    options: ["take", "takes", "took", "taking"],
    answer: "take",
    explanation: "Habit ya routine batane ke liye Simple Present tense use hota hai. Subject 'I' ke saath base verb 'take' aata hai.",
    topic: "Tenses",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Sentence complete karo: 'The nurse is responsible ___ patient safety.'",
    options: ["from", "for", "with", "at"],
    answer: "for",
    explanation: "'Responsible for' ek fixed expression hai. Iska matlab kisi cheez ki zimmedari lena hota hai.",
    topic: "Prepositions",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "'The patient was shifted to ICU.' Is sentence ka voice kya hai?",
    options: ["Active Voice", "Present Voice", "Passive Voice", "Future Voice"],
    answer: "Passive Voice",
    explanation: "Yahan action patient par ho raha hai aur doer mention nahi hai. Isliye ye Passive Voice hai.",
    topic: "Voice",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "'Careful' ka correct adverb form kaun sa hai?",
    options: ["Carefulness", "Carefully", "Carefuling", "More careful"],
    answer: "Carefully",
    explanation: "Adverb verb ko describe karta hai. Careful ka adverb form 'carefully' hota hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Sentence me error identify karo: 'Each of the students have completed the assignment.'",
    options: ["students", "assignment", "have", "completed"],
    answer: "have",
    explanation: "'Each' singular subject hota hai, isliye 'have' ki jagah 'has' use hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "'If the patient had informed earlier, we ___ better preparation.'",
    options: ["will make", "would have made", "make", "made"],
    answer: "would have made",
    explanation: "Ye Third Conditional sentence hai. Structure: If + had + V3, would have + V3.",
    topic: "Conditionals",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "'Optimistic' ka opposite word kaun sa hai?",
    options: ["Positive", "Hopeful", "Pessimistic", "Confident"],
    answer: "Pessimistic",
    explanation: "Optimistic ka matlab positive soch rakhna hai, jabki pessimistic negative outlook ko darshata hai.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Indirect speech banao: He said, 'I am tired.'",
    options: [
      "He said that he is tired.",
      "He said that I was tired.",
      "He said that he tired.",
      "He said that he was tired."
    ],
    answer: "He said that he was tired.",
    explanation: "Reporting verb past me hai, isliye 'am' backshift hokar 'was' banega.",
    topic: "Direct and Indirect Speech",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "'The report was neither accurate ___ complete.'",
    options: ["or", "nor", "and", "but"],
    answer: "nor",
    explanation: "'Neither' ke saath hamesha 'nor' use hota hai. Ye correlative conjunction hai.",
    topic: "Conjunctions",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "'She has been working in the ward for five years.' Ye kaunsa tense hai?",
    options: [
      "Present Perfect",
      "Past Continuous",
      "Present Perfect Continuous",
      "Future Perfect"
    ],
    answer: "Present Perfect Continuous",
    explanation: "'Has been working' aur duration 'for five years' Present Perfect Continuous ko indicate karte hain.",
    topic: "Tenses",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Sentence me correct article choose karo: 'She is ___ honest nurse.'",
    options: ["an", "a", "the", "no article"],
    answer: "an",
    explanation: "'Honest' ka pronunciation vowel sound se start hota hai, isliye 'an' use hota hai.",
    topic: "Articles",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "'The doctor advised the patient to quit smoking.' Yahan infinitive phrase kaun sa hai?",
    options: ["The doctor", "the patient", "quit smoking", "to quit smoking"],
    answer: "to quit smoking",
    explanation: "'To + verb' structure infinitive phrase hota hai. Yahan 'to quit smoking' infinitive hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "'Meticulous' word ka meaning kya hai?",
    options: ["Careless", "Very attentive to details", "Aggressive", "Lazy"],
    answer: "Very attentive to details",
    explanation: "Meticulous vyakti har detail par dhyan deta hai aur accuracy maintain karta hai.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Sentence complete karo: 'No sooner had the nurse arrived ___ the emergency call came.'",
    options: ["when", "than", "then", "and"],
    answer: "than",
    explanation: "'No sooner...than' ek standard grammatical structure hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "'The equipment, along with its accessories, ___ stored properly.'",
    options: ["are", "were", "is", "have"],
    answer: "is",
    explanation: "Main subject 'equipment' singular hai. 'Along with' subject ko change nahi karta.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "'A blessing in disguise' idiom ka meaning kya hai?",
    options: [
      "Unexpected good outcome",
      "Hidden danger",
      "False promise",
      "Major failure"
    ],
    answer: "Unexpected good outcome",
    explanation: "Shuru me buri lagne wali situation jo baad me faydemand nikle use blessing in disguise kehte hain.",
    topic: "Idioms",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Error identify karo: 'Neither the nurses nor the doctor are available.'",
    options: ["Neither", "nurses", "doctor", "are"],
    answer: "are",
    explanation: "Neither...nor me verb nearest subject ke according hota hai. 'Doctor' singular hai, isliye 'is' aayega.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "'The patient recovered quickly because treatment started on time.' Is sentence me conjunction kaun sa hai?",
    options: ["patient", "quickly", "because", "treatment"],
    answer: "because",
    explanation: "'Because' do clauses ko connect karta hai aur reason batata hai.",
    topic: "Conjunctions",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "'He speaks English fluently.' Yahan 'fluently' kya hai?",
    options: ["Noun", "Adjective", "Adverb", "Pronoun"],
    answer: "Adverb",
    explanation: "'Fluently' verb 'speaks' ko modify kar raha hai. Isliye ye adverb hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Sentence ko passive me badlo: 'The nurse administered the injection.'",
    options: [
      "The injection administers the nurse.",
      "The injection was administered by the nurse.",
      "The nurse was administered by the injection.",
      "The injection has administered."
    ],
    answer: "The injection was administered by the nurse.",
    explanation: "Passive Voice me object subject ban jata hai aur structure 'was/were + V3' use hota hai.",
    topic: "Voice",
    difficulty: "hard"
  }
];

export default set1;