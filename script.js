const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function checkInput() {
  if (textInput.value === "") {
    alert(`Please input a value`);
    return;
  }
}

function cleanInputString(str) {
  const regex =/[^A-Za-z0-9]/g;
  return str.replace(regex, '').toLowerCase();
}

function checkPalindrome(str) {
  const cleanedStr = cleanInputString(str);
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

function calculateResult() {
  checkInput();
  if (checkPalindrome(textInput.value)) {
    result.innerHTML = `${textInput.value} is a palindrome`;
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome`;
  }
}

console.log(cleanInputString("A man, a plan, a canal. Panama"))
// console.log(checkPalindrome("0_0 (: /-\ :) 0-0"))

checkButton.addEventListener("click", calculateResult);