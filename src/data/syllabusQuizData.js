const buildSets = (questions) => {
  const sets = {};

  for (let setIndex = 0; setIndex < 5; setIndex += 1) {
    sets[`set${setIndex + 1}`] = questions
      .slice(setIndex * 5, setIndex * 5 + 5)
      .map((question, index) => ({
        id: setIndex * 5 + index + 1,
        difficulty: question.difficulty || "easy",
        ...question
      }));
  }

  return sets;
};

const makeSubject = (name, questions) => ({
  name,
  sets: buildSets(questions)
});

const question = (
  text,
  options,
  answer,
  explanation,
  topic,
  difficulty = "easy"
) => ({
  question: text,
  options,
  answer,
  explanation,
  topic,
  difficulty
});

const microbiology = [
  question("Which science studies microorganisms?", ["Microbiology", "Psychology", "Sociology", "Nutrition"], "Microbiology", "Microbiology deals with microorganisms and their effects on human health.", "Introduction"),
  question("Which group includes bacteria, viruses and fungi?", ["Microorganisms", "Vitamins", "Minerals", "Hormones"], "Microorganisms", "The syllabus lists bacteria, viruses and fungi under microorganisms.", "Microorganisms"),
  question("Which organism has a cell wall and can multiply by binary fission?", ["Bacterium", "Virus", "Prion", "Vitamin"], "Bacterium", "Bacteria are cellular microorganisms and commonly multiply by binary fission.", "Bacteria"),
  question("Which microorganism requires living cells for multiplication?", ["Virus", "Yeast", "Protozoa", "Mould"], "Virus", "Viruses are obligate intracellular agents.", "Viruses"),
  question("Which method prevents microbial transmission in nursing care?", ["Hand hygiene", "Skipping records", "Sharing needles", "Open dressing"], "Hand hygiene", "Hand hygiene is a basic infection control practice.", "Infection Control"),
  question("Inflammation usually presents with redness, heat, swelling and what else?", ["Pain", "Blindness", "Fracture", "Dehydration"], "Pain", "Pain is a classic feature of inflammation.", "Inflammation"),
  question("Immunity protects the body mainly against what?", ["Infection", "Malnutrition", "Anxiety", "Illiteracy"], "Infection", "Immunity is the body's defense against infectious agents.", "Immunity"),
  question("Which immunity develops after vaccination?", ["Artificial active immunity", "Natural passive immunity", "Mechanical immunity", "No immunity"], "Artificial active immunity", "Vaccines stimulate the body to produce an immune response.", "Immunity"),
  question("Which practice destroys many pathogens on articles?", ["Disinfection", "Observation", "Palpation", "Counselling"], "Disinfection", "Disinfection reduces or destroys pathogenic organisms.", "Control of Microbes"),
  question("Which method destroys all forms of microbial life including spores?", ["Sterilization", "Dusting", "Screening", "Ventilation"], "Sterilization", "Sterilization is complete destruction of all microorganisms.", "Sterilization"),
  question("Which is commonly used to sterilize dressing materials?", ["Autoclave", "Stethoscope", "Thermometer", "Sphygmomanometer"], "Autoclave", "Autoclaving uses steam under pressure for sterilization.", "Sterilization"),
  question("Why are specimens collected correctly?", ["For accurate diagnosis", "For decoration", "For attendance", "For billing only"], "For accurate diagnosis", "Correct specimen collection supports reliable laboratory diagnosis.", "Specimen Collection"),
  question("Which specimen is used for urine culture?", ["Midstream urine", "Saliva only", "Hair", "Sweat"], "Midstream urine", "Midstream urine reduces contamination during collection.", "Specimen Collection"),
  question("Which measure is used before and after patient contact?", ["Hand washing", "Loud speaking", "Crowding", "Sharing towels"], "Hand washing", "Hand washing reduces cross infection.", "Infection Control"),
  question("Which is a fungal infection?", ["Ringworm", "Measles", "Cholera", "Typhoid"], "Ringworm", "Ringworm is caused by dermatophyte fungi.", "Fungi"),
  question("Which disease is commonly bacterial?", ["Tuberculosis", "Chickenpox", "Influenza", "Mumps"], "Tuberculosis", "Tuberculosis is caused by Mycobacterium tuberculosis.", "Bacteria"),
  question("Which disease is commonly viral?", ["Measles", "Tetanus", "Cholera", "Typhoid"], "Measles", "Measles is a viral infection.", "Viruses"),
  question("Which vector can transmit malaria?", ["Mosquito", "House dust", "Cotton", "Sterile gauze"], "Mosquito", "Malaria is transmitted by Anopheles mosquitoes.", "Infection Transmission"),
  question("What is asepsis?", ["Freedom from disease-causing organisms", "Excess nutrition", "High fever", "Low pulse"], "Freedom from disease-causing organisms", "Asepsis means preventing contamination by pathogens.", "Asepsis"),
  question("Which waste should be handled as infectious?", ["Blood-soaked dressing", "Clean paper", "Unused notebook", "Empty water bottle"], "Blood-soaked dressing", "Blood-soaked materials may carry pathogens.", "Infection Control"),
  question("Which PPE protects hands during specimen handling?", ["Gloves", "Cap only", "Apron only", "Shoes only"], "Gloves", "Gloves reduce direct contact with infectious material.", "Specimen Collection"),
  question("Which chain link is broken by isolation?", ["Mode of transmission", "Nutrition", "Documentation", "Exercise"], "Mode of transmission", "Isolation limits spread from infected sources.", "Infection Control"),
  question("What is the purpose of culture test?", ["To identify microorganisms", "To measure height", "To assess vision", "To check pulse"], "To identify microorganisms", "Culture helps identify causative microorganisms.", "Laboratory Diagnosis"),
  question("Which sample is needed for sputum examination?", ["Sputum from deep cough", "Plain water", "Tears", "Skin oil"], "Sputum from deep cough", "A deep cough sample is more useful for respiratory infection testing.", "Specimen Collection"),
  question("Which infection control practice is most basic in all wards?", ["Standard precautions", "Ignoring spills", "Open disposal", "Reuse of needles"], "Standard precautions", "Standard precautions apply to all patients to reduce infection risk.", "Infection Control")
];

