window.addEventListener('load', () => {
    console.log('vinculacion products exitosa');

    let select = document.querySelector('#categorias')
    let selectOrden = document.querySelector('#orden')

    let section = document.querySelector('#pdtos-container')

    select.addEventListener('change', () => {
        fetch( `http://localhost:3000/api/products?categoria=${select.value}`)
        .then(response=>{
           return response.json()
        })
        .then(productos => {
            selectOrden.value = 'default'
            console.log(productos);
            section.innerHTML = ''
            productos.data.forEach(producto => {
                section.innerHTML += `
                <article class="pdto">
                            <div class="img-container">
                                <div class="photo">
                                    <a href="/products/detail/${producto.id} "> <img
                                            src='/img/products/${producto.productosIm[0].nombre}' width="100%"
                                            alt="${producto.titulo}" /></a>
                                </div>
                            </div>
                            <div class="description">
                                <div class="categoria">
                                    <h3 class="subt">
                                        ${producto.nombre}
                                    </h3>
                                    <i class="fas fa-regular fa-heart"></i>
                                </div>

                                <h2 class="subtprecio">
                                    $ ${producto.precio} 
                                </h2>
                                <p>
                                    ${producto.categoriasPr.nombre} 
                                </p>
                            </div>
                        </article>
                `
            });

        })
    })

    selectOrden.addEventListener('change', () => {
        fetch( `http://localhost:3000/api/products/orden`)
        .then(response=>{
           return response.json()
        })
        .then(productos => {
            select.value = 'default'
            console.log(productos);
            section.innerHTML = ''
            switch (selectOrden.value) {
                case "asc":
                    productos.data.sort((a,b) => {
                        return a.precio - b.precio
                    }) 
                    break;

                case "desc":
                    productos.data.sort((a,b) => {
                        return b.precio - a.precio
                    }) 
                    break;
                    
                case "a-z":
                    productos.data.sort((a,b) => {
                        const nombreA = a.nombre.toLowerCase().trim();
                        const nombreB = b.nombre.toLowerCase().trim();
                        if(nombreA < nombreB){
                            return -1
                        }
                        if(nombreA > nombreB){
                            return 1
                        }
                        return 0
                    }) 
                    break;

                case "z-a":
                    productos.data.sort((a,b) => {
                        const nombreA = a.nombre.toLowerCase().trim();
                        const nombreB = b.nombre.toLowerCase().trim();
                        if(nombreA > nombreB){
                            return -1
                        }
                        if(nombreA < nombreB){
                            return 1
                        }
                        return 0
                    }) 
                    break;
                default:
                    break;
            }
            
            productos.data.forEach(producto => {
                section.innerHTML += `
                <article class="pdto">
                            <div class="img-container">
                                <div class="photo">
                                    <a href="/products/detail/${producto.id} "> <img
                                            src='/img/products/${producto.productosIm[0].nombre}' width="100%"
                                            alt="${producto.titulo}" /></a>
                                </div>
                            </div>
                            <div class="description">
                                <div class="categoria">
                                    <h3 class="subt">
                                        ${producto.nombre}
                                    </h3>
                                    <i class="fas fa-regular fa-heart"></i>
                                </div>

                                <h2 class="subtprecio">
                                    $ ${producto.precio} 
                                </h2>
                                <p>
                                    ${producto.categoriasPr.nombre} 
                                </p>
                            </div>
                        </article>
                `
            });

        })
    })
})