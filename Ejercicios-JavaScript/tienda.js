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

let mostrarCatalogo = (prod = productos) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div>
        <img src="images/${prod.imagen}" alt="${prod.nombre}"/>
        <h3>${prod.nombre}</h3>
        <p>${formatPrice(prod.precio)}</p>
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
    //push.() es valido solo con arrays
    carritoList.push(id);
    console.log(carritoList);
    // si trabajo con objetos, debo pasarle string al localStorage entonces JSON.stringify(objeto) lo convierte en string
    localStorage.setItem("carrito", JSON.stringify(carritoList) );
    contarProdctos();
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

let mostrarCarrito = () => {
    let contenido = "";
    const  carrito = JSON.parse(localStorage.getItem("carrito"));
    let total = 0;

    if(carrito != null){
        const listProd = [];
        const  listCant = [];

        listProd.forEach((num) => {
            if(!listProd.includes(num)){
                listProd.push(num);
                listProd.push(1);
            }else{
                // indexOf reccorre un array y me dice el indice del elemento que estoy buscando
                const inx = listProd.indexOf(num);
                listCant[inx] += 1;
            }
        })
    }

    if (carrito != null){
        carrito.forEach((num, id) => {
            contenido += `<div> 
               <h3>${productos[num].nombre}</h3>
               <p>${formatPrice(productos[num].precio)}</p>
               <p>Cantidad: ${listCant[id]}</p>
                <button type ="button" onclick="eliminarProducto(${id})">Eliminar Producto</button>
            </div>`;
            total += productos[num].precio * listCant[id];
        });

        contenido += `<p>Total = ${formatPrice(total)}</p>`;
        contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`;

    }
}

let vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    window.location.reload();
};

let eliminarProducto = (id) => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    carrito.splice(id, 1);

    if (carrito.length > 0){
    localStorage.setItem("carrito", JSON.stringify(carrito) );
    window.location.reload();
    } else {
        localStorage.removeItem("carrito");
    }
}

let filtrarProducto = () => {
    // TAREA MEJORAR Y OPTIMIZAR LA FUNCION

    let searchWord = document.getElementById("search").value;
    let min = document.getElementById("price-min").value;
    let max = document.getElementById("price-max").value;
    let prod = document.getElementById("protectores").checked;
    let entr = document.getElementById("entrenamiento").checked;
    let dob = document.getElementById("dobok").checked;
    let marca = document.getElementById("marca").value;

    let newLista = productos;

    if(searchWord){
    newLista =  newLista.filter(
        (prod) =>
        prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );}

    if(min){
        newLista =  newLista.filter((prod) =>prod.precio >= min)
    }

    if(max){
        newLista =  newLista.filter((prod) =>prod.precio <= max)
    }

    let category = [];
    prod ? category.push("Protectores") : "";
    entr ? category.push("Entrenamiento") : "";
    dob ? category.push("Dobok") : "";

    console.log(category);

    if (category.length > 0){
        newLista = newLista.filter(
            (prod) => category.includes(prod.categoria)
        );

        console.log(newLista);
    }

    if (marca != "Todas"){
        newLista = newLista.filter((prod) => prod.marca == marca );
    }

    mostrarCatalogo(newLista);
};

let formatPrice = (price) => {
    const numberFormat = new Intl.NumberFormat("en-AR", {
        currency:"ARS",
        style: "currency",
        minimumFractionDigits: 2});

    return numberFormat.format(price);

};

let contarProductos = () => {
    let getCart = JSON.parse(localStorage.getItem("carrito"));

    if (getCart.length != null) {
        document.getElementById("cant-prod").innerText = JSON.parse(getCart).length ;
    }
};

let orderCatalog = (order) => {
    let newProducts;
    switch (order) {
        case "menor":
            newProducts = productos.sort((a, b) => a.precio - b.precio);
            break;

        case "mayor":
            newProducts = productos.sort((a, b) => b.precio - a.precio);
            break;

        case "a-z":
            newProducts = productos.sort((a, b) => {
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                    return -1;
                } else {
                    return 1;
                }
                break;
            });

        case "z-a":
            newProducts = productos.sort((a, b) => {
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                    return -1;
                } else {
                    return 1;
                }
                break;
            });

        default:
            newProducts = productos.sort((a, b) => a.precio - b.precio);
            break;
    }
    mostrarCatalogo(newProducts)
}