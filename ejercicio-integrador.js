
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
let codigoDescuento = "ADALOVELACE"
let descuento = 0.2

//Bienvenida

const catalogo = () => {
    let mostrarProductos = "";
    for (let i = 0; i < productosAlaVenta.length; i++) {
        mostrarProductos = mostrarProductos + `
        ID: ${productosAlaVenta[i][0]}  
        ${productosAlaVenta[i][1]}
        Precio: $ ${productosAlaVenta[i][2]}
        `;
        // Aplica descuento: ${productosAlaVenta[i][3]}  
    }
    return mostrarProductos
}
alert(`Bienvenid@ a nuestra tienda! 
Este es nuestro catálogo:
    ${catalogo()}`)


//...............AGREGAR productos al carrito..............

const agregarAlCarrito = () => {
    let subtotal = 0
    let subtotalNuevo = 0;
    let productoNuevo = []
    let productoAAgregar = prompt(`${catalogo()}
    Ingrese el ID del producto que desea agregar al carrito
    `);

    let idValido = false;
    for (let i = 0; i < productosAlaVenta.length; i++) {
        // for (let j = 0; j < productosAlaVenta[i][0].length; j++) {
        if (productoAAgregar == productosAlaVenta[i][0]) {
            let cantidadAAgregar = Number(prompt("¿Cuántas unidades desea agregar?"))
            // cantidadAAgregar = Number(cantidadAAgregar)
            idValido = true
            productoNuevo = productosAlaVenta[i]
            if (carritoDeCompra.length == 0) {
                carritoDeCompra.push(productosAlaVenta[i])
                carritoDeCompra[0][4] = cantidadAAgregar
                subtotal = cantidadAAgregar * productosAlaVenta[i][2];
                carritoDeCompra[0][5] = subtotal
            }
            else {
                for (let k = 0; k < carritoDeCompra.length; k++) {
                    if (carritoDeCompra[k][0] == productoAAgregar) {
                        carritoDeCompra[k][4] += cantidadAAgregar
                        carritoDeCompra[k][5] += productosAlaVenta[i][2] * cantidadAAgregar;
                        break;
                    }
                    else {
                        // debugger
                        productoNuevo.push(cantidadAAgregar)
                        console.log(productoNuevo)
                        subtotalNuevo = cantidadAAgregar * productosAlaVenta[i][2];
                        productoNuevo.push(subtotalNuevo)
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
        alert("Ingrese un ID valido")
    }
    console.log(carritoDeCompra)
    repetirOperacion()
}

const mostrarDetalle = () => {
    let detalleDelCarrito = "";
    accion = "";
    for (let i = 0; i < carritoDeCompra.length; i++) {
        if (carritoDeCompra[i][3] == "si") {
            carritoDeCompra[i][3] = "Sí"
        }
        else {
            carritoDeCompra[i][3] = "No"
        }
        detalleDelCarrito += `
                       🆔 ID: ${carritoDeCompra[i][0]} 
                       👤 Producto: ${carritoDeCompra[i][1]}
                       Precio: $ ${carritoDeCompra[i][2]}
                       Aplica descuento: ${carritoDeCompra[i][3]}
                       Cantidad de unidades: ${carritoDeCompra[i][4]}
                       ----------------------
                       `;
    }
    if (detalleDelCarrito == "") {
        detalleDelCarrito = alert(`El carrito está vacío. Ingrese al menú principal para agregar productos`)
    }
    return detalleDelCarrito;
}

const mostrarDetalleActualizado = () => {
    let detalle = mostrarDetalle(carritoDeCompra);
    let cantidadProductos = contarTotalDeProductos(carritoDeCompra);
    let total = subtotalDeCompra(carritoDeCompra);

    if (carritoDeCompra.length != 0) {
        alert(` Detalle de su compra: 
          ${detalle}
          Cantidad de unidades en el carrito: ${cantidadProductos}
          Precio Total: $ ${total} `)
    } else {
        alert(`El carrito está vacío. Ingrese al menú principal para agregar productos.`);
    }

}

const mostrarDetalleConDescuento = () => {

    let totalConDescuento = totalDescuento(carritoDeCompra);
    let ahorro = subtotalDeCompra(carritoDeCompra) - totalConDescuento;

    return `${mostrarDetalle(carritoDeCompra)}
            Total con descuento: $ ${totalConDescuento}
            Ahorro: $ ${ahorro}`;
}

const contarTotalDeProductos = carrito => {
    let cantidad = 0;

    for (let i = 0; i < carrito.length; i++) {
        cantidad += Number(carrito[i][4]);
    }

    return cantidad;
}


const subtotalDeCompra = carrito => {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i][5];
    }

    return total;
}

const totalDescuento = carrito => {
    let totalConDesc = 0;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i][3] == "si") {
            totalConDesc += carrito[i][5] * (1 - descuento)
        } else {
            totalConDesc += carrito[i][5]
        }
    }
    return totalConDesc
}

