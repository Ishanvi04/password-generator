//all elements that we need from html

const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengtHText = document.querySelector(".strength-container p");

//character sets
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numberCharacters = '0123456789';
const symbolCharacters = '!@#$%^&*()_+<>?:"{}|`=-\][/.,';

lengthSlider.addEventListener("input",()=>{
    lengthDisplay.textContent=lengthSlider.value;
});

generateButton.addEventListener("click",makePassword)
function makePassword() {
    const length = Number(lengthSlider.value)
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;


    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
        alert("Please select at least one char type");
        return;
    }
    const newPassword = createRandomPassword(length,includeUppercase,includeLowercase,includeNumbers,includeSymbols)

    passwordInput.value=newPassword;
}
 function createRandomPassword(length ,
     includeUppercase , 
     includeLowercase ,
      includeNumbers ,
       includeSymbols){

       
    let allCharacters="";
    //"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz and rest all the numbers and symbols"

    if(includeUppercase) allCharacters += uppercaseLetters;

    if(includeLowercase) allCharacters += lowercaseLetters;

    if(includeNumbers) allCharacters += numberCharacters;

    if(includeSymbols) allCharacters += symbolCharacters;
       let password = "";
       for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*allCharacters.length)
        password += allCharacters[randomIndex]
       }
       return password;
       }






