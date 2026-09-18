console.log("hola mundo");

//PARÁMETROS
const numeroUno = 34;
const numeroDos = 45;

const suma = (numeroA, numeroB) => {
    const sumaNumeros = numeroA + numeroB;
    //console.log(sumaNumeros);
}

suma(1, 2)
suma(30, 67)

const login = (email, password) => {
    const usuarioLogueado = email + " " + password;
    //console.log(usuarioLogueado)
}

// ARRAYS Y OBJETOS

//ARRAY - lista
const array = [
    "boca",
    "river",
    "san martín",
]

//console.log(array)
//console.log(array[2])

//OBJETOS - cosa con características

const cecilia = {
    apellido: "Luna",
    edad: 29,
    vive: true,
    clubFutbol: "Boca",
    hijos: null
}

//console.log(cecilia);
//console.log(cecilia.clubFutbol);


const familiares = [
    {
        nombre: "Cecilia",
        apellido: "Luna",
        edad: 29,
    },
    {
        nombre: "Tomás",
        apellido: "Luna",
        edad: 17,
    },
    {
        nombre: "María Ester",
        apellido: "Villafañe",
        edad: 66
    },
    {
        nombre: "Marcelo",
        apellido: "Luna",
        edad: 65
    },
    {
        nombre: "Lucas",
        apellido: "Villafañe",
        edad: 15
    },
    {
        nombre: "Florencia",
        apellido: "Luna",
        edad: 2
    }
]

//console.log(arrayObjeto)
//console.log(arrayObjeto[0].edad)

//MÉTODOS
// console.log(familiares)

//forEach
familiares.forEach(
    function (familiar) {
        const presentacionFamiliar = "Hola! Soy " + familiar.nombre + " y tengo " + familiar.edad + " años."
        // console.log(presentacionFamiliar)
    }
)


// FILTER
//filtra los ítems del array que cumplan cierta condición

const familiaresMenores = familiares.filter(
    function (familiar) {
        return familiar.edad < 18
        // return familiar.apellido === "Luna"
    }
)

const familiaresLuna = familiares.filter(
    function (familiar) {
        return familiar.apellido === "Luna"
    }
)

// console.log("FAMILIARES MENORES", familiaresMenores)

// console.log("FAMILIARES LUNA", familiaresLuna)

//MAP
// modifica el array original de acuerdo a la condicion que le pasemos

familiares.map(
    function(familiar) {
        familiar.club = "boca";
        familiar.edad = familiar.edad + 1;
        familiar.vive= false
        return familiar
    }
)

// console.log("NUEVOS FAMILIARES", nuevosFamiliares)