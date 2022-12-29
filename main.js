//simulador pedido de servicio

const contratarServicio = () => {
    let nombre = '';
    let email = '';
    let numeroDeTelefono = 0;
    let rubro = '';
    let servicio = '';
    let empleados = 0;
    let contacto = '';
    let validarServicio = false;
    let seguirContratando = false;
    let aceptarServicio = false;

    do {
        nombre = prompt('Ingrese su nombre o Razon Social');
        email = prompt('Ingrese su email');
        numeroDeTelefono = parseInt(prompt('Ingrese su numero de telefono'));
        rubro = prompt('Ingrese el rubro en el cual trabaja');
        servicio = prompt('Que servicio deseas adquirir?:\n 1. Desarrollo Web\n 2. Consultoria Impositiva\n3. Marketing & Publicidad');
        do {
            switch (servicio) {
                case '1':
                    validarServicio = 'Desarrollo Web';
                    break;
                case '2':
                    validarServicio = 'Consultoria Impositiva';
                    break;
                case '3':
                    validarServicio = 'Marketing & Publicidad';
                    break;
                default:
                    alert('Alguno de los datos ingresados no son correctos.');
                    validarServicio = false;
                    servicio = prompt('Que servicio deseas adquirir?:\n 1. Desarrollo Web\n 2. Consultoria Impositiva\n3. Marketing & Publicidad');
            }
        } while (!validarServicio);

        empleados = parseInt(prompt('Cuantos empleados tiene tu empresa?'));
        cantidadEmpleados(empleados);

        seguirContratando = confirm('¿Querés agregar otro servicio?');
    } while (seguirContratando);

    contacto = parseInt(prompt('Como deseas ser contacto?:\n 1. Email\n 2. Llamada'));
    if (contacto === 1) {
        alert('Te vamos a contactar al email: ' + email + ' en menos de 24 horas');
    } else {
        alert('Un agente de atencion al cliente te estara llamando ala brevedad posible');
    };

    aceptarServicio = confirm('Ingresaste los siguientes datos: ' + nombre + ' ' + email + ' ' + numeroDeTelefono + ' Servicio a contratar ' + validarServicio);
    if (aceptarServicio) {
        alert('Su pedido a sido registrado con exito');
    } else {
        contratarServicio();
    };

};

const cantidadEmpleados = (empleados) => {
    if (empleados <= 100) {
        alert('Eres una Pyme y tienes el 10% de descuento en todos nuestros servicios');
    } else {
        alert('Eres en empresa de mas de 100 empleados por eso tenemos beneficios exclusivos para nuestros clientes premium');
    }
    return empleados;
};

contratarServicio();