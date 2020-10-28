const express = require("express");

const app = express();


const animales = [
    {
        tipo: "Perro",
        caracteristicas: [
            {
                nombre : "Tobi",
                edad: 6,
                raza : "caniche"
            },
            {
                nombre : "Armando",
                edad : 6,
                raza : "afgano"
            },

             {
                nombre : "Armando",
                edad : 3,
                raza : "afgano"
            },
             {
                nombre : "Sara",
                edad : 2,
                raza : "beagle"
            }
        ]
    },

        {
        tipo: "Gato",
        caracteristicas: [
            {
                nombre : "Lemmy",
                edad: 4,
                raza : "persa himalayo"
            },
            {
                nombre : "Leia",
                edad : 3,
                raza : "persa himalayo"
            },

             {
                nombre : "Blue",
                edad : 1,
                raza : "azul ruso"
            },
             {
                nombre : "Zoe",
                edad : 1,
                raza : "azul ruso"
            }
        ]
    },
        
            {
        tipo: "Pajaro",
        caracteristicas: [
            {
                nombre : "fly",
                edad: 2,
                raza : "agapornis"
            },
            {
                nombre : "",
                edad : 3,
                raza : "agapornis"
            },

             {
                nombre : "Armando",
                edad : 4,
                raza : "jilguero"
            },
             {
                nombre : "Sara",
                edad : 1,
                raza : "canario"
            }
        ]
    },

]



let lista;




app.get('/', function (req, res) {

    for (let i = 0; i < animales.length; i++) {
        for (let j = 0; j < animales.length; j++) {  
            lista +=
                `<li>
            <p>${animales[i].tipo}</p>
             <p>${animales[i].caracteristicas[j].nombre}</p>
            <p>${animales[i].caracteristicas[j].edad}</p>
            <p>${animales[i].caracteristicas[j].raza}</p>
            </li>`
        } 
    }
    
    let listaAnimales =
        `<ul>
            ${lista}
        </ul> `

    
    res.send(listaAnimales)  
      //localhost:3000/sumarAnimal?nombre=Ronaldo&&tipo=ratonerillo&&edad=12
})


app.get('/sumarAnimal', function (req, res) {
    let nombre = req.query.nombre;
    let edad = req.query.edad;
    let tipo = req.query.raza;

    let animalAgregado = {
        nombre: nombre,
        edad: edad,
        tipo : tipo
    }

let caracteristicas = animales[1].caracteristicas

    animales.forEach( elemento => {
        caracteristicas.forEach(elem => { 
             lista +=
                `<li>
            <p>${elemento.tipo}</p>
             <p>${elem.nombre}</p>
            <p>${elem.edad}</p>
            <p>${elem.raza}</p>
            </li>`
        })
    })
    let listaAnimales =
        `<ul>
            ${lista}
        </ul> ` 

    animales.push(animalAgregado)
   
    res.send(listaAnimales)       
})


app.get('/sumarAnimal', (req, res) => {

    let nombre = req.query.nombre;
    let tipo = req.query.tipo;
    let edad = req.query.edad;

    let animalAgregado = {
        nombre: nombre,
        edad: edad,
        tipo : tipo
    }

    animales.push(animalAgredado);

    let mensaje = `<h4>${nombre} añadido</h4>`
    res.send(mensaje)

})


  

app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


