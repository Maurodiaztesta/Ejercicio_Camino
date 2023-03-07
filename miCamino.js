const miCamino = {
  inicio: "dar el primer paso.",
  objetivo:
    "recorrer los 14 ochomiles y llegar hasta la cima del mundo: el Everest.",
  material: [
    {
      nombre: "Piolets",
      descripcion:
        "un instrumento usado en alpinismo para asegurarse en el hielo o la nieve; consiste en una especie de pico de metal con el extremo del mango afilado.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del piolet",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del piolet",
          },
        },
      ],
    },
    {
      nombre: "Crampones",
      descripcion:
        "una pieza de metal con púas que se sujeta a la suela de la bota para escalar o caminar sobre el hielo o la nieve.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de los crampones",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de los crampones",
          },
        },
      ],
    },
    {
      nombre: "Cuerdas",
      descripcion:
        "un objeto delgado, muy alargado y flexible, hecho de hilos o fibras torcidos o entrelazados, que se usa generalmente para atar o sujetar cosas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la cuerda",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la cuerda",
          },
        },
      ],
    },
    {
      nombre: "Mochila",
      descripcion:
        "una bolsa para transportar provisiones en excursiones, viajes u otro tipo de desplazamientos, que está confeccionada con tela resistente y a menudo impermeable y se lleva colgada a la espalda por medio de correas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la mochila",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la mochila",
          },
        },
      ],
    },
  ],
  cimas: [
    {
      nombre: "K2",
      altitud: 8.611,
      localizacion: "China/Pakistan",
    },
    {
      nombre: "Kangchenjunga",
      altitud: 8.586,
      localizacion: "India/Nepal",
    },
    {
      nombre: "Lhotse",
      altitud: 8.516,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Makalu",
      altitud: 8.463,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Cho Oyu",
      altitud: 8.201,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Dhaulagiri",
      altitud: 8.167,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Manaslu",
      altitud: 8.163,
      localizacion: "Nepal",
    },
    {
      nombre: "Nanga Parbat",
      altitud: 8.125,
      localizacion: "Pakistan",
    },
    {
      nombre: "Annapurna",
      altitud: 8.091,
      localizacion: "Nepal",
    },
    {
      nombre: "Gasherbrum I",
      altitud: 8.068,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Broad Peak",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Gasherbrum II",
      altitud: 8.035,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Shisha Pangma",
      altitud: 8.027,
      localizacion: "Tibet",
    },
    {
      nombre: "Everest",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
  ],
  subiendoAlEverest: [
    [
      {
        campoBase: [
          {
            campoI: {
              campoII: {
                campoIII: {
                  campoIV: [
                    "Tranquilo",
                    "lo",
                    "peor",
                    "ha",
                    "pasado",
                    8.846,
                    "ya.",
                    "¡Animo!",
                    {
                      cima: "¡Enhorabuena!, probablemente no seas el primero en llegar hasta aquí, pero estas con la programación, no con el alpinismo.",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// Ejercicio

//Habiendo visto como acceder a las propiedades de los distintos objetos,como podemos recorrer arrays y ir buceando en ellos, es el momento de ponernos a prueba.

//Pasos a seguir para llegar a la cima

//vamos a imaginarnos que vamos a narrar la historia de como subi los 14 ochomiles y esta historia solo puede ser contada a traves de console.log, es decir,

// primer paso: vamos a empezar nuestro camino de la mejor manera y esa no puede ser de otra manera que dando el primer paso, por tanto vamos a decir: Lo mas importante es {inicio}

console.log(`Lo mas importante es ${miCamino.inicio}`);

//2º: vamos a decir : El objetivo de mi camino es : {objetivo}
console.log(`El objetivo de mi camino es: ${miCamino.objetivo}`);

//3º : vamos a decir : El material que debo llevar es:
console.log(`El material que debo llevar es:`);

//4º: en este paso ya empezaremos a toquetear con bucles y le vamos a decir: lo primero que debo llevar es {nombre del primer material} y es { su descripcion}
// lo segundo que debo  llevar es {nombre del segundo material} y es { su descripcion}
// lo tercero que debo  llevar es {nombre del tercer material} y es { su descripcion}
// y por ultimo debo llevar la {mochila} que es {su descripcion}

const casos = ["Lo primero que debo llevar es ", "Lo segundo que debo llevar es ", "Lo tercero que debo llevar es ", "Lo cuarto que debo llevar es "]
for (let index = 0; index < miCamino.material.length; index++) {
  const objeto = miCamino.material[index]
  console.log(`${casos[index]} ${objeto.nombre} y es ${objeto.descripcion}`);
}

// for (let index = 0; index < miCamino.material.length; index++) {
//   const objeto = miCamino.material[index];
//   let material1 = objeto.nombre;
//   let descripcion1 = objeto.descripcion;
//   let material2 = objeto.nombre;
//   let descripcion2 = objeto.descripcion;
//   let material3 = objeto.nombre;
//   let descripcion3 = objeto.descripcion;
//   let material4 = objeto.nombre;
//   let descripcion4 = objeto.descripcion;
//   if (objeto == miCamino.material[0]) {
//     console.log(`Lo primero que debo llevar es ${material1} y es ${descripcion1}`);
//   } else if (objeto == miCamino.material[1]){
//     console.log(`lo segundo que debo llevar es ${material2} y es ${descripcion2}`);
//   } else if (objeto == miCamino.material[2]){
//     console.log(`lo tercero que debo llevar es ${material3} y es ${descripcion3}`);
//   } else {
//     console.log(`y por ultimo debo llevar la ${material4} que es ${descripcion4}`);
//   }
// }


// const casos = ["Lo primero que debo llevar es ", "Lo segundo que debo llevar es ", "Lo tercero que debo llevar es ", "Lo cuarto que debo llevar es "]
// miCamino.material.forEach(function(object, index)) {
//   console.log(`${casos[index]} ${object.nombre} - ${object.description}`);
// }

//5º: vamos a decir: para subir al {nombre de la cima}  debo subir {altura } metros y debo viajar a {ubicacion}

// for (let index = 0; index < miCamino.cimas.length; index++) {
//   const montaña = miCamino.cimas[index];
//   let nombre1 = montaña.nombre;
//   let altura1 = montaña.altitud;
//   let ubicacion1 = montaña.localizacion;
//   console.log(`para subir al ${nombre1}  debo subir ${altura1} metros y debo viajar a ${ubicacion1}`);
// }

for (const cima of miCamino.cimas) {
  console.log(`Para subir al ${cima.nombre} debo subir ${cima.altitud} metros y debo viajar a ${cima.localizacion}`);
}

//6º: para llegar a la cima tendremos que darnos aliento y decirnos la frase que esta divida y que tiene que quedar así: "Tranquilo,lo peor ha pasado ya.¡Animo!
// console.log(array[1].address.city); // Output: Los Angeles


let frase = miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV;
let mensajeFinal = []

for (const element of frase) {
  typeof element === "string" && mensajeFinal.push(element)
}
console.log(mensajeFinal.join(" "));

// for (const element of mensaje) {
//   mensajeFinal.push(element);
// }
// console.log(mensajeFinal.join(" "));

//7º: mostraremos el mensaje final guardado en la cima

console.log(miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[8].cima);

//por ultimo como bonus,en un console.log mostraremos por pantalla las urls de todas las imagenes de los materiales y en otro haremos la media de la altitud de todas la cimas que hemos subido.

for (let index = 0; index < miCamino.material.length; index++) {
  const material = miCamino.material[index];
  for (let index = 0; index < material.imagenes.length; index++) {
    const imagen = material.imagenes[index];
    if (imagen.imagen1) {
      console.log(imagen.imagen1.url);
    } else {
      console.log(imagen.imagen2.url);
    }
  }
}

let total = 0;
let media = 0;
for (const numero of miCamino.cimas) {
  total += numero.altitud;
}
media = total / 4;
console.log(media);