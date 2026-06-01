const set3 = [
  {
    id: 1,
    question: "Hospital me Electronic Health Record access karte waqt sabse pehla security step kya hona chahiye?",
    options: [
      "Unique username aur password se login karna",
      "Password sabhi staff ko batana",
      "System ko unlocked chhod dena",
      "Guest account use karna"
    ],
    answer: "Unique username aur password se login karna",
    explanation: "Unique credentials accountability maintain karte hain. Shared password se unauthorized access ka risk badhta hai.",
    topic: "Computer Security",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Nurse ko patient statistics ka graphical analysis karna hai. Kaunsa software sabse suitable hai?",
    options: [
      "Notepad",
      "MS Excel",
      "Paint",
      "WordPad"
    ],
    answer: "MS Excel",
    explanation: "MS Excel charts, formulas aur statistical calculations ke liye widely use hota hai. Healthcare reports me iska bahut upyog hota hai.",
    topic: "Spreadsheet",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Hospital network me data transmission ko encrypt karne ka primary purpose kya hai?",
    options: [
      "Internet speed badhana",
      "Storage kam karna",
      "Patient data ko unauthorized access se bachana",
      "Printer performance improve karna"
    ],
    answer: "Patient data ko unauthorized access se bachana",
    explanation: "Encryption data ko secure format me convert karta hai. Ye confidentiality aur privacy maintain karta hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Computer ka kaunsa component instructions ko execute karta hai?",
    options: [
      "Monitor",
      "Keyboard",
      "CPU",
      "Speaker"
    ],
    answer: "CPU",
    explanation: "CPU computer ka processing unit hai jo instructions execute karta hai aur calculations perform karta hai.",
    topic: "CPU",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Phishing attack ka common objective kya hota hai?",
    options: [
      "Sensitive information chori karna",
      "Monitor clean karna",
      "Printer install karna",
      "RAM upgrade karna"
    ],
    answer: "Sensitive information chori karna",
    explanation: "Phishing fake emails ya websites ke through passwords aur confidential data steal karne ki koshish karta hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Hospital ke alag departments ko ek hi building me connect karne ke liye kaunsa network use hota hai?",
    options: [
      "WAN",
      "MAN",
      "PAN",
      "LAN"
    ],
    answer: "LAN",
    explanation: "LAN limited geographical area jaise hospital building ko connect karta hai.",
    topic: "Networking",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Electronic prescription system ka sabse bada fayda kya hai?",
    options: [
      "Medication errors kam karna",
      "Keyboard replacement karna",
      "Internet remove karna",
      "Storage delete karna"
    ],
    answer: "Medication errors kam karna",
    explanation: "Electronic prescribing handwriting related mistakes aur dosage errors ko reduce karta hai.",
    topic: "E-Prescription",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Agar computer achanak power failure ka samna kare to temporary backup ke liye kya use kiya jata hai?",
    options: [
      "Scanner",
      "UPS",
      "Projector",
      "Webcam"
    ],
    answer: "UPS",
    explanation: "UPS short-term power backup provide karta hai aur data loss se bachata hai.",
    topic: "Computer Hardware",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Cloud computing ka healthcare me ek major advantage kya hai?",
    options: [
      "Remote access to records",
      "Mouse ki speed badhana",
      "Monitor size increase karna",
      "Keyboard ko wireless banana"
    ],
    answer: "Remote access to records",
    explanation: "Cloud systems authorized users ko alag locations se patient records access karne ki facility dete hain.",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "MS Word me document formatting ke liye sabse useful feature kaunsa hai?",
    options: [
      "Firewall",
      "Styles and Formatting",
      "Task Manager",
      "Recycle Bin"
    ],
    answer: "Styles and Formatting",
    explanation: "Styles and Formatting se documents professional aur consistent dikhte hain.",
    topic: "MS Word",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Patient information ko unauthorized modification se bachane ke liye kya zaroori hai?",
    options: [
      "Access control",
      "Wallpaper change",
      "Speaker installation",
      "Mouse cleaning"
    ],
    answer: "Access control",
    explanation: "Access control users ki permissions define karta hai aur sensitive data ko protect karta hai.",
    topic: "Data Security",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Kaunsi memory power off hone ke baad bhi data retain karti hai?",
    options: [
      "RAM",
      "Cache",
      "ROM",
      "Virtual Memory"
    ],
    answer: "ROM",
    explanation: "ROM non-volatile memory hai jisme startup instructions permanently store rehti hain.",
    topic: "Memory",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Telemedicine ka sabse important clinical benefit kya hai?",
    options: [
      "Remote consultation provide karna",
      "Printer speed increase karna",
      "Storage reduce karna",
      "Screen brightness control karna"
    ],
    answer: "Remote consultation provide karna",
    explanation: "Telemedicine distant patients ko healthcare services provide karne me madad karti hai.",
    topic: "Telemedicine",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Database management ke liye commonly kaunsa software use hota hai?",
    options: [
      "Paint",
      "MS Access",
      "Media Player",
      "Calculator"
    ],
    answer: "MS Access",
    explanation: "MS Access structured data ko organize aur manage karne ke liye use kiya jata hai.",
    topic: "Database",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Hospital me ransomware attack ka sabse serious effect kya ho sakta hai?",
    options: [
      "Patient records inaccessible ho jana",
      "Monitor brightness badhna",
      "Keyboard color change hona",
      "Mouse disconnect hona"
    ],
    answer: "Patient records inaccessible ho jana",
    explanation: "Ransomware files ko encrypt kar deta hai jisse patient care bhi impact ho sakti hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Internet par web pages access karne ke liye commonly kaunsa protocol use hota hai?",
    options: [
      "RAM",
      "CPU",
      "HTTP",
      "ROM"
    ],
    answer: "HTTP",
    explanation: "HTTP web browser aur web server ke beech communication ke liye use hota hai.",
    topic: "Internet",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Barcode system ka healthcare me primary use kya hai?",
    options: [
      "Patient identification improve karna",
      "Audio recording karna",
      "Video editing karna",
      "Internet sharing karna"
    ],
    answer: "Patient identification improve karna",
    explanation: "Barcode scanning medication administration aur patient identification errors ko reduce karti hai.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Computer virus se bachne ke liye sabse effective preventive measure kya hai?",
    options: [
      "Antivirus update rakhna",
      "Unknown files open karna",
      "Password share karna",
      "Firewall disable karna"
    ],
    answer: "Antivirus update rakhna",
    explanation: "Updated antivirus latest threats ko detect aur remove karne me madad karta hai.",
    topic: "Computer Security",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Hospital information system me audit trail ka purpose kya hai?",
    options: [
      "User activities ko track karna",
      "Monitor repair karna",
      "Printer replace karna",
      "Mouse configure karna"
    ],
    answer: "User activities ko track karna",
    explanation: "Audit trail se pata chalta hai kis user ne kab aur kya action perform kiya.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Email me BCC field ka use kis liye kiya jata hai?",
    options: [
      "Email recipients ko hidden rakhne ke liye",
      "Attachment delete karne ke liye",
      "Internet disconnect karne ke liye",
      "Font size change karne ke liye"
    ],
    answer: "Email recipients ko hidden rakhne ke liye",
    explanation: "BCC recipients ki identity dusre recipients ko visible nahi hoti. Privacy maintain karne ke liye iska use kiya jata hai.",
    topic: "Email",
    difficulty: "hard"
  }
];

export default set3;