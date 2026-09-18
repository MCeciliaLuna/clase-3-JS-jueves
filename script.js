console.log("hola mundo");

//PARÁMETROS
const numeroUno = 34;
const numeroDos = 45;

const suma = (numeroA, numeroB) => {
    const sumaNumeros = numeroA + numeroB;
    console.log(sumaNumeros);
}

suma(1,2)
suma(30,67)

const login = (email, password) => {
    const usuarioLogueado = email + " " + password;
    console.log(usuarioLogueado)
}

// ARRAYS Y OBJETOS

//ARRAY - lista
const array = [
    "boca",
    "river",
    "san martín",
]

console.log(array)
console.log(array[2])

//OBJETOS - cosa con características

const cecilia = {
    apellido:"Luna",
    edad:29,
    vive:true,
    clubFutbol:"Boca",
    hijos: null
}

console.log(cecilia);
console.log(cecilia.clubFutbol);


const arrayObjeto = [
    {
        nombre:"Cecilia",
        apellido: "Luna",
        edad:29,
    },
    {
        nombre:"Tomás",
        apellido:"Luna",
        edad:27,
    },
    {
        nombre: "María Ester",
        apellido:"Villafañe",
        edad:66
    },
    {
        nombre:"Marcelo",
        apellido: "Luna",
        edad:65
    }
]

console.log(arrayObjeto)
console.log(arrayObjeto[0].edad)