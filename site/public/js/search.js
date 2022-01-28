window.addEventListener('load', () => {
    console.log("vinculacion search exitosa")
    let $= (algo)=>{
        return document.querySelector(algo)
    }

    let form = $("#formSearch")
    let busqueda = $("#searchBar")

    form.addEventListener("submit",(e)=>{
        if(!busqueda.value){
            e.preventDefault()
        }
    })
})