var cupones = [
    {
        cupon: "Cupon1",
        descuento: 10
    },
    {
        cupon: "Cupon2",
        descuento: 20
    },
    {
        cupon: "Cupon3",
        descuento: 30
    }
];



function validateCupon(cupon) { 

    const cuponValido = function(cupones) {
        return cupones.cupon === cupon;
    }

    if(cupon != ""){ console.log({cupones}, cupon);
        const userCoupon = cupones.find(cuponValido);  
        if (!userCoupon && userCoupon != "") {
           return alert("El cupón " + cupon + "no es válido");
        }else{
            return userCoupon.descuento;
        }  
    }else{
        return 1;
    }
}

function calcularPrecioConDescuento(precio, descuento, cupon) {
    
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    if(cupon != 1){
        const precioConDescuentoCupon = (precioConDescuento * cupon) / 100;
        precioConDescuento = precioConDescuento - precioConDescuentoCupon;
    }
    
    
    return precioConDescuento;

}

function priceWithDiscount() {
    
    const priceValue = document.getElementById("inputPrice").value;
    const discountValue = document.getElementById("inputDiscount").value;
    const inputCupon = document.getElementById("inputCupon").value;
    
    const isCupon = validateCupon(inputCupon);
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, isCupon);

    const respuesta = document.getElementById("resultPrice");
    respuesta.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });