const set2 = [
  {
    id: 1,
    question: "Hospital me patient discharge summary ko PDF format me save karne ka sabse bada fayda kya hai?",
    options: [
      "File size hamesha zero ho jata hai",
      "Document format har device me same rehta hai",
      "Internet ki zarurat khatam ho jati hai",
      "Virus automatically remove ho jate hain"
    ],
    answer: "Document format har device me same rehta hai",
    explanation: "PDF ka major advantage format consistency hai. Kisi bhi system par file ka layout same dikhta hai. Baaki options PDF ka function nahi hain.",
    topic: "File Formats",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Nurse patient education material internet se download kar rahi hai. Malware risk kam karne ke liye kya karna chahiye?",
    options: [
      "Unknown links par click karna",
      "Antivirus disable karna",
      "Trusted sources se hi files download karna",
      "Sabhi attachments open karna"
    ],
    answer: "Trusted sources se hi files download karna",
    explanation: "Trusted websites se download karne se malware infection ka risk kam hota hai. Unknown files security threat create kar sakti hain.",
    topic: "Internet Safety",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Hospital me barcode system ka sabse important use kya hai?",
    options: [
      "Patient identification aur medication accuracy",
      "Monitor brightness control karna",
      "Keyboard speed badhana",
      "Speaker volume increase karna"
    ],
    answer: "Patient identification aur medication accuracy",
    explanation: "Barcode technology medication errors reduce karti hai aur patient identification ko accurate banati hai. Ye patient safety ka important part hai.",
    topic: "Health Informatics",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Computer me deleted file Recycle Bin me jane ke baad permanently remove karne ke liye kya karna hota hai?",
    options: [
      "Monitor restart karna",
      "Recycle Bin empty karna",
      "Mouse unplug karna",
      "Printer off karna"
    ],
    answer: "Recycle Bin empty karna",
    explanation: "Recycle Bin empty karne par file permanent deletion ke liye mark hoti hai. Sirf delete karne par file temporary store rehti hai.",
    topic: "File Management",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Nursing audit ke dauran electronic records me unauthorized modification detect hua. Is problem ko track karne ke liye kya useful hota hai?",
    options: [
      "Audit trail",
      "Screen saver",
      "Wallpaper",
      "Calculator"
    ],
    answer: "Audit trail",
    explanation: "Audit trail record karta hai ki kis user ne kab aur kya changes kiye. Healthcare documentation me accountability ke liye bahut important hai.",
    topic: "Electronic Records",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Computer me operating system load hone ki process ko kya kaha jata hai?",
    options: [
      "Formatting",
      "Booting",
      "Scanning",
      "Editing"
    ],
    answer: "Booting",
    explanation: "Booting system startup process hai jisme operating system memory me load hota hai. Iske bina computer functional nahi hota.",
    topic: "Operating System",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Patient data ko internet par secure transfer karne ke liye kaunsi technique sabse effective mani jati hai?",
    options: [
      "Encryption",
      "Copy Paste",
      "Formatting",
      "Defragmentation"
    ],
    answer: "Encryption",
    explanation: "Encryption data ko coded form me convert karta hai jisse unauthorized users information nahi padh sakte. Healthcare data security me iska major role hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Hospital me biometric authentication ka example kya hai?",
    options: [
      "Password login",
      "PIN number",
      "Fingerprint recognition",
      "Username entry"
    ],
    answer: "Fingerprint recognition",
    explanation: "Biometric authentication unique biological characteristics par based hoti hai. Fingerprint healthcare systems me commonly use hota hai.",
    topic: "Authentication",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "MS Excel me patient statistics ko visually present karne ke liye sabse useful feature kya hai?",
    options: [
      "Charts",
      "Spell Check",
      "Header",
      "Footnote"
    ],
    answer: "Charts",
    explanation: "Charts data trends ko visual form me dikhate hain. Nursing reports aur presentations me inka bahut use hota hai.",
    topic: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Hospital ke multiple branches ko connect karne ke liye kaunsa network suitable hai?",
    options: [
      "PAN",
      "LAN",
      "WAN",
      "USB"
    ],
    answer: "WAN",
    explanation: "WAN large geographical areas ko connect karta hai. Multiple hospitals ya branches ko connect karne ke liye WAN use hota hai.",
    topic: "Networking",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Agar ek nurse galti se phishing email open kar leti hai to sabse pehla action kya hona chahiye?",
    options: [
      "IT department ko inform karna",
      "Sabko email forward karna",
      "Password public kar dena",
      "Antivirus uninstall karna"
    ],
    answer: "IT department ko inform karna",
    explanation: "Phishing incident ko immediately report karna zaroori hai. Early response se security breach ko control kiya ja sakta hai.",
    topic: "Cyber Security",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Computer hardware aur software ke beech sambandh kya hai?",
    options: [
      "Dono independent hain",
      "Hardware software ke instructions execute karta hai",
      "Software bina hardware ke kaam karta hai",
      "Hardware internet ka doosra naam hai"
    ],
    answer: "Hardware software ke instructions execute karta hai",
    explanation: "Software instructions provide karta hai aur hardware unhe execute karta hai. Dono ek dusre ke bina useful nahi hote.",
    topic: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Electronic Medical Record (EMR) ka primary benefit kya hai?",
    options: [
      "Patient information ka quick retrieval",
      "Paper wastage badhana",
      "Data duplication badhana",
      "Network ko slow karna"
    ],
    answer: "Patient information ka quick retrieval",
    explanation: "EMR se patient history aur treatment details jaldi access ki ja sakti hain. Isse clinical decision making improve hoti hai.",
    topic: "EMR",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Computer me ROM ka main function kya hai?",
    options: [
      "Temporary memory provide karna",
      "Permanent startup instructions store karna",
      "Virus remove karna",
      "Internet connect karna"
    ],
    answer: "Permanent startup instructions store karna",
    explanation: "ROM non-volatile memory hai jisme startup instructions store rehte hain. Power off hone par bhi data retain rehta hai.",
    topic: "Memory",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Hospital management software kis category me aata hai?",
    options: [
      "System Software",
      "Utility Software",
      "Application Software",
      "Firmware"
    ],
    answer: "Application Software",
    explanation: "Hospital management software specific healthcare tasks perform karta hai. Isliye ise application software category me rakha jata hai.",
    topic: "Software",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Patient records ko accidental loss se bachane ke liye best practice kya hai?",
    options: [
      "Regular backups banana",
      "Files delete karna",
      "Password remove karna",
      "Storage disconnect karna"
    ],
    answer: "Regular backups banana",
    explanation: "Regular backup data recovery ke liye essential hai. Healthcare records ka backup legal aur clinical dono reasons se important hota hai.",
    topic: "Data Backup",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Hospital me telemedicine ka sabse direct benefit kya hai?",
    options: [
      "Remote consultation provide karna",
      "CPU speed badhana",
      "Printer ink bachana",
      "RAM ko replace karna"
    ],
    answer: "Remote consultation provide karna",
    explanation: "Telemedicine doctors aur patients ko remote communication ki facility deti hai. Rural healthcare me iska role bahut important hai.",
    topic: "Telemedicine",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Kaunsi storage device generally sabse portable mani jati hai?",
    options: [
      "Hard Disk Cabinet",
      "Pen Drive",
      "Motherboard",
      "SMPS"
    ],
    answer: "Pen Drive",
    explanation: "Pen Drive compact aur portable storage device hai. Data transfer ke liye commonly use ki jati hai.",
    topic: "Storage Devices",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Hospital network me firewall ka main purpose kya hai?",
    options: [
      "Unauthorized network traffic ko filter karna",
      "Printer ko repair karna",
      "Monitor clean karna",
      "Keyboard configure karna"
    ],
    answer: "Unauthorized network traffic ko filter karna",
    explanation: "Firewall network security ka important component hai jo suspicious traffic ko block karta hai aur system ko attacks se protect karta hai.",
    topic: "Network Security",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Nursing education ke liye Learning Management System (LMS) ka major advantage kya hai?",
    options: [
      "Online learning aur progress tracking",
      "Computer ko virus dena",
      "RAM remove karna",
      "Screen resolution kam karna"
    ],
    answer: "Online learning aur progress tracking",
    explanation: "LMS students ki learning activities aur progress monitor karne me madad karta hai. Nursing education me e-learning ka important tool hai.",
    topic: "E-Learning",
    difficulty: "hard"
  }
];

export default set2;