const psychology = [
  question("Psychology mainly studies what?", ["Human behavior and mental processes", "Food groups", "Computer hardware", "Water supply"], "Human behavior and mental processes", "The syllabus focuses on human behavior, personality and learning.", "Introduction"),
  question("Which term means the conscious, preconscious and unconscious levels?", ["Structure of mind", "Food pyramid", "Vital signs", "Database"], "Structure of mind", "Psychology describes levels of mind as conscious, preconscious and unconscious.", "Mind"),
  question("Which is a basic psychological need?", ["Love and belonging", "Sterilizer", "Bandage", "Keyboard"], "Love and belonging", "Human needs include emotional and social needs.", "Human Needs"),
  question("Learning is best described as what?", ["Change in behavior through experience", "Only memorizing words", "Measuring pulse", "Cooking food"], "Change in behavior through experience", "Learning produces relatively permanent behavior change.", "Learning"),
  question("Which factor influences personality?", ["Heredity and environment", "Only shoe size", "Only room color", "Only handwriting"], "Heredity and environment", "Personality develops through biological and environmental influences.", "Personality"),
  question("Which is an example of emotion?", ["Fear", "Protein", "Keyboard", "Autoclave"], "Fear", "Fear is an emotional response.", "Emotion"),
  question("Intelligence helps a person to do what?", ["Solve problems and adapt", "Sterilize instruments only", "Digest fat", "Collect waste"], "Solve problems and adapt", "Intelligence includes problem solving and adaptation.", "Intelligence"),
  question("Which method helps reduce patient anxiety?", ["Therapeutic communication", "Ignoring questions", "Scolding", "Withholding information"], "Therapeutic communication", "Supportive communication reduces fear and anxiety.", "Psychology in Nursing"),
  question("Which is a defense mechanism?", ["Denial", "Digestion", "Sterilization", "Ventilation"], "Denial", "Denial is a common psychological defense mechanism.", "Mental Health"),
  question("Which process includes remembering and thinking?", ["Cognition", "Immunity", "Disinfection", "Nutrition"], "Cognition", "Cognition includes mental processes such as thinking and memory.", "Cognition"),
  question("Which type of learning uses reward?", ["Operant conditioning", "Disinfection", "Pasteurization", "Hemostasis"], "Operant conditioning", "Operant conditioning uses reinforcement and consequences.", "Learning"),
  question("Which behavior shows good nurse-patient relationship?", ["Listening actively", "Interrupting always", "Avoiding eye contact", "Giving false assurance"], "Listening actively", "Active listening builds trust.", "Communication"),
  question("Which factor can affect mental health?", ["Stress", "Clean water only", "Keyboard only", "Bandage only"], "Stress", "Stress can influence mental health and behavior.", "Mental Health"),
  question("Which is a sign of good adjustment?", ["Coping with situations", "Always avoiding responsibility", "Constant conflict", "No communication"], "Coping with situations", "Adjustment means adapting to personal and social situations.", "Adjustment"),
  question("Which is useful while caring for an angry patient?", ["Remain calm", "Argue loudly", "Ignore safety", "Punish immediately"], "Remain calm", "Calm, respectful communication is therapeutic.", "Emotions"),
  question("Which term means motivation to satisfy a need?", ["Drive", "Culture", "Sterilization", "Protein"], "Drive", "Drives motivate behavior toward need satisfaction.", "Motivation"),
  question("Which is a social influence on personality?", ["Family", "Autoclave", "Stethoscope", "Vaccine"], "Family", "Family is a major social influence.", "Personality"),
  question("Which helps in patient teaching?", ["Understanding learning readiness", "Using only medical jargon", "Avoiding feedback", "Rushing instructions"], "Understanding learning readiness", "Teaching is effective when the learner is ready.", "Learning"),
  question("What is memory?", ["Retention and recall of information", "Pulse rate", "Food storage", "Instrument cleaning"], "Retention and recall of information", "Memory includes storing and recalling information.", "Memory"),
  question("Which is a positive emotion?", ["Joy", "Fear", "Anger", "Grief"], "Joy", "Joy is a positive emotional state.", "Emotion"),
  question("Which patient response needs empathy?", ["Crying after diagnosis", "Reading a chart", "Eating lunch", "Walking normally"], "Crying after diagnosis", "Empathy helps support emotional distress.", "Psychology in Nursing"),
  question("Which assessment is related to intelligence?", ["Problem-solving ability", "Temperature", "Blood pressure", "Respiration"], "Problem-solving ability", "Intelligence includes reasoning and problem solving.", "Intelligence"),
  question("Which concept means self-image and self-worth?", ["Self-concept", "Sterilization", "Balanced diet", "Referral"], "Self-concept", "Self-concept includes how a person views self.", "Personality"),
  question("Which is a nonverbal behavior?", ["Facial expression", "Written report", "Prescription", "Care plan"], "Facial expression", "Facial expression communicates feelings without words.", "Communication"),
  question("Which response supports a grieving patient?", ["Allow expression of feelings", "Change the topic always", "Criticize crying", "Give false promises"], "Allow expression of feelings", "Expression of feelings helps coping with grief.", "Mental Health")
];

const sociology = [
  question("Sociology is the study of what?", ["Society and social relationships", "Microbes", "Grammar only", "Computer storage"], "Society and social relationships", "Sociology explains society, social groups and institutions.", "Introduction"),
  question("Which is the primary social institution?", ["Family", "Laboratory", "Autoclave", "Pharmacy"], "Family", "Family is a primary social group and institution.", "Family"),
  question("Which term means accepted ways of behavior in society?", ["Social norms", "Vital signs", "Food values", "Disk drives"], "Social norms", "Norms guide expected social behavior.", "Society"),
  question("Which social problem affects community health?", ["Poverty", "Clean water", "Balanced diet", "Vaccination"], "Poverty", "Poverty can affect health and access to care.", "Social Problems"),
  question("Which process teaches culture to a child?", ["Socialization", "Sterilization", "Digestion", "Ventilation"], "Socialization", "Socialization teaches values, norms and roles.", "Individual and Society"),
  question("Which is a type of family?", ["Nuclear family", "Bacterial family", "Digital family", "Sterile family"], "Nuclear family", "Nuclear family is a common family type.", "Family"),
  question("Which is an element of culture?", ["Customs", "Pulse", "Needle", "Keyboard"], "Customs", "Culture includes customs, beliefs and values.", "Culture"),
  question("Which community resource supports health?", ["Health centre", "Movie hall only", "Market only", "Bus stand only"], "Health centre", "Health centres are community health resources.", "Community"),
  question("Which is a social group?", ["Peer group", "Thermometer", "Bandage", "Protein"], "Peer group", "Peer groups influence behavior and socialization.", "Groups"),
  question("Which practice shows social control?", ["Following laws", "Ignoring traffic rules", "Avoiding hygiene", "Refusing cooperation"], "Following laws", "Social control maintains order through rules and laws.", "Social Control"),
  question("Which factor can cause social change?", ["Education", "Fever", "Wound dressing", "Sterilizer"], "Education", "Education can bring social change.", "Social Change"),
  question("Which is a community problem?", ["Sanitation issue", "Good housing", "Safe water", "Health education"], "Sanitation issue", "Poor sanitation affects community health.", "Community"),
  question("Which role is important for a nurse in society?", ["Health educator", "Shopkeeper only", "Driver only", "Mechanic only"], "Health educator", "Nurses educate individuals, families and communities.", "Sociology in Nursing"),
  question("Which social institution provides formal learning?", ["School", "Kitchen", "Ward bed", "Ambulance"], "School", "School is an educational institution.", "Social Institutions"),
  question("Which describes marriage?", ["Socially approved union", "Only a disease", "Only a medicine", "Only a computer term"], "Socially approved union", "Marriage is a social institution and approved relationship.", "Marriage"),
  question("Which is a rural community feature?", ["Agriculture-based occupation", "Only high-rise flats", "No family life", "No culture"], "Agriculture-based occupation", "Many rural communities depend on agriculture.", "Community"),
  question("Which is an urban community feature?", ["Dense population", "No services", "Only farming", "No transport"], "Dense population", "Urban communities usually have higher population density.", "Community"),
  question("Which helps reduce social stigma?", ["Health education", "Secrecy and blame", "Isolation always", "Mocking patients"], "Health education", "Education reduces myths and stigma.", "Social Problems"),
  question("Which problem may affect family health?", ["Alcoholism", "Clean environment", "Immunization", "Safe housing"], "Alcoholism", "Alcoholism can disturb family and community health.", "Social Problems"),
  question("Which term means rank or position in society?", ["Status", "Pulse", "Diet", "Chart"], "Status", "Status means social position.", "Society"),
  question("Which term means expected behavior of a status?", ["Role", "Protein", "Asepsis", "Record"], "Role", "Role is the behavior expected from a social status.", "Society"),
  question("Which method is useful to study community life?", ["Observation", "Injection", "Sterilization", "Dressing"], "Observation", "Observation helps understand social and community situations.", "Sociological Methods"),
  question("Which is a value?", ["Honesty", "Fever", "Oxygen", "Antiseptic"], "Honesty", "Values are socially accepted ideas of good behavior.", "Culture"),
  question("Which group includes people related by birth or marriage?", ["Family", "Hospital equipment", "Drug group", "Food group"], "Family", "Family is formed by blood, marriage or adoption.", "Family"),
  question("Why is sociology important in nursing?", ["It helps understand patient and community behavior", "It replaces medicine", "It avoids care plans", "It stops communication"], "It helps understand patient and community behavior", "Sociology helps nurses care for people in social context.", "Sociology in Nursing")
];

