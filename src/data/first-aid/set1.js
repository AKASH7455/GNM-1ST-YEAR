const set1 = [
  {
    id: 1,
    question: "Road accident ke baad patient unconscious hai lekin cervical injury ka doubt hai. Airway maintain karne ke liye kaunsi technique prefer ki jati hai?",
    options: [
      "Head tilt-chin lift",
      "Patient ko baithana",
      "Jaw thrust maneuver",
      "Mouth me airway dal dena"
    ],
    answer: "Jaw thrust maneuver",
    topic: "Airway Management",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Severe external bleeding me first-aid ka sabse pehla objective kya hota hai?",
    options: [
      "Blood loss ko control karna",
      "Pain score assess karna",
      "Temperature check karna",
      "Medical history lena"
    ],
    answer: "Blood loss ko control karna",
    topic: "Bleeding Control",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Burn patient ke kapde skin se chipak gaye hain. First-aid provider ko kya karna chahiye?",
    options: [
      "Kapde kheenchkar hata dena",
      "Oil lagana",
      "Ice directly lagana",
      "Chipke huye kapde na hatana"
    ],
    answer: "Chipke huye kapde na hatana",
    topic: "Burn Management",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Epileptic seizure ke baad patient confused hai. Nurse ka priority action kya hoga?",
    options: [
      "Patient ko chalana",
      "Airway aur safety maintain karna",
      "Paani pilana",
      "Mouth me spoon dalna"
    ],
    answer: "Airway aur safety maintain karna",
    topic: "Neurological Emergency",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Suspected spinal injury wale patient ko move karte waqt sabse important principle kya hai?",
    options: [
      "Spine alignment maintain karna",
      "Patient ko khada karna",
      "Sir ko freely move karna",
      "Pair pehle uthana"
    ],
    answer: "Spine alignment maintain karna",
    topic: "Trauma Care",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Anaphylactic reaction me first-line emergency drug kaunsi mani jati hai?",
    options: [
      "Paracetamol",
      "Antacid",
      "Epinephrine",
      "Iron tablet"
    ],
    answer: "Epinephrine",
    topic: "Anaphylaxis",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Nosebleed ke dauran patient ko kis position me bithaya jata hai?",
    options: [
      "Head backward",
      "Forward lean position",
      "Flat supine",
      "Trendelenburg"
    ],
    answer: "Forward lean position",
    topic: "ENT Emergency",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Open chest wound me kaunsi dressing sabse appropriate hai?",
    options: [
      "Dry cotton",
      "Warm towel",
      "Elastic bandage",
      "Occlusive dressing"
    ],
    answer: "Occlusive dressing",
    topic: "Chest Trauma",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Shock patient me first-aid ka primary focus kya hona chahiye?",
    options: [
      "Airway, breathing aur circulation support",
      "Heavy meal dena",
      "Exercise karwana",
      "Patient ko chalana"
    ],
    answer: "Airway, breathing aur circulation support",
    topic: "Shock",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Eye me embedded foreign body ho to kya karna chahiye?",
    options: [
      "Object nikalna",
      "Eye wash se force karna",
      "Eye rub karna",
      "Eye shield karke refer karna"
    ],
    answer: "Eye shield karke refer karna",
    topic: "Eye Trauma",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Heat stroke ka sabse serious clinical sign kaunsa hai?",
    options: [
      "Mild sweating",
      "Normal BP",
      "Altered mental status",
      "Halki pyaas"
    ],
    answer: "Altered mental status",
    topic: "Heat Emergencies",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Chemical eye injury me sabse pehla intervention kya hai?",
    options: [
      "Eye patch",
      "Continuous irrigation",
      "Eye rub karna",
      "Antibiotic lagana"
    ],
    answer: "Continuous irrigation",
    topic: "Eye Injury",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Unconscious lekin breathing patient ko kis position me rakhna chahiye?",
    options: [
      "Prone",
      "Standing",
      "Supine",
      "Recovery position"
    ],
    answer: "Recovery position",
    topic: "Emergency Positioning",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Electrical injury victim ko touch karne se pehle kya ensure karna zaruri hai?",
    options: [
      "Current source disconnect karna",
      "Victim ko kheenchna",
      "Paani dalna",
      "Bandage lagana"
    ],
    answer: "Current source disconnect karna",
    topic: "Electrical Injury",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Arterial bleeding ko control karne ka sabse effective initial method kya hai?",
    options: [
      "Massage",
      "Elevation only",
      "Direct pressure lagana",
      "Ice lagana"
    ],
    answer: "Direct pressure lagana",
    topic: "Bleeding Control",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Poison ingestion ke baad bina medical advice ke kya avoid karna chahiye?",
    options: [
      "Emergency help lena",
      "Poison identify karna",
      "Patient observe karna",
      "Vomiting induce karna"
    ],
    answer: "Vomiting induce karna",
    topic: "Poisoning",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Severe choking wale conscious adult me first aid kya hai?",
    options: [
      "Heimlich maneuver",
      "Paani pilana",
      "Patient ko sulana",
      "Blind finger sweep"
    ],
    answer: "Heimlich maneuver",
    topic: "Airway Emergency",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Suspected cervical spine injury me patient ko move karne ke liye kaunsi technique use hoti hai?",
    options: [
      "Patient ko khada karna",
      "Log-roll technique",
      "Kandhe se kheenchna",
      "Pair pakadkar uthana"
    ],
    answer: "Log-roll technique",
    topic: "Trauma Care",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Head injury ke baad unequal pupils kis condition ka sanket ho sakte hain?",
    options: [
      "Normal recovery",
      "Intracranial pressure increase",
      "Mild dehydration",
      "Anxiety"
    ],
    answer: "Intracranial pressure increase",
    topic: "Head Injury",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "Fracture suspicion me affected limb ko stabilize karne ke liye kya use kiya jata hai?",
    options: [
      "Hot pack",
      "Massage",
      "Warm compress",
      "Splint"
    ],
    answer: "Splint",
    topic: "Fracture Care",
    difficulty: "medium"
  }
];

export default set1;