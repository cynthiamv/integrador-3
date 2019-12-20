
// const eliminarProducto = () => {

// }
// const vaciarCarrito = () => {

// }
// const confirmarCompra = () => {

// }
// const cancelarCompra = () => {

// }
// const contarTotalDeProductos = () => { //recibe el array del carrito de compras y tiene que retornar la cantidad de productos en el carrito

// }
// const subtotalDeLaCompra = () => { //recibe el array del carrito de compras y tiene que retornar el monto total del carrito

// }
// const totatlDescuento = () => { //recibe el array del carrito de compras y tiene que retornar el monto total del descuento que aplica.
//     //  Como no todos los productos aplican para descuento, solo se debe calcular sobre el subtotal de los productos que si aplican

// }
// const mostrarProductosdelCarrito = () => { //recibe el array del carrito de compras y muestra el listado de productos con los siguientes datos: nombre del producto, precio, cantidad y subtotal (precio x cantidad)

// }


let productosAlaVenta = [
    [1, "Notebook Lenobo S400", 100, "si"],
    [2, "Celular Notorola G5", 135, "no"],
    [3, "Smart TV Filis 43'", 190, "si"],
    [4, "Sorny PS 7", 215, "si"]
]
let carritoDeCompra = [];

//Bienvenida

const catalogo = () => {
    let mostrarProductos = "";
    for (let i = 0; i < productosAlaVenta.length; i++) {
        mostrarProductos = mostrarProductos + `
        ID: ${productosAlaVenta[i][0]}  
        ${productosAlaVenta[i][1]}
        Precio: $ ${productosAlaVenta[i][2]}  
        Aplica descuento: ${productosAlaVenta[i][3]}
        `;
    }
    return mostrarProductos
}
alert(`Bienvenido a nuestra tienda, estos son nuestros productos:
    ${catalogo()}`)

//Opciones para el cliente

let volverAlMenuPrincipal = "SI"
while (volverAlMenuPrincipal == "SI") {
    accion = prompt(`Seleccione una operacion:
      --------------------------
     [AGREGAR] un producto
     [MOSTRAR] detalle :página_boca_arriba:
     [ELIMINAR] un producto 
     [VACIAR] carrito
     [CONFIRMAR] compra
     [CANCELAR] compra `);
    volverAlMenuPrincipal = volverAlMenuPrincipal.toUpperCase()
    accion = accion.toUpperCase()
    //     //...............AGREGAR productos al carrito..............

    const agregarAlCarrito = () => {
        let productoNuevo = []
        let productoAAgregar = prompt(`${catalogo()}
    Indique el id del productor que desea agregar al carrito`);

        let idValido = false;
        for (let i = 0; i < productosAlaVenta.length; i++) {
            for (let j = 0; j < productosAlaVenta[i].length; j++) {
                if (productoAAgregar == productosAlaVenta[i][j]) {
                    let cantidadAAgregar = prompt("Cuántas unidades desea agregar?")
                    cantidadAAgregar = parseInt(cantidadAAgregar)
                    idValido = true
                    productoNuevo = productosAlaVenta[i]
                    if (carritoDeCompra.length == 0) {
                        carritoDeCompra.push(productosAlaVenta[i])
                        carritoDeCompra[0][4] = cantidadAAgregar
                    }
                    else {
                        for (let i = 0; i < carritoDeCompra.length; i++) {
                            if (carritoDeCompra[i][0] == productoAAgregar) {
                                carritoDeCompra[i][4] += cantidadAAgregar
                            }
                            else {
                                console.log(cantidadAAgregar)
                                carritoDeCompra.push(productoNuevo)
                                carritoDeCompra[i][4] = cantidadAAgregar
                            };

                        }
                    }
                }
            }
            console.log (carritoDeCompra)
            }
        if (idValido === false) {
            alert("Ingrese un id valido")
        }
        console.log(carritoDeCompra)
    }

    const mostrarDetalle = () => {
        let detalleDelCarrito = "";
        for (let i = 0; i < carritoDeCompra.length; i++) {
            detalleDelCarrito += `
                       🆔 ID: ${carritoDeCompra[i][0]} 
                       👤 Producto: ${carritoDeCompra[i][1]}
                       Precio ${carritoDeCompra[i][2]}
                       Aplica descuento:${carritoDeCompra[i][3]}
                       Cantidad de unidades: ${carritoDeCompra[i][4]}
                       ----------------------
                       `;
        }
        return detalleDelCarrito;
    }


    if (accion.toUpperCase() == "AGREGAR") {
        //let repetirOperacion = "SI";
        agregarAlCarrito()
        const repetirOperacion = () => {
            let confirmacion = prompt("Desea repetir la operacion?");
            confirmacion = confirmacion.toUpperCase()
            if (confirmacion === "NO") {
                volverAlMenuPrincipal = "SI";
            } else if (confirmacion !== "SI") {
                alert(`
                     Opción inválida: Por favor, ingresar una opción correcta`);
            } else {
                agregarAlCarrito()
            }
        }
        repetirOperacion()
    }
    else if (accion.toUpperCase() === "MOSTRAR") {
        mostrarDetalle()
    }
    volverAlMenuPrincipal = "SI"
}