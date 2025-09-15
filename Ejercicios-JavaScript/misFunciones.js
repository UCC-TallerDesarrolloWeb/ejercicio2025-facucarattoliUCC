/**
 * Conversion unidades dimensionales
 * @method convertirUnidades
 * @param {string} unidad - Posibles unidades ingresadas: metro , pie, pulgada , yarda
 * @param {number} valor - valor numerico ingresado por el usuario puede ser float
 */

let convertUnidades =(unidad, valor) => {
    let metro, pie, pulgada, yarda //defino variables

    console.log(valor); //saber input usuario
    console.log(isNaN(valor));

    //cambio una coma ingresada por un punto
    if (valor.includes(",")){
        valor = valor.replace("," , ".");
    }

    if(isNaN(valor)){
        alert("Valor ingresado incorrecto");
        metro = "";
        pie = "";
        yarda = "";
        pulgada = "";
    } else {
        if (unidad == "unid_metro") {
            metro = valor;
            pie = 3.28 * metro;
            pulgada = 39.37 * metro;
            yarda = 1.0936 * metro;
        } else if (unidad == "unid_pie") {
            pie = valor;
            metro = 0.3048 * pie;
            pulgada = 12 * pie;
            yarda = 0.3333 * pie;
        } else if (unidad == "unid_pulgada") {
            pulgada = valor;
            metro = 0.0254 * pulgada;
            pie = 0.0833 * pulgada;
            yarda = 0.02777 * pulgada;
        } else if (unidad == "unid_yarda") {
            yarda = valor;
            metro = 0.9144 * yarda;
            pie = 3 * yarda;
            pulgada = 36 * yarda;
        }
    }
    document.getElementById("metro").value = Number(metro).toFixed(2); //reduccion #decimales a 2
    document.getElementById("pie").value = Math.round(pie*100)/100; //reduccion #decimales a 2
    document.getElementById("pulgada").value = Number(pulgada).toFixed(2);
    document.getElementById("yarda").value = Math.round(yarda*100)/100;
};

let convertirGR = (id, valor) => {
    let cantGrados , cantRadianes;
    if(id == "grados"){
        cantGrados = valor;
        cantRadianes = cantGrados * Math.PI/180;
        document.getElementById("radianes").value = cantRadianes;
    }else {
        cantRadianes = valor;
        cantGrados = cantRadianes * 180/Math.PI;
        document.getElementById("grados").value = cantGrados;

    }
};

let mostrarOcultarDiv = (id) => {
    // if(id == "mostrarDiv"){
    //     document.getElementsByName("unDiv")[0].style.display = "block";
    // } else{
    //     document.getElementsByName("unDiv")[0].style.display = "none";
    // }

    const mostrar = id == "mostrarDiv" ? "block" : "none";
    document.getElementsByName("unDiv")[0].style.display = mostrar;

};

let sumar = () => {
    var sum1 = document.getElementById("nums1").value;
    var sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)) {
        alert("Valor ingresado incorrecto");
    }
    else {document.getElementById("totalS").value = Number(sum1) + Number(sum2);
    } //Number implica casteo de variables , cambio el tipo de variables
}

let resta = () => {
    var res1 = document.getElementById("numr1").value;
    var res2 = document.getElementById("numr2").value;

    if(isNaN(res1) || isNaN(res2)) {
        alert("Valor ingresado incorrecto");
    }
    else {document.getElementById("totalR").value = Number(res1) - Number(res2);
    } //Number implica casteo de variables , cambio el tipo de variables
}

let multiplicar = () => {
    var mul1 = document.getElementById("numm1").value;
    var mul2 = document.getElementById("numm2").value;

    if(isNaN(mul1) || isNaN(mul2)) {
        alert("Valor ingresado incorrecto");
    }
    else {document.getElementById("totalM").value = Number(mul1) * Number(mul2);
    } //Number implica casteo de variables , cambio el tipo de variables
}

let dividir = () => {
    var div1 = document.getElementById("numd1").value;
    var div2 = document.getElementById("numd2").value;

    if(isNaN(div1) || isNaN(div2)) {
        alert("Valor ingresado incorrecto");
    }
    else {document.getElementById("totalD").value = Number(div1) / Number(div2);
    } //Number implica casteo de variables , cambio el tipo de variables
}