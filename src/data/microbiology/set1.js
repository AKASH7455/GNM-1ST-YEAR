// Answer Key:
// [2,4,1,3,1,4,2,3,4,1,3,2,1,4,2,3,1,3,4,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5

const set1 = [
  {
    id: 1,
    question: "Hospital me ek patient ko broad-spectrum antibiotics 10 din se mil rahe hain. Ab patient ko severe diarrhea develop ho gaya. Nurse ko sabse pehle kis organism ka suspicion karna chahiye?",
    options: [
      "Mycobacterium tuberculosis",
      "Clostridioides difficile",
      "Vibrio cholerae",
      "Plasmodium falciparum"
    ],
    answer: "Clostridioides difficile",
    explanation: "Long-term antibiotic use normal intestinal flora ko destroy kar deta hai jisse Clostridioides difficile overgrow kar sakta hai. Ye pseudomembranous colitis ka common cause hai. Stool testing aur infection control precautions zaroori hote hain. Antibiotic history diagnosis me important clue hai.",
    topic: "Bacteriology",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Patient me fever, headache aur neck rigidity hai. CSF culture me Gram-negative diplococci identify hue. Sabse likely pathogen kaunsa hai?",
    options: [
      "Staphylococcus aureus",
      "Streptococcus pyogenes",
      "Escherichia coli",
      "Neisseria meningitidis"
    ],
    answer: "Neisseria meningitidis",
    explanation: "Gram-negative diplococci aur meningitis symptoms Neisseria meningitidis ki taraf indicate karte hain. Ye rapidly progressive infection ho sakta hai. Early diagnosis aur antibiotic therapy life-saving hoti hai. Close contacts ko prophylaxis ki zarurat pad sakti hai.",
    topic: "Meningitis Microbiology",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Nurse vaccine administration ke baad patient ko observe kar rahi hai. Vaccine ka primary microbiological purpose kya hai?",
    options: [
      "Specific immunity develop karna",
      "Existing bacteria ko kill karna",
      "Blood pressure control karna",
      "Pain reduce karna"
    ],
    answer: "Specific immunity develop karna",
    explanation: "Vaccines immune system ko stimulate karke specific antibodies aur memory cells develop karte hain. Ye future infection se protection provide karta hai. Vaccines treatment nahi balki prevention ke liye use hote hain.",
    topic: "Immunology",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "AIDS patient me chronic cough aur oral candidiasis present hai. Nurse ko kis opportunistic infection ka high suspicion rakhna chahiye?",
    options: [
      "Tetanus",
      "Typhoid",
      "Pneumocystis pneumonia",
      "Rabies"
    ],
    answer: "Pneumocystis pneumonia",
    explanation: "Low CD4 count wale AIDS patients me Pneumocystis jirovecii pneumonia common opportunistic infection hai. Chronic cough aur respiratory symptoms important indicators hain. Early treatment mortality reduce karta hai.",
    topic: "Opportunistic Infections",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Patient ke wound se foul-smelling discharge aa raha hai aur anaerobic infection suspect kiya gaya hai. Sabse appropriate specimen handling kya hogi?",
    options: [
      "Oxygen exposure minimize karna",
      "Specimen ko khula rakhna",
      "Sunlight me transport karna",
      "Dry container use karna"
    ],
    answer: "Oxygen exposure minimize karna",
    explanation: "Anaerobic bacteria oxygen ki presence me survive nahi karte. Isliye specimen collection aur transport me oxygen exposure kam rakhna zaroori hai. Galat handling false-negative result de sakti hai.",
    topic: "Specimen Transport",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Patient me fungal meningitis diagnose hui. Encapsulated yeast identify hua. Sabse likely organism kaunsa hai?",
    options: [
      "Candida albicans",
      "Aspergillus fumigatus",
      "Rhizopus species",
      "Cryptococcus neoformans"
    ],
    answer: "Cryptococcus neoformans",
    explanation: "Cryptococcus neoformans encapsulated yeast hai jo immunocompromised patients me meningitis cause karta hai. Capsule iski important virulence factor hai. CSF examination diagnosis me helpful hota hai.",
    topic: "Mycology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Healthcare worker ne hand hygiene skip kar di. Sabse zyada kis type ke microorganisms patient tak transfer hone ka risk hai?",
    options: [
      "Normal flora only",
      "Transient flora",
      "Spores only",
      "Viruses only"
    ],
    answer: "Transient flora",
    explanation: "Transient flora patient-to-patient transmission ka major source hoti hai. Hand hygiene in microorganisms ko remove karne ke liye sabse effective measure hai. Ye infection prevention ka cornerstone mana jata hai.",
    topic: "Hand Hygiene",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Patient ko severe malaria diagnose hua hai. Blood smear me multiple ring forms RBC ke andar dekhe gaye. Sabse likely species kaunsi hai?",
    options: [
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    answer: "Plasmodium falciparum",
    explanation: "Multiple ring forms aur severe malaria Plasmodium falciparum ki characteristic finding hai. Ye malaria ki sabse dangerous species mani jati hai. Rapid treatment complications ko reduce karta hai.",
    topic: "Parasitology",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Laboratory report me organism kai antibiotics ke prati resistant nikla. Is condition ko kya kaha jata hai?",
    options: [
      "Attenuation",
      "Commensalism",
      "Colonization",
      "Multidrug resistance"
    ],
    answer: "Multidrug resistance",
    explanation: "Multidrug resistance ka matlab organism multiple antibiotics ke against resistant ho gaya hai. Ye treatment options ko limit kar deta hai. Rational antibiotic use resistance ko control karne me help karta hai.",
    topic: "Antimicrobial Resistance",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Patient me painful vesicular rash develop hui aur viral infection suspect kiya gaya. Varicella-zoster virus kis category me aata hai?",
    options: [
      "Herpesvirus",
      "Retrovirus",
      "Adenovirus",
      "Orthomyxovirus"
    ],
    answer: "Herpesvirus",
    explanation: "Varicella-zoster virus Herpesviridae family ka member hai. Ye chickenpox aur shingles dono cause kar sakta hai. Latency aur reactivation is family ki important characteristics hain.",
    topic: "Virology",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Patient ke stool sample me cysts aur trophozoites identify hue. Bloody diarrhea bhi present hai. Sabse likely pathogen kaunsa hai?",
    options: [
      "Giardia lamblia",
      "Plasmodium vivax",
      "Entamoeba histolytica",
      "Ascaris lumbricoides"
    ],
    answer: "Entamoeba histolytica",
    explanation: "Bloody diarrhea aur cyst-trophozoite finding Entamoeba histolytica ki characteristic hai. Ye amoebic dysentery cause karta hai. Contaminated food aur water major source hote hain.",
    topic: "Protozoology",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Autoclave ka primary sterilizing agent kya hota hai?",
    options: [
      "Dry heat",
      "Steam under pressure",
      "Ultraviolet light",
      "Chemical gas"
    ],
    answer: "Steam under pressure",
    explanation: "Autoclave moist heat sterilization ka method hai jo steam under pressure use karta hai. Ye microorganisms aur spores dono ko destroy kar sakta hai. Surgical instruments ke liye common method hai.",
    topic: "Sterilization",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Food poisoning outbreak me rice-based food consume karne ke baad vomiting predominant symptom hai. Sabse likely organism kaunsa hai?",
    options: [
      "Bacillus cereus",
      "Vibrio cholerae",
      "Salmonella typhi",
      "Mycobacterium leprae"
    ],
    answer: "Bacillus cereus",
    explanation: "Bacillus cereus commonly reheated rice se associated food poisoning cause karta hai. Vomiting predominant symptom ho sakta hai. Proper food storage prevention ke liye important hai.",
    topic: "Food Microbiology",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Patient me progressive ascending paralysis hai aur stool culture history suggest karti hai ki bacterial trigger present tha. Kis organism se association common hai?",
    options: [
      "Clostridium tetani",
      "Staphylococcus aureus",
      "Candida albicans",
      "Campylobacter jejuni"
    ],
    answer: "Campylobacter jejuni",
    explanation: "Guillain-Barré syndrome ka common infectious trigger Campylobacter jejuni mana jata hai. Infection ke baad autoimmune response develop ho sakta hai. Clinical correlation important hai.",
    topic: "Clinical Microbiology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Pulmonary TB patient ke sputum sample me Acid Fast Bacilli detect hue. Acid-fast property kis cell wall component ki wajah se hoti hai?",
    options: [
      "Peptidoglycan",
      "Teichoic acid",
      "Mycolic acid",
      "Lipopolysaccharide"
    ],
    answer: "Mycolic acid",
    explanation: "Mycobacteria ki cell wall me mycolic acid hota hai jo acid-fast staining property provide karta hai. Isi wajah se Ziehl-Neelsen stain use ki jati hai. Ye diagnosis ka important microbiological concept hai.",
    topic: "Mycobacteriology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Catheter-associated infection prevent karne ke liye sabse effective nursing strategy kya hai?",
    options: [
      "Daily catheter replacement",
      "Aseptic insertion and maintenance",
      "Frequent disconnection",
      "Routine antibiotic use"
    ],
    answer: "Aseptic insertion and maintenance",
    explanation: "Aseptic technique catheter-associated infections ko significantly reduce karti hai. Frequent disconnection infection risk badha sakta hai. Evidence-based catheter care essential hai.",
    topic: "Nosocomial Infection",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Community vaccination program ka indirect benefit kya hai?",
    options: [
      "Herd immunity",
      "Mutation increase",
      "Virulence increase",
      "Incubation prolongation"
    ],
    answer: "Herd immunity",
    explanation: "Jab population ka large proportion immune ho jata hai to disease transmission reduce hota hai. Isse unvaccinated ya vulnerable individuals ko bhi protection milti hai. Public health me ye bahut important concept hai.",
    topic: "Community Immunology",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Patient me high fever ke saath rose spots aur intestinal involvement hai. Sabse likely disease kaunsi hai?",
    options: [
      "Cholera",
      "Dengue",
      "Typhoid fever",
      "Influenza"
    ],
    answer: "Typhoid fever",
    explanation: "Rose spots aur intestinal symptoms typhoid fever ki classic findings hain. Salmonella typhi iska causative organism hai. Safe water aur sanitation prevention me important role nibhate hain.",
    topic: "Enteric Fever",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Hepatitis B virus ke transmission ka sabse important route kaunsa hai?",
    options: [
      "Airborne spread",
      "Feco-oral route",
      "Vector bite",
      "Blood and body fluids"
    ],
    answer: "Blood and body fluids",
    explanation: "Hepatitis B blood-borne infection hai jo blood aur body fluids ke contact se spread hoti hai. Vaccination effective prevention strategy hai. Healthcare workers high-risk group me aate hain.",
    topic: "Virology",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Disinfection aur sterilization me major difference kya hai?",
    options: [
      "Dono same hain",
      "Sterilization spores ko bhi destroy karta hai",
      "Disinfection hamesha spores destroy karta hai",
      "Sterilization sirf viruses destroy karta hai"
    ],
    answer: "Sterilization spores ko bhi destroy karta hai",
    explanation: "Sterilization sab microorganisms aur bacterial spores ko eliminate karta hai. Disinfection me spores survive kar sakte hain. Surgical equipment ke liye sterilization essential hota hai.",
    topic: "Sterilization and Disinfection",
    difficulty: "medium"
  }
];

export default set1;