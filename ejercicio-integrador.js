// Para ordenarme mentalmente
// Tenemos un array con los productos
// Tenemos un array vacio sobre el que tenemos que aplicar los elementos del primer array a demanda del usuario
// Tenemos un menu que da las opciones para acccionar




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


let volverAlMenuPrincipal = "SI"
while (volverAlMenuPrincipal == "SI") {
    accion = prompt(`✅ Seleccione una operacion 
      --------------------------
      ➡️ [AGREGAR] un producto
      ➡️ [MOSTRAR] detalle 📄
      ➡️ [ELIMINAR] un producto ❌ 
      ➡️ [VACIAR] carrito
      ➡️ [CONFIRMAR] compra
      ➡️ [CANCELAR] compra 👋`);

    volverAlMenuPrincipal = volverAlMenuPrincipal.toUpperCase()
    accion = accion.toUpperCase()


    //     //...............AGREGAR productos al carrito..............
    //Primero tenemos que conseguir meter los productos en el carrito. Tantos como el cliente quiera y si desea agregar mas sumarlos a los existentes
    // Y entonces empezamos a trabajar con el array carrito
    //Mientras el cliente siga haciendo cosas tiene que volver al menu inicial
    if (accion == "AGREGAR") {
        //         let repetirOperacion = "SI";

        const agregarAlCarrito = () => {
            let productoAAgregar = prompt(`${catalogo()}
        Indique el id del productor que desea agregar al carrito`);
        /*
                    Si el producto existe, preguntar cuantas unidades va a llevar del producto y agregarlo al carrito
                    Si el producto ya se encontraba en el carrito, debe incrementar la cantidad de unidades que está comprando
                    */

        let idValido = false;
        for (let i = 0; i < productosAlaVenta.length; i++) {
            for (let j = 0; j < productosAlaVenta[i].length; j++) {

                if (productoAAgregar == productosAlaVenta[i][j]) {
                    let cantidadAAgregar = prompt("Cuántas unidades desea agregar?")
                    idValido = true

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
                                carritoDeCompra.push(productosAlaVenta[i])
                                carritoDeCompra[i][4].push(cantidadAAgregar)
                            }
                        }
                    }
                }
            }
        }
        if (idValido === false) {
            alert("Ingrese un id valido")
        }
        console.log(`Carrito de compra: ${carritoDeCompra}`)

        }

        const repetirOperacion = () => {
            let confirmacion prompt("Desea repetir la operacion?") 
            if ()
        }
    }
    volverAlMenuPrincipal = "no"
}

// //         while (repetirOperacion == "SI") {
// //             nombreProducto = prompt(" 📓 Ingrese el nombre del usuario");
// //             telefono = prompt(" 📞 Ingrese el teléfono del usuario");
// //             email = prompt(" 📫 Ingrese email del usuario");
// //             let nuevoUsuario = [id, nombre, telefono, email];
// //             let respuesta = prompt(`Los datos del usuario ingresado son:
// //           ID: ${id}    
// //           NOMBRE: ${nombre} 
// //           TELEFONO: ${telefono} 
// //           EMAIL: ${email}
// //           Desea confirmar SI -NO ?
// //           `);
// //             respuesta = respuesta.toUpperCase()
// //             if (respuesta == "SI") {
// //                 productosAlaVenta.push(nuevoUsuario);
// //                 alert("El usuario fue guardado exitosamente!")
// //             } else {
// //                 alert("Los cambios no han sido guardadosse cancelo la operacion.");
// //             }
// //             repetirOperacion = prompt(`Desea agregar otro usuario? (SI-NO)`);
// //             repetirOperacion = repetirOperacion.toUpperCase()
// //         }


// //     }

// //     if (accion == "LISTAR") {
// //         let mostrarUsuarios = "";
// //         for (let i = 0; i < productosAlaVenta.length; i++) {
// //             mostrarUsuarios = mostrarUsuarios +
// //                 `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  TELEFONO: ${productosAlaVenta[i][2]};  MAIL: ${productosAlaVenta[i][3]}
// // `;
// //         }
// //         alert(mostrarUsuarios);

// //     }

