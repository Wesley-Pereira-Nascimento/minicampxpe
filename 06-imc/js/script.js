function star(){
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputweigth = document.querySelector('#input-weigth');
    var inputheigth = document.querySelector('#input-heigth');

     inputweigth.addEventListener('input', handleButtonClick);
     inputheigth.addEventListener('input', handleButtonClick);
    
    handleButtonClick();
}

function calculateImc(peso, altura){
    return peso / (altura * altura);
}

function handleButtonClick(){
    var inputweigth = document.querySelector('#input-weigth');
    var inputheigth = document.querySelector('#input-heigth');
    var imcResult = document.querySelector('#imc-result')

    var weigth = Number(inputweigth.value);
    var heigth = Number(inputheigth.value);

    var imc = calculateImc(weigth, heigth);
    var formattedImc= imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedImc;

    console.log(imc);
   
    
}

star()