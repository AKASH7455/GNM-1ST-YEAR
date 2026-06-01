const set4 = [
  {
    id: 1,
    question: "Hospital me patient records ko accidental deletion se bachane ke liye sabse effective strategy kya hai?",
    options: [
      "Regular Data Backup",
      "Monitor Cleaning",
      "Screen Saver Lagana",
      "Printer Restart Karna"
    ],
    answer: "Regular Data Backup",
    explanation: "Regular backup se deleted ya corrupted records ko recover kiya ja sakta hai. Healthcare setting me patient data ka loss legal aur clinical dono problems create kar sakta hai.",
    topic: "Data Backup",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Nurse ko ek document ki exact copy print karni hai. Printer kis category ka device hai?",
    options: [
      "Input Device",
      "Output Device",
      "Storage Device",
      "Processing Device"
    ],
    answer: "Output Device",
    explanation: "Printer computer se information lekar paper par output deta hai. Isliye ise output device category me rakha jata hai.",
    topic: "Computer Hardware",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Electronic Health Record me patient ki allergy information sabse pehle dekhna kis principle ko support karta hai?",
    options: [
      "Cost Reduction",
      "Patient Safety",
      "Internet Security",
      "File Compression"
    ],
    answer: "Patient Safety",
    explanation: "Allergy information ko jaldi identify karna medication errors aur adverse reactions ko prevent karta hai. Ye patient safety ka important component hai.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Computer me operating system install karne se pehle hard disk ko prepare karne ki process kya kehlati hai?",
    options: [
      "Scanning",
      "Booting",
      "Formatting",
      "Uploading"
    ],
    answer: "Formatting",
    explanation: "Formatting storage media ko organize karti hai jisse operating system aur files properly store ki ja sakein.",
    topic: "Operating System",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Hospital network me unauthorized entry ko block karne ke liye sabse commonly kya use hota hai?",
    options: [
      "Firewall",
      "Paint",
      "Calculator",
      "Notepad"
    ],
    answer: "Firewall",
    explanation: "Firewall incoming aur outgoing traffic ko monitor karta hai aur suspicious access attempts ko block karta hai.",
    topic: "Network Security",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "MS PowerPoint me Slide Show mode ka primary purpose kya hai?",
    options: [
      "Database Banana",
      "Presentation Display Karna",
      "Virus Remove Karna",
      "File Compress Karna"
    ],
    answer: "Presentation Display Karna",
    explanation: "Slide Show mode audience ko presentation dikhane ke liye use hota hai. Education aur training sessions me iska bahut use hota hai.",
    topic: "MS PowerPoint",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Agar ek nurse galat password baar-baar enter karti hai aur account lock ho jata hai, to iska main purpose kya hai?",
    options: [
      "Unauthorized Access Rokna",
      "RAM Bachana",
      "Printer Speed Badhana",
      "Screen Brightness Kam Karna"
    ],
    answer: "Unauthorized Access Rokna",
    explanation: "Account lockout security feature hai jo brute-force attacks aur unauthorized login attempts ko reduce karta hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Computer me temporary files ko remove karne ke liye kaunsa utility tool commonly use hota hai?",
    options: [
      "Scanner",
      "Disk Cleanup",
      "Projector",
      "Joystick"
    ],
    answer: "Disk Cleanup",
    explanation: "Disk Cleanup unnecessary files remove karta hai aur storage space free karta hai. System performance bhi improve ho sakti hai.",
    topic: "Utility Software",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Hospital me online appointment booking system ka sabse bada advantage kya hai?",
    options: [
      "Patient Convenience",
      "CPU Temperature Control",
      "Keyboard Repair",
      "Monitor Calibration"
    ],
    answer: "Patient Convenience",
    explanation: "Online booking se patients easily appointments schedule kar sakte hain aur waiting time reduce hota hai.",
    topic: "Hospital Information System",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "RAM aur ROM me sabse important difference kya hai?",
    options: [
      "Dono Same Hain",
      "RAM Volatile Hai, ROM Non-Volatile Hai",
      "ROM Temporary Hai",
      "RAM Permanent Hai"
    ],
    answer: "RAM Volatile Hai, ROM Non-Volatile Hai",
    explanation: "RAM power off hone par data lose karti hai jabki ROM me data retain rehta hai. Ye exam me frequently pucha jane wala concept hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Patient data ko email ke through bhejte samay sabse pehle kis baat ka dhyan rakhna chahiye?",
    options: [
      "Recipient Address Verify Karna",
      "Font Change Karna",
      "Wallpaper Set Karna",
      "Mouse Connect Karna"
    ],
    answer: "Recipient Address Verify Karna",
    explanation: "Galat recipient ko confidential data bhejna privacy breach ho sakta hai. Verification mandatory hai.",
    topic: "Email Communication",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Computer me file ko ek location se doosri location par transfer karne ke liye commonly kya use kiya jata hai?",
    options: [
      "Cut and Paste",
      "Antivirus",
      "Firewall",
      "Screen Saver"
    ],
    answer: "Cut and Paste",
    explanation: "Cut and Paste file ko move karne ka common method hai. Ye file management ka basic lekin important concept hai.",
    topic: "File Management",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Telehealth consultation ke dauran patient identity verify karna kis reason se zaroori hai?",
    options: [
      "Correct Patient Care Ensure Karna",
      "Internet Speed Badhana",
      "Storage Kam Karna",
      "Monitor Test Karna"
    ],
    answer: "Correct Patient Care Ensure Karna",
    explanation: "Identity verification se wrong patient consultation aur documentation errors prevent hote hain.",
    topic: "Telehealth",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Computer virus ka ek common symptom kya ho sakta hai?",
    options: [
      "Fast Performance",
      "System Slow Hona",
      "RAM Increase Hona",
      "Storage Double Hona"
    ],
    answer: "System Slow Hona",
    explanation: "Virus system resources consume karta hai aur performance degrade kar sakta hai. Ye common warning sign hai.",
    topic: "Computer Virus",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Electronic Medical Record ka sabse bada clinical benefit kya hai?",
    options: [
      "Patient History Jaldi Access Karna",
      "Monitor Upgrade Karna",
      "Printer Ink Bachana",
      "CPU Replace Karna"
    ],
    answer: "Patient History Jaldi Access Karna",
    explanation: "EMR healthcare providers ko complete patient history instantly provide karta hai jisse better clinical decisions liye ja sakte hain.",
    topic: "EMR",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Computer network me URL ka use kis liye hota hai?",
    options: [
      "Web Resource Ka Address Dene Ke Liye",
      "RAM Measure Karne Ke Liye",
      "CPU Repair Karne Ke Liye",
      "Printer Connect Karne Ke Liye"
    ],
    answer: "Web Resource Ka Address Dene Ke Liye",
    explanation: "URL internet par kisi website ya resource ka unique address hota hai.",
    topic: "Internet",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Hospital database me duplicate patient records ka major risk kya hai?",
    options: [
      "Clinical Errors Aur Confusion",
      "Screen Brightness Kam Hona",
      "Keyboard Hang Hona",
      "Mouse Slow Hona"
    ],
    answer: "Clinical Errors Aur Confusion",
    explanation: "Duplicate records se wrong treatment decisions aur documentation errors ho sakte hain.",
    topic: "Database Management",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Pen Drive kis type ki storage device hai?",
    options: [
      "Portable Storage Device",
      "Output Device",
      "Input Device",
      "Processing Device"
    ],
    answer: "Portable Storage Device",
    explanation: "Pen Drive removable aur portable storage device hai jo data transfer ke liye use hoti hai.",
    topic: "Storage Devices",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Strong password banate samay sabse important recommendation kya hai?",
    options: [
      "Letters, Numbers Aur Symbols Ka Combination",
      "Sirf Naam Use Karna",
      "123456 Use Karna",
      "Password Share Karna"
    ],
    answer: "Letters, Numbers Aur Symbols Ka Combination",
    explanation: "Complex passwords guess karna difficult hota hai aur account security ko improve karte hain.",
    topic: "Password Security",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Nursing education me Computer Assisted Learning ka major benefit kya hai?",
    options: [
      "Interactive Learning Experience",
      "Internet Band Karna",
      "Printer Disable Karna",
      "RAM Remove Karna"
    ],
    answer: "Interactive Learning Experience",
    explanation: "Computer Assisted Learning students ko interactive content aur self-paced learning opportunities provide karta hai.",
    topic: "Computer Assisted Learning",
    difficulty: "hard"
  }
];

export default set4;