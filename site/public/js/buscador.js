window.addEventListener("load",()=>{
    const $ = (algo)=>{
        return document.querySelector(algo)
    }
    console.log("vinculado");
    const buscador = $("#buscador")
    const searchBar = $("#searchBar")

    searchBar.addEventListener("input",(e)=>{
        
        if(e.target.value.length>2){
            buscador.style.display = "flex"
            fetch(`http://localhost:3000/api/products/search?buscar=${e.target.value}`)
            .then(response=>{
                return response.json()
            })
            .then(productos=>{
                buscador.innerHTML=""
                for(let i=0; i<productos.data.length;i++){
                    buscador.innerHTML += `
                    <div class="divEncontrado">
                    <img class="imgEncontrado" src='/img/products/${productos.data[i].productosIm[0].nombre}'/>
                    <a class="productoEncontrado" href="/products/detail/${productos.data[i].id}">${productos.data[i].nombre}</a>
                    </div>`
                }
            })
        }
        buscador.innerHTML=""
    })

    buscador.addEventListener("mouseleave",()=>{
        buscador.innerHTML=""
    })


})