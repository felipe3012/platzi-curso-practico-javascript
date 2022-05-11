// // Código del cuadrado
//console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
}
//console.groupEnd();

// // Código del triangulo
// console.group("Triangulos");
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura) {
    return (base*altura) / 2;
} 
//console.groupEnd();

// //Código del triangulo isoceles
function perimetroTrianguloIsoceles(ladoA, ladoB, base) {
    return ladoA*1 + ladoB*1 + base*1;
}

function areaTrianguloIsoceles(ladoA, ladoB, base) {
    const altura = Math.sqrt((ladoA*ladoA)-((ladoB*ladoB)/4));
    return (base*altura)/2;
}

// // Código del círculo
//Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//Área
function areaCirculo(radio) {
    return (radio*radio) * PI;
}

//Visualizar inputs
function validateFigura() {
    let value = document.getElementById("figura").value;
    switch (value){
        case "1":
            document.getElementById("ladocuadrado-label").style.display = "flex";

            document.getElementById("lado1triangulo-label").style.display = "none";
            document.getElementById("lado2triangulo-label").style.display = "none";
            document.getElementById("lado3triangulo-label").style.display = "none";
            document.getElementById("alturaTriangulo-label").style.display = "none";
            document.getElementById("baseTriangulo-label").style.display = "none";
            document.getElementById("radioCirculo-label").style.display = "none";
            break;
        case "2":
            document.getElementById("lado1triangulo-label").style.display = "flex";
            document.getElementById("lado2triangulo-label").style.display = "flex";
            document.getElementById("alturaTriangulo-label").style.display = "flex";
            document.getElementById("baseTriangulo-label").style.display = "flex";

            document.getElementById("lado3triangulo-label").style.display = "none";
            document.getElementById("radioCirculo-label").style.display = "none";
            document.getElementById("ladocuadrado-label").style.display = "none";
            break;
        case "3":
            document.getElementById("lado1triangulo-label").style.display = "flex";
            document.getElementById("lado2triangulo-label").style.display = "flex";
            document.getElementById("lado3triangulo-label").style.display = "flex";

            document.getElementById("alturaTriangulo-label").style.display = "none";
            document.getElementById("baseTriangulo-label").style.display = "none";
            document.getElementById("radioCirculo-label").style.display = "none";
            document.getElementById("ladocuadrado-label").style.display = "none";
            break;
        case "4":
            document.getElementById("radioCirculo-label").style.display = "flex";

            document.getElementById("lado1triangulo-label").style.display = "none";
            document.getElementById("lado2triangulo-label").style.display = "none";
            document.getElementById("lado3triangulo-label").style.display = "none";
            document.getElementById("alturaTriangulo-label").style.display = "none";
            document.getElementById("baseTriangulo-label").style.display = "none";
            document.getElementById("ladocuadrado-label").style.display = "none";
            break;
    }
}

function calcular() {
    let figura = document.getElementById("figura").value;
    let calcular = document.getElementById("calculo").value;
    switch (figura) {
        case "1":
            const lado = document.getElementById("ladocuadrado").value
            if(calcular == "1"){
                const perimetro = perimetroCuadrado(lado);
                alert("El perimetro del cuadrado es " + perimetro);
            }else{
                const area = areaCuadrado(lado);
                alert("El área del cuadrado es " + area);
            }
            break;
        case "3":
            const lado1 = document.getElementById("lado1triangulo").value
            const lado2 = document.getElementById("lado2triangulo").value
            const lado3 = document.getElementById("lado3triangulo").value
            
            var switcher = 0;
            var base = 0;
            var ladoA = 0;
            var ladoB = 0;
            if(lado1 == lado2 && lado1 != lado3){
                switcher+=1;
                base = lado3;
                ladoA = lado1;
                ladoB = lado2;
            }else if(lado1 == lado3 && lado1 != lado2){
                switcher+=1;
                base = lado2;
                ladoA = lado1;
                ladoB = lado3;
            }else{
                if(lado2 == lado3 && lado2 != lado1){
                    switcher+=1;
                    base = lado1;
                    ladoA = lado2;
                    ladoB = lado3;
                }else{
                    switcher = 0;
                }
            }
            
            if(switcher != 0){
                if(calcular == "1"){
                    const perimetro = perimetroTrianguloIsoceles(ladoA, ladoB, base);
                    alert("El perimetro del triangulo isóceles es " + perimetro);
                }else{
                    const area = areaTrianguloIsoceles(ladoA, ladoB, base);
                    alert("El área del triangulo isóceles es " + area);
                }
            }else{
                alert("No es un triangulo isósceles");
            }
            break;
    }
}