const fundamentals = [
  question("Nursing foundations mainly focuses on what?", ["Basic nursing care", "Computer coding", "Grammar", "Agriculture"], "Basic nursing care", "Nursing Foundations covers basic needs, care and procedures.", "Introduction"),
  question("Which is a basic need of a patient?", ["Oxygenation", "Email", "Keyboard", "Typing speed"], "Oxygenation", "Oxygenation is a basic physiological need.", "Basic Needs"),
  question("Which action comes first in nursing process?", ["Assessment", "Evaluation", "Implementation", "Discharge"], "Assessment", "Assessment is the first step of nursing process.", "Nursing Process"),
  question("Which vital sign measures body heat?", ["Temperature", "Pulse", "Respiration", "Blood pressure"], "Temperature", "Temperature assesses body heat.", "Vital Signs"),
  question("Which measure prevents infection spread?", ["Hand hygiene", "Sharing needles", "Ignoring spills", "Open waste"], "Hand hygiene", "Hand hygiene is central to infection prevention.", "Infection Control"),
  question("Which document records nursing care?", ["Nursing notes", "Shopping list", "Recipe", "Invitation"], "Nursing notes", "Nursing records document care and observations.", "Records"),
  question("Which position helps breathing?", ["Fowler's position", "Prone only", "Lithotomy only", "Trendelenburg only"], "Fowler's position", "Fowler's position promotes lung expansion.", "Comfort Devices"),
  question("Which is used for oral temperature?", ["Clinical thermometer", "Stethoscope", "Syringe", "Tourniquet"], "Clinical thermometer", "A thermometer measures body temperature.", "Vital Signs"),
  question("Which is included in personal hygiene?", ["Bathing", "Database entry", "Report writing only", "Typing"], "Bathing", "Bathing maintains skin cleanliness and comfort.", "Hygiene"),
  question("Which is the safe way to give medicine?", ["Follow rights of medication", "Guess the dose", "Skip prescription", "Share drugs"], "Follow rights of medication", "Medication safety depends on correct patient, drug, dose, route and time.", "Pharmacology"),
  question("Which need is met by balanced diet?", ["Nutrition", "Elimination", "Sleep", "Safety only"], "Nutrition", "Food and fluids meet nutritional needs.", "Nutrition"),
  question("Which procedure helps immobile patients avoid bed sores?", ["Regular position change", "No movement", "Tight clothing", "Skipping skin care"], "Regular position change", "Turning reduces pressure and prevents pressure sores.", "Skin Care"),
  question("Which is an aseptic technique?", ["Using sterile articles", "Touching sterile field with bare hands", "Reusing soiled dressing", "Leaving wound open"], "Using sterile articles", "Aseptic technique prevents contamination.", "Asepsis"),
  question("Which bed is prepared for a new patient?", ["Admission bed", "Operation table", "Baby cradle only", "Dining table"], "Admission bed", "An admission bed is prepared for receiving a patient.", "Bed Making"),
  question("Which is a sign of respiration?", ["Chest movement", "Pupil color", "Hair growth", "Nail polish"], "Chest movement", "Respiration is observed by chest rise and fall.", "Vital Signs"),
  question("Which care is given to a dying patient?", ["Comfort and emotional support", "Neglect", "Avoid communication", "Stop privacy"], "Comfort and emotional support", "End-of-life care focuses on comfort, dignity and support.", "Terminal Care"),
  question("Which is included in admission procedure?", ["Patient identification", "Cooking food", "Typing certificate", "Water testing"], "Patient identification", "Correct identification is part of admission and safety.", "Admission"),
  question("Which is used for blood pressure measurement?", ["Sphygmomanometer", "Thermometer only", "Weighing scale", "Torch"], "Sphygmomanometer", "Blood pressure is measured with a sphygmomanometer.", "Vital Signs"),
  question("Which route gives medicine under the skin?", ["Subcutaneous", "Oral", "Topical", "Inhalation"], "Subcutaneous", "Subcutaneous injections are given into tissue under the skin.", "Medication"),
  question("Which waste needs biomedical disposal?", ["Used syringe", "Clean paper", "Fresh fruit", "Notebook"], "Used syringe", "Sharps require safe biomedical waste disposal.", "Waste Management"),
  question("Which is therapeutic communication?", ["Listening and responding respectfully", "Arguing", "Threatening", "Ignoring"], "Listening and responding respectfully", "Respectful communication supports care.", "Communication"),
  question("Which helps prevent falls?", ["Keep floor dry", "Raise side rails unnecessarily always", "Leave clutter", "Ignore call bell"], "Keep floor dry", "A dry, uncluttered floor reduces fall risk.", "Safety"),
  question("Which is done before a procedure?", ["Explain procedure and gain cooperation", "Hide information", "Rush silently", "Ignore consent"], "Explain procedure and gain cooperation", "Explanation reduces anxiety and promotes cooperation.", "Procedure Preparation"),
  question("Which is used to assess pain?", ["Pain scale", "Food chart", "Keyboard", "Water filter"], "Pain scale", "Pain scales help assess severity.", "Assessment"),
  question("Which is a goal of nursing care?", ["Promote health and recovery", "Increase infection", "Avoid records", "Reduce communication"], "Promote health and recovery", "Nursing care promotes health, comfort and recovery.", "Nursing Care")
];