const confirmarCompra = () => {
    mostrarDetalleActualizado(carritoDeCompra)
    let respuestaDescuento = prompt(`¿Tiene un código de descuento? SI/NO`)
    respuestaDescuento = respuestaDescuento.toUpperCase()
    if (respuestaDescuento === "SI") {
        let codigoIngresado = prompt("Ingrese el código de descuento")
        if (codigoIngresado === codigoDescuento) {
            alert(`El código ingresado es correcto`)
            alert(`${mostrarDetalleConDescuento(carritoDeCompra)}`)

        } else {
            alert(`El código ingresado es incorrecto`)
        }
    }
    let confirmacion = prompt(`¿Desea confirmar la compra? SI/NO`)
    if (confirmacion.toUpperCase() === "SI") {
        alert(`La compra ha sido realizada exitosamente, gracias por comprar en nuestra tienda 👋`)
    } else {
        alert(`La operación fue cancelada.`)
        accion = "";
    }
}


const eliminarProducto = () => {
    if (carritoDeCompra.length > 0) {
        let indiceProductoEncontrado = 0
        let productoAEliminar = parseInt(prompt("Por favor ingrese el ID del producto que desea eliminar"))
        for (let j = 0; j < carritoDeCompra.length; j++) {
            if (productoAEliminar === carritoDeCompra[j][0]) {
                indiceProductoEncontrado = j
                let respuesta = prompt(`Los datos del producto a eliminar son los siguientes:
            ID: ${carritoDeCompra[j][0]}
            Producto: ${carritoDeCompra[j][1]}
            Cantidad de unidades: ${carritoDeCompra[j][4]}
            ¿Está seguro que desea eliminar el producto seleccionado? SI/NO`)

                if (respuesta.toUpperCase() === "SI") {
                    // eliminar el producto y mostrar msj de exito
                    carritoDeCompra.splice(indiceProductoEncontrado, 1);
                    alert("La operación se ha realizado exitosamente")

                } else {
                    alert("La operación ha sido cancelada")
                }

            }

        }

    } else {
        alert("El carrito está vacío");
        accion = "";
    }

    repetirOperacion()

}

const vaciarCarrito = () => {
    let confirmarVaciarCarrito = prompt(`¿Desea confirmar la acción? Se quitarán todos los productos del carrito.`)
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
    let confirma = prompt('¿Confirma que quiere cancelar? SI/NO')
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
    let confirmacion = prompt("¿Desea repetir la operacion?");
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
        accion = prompt(`Seleccione una operación:
        --------------------------
    [AGREGAR] un producto
    [MOSTRAR] detalle
    [ELIMINAR] un producto
    [VACIAR] carrito
    [CONFIRMAR] compra
    [CANCELAR] compra`);
        accion = accion.toUpperCase()
    }
    if (accion == "AGREGAR") {
        //let repetirOperacion = "SI";
        agregarAlCarrito()
    }
    else if (accion == "MOSTRAR") {
        mostrarDetalleActualizado(carritoDeCompra)
    }
    else if (accion == "CONFIRMAR") {
        confirmarCompra()
    }
    else if (accion == "ELIMINAR") {
        eliminarProducto()
    }
    else if (accion == "VACIAR") {
        vaciarCarrito()
    }
    else if (accion == "CANCELAR") {
        cancelarCompra()
    }
    else {
        alert(`Opción inválida: Por favor, ingresar una opción correcta`)
        accion = ""
    }
    
}

