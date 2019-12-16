let productosAlaVenta = [
    [0, "", "", ""],
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filis 43'", 190, true],
    [4,	"Sorny PS 7", 215, true]
    
]

const agregarProducto = () => {

}

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

        while (repetirOperacion == "SI") {
            nombre = prompt(" 📓 Ingrese el nombre del usuario");
            telefono = prompt(" 📞 Ingrese el teléfono del usuario");
            email = prompt(" 📫 Ingrese email del usuario");
            let nuevoUsuario = [id, nombre, telefono, email];
            let respuesta = prompt(`Los datos del usuario ingresado son:
          ID: ${id}    
          NOMBRE: ${nombre} 
          TELEFONO: ${telefono} 
          EMAIL: ${email}
          Desea confirmar SI -NO ?
          `);
            respuesta = respuesta.toUpperCase()
            if (respuesta == "SI") {
                listaUsuarios.push(nuevoUsuario);
                alert("El usuario fue guardado exitosamente!")
            } else {
                alert("Los cambios no han sido guardadosse cancelo la operacion.");
            }
            repetirOperacion = prompt(`Desea agregar otro usuario? (SI-NO)`);
            repetirOperacion = repetirOperacion.toUpperCase()
        }

        
    }

    if (accion == "LISTAR") {
        let mostrarUsuarios = "";
        for (let i = 0; i < listaUsuarios.length; i++) {
            mostrarUsuarios = mostrarUsuarios +
                `ID: ${listaUsuarios[i][0]};  NOMBRE: ${listaUsuarios[i][1]};  TELEFONO: ${listaUsuarios[i][2]};  MAIL: ${listaUsuarios[i][3]}
`;
        }
        alert(mostrarUsuarios);

    }

    if (accion == "ELIMINAR") {
        let repetirOperacion = "SI";
        repetirOperacion = repetirOperacion.toUpperCase()
        let usuarioEncontrado = false;
        while (repetirOperacion == "SI") {
            let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
            for (i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i][0] == usuarioAEliminar) {
                    confirmarOperacion = prompt(`Los datos del usuario a eliminar son:
                  ID: ${listaUsuarios[i][0]}
                  NOMBRE: ${listaUsuarios[i][1]}
                  TELEFONO: ${listaUsuarios[i][2]}
                  MAIL: ${listaUsuarios[i][3]}
                  Desea confirmar? (SI-NO)
                  `)
                    if (confirmarOperacion == "SI") {
                        listaUsuarios.splice(i, 1);
                        alert("La operacion ha sido realizada exitosamente");
                    } else {
                        alert("La operacion ha sido cancelada")
                    }
                }
            }
        }
    }

    if (accion == "SALIR") {
        let confirma = prompt('Confirma que quiere salir del programa SI - NO?')
        confirma = confirma.toUpperCase()
        if (confirma == "SI") {
            alert('Muchas gracias por su atención')
            volverAlMenuPrincipal = "NO"
        } else {
            volverAlMenuPrincipal = "SI"
        };
    };

}