const firstAid = [
  question("First aid means what?", ["Immediate help given before medical care", "Final surgery", "Only medicine sale", "Laboratory testing"], "Immediate help given before medical care", "First aid is immediate care given during emergency.", "Introduction"),
  question("Which is a principle of first aid?", ["Preserve life", "Cause panic", "Ignore danger", "Delay help"], "Preserve life", "The aims include preserving life and preventing worsening.", "Principles"),
  question("Which number should be called in emergency in India?", ["108", "1000", "411", "9999"], "108", "108 is a common emergency ambulance number in India.", "Emergency Response"),
  question("What should be checked first at an accident scene?", ["Safety", "Patient's address", "Clothes brand", "Food history"], "Safety", "Scene safety protects rescuer and victim.", "Emergency Response"),
  question("Which first aid is used for bleeding?", ["Apply direct pressure", "Rub mud", "Leave open", "Give spicy food"], "Apply direct pressure", "Direct pressure helps control external bleeding.", "Bleeding"),
  question("Which position is used for unconscious breathing person?", ["Recovery position", "Standing position", "Sitting without support", "Walking"], "Recovery position", "Recovery position maintains airway in an unconscious breathing person.", "Unconsciousness"),
  question("Which first aid is given for burn?", ["Cool under running water", "Apply ink", "Burst blisters", "Rub ice directly"], "Cool under running water", "Cooling a burn reduces tissue damage.", "Burns"),
  question("Which bandage supports a fractured arm?", ["Sling", "Tourniquet always", "Tight rope", "Wet towel only"], "Sling", "A sling supports and immobilizes an injured arm.", "Fracture"),
  question("Which emergency involves blocked airway?", ["Choking", "Fever", "Sprain", "Headache"], "Choking", "Choking occurs when airway is obstructed.", "Choking"),
  question("Which action helps choking adult?", ["Abdominal thrusts", "Give water immediately", "Make them lie flat", "Ignore coughing"], "Abdominal thrusts", "Abdominal thrusts may dislodge an airway obstruction.", "Choking"),
  question("Which is a sign of shock?", ["Cold clammy skin", "Normal comfort", "Strong appetite", "Bright rash only"], "Cold clammy skin", "Shock commonly presents with cold clammy skin and weakness.", "Shock"),
  question("Which first aid is used for poisoning?", ["Identify poison and seek help", "Induce vomiting always", "Give alcohol", "Delay referral"], "Identify poison and seek help", "Poisoning needs urgent guidance and referral.", "Poisoning"),
  question("Which bite needs urgent medical attention?", ["Snake bite", "Mosquito bite only", "Ant bite only", "Mild itch"], "Snake bite", "Snake bite can be life threatening.", "Bites"),
  question("Which first aid helps sprain?", ["Rest and cold compression", "Massage forcefully", "Run immediately", "Heat always first"], "Rest and cold compression", "Rest and cold compression reduce pain and swelling.", "Sprain"),
  question("Which disaster needs community first aid planning?", ["Earthquake", "Routine meal", "Class test", "Normal sleep"], "Earthquake", "Disasters like earthquakes need organized community response.", "Community Emergencies"),
  question("Which transport method is used when spine injury is suspected?", ["Keep spine aligned", "Bend neck", "Drag by arms", "Twist body"], "Keep spine aligned", "Spinal alignment prevents further injury.", "Transport"),
  question("What is CPR used for?", ["Absent breathing or pulse", "Mild hunger", "Simple cough", "Small bruise"], "Absent breathing or pulse", "CPR supports circulation and breathing in cardiac arrest.", "CPR"),
  question("Which is a priority in drowning?", ["Open airway and support breathing", "Give food first", "Make person run", "Ignore wet clothes"], "Open airway and support breathing", "Drowning first aid focuses on airway and breathing.", "Drowning"),
  question("Which is first aid for heat stroke?", ["Move to cool place", "Cover with heavy blanket", "Give hot tea only", "Make them exercise"], "Move to cool place", "Cooling and urgent care are needed in heat stroke.", "Heat Emergency"),
  question("Which first aid item covers wounds?", ["Sterile dressing", "Pencil", "Mobile charger", "Comb"], "Sterile dressing", "Sterile dressing protects wounds from contamination.", "First Aid Kit"),
  question("Why should tight clothing be loosened in fainting?", ["To ease breathing and circulation", "To decorate", "To warm fever", "To stop records"], "To ease breathing and circulation", "Loosening tight clothing improves comfort and breathing.", "Fainting"),
  question("Which is correct for nose bleeding?", ["Lean forward and pinch nose", "Tilt head backward", "Blow hard", "Lie flat immediately"], "Lean forward and pinch nose", "Leaning forward prevents swallowing blood.", "Bleeding"),
  question("Which is important during referral?", ["Send essential information", "Hide injury details", "Delay transport", "Remove all records"], "Send essential information", "Clear information helps continuity of care.", "Referral"),
  question("Which first aid prevents infection in wounds?", ["Clean hands and dressing", "Touch wound repeatedly", "Apply soil", "Use dirty cloth"], "Clean hands and dressing", "Clean technique reduces infection risk.", "Wound Care"),
  question("Which is the final step after giving first aid?", ["Arrange medical care if needed", "Leave without advice", "Forget documentation", "Give random medicines"], "Arrange medical care if needed", "First aid is followed by referral or medical care when required.", "First Aid")
];

