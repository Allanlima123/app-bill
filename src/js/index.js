const inputBill = document.querySelector("#bill");
const inputNumberOfPeople = document.querySelector("#NumberOfPeople");
const custom = document.querySelector("#custom");
const buttons = document.querySelectorAll(".buttons button");
const total_person = document.querySelector("#total_person");
const dollar_tip = document.querySelector("#dollar_tip");

const printValorTela = event =>{
    event.preventDefault()

    let porcentagemGorgeta = Number(event.target.value);

    if(porcentagemGorgeta === 0){
        console.log("Digite um Número Diferente de Zero");
        return
    }

    let bill = Number(inputBill.value);
    let NumberOfPeople = Number(inputNumberOfPeople.value);

    let gorgeta = ((porcentagemGorgeta / 100) * bill) / NumberOfPeople;
    let totalPessoa = bill / NumberOfPeople + gorgeta;

    printNaTela(gorgeta, totalPessoa);
}

const desabilitaNumero = () =>{
    buttons.forEach(item =>{
        item.disabled = true;
        custom.disabled = true;
    });
}

const habilitarNumero = () =>{
    buttons.forEach(item => {
        item.disabled = false;
        item.addEventListener("click", printValorTela);
    });

    custom.disabled = false;
}

const printNaTela = (gorgeta, totalPessoa) =>{
    total_person.innerHTML = `<i class="fa fa-usd"></i>${totalPessoa.toFixed(2)}`;
    dollar_tip.innerHTML = `<i class="fa fa-usd"></i>${gorgeta.toFixed(2)}`;
};

custom.addEventListener("input",printValorTela);
inputNumberOfPeople.addEventListener("input", habilitarNumero);
desabilitaNumero()