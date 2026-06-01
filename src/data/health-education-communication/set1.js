const set1 = [
  {
    id: 1,
    question: "Village me diarrhea outbreak ke dauran ANM health talk deti hai. Communication effective hone ka sabse important indicator kya hoga?",
    options: [
      "Sirf attendance zyada hona",
      "Pamphlet distribute ho jana",
      "Log ORS banana aur use karna shuru kar den",
      "Meeting ka duration lamba hona"
    ],
    answer: "Log ORS banana aur use karna shuru kar den",
    explanation: "Health education ka ultimate goal behavior change hota hai. Agar log ORS banana aur use karna shuru kar dete hain to communication successful mana jata hai. Attendance ya pamphlet distribution sirf process indicators hain. Clinical outcome aur practice change zyada important hote hain.",
    topic: "Behavior Change Communication",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Nurse diabetes patient ko insulin self-administration sikha rahi hai. Sabse pehla step kya hona chahiye?",
    options: [
      "Patient ki learning needs aur understanding assess karna",
      "Injection technique demonstrate karna",
      "Complications explain karna",
      "Written instructions dena"
    ],
    answer: "Patient ki learning needs aur understanding assess karna",
    explanation: "Teaching se pehle assessment karna nursing process ka important part hai. Isse patient ka knowledge level aur learning barriers pata chalte hain. Bina assessment ke education individualized nahi hoti. Isliye pehla step assessment hai.",
    topic: "Teaching-Learning Process",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Community meeting me speaker bol raha hai lekin audience confused lag rahi hai. Communication cycle me kis component ki kami sabse adhik sambhavit hai?",
    options: [
      "Channel",
      "Sender",
      "Message",
      "Feedback"
    ],
    answer: "Feedback",
    explanation: "Feedback communication ko two-way banata hai. Audience ki understanding feedback se verify hoti hai. Feedback na hone par sender ko pata nahi chalta ki message samjha gaya ya nahi. Isi wajah se confusion continue reh sakta hai.",
    topic: "Communication Process",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Aap tuberculosis awareness session me bahut technical medical terms use karte hain. Ye kis type ka communication barrier hai?",
    options: [
      "Environmental barrier",
      "Semantic barrier",
      "Physical barrier",
      "Psychological barrier"
    ],
    answer: "Semantic barrier",
    explanation: "Jab language ya terminology audience ki understanding se match nahi karti to semantic barrier hota hai. Complex medical terms message ko unclear bana dete hain. Effective health education ke liye simple language use karni chahiye.",
    topic: "Barriers to Communication",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "School health program me adolescent girls ko anemia prevention sikhaya ja raha hai. Kis method se active participation sabse zyada milegi?",
    options: [
      "Group discussion",
      "Lecture method",
      "Poster display",
      "Pamphlet distribution"
    ],
    answer: "Group discussion",
    explanation: "Group discussion learners ko actively involve karti hai. Participants questions pooch sakte hain aur apne experiences share kar sakte hain. Lecture aur posters comparatively passive methods hain. Participation learning ko improve karti hai.",
    topic: "Methods of Health Education",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Nurse patient ko smoking chhodne ke liye motivate kar rahi hai aur patient ke concerns dhyan se sun rahi hai. Kaunsi communication skill use ho rahi hai?",
    options: [
      "Criticism",
      "Giving orders",
      "Active listening",
      "Avoidance"
    ],
    answer: "Active listening",
    explanation: "Active listening me nurse patient ki baat dhyan se sunti hai aur uski feelings ko samajhne ki koshish karti hai. Isse trust build hota hai. Criticism aur orders therapeutic communication ko kamzor karte hain.",
    topic: "Therapeutic Communication",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Health worker ne vaccination ka message diya aur parents ne turant sawal poochna shuru kar diya. Ye kis communication pattern ka udaharan hai?",
    options: [
      "One-way communication",
      "Two-way communication",
      "Mass communication",
      "Formal communication"
    ],
    answer: "Two-way communication",
    explanation: "Jab sender aur receiver dono information exchange karte hain to two-way communication hoti hai. Questions aur responses feedback provide karte hain. Isse understanding aur retention improve hoti hai.",
    topic: "Types of Communication",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Community me dengue awareness ke liye TV campaign chalaya gaya. Ye kis method ka example hai?",
    options: [
      "Individual approach",
      "Group approach",
      "Interpersonal communication",
      "Mass communication"
    ],
    answer: "Mass communication",
    explanation: "TV, radio aur newspapers ek samay me bahut bade audience tak message pahunchate hain. Isliye ise mass communication kaha jata hai. Ye awareness badhane ke liye useful hai lekin individual feedback limited hota hai.",
    topic: "Mass Communication",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Nurse patient ki aankhon me dekhkar baat karti hai aur supportive posture maintain karti hai. Ye kis communication aspect ko strengthen karta hai?",
    options: [
      "Non-verbal communication",
      "Written communication",
      "Formal reporting",
      "Documentation"
    ],
    answer: "Non-verbal communication",
    explanation: "Eye contact, facial expression aur body posture non-verbal communication ke parts hain. Ye trust aur empathy convey karte hain. Kai baar non-verbal cues words se bhi zyada impact dalte hain.",
    topic: "Non-Verbal Communication",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Health education session ke baad nurse participants se practical demonstration karwati hai. Iska primary purpose kya hai?",
    options: [
      "Session ko lamba banana",
      "Attendance record karna",
      "Entertainment provide karna",
      "Learning aur skill acquisition evaluate karna"
    ],
    answer: "Learning aur skill acquisition evaluate karna",
    explanation: "Return demonstration se learner ki actual competency assess ki ja sakti hai. Sirf verbal response par depend karna kaafi nahi hota. Skill-based teaching me evaluation bahut important hai.",
    topic: "Evaluation of Health Education",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Ek patient repeatedly instructions bhool jata hai kyunki use diagnosis ka stress hai. Ye kis type ka barrier hai?",
    options: [
      "Physical barrier",
      "Psychological barrier",
      "Mechanical barrier",
      "Language barrier"
    ],
    answer: "Psychological barrier",
    explanation: "Fear, anxiety aur stress information processing ko affect karte hain. Isse patient instructions ko retain nahi kar pata. Nurse ko emotional support provide karna chahiye aur information ko simple parts me dena chahiye.",
    topic: "Communication Barriers",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Community health nurse pregnant women ko danger signs samjha rahi hai. Learning ko reinforce karne ke liye sabse effective strategy kya hogi?",
    options: [
      "Ek hi baar information dena",
      "Sirf chart display karna",
      "Key points repeat karna aur understanding verify karna",
      "Medical jargon use karna"
    ],
    answer: "Key points repeat karna aur understanding verify karna",
    explanation: "Reinforcement learning retention badhata hai. Understanding verify karne se misconceptions identify ho jati hain. Repetition aur feedback effective education ke essential components hain.",
    topic: "Health Teaching Principles",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Health educator session start karne se pehle audience ke cultural beliefs ke baare me jankari collect karta hai. Iska mukhya uddeshya kya hai?",
    options: [
      "Message ko audience ke context ke hisab se adapt karna",
      "Session ko formal banana",
      "Documentation complete karna",
      "Budget calculate karna"
    ],
    answer: "Message ko audience ke context ke hisab se adapt karna",
    explanation: "Cultural beliefs health behavior ko directly influence karte hain. Audience-centered education zyada acceptable aur effective hoti hai. Isi liye cultural assessment important mana jata hai.",
    topic: "Cultural Communication",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Nurse family planning session me flip chart ka use karti hai. Flip chart kis category me aata hai?",
    options: [
      "Audio aid",
      "Audio-visual aid",
      "Mass media",
      "Visual aid"
    ],
    answer: "Visual aid",
    explanation: "Flip chart ek visual teaching aid hai jo concepts ko samjhane me help karta hai. Isme sound component nahi hota. Visual aids attention aur retention dono improve karte hain.",
    topic: "Audio Visual Aids",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Patient kehta hai, 'Mujhe operation se bahut dar lag raha hai.' Nurse ka sabse therapeutic response kya hoga?",
    options: [
      "Darne ki koi baat nahi hai",
      "Aapko itna stress nahi lena chahiye",
      "Aap kis baat se sabse zyada chintit hain, mujhe batayiye",
      "Operation cancel kar dete hain"
    ],
    answer: "Aap kis baat se sabse zyada chintit hain, mujhe batayiye",
    explanation: "Open-ended question patient ko apni feelings express karne ka mauka deta hai. Therapeutic communication emotions explore karti hai. Reassurance dena bina assessment ke effective nahi hota.",
    topic: "Therapeutic Communication",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Health campaign me posters lagaye gaye lekin target population unhe padh nahi sakti. Sabse bada issue kya hai?",
    options: [
      "Budget problem",
      "Audience characteristics ko ignore kiya gaya",
      "Feedback zyada tha",
      "Message bahut short tha"
    ],
    answer: "Audience characteristics ko ignore kiya gaya",
    explanation: "Health education audience ke literacy level ke according honi chahiye. Agar log padh nahi sakte to posters ka impact kam ho jayega. Teaching methods learner-centered honi chahiye.",
    topic: "Principles of Health Education",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Village me sanitation improve karne ke liye local leaders aur community members ko planning me involve kiya gaya. Is approach ka major benefit kya hai?",
    options: [
      "Cost automatically zero ho jati hai",
      "Documentation ki zarurat nahi rehti",
      "Disease turant khatam ho jati hai",
      "Community ownership aur participation badhta hai"
    ],
    answer: "Community ownership aur participation badhta hai",
    explanation: "Community participation sustainable health programs ka key factor hai. Jab log planning me involve hote hain to acceptance aur compliance improve hoti hai. Long-term behavior change bhi better hota hai.",
    topic: "Community Participation",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Nurse patient se kehti hai, 'Apne shabdon me bataiye ki aap dawa kaise lenge.' Ye technique kya assess karti hai?",
    options: [
      "Patient ki understanding",
      "Patient ki hearing ability",
      "Patient ki income",
      "Patient ka blood pressure"
    ],
    answer: "Patient ki understanding",
    explanation: "Teach-back method patient comprehension assess karne ka effective tool hai. Isse nurse confirm kar sakti hai ki instructions sahi samjhi gayi hain ya nahi. Patient safety ke liye ye bahut useful hai.",
    topic: "Teach-Back Method",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Hospital me infection control awareness ke liye role play use kiya gaya. Role play ka sabse bada advantage kya hai?",
    options: [
      "Sirf theory cover karta hai",
      "Feedback ko rokta hai",
      "Real-life situations ka practice karwata hai",
      "Written records ko replace karta hai"
    ],
    answer: "Real-life situations ka practice karwata hai",
    explanation: "Role play experiential learning provide karta hai. Learners practical situations me decision making aur communication skills practice kar sakte hain. Isse retention aur confidence dono badhte hain.",
    topic: "Teaching Methods",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Health education program ki success evaluate karte waqt sabse strong evidence kya mana jayega?",
    options: [
      "Session me chairs bhar jana",
      "Target population ke health behavior me measurable sudhar",
      "Speaker ka experience",
      "Printed material ki quantity"
    ],
    answer: "Target population ke health behavior me measurable sudhar",
    explanation: "Behavior change aur health outcomes evaluation ke sabse meaningful indicators hote hain. Process measures useful hain lekin final goal nahi. Effective communication ka result measurable improvement hona chahiye.",
    topic: "Evaluation of Health Education",
    difficulty: "hard"
  }
];

export default set1;

// Answer Key:
// [3,1,4,2,1,3,2,4,1,4,2,3,1,4,3,2,4,1,3,2]

// Option 1 = 5
// Option 2 = 5
// Option 3 = 5
// Option 4 = 5