const communityHealth = [
  question("Community health nursing focuses on whom?", ["Individuals, families and community", "Only computers", "Only grammar", "Only surgery"], "Individuals, families and community", "CHN provides care in community settings.", "Introduction"),
  question("Which is a goal of community health nursing?", ["Promote health and prevent disease", "Increase illness", "Avoid families", "Ignore environment"], "Promote health and prevent disease", "Health promotion and disease prevention are key CHN goals.", "Community Health Nursing"),
  question("Which factor affects community health?", ["Environment", "Keyboard color", "Notebook size", "Shoe brand"], "Environment", "Environment is a determinant of community health.", "Determinants of Health"),
  question("Home visit is mainly used to do what?", ["Assess and care for family", "Sell products", "Avoid records", "Conduct surgery"], "Assess and care for family", "Home visits support family assessment and care.", "Home Visit"),
  question("Which is part of family health care?", ["Family assessment", "Only hospital billing", "Typing speed", "No teaching"], "Family assessment", "Family health care begins with assessment.", "Family Health Care"),
  question("Epidemiology studies what?", ["Distribution and determinants of disease", "Grammar", "Keyboard use", "Cooking only"], "Distribution and determinants of disease", "Epidemiology studies disease patterns in populations.", "Epidemiology"),
  question("Which is a communicable disease?", ["Tuberculosis", "Diabetes", "Hypertension", "Fracture"], "Tuberculosis", "Tuberculosis can spread from person to person.", "Communicable Diseases"),
  question("Which is a non-communicable disease?", ["Diabetes", "Measles", "Cholera", "Chickenpox"], "Diabetes", "Diabetes is a chronic non-communicable disease.", "Non-communicable Diseases"),
  question("Which is a disease prevention method?", ["Immunization", "Unsafe water", "Poor sanitation", "Crowding"], "Immunization", "Immunization prevents vaccine-preventable diseases.", "Disease Prevention"),
  question("Which record is used in community health nursing?", ["Family folder", "Recipe book", "Shopping bill", "Travel ticket"], "Family folder", "Family folders record family health information.", "Records"),
  question("Which service supports mother and child health?", ["Antenatal care", "Vehicle repair", "Banking only", "Typing class"], "Antenatal care", "Antenatal care is part of maternal and child health services.", "Maternal Child Health"),
  question("Which assessment is important for school child?", ["Growth and development", "Bank balance", "Shoe brand", "Keyboard speed"], "Growth and development", "School health includes growth and development assessment.", "School Health"),
  question("Which is a referral service?", ["Sending client to higher care", "Ignoring symptoms", "Stopping care", "No documentation"], "Sending client to higher care", "Referral links clients with needed services.", "Referral System"),
  question("Which minor ailment may be managed at home level?", ["Mild fever", "Severe chest pain", "Major bleeding", "Unconsciousness"], "Mild fever", "Minor ailments can be managed with basic care and referral when needed.", "Minor Ailments"),
  question("Which activity is health promotion?", ["Health education", "Spreading rumors", "Unsafe disposal", "Avoiding immunization"], "Health education", "Health education improves healthy behavior.", "Health Promotion"),
  question("Which team member commonly works in village health services?", ["ASHA worker", "Pilot only", "Mechanic only", "Banker only"], "ASHA worker", "ASHA workers support community health activities.", "Health Team"),
  question("Which is part of community diagnosis?", ["Collecting community health data", "Guessing only", "Ignoring families", "No survey"], "Collecting community health data", "Community diagnosis is based on systematic data.", "Community Diagnosis"),
  question("Which is a family planning method?", ["Condom", "Stethoscope", "Bandage", "Thermometer"], "Condom", "Condom is a barrier contraceptive method.", "Family Welfare"),
  question("Which visit follows up high-risk mother?", ["Home visit", "Market visit", "Movie visit", "Bank visit"], "Home visit", "Home visits support follow-up and continuity.", "Home Visit"),
  question("Which data is used in health statistics?", ["Birth and death records", "Movie tickets", "Food menu", "Class timetable"], "Birth and death records", "Vital statistics include birth and death records.", "Records"),
  question("Which is an aim of school health programme?", ["Promote health of school children", "Only collect fees", "Avoid immunization", "Stop education"], "Promote health of school children", "School health promotes health and detects problems early.", "School Health"),
  question("Which disease is prevented by safe water and sanitation?", ["Cholera", "Fracture", "Diabetes", "Hypertension"], "Cholera", "Cholera spreads through contaminated water and poor sanitation.", "Communicable Diseases"),
  question("Which is included in health assessment?", ["History and observation", "Guessing only", "Skipping examination", "Only billing"], "History and observation", "Assessment includes history, observation and examination.", "Health Assessment"),
  question("Which is a community resource?", ["Anganwadi centre", "Personal diary", "TV remote", "Kitchen spoon"], "Anganwadi centre", "Anganwadi centres support child and maternal services.", "Community Resources"),
  question("What is the purpose of CHN records?", ["Continuity and evaluation of care", "Decoration", "Avoiding work", "Hiding care"], "Continuity and evaluation of care", "Records help follow-up, reporting and evaluation.", "Records")
];

const environmentalHygiene = [
  question("Environmental hygiene aims to prevent what?", ["Disease through healthy surroundings", "Computer errors", "Grammar mistakes", "Fractures only"], "Disease through healthy surroundings", "Environmental hygiene promotes health by controlling hazards.", "Introduction"),
  question("Safe water should be free from what?", ["Pathogens", "Oxygen", "Taste", "Container"], "Pathogens", "Safe water must be free from disease-causing organisms.", "Water"),
  question("Which method disinfects water at community level?", ["Chlorination", "Typing", "Dusting", "Bandaging"], "Chlorination", "Chlorination kills many waterborne pathogens.", "Water"),
  question("Which disease is waterborne?", ["Cholera", "Asthma", "Fracture", "Hypertension"], "Cholera", "Cholera spreads through contaminated water.", "Waterborne Disease"),
  question("Which waste disposal method is sanitary?", ["Proper segregation and disposal", "Open dumping", "Throwing near wells", "Burning plastics indoors"], "Proper segregation and disposal", "Segregation and safe disposal reduce health hazards.", "Waste"),
  question("Which gas is important for breathing?", ["Oxygen", "Carbon dust", "Smoke", "Sewage"], "Oxygen", "Clean air with adequate oxygen supports life.", "Air"),
  question("Which is air pollution control?", ["Good ventilation", "Indoor smoke", "Crowding", "Closed windows always"], "Good ventilation", "Ventilation reduces indoor air pollution.", "Air"),
  question("Which is a feature of good housing?", ["Safe water and ventilation", "Damp dark rooms", "No drainage", "Overcrowding"], "Safe water and ventilation", "Good housing supports health and safety.", "Housing"),
  question("Which vector spreads malaria?", ["Mosquito", "Housefly", "Rat", "Lice"], "Mosquito", "Mosquitoes transmit malaria.", "Vectors"),
  question("Which measure controls mosquitoes?", ["Remove stagnant water", "Store open water", "Avoid nets", "Ignore breeding sites"], "Remove stagnant water", "Removing stagnant water reduces breeding.", "Vector Control"),
  question("Which insect commonly spreads diarrheal disease mechanically?", ["Housefly", "Butterfly", "Honeybee", "Silkworm"], "Housefly", "Houseflies can mechanically carry pathogens.", "Vectors"),
  question("Which is proper excreta disposal?", ["Sanitary latrine", "Open defecation", "Near water source", "Open drain"], "Sanitary latrine", "Sanitary latrines prevent fecal contamination.", "Excreta Disposal"),
  question("Which is natural lighting?", ["Sunlight", "Torch only", "Candle only", "Tube light only"], "Sunlight", "Sunlight is natural lighting.", "Lighting"),
  question("Which is an effect of excessive noise?", ["Stress and hearing problems", "Better sleep", "Improved hearing", "More appetite"], "Stress and hearing problems", "Noise pollution can cause stress and hearing damage.", "Noise"),
  question("Which organization promotes environmental health globally?", ["WHO", "Keyboard club", "Local cinema", "Bus depot"], "WHO", "WHO supports public and environmental health.", "Organizations"),
  question("Which is solid waste?", ["Garbage", "Clean drinking water", "Fresh air", "Sunlight"], "Garbage", "Garbage is solid waste requiring disposal.", "Waste"),
  question("Which is liquid waste?", ["Sewage", "Dry paper", "Cotton roll", "Glass bottle"], "Sewage", "Sewage is liquid waste.", "Waste"),
  question("Which water source needs protection?", ["Well", "Open drain", "Dustbin", "Compost pit"], "Well", "Wells should be protected from contamination.", "Water"),
  question("Which is a method of food hygiene?", ["Protect food from flies", "Keep food uncovered", "Use dirty utensils", "Store near waste"], "Protect food from flies", "Food protection prevents contamination.", "Food Hygiene"),
  question("Which condition encourages vector breeding?", ["Stagnant water", "Clean dry area", "Covered drains", "Screened windows"], "Stagnant water", "Stagnant water is a mosquito breeding site.", "Vector Control"),
  question("Which is personal environmental hygiene?", ["Clean surroundings", "Unsafe disposal", "Open sewage", "Overcrowding"], "Clean surroundings", "Clean surroundings reduce disease risk.", "Hygiene"),
  question("Which is a ventilation type?", ["Natural ventilation", "Food classification", "Drug route", "Pulse chart"], "Natural ventilation", "Ventilation may be natural or artificial.", "Ventilation"),
  question("Which waste can contaminate soil?", ["Improper garbage disposal", "Safe compost", "Covered bin", "Clean water"], "Improper garbage disposal", "Improper disposal pollutes soil and spreads disease.", "Waste"),
  question("Which is an environmental hazard?", ["Unsafe drinking water", "Health education", "Immunization", "Balanced diet"], "Unsafe drinking water", "Unsafe water is a health hazard.", "Environmental Hazards"),
  question("Which agency may regulate local sanitation?", ["Local self-government", "Movie theatre", "Private diary", "Stationery shop"], "Local self-government", "Local bodies help manage sanitation and hygiene.", "Organizations")
];

