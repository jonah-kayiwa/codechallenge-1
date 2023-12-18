function gradeGenerator() {
  // lets prompt the user for input //
  let userInput = prompt("Enter the student's score (between 0 and 100):");

  //lets parse the input as a number
  let marks = parseFloat(userInput);

  // Check if the input is a valid number //
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Input isn't valid. Please enter a score in the range of 0 upto 100.");
    return;
  }

  // Determine the grade based on the specified ranges //
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Display the result //
  alert(`The student's grade is: ${grade}`);
}

// Call the function to prompt the user //
gradeGenerator();
