const productos = [
    {
        nombre: "Cabezal Sparring",
        description: "Cabezal de Sparring.",
        categoria: "Protectores",
        marca: "Gran Marc",
        talle: ["1", "2", "3"],
        precio: 35000,
        web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
        imagen: "cabezal-cerrado.webp",
    },
    {
        nombre: "Dobok Dan",
        description: "Bobok aprobado para torneos internacionales.",
        categoria: "Dobok",
        marca: "Daedo",
        talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
        precio: 115000,
        web: "https://www.daedo.com/products/taitf-10813",
        imagen: "dobok.webp",
    },
    {
        nombre: "Escudo de Potencia",
        description: "Escudo de potencia para entrenamientos.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 51700,
        web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
        imagen: "escudo-potencia.webp",
    },
    {
        nombre: "Par de focos redondos",
        description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 15000,
        web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
        imagen: "foco-con-dedos.webp",
    },
    {
        nombre: "Guantes 10 onzas",
        description:
            "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["s/talle"],
        precio: 35000,
        web: "https://www.daedo.com/products/pritf-2020",
        imagen: "protectores-manos.webp",
    },
    {
        nombre: "Protectores Pie",
        description: "Protectores de Pie habilitados para torneos internacionales",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["XXS", "XS", "S", "M", "L", "XL"],
        precio: 35000,
        web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
        imagen: "protectores-pie.webp",
    },
];

let mostrarDetalle = (id) => {
    document.getElementById("detalle").style.display = "block";
    document.getElementById("titulo-prod").innerText = productos[id].nombre;
    document.getElementById("descipcion-prod").innerText = productos[id].description;
    document.getElementById("precio-prod").innerText = productos[id].precio;
}

let cerrarModal = () => {
    document.getElementById("detalle").style.display = "none";
}

let mostrarCatalogo = () => {
    let contenido = "";

    productos.forEach((prod, id) => {
        contenido += `<div>
        <img src="images/${prod.imagen}" alt="${prod.nombre}"/>
        <h3>${prod.nombre}</h3>
        <button type="button" onclick="mostrarDetalle( ${id} )">Ver Detalle</button>
        <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
        </div>`
    })

    //innerHTML agrega contenido/cosas dentro del Id agregado con getElementByID
    document.getElementById("catalogo").innerHTML = contenido;
}

// Con let agregarAlCarrito = (id) ; quiero guardar en localStorage el valor que me pasen
// localStorage.getItem("carrito"); obtengo todos los items que habia
let agregarAlCarrito = (id) => {

    // sino uso JSON.parse entonces localStorage.getItem("carrito") retorna un string por lo tanto carritoList es un string no un array
    // y cuando uso push(), que es un metodo exclusivo de arrays, no voy a poder usarlo. Me retornara error porque carritoList en realidad es un string
    let carritoList = localStorage.getItem("carrito");

    if(carritoList == null){
        carritoList = []
    } else {
        carritoList = JSON.parse(carritoList); //convierno un string
    }
    carritoList.push(id); //push.() es valido solo con arrays
    console.log(carritoList);
    // si trabajo con objetos, debo pasarle string al localStorage entonces JSON.stringify(objeto) lo convierte en string
    localStorage.setItem("carrito", JSON.stringify(carritoList) );
};

let cargarCarrito = () => {
    let carritoList = localStorage.getItem("carrito");
    let contenido = "";

    if (carritoList == null){
        contenido = "<div>Su carrito esta vacio</div>"
    } else {
        carritoList = JSON.parse(carritoList); //convierto carritoList en array

        // iteracion para cargar los productos a carritoList
        carritoList.forEach((num) => {
            contenido +=
            `<div> 
        <!-- signo pesos entre llaves y el nombre de las vairable es para asignar dinamicamente, en este caso, cosas al carritoList-->
                <h3>${productos[num].nombre}</h3>
                <p>${productos[num].precio}</p>
            </div>`
        });
    }
    // inyecto todos los elementos que estamos produciendo dentro del html.. Lo hago fuera del else porque tambien es valido decir carrito vacio.
    document.getElementById("mostrar-carrito").innerHTML = contenido;

};


