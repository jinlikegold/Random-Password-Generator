const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("button-el")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

buttonEl.addEventListener("click", passwordsGo)

let characterLength = 15

function generateRandomChar() {
       let randomIndex = Math.floor(Math.random() * characters.length)
       return characters[randomIndex]
}

function generateRandomPassword() {
    // we want this function to give us 15 digits of generateRandomNumber()
     let randomPassword = ""
     for (let i = 0; i < characterLength; i++) {
         randomPassword += generateRandomChar() 
     }  
     return randomPassword   
}

function passwordsGo() {
    passOne.textContent = generateRandomPassword()
    passTwo.textContent = generateRandomPassword()
}
