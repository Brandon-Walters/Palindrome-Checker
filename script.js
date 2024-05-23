const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

function check() {
  const inputText = userInput.value.trim();
  if (!inputText) {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(inputText)) {
    result.textContent = inputText + " is a palindrome";
  } else {
    result.textContent = inputText + " is not a palindrome";
  }
}

checkButton.addEventListener("click", check);
