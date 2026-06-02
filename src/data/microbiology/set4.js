// Answer Key:
// [4,1,3,2,4,1,2,3,1,4,2,3,4,1,3,2,1,4,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set4 = [
  {
    id: 1,
    question: "Hospital me admitted patient ko severe muscle rigidity aur lockjaw develop hua. Wound contamination history bhi hai. Sabse probable causative organism kaunsa hai?",
    options: [
      "Staphylococcus aureus",
      "Clostridium botulinum",
      "Corynebacterium diphtheriae",
      "Clostridium tetani"
    ],
    answer: "Clostridium tetani",
    explanation: "Lockjaw (trismus) aur muscle rigidity tetanus ki classic findings hain. Clostridium tetani neurotoxin produce karta hai jo nervous system ko affect karta hai. Wound contamination iska common source hai. Early immunization aur wound care prevention ke liye important hain.",
    topic: "Bacteriology",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Patient ke throat swab culture me beta-hemolytic colonies grow hui. Acute pharyngitis ka sabse likely pathogen kaunsa hai?",
    options: [
      "Streptococcus pyogenes",
      "Neisseria meningitidis",
      "Klebsiella pneumoniae",
      "Candida albicans"
    ],
    answer: "Streptococcus pyogenes",
    explanation: "Streptococcus pyogenes beta-hemolysis show karta hai aur acute pharyngitis ka common cause hai. Untreated infection rheumatic fever jaisi complications bhi kar sakta hai. Proper diagnosis aur antibiotic therapy important hai.",
    topic: "Bacteriology",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "AIDS patient me chronic meningitis develop hui aur CSF me encapsulated yeast mila. Sabse likely organism kaunsa hai?",
    options: [
      "Candida albicans",
      "Aspergillus fumigatus",
      "Cryptococcus neoformans",
      "Rhizopus species"
    ],
    answer: "Cryptococcus neoformans",
    explanation: "Cryptococcus neoformans encapsulated yeast hai jo immunocompromised patients me meningitis cause karta hai. AIDS patients me ye opportunistic infection commonly dekha jata hai. Early diagnosis neurological damage ko reduce karta hai.",
    topic: "Mycology",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Blood culture collect karte waqt contamination prevent karne ka sabse effective step kya hai?",
    options: [
      "Sample ko freeze karna",
      "Skin antisepsis maintain karna",
      "Tube ko shake karna",
      "Antibiotic ke baad sample lena"
    ],
    answer: "Skin antisepsis maintain karna",
    explanation: "Blood culture contamination ka major source patient ki skin flora hoti hai. Proper skin antisepsis false-positive reports ko reduce karti hai. Accurate culture results treatment planning ke liye important hote hain.",
    topic: "Specimen Collection",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Hospital water supply contamination se outbreak hua. Legionnaires disease ka causative organism kaunsa hai?",
    options: [
      "Mycoplasma pneumoniae",
      "Haemophilus influenzae",
      "Pseudomonas aeruginosa",
      "Legionella pneumophila"
    ],
    answer: "Legionella pneumophila",
    explanation: "Legionella contaminated water systems me grow karta hai aur aerosol ke through spread hota hai. Hospitals aur hotels me outbreaks dekhe ja sakte hain. Water system monitoring infection prevention ke liye zaroori hai.",
    topic: "Hospital Infection",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Tuberculosis diagnosis me Mantoux test positive aane ka kya matlab hota hai?",
    options: [
      "Delayed hypersensitivity response",
      "Active disease confirm ho gayi",
      "Patient cured hai",
      "No exposure hua hai"
    ],
    answer: "Delayed hypersensitivity response",
    explanation: "Mantoux test cell-mediated immunity ko assess karta hai. Positive result exposure ya infection indicate kar sakta hai, lekin active disease confirm nahi karta. Further investigations required hote hain.",
    topic: "Immunology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Urinary tract infection me sabse common causative organism kaunsa mana jata hai?",
    options: [
      "Mycobacterium tuberculosis",
      "Escherichia coli",
      "Clostridium tetani",
      "Vibrio cholerae"
    ],
    answer: "Escherichia coli",
    explanation: "E. coli normal intestinal flora ka part hai aur ascending infection ke through UTI cause karta hai. Catheterized patients me risk aur badh jata hai. Proper catheter care prevention ke liye important hai.",
    topic: "Bacteriology",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Patient me fever, anemia aur splenomegaly hai. Blood smear me ring forms dekhe gaye. Sabse likely diagnosis kya hai?",
    options: [
      "Typhoid",
      "Dengue",
      "Malaria",
      "Tuberculosis"
    ],
    answer: "Malaria",
    explanation: "Ring forms Plasmodium parasites ki characteristic blood smear finding hain. Malaria me fever pattern, anemia aur splenomegaly common hote hain. Blood smear diagnosis ka standard method hai.",
    topic: "Parasitology",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Hand hygiene ka primary purpose healthcare setting me kya hai?",
    options: [
      "Transient flora ko remove karna",
      "Normal flora ko completely destroy karna",
      "Skin ko sterilize karna",
      "Gloves ki need khatam karna"
    ],
    answer: "Transient flora ko remove karna",
    explanation: "Transient flora patient-to-patient infection spread ka major source hoti hai. Hand hygiene transmission chain todti hai. Ye healthcare-associated infection prevention ka sabse effective method mana jata hai.",
    topic: "Infection Control",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Rabies virus kis route se nervous system tak pahunchta hai?",
    options: [
      "Bloodstream directly",
      "Lymphatic vessels",
      "GI tract",
      "Peripheral nerves"
    ],
    answer: "Peripheral nerves",
    explanation: "Rabies virus wound site se peripheral nerves ke through CNS tak travel karta hai. Isi wajah se wound washing aur early vaccination bahut important hote hain. Delay fatal outcome de sakta hai.",
    topic: "Virology",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Healthcare worker ko needle-stick injury hui. Sabse zyada transmissible blood-borne pathogen kaunsa hai?",
    options: [
      "HIV",
      "Hepatitis B virus",
      "Influenza virus",
      "Norovirus"
    ],
    answer: "Hepatitis B virus",
    explanation: "Needle-stick injury ke baad Hepatitis B ka transmission risk HIV se bhi zyada hota hai. Vaccination healthcare workers ke liye bahut important preventive measure hai.",
    topic: "Occupational Infection",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Antibiotic sensitivity testing ka main objective kya hai?",
    options: [
      "Blood group determine karna",
      "Organism count karna",
      "Effective antibiotic identify karna",
      "Virus isolate karna"
    ],
    answer: "Effective antibiotic identify karna",
    explanation: "Sensitivity testing clinician ko appropriate antibiotic select karne me help karti hai. Ye antimicrobial resistance reduce karne me bhi important role play karti hai.",
    topic: "Antimicrobial Therapy",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Improperly canned food se associated neuroparalytic illness ka causative organism kaunsa hai?",
    options: [
      "Salmonella typhi",
      "Shigella dysenteriae",
      "Staphylococcus aureus",
      "Clostridium botulinum"
    ],
    answer: "Clostridium botulinum",
    explanation: "Botulinum toxin flaccid paralysis cause karta hai aur improperly canned food iska major source hota hai. Ye medical emergency mani jati hai.",
    topic: "Food Microbiology",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Vaccination ke baad antibodies develop hona kis immunity ka example hai?",
    options: [
      "Artificial active immunity",
      "Natural passive immunity",
      "Artificial passive immunity",
      "Innate immunity"
    ],
    answer: "Artificial active immunity",
    explanation: "Vaccines immune system ko stimulate karke antibodies produce karwati hain. Is process ko artificial active immunity kehte hain. Long-term protection iska major benefit hai.",
    topic: "Immunology",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Patient ke sputum smear me Acid Fast Bacilli mile. Sabse likely pathogen kaunsa hai?",
    options: [
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Mycobacterium tuberculosis",
      "Streptococcus pyogenes"
    ],
    answer: "Mycobacterium tuberculosis",
    explanation: "Acid Fast Bacilli Mycobacterium tuberculosis ki characteristic property hai. Ziehl-Neelsen stain diagnosis me commonly use hota hai. Airborne precautions mandatory hote hain.",
    topic: "Mycobacteriology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Autoclave sterilization me microbial destruction ka primary mechanism kya hai?",
    options: [
      "Radiation damage",
      "Protein coagulation by moist heat",
      "Chemical oxidation",
      "Filtration"
    ],
    answer: "Protein coagulation by moist heat",
    explanation: "Autoclave steam under pressure use karta hai jo microbial proteins ko coagulate karke destroy karta hai. Ye spores ko bhi eliminate kar sakta hai.",
    topic: "Sterilization",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Catheter-associated UTI prevention ke liye sabse important nursing intervention kya hai?",
    options: [
      "Closed drainage system maintain karna",
      "Daily catheter replacement",
      "Frequent irrigation",
      "Bag ko floor par rakhna"
    ],
    answer: "Closed drainage system maintain karna",
    explanation: "Closed drainage system microorganism entry ko prevent karta hai. Ye CAUTI prevention bundle ka important component hai. Nursing vigilance infection rates ko reduce karti hai.",
    topic: "Nosocomial Infection",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Community vaccination coverage badhne se susceptible individuals ko indirect protection milti hai. Is concept ko kya kehte hain?",
    options: [
      "Pathogenicity",
      "Virulence",
      "Mutation",
      "Herd immunity"
    ],
    answer: "Herd immunity",
    explanation: "Herd immunity tab develop hoti hai jab population ka large proportion immune ho jata hai. Isse disease transmission reduce hota hai aur unvaccinated individuals bhi indirectly protected rehte hain.",
    topic: "Community Immunology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Oral thrush ka most common causative organism kaunsa hai?",
    options: [
      "Aspergillus fumigatus",
      "Cryptococcus neoformans",
      "Candida albicans",
      "Mucor species"
    ],
    answer: "Candida albicans",
    explanation: "Candida albicans oral candidiasis ka common cause hai. Immunocompromised aur prolonged antibiotic use wale patients me risk zyada hota hai.",
    topic: "Mycology",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Cholera prevention ka sabse effective community-level measure kya hai?",
    options: [
      "Air filtration",
      "Safe water and sanitation",
      "Noise control",
      "Radiation shielding"
    ],
    answer: "Safe water and sanitation",
    explanation: "Cholera contaminated water se spread hota hai. Safe drinking water aur proper sanitation transmission chain todne ke liye sabse effective measures hain.",
    topic: "Community Health Microbiology",
    difficulty: "medium"
  }
];

export default set4;