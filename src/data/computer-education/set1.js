const set1 = [
  {
    id: 1,
    question: "Hospital me patient data ko unauthorized access se bachane ke liye sabse effective nursing practice kaunsi hai?",
    options: [
      "Password ko staff ke saath share karna",
      "Strong password aur regular password change karna",
      "Computer hamesha login chhod dena",
      "Screen lock disable rakhna"
    ],
    answer: "Strong password aur regular password change karna",
    explanation: "Strong password patient data security ka important part hai. Password share karna ya system login chhodna confidentiality ko risk me daalta hai. Nursing documentation me data protection bahut zaroori hai.",
    topic: "Computer Security",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Aapko patient ki report turant doctor ko bhejni hai. Kis device ka use document ki hard copy ko digital form me convert karne ke liye kiya jata hai?",
    options: [
      "Plotter",
      "Scanner",
      "Speaker",
      "Projector"
    ],
    answer: "Scanner",
    explanation: "Scanner physical document ko digital image ya file me convert karta hai. Plotter output device hai jabki speaker aur projector reporting ke liye suitable nahi hain.",
    topic: "Input Devices",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Nurse electronic health record me data enter kar rahi hai. CPU ka primary role kya hota hai?",
    options: [
      "Data print karna",
      "Internet provide karna",
      "Instructions ko process karna",
      "Audio output dena"
    ],
    answer: "Instructions ko process karna",
    explanation: "CPU computer ka processing center hota hai jo instructions execute karta hai. Printing, networking aur audio output alag hardware components handle karte hain.",
    topic: "CPU",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Hospital information system me agar electrical power chali jaye to temporary data loss se bachane ke liye kya use kiya jata hai?",
    options: [
      "RAM",
      "ROM",
      "Pen Drive",
      "UPS"
    ],
    answer: "UPS",
    explanation: "UPS power failure ke samay temporary backup deta hai jisse system safely shutdown ho sakta hai. RAM aur ROM power backup devices nahi hain.",
    topic: "Computer Hardware",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Patient database me record search karte samay operating system ka kaunsa function sabse directly involve hota hai?",
    options: [
      "File management",
      "Paper printing",
      "Monitor cleaning",
      "Keyboard replacement"
    ],
    answer: "File management",
    explanation: "Operating system files ko organize aur retrieve karta hai. Search operation file management ka hi hissa hai. Baaki options OS ke core functions nahi hain.",
    topic: "Operating System",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Nurse presentation bana rahi hai jisme charts aur patient education slides hain. Kaunsa software sabse suitable hai?",
    options: [
      "MS Access",
      "MS PowerPoint",
      "MS Excel",
      "Notepad"
    ],
    answer: "MS PowerPoint",
    explanation: "PowerPoint presentations ke liye design kiya gaya hai. Excel calculation ke liye aur Access database management ke liye use hota hai.",
    topic: "Application Software",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Hospital network me malware infection detect hua hai. Sabse pehla preventive measure kya hona chahiye?",
    options: [
      "Antivirus update karna",
      "Monitor replace karna",
      "Printer disconnect karna",
      "Mouse change karna"
    ],
    answer: "Antivirus update karna",
    explanation: "Updated antivirus malware detection aur removal ke liye essential hai. Hardware replacement infection control ka direct solution nahi hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Patient census data ka statistical analysis karne ke liye kaunsa software sabse upyukt hai?",
    options: [
      "Paint",
      "WordPad",
      "MS Excel",
      "Media Player"
    ],
    answer: "MS Excel",
    explanation: "Excel formulas, charts aur data analysis tools provide karta hai. Statistical nursing reports ke liye ye commonly use hota hai.",
    topic: "Spreadsheet",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Computer memory me RAM ki khasiyat kya hai?",
    options: [
      "Permanent storage dena",
      "Data ko power off ke baad bhi rakhna",
      "Temporary working memory provide karna",
      "Virus remove karna"
    ],
    answer: "Temporary working memory provide karna",
    explanation: "RAM temporary memory hai jisme active programs aur data store hote hain. Power off hone par iska data erase ho jata hai.",
    topic: "Memory",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Hospital ke alag-alag departments ko ek building ke andar connect karne ke liye kis network ka use hota hai?",
    options: [
      "LAN",
      "MAN",
      "WAN",
      "PAN"
    ],
    answer: "LAN",
    explanation: "LAN ek limited geographical area jaise hospital building ko connect karta hai. WAN aur MAN larger areas ke liye hote hain.",
    topic: "Networking",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Electronic health record me patient ki confidential information ko protect karne ka ethical principle kya hai?",
    options: [
      "Confidentiality",
      "Entertainment",
      "Duplication",
      "Formatting"
    ],
    answer: "Confidentiality",
    explanation: "Confidentiality healthcare documentation ka core principle hai. Patient data sirf authorized personnel ke liye accessible hona chahiye.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Nurse ko monthly report type karni hai. Text document banane ke liye kaunsa software sabse suitable hai?",
    options: [
      "MS Word",
      "MS Access",
      "Paint",
      "Calculator"
    ],
    answer: "MS Word",
    explanation: "MS Word text editing aur document formatting ke liye standard software hai. Access database management ke liye use hota hai.",
    topic: "Word Processing",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Computer virus ka sabse common effect kya ho sakta hai?",
    options: [
      "System performance slow hona",
      "Monitor brightness badhna",
      "Keyboard size badalna",
      "Mouse wireless banna"
    ],
    answer: "System performance slow hona",
    explanation: "Virus files corrupt kar sakta hai aur system ko slow kar sakta hai. Hardware size ya type par iska direct effect nahi hota.",
    topic: "Computer Virus",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Internet par data transmission ke liye commonly use hone wala protocol kaunsa hai?",
    options: [
      "HTTP",
      "RAM",
      "CPU",
      "ROM"
    ],
    answer: "HTTP",
    explanation: "HTTP web communication ke liye use hota hai. RAM, CPU aur ROM hardware components hain, protocols nahi.",
    topic: "Internet",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Hospital me backup policy ka primary objective kya hota hai?",
    options: [
      "Data recovery ensure karna",
      "Keyboard cleaning karna",
      "Monitor resolution badhana",
      "Internet speed kam karna"
    ],
    answer: "Data recovery ensure karna",
    explanation: "Backup ka main purpose data loss ke baad information recover karna hai. Patient records ke liye ye bahut critical hai.",
    topic: "Data Backup",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Email bhejte samay multiple recipients ko address hide karke mail bhejne ke liye kis field ka use hota hai?",
    options: [
      "To",
      "CC",
      "BCC",
      "Subject"
    ],
    answer: "BCC",
    explanation: "BCC recipients ki identity dusre recipients se hide rakhta hai. Healthcare communication me privacy maintain karne ke liye useful hai.",
    topic: "Email",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nursing research data ko structured format me store karne ke liye sabse suitable software kaunsa hai?",
    options: [
      "MS Access",
      "Paint",
      "Media Player",
      "Calculator"
    ],
    answer: "MS Access",
    explanation: "MS Access database creation aur record management ke liye use hota hai. Research data ko organize karne me madad karta hai.",
    topic: "Database",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Hospital me Wi-Fi network use karte samay sabse bada security risk kya ho sakta hai?",
    options: [
      "Unauthorized access",
      "Printer ink khatam hona",
      "Monitor dust",
      "Mouse battery"
    ],
    answer: "Unauthorized access",
    explanation: "Weakly secured Wi-Fi network unauthorized users ko access de sakta hai. Isse patient data breach ka risk badh jata hai.",
    topic: "Network Security",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Computer generation ke context me Artificial Intelligence based systems kis generation se sabse adhik associated hain?",
    options: [
      "First generation",
      "Second generation",
      "Fifth generation",
      "Third generation"
    ],
    answer: "Fifth generation",
    explanation: "Fifth generation computers AI aur advanced processing concepts se jude hote hain. Earlier generations vacuum tubes, transistors aur ICs par based the.",
    topic: "Computer Generations",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Patient records ko cloud storage me rakhne ka ek major advantage kya hai?",
    options: [
      "Data ka remote access aur availability",
      "Computer ko virus dena",
      "RAM ko remove karna",
      "Keyboard usage band karna"
    ],
    answer: "Data ka remote access aur availability",
    explanation: "Cloud storage authorized users ko alag locations se data access karne ki suvidha deta hai. Healthcare coordination me ye kaafi useful hota hai.",
    topic: "Cloud Computing",
    difficulty: "hard"
  }
];

export default set1;