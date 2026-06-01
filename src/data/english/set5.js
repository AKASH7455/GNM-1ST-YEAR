const set5 = [
  {
    id: 1,
    question: "Choose the correct sentence.",
    options: [
      "The data are accurate.",
      "The data is accurate.",
      "The data has accurate.",
      "The data be accurate."
    ],
    answer: "The data are accurate.",
    explanation: "Formal English me 'data' ko plural maana jata hai, isliye 'are' use hota hai.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "'The nurse handled the situation tactfully.' Yahan 'tactfully' kya hai?",
    options: ["Noun", "Adverb", "Pronoun", "Adjective"],
    answer: "Adverb",
    explanation: "'Tactfully' verb 'handled' ko modify karta hai aur action ka manner batata hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Indirect speech banao: The doctor said, 'The patient will recover soon.'",
    options: [
      "The doctor said that the patient recovers soon.",
      "The doctor said that the patient would recover soon.",
      "The doctor said that the patient recovered soon.",
      "The doctor said that the patient has recovered soon."
    ],
    answer: "The doctor said that the patient would recover soon.",
    explanation: "Indirect speech me 'will' ka backshift 'would' hota hai.",
    topic: "Direct and Indirect Speech",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "'A person who compiles dictionaries' ko kya kehte hain?",
    options: [
      "Biographer",
      "Editor",
      "Linguist",
      "Lexicographer"
    ],
    answer: "Lexicographer",
    explanation: "Dictionary banane ya compile karne wale vyakti ko Lexicographer kehte hain.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Passive voice chuno: 'They have completed the survey.'",
    options: [
      "The survey completed.",
      "The survey has completed.",
      "The survey has been completed.",
      "The survey was completed."
    ],
    answer: "The survey has been completed.",
    explanation: "Present Perfect Passive ka structure 'has/have been + V3' hota hai.",
    topic: "Voice",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "'Neither the patient nor the attendants ___ aware of the change.'",
    options: ["was", "were", "is", "has"],
    answer: "were",
    explanation: "Nearest subject 'attendants' plural hai, isliye 'were' use hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "'To spill the beans' idiom ka meaning kya hai?",
    options: [
      "Secret reveal kar dena",
      "Food gira dena",
      "Jhoot bolna",
      "Kaam kharab karna"
    ],
    answer: "Secret reveal kar dena",
    explanation: "Ye idiom kisi secret ya confidential information ko bata dene ke liye use hota hai.",
    topic: "Idioms",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Correct article choose karo: 'He is ___ honest employee.'",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    explanation: "'Honest' ka pronunciation vowel sound se start hota hai, isliye 'an' use hota hai.",
    topic: "Articles",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "'The recommendation made by the committee was accepted.' Relative clause kaun si hai?",
    options: [
      "was accepted",
      "made by the committee",
      "The recommendation",
      "accepted"
    ],
    answer: "made by the committee",
    explanation: "Ye phrase recommendation ke baare me additional information de rahi hai.",
    topic: "Clauses",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "'The furniture in the ward ___ new.'",
    options: ["are", "were", "is", "have"],
    answer: "is",
    explanation: "'Furniture' uncountable singular noun maana jata hai. Isliye 'is' use hota hai.",
    topic: "Subject Verb Agreement",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "'Obsolete' ka opposite word kaun sa hai?",
    options: [
      "Modern",
      "Ancient",
      "Outdated",
      "Unused"
    ],
    answer: "Modern",
    explanation: "Obsolete ka matlab purana ya out of use hota hai. Uska opposite modern hai.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Sentence complete karo: 'Scarcely had the meeting begun ___ the power failed.'",
    options: ["than", "when", "and", "but"],
    answer: "when",
    explanation: "'Scarcely...when' ek fixed grammatical structure hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "'The doctor suggested that the patient ___ smoking immediately.'",
    options: ["stops", "stopped", "stop", "stopping"],
    answer: "stop",
    explanation: "Suggest ke baad subjunctive mood me base verb use hota hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "'The patient was discharged despite severe weather conditions.' Yahan 'despite' kya hai?",
    options: ["Conjunction", "Preposition", "Adverb", "Pronoun"],
    answer: "Preposition",
    explanation: "'Despite' ke baad noun phrase aata hai. Isliye ye preposition hai.",
    topic: "Prepositions",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "'The quality of the medicines ___ satisfactory.'",
    options: ["are", "were", "is", "have"],
    answer: "is",
    explanation: "Main subject 'quality' singular hai, isliye singular verb use hogi.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "'To weather the storm' idiom ka meaning kya hai?",
    options: [
      "Mausam dekhna",
      "Mushkil paristhiti ko safalta se jhelna",
      "Barish me kaam karna",
      "Travel karna"
    ],
    answer: "Mushkil paristhiti ko safalta se jhelna",
    explanation: "Ye idiom difficult situation ko successfully face karne ke liye use hota hai.",
    topic: "Idioms",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "'The nurse has been monitoring the patient since morning.' Ye kaunsa tense hai?",
    options: [
      "Present Perfect",
      "Present Perfect Continuous",
      "Past Perfect Continuous",
      "Present Continuous"
    ],
    answer: "Present Perfect Continuous",
    explanation: "'Has been monitoring' aur duration present perfect continuous ko indicate karte hain.",
    topic: "Tenses",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "'The accused was acquitted by the court.' Yahan 'acquitted' ka meaning kya hai?",
    options: [
      "Punished",
      "Promoted",
      "Declared not guilty",
      "Arrested"
    ],
    answer: "Declared not guilty",
    explanation: "Acquitted ka matlab court dwara dosh mukt ghoshit karna hota hai.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Error identify karo: 'One of the reports were missing from the file.'",
    options: [
      "One",
      "reports",
      "were",
      "file"
    ],
    answer: "were",
    explanation: "'One of' singular sense deta hai, isliye 'were' ki jagah 'was' hona chahiye.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "'The results were remarkably consistent.' Yahan 'remarkably' kya express karta hai?",
    options: [
      "Time",
      "Frequency",
      "Degree",
      "Place"
    ],
    answer: "Degree",
    explanation: "'Remarkably' adjective 'consistent' ki intensity ya degree ko modify kar raha hai.",
    topic: "Adverbs",
    difficulty: "hard"
  }
];

export default set5;
