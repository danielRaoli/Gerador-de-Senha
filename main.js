
const inputPassword = document.querySelector('#password');
const passwordLenght = document.querySelector('#password-lenght');
const btnCopy = document.querySelector('#btn-copy')
const spanLenght = document.querySelector('#text-lenght')
const checkUpper = document.querySelector('#check-upper')
const checkNumbers = document.querySelector('#check-number')
const checkSimbols = document.querySelector('#check-simbols')
const securityBar = document.querySelector('#value-bar')
const btnRegenerate = document.querySelector('#btn-regenerate')

let lenght = passwordLenght.value;  

const VerifySecurity = () =>{
    const percentage = 
    ((checkUpper.checked ? 25 : 0) +
     (checkNumbers.checked ? 25 : 0)+
     (checkSimbols.checked ? 25 : 0))+
     ((lenght/64) * 25);

     if(percentage <= 45 ){
        securityBar.classList.remove('-medium')
        securityBar.classList.remove('-safe')
        securityBar.classList.add('-danger')
     }
     else if( percentage > 45 && percentage <= 70){
        securityBar.classList.remove('-danger')
        securityBar.classList.remove('-safe')
        securityBar.classList.add('-medium')
        
     }else if(percentage > 70 && percentage <=100){
        securityBar.classList.remove('-danger')
        securityBar.classList.remove('-medium')
        securityBar.classList.add('-safe')
     }

    securityBar.style.width = `${percentage}%`

}

const GeneratePassword = (lenght=8) =>{
    let chars = "abcdefghjkmnpqrstuvwxyz"

    const charsUpper = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const charnNumbers = "123456789"
    const charSimbols = "?!@&*()[]"

    if(checkUpper.checked){
        chars += charsUpper
    }
    if(checkSimbols.checked){
        chars += charSimbols
    }
    if(checkNumbers.checked){
        chars += charnNumbers
    }

 
    let password = "";

    for(let i=0 ; i < lenght ; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1)
    }

    inputPassword.value = password;
    VerifySecurity()
}

checkNumbers.addEventListener('click', () =>{
    GeneratePassword(lenght)
})
checkUpper.addEventListener('click', () =>{
    GeneratePassword(lenght)
})
checkSimbols.addEventListener('click', () =>{
    GeneratePassword(lenght)
})


passwordLenght.addEventListener('input', ()=> {
    lenght = passwordLenght.value
    spanLenght.textContent = lenght
    GeneratePassword(lenght)


})

btnRegenerate.addEventListener('click', ()=>{
    GeneratePassword(lenght)
})


