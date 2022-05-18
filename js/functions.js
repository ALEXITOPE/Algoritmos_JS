
var a = 0;
var b = 0;
function capturarDigitos() {
    a = parseInt(prompt("Ingrese el valor del primer dígito: "));
    b = parseInt(prompt("Ingrese el valor del segundo dígito: "));
}

function sumarDosDigitos() {
    capturarDigitos();
    var resultadoSuma = a + b;
    alert("El resultado de la suma de sus dígitos es: " + resultadoSuma);
}

function ejecutarOperacionesBasicas() {
    capturarDigitos();
    var resultadoSuma = a + b;
    var resultadoResta = a - b;
    var resultadoMultiplicacion = a * b;
    var resultadoDivision = a / b;
    alert("El resultado de la suma de " + a + " y " + b + " es: " + resultadoSuma + "\n"
        + "El resultado de la resta de " + a + " y " + b + " es: " + resultadoResta + "\n"
        + "El resultado de la multiplicación de " + a + " y " + b + " es: " + resultadoMultiplicacion + "\n"
        + "El resultado de la división de " + a + " y " + b + " es: " + resultadoDivision + "\n"
    );
}

function determinarMayorDeDosDigitos() {
    capturarDigitos();
    if (a > b) {
        alert("El número mayor entre " + a + " y " + b + " es: " + a);
    } else if (b > a) {
        alert("El número mayor entre " + a + " y " + b + " es: " + b);
    } else {
        alert("Los dos dígitos son iguales");
    }
}

function determinarMayorDeTresDigitos() {
    capturarDigitos();
    var c = parseInt(prompt("Ingrese el valor del tercer dígito: "));
    if (a > b && a > c) {
        alert("El número mayor entre " + a + ", " + b + " y " + c + " es: " + a);
    } else if (b >= a && b > c) {
        alert("El número mayor entre " + a + ", " + b + " y " + c + " es: " + b);
    } else if (c >= a && c > b) {
        alert("El número mayor entre " + a + ", " + b + " y " + c + " es: " + c);
    } else if (b >= c && a > b) {
        alert("El número mayor entre " + a + ", " + b + " y " + c + " es: " + c);
    } else if (b >= c && a < b) {
        alert("El número mayor entre " + a + ", " + b + " y " + c + " es: " + c);
    } else {
        alert("Los tres dígitos son iguales");
    }
}

function determinarParOImpar() {

    var a = parseInt(prompt("Ingrese un dígito: "));
    if (a % 2 == 0) {
        alert("El número " + a + " es par.")
    } else {
        alert("El número " + a + " es impar.")
    }
}

function determinarCuadradoDeUnNumero() {
    var a = parseInt(prompt("Ingrese un dígito: "));
    var cuadrado = (a * a)
    alert("El cuadrado de " + a + " es: " + cuadrado)
}

function determinarAreaTriangulo() {
    capturarDigitos();
    var area = (a * b) / 2
    alert("El área del triángulo con una base de " + a + " y una altura " + b + "  es: " + area)
}

function convertirMetrosACentimetrosPulgadasYKilometros() {
    var a = parseInt(prompt("Ingrese el valor que desea convertir: "));
    var cm = (a * 100)
    var pulg = (a * 39.37)
    var km = (a / 1000)
    alert(a + " metros, equivalen a:\n" + cm + " Centímetros\n" + pulg + " Pulgadas\n" + km + " Kilómetros")
}

function determinarAñoDeNacimientoSegunEdad() {
    var a = parseInt(prompt("Ingrese la edad que cumple en el año actual: "));
    var año = 2022 - a
    alert("Usted nació en el año: " + año)
}

function determinarUtilidadAlAñoDelDosPorCientoMensual() {
    var inv = parseInt(prompt("Ingrese el valor que desea invertir: "));
    var tiempo = parseInt(prompt("A cuántos años desea realizar la inversión: "));
    var interes = (inv * 24) / 100
    var utilidad = (interes * tiempo)
    var total = (utilidad + inv)
    alert("Con una inviersión de " + inv +
        "\nA un plazo de " + tiempo +
        "\nObtendrá una ganancia de " + utilidad +
        "\nPara un total de " + total)
}

function determinarPromedioDeCincoNotasParaValidarSiApruebaConMasDe3() {
    var a = parseInt(prompt("Ingrese la 1ra nota: "));
    var b = parseInt(prompt("Ingrese la 2da nota: "));
    var c = parseInt(prompt("Ingrese la 3ra nota: "));
    var d = parseInt(prompt("Ingrese la 4ta nota: "));
    var e = parseInt(prompt("Ingrese la 5ta nota: "));
    var prom = (a + b + c + d + e) / 5
    if (prom < 3) {
        alert("El alumno REPROBO INGLES\ncon un promedio de " + prom)
    } else {
        alert("El alumno APROBO INGLES\ncon un promedio de " + prom)
    }
}

function determinarValorAPagarSegunDescuentoPorCantidadDeCompra() {
    var cant = parseInt(prompt("Digite la cantida de Kilos"));
    var valor = (cant * 4500)
    var desc1 = (valor * 10) / 100
    var desc2 = (valor * 15) / 100
    var desc3 = (valor * 20) / 100
    if (cant < 3) {
        alert("\n                 NO ACCEDE A DESCUENTO\n\nKILOS COMPRADOS    : " + cant +
            "\nVALOR POR KILO         : $4500\nVALOR A PAGAR          : $" + valor)
    } else if (cant < 6) {
        alert("                 ACCEDE A UN DESCUENTO DEL 10%\n\nKILOS COMPRADOS  : " + cant +
            "\nVALOR POR KILO       : $4500\nSUBTOTAL                  : $" + valor +
            "\nMENOS 10%              : -$" + desc1 + "\nVALOR A PAGAR        : $" + (valor - desc1))
    } else if (cant < 10) {
        alert("                 ACCEDE A UN DESCUENTO DEL 15%\n\nKILOS COMPRADOS  : " + cant +
            "\nVALOR POR KILO       : $4500\nSUBTOTAL                  : $" + valor +
            "\nMENOS 15%              : -$" + desc2 + "\nVALOR A PAGAR        : $" + (valor - desc2))
    } else if (cant > 9) {
        alert("                 ACCEDE A UN DESCUENTO DEL 20%\n\nKILOS COMPRADOS  : " + cant +
            "\nVALOR POR KILO       : $4500\nSUBTOTAL                  : $" + valor +
            "\nMENOS 20%              : -$" + desc3 + "\nVALOR A PAGAR        : $" + (valor - desc3))
    }
}

function contarDigitosEnUnaCifra() {
    var cifra = parseInt(prompt("Digite una cifra"));
    var contador = 1

    while (cifra >= 10) {
        cifra = cifra / 10;
        contador++;
    }
    alert("El número digitado tiene: " + contador + " cifra(s)");

}