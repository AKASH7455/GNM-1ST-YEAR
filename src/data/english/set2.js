const set2 = [
  {
    id: 1,
    question: "Sentence complete karo: 'Had the nurse acted earlier, the complication ___ avoided.'",
    options: ["can be", "could have been", "is", "will be"],
    answer: "could have been",
    explanation: "Ye third conditional structure hai jo past unreal situation ko dikhata hai. 'Could have been avoided' grammatical aur contextual dono tarah se sahi hai.",
    topic: "Conditionals",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "'The committee has submitted its report.' Yahan 'committee' kis type ka noun hai?",
    options: ["Proper Noun", "Collective Noun", "Abstract Noun", "Material Noun"],
    answer: "Collective Noun",
    explanation: "Committee logon ke group ko represent karta hai. Isliye ise Collective Noun kaha jata hai.",
    topic: "Nouns",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Error identify karo: 'One of the patient have developed an infection.'",
    options: ["One", "patient", "have", "infection"],
    answer: "have",
    explanation: "'One of' ke baad singular sense hota hai. Isliye 'have' ki jagah 'has' use hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "'Despite severe pain, the patient remained calm.' Yahan 'despite' kya hai?",
    options: ["Conjunction", "Adverb", "Preposition", "Pronoun"],
    answer: "Preposition",
    explanation: "'Despite' ke baad noun phrase aata hai. Isliye ye preposition hai.",
    topic: "Parts of Speech",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "'The medicine was administered intravenously.' Yahan 'intravenously' kya hai?",
    options: ["Adverb", "Noun", "Verb", "Adjective"],
    answer: "Adverb",
    explanation: "'Intravenously' batata hai ki medicine kaise administer ki gayi. Ye verb ko modify kar raha hai.",
    topic: "Parts of Speech",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Indirect speech banao: She said, 'The patient is stable.'",
    options: [
      "She said the patient was stable.",
      "She says the patient stable.",
      "She said the patient is stable.",
      "She said patient was stable."
    ],
    answer: "She said the patient was stable.",
    explanation: "Reporting verb past me hai, isliye present tense backshift hokar past tense banega.",
    topic: "Direct and Indirect Speech",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "'A person who cannot read or write' ke liye sahi word kaun sa hai?",
    options: ["Scholar", "Literate", "Illiterate", "Graduate"],
    answer: "Illiterate",
    explanation: "Illiterate us vyakti ko kehte hain jo padhna aur likhna nahi janta.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Sentence complete karo: 'Scarcely had the shift started ___ the emergency alarm rang.'",
    options: ["when", "than", "and", "but"],
    answer: "when",
    explanation: "'Scarcely...when' ek standard grammatical pair hai jo immediate sequence ko dikhata hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "'The data collected during the survey were analysed carefully.' Yahan subject kya hai?",
    options: ["survey", "carefully", "data", "analysed"],
    answer: "data",
    explanation: "Sentence me action 'were analysed' data ke baare me bataya gaya hai. Isliye subject 'data' hai.",
    topic: "Sentence Analysis",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "'The doctor and the nurse ___ discussing the case.'",
    options: ["is", "was", "are", "has"],
    answer: "are",
    explanation: "Do subjects 'doctor and nurse' milkar plural subject banate hain. Isliye 'are' use hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "'Prognosis' ka sabse kareeb meaning kya hai?",
    options: ["Diagnosis", "Treatment", "Prediction of outcome", "Investigation"],
    answer: "Prediction of outcome",
    explanation: "Prognosis future outcome ya disease ke expected course ko batata hai.",
    topic: "Medical Vocabulary",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Passive voice banao: 'The doctor will review the report.'",
    options: [
      "The report will be reviewed by the doctor.",
      "The report reviewed by doctor.",
      "The doctor will be reviewed.",
      "The report is reviewed."
    ],
    answer: "The report will be reviewed by the doctor.",
    explanation: "Future passive ka structure 'will be + V3' hota hai.",
    topic: "Voice",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "'She speaks as if she ___ everything.'",
    options: ["know", "knows", "knew", "knowing"],
    answer: "knew",
    explanation: "'As if' ke saath unreal comparison me past form use ki jati hai. Isliye 'knew' sahi hai.",
    topic: "Grammar",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "'Diligent' ka opposite word kaun sa hai?",
    options: ["Hardworking", "Careful", "Lazy", "Focused"],
    answer: "Lazy",
    explanation: "Diligent ka matlab mehnati hota hai. Uska opposite lazy hai.",
    topic: "Vocabulary",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "'The nurse who was assigned to ICU completed her duty.' Relative clause kaun si hai?",
    options: [
      "completed her duty",
      "The nurse",
      "who was assigned to ICU",
      "her duty"
    ],
    answer: "who was assigned to ICU",
    explanation: "Relative clause noun ke baare me extra information deti hai aur relative pronoun se start hoti hai.",
    topic: "Clauses",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "'The patient has not responded to treatment yet.' Yahan 'yet' kya indicate karta hai?",
    options: ["Future possibility", "Present perfect context", "Past action", "Habit"],
    answer: "Present perfect context",
    explanation: "'Yet' aksar negative aur interrogative Present Perfect sentences me use hota hai.",
    topic: "Tenses",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "'To hit the nail on the head' idiom ka meaning kya hai?",
    options: [
      "Galat jawab dena",
      "Bilkul sahi baat kehna",
      "Jaldi kaam karna",
      "Kaam chhod dena"
    ],
    answer: "Bilkul sahi baat kehna",
    explanation: "Ye idiom exact aur accurate observation ya answer dene ke liye use hota hai.",
    topic: "Idioms",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Sentence me article choose karo: 'He is ___ MBA graduate.'",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    explanation: "MBA ka pronunciation 'em-bi-e' hota hai jo vowel sound se start hota hai. Isliye 'an' use hota hai.",
    topic: "Articles",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "'The patient was too weak to walk.' Yahan 'too' ka kya sense hai?",
    options: ["Comparison", "Excessiveness", "Possibility", "Frequency"],
    answer: "Excessiveness",
    explanation: "'Too' kisi cheez ki excess quantity ya degree ko dikhata hai.",
    topic: "Grammar",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "'Not only the nurse but also the doctors ___ present.'",
    options: ["was", "is", "has", "were"],
    answer: "were",
    explanation: "'Not only...but also' me verb nearest subject ke according hota hai. 'Doctors' plural hai, isliye 'were' use hoga.",
    topic: "Subject Verb Agreement",
    difficulty: "hard"
  }
];

export default set2;
