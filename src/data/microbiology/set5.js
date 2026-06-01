// Answer Key:
// [3,1,4,2,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set5 = [
  {
    id: 1,
    question: "ICU patient me ventilator use ke 7 din baad pneumonia develop hua. Culture me non-lactose fermenting Gram-negative bacilli mile. Sabse likely pathogen kaunsa hai?",
    options: [
      "Escherichia coli",
      "Klebsiella pneumoniae",
      "Pseudomonas aeruginosa",
      "Streptococcus pneumoniae"
    ],
    answer: "Pseudomonas aeruginosa",
    explanation: "Ventilator Associated Pneumonia (VAP) me Pseudomonas aeruginosa ek common nosocomial pathogen hai. Ye moist hospital environment me survive karta hai aur multidrug resistance bhi dikha sakta hai. ICU patients high-risk group me aate hain.",
    topic: "Nosocomial Infection",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Patient me severe watery diarrhea aur dehydration hai. Stool culture se toxin-producing organism identify hua jo small intestine ko affect karta hai. Sabse likely disease kaunsi hai?",
    options: [
      "Cholera",
      "Typhoid",
      "Shigellosis",
      "Amoebiasis"
    ],
    answer: "Cholera",
    explanation: "Cholera toxin intestinal cells se excessive fluid loss karwata hai. Isliye severe dehydration develop hoti hai. Early fluid replacement mortality ko bahut kam kar deta hai.",
    topic: "Enteric Infections",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Hospital laboratory me culture media sterilization verify karne ke liye sabse reliable method kya hai?",
    options: [
      "Color indicator",
      "Pressure gauge reading",
      "Temperature chart",
      "Biological spore test"
    ],
    answer: "Biological spore test",
    explanation: "Biological indicators sterilization monitoring ka gold standard hote hain. Agar spores destroy ho jayein to sterilization effective mani jati hai. Chemical indicators itne reliable nahi hote.",
    topic: "Sterilization",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Patient ke urine sample me significant bacteriuria detect hui. Specimen collection ke dauran contamination avoid karne ke liye sabse appropriate sample kaunsa hai?",
    options: [
      "Random urine sample",
      "Midstream clean-catch urine",
      "Night urine sample",
      "Stored urine sample"
    ],
    answer: "Midstream clean-catch urine",
    explanation: "Midstream clean-catch sample external genital flora contamination ko reduce karta hai. Accurate urine culture ke liye ye recommended technique hai.",
    topic: "Specimen Collection",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Patient me skin wound ke baad painful muscle spasms aur opisthotonus develop hua. Sabse likely pathogen kaunsa hai?",
    options: [
      "Clostridium tetani",
      "Clostridium botulinum",
      "Staphylococcus aureus",
      "Bacillus anthracis"
    ],
    answer: "Clostridium tetani",
    explanation: "Tetanospasmin toxin nervous system ko affect karta hai aur muscle rigidity produce karta hai. Wound contamination ke baad tetanus develop ho sakta hai. Vaccination prevention ka best method hai.",
    topic: "Bacteriology",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "AIDS patient me recurrent fungal infection ka major reason kya hai?",
    options: [
      "Increased RBC production",
      "Excess antibody formation",
      "Reduced CD4 T-cell count",
      "High platelet count"
    ],
    answer: "Reduced CD4 T-cell count",
    explanation: "HIV CD4 T lymphocytes ko destroy karta hai jisse immunity weak ho jati hai. Opportunistic fungal infections isi wajah se common ho jati hain.",
    topic: "Immunology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Pulmonary tuberculosis patient ki care karte waqt nurse ko kaunsi isolation precaution follow karni chahiye?",
    options: [
      "Contact precaution",
      "Airborne precaution",
      "Enteric precaution",
      "Standard precaution only"
    ],
    answer: "Airborne precaution",
    explanation: "Tuberculosis airborne droplet nuclei ke through spread hoti hai. N95 respirator aur negative pressure room important infection control measures hain.",
    topic: "Infection Control",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Rabies virus body me entry ke baad primarily kis route se CNS tak pahunchta hai?",
    options: [
      "Blood circulation",
      "Lymphatic drainage",
      "Portal circulation",
      "Peripheral nerves"
    ],
    answer: "Peripheral nerves",
    explanation: "Rabies virus peripheral nerves ke through retrograde transport se brain tak pahunchta hai. Isi liye immediate wound washing aur vaccination critical hote hain.",
    topic: "Virology",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Hand hygiene ka sabse important microbiological benefit kya hai?",
    options: [
      "Transient flora removal",
      "Permanent skin sterilization",
      "Normal flora elimination",
      "Skin hydration improve karna"
    ],
    answer: "Transient flora removal",
    explanation: "Transient flora healthcare-associated infections spread karne me major role play karti hai. Hand hygiene infection chain todne ka sabse effective measure hai.",
    topic: "Hand Hygiene",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Patient me oral thrush develop hua hai. White patches scrape karne par remove ho jaate hain. Sabse likely organism kaunsa hai?",
    options: [
      "Aspergillus fumigatus",
      "Cryptococcus neoformans",
      "Histoplasma capsulatum",
      "Candida albicans"
    ],
    answer: "Candida albicans",
    explanation: "Candida albicans oral candidiasis ka most common cause hai. Immunocompromised aur prolonged antibiotic therapy wale patients me risk zyada hota hai.",
    topic: "Mycology",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Needle-stick injury ke baad healthcare worker me sabse high transmission risk kis infection ka hota hai?",
    options: [
      "Influenza",
      "Hepatitis B",
      "Chickenpox",
      "Measles"
    ],
    answer: "Hepatitis B",
    explanation: "Hepatitis B blood-borne pathogen hai aur needle-stick injury ke baad iska transmission risk kaafi high hota hai. Vaccination bahut effective prevention hai.",
    topic: "Occupational Infection",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Peripheral blood smear me ring-shaped parasites identify hue. Sabse likely disease kaunsi hai?",
    options: [
      "Kala-azar",
      "Amoebiasis",
      "Malaria",
      "Filariasis"
    ],
    answer: "Malaria",
    explanation: "Ring forms Plasmodium species ki characteristic microscopic finding hain. Blood smear malaria diagnosis ka important tool hai.",
    topic: "Parasitology",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Urinary catheter patient me CAUTI prevention ke liye sabse important intervention kya hai?",
    options: [
      "Closed drainage system maintain karna",
      "Daily catheter replacement",
      "Frequent disconnect karna",
      "Urine bag floor par rakhna"
    ],
    answer: "Closed drainage system maintain karna",
    explanation: "Closed drainage system microorganisms ke entry risk ko reduce karta hai. Ye catheter-associated UTI prevention ka key component hai.",
    topic: "Nosocomial Infection",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Improperly canned food khane ke baad flaccid paralysis develop hua. Sabse likely pathogen kaunsa hai?",
    options: [
      "Salmonella typhi",
      "Shigella dysenteriae",
      "Escherichia coli",
      "Clostridium botulinum"
    ],
    answer: "Clostridium botulinum",
    explanation: "Botulinum toxin neuromuscular junction ko block karta hai aur flaccid paralysis produce karta hai. Ye medical emergency hai.",
    topic: "Food Microbiology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Patient ke sputum smear me Acid Fast Bacilli detect hue. Kaunsa pathogen suspect kiya jayega?",
    options: [
      "Klebsiella pneumoniae",
      "Staphylococcus aureus",
      "Mycobacterium tuberculosis",
      "Streptococcus pyogenes"
    ],
    answer: "Mycobacterium tuberculosis",
    explanation: "AFB positivity Mycobacterium tuberculosis ki characteristic finding hai. Ziehl-Neelsen staining diagnosis me use ki jati hai.",
    topic: "Mycobacteriology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Antibiotic resistance ko reduce karne ke liye sabse appropriate strategy kya hai?",
    options: [
      "Har fever me antibiotic dena",
      "Antibiotic stewardship follow karna",
      "Dose randomly change karna",
      "Patient ko self-medication allow karna"
    ],
    answer: "Antibiotic stewardship follow karna",
    explanation: "Antibiotic stewardship rational antibiotic use promote karta hai. Isse resistance development slow hota hai aur treatment outcomes improve hote hain.",
    topic: "Antimicrobial Resistance",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Community me vaccination coverage badhne se unvaccinated logon ko bhi protection milti hai. Is concept ko kya kehte hain?",
    options: [
      "Pathogenicity",
      "Virulence",
      "Incubation",
      "Herd immunity"
    ],
    answer: "Herd immunity",
    explanation: "Jab population ka bada hissa immune ho jata hai to disease transmission kam ho jata hai. Isse susceptible individuals indirectly protected rehte hain.",
    topic: "Community Immunology",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Typhoid fever ka causative organism kaunsa hai?",
    options: [
      "Salmonella typhi",
      "Escherichia coli",
      "Shigella dysenteriae",
      "Vibrio cholerae"
    ],
    answer: "Salmonella typhi",
    explanation: "Typhoid fever Salmonella typhi ke karan hota hai aur contaminated food-water se spread karta hai. Sanitation prevention me important role nibhata hai.",
    topic: "Enteric Fever",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Gram stain me Gram-positive cocci in clusters dikhne par sabse likely organism kaunsa hai?",
    options: [
      "Streptococcus pyogenes",
      "Enterococcus faecalis",
      "Staphylococcus aureus",
      "Neisseria meningitidis"
    ],
    answer: "Staphylococcus aureus",
    explanation: "Gram-positive cocci in clusters Staphylococcus aureus ki classic morphology hai. Ye wound infection aur bloodstream infection ka common pathogen hai.",
    topic: "Gram Staining",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Disinfection aur sterilization me main difference kya hai?",
    options: [
      "Dono same process hain",
      "Sterilization spores bhi destroy karta hai",
      "Disinfection hamesha spores destroy karta hai",
      "Sterilization sirf viruses destroy karta hai"
    ],
    answer: "Sterilization spores bhi destroy karta hai",
    explanation: "Sterilization sab microorganisms aur bacterial spores ko destroy karta hai. Disinfection me spores survive kar sakte hain. Surgical instruments ke liye sterilization essential hai.",
    topic: "Sterilization and Disinfection",
    difficulty: "hard"
  }
];

export default set5;