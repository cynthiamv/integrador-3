
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
let accion = "";

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


//...............AGREGAR productos al carrito..............

const agregarAlCarrito = () => {
    let productoNuevo = []
    let productoAAgregar = prompt(`${catalogo()}
    Indique el id del productor que desea agregar al carrito`);

    let idValido = false;
    for (let i = 0; i < productosAlaVenta.length; i++) {
        // for (let j = 0; j < productosAlaVenta[i][0].length; j++) {
        if (productoAAgregar == productosAlaVenta[i][0]) {
            let cantidadAAgregar = Number(prompt("Cuántas unidades desea agregar?"))
            // cantidadAAgregar = Number(cantidadAAgregar)
            idValido = true
            productoNuevo = productosAlaVenta[i]
            if (carritoDeCompra.length == 0) {
                carritoDeCompra.push(productosAlaVenta[i])
                carritoDeCompra[0][4] = cantidadAAgregar
            }
            else {
                for (let k = 0; k < carritoDeCompra.length; k++) {
                    if (carritoDeCompra[k][0] == productoAAgregar) {
                        carritoDeCompra[k][4] += cantidadAAgregar
                        break;
                    }
                    else {
                        // debugger
                        productoNuevo.push(cantidadAAgregar)
                        console.log(productoNuevo)
                        carritoDeCompra.push(productoNuevo)
                        console.log(carritoDeCompra)
                        break;
                    };


                }
            }
        }
        // }
    }
    if (idValido === false) {
        alert("Ingrese un id valido")
    }
    console.log(carritoDeCompra)
    repetirOperacion()
}

const mostrarDetalle = () => {
    let detalleDelCarrito = "";
    accion = "";
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
    if (detalleDelCarrito == "") {
        detalleDelCarrito = alert(`El carrito está vacío. Ingrese al menú principal para agregar productos`)
    }
    return detalleDelCarrito;
}

const vaciarCarrito = () => {
    let confirmarVaciarCarrito = prompt(`Desea confirmar la acción? Se quitarán todos los productos del carrito.`)
    confirmarVaciarCarrito = confirmarVaciarCarrito.toUpperCase()
    if (confirmarVaciarCarrito == "SI") {
        alert(`Ud. ha vaciado el carrito satisfactoriamente.`)
        carritoDeCompra = []
    }
    else {
        alert(`La operación fue cancelada.`)
    }
    accion = ""
}

const cancelarCompra = () => {
    let confirma = prompt('Confirma que quiere cancelar SI - NO?')
    confirma = confirma.toUpperCase()
    if (confirma == "SI") {
        alert('Hasta pronto')
        accion = "SALIR"
    }
    else {
        accion = ""
    }

}

const repetirOperacion = () => {
    let confirmacion = prompt("Desea repetir la operacion?");
    confirmacion = confirmacion.toUpperCase()
    if (confirmacion === "NO") {
        accion = "";
    } else if (confirmacion !== "SI") {
        alert(`
             Opción inválida: Por favor, ingresar una opción correcta`);
    }
}


while (accion != "SALIR") {
    // debugger;
    if (accion == "") {
        accion = prompt(`Seleccione una operacion:
        --------------------------
    [AGREGAR] un producto
    [MOSTRAR] detalle
    [ELIMINAR] un producto
    [VACIAR] carrito
    [CONFIRMAR] compra
    [CANCELAR] compra`);
        accion = accion.toUpperCase()
        accion = accion.toUpperCase()
    }

    if (accion == "AGREGAR") {
        //let repetirOperacion = "SI";
        agregarAlCarrito()
    }
    else if (accion == "MOSTRAR") {
        alert(mostrarDetalle())
    }
    else if (accion == "CANCELAR") {
        cancelarCompra()
    }
    else if (accion == "ELIMINAR") {
        alert(`falta funcion ELIMINAR`)
        accion = ""
    }
    else if (accion == "VACIAR") {
        vaciarCarrito()
    }
    else {
        alert(`El menu todavia no esta desarrollado`)
        accion = ""
    }
    
}

