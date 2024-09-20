//3.  Write a program in javascript to accept only indian phone number
function indianPhoneNumber(phoneNumber) {
  const indianPhoneNumber = / [6-9] \d{ 9} $/;

  if (indianPhoneNumber.test(phoneNumber)) {
    return "valid indian phone number";
  } else {
    return "invalid phone number enter a valid  phone number";
  }
}
const inputPhoneNumber = "6203416219";
console.log(indianPhoneNumber(inputPhoneNumber));
