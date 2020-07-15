/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let numeroUno;
let numeroDos;
function sumar()	
{	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la suma es " + (numeroUno + numeroDos));
}

function restar()
{
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la resta es es " + (numeroUno - numeroDos));
}

function multiplicar()
{ 
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la multiplicacion es " + (numeroUno * numeroDos));
}

function dividir()
{
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la divicion es " + (numeroUno / numeroDos));
}

