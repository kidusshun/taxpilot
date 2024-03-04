import { usStates, worldCountries } from "./dropDownLists";
export const questionnaire: Questionnaire = {
  q1: {
    question: "Which one best explains you?",
    type: "multiple_choice",
    options: ["Individual", "Company"],
    conditions: {
      Individual: "q2",
      Company: "q86",
    },
  },
  q2: {
    question: "What is your email?",
    type: "text_input",
    conditions: {
      continue: "q3",
    },
  },
  q3: {
    question: "How many states did you live in?",
    type: "multiple_choice",
    options: ["1", "2"],
    conditions: {
      "1": "q4",
      "2": "q5",
    },
  },
  q4: {
    question: "What is the state you lived in?",
    type: "drop_down",
    options: usStates,
    conditions: {
      continue: "q6",
    },
  },
  q5: {
    question: "What state did you live in?",
    type: "drop_down",
    options: usStates,
    conditions: {
      continue: "q4",
    },
  },
  q6: {
    question: "Are you single or married?",
    type: "multiple_choice",
    options: ["Single", "Married"],
    conditions: {
      Single: "q8",
      Married: "q7",
    },
  },
  q7: {
    question: "Are you filing jointly or separately?",
    type: "multiple_choice",
    options: ["Joint", "Separate"],
    conditions: {
      continue: "q8",
    },
  },
  q8: {
    question: "Do you have any dependants?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q9",
    },
  },
  q9: {
    question: "Do you have health insurance?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q10",
    },
  },
  q10: {
    question: "What is your nationality?",
    type: "drop_down",
    options: worldCountries,
    conditions: {
      continue: "q11",
    },
  },
  q11: {
    question: "Did you file your taxes in the USA last year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q12",
    },
  },
  q12: {
    question: "What is your full Name?",
    type: "text_input",
    conditions: {
      continue: "q13",
    },
  },
  q13: {
    question: "What is your birth date?",
    type: "Date",
    conditions: {
      continue: "q14",
    },
  },
  q14: {
    question: "What is your SSN?",
    type: "text_input",
    conditions: {
      continue: "q15",
    },
  },
  q15: {
    question: "What is your VISA status?",
    type: "text_input",
    conditions: {
      continue: "q16",
    },
  },
  q16: {
    question: "VISA Status as of 31st Dec, 2022?",
    type: "text_input",
    conditions: {
      continue: "q17",
    },
  },
  q17: {
    question:
      "Did you have any change in VISA status during the year 2022? (If yes, please specify 'from - to')?",
    type: "text_input",
    conditions: {
      continue: "q18",
    },
  },
  q18: {
    question: "What is your current Communication Address?",
    type: "text_input",
    conditions: {
      continue: "q19",
    },
  },
  q19: {
    question:
      "Have you resided in more than one state in the past three tax years? (2020, 2021 & 2022)",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q20",
      No: "q23",
    },
  },
  q20: {
    question:
      "What states did you reside in during the year of 2022? and state your period of stay(from-to)",
    type: "text_input",
    conditions: {
      continue: "q21",
    },
  },
  q21: {
    question:
      "What states did you reside in during the year of 2021? and state your period of stay(from-to)",
    type: "text_input",
    conditions: {
      continue: "q22",
    },
  },
  q22: {
    question:
      "What states did you reside in during the year of 2020? and state your period of stay(from-to)",
    type: "text_input",
    conditions: {
      continue: "q23",
    },
  },
  q23: {
    question:
      "Amount of Rent Paid (Please enter 0 if no rent paid during the year)",
    type: "text_input",
    conditions: {
      continue: "q24",
    },
  },
  q24: {
    question: "Did you incur any medical expenses?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q25",
      No: "q31",
    },
  },
  q25: {
    question: "How much did you incur in Prescription Medications?",
    type: "text_input",
    conditions: {
      continue: "q26",
    },
  },
  q26: {
    question: "How much did you incur in Health insurance Premiums?",
    type: "text_input",
    conditions: {
      continue: "q27",
    },
  },
  q27: {
    question: "How much did you incur in Doctors, Dentists, etc?",
    type: "text_input",
    conditions: {
      continue: "q28",
    },
  },
  q28: {
    question: "How much did you incur in hospitals, Clinics, etc?",
    type: "text_input",
    conditions: {
      continue: "q29",
    },
  },
  q29: {
    question: "How much did you incur in eyeglasses and Contact Lenses?",
    type: "text_input",
    conditions: {
      continue: "q30",
    },
  },
  q30: {
    question: "How much did you incur in material expenses, if any?",
    type: "text_input",
    conditions: {
      continue: "q31",
    },
  },
  q31: {
    question: "Did you pay any property taxes?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q32",
      No: "q37",
    },
  },
  q32: {
    question: "How much did you incur in Real Estate Taxes?",
    type: "text_input",
    conditions: {
      continue: "q33",
    },
  },
  q33: {
    question:
      "How much did you incur in state and local personal property taxes?",
    type: "text_input",
    conditions: {
      continue: "q34",
    },
  },
  q34: {
    question: "How much did you incur in other taxes, if any?",
    type: "text_input",
    conditions: {
      continue: "q35",
    },
  },
  q35: {
    question:
      "How much did you incur in Addistional State Taxes paid while filing last year taxes?",
    type: "text_input",
    conditions: {
      continue: "q36",
    },
  },
  q36: {
    question: "How much did you incur in other taxes, if any?",
    type: "text_input",
    conditions: {
      continue: "q37",
    },
  },
  q37: {
    question: "Did you pay any Home mortgage interest?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q38",
      No: "q45",
    },
  },
  q38: {
    question:
      "How much did you incur home mortgage interest paid in USA - upload from 1098?",
    type: "text_input",
    conditions: {
      continue: "q39",
    },
  },
  q39: {
    question: "Points, if any?",
    type: "text_input",
    conditions: {
      continue: "q40",
    },
  },
  q40: {
    question:
      "Did you pay Home Mortgage Interest in Resident Country (Eg. India)?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q41",
      No: "q45",
    },
  },
  q41: {
    question: "Bank Name (Foreign)?",
    type: "text_input",
    conditions: {
      continue: "q42",
    },
  },
  q42: {
    question: "Bank Address (Foreign)?",
    type: "text_input",
    conditions: {
      continue: "q43",
    },
  },
  q43: {
    question: "Mortgage Insurance Premiums paid, if any?",
    type: "text_input",
    conditions: {
      continue: "q44",
    },
  },
  q44: {
    question: "Investment interest?",
    type: "text_input",
    conditions: {
      continue: "q45",
    },
  },
  q45: {
    question: "Did you have any rental income?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q45",
      No: "q53",
    },
  },
  q46: {
    question: "Property tax?(residential/commercial)?",
    type: "multiple_choice",
    options: ["Residential", "Commercial"],
    conditions: {
      continue: "q47",
    },
  },
  q47: {
    question: "Location/Address?",
    type: "text_input",
    conditions: {
      continue: "q48",
    },
  },
  q48: {
    question: "Number of months rented in a year?",
    type: "text_input",
    conditions: {
      continue: "q49",
    },
  },
  q49: {
    question: "Number of months you used for personal purpose?",
    type: "text_input",
    conditions: {
      continue: "q50",
    },
  },
  q50: {
    question: "Property is owned by?",
    type: "multiple_choice",
    options: ["TaxPayer", "Joint", "Spouse"],
    conditions: {
      continue: "q51",
    },
  },
  q51: {
    question: "Date the property is purchased?",
    type: "Date",
    conditions: {
      continue: "q52",
    },
  },
  q52: {
    question: "Rental expenses incurred to earn rent, if any?",
    type: "text_input",
    conditions: {
      continue: "q53",
    },
  },
  q53: {
    question: "Did you do any Charitable Contributions?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q55",
      No: "q57",
    },
  },
  q55: {
    question:
      "State the institutions, amount donated, item/property donated, FMV of Property Donated, number of trips driven and one way distance?",
    type: "text_input",
    conditions: {
      continue: "q56",
    },
  },
  q56: {
    question: "Did you sell any shares/securities/cryptocurrency?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q57",
    },
  },
  q57: {
    question:
      "Do you have Educator Expenses - only for Teaching profession ($ 250)?",
    type: "text_input",
    conditions: {
      continue: "q58",
    },
  },
  q58: {
    question: "Do you have Health savings account Contribution?",
    type: "text_input",
    conditions: {
      continue: "q59",
    },
  },
  q59: {
    question: "Do you have Penalty on early withdrawal of saving?",
    type: "text_input",
    conditions: {
      continue: "q60",
    },
  },
  q60: {
    question: "Do you have Contribution towards Traditional IRA for 2022?",
    type: "text_input",
    conditions: {
      continue: "q61",
    },
  },
  q61: {
    question: "Do you have Student loan interest deduction?",
    type: "text_input",
    conditions: {
      continue: "q62",
    },
  },
  q62: {
    question: "Do you have Tuition & Fees?",
    type: "text_input",
    conditions: {
      continue: "q63",
    },
  },
  q63: {
    question: "Do you have Gambling losses?",
    type: "text_input",
    conditions: {
      continue: "q64",
    },
  },

  q64: {
    question: "Do you have Dec 2022 - Paystub document?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q65",
    },
  },
  q65: {
    question:
      "Do you have Wage Income - Form W2 / Corrected W2 (Mandatory) document?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q66",
    },
  },
  q66: {
    question: "Do you have Interest Income - Form 1099-INT document?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q67",
    },
  },
  q67: {
    question: "Do you have Dividend Income - Form 1099-DIV?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q68",
    },
  },
  q68: {
    question: "Do you have State Tax Refund - Form 1099-G?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q69",
    },
  },
  q69: {
    question: "Do you have State Tax Refund - Form 1099-G?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q70",
    },
  },
  q70: {
    question:
      "Do you have State Self - Employment Income / Business Income - Form 1099-MISC?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q71",
    },
  },
  q71: {
    question:
      "Do you have Purchase & Sale of Shares / Securities - Form 1099-B?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q72",
    },
  },
  q72: {
    question: "Do you have Retirement Distributions - Form 1099-R?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q73",
    },
  },
  q73: {
    question: "Do you have Income from S-Corp / LLP / LLC - Schedule K1?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q74",
    },
  },
  q74: {
    question: "Do you have Rental Income from US Property?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q75",
    },
  },
  q75: {
    question: "Do you have Foreign Tax Certificate - (Foreign Income - 2022)?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q76",
    },
  },
  q76: {
    question: "Do you have Student Loan Interest - Form 1098-E?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q77",
    },
  },
  q77: {
    question: "Do you have Home Mortgage Interest - Form 1098?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q78",
    },
  },
  q78: {
    question:
      "Do you have Prior Year Federal & State Tax Return (if New Client) (Mandatory)?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q79",
    },
  },
  q79: {
    question: "Do you have Form 1042's?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q80",
    },
  },
  q80: {
    question: "Do you have Form 1095 (A/B/C)?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q81",
    },
  },
  q81: {
    question: "What is your Bank Name(needed for direct deposit of refund)?",
    type: "text_input",
    conditions: {
      continue: "q82",
    },
  },
  q82: {
    question: "What is your Routing Number?",
    type: "text_input",
    conditions: {
      continue: "q83",
    },
  },
  q83: {
    question: "What is your Account Number?",
    type: "text_input",
    conditions: {
      continue: "q84",
    },
  },
  q84: {
    question: "What is your Account Type (Savings / Checking)?",
    type: "text_input",
    conditions: {
      continue: "q85",
    },
  },
  q85: {
    question: "What is your Account Owner Name?",
    type: "text_input",
    conditions: {
      continue: "end",
    },
  },

  q86: {
    question: "What is your company's structure?",
    type: "multiple_choice",
    options: ["LLC", "S-corp", "C-corp"],
    conditions: {
      LLC: "q87",
      "S-corp": "q95",
      "C-corp": "q102",
    },
  },
  q87: {
    question: "What is your email?",
    type: "text_input",
    conditions: {
      continue: "q88",
    },
  },
  q88: {
    question: "Number of members in your LLC?",
    type: "multiple_choice",
    options: ["Single Member", "Multiple Member"],
    conditions: {
      "Single Member": "q89",
      "Multiple Member": "q90",
    },
  },
  q89: {
    question: "Is the member a citizen of USA?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q91",
    },
  },
  q90: {
    question: "Is any of the member a citizen of USA?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q91",
    },
  },
  q91: {
    question:
      "Were your previous year taxes filed? Please select no if LLC is formed this year.",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q93",
      No: "q92",
    },
  },
  q92: {
    question: "Was this LLC formed this year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q93",
    },
  },
  q93: {
    question: "Have you prepared financials for the current financial year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q94",
    },
  },
  q94: {
    question: "List all of the states where you sell services/goods?",
    type: "text_input",
    conditions: {
      continue: "end",
    },
  },
  q95: {
    question: "what is your email?",
    type: "text_input",
    conditions: {
      continue: "q96",
    },
  },
  q96: {
    question: "Did you file the returns last year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q98",
      No: "q97",
    },
  },
  q97: {
    question: "Was the S-corp incorporated in 2022?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q98",
    },
  },
  q98: {
    question: "Was the there any change in Ownership Structure in 2022?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "end",
      No: "q99",
    },
  },
  q99: {
    question: "Was the there any capital infusion this year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q100",
    },
  },
  q100: {
    question: "Was the there any Capital withdrawal this year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q101",
    },
  },
  q101: {
    question: "Was the there related party transaction?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "end",
    },
  },
  q102: {
    question: "What is your email?",
    type: "text_input",
    conditions: {
      continue: "q103",
    },
  },
  q103: {
    question: "Did you file the returns last year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "q106",
      No: "q104",
    },
  },
  q104: {
    question: "Was the C-corp incorporated this year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      Yes: "end",
      No: "q105",
    },
  },
  q105: {
    question: "Was there any change in ownership structure this year?",
    type: "multiple_choice",
    options: ["Yes", "No"],
    conditions: {
      continue: "q99",
    },
  },
  // Add more questions here...
};

// Start the questionnaire
// let currentQuestionId = "q1";
// const questionAnswer : {[key: string] : string} = {};

// while (currentQuestionId !== "end") {
//   const currQuestion = questionnaire[currentQuestionId];
//   console.log(currQuestion["question"]);
//   if (currQuestion["type"] === "multiple_choice") {
//     console.log("Options: " + currQuestion["options"]!.join(", "));
//   }
//   const userResponse = prompt("Your response: ");
//   if (userResponse === null){
//     break;
//   }
//   currentQuestionId =
//     currQuestion["conditions"]["continue"] ||
//     currQuestion["conditions"][userResponse] ||
//     "end";
//   questionAnswer[currQuestion["question"]] = userResponse;
// }
