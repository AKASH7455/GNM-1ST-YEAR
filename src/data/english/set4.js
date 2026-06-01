const set4 = [
  {
    id: 1,
    question: "Choose the correct sentence.",
    options: [
      "Each of the nurses have submitted reports.",
      "Each of the nurses has submitted reports.",
      "Each of the nurses were submitting reports.",
      "Each of the nurses are submitting reports."
    ],
    answer: "Each of the nurses has submitted reports.",
    explanation: "‘Each’ singular subject hota hai, isliye singular verb 'has' use hoti hai. Baaki options me verb agreement galat hai.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "'The patient's condition deteriorated rapidly.' Yahan 'rapidly' kya hai?",
    options: ["Adjective", "Adverb", "Noun", "Pronoun"],
    answer: "Adverb",
    explanation: "'Rapidly' verb 'deteriorated' ko modify kar raha hai. Isliye ye adverb hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Passive voice chuno: 'The nurse recorded the vital signs.'",
    options: [
      "The vital signs recorded the nurse.",
      "The vital signs were recorded by the nurse.",
      "The nurse was recording vital signs.",
      "The vital signs are recording."
    ],
    answer: "The vital signs were recorded by the nurse.",
    explanation: "Passive voice me object subject ban jata hai aur 'were recorded' structure use hota hai.",
    topic: "Voice",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "'An unprecedented event' me 'unprecedented' ka meaning kya hai?",
    options: [
      "Bahut common",
      "Pehle kabhi na hua ho",
      "Bahut dangerous",
      "Officially approved"
    ],
    answer: "Pehle kabhi na hua ho",
    explanation: "Unprecedented ka matlab hai aisa event jo pehle kabhi nahi hua.",
    topic: "Vocabulary",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Sentence complete karo: 'Had the treatment started earlier, the outcome ___ better.'",
    options: ["would have been", "will be", "has been", "is"],
    answer: "would have been",
    explanation: "Third conditional structure me 'would have been' use hota hai.",
    topic: "Conditionals",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "'The doctor, as well as the nurses, ___ attending the seminar.'",
    options: ["are", "is", "were", "have"],
    answer: "is",
    explanation: "'As well as' subject ko plural nahi banata. Main subject doctor singular hai.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Indirect speech banao: He said, 'I have completed my duty.'",
    options: [
      "He said that he completed his duty.",
      "He said that he had completed his duty.",
      "He said that he has completed his duty.",
      "He said that I had completed my duty."
    ],
    answer: "He said that he had completed his duty.",
    explanation: "Present Perfect indirect speech me Past Perfect ban jata hai.",
    topic: "Direct and Indirect Speech",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "'To call it a day' idiom ka meaning kya hai?",
    options: [
      "Din ki planning karna",
      "Holiday lena",
      "Kaam band kar dena",
      "Emergency declare karna"
    ],
    answer: "Kaam band kar dena",
    explanation: "Ye idiom kisi kaam ko us samay ke liye stop karne ke liye use hota hai.",
    topic: "Idioms",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Correct article choose karo: 'She is ___ heir to the property.'",
    options: ["an", "a", "the", "no article"],
    answer: "an",
    explanation: "'Heir' ka pronunciation vowel sound se start hota hai, isliye 'an' use hoga.",
    topic: "Articles",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "'The findings of the investigation ___ confidential.'",
    options: ["is", "was", "are", "has"],
    answer: "are",
    explanation: "'Findings' plural noun hai, isliye plural verb 'are' use hogi.",
    topic: "Subject Verb Agreement",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "'The committee reached its decision unanimously.' Yahan noun ka type kya hai?",
    options: [
      "Abstract Noun",
      "Collective Noun",
      "Proper Noun",
      "Material Noun"
    ],
    answer: "Collective Noun",
    explanation: "Committee ek group ko represent karta hai, isliye Collective Noun hai.",
    topic: "Nouns",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Sentence complete karo: 'No sooner had the patient recovered ___ he resumed work.'",
    options: ["when", "than", "and", "but"],
    answer: "than",
    explanation: "'No sooner...than' standard grammatical pair hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "'The report was compiled meticulously.' Yahan 'meticulously' kya express karta hai?",
    options: [
      "Place",
      "Time",
      "Manner",
      "Frequency"
    ],
    answer: "Manner",
    explanation: "Ye batata hai ki report kis tarah compile ki gayi thi.",
    topic: "Adverbs",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "'Scarcity' ka opposite word kaun sa hai?",
    options: [
      "Deficiency",
      "Abundance",
      "Need",
      "Shortage"
    ],
    answer: "Abundance",
    explanation: "Scarcity ka matlab kami hota hai aur abundance ka matlab bahut adhik matra.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Error identify karo: 'Neither the doctors nor the surgeon were available.'",
    options: [
      "Neither",
      "doctors",
      "surgeon",
      "were"
    ],
    answer: "were",
    explanation: "Nearest subject 'surgeon' singular hai. Isliye 'was' hona chahiye.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "'The patient was exhausted because he had been working continuously.' Ye kaunsa tense hai?",
    options: [
      "Past Continuous",
      "Past Perfect Continuous",
      "Present Perfect Continuous",
      "Future Continuous"
    ],
    answer: "Past Perfect Continuous",
    explanation: "'Had been working' Past Perfect Continuous tense ka structure hai.",
    topic: "Tenses",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "'The nurse requested that the visitor ___ outside.'",
    options: ["wait", "waits", "waited", "waiting"],
    answer: "wait",
    explanation: "Request ke baad subjunctive mood me base form verb use hota hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "'A person who cannot hear' ko kya kehte hain?",
    options: [
      "Blind",
      "Mute",
      "Deaf",
      "Lame"
    ],
    answer: "Deaf",
    explanation: "Sunne me asamarth vyakti ko Deaf kaha jata hai.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "'The patient recovered in spite of severe complications.' Yahan conjunction/preposition kaun sa hai?",
    options: [
      "patient",
      "recovered",
      "complications",
      "in spite of"
    ],
    answer: "in spite of",
    explanation: "'In spite of' ek prepositional phrase hai jo contrast dikhata hai.",
    topic: "Prepositions",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "'To be on cloud nine' idiom ka meaning kya hai?",
    options: [
      "Bahut udaas hona",
      "Bahut gusse me hona",
      "Bahut khush hona",
      "Bahut vyast hona"
    ],
    answer: "Bahut khush hona",
    explanation: "Ye idiom extreme happiness ko express karta hai.",
    topic: "Idioms",
    difficulty: "medium"
  }
];

export default set4;
