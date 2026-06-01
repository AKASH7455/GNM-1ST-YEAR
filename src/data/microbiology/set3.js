const set3 = [
  {
    id: 1,
    question: "ICU patient me central venous catheter lagne ke 5 din baad fever develop hua. Blood culture me Gram-positive cocci in clusters mile. Sabse likely source kya hai?",
    options: [
      "Contaminated food",
      "Skin flora contamination",
      "Airborne infection",
      "Vector bite"
    ],
    answer: "Skin flora contamination",
    explanation:
      "Central line associated bloodstream infection (CLABSI) me skin flora, especially Staphylococcus species common source hote hain. Catheter insertion aur maintenance ke dauran aseptic technique bahut important hai. Food, airborne aur vector transmission is situation me less likely hain.",
    topic: "Hospital Acquired Infection",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Patient ko severe diarrhea ke baad dehydration ho gaya. Stool sample me comma-shaped bacteria identify hua. Sabse likely organism kaunsa hai?",
    options: [
      "Salmonella typhi",
      "Escherichia coli",
      "Vibrio cholerae",
      "Staphylococcus aureus"
    ],
    answer: "Vibrio cholerae",
    explanation:
      "Comma-shaped Gram-negative bacillus Vibrio cholerae ki characteristic morphology hai. Ye cholera cause karta hai jisme rice-water stool aur severe dehydration dekha jata hai. Rapid fluid replacement patient survival ke liye essential hai.",
    topic: "Bacteriology",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Autoclave validation ke liye sabse reliable indicator kaunsa mana jata hai?",
    options: [
      "Chemical indicator tape",
      "Biological indicator",
      "Color change strip",
      "Temperature chart"
    ],
    answer: "Biological indicator",
    explanation:
      "Biological indicators spores ka use karte hain aur sterilization effectiveness ka gold standard assessment provide karte hain. Chemical indicators sirf process exposure batate hain. Patient safety ke liye biological monitoring important hai.",
    topic: "Sterilization",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Healthcare worker ko blood splash aankh me lag gaya. Sabse pehla action kya hona chahiye?",
    options: [
      "Eye ko immediately water se flush karna",
      "Antibiotic start karna",
      "Bandage laga dena",
      "Duty continue karna"
    ],
    answer: "Eye ko immediately water se flush karna",
    explanation:
      "Mucous membrane exposure ke baad immediate irrigation infection risk ko kam karta hai. Iske baad reporting aur post-exposure protocol follow kiya jata hai. Delay karna unsafe hai.",
    topic: "Occupational Safety",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Patient me pseudomembranous colitis develop hua hai. Ye kis situation se sabse zyada associated hai?",
    options: [
      "Long-term antibiotic use",
      "Vitamin deficiency",
      "Excess exercise",
      "Dehydration only"
    ],
    answer: "Long-term antibiotic use",
    explanation:
      "Clostridioides difficile infection prolonged antibiotic therapy ke baad develop ho sakti hai. Antibiotics normal gut flora ko destroy kar dete hain. Ye nosocomial infection ka important example hai.",
    topic: "Antimicrobial Therapy",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "AIDS patient me oral candidiasis ka major reason kya hota hai?",
    options: [
      "Increased RBC count",
      "Reduced immune defense",
      "High calcium level",
      "Excess platelet count"
    ],
    answer: "Reduced immune defense",
    explanation:
      "HIV infection CD4 cells ko reduce karta hai jisse immunity weak ho jati hai. Candida opportunistic fungus hai jo low immunity me rapidly grow karta hai. Ye AIDS patients me common finding hai.",
    topic: "Immunology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Tuberculosis transmission rokne ke liye patient room me kaunsi facility sabse important hai?",
    options: [
      "Negative pressure ventilation",
      "Bright lighting",
      "Warm room temperature",
      "High humidity"
    ],
    answer: "Negative pressure ventilation",
    explanation:
      "TB airborne disease hai. Negative pressure room infectious particles ko doosre areas me spread hone se rokta hai. Infection control guidelines me iska special importance hai.",
    topic: "Airborne Infection Control",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Postoperative wound infection me pus sample Gram stain par Gram-positive cocci in chains dikhata hai. Sabse likely organism kaunsa hai?",
    options: [
      "Staphylococcus aureus",
      "Pseudomonas aeruginosa",
      "Streptococcus pyogenes",
      "Klebsiella pneumoniae"
    ],
    answer: "Streptococcus pyogenes",
    explanation:
      "Gram-positive cocci in chains Streptococcus species ki characteristic finding hai. Streptococcus pyogenes wound infections aur soft tissue infections ka common cause ho sakta hai.",
    topic: "Gram Staining",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Rabies prevention me dog bite ke baad wound washing ka primary benefit kya hai?",
    options: [
      "Virus load kam karna",
      "Antibody banana",
      "Fever reduce karna",
      "Pain completely khatam karna"
    ],
    answer: "Virus load kam karna",
    explanation:
      "Immediate wound washing rabies virus ki local quantity ko reduce karta hai. Ye post-exposure prophylaxis ka important first step hai. Vaccine aur immunoglobulin iske baad diye ja sakte hain.",
    topic: "Virology",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Community outbreak me contaminated water se spread hone wali disease kaunsi hai?",
    options: [
      "Rabies",
      "Tetanus",
      "Measles",
      "Typhoid"
    ],
    answer: "Typhoid",
    explanation:
      "Typhoid Salmonella typhi ke karan hota hai aur contaminated food-water se spread karta hai. Safe sanitation aur clean drinking water prevention ke main measures hain.",
    topic: "Water-Borne Diseases",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Hospital me hand rub use karne ka major advantage kya hai?",
    options: [
      "Rapid reduction of transient flora",
      "Permanent sterilization of skin",
      "Removal of all normal flora",
      "Replacement of handwashing forever"
    ],
    answer: "Rapid reduction of transient flora",
    explanation:
      "Alcohol-based hand rub transient microorganisms ko quickly reduce karta hai. Ye healthcare-associated infections prevent karne me effective hai. Normal flora completely remove nahi hoti.",
    topic: "Hand Hygiene",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Malaria diagnosis confirm karne ke liye kaunsa specimen sabse appropriate hai?",
    options: [
      "Urine sample",
      "Sputum sample",
      "Blood smear",
      "CSF sample"
    ],
    answer: "Blood smear",
    explanation:
      "Peripheral blood smear me Plasmodium parasite directly identify kiya ja sakta hai. Ye malaria diagnosis ka classic laboratory method hai. Species identification bhi possible hoti hai.",
    topic: "Parasitology",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Agar kisi organism par multiple antibiotics ka effect na ho to is condition ko kya kaha jata hai?",
    options: [
      "Virulence",
      "Pathogenicity",
      "Multidrug resistance",
      "Attenuation"
    ],
    answer: "Multidrug resistance",
    explanation:
      "Multidrug resistant organisms treatment ko difficult bana dete hain. Inappropriate antibiotic use resistance development ka major factor hai. Infection control aur stewardship zaroori hai.",
    topic: "Antimicrobial Resistance",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Patient ke sputum me Acid Fast Bacilli detect hue. Sabse likely disease kya hai?",
    options: [
      "Pneumonia",
      "Tuberculosis",
      "Influenza",
      "Diphtheria"
    ],
    answer: "Tuberculosis",
    explanation:
      "Acid Fast Bacilli (AFB) Mycobacterium tuberculosis ki characteristic laboratory finding hai. Sputum examination TB diagnosis ka important part hai. Airborne precautions zaroori hote hain.",
    topic: "Mycobacteriology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Food poisoning ke case me canned food consumption ke baad paralysis develop hua. Sabse likely pathogen kaunsa hai?",
    options: [
      "Clostridium botulinum",
      "Shigella dysenteriae",
      "Salmonella typhi",
      "Vibrio cholerae"
    ],
    answer: "Clostridium botulinum",
    explanation:
      "Botulinum toxin neuromuscular paralysis cause karta hai. Improperly canned food iska major source hota hai. Early diagnosis aur antitoxin treatment life-saving ho sakte hain.",
    topic: "Food Microbiology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Vaccination ke baad antibody production kis type ki immunity ka example hai?",
    options: [
      "Passive natural immunity",
      "Innate immunity",
      "Artificial active immunity",
      "Passive artificial immunity"
    ],
    answer: "Artificial active immunity",
    explanation:
      "Vaccines immune system ko stimulate karke antibodies banwati hain. Is process ko artificial active immunity kehte hain. Long-term protection provide karne me iska role important hai.",
    topic: "Immunization",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Urinary catheter patient me infection prevention ke liye sabse important principle kya hai?",
    options: [
      "Closed drainage system maintain karna",
      "Daily catheter replacement",
      "Frequent tubing opening",
      "Bag ko bed par rakhna"
    ],
    answer: "Closed drainage system maintain karna",
    explanation:
      "Closed drainage system microorganisms ke entry risk ko reduce karta hai. Catheter associated urinary tract infection prevention me ye key intervention hai.",
    topic: "Nosocomial Infection",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Oral thrush ka common causative organism kaunsa hai?",
    options: [
      "Aspergillus fumigatus",
      "Candida albicans",
      "Cryptococcus neoformans",
      "Rhizopus species"
    ],
    answer: "Candida albicans",
    explanation:
      "Candida albicans oral candidiasis ka most common cause hai. White removable patches aur immunocompromised status important clues hote hain.",
    topic: "Mycology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Blood culture collect karte waqt contamination prevent karne ke liye sabse important kya hai?",
    options: [
      "Sample ko freeze karna",
      "Tube shake karna",
      "Strict aseptic technique",
      "Antibiotic ke baad sample lena"
    ],
    answer: "Strict aseptic technique",
    explanation:
      "Blood culture contamination false-positive results ka major cause hai. Proper skin preparation aur aseptic technique accurate diagnosis ke liye essential hain.",
    topic: "Specimen Collection",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Community vaccination coverage badhne se disease transmission kam hone ko kya kehte hain?",
    options: [
      "Incubation",
      "Mutation",
      "Pathogenicity",
      "Herd immunity"
    ],
    answer: "Herd immunity",
    explanation:
      "Jab population ka bada hissa immune ho jata hai to disease spread significantly reduce ho jata hai. Is indirect protection ko herd immunity kehte hain aur ye public health ka major goal hai.",
    topic: "Community Immunology",
    difficulty: "medium"
  }
];

export default set3;

// Answer Key:
// [2,3,2,1,1,2,1,3,1,4,1,3,3,2,1,3,1,2,3,4]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5