const healthEducationCommunication = [
  question("Communication is the process of what?", ["Sharing information", "Sterilizing instruments", "Cooking food", "Testing water"], "Sharing information", "Communication transfers ideas, feelings and information.", "Communication Skills"),
  question("Which is a communication barrier?", ["Noise", "Active listening", "Clear language", "Feedback"], "Noise", "Noise interferes with communication.", "Communication Barriers"),
  question("Which is nonverbal communication?", ["Gesture", "Written report", "Health record", "Prescription"], "Gesture", "Gestures communicate without words.", "Nonverbal Communication"),
  question("Which skill improves counselling?", ["Listening", "Interrupting", "Judging", "Threatening"], "Listening", "Listening builds trust in counselling.", "Counselling"),
  question("Health education aims to do what?", ["Promote healthy behavior", "Hide information", "Increase disease", "Avoid teaching"], "Promote healthy behavior", "Health education helps people adopt healthy practices.", "Health Education"),
  question("Which is a health education method?", ["Group discussion", "Silent ignoring", "Wrong advice", "No feedback"], "Group discussion", "Group discussion is a teaching method.", "Methods"),
  question("Which AV aid is visual?", ["Poster", "Radio only", "Spoken word only", "Telephone call only"], "Poster", "Poster is a visual aid.", "Audio Visual Aids"),
  question("Which AV aid is audio?", ["Radio", "Chart", "Model", "Flash card"], "Radio", "Radio is an audio aid.", "Audio Visual Aids"),
  question("Which is important when preparing teaching plan?", ["Objectives", "Guesswork", "No audience analysis", "No evaluation"], "Objectives", "Objectives guide content, method and evaluation.", "Teaching Plan"),
  question("Which is feedback?", ["Response from receiver", "Only message sent", "Ignoring questions", "Noise"], "Response from receiver", "Feedback tells whether the message was understood.", "Communication Process"),
  question("Which approach is best for illiterate audience?", ["Simple language and pictures", "Complex jargon", "Only written English", "No demonstration"], "Simple language and pictures", "Simple visuals improve understanding.", "Health Education"),
  question("Which is counselling?", ["Helping client make informed decision", "Forcing decision", "Scolding client", "Ignoring privacy"], "Helping client make informed decision", "Counselling supports informed choices.", "Counselling"),
  question("Which is mass media?", ["Television", "One-to-one talk", "Bedside teaching only", "Ward round"], "Television", "Television reaches large groups.", "Media"),
  question("Which is interpersonal communication?", ["Face-to-face conversation", "Poster only", "Radio broadcast", "Newspaper"], "Face-to-face conversation", "Interpersonal communication occurs between people directly.", "Communication"),
  question("Which evaluates health education?", ["Checking behavior change", "Only distributing leaflets", "Ignoring doubts", "No follow-up"], "Checking behavior change", "Evaluation checks learning and behavior outcomes.", "Evaluation"),
  question("Which should be considered before teaching?", ["Learner needs", "Nurse preference only", "Room color only", "No timing"], "Learner needs", "Teaching should match learner needs.", "Teaching Plan"),
  question("Which is an advantage of demonstration?", ["Shows how to perform a skill", "Always needs no practice", "Cannot be observed", "Avoids learning"], "Shows how to perform a skill", "Demonstration is useful for skill teaching.", "Methods"),
  question("Which is a principle of communication?", ["Clarity", "Confusion", "Contradiction", "Secrecy always"], "Clarity", "Clear messages are easier to understand.", "Communication Principles"),
  question("Which is used for community health message?", ["Health talk", "Silent note only", "No interaction", "Private complaint"], "Health talk", "Health talks are used for group education.", "Health Education"),
  question("Which is an example of written AV aid?", ["Pamphlet", "Role play", "Radio", "Conversation"], "Pamphlet", "Pamphlets provide written health information.", "Audio Visual Aids"),
  question("Which makes counselling effective?", ["Privacy", "Public shaming", "Loud criticism", "Rushing"], "Privacy", "Privacy encourages openness and trust.", "Counselling"),
  question("Which is role play useful for?", ["Practicing communication situations", "Sterilizing articles", "Measuring BP", "Cooking food"], "Practicing communication situations", "Role play helps learn communication skills.", "Methods"),
  question("Which is a barrier due to language difference?", ["Semantic barrier", "Physical exercise", "Nutrition", "Sterilization"], "Semantic barrier", "Semantic barriers arise from meaning and language issues.", "Communication Barriers"),
  question("Which is included in communication process?", ["Sender, message, receiver", "Only thermometer", "Only syringe", "Only chart"], "Sender, message, receiver", "Communication includes sender, message, channel, receiver and feedback.", "Communication Process"),
  question("Which is the nurse's role in health education?", ["Motivate and guide people", "Hide preventive information", "Avoid community", "Stop counselling"], "Motivate and guide people", "Nurses educate, motivate and guide clients and communities.", "Nurse's Role")
];

