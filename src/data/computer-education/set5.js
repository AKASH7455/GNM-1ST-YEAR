const set5 = [
  {
    id: 1,
    question: "Hospital me Electronic Health Record (EHR) implement karne ka sabse bada clinical fayda kya hai?",
    options: [
      "Patient information ka quick access",
      "Printer ki speed badhana",
      "Monitor resolution improve karna",
      "Keyboard replacement ko kam karna"
    ],
    answer: "Patient information ka quick access",
    explanation: "EHR se patient ki history, investigations aur treatment details turant mil jati hain. Isse clinical decision making fast aur accurate hoti hai.",
    topic: "EHR",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Nurse ko patient data ka monthly statistical report banana hai. Kaunsa software sabse suitable rahega?",
    options: [
      "MS Word",
      "Paint",
      "MS Excel",
      "Media Player"
    ],
    answer: "MS Excel",
    explanation: "MS Excel formulas, charts aur data analysis tools provide karta hai. Statistical reports ke liye ye standard software mana jata hai.",
    topic: "Spreadsheet",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Computer me malware infection hone ka ek common indication kya ho sakta hai?",
    options: [
      "Computer unusual slow hona",
      "Screen brightness stable rehna",
      "Printer normally kaam karna",
      "Mouse smoothly move karna"
    ],
    answer: "Computer unusual slow hona",
    explanation: "Malware background me resources consume karta hai jisse system performance slow ho sakti hai. Ye common warning sign hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Hospital network me data packets ko destination tak pahunchane ka kaam kaunsa device karta hai?",
    options: [
      "Monitor",
      "Router",
      "Scanner",
      "Speaker"
    ],
    answer: "Router",
    explanation: "Router network traffic ko manage karta hai aur data ko correct destination tak route karta hai.",
    topic: "Networking",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Patient confidentiality maintain karne ke liye nurse ko computer use karne ke baad kya karna chahiye?",
    options: [
      "System ko logout karna",
      "Wallpaper change karna",
      "Volume badhana",
      "Mouse disconnect karna"
    ],
    answer: "System ko logout karna",
    explanation: "Logout karne se unauthorized users patient records access nahi kar sakte. Ye basic security practice hai.",
    topic: "Data Security",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Computer me permanent storage ke liye sabse commonly kya use hota hai?",
    options: [
      "RAM",
      "Cache",
      "Hard Disk",
      "Register"
    ],
    answer: "Hard Disk",
    explanation: "Hard Disk long-term data storage provide karti hai. RAM aur Cache temporary memory hain.",
    topic: "Storage Devices",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Telemedicine ka use karte waqt sabse important ethical concern kya hai?",
    options: [
      "Patient privacy aur confidentiality",
      "Monitor size",
      "Internet cable color",
      "Keyboard layout"
    ],
    answer: "Patient privacy aur confidentiality",
    explanation: "Telemedicine me patient information digital form me transfer hoti hai, isliye confidentiality maintain karna essential hai.",
    topic: "Telemedicine",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "MS PowerPoint me animation feature ka main purpose kya hai?",
    options: [
      "Database create karna",
      "Presentation ko interactive banana",
      "Virus detect karna",
      "Operating system install karna"
    ],
    answer: "Presentation ko interactive banana",
    explanation: "Animations audience engagement improve karti hain aur concepts ko better explain karne me madad karti hain.",
    topic: "MS PowerPoint",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Hospital me barcode medication administration ka primary objective kya hai?",
    options: [
      "Medication errors reduce karna",
      "Printer maintenance karna",
      "Internet bandwidth badhana",
      "File compression karna"
    ],
    answer: "Medication errors reduce karna",
    explanation: "Barcode scanning patient aur medication verification me help karti hai, jisse medication safety improve hoti hai.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Computer virus se bachne ke liye unknown email attachment ke saath kya karna chahiye?",
    options: [
      "Turant open karna",
      "Forward kar dena",
      "Delete ya verify karna",
      "Sabko share karna"
    ],
    answer: "Delete ya verify karna",
    explanation: "Unknown attachments malware carry kar sakti hain. Verify karna ya delete karna safer practice hai.",
    topic: "Email Security",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Hospital database me backup schedule maintain karne ka primary reason kya hai?",
    options: [
      "Data recovery ensure karna",
      "Mouse performance improve karna",
      "Speaker volume control karna",
      "Monitor brightness adjust karna"
    ],
    answer: "Data recovery ensure karna",
    explanation: "Backup data loss ke baad records restore karne me help karta hai. Healthcare data ke liye ye critical hai.",
    topic: "Data Backup",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Kaunsa device document ko paper se digital form me convert karta hai?",
    options: [
      "Printer",
      "Scanner",
      "Speaker",
      "Projector"
    ],
    answer: "Scanner",
    explanation: "Scanner physical documents ko digital image ya PDF me convert karta hai.",
    topic: "Input Devices",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Hospital Information System (HIS) ka major objective kya hai?",
    options: [
      "Healthcare operations ko integrate karna",
      "Keyboard repair karna",
      "RAM replace karna",
      "Monitor manufacture karna"
    ],
    answer: "Healthcare operations ko integrate karna",
    explanation: "HIS patient care, billing, laboratory aur administration ko ek platform par connect karta hai.",
    topic: "Hospital Information System",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Cloud storage ka ek major risk kya ho sakta hai agar security weak ho?",
    options: [
      "Unauthorized data access",
      "Mouse overheating",
      "Printer paper jam",
      "Keyboard color change"
    ],
    answer: "Unauthorized data access",
    explanation: "Weak cloud security se confidential patient information unauthorized users tak pahunch sakti hai.",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Operating System ka primary function kya hai?",
    options: [
      "Hardware aur software ko manage karna",
      "Patient diagnosis karna",
      "Medicine prescribe karna",
      "Internet invent karna"
    ],
    answer: "Hardware aur software ko manage karna",
    explanation: "Operating System computer resources manage karta hai aur applications ko run karne ka environment provide karta hai.",
    topic: "Operating System",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Strong password me kaunsi characteristic honi chahiye?",
    options: [
      "Sirf naam use karna",
      "Letters, numbers aur symbols ka combination",
      "123456 use karna",
      "Sabke saath share karna"
    ],
    answer: "Letters, numbers aur symbols ka combination",
    explanation: "Complex password guess karna difficult hota hai aur account security ko improve karta hai.",
    topic: "Password Security",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Nursing research data ko organize karne ke liye database software ka main benefit kya hai?",
    options: [
      "Structured data management",
      "Monitor repair",
      "Printer setup",
      "Speaker testing"
    ],
    answer: "Structured data management",
    explanation: "Database software large amount of data ko efficiently organize aur retrieve karne me help karta hai.",
    topic: "Database",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Computer me Ctrl + V shortcut ka use kis liye hota hai?",
    options: [
      "Copy",
      "Paste",
      "Cut",
      "Print"
    ],
    answer: "Paste",
    explanation: "Ctrl + V clipboard me stored content ko desired location par paste karta hai.",
    topic: "Computer Basics",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Firewall ka primary role kya hai?",
    options: [
      "Network traffic ko filter karna",
      "Monitor ko clean karna",
      "RAM ko upgrade karna",
      "Keyboard ko configure karna"
    ],
    answer: "Network traffic ko filter karna",
    explanation: "Firewall suspicious traffic ko block karta hai aur network ko cyber threats se protect karta hai.",
    topic: "Network Security",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "E-learning platform ka nursing students ke liye major advantage kya hai?",
    options: [
      "Flexible aur self-paced learning",
      "Computer virus create karna",
      "Hard disk format karna",
      "Internet disable karna"
    ],
    answer: "Flexible aur self-paced learning",
    explanation: "E-learning students ko apni speed se padhne aur resources ko baar-baar access karne ki facility deta hai.",
    topic: "E-Learning",
    difficulty: "hard"
  }
];

export default set5;