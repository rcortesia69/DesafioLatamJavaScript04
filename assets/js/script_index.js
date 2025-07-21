const ventaContainer = document.querySelector('#venta-container');
const alquilerContainer = document.querySelector('#alquiler-container');

// Aqui realizo una funcion general que renderiza las propiedades para evitar duplicar código
const renderPropiedades = (propiedades, container, max = propiedades.length) => {
    let html = "";
    for (let i = 0; i < max && i < propiedades.length; i++) {
        const prop = propiedades[i];
        
        const smokeText = prop.smoke ?
            `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` :
            `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
        
        const petsText = prop.pets ?
            `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` :
            `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;

        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad" />
                    <div class="card-body">
                        <h5 class="card-title">${prop.nombre}</h5>
                        <p class="card-text">${prop.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${prop.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                        ${smokeText}
                        ${petsText}
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
};

renderPropiedades(propiedades_venta, ventaContainer, 3);
renderPropiedades(propiedades_alquiler, alquilerContainer, 3);