const nutrition = [
  question("Nutrition is related to what?", ["Food and health", "Computer memory", "Grammar", "Bandaging"], "Food and health", "Nutrition studies food in relation to health.", "Introduction"),
  question("Which nutrient provides energy?", ["Carbohydrate", "Water only", "Mineral only", "Fiber only"], "Carbohydrate", "Carbohydrates are a main energy source.", "Nutrients"),
  question("Which nutrient builds and repairs tissues?", ["Protein", "Water", "Salt", "Vitamin C only"], "Protein", "Protein supports growth and tissue repair.", "Nutrients"),
  question("Which vitamin is important for vision?", ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], "Vitamin A", "Vitamin A supports normal vision.", "Vitamins"),
  question("Which mineral is needed for hemoglobin?", ["Iron", "Iodine", "Calcium", "Sodium"], "Iron", "Iron is required for hemoglobin formation.", "Minerals"),
  question("Which food group is body building?", ["Pulses and milk", "Sugar only", "Oil only", "Spices only"], "Pulses and milk", "Protein-rich foods are body building foods.", "Food Classification"),
  question("Which food group is protective?", ["Fruits and vegetables", "Sugar", "Oil", "Polished rice only"], "Fruits and vegetables", "Fruits and vegetables provide vitamins and minerals.", "Food Classification"),
  question("Balanced diet means what?", ["Diet containing all nutrients in proper amounts", "Only rice", "Only fruits", "Only tea"], "Diet containing all nutrients in proper amounts", "Balanced diet supplies all required nutrients.", "Balanced Diet"),
  question("Which condition is caused by protein energy malnutrition?", ["Marasmus", "Myopia", "Fracture", "Asthma"], "Marasmus", "Marasmus is a severe form of protein-energy malnutrition.", "Nutritional Deficiency"),
  question("Which deficiency causes anemia?", ["Iron deficiency", "Excess water", "Excess fiber", "Low salt only"], "Iron deficiency", "Iron deficiency commonly causes anemia.", "Deficiency Disorders"),
  question("Which diet is advised in hypertension?", ["Low sodium diet", "High salt diet", "Only fried food", "No fluids always"], "Low sodium diet", "Low sodium diet helps manage hypertension.", "Therapeutic Diet"),
  question("Which diet is useful in diabetes?", ["Controlled carbohydrate diet", "Unlimited sugar diet", "Only sweets", "Only oil"], "Controlled carbohydrate diet", "Diabetes diet controls carbohydrate intake.", "Therapeutic Diet"),
  question("Which is food preservation?", ["Drying", "Keeping food uncovered", "Spoiling", "Contaminating"], "Drying", "Drying reduces moisture and helps preserve food.", "Food Preservation"),
  question("Which is food adulteration?", ["Adding harmful inferior substance", "Cleaning food", "Cooking safely", "Storing properly"], "Adding harmful inferior substance", "Adulteration lowers quality and may harm health.", "Food Adulteration"),
  question("Which is community nutrition programme?", ["Midday meal programme", "Movie show", "Bus ticketing", "Bank loan"], "Midday meal programme", "Midday meal supports child nutrition.", "Community Nutrition"),
  question("Which food is rich in calcium?", ["Milk", "Sugar", "Oil", "Tea"], "Milk", "Milk is a good source of calcium.", "Minerals"),
  question("Which fluid is essential for body functions?", ["Water", "Kerosene", "Ink", "Perfume"], "Water", "Water is vital for body metabolism and temperature regulation.", "Water"),
  question("Which diet is soft and easy to chew?", ["Soft diet", "Regular hard diet", "High fiber raw diet", "Fried diet"], "Soft diet", "Soft diet is used when chewing or swallowing is difficult.", "Therapeutic Diet"),
  question("Which nutrient helps prevent constipation?", ["Fiber", "Sugar", "Oil", "Salt"], "Fiber", "Dietary fiber promotes bowel movement.", "Nutrients"),
  question("Which disease is related to iodine deficiency?", ["Goitre", "Rickets", "Scurvy", "Beriberi"], "Goitre", "Iodine deficiency can cause goitre.", "Deficiency Disorders"),
  question("Which deficiency causes scurvy?", ["Vitamin C", "Vitamin A", "Iron", "Calcium"], "Vitamin C", "Scurvy is caused by vitamin C deficiency.", "Vitamins"),
  question("Which food should be washed before eating?", ["Fruits and vegetables", "Sealed tablets", "Sterile gauze", "Notebook"], "Fruits and vegetables", "Washing reduces dirt and microbes.", "Food Hygiene"),
  question("Which is a low-cost nutritious food?", ["Khichdi", "Cold drink", "Chips only", "Candy"], "Khichdi", "Khichdi can provide cereals and pulses at low cost.", "Preparation"),
  question("Which agency is related to nutrition in India?", ["ICMR", "Cinema hall", "Police station", "Post office"], "ICMR", "ICMR provides nutrition-related guidance and research.", "Community Nutrition"),
  question("Which method evaluates food preparation skill?", ["Practical evaluation", "Only guessing", "No observation", "Skipping demonstration"], "Practical evaluation", "Food preparation skills are best assessed practically.", "Food Preparation")
];

const english = [
  question("English course aims to improve what?", ["Reading and communication", "Sterilization", "Drug dosage only", "Water testing"], "Reading and communication", "The syllabus focuses on spoken and written English.", "Introduction"),
  question("Which is part of grammar?", ["Parts of speech", "Blood pressure", "Food group", "Culture test"], "Parts of speech", "Grammar includes parts of speech and sentence structure.", "Grammar"),
  question("Which sentence starts with a capital letter and ends with a full stop?", ["Correct sentence", "Fragment only", "Prescription", "Chart"], "Correct sentence", "A complete written sentence uses proper capitalization and punctuation.", "Grammar"),
  question("Which skill is used in conversation?", ["Speaking", "Sterilizing", "Bandaging", "Calculating pulse only"], "Speaking", "Conversation develops spoken English.", "Spoken English"),
  question("Which is written communication?", ["Report writing", "Injection", "Hand washing", "Dressing"], "Report writing", "Reports are written communication.", "Writing"),
  question("Which is a listening skill?", ["Understanding spoken message", "Writing only", "Cooking", "Disinfection"], "Understanding spoken message", "Listening involves receiving and understanding spoken messages.", "Listening"),
  question("Which is used to build vocabulary?", ["Learning new words", "Skipping reading", "Avoiding speech", "Only drawing"], "Learning new words", "Vocabulary grows by learning and using words.", "Vocabulary"),
  question("Which is formal writing in nursing?", ["Nursing report", "Casual joke", "Shopping list", "Song lyrics"], "Nursing report", "Nursing reports need clear formal writing.", "Writing"),
  question("Which activity improves public speaking?", ["Speaking practice", "Silent reading only", "Avoiding audience", "No feedback"], "Speaking practice", "Practice improves fluency and confidence.", "Spoken English"),
  question("Which is a reading skill?", ["Comprehension", "Injection", "Dressing", "Sterilization"], "Comprehension", "Reading includes understanding written text.", "Reading"),
  question("Which is correct for patient report?", ["Clear and accurate language", "Ambiguous words", "No date", "No facts"], "Clear and accurate language", "Reports should be clear, factual and accurate.", "Report Writing"),
  question("Which is paraphrasing?", ["Restating in own words", "Copying blindly", "Deleting meaning", "Only translating numbers"], "Restating in own words", "Paraphrasing means expressing the same meaning in different words.", "Reading"),
  question("Which is a debate skill?", ["Presenting points clearly", "Shouting without reason", "No listening", "Ignoring topic"], "Presenting points clearly", "Debate requires organized expression and listening.", "Spoken English"),
  question("Which is translation?", ["Changing meaning from one language to another", "Giving injection", "Measuring pulse", "Cooking"], "Changing meaning from one language to another", "Translation communicates meaning across languages.", "Translation"),
  question("Which is an objective type assessment?", ["Multiple choice question", "Long ward duty", "Bed making", "Injection practice"], "Multiple choice question", "Objective assessment includes MCQs.", "Assessment"),
  question("Which improves pronunciation?", ["Speaking aloud with correction", "Never speaking", "Only writing", "Avoiding feedback"], "Speaking aloud with correction", "Pronunciation improves through practice and feedback.", "Spoken English"),
  question("Which is composition?", ["Organized written text", "Vital sign", "Food preservation", "Immunity"], "Organized written text", "Composition includes paragraphs, essays and letters.", "Composition"),
  question("Which writing is used for job application?", ["Formal letter", "Bed chart", "Drug label", "Food menu"], "Formal letter", "Applications use formal letter format.", "Letter Writing"),
  question("Which is note making?", ["Writing key points briefly", "Copying whole book", "Avoiding headings", "No organization"], "Writing key points briefly", "Notes summarize important points.", "Study Skills"),
  question("Which is important in communication?", ["Clarity", "Confusion", "Noise", "Contradiction"], "Clarity", "Clear language improves communication.", "Communication"),
  question("Which is a noun?", ["Nurse", "Quickly", "Blue", "Run"], "Nurse", "A noun names a person, place or thing.", "Grammar"),
  question("Which is a verb?", ["Care", "Hospital", "Patient", "Medicine"], "Care", "A verb shows action or state.", "Grammar"),
  question("Which is a paragraph?", ["Group of related sentences", "One random word", "Only punctuation", "A number only"], "Group of related sentences", "A paragraph develops one idea through related sentences.", "Composition"),
  question("Which helps in oral communication?", ["Eye contact", "Mumbling", "Looking away always", "No listening"], "Eye contact", "Appropriate eye contact supports communication.", "Communication"),
  question("Which is used in report evaluation?", ["Accuracy and completeness", "Color only", "Paper size only", "Handwriting only"], "Accuracy and completeness", "Reports are evaluated for accuracy, completeness and clarity.", "Report Writing")
];

