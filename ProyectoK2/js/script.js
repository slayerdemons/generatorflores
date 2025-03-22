function mostrarDatos() {
    // Obtener los valores ingresados
    const nombre = document.getElementById('name').value;
    const cantidad = document.getElementById('cantidad').value;
    const fondo = document.getElementById('fondo').value.toLowerCase();

    // Validar los datos
    if (!nombre || !cantidad || !fondo) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Cerrar la ventana actual
    window.close();

    // Crear una nueva ventana (pestaña)
    const ventana = window.open("", "_blank", "width=800,height=600");

    // Escribir el HTML en la nueva ventana
    ventana.document.write(`
        <html>
            <head>
                <title>Flores para ${nombre}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        background-color: #f9f9f9;
                    }
                    .flor-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        margin: 20px auto;
                        padding: 20px;
                    }
                    .flor-container-con-fondo {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-size: contain; /* Ajusta el tamaño del fondo */
                        background-repeat: no-repeat; /* No repetir el fondo */
                        background-position: center; /* Centra la imagen de fondo */
                        height: 500px; /* Definir una altura para el área del fondo */
                        width: 100%;
                        border: 2px solid #ddd;
                        max-width: 600px;
                    }
                    .fotografia {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%); /* Centra la imagen */
                        max-width: 50%; /* Limitar el tamaño de la imagen */
                        height: auto;
                    }
                    .flor {
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        object-fit: contain;
                        margin: 0;
                        transition: all 0.2s ease-in-out;
                    }
                    .regresar {
                        background-color: #4CAF50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 20px;
                        text-decoration: none;
                    }
                    .regresar:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <h2>¡Hola, ${nombre}!</h2>
                <p>Te mereces flores fisicas, pero por ahora es lo mejor que pude hacer.</p>
    `);

    // Crear las flores
    let floresHTML = '';
    let tamañoFlor = 50; // Tamaño inicial de las flores

    // Ajustar tamaño de las flores si la cantidad es grande
    if (cantidad > 30) {
        tamañoFlor = 30; // Si la cantidad es mayor a 30, reducimos el tamaño de las flores
    }

    // Generar las flores
    for (let i = 0; i < cantidad; i++) {
        const randomX = Math.random() * 100; // Coordenada aleatoria en el eje X
        const randomY = Math.random() * 100; // Coordenada aleatoria en el eje Y

        if (fondo === "si") {
            // Si se eligió fondo, las flores se distribuyen aleatoriamente por el contenedor, pero la imagen está centrada
            floresHTML += `<img class="flor" src="img/flor.png" alt="Flor" style="top: ${randomY}%; left: ${randomX}%; width: ${tamañoFlor}px; height: ${tamañoFlor}px;">`;
        } else {
            // Si no se eligió fondo, las flores se distribuyen aleatoriamente
            floresHTML += `<img class="flor" src="img/flor.png" alt="Flor" style="top: ${randomY}%; left: ${randomX}%; width: ${tamañoFlor}px; height: ${tamañoFlor}px;">`;
        }
    }

    if (fondo === "si") {
        // Si se eligió un fondo
        ventana.document.write(`
            <div class="flor-container-con-fondo" style="background-image: url('img/fondos.jpg');">
                <img src="img/florG.png" alt="Fotografía" class="fotografia">
                ${floresHTML}
            </div>
        `);
    } else {
        // Si no se eligió fondo
        ventana.document.write(`
            <div class="flor-container">
                ${floresHTML}
            </div>
        `);
    }

    // Agregar el botón de regresar
    ventana.document.write(`
        <p><a href="index.html" class="regresar">← Regresar al inicio</a></p>
    `);

    ventana.document.write("</body></html>");
}






