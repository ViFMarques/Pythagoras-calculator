 
function calculateHypotenuse(){

    var A = document.getElementById('InputA').value; //gravando os valores dos inputs em variáveis.
    var B = document.getElementById('InputB').value;
    var result = document.getElementById('result'); // variável do resultado.
    var hypotenuse = Math.round(Math.sqrt(( A*A )+ ( B*B ))); //conta igual a c² = a² + b², armazenada na variável hipotenusa.
    result.innerHTML=hypotenuse;
    changeResultSquareWidth()
}

// função para aumentar largura do espaço do resultado conforme for mais extenso.

function changeResultSquareWidth(){
    var hypotenuse = result.innerHTML
    var resultSquare = document.getElementById('resultSquare')
    resultSquare.style.width = hypotenuse.toString().length*1.3 +"vw"
}

var button = document.getElementById('button');
button.addEventListener('click', calculateHypotenuse) // apertando o botão executa a função calculateHypotenuse.


// aplicando botão Enter nos inputs

var inputA = document.getElementById("InputA");
inputA.addEventListener("keydown", function (e){
    if (e.code === "Enter") {  
       calculateHypotenuse()
    }
});

var inputB = document.getElementById("InputB");
inputB.addEventListener("keydown", function (e){
    if (e.code === "Enter") {  
       calculateHypotenuse()
    }
});