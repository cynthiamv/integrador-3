let productosAlaVenta = [

    [1, "Notebook Lenobo S400", 100, "si"],
    [2, "Celular Notorola G5", 135, "no"],
    [3, "Smart TV Filis 43'", 190, "si"],
    [4, "Sorny PS 7", 215, "si"]

]

let carritoDeCompra = [];
let Id = productosAlaVenta[0]
let nombreProducto = productosAlaVenta[1]
let precioProducto = productosAlaVenta[2]

let mostrarProductos = "";
for (let i = 0; i < productosAlaVenta.length; i++) {
    mostrarProductos = mostrarProductos +
        `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  PRECIO: ${productosAlaVenta[i][2]};  APLICA DESCUENTO: ${productosAlaVenta[i][3]}
`;
}
alert(`Bienvenido a nuestra tienda, estos son nuestros productos 
    ${mostrarProductos}`);


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


    //...............AGREGAR..............

    if (accion == "AGREGAR") {
        let repetirOperacion = "SI";
        let mostrarProductos = "";

        for (let i = 0; i < productosAlaVenta.length; i++) {
            mostrarProductos = mostrarProductos +
                `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  PRECIO: ${productosAlaVenta[i][2]};  APLICA DESCUENTO: ${productosAlaVenta[i][3]}
`;
        }
        let productoAAgregar = prompt(`${mostrarProductos}
        Indique el id del productor que desea agregar al carrito`);

        let idValido = false;
        for (let i = 0; i < productosAlaVenta.length; i++) {
            for (let j = 0; j < productosAlaVenta[i].length; j++) {

                if (productoAAgregar == productosAlaVenta[i][j]) {
                    let cantidadAAgregar = prompt("Cuántas unidades desea agregar?")
                    for (let k = 1; k <= cantidadAAgregar; k++) {
                        carritoDeCompra.push(productosAlaVenta[i]);

                    }

                    idValido = true;
                }

            }
        }
        if (idValido === false) {
            alert("Ingrese un id valido")
        }
        console.log(carritoDeCompra)
    }
}

//         while (repetirOperacion == "SI") {
//             nombreProducto = prompt(" 📓 Ingrese el nombre del usuario");
//             telefono = prompt(" 📞 Ingrese el teléfono del usuario");
//             email = prompt(" 📫 Ingrese email del usuario");
//             let nuevoUsuario = [id, nombre, telefono, email];
//             let respuesta = prompt(`Los datos del usuario ingresado son:
//           ID: ${id}    
//           NOMBRE: ${nombre} 
//           TELEFONO: ${telefono} 
//           EMAIL: ${email}
//           Desea confirmar SI -NO ?
//           `);
//             respuesta = respuesta.toUpperCase()
//             if (respuesta == "SI") {
//                 productosAlaVenta.push(nuevoUsuario);
//                 alert("El usuario fue guardado exitosamente!")
//             } else {
//                 alert("Los cambios no han sido guardadosse cancelo la operacion.");
//             }
//             repetirOperacion = prompt(`Desea agregar otro usuario? (SI-NO)`);
//             repetirOperacion = repetirOperacion.toUpperCase()
//         }


//     }

//     if (accion == "LISTAR") {
//         let mostrarUsuarios = "";
//         for (let i = 0; i < productosAlaVenta.length; i++) {
//             mostrarUsuarios = mostrarUsuarios +
//                 `ID: ${productosAlaVenta[i][0]};  NOMBRE: ${productosAlaVenta[i][1]};  TELEFONO: ${productosAlaVenta[i][2]};  MAIL: ${productosAlaVenta[i][3]}
// `;
//         }
//         alert(mostrarUsuarios);

//     }

//     if (accion == "ELIMINAR") {
//         let repetirOperacion = "SI";
//         repetirOperacion = repetirOperacion.toUpperCase()
//         let usuarioEncontrado = false;
//         while (repetirOperacion == "SI") {
//             let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
//             for (i = 0; i < productosAlaVenta.length; i++) {
//                 if (productosAlaVenta[i][0] == usuarioAEliminar) {
//                     confirmarOperacion = prompt(`Los datos del usuario a eliminar son:
//                   ID: ${productosAlaVenta[i][0]}
//                   NOMBRE: ${productosAlaVenta[i][1]}
//                   TELEFONO: ${productosAlaVenta[i][2]}
//                   MAIL: ${productosAlaVenta[i][3]}
//                   Desea confirmar? (SI-NO)
//                   `)
//                     if (confirmarOperacion == "SI") {
//                         productosAlaVenta.splice(i, 1);
//                         alert("La operacion ha sido realizada exitosamente");
//                     } else {
//                         alert("La operacion ha sido cancelada")
//                     }
//                 }
//             }
//         }
//     }

//     if (accion == "SALIR") {
//         let confirma = prompt('Confirma que quiere salir del programa SI - NO?')
//         confirma = confirma.toUpperCase()
//         if (confirma == "SI") {
//             alert('Muchas gracias por su atención')
//             volverAlMenuPrincipal = "NO"
//         } else {
//             volverAlMenuPrincipal = "SI"
//         };
//     };

// }