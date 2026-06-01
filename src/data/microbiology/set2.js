const set2 = [
  {
    id: 1,
    question: "ICU me ventilator par admitted patient ko fever aur purulent sputum develop hua. Nurse ko sabse pehle kis organism se related Hospital Acquired Infection ka suspicion rakhna chahiye?",
    options: ["Candida albicans", "Plasmodium vivax", "Pseudomonas aeruginosa", "Entamoeba histolytica"],
    answer: "Pseudomonas aeruginosa",
    explanation: "Ventilator-associated pneumonia me Pseudomonas ek common nosocomial pathogen hai. Ye moist environment me grow karta hai aur ICU equipment ko contaminate kar sakta hai. Candida aur Entamoeba is scenario me common cause nahi hain. Early identification patient outcome improve karti hai.",
    topic: "Hospital Acquired Infection",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Blood culture collection ke dauran sabse important nursing action kya hai jisse false-positive result kam ho sake?",
    options: ["Strict aseptic technique maintain karna", "Sample ko refrigerator me rakhna", "Antibiotic dene ke turant baad sample lena", "Tube ko shake karna"],
    answer: "Strict aseptic technique maintain karna",
    explanation: "Blood culture contamination ka major reason poor aseptic technique hota hai. Skin flora sample me aa sakti hai aur false-positive result de sakti hai. Sample handling aur timing bhi important hai lekin asepsis sabse critical hai. Ye microbiology diagnosis ki accuracy badhata hai.",
    topic: "Specimen Collection",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Pulmonary tuberculosis patient ke room me infection spread rokne ke liye sabse appropriate precaution kaunsa hai?",
    options: ["Contact precaution", "Standard precaution only", "Droplet precaution", "Airborne precaution"],
    answer: "Airborne precaution",
    explanation: "Tuberculosis airborne droplets nuclei ke through spread hoti hai. Isliye N95 mask aur proper ventilation zaroori hai. Contact aur droplet precautions alone sufficient nahi hote. Nurse ko transmission chain todne par focus karna chahiye.",
    topic: "Infection Control",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Patient ko severe watery diarrhea hai aur stool culture me Vibrio cholerae identify hua. Disease transmission ka sabse probable route kya hai?",
    options: ["Airborne route", "Feco-oral route", "Vector-borne route", "Direct blood contact"],
    answer: "Feco-oral route",
    explanation: "Cholera contaminated food aur water ke through spread hota hai. Poor sanitation iska major risk factor hai. Airborne aur blood contact transmission is disease me relevant nahi hote. Community health measures prevention me important hain.",
    topic: "Disease Transmission",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Autoclaving ke baad sterile packs wet milte hain. Nurse ko is situation ko kaise interpret karna chahiye?",
    options: ["Sterility compromised ho sakti hai", "Packs definitely sterile hain", "Wetness expected finding hai", "Storage se koi farq nahi padega"],
    answer: "Sterility compromised ho sakti hai",
    explanation: "Wet packs contamination ka risk badhate hain kyunki microorganisms moisture ke through enter kar sakte hain. Isliye unhe sterile maan kar use nahi karna chahiye. Reprocessing required ho sakti hai. Patient safety ke liye strict sterilization standards follow karne chahiye.",
    topic: "Sterilization",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Postoperative wound se pus discharge ho raha hai. Gram stain me Gram-positive cocci clusters me dikh rahe hain. Sabse likely organism kaunsa hai?",
    options: ["Escherichia coli", "Mycobacterium tuberculosis", "Staphylococcus aureus", "Vibrio cholerae"],
    answer: "Staphylococcus aureus",
    explanation: "Gram-positive cocci in clusters ka classic appearance Staphylococcus aureus ka hota hai. Ye wound infection ka common cause hai. E. coli Gram-negative bacillus hota hai. Clinical correlation diagnosis ko support karta hai.",
    topic: "Bacteriology",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Urinary catheter wale patient me CAUTI risk kam karne ke liye nurse ko kya karna chahiye?",
    options: ["Daily catheter change karna", "Closed drainage system maintain karna", "Bag ko bed par rakhna", "Tubing ko disconnect karte rehna"],
    answer: "Closed drainage system maintain karna",
    explanation: "Closed drainage system infection prevention ka key principle hai. Frequent disconnection se microorganisms enter kar sakte hain. Catheter care evidence-based honi chahiye. Ye nosocomial infection rate ko kam karta hai.",
    topic: "Nosocomial Infection",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Healthcare worker ko accidental needle-stick injury hui hai. Blood-borne infection risk assessment me sabse zyada concern kis virus ka hota hai?",
    options: ["Rhinovirus", "Rotavirus", "Norovirus", "Hepatitis B virus"],
    answer: "Hepatitis B virus",
    explanation: "Needle-stick injuries ke baad Hepatitis B transmission ka risk significant hota hai. Vaccination aur post-exposure protocol follow karna zaroori hai. Rhinovirus aur Norovirus blood-borne pathogens nahi hain. Immediate reporting essential hai.",
    topic: "Virology",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Hand hygiene compliance improve karne ka sabse effective microbiological rationale kya hai?",
    options: ["Transient microorganisms ko remove karna", "Normal flora ko completely destroy karna", "Body temperature kam karna", "Blood pressure control karna"],
    answer: "Transient microorganisms ko remove karna",
    explanation: "Transient flora patient-to-patient transmission ka major source hoti hai. Proper hand hygiene infection chain todti hai. Normal flora ko completely eliminate karna objective nahi hota. Ye infection prevention ka basic pillar hai.",
    topic: "Hand Hygiene",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Immunocompromised patient ke oral cavity me white patches develop hue jo scrape karne par remove ho jaate hain. Sabse likely cause kya hai?",
    options: ["Herpes simplex", "Streptococcus pyogenes", "Mycobacterium leprae", "Candida albicans"],
    answer: "Candida albicans",
    explanation: "Oral thrush commonly Candida albicans ki wajah se hota hai. Immunocompromised patients me iska risk zyada hota hai. White removable plaques classic finding hain. Early treatment complications ko rokta hai.",
    topic: "Mycology",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Antibiotic sensitivity report me organism multiple drugs ke prati resistant hai. Is finding ko kya kaha jata hai?",
    options: ["Attenuation", "Multidrug resistance", "Sterilization", "Commensalism"],
    answer: "Multidrug resistance",
    explanation: "Multidrug resistance ka matlab organism kai antibiotics ke prati resistant hai. Ye treatment ko difficult bana deta hai. Irrational antibiotic use is problem ko badhata hai. Antimicrobial stewardship bahut important hai.",
    topic: "Antimicrobial Resistance",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Rabies exposure ke baad vaccine dene ka microbiological basis kya hai?",
    options: ["Immediate toxin neutralization", "Fungal destruction", "Active immunity develop karna", "Blood dilution karna"],
    answer: "Active immunity develop karna",
    explanation: "Rabies vaccine body ko antibodies produce karne ke liye stimulate karta hai. Is process ko active immunity kehte hain. Vaccine exposure ke baad bhi effective ho sakti hai. Timely administration life-saving hai.",
    topic: "Immunology",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Culture media par bacteria grow karne ka primary purpose kya hota hai?",
    options: ["Organism ko isolate aur identify karna", "Virus multiplication karna", "Blood group determine karna", "Hemoglobin increase karna"],
    answer: "Organism ko isolate aur identify karna",
    explanation: "Culture media microorganisms ko grow karne aur identify karne me help karta hai. Diagnosis aur antibiotic selection ke liye ye important hai. Viral growth ke liye special methods chahiye. Accurate identification treatment guide karti hai.",
    topic: "Culture Techniques",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Food poisoning outbreak me botulism ka suspicion hai. Iska causative organism kaunsa hai?",
    options: ["Salmonella typhi", "Escherichia coli", "Shigella dysenteriae", "Clostridium botulinum"],
    answer: "Clostridium botulinum",
    explanation: "Clostridium botulinum potent neurotoxin produce karta hai. Improperly preserved food is disease se associated hota hai. Neurological symptoms important clue hote hain. Early recognition critical hai.",
    topic: "Food Microbiology",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Malaria diagnosis ke liye peripheral blood smear me kya identify kiya jata hai?",
    options: ["Bacterial colonies", "Fungal spores", "Plasmodium parasites", "Viral particles"],
    answer: "Plasmodium parasites",
    explanation: "Peripheral smear malaria diagnosis ka standard method hai. Isme Plasmodium species ko directly visualize kiya jata hai. Bacteria aur virus is test ka target nahi hote. Species identification treatment selection me help karti hai.",
    topic: "Parasitology",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Disinfection aur sterilization me major difference kya hai?",
    options: ["Dono same process hain", "Sterilization sab microorganisms aur spores ko destroy karta hai", "Disinfection spores ko hamesha destroy karta hai", "Sterilization sirf viruses ko destroy karta hai"],
    answer: "Sterilization sab microorganisms aur spores ko destroy karta hai",
    explanation: "Sterilization highest level microbial destruction provide karta hai. Isme bacterial spores bhi destroy ho jate hain. Disinfection me spores survive kar sakte hain. Surgical instruments ke liye sterilization preferred hai.",
    topic: "Sterilization and Disinfection",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Patient me jaundice, dark urine aur positive HBsAg report aayi hai. Sabse likely diagnosis kya hai?",
    options: ["Typhoid fever", "Malaria", "Dengue fever", "Hepatitis B infection"],
    answer: "Hepatitis B infection",
    explanation: "HBsAg positivity Hepatitis B infection ka important marker hai. Jaundice aur liver involvement common findings hain. Malaria aur dengue me HBsAg positive nahi hota. Infection control precautions zaroori hain.",
    topic: "Diagnostic Microbiology",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Vaccination program ka sabse important community-level benefit kya hai?",
    options: ["Herd immunity develop karna", "Antibiotic resistance badhana", "Incubation period badhana", "Mutation induce karna"],
    answer: "Herd immunity develop karna",
    explanation: "Jab community ka bada hissa immune hota hai to disease spread kam ho jata hai. Isse vulnerable individuals bhi indirectly protected rehte hain. Vaccination public health ka major tool hai. Disease outbreaks ko control karne me madad milti hai.",
    topic: "Community Immunology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "AIDS patient me opportunistic infection develop hone ka primary reason kya hai?",
    options: ["Excess RBC production", "High platelet count", "Severe reduction in immune function", "Increased hemoglobin"],
    answer: "Severe reduction in immune function",
    explanation: "HIV CD4 cells ko damage karta hai jisse immunity weak ho jati hai. Opportunistic infections isi wajah se develop hoti hain. Hemoglobin ya platelet increase iska cause nahi hai. Infection prevention aur monitoring essential hai.",
    topic: "HIV Microbiology",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Typhoid fever ke prevention me sabse effective public health measure kya hai?",
    options: ["Air filtration", "Safe water and sanitation", "Noise control", "Radiation shielding"],
    answer: "Safe water and sanitation",
    explanation: "Typhoid contaminated food aur water se spread hota hai. Safe drinking water aur sanitation transmission ko significantly reduce karte hain. Air filtration is disease me relevant nahi hai. Community prevention strategies bahut important hain.",
    topic: "Preventive Microbiology",
    difficulty: "medium"
  }
];

export default set2;

// Answer Key:
// [3,1,4,2,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5
