const inputBill = document.querySelector("#bill");
const inputNumberOfPeople = document.querySelector("#NumberOfPeople");
const custom = document.querySelector("#custom");
const buttons = document.querySelectorAll(".buttons button");
const total_person = document.querySelector("#total_person");
const dollar_tip = document.querySelector("#dollar_tip");
const btn_resete = document.querySelector(".btn-resete");

const printValorTela = event =>{
    event.preventDefault();

    let porcentagemGorgeta = Number(event.target.value);

    if(porcentagemGorgeta <= 0){
        console.log("Digite uma Gorgeta Maior ou diferente de 0");
        return
    }

    let bill = Number(inputBill.value);
    let numberOfPeoples = Number(inputNumberOfPeople.value);

    let gorgeta = ((porcentagemGorgeta / 100) * bill) / numberOfPeoples;
    let totalPessoa = bill / numberOfPeoples + gorgeta;

    printNaTela(gorgeta, totalPessoa);
}

const desabilitaNumero = () =>{
    buttons.forEach(item =>{
        item.disabled = true;
        custom.disabled = true;
    });
}

const checkInputPerson = (persons) => persons <= 0 ? true : false;

const habilitarNumero = () =>{
    let numberOfPeoples = Number(inputNumberOfPeople.value);
    let checkPeopleNumbers = checkInputPerson(numberOfPeoples);

    if(checkPeopleNumbers){
        desabilitaNumero();
        console.log("Digite a quantidade de Pessoas!!");
        return
    }

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
btn_resete.addEventListener("click", () => window.location.reload());
desabilitaNumero();