// //     if (accion == "ELIMINAR") {
// //         let repetirOperacion = "SI";
// //         repetirOperacion = repetirOperacion.toUpperCase()
// //         let usuarioEncontrado = false;
// //         while (repetirOperacion == "SI") {
// //             let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
// //             for (i = 0; i < productosAlaVenta.length; i++) {
// //                 if (productosAlaVenta[i][0] == usuarioAEliminar) {
// //                     confirmarOperacion = prompt(`Los datos del usuario a eliminar son:
// //                   ID: ${productosAlaVenta[i][0]}
// //                   NOMBRE: ${productosAlaVenta[i][1]}
// //                   TELEFONO: ${productosAlaVenta[i][2]}
// //                   MAIL: ${productosAlaVenta[i][3]}
// //                   Desea confirmar? (SI-NO)
// //                   `)
// //                     if (confirmarOperacion == "SI") {
// //                         productosAlaVenta.splice(i, 1);
// //                         alert("La operacion ha sido realizada exitosamente");
// //                     } else {
// //                         alert("La operacion ha sido cancelada")
// //                     }
// //                 }
// //             }
// //         }
// //     }

// //     if (accion == "SALIR") {
// //         let confirma = prompt('Confirma que quiere salir del programa SI - NO?')
// //         confirma = confirma.toUpperCase()
// //         if (confirma == "SI") {
// //             alert('Muchas gracias por su atención')
// //             volverAlMenuPrincipal = "NO"
// //         } else {
// //             volverAlMenuPrincipal = "SI"
// //         };
// //     };

// // }

//Lo de Matias

//let productosAlaVenta = [

//     [1, "Notebook Lenobo S400", 100, "si"],
//     [2, "Celular Notorola G5", 135, "no"],
//     [3, "Smart TV Filis 43'", 190, "si"],
//     [4, "Sorny PS 7", 215, "si"]

// ]

// let carritoDeCompra = [];

// //Bienvenida

// const listarProductos = () =>{
//   let mostrarProductos = "";
//   for (let i = 0; i < productosAlaVenta.length; i++) {
//       mostrarProductos = mostrarProductos +
//           `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  PRECIO: ${productosAlaVenta[i][2]};  APLICA DESCUENTO: ${productosAlaVenta[i][3]}
//   `;
//   }

//   return mostrarProductos

// }


// //Opciones para el cliente
//   alert(`Bienvenido a nuestra tienda, estos son nuestros productos 
//       ${listarProductos()}`);

// let volverAlMenuPrincipal = "SI";
// let action = "";
// while (volverAlMenuPrincipal == "SI") {
//    let accion = prompt(`✅ Seleccione una operacion 
//       --------------------------
//       ➡️ [AGREGAR] un producto
//       ➡️ [MOSTRAR] detalle 📄
//       ➡️ [ELIMINAR] un producto ❌ 
//       ➡️ [VACIAR] carrito
//       ➡️ [CONFIRMAR] compra
//       ➡️ [CANCELAR] compra 👋`);

//     volverAlMenuPrincipal = volverAlMenuPrincipal.toUpperCase()
//     accion = accion.toUpperCase()


// //     //...............AGREGAR productos al carrito..............
// //Primero tenemos que conseguir meter los productos en el carrito. Tantos como el cliente quiera y si desea agregar mas sumarlos a los existentes
// // Y entonces empezamos a trabajar con el array carrito
// //Mientras el cliente siga haciendo cosas tiene que volver al menu inicial
//     if (accion == "AGREGAR") {
// //         let repetirOperacion = "SI";
//         let productoAAgregar = prompt(`${listarProductos()}
//         Indique el id del productor que desea agregar al carrito`);
// /*
//             Si el producto existe, preguntar cuantas unidades va a llevar del producto y agregarlo al carrito
//             Si el producto ya se encontraba en el carrito, debe incrementar la cantidad de unidades que está comprando
//             */
//         let idValido = false;

//         for (producto of productosAlaVenta) {
//             if (productoAAgregar == producto[0]) {
//                     let cantidadAAgregar = prompt("Cuántas unidades desea agregar?");
//                     let noExisteEnCarrito = true;
//                     for(const [index,item] of carritoDeCompra){
//                       if(item[0] == productoAAgregar){
//                         carritoDeCompra[index][4] += cantidadAAgregar;
//                         noExisteEnCarrito= false
//                       }
//                     }
//                     if(noExisteEnCarrito){
//                       let item  = producto;
//                       item[4] = parseInt(cantidadAAgregar)
//                       carritoDeCompra.push(item);
//                     }
//                     idValido = true;
//                 }
//             }
//      console.log(carritoDeCompra)
//         }
//         action = ""
//         volverAlMenuPrincipal = "";

// }