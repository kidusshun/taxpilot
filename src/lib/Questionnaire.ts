interface Questionnaire {
  [key: string]: {
    question: string;
    type: "multiple_choice" | "text_input" | "drop_down" | "Date";
    options?: string[]; // Only for multiple_choice and drop_down questions
    conditions: {
      [key: string]: string; // Maps response to the next question
    };
  };
}
