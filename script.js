function mostrarCuriosidad() {

    const curiosidades = [

        "Colombia es uno de los países con mayor diversidad de aves del mundo.",

        "Colombia tiene costas sobre el mar Caribe y el océano Pacífico.",

        "La cumbia es una de las expresiones musicales tradicionales más reconocidas de Colombia.",

        "El café colombiano es uno de los productos más reconocidos internacionalmente.",

        "El Carnaval de Barranquilla es una de las celebraciones culturales más importantes de Colombia.",

        "Colombia posee una gran diversidad de regiones naturales y culturales.",

        "El vallenato es una importante expresión musical de la región Caribe.",

        "La arepa tiene diferentes preparaciones y variedades según la región.",

        "Colombia tiene playas, montañas, selvas, llanuras y desiertos.",

        "La Feria de las Flores de Medellín es una de las celebraciones tradicionales más conocidas del país.",

        "El sombrero vueltiao es una de las artesanías colombianas más reconocidas.",

        "El joropo es una expresión musical y dancística tradicional de los Llanos.",

        "Cali es reconocida internacionalmente por su relación con la salsa.",

        "La región Amazónica colombiana posee una enorme biodiversidad."
    ];


    const numero =
        Math.floor(
            Math.random() *
            curiosidades.length
        );


    document.getElementById(
        "curiosidad"
    ).textContent =
        curiosidades[numero];

}