let kertas = document.querySelector("#kertas");
let gunting = document.querySelector("#gunting");
let batu = document.querySelector("#batu");
let ComputerChoice = document.querySelector("#ComputerChoice");

//function untuk komputer memilih
const selectChoice = () => { // arrow function
    const options = ["kertas", "gunting", "batu"];
    const result = options[Math.floor(Math.random () * 3)];

    return result;
}

batu.addEventListener('click', () => {
    let choise = selectChoice();

    ComputerChoice.innerHTML = choise;
    
    setTimeout(() => {
    switch (choise) {
        case "batu":
            alert("Seri");
            break;
        
            case "gunting":
                alert("kamu menang!");
    
        default:
            alert("komputer menang!");
            break;
    }
},300);
    }
);

gunting.addEventListener('click', () => {
    let choise = selectChoice();

    ComputerChoice.innerHTML = choise;
    
    setTimeout(() => {
    switch (choise) {
        case "batu":
            alert("komputer menang!");
            break;
        
            case "gunting":
                alert("seri");
    
        default:
            alert("komputer menang!");
            break;
    }
},300);
    }
);

kertas.addEventListener('click', () => {
    let choise = selectChoice();

    ComputerChoice.innerHTML = choise;
    
    setTimeout(() => {
    switch (choise) {
        case "batu":
            alert("kamu menang!");
            break;
        
            case "gunting":
                alert("komputer menang!");
    
        default:
            alert("seri");
            break;
    }
},300);
    }
);