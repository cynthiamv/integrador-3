// const mostrarDetalle = () => {

// }

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
        mostrarProductos = mostrarProductos +
            `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  PRECIO: ${productosAlaVenta[i][2]};  APLICA DESCUENTO: ${productosAlaVenta[i][3]}
`;
    }
    return mostrarProductos
}
alert(`Bienvenido a nuestra tienda, estos son nuestros productos
    ${catalogo()}`)

//Opciones para el cliente
l
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
        let productoAAgregar = prompt(`${catalogo()}
    Indique el id del productor que desea agregar al carrito`);

        let idValido = false;
        for (let i = 0; i < productosAlaVenta.length; i++) {
            for (let j = 0; j < productosAlaVenta[i].length; j++) {
                if (productoAAgregar == productosAlaVenta[i][j]) {
                    let cantidadAAgregar = prompt("Cuántas unidades desea agregar?")
                    cantidadAAgregar = parseInt(cantidadAAgregar)
                    idValido = true
                    if (carritoDeCompra.length == 0) {
                        carritoDeCompra.push(productosAlaVenta[i])
                        carritoDeCompra[0][4] = cantidadAAgregar
                    } else {
                        for (let i = 0; i < carritoDeCompra.length; i++) {
                            if (carritoDeCompra[i][0] == productosAlaVenta[i]) {
                                // 62 era carritoDeCompra[i][0] == productosAlaVenta
                                carritoDeCompra[i][4] += cantidadAAgregar
                            }
                            //else {
                            //carritoDeCompra.push(productoAAgregar[i])
                            //carritoDeCompra[i][4].push(cantidadAAgregar)
                            // No sé bien por qué, pero me tiraba error en la linea 67
                            // La dejo comentada porque así funciona pero no entiendo
                            // y quiero entender
                            //}
                        }
                    }
                }
            }
            console.log(`Carrito de compra: ${carritoDeCompra}`)
        }
        if (idValido === false) {
            alert("Ingrese un id valido")
        }
    }
    if (accion == "AGREGAR") {
        //let repetirOperacion = "SI";
        agregarAlCarrito()
    }
    const repetirOperacion = (str) => {
        let confirmacion = prompt("Desea repetir la operacion?")
        if (confirmacion === "NO") {
            volverAlMenuPrincipal = "SI";
        } else if (confirmacion !== "SI") {
            alert(`
                 Opción inválida: Por favor, ingresar una opción correcta`);
            repetirOperacion()
        } else {
            agregarAlCarrito()
            repetirOperacion()
        }
        volverAlMenuPrincipal = "no"
    }
    repetirOperacion()
}