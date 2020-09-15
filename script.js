/* Arrays, un conjunto de ordena de elementos,de cualquier tipo.Se organizan por medio de posiciones... Se empieza de 0 hasta x */

let numero= [2, 3.4, 5, 7];
let palabras= ["Pepito", "Pepita", "Pedrito"];
let boleanos= [true, false, true];

/* Multiples datos */

let sancocho=[ "pollo", 3, "yuca", 1, true, 3,4]

/* Metodos y propiedades que me permiten manipular los Arrays */
let videojuegos=["Spiderman", "MarioBross", "Contra", "God of war", "Pacman", "Ghost and gobblins"];

/* Length- Saber la longitud de un arreglo */
document.write("Tienes " + videojuegos.length + " videojuegos!!")

/* Push-agregar un elemento en la ultima posicion */

videojuegos.push("Metal gear", "Metal Slug", "World of tanks" )

document.write("<br>" + videojuegos);

/* Splice- Agregar nuevos elementos en una posicion especificas o elimarlos */
/* Primer parametro (2) es la posicion donde quiero que se inserten los elementos nuevos
Segundo paremetro (3) es la cantidad de elementos que quiero que se eliminen a partir de esa posicion. En este caso elimina desde la posicion 2 en adelante. */
videojuegos.splice(2,3, "Mario Kart", "Zelda")

document.write("<br>" + videojuegos)

/* Pop- Elimina la ultima posicion del arreglo */

videojuegos.pop();
document.write("<br>" + videojuegos)

/* delete. Eliminar cualquier posicion- dej el espacio vacio, undefined*/
delete videojuegos[0];
document.write("<br>" + videojuegos)
console.log( videojuegos)

/* Slice- separar un rango de posiciones de un arreglo. NO modifica el arreglo original. Tambien se utilizar con strings*/

let cortar= videojuegos.slice(4, videojuegos.length)
console.log(cortar)
document.write("<br>" + cortar)

let nombre= "camilo sanchez";
console.log(nombre.slice(7,nombre.length))

/* Concat- concatenar, enlazar, unir dos arreglos y conformar uno nuevo */

let consolas= ["Xbox", "PlayStation", "Nintendo", "Sega", "Atari"]
/* Los maneja por separados, como arreglos independientes */
document.write("<br>" + videojuegos + " " + consolas)
/* Aqui los une como uno solo */
let grupoRetro= videojuegos.concat(consolas);
console.log(grupoRetro)

/* Join-Separar un elemnento de otro, por medio de cualquier simbolo */

document.write("<br>" + grupoRetro.join(" <br> "))

/* Sort- Organizar, alfabeticamente */

document.write(grupoRetro.sort())



/* Ciclo for- se ejecuta hasta que la condicion se cumpla 
i= i+1;*/

for (let i = 0; i< consolas.length; i++) {
    document.write("<h1>"+ i + "." + consolas[i] + "</h1>")
}

/* While- se ejecuta indefinidamente mientras se cumpla una condicion */
let anime= ["Inuyasha", "Sailor moon", "Saint seiya"]
let posicion= 0;
while (posicion< anime.length) {
  document.write(anime[posicion] + "<br>")
    posicion++;
    /* Posicion= posicion + 1; */
}

/* DO-WHILE */
let pass= prompt("Ingrese su contraseña");
let bd= "bitBictia"

if (pass== bd) {
    alert("Bienvenido!!")
} else {
    do {
         pass= prompt("Contraseña incorrecta vuelva a ingresarla");
    } while (pass !== bd);
}