const computerEducation = [
  question("Computer education gives basic understanding of what?", ["Uses of computers", "First aid only", "Nutrition only", "Sociology only"], "Uses of computers", "The syllabus focuses on computer basics and nursing applications.", "Introduction"),
  question("Which is computer hardware?", ["Keyboard", "MS Word", "Email", "File name"], "Keyboard", "Keyboard is a physical input device.", "Hardware"),
  question("Which is software?", ["MS Word", "Monitor", "Mouse", "Printer"], "MS Word", "MS Word is application software.", "Software"),
  question("Which device is used for output?", ["Monitor", "Keyboard", "Mouse", "Scanner input"], "Monitor", "Monitor displays output.", "Hardware"),
  question("Which storage device keeps data?", ["Hard disk", "Stethoscope", "Thermometer", "Bandage"], "Hard disk", "Hard disk stores data.", "Storage"),
  question("MS Word is mainly used for what?", ["Document preparation", "Measuring pulse", "Food cooking", "Sterilization"], "Document preparation", "MS Word is used to create and edit documents.", "MS Office"),
  question("MS Excel is mainly used for what?", ["Spreadsheets and calculations", "Wound dressing", "Counselling only", "Injection"], "Spreadsheets and calculations", "Excel organizes data in worksheets and performs calculations.", "MS Office"),
  question("PowerPoint is used to prepare what?", ["Presentations", "Bandages", "Medicines", "Specimens"], "Presentations", "PowerPoint is presentation software.", "MS Office"),
  question("Which is an internet service?", ["Email", "Autoclave", "Syringe", "Bedpan"], "Email", "Email sends messages through the internet.", "Internet"),
  question("Which is safe computer practice?", ["Use strong password", "Share password", "Open unknown attachments", "Ignore privacy"], "Use strong password", "Strong passwords protect data.", "Computer Safety"),
  question("Which computer use supports patient management?", ["Maintaining patient records", "Giving injections directly", "Replacing nurse care", "Cooking diet"], "Maintaining patient records", "Computers help store and retrieve patient data.", "Nursing Informatics"),
  question("Which is data processing?", ["Input, processing and output", "Only sleeping", "Only talking", "Only eating"], "Input, processing and output", "Computers process input into output.", "Data Processing"),
  question("Which is multimedia?", ["Text, images, audio and video", "Only paper", "Only food", "Only medicine"], "Text, images, audio and video", "Multimedia combines different media types.", "Multimedia"),
  question("Which is a web browser?", ["Chrome", "MS Paint only", "Calculator only", "Notepad only"], "Chrome", "Chrome is used to access websites.", "Internet"),
  question("Which command saves a file commonly?", ["Ctrl + S", "Ctrl + P only", "Alt + F4 only", "Delete"], "Ctrl + S", "Ctrl + S commonly saves files.", "Computer Basics"),
  question("Which is an input device?", ["Mouse", "Monitor", "Speaker", "Projector"], "Mouse", "Mouse is an input pointing device.", "Hardware"),
  question("Which is a printout device?", ["Printer", "Keyboard", "CPU", "Mouse"], "Printer", "Printer produces hard copy output.", "Hardware"),
  question("Which is an operating system?", ["Windows", "MS Word", "Email", "Spreadsheet cell"], "Windows", "Windows manages computer hardware and software.", "Operating System"),
  question("Which is a file extension for Word document?", [".docx", ".jpg", ".mp3", ".exe only"], ".docx", ".docx is commonly used for Word documents.", "MS Word"),
  question("Which is useful for hospital statistics?", ["Spreadsheet", "Bandage", "Thermometer", "Syringe"], "Spreadsheet", "Spreadsheets organize and calculate data.", "MS Excel"),
  question("Which is used to send official message electronically?", ["Email", "Injection", "Dressing", "Stethoscope"], "Email", "Email is electronic mail.", "Internet"),
  question("Which is a cyber safety rule?", ["Do not share OTP", "Share passwords publicly", "Use unknown links", "Disable security"], "Do not share OTP", "OTP and passwords must be kept private.", "Computer Safety"),
  question("Which is data retrieval?", ["Getting stored data when needed", "Deleting all files", "Breaking hardware", "Switching off always"], "Getting stored data when needed", "Retrieval means accessing stored information.", "Data Management"),
  question("Which is a presentation slide element?", ["Text and images", "Only injection", "Only medicine", "Only pulse"], "Text and images", "Slides can contain text, images and other media.", "PowerPoint"),
  question("Why are computers useful in nursing?", ["Fast records and information access", "They replace compassion", "They stop assessment", "They avoid care"], "Fast records and information access", "Computers help documentation, reports and patient information management.", "Nursing Informatics")
];

const quizData = {
  microbiology: makeSubject("Microbiology", microbiology),
  psychology: makeSubject("Psychology", psychology),
  sociology: makeSubject("Sociology", sociology),
  "fundamentals-of-nursing": makeSubject("Nursing Foundations", fundamentals),
  "first-aid": makeSubject("First Aid", firstAid),
  "community-health-nursing": makeSubject("Community Health Nursing I", communityHealth),
  "environmental-hygiene": makeSubject("Environmental Hygiene", environmentalHygiene),
  "health-education-communication": makeSubject("Health Education & Communication Skills", healthEducationCommunication),
  nutrition: makeSubject("Nutrition", nutrition),
  english: makeSubject("English", english),
  "computer-education": makeSubject("Computer Education", computerEducation)
};

export default quizData;
