const set3 = [
  {
    id: 1,
    question: "Sentence complete karo: 'By the time the ambulance arrived, the doctor ___ the initial assessment.'",
    options: ["had completed", "completes", "will complete", "has completed"],
    answer: "had completed",
    explanation: "Do past actions me jo action pehle hua ho uske liye Past Perfect use hota hai. Yahan assessment ambulance ke aane se pehle complete hua tha.",
    topic: "Tenses",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "'The proposal was rejected unanimously.' Yahan 'unanimously' kya hai?",
    options: ["Noun", "Adverb", "Adjective", "Pronoun"],
    answer: "Adverb",
    explanation: "'Unanimously' verb 'rejected' ko modify kar raha hai aur action ka manner bata raha hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "'The patient demanded that the doctor ___ immediately.'",
    options: ["comes", "came", "come", "coming"],
    answer: "come",
    explanation: "Demand, suggest, recommend jaise verbs ke baad subjunctive mood me base verb use hota hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "'A person who studies human society' ko kya kehte hain?",
    options: ["Psychologist", "Economist", "Sociologist", "Anthropologist"],
    answer: "Sociologist",
    explanation: "Human society aur social behavior ka study karne wale ko Sociologist kaha jata hai.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Error identify karo: 'Every nurse and every doctor are required to attend.'",
    options: ["Every nurse", "every doctor", "are", "attend"],
    answer: "are",
    explanation: "Jab har noun se pehle 'every' aata hai to subject singular mana jata hai. Isliye 'are' ki jagah 'is' hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Indirect speech banao: The nurse said, 'We have completed the procedure.'",
    options: [
      "The nurse said that they had completed the procedure.",
      "The nurse said that we completed the procedure.",
      "The nurse said that they complete the procedure.",
      "The nurse said that they have completed the procedure."
    ],
    answer: "The nurse said that they had completed the procedure.",
    explanation: "Present Perfect backshift hokar Past Perfect ban jata hai indirect speech me.",
    topic: "Direct and Indirect Speech",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "'The instructions were followed meticulously.' Yahan 'meticulously' ka meaning kya hai?",
    options: [
      "Carelessly",
      "Very carefully",
      "Quickly",
      "Partially"
    ],
    answer: "Very carefully",
    explanation: "Meticulously ka matlab bahut dhyan aur accuracy ke saath kaam karna hota hai.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Sentence complete karo: 'Hardly had the operation ended ___ the patient was shifted.'",
    options: ["than", "when", "but", "and"],
    answer: "when",
    explanation: "'Hardly...when' ek standard grammatical structure hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "'The equipment in the ICU ___ functioning properly.'",
    options: ["were", "have", "is", "are"],
    answer: "is",
    explanation: "Main subject 'equipment' singular aur uncountable noun hai. Isliye singular verb use hogi.",
    topic: "Subject Verb Agreement",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "'The manager, along with the supervisors, ___ attending the meeting.'",
    options: ["are", "were", "has", "is"],
    answer: "is",
    explanation: "'Along with' subject ko plural nahi banata. Main subject 'manager' singular hai.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "'To burn the midnight oil' idiom ka meaning kya hai?",
    options: [
      "Raat bhar mehnat ya padhai karna",
      "Bijli bachana",
      "Hospital duty karna",
      "Aag bujhana"
    ],
    answer: "Raat bhar mehnat ya padhai karna",
    explanation: "Ye idiom late night tak padhne ya kaam karne ke liye use hota hai.",
    topic: "Idioms",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Passive voice banao: 'Someone has stolen the medical records.'",
    options: [
      "The medical records have been stolen.",
      "The medical records stole.",
      "Someone was stolen.",
      "The records are stealing."
    ],
    answer: "The medical records have been stolen.",
    explanation: "Present Perfect Passive ka structure 'have/has been + V3' hota hai.",
    topic: "Voice",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "'He behaves as though he ___ the head of the department.'",
    options: ["is", "was", "were", "be"],
    answer: "were",
    explanation: "Unreal situation dikhane ke liye 'as though/as if' ke saath subjunctive form 'were' use hota hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "'Benevolent' ka opposite word kaun sa hai?",
    options: ["Kind", "Generous", "Helpful", "Malevolent"],
    answer: "Malevolent",
    explanation: "Benevolent ka matlab dayalu hota hai jabki malevolent ka matlab dusron ko nuksan pahunchane wala.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "'The nurse who received the award works in ICU.' Relative pronoun kaun sa hai?",
    options: ["nurse", "received", "who", "award"],
    answer: "who",
    explanation: "'Who' relative pronoun hai jo noun 'nurse' ke baare me extra information deta hai.",
    topic: "Clauses",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Sentence complete karo: 'Neither the consultants nor the surgeon ___ available yesterday.'",
    options: ["were", "have", "was", "are"],
    answer: "was",
    explanation: "Neither...nor me verb nearest subject ke according hota hai. 'Surgeon' singular hai.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "'The findings were inconclusive.' Yahan 'inconclusive' ka meaning kya hai?",
    options: [
      "Final and clear",
      "Not leading to a definite conclusion",
      "Completely wrong",
      "Scientifically proven"
    ],
    answer: "Not leading to a definite conclusion",
    explanation: "Inconclusive ka matlab hai ki result se koi pakka nishkarsh nahi nikla.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Article choose karo: 'She is ___ university professor.'",
    options: ["a", "an", "the", "no article"],
    answer: "a",
    explanation: "'University' ka pronunciation 'yu' sound se start hota hai, isliye 'a' use hota hai.",
    topic: "Articles",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "'The doctor spoke so softly that the patient could barely hear him.' Yahan 'barely' ka meaning kya hai?",
    options: [
      "Completely",
      "Easily",
      "Only just",
      "Frequently"
    ],
    answer: "Only just",
    explanation: "'Barely' ka matlab hota hai mushkil se ya sirf thoda sa.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "'Not only the patient but also the attendants ___ anxious.'",
    options: ["was", "is", "has", "were"],
    answer: "were",
    explanation: "'Attendants' nearest subject hai aur plural hai. Isliye verb 'were' use hogi.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  }
];

export default set3;
