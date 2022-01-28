window.addEventListener('load', () => {
    console.log('vinculacion exitosa');


    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const small = document.querySelectorAll(".validation")
    const form = qs(".formEdit")
    const text = qs("textarea")
    const select = qs("select")
    const image = qs("#image")
const smallTitulo = qs("#smallTitulo")

    const titulo = qs("#titulo")
    const precio = qs("#precio")
    const categorias = qs("#categorias")
    const descripcion = qs("#descripcion")
    const smallText = qs("#smallDescripcion")
    const smallImage= qs("#smallImage")

    const inputs = [titulo, precio]
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    form.addEventListener("submit", (e) => {
        for (let i = 0; i < inputs.length; i++) {
            //// ningun campo puede quedar vacio
            if (inputs[i].value === "") {
                e.preventDefault()
                inputs[i].classList.remove("is-valid")
                inputs[i].classList.add("is-invalid")
                small[i].innerText = "No puede quedar vacio"
                small[i].classList.remove("is-validSmall")
                small[i].classList.add("is-invalidSmall")
            } else if (inputs[i].classList.contains("is-invalid")) {
                inputs[i].classList.remove("is-invalid")
                inputs[i].classList.add("is-valid")
                small[i].innerText = "Campo completado correctamente"
                small[i].classList.remove("is-invalidSmall")
                small[i].classList.add("is-validSmall")
            }
        }
        ///minimo de 5 caracteres para el titulo
        if(titulo.value.length < 5) {
            e.preventDefault()
            titulo.classList.remove("is-valid")
            titulo.classList.add("is-invalid")
            smallTitulo.innerText = "El titulo debe contener mas de 5 caracteres"
            smallTitulo.classList.remove("is-validSmall")
            smallTitulo.classList.add("is-invalidSmall")
        } else if (titulo.classList.contains("is-invalid")) {
            titulo.classList.remove("is-invalid")
            titulo.classList.add("is-valid")
            smallTitulo.innerText = "Campo completado correctamente"
            smallTitulo.classList.remove("is-invalidSmall")
            smallTitulo.classList.add("is-validSmall")
        }
    
        ///// minimo de 20 caracteres en la descripcion
        if (text.value.length < 20) {
            e.preventDefault()
            text.classList.remove("is-valid")
            text.classList.add("is-invalid")
            smallText.innerText = "La descripcion debe tener mas de 20 caracteres"
            smallText.classList.remove("is-validSmall")
            smallText.classList.add("is-invalidSmall")
        } else if (text.classList.contains("is-invalid")) {
            text.classList.remove("is-invalid")
            text.classList.add("is-valid")
            smallText.innerText = "Campo completado correctamente"
            smallText.classList.remove("is-invalidSmall")
            smallText.classList.add("is-validSmall")
        }


        ////validacion de las Imagenes
        let files = image.files
        let fileErr =[]
        for(let i=0; i<files.length;i++){
            if(!regExExt.exec(files[i].name)){
                fileErr.push("no es una imagen")
            }
        }
        if(fileErr.length>0){
            e.preventDefault()
            image.classList.remove("is-valid")
            image.classList.add("is-invalid")
            smallImage.innerHTML = "solo se permiten imagenes"
            smallImage.classList.add("is-invalidSmall")
            smallImage.classList.remove("is-validSmall")
        }else{
            image.classList.remove("is-invalid")
            image.classList.add("is-valid")
            smallImage.innerHTML = "Bien!"
            smallImage.classList.remove("is-invalidSmall")
            smallImage.classList.add("is-validSmall")
        }

    })

    image.addEventListener("change", () => {
        
        let files = image.files
        let fileErr =[]
        console.log(files)
        for(let i=0; i<files.length;i++){
            if(!regExExt.exec(files[i].name)){
                fileErr.push("no es una imagen")
            }
        }
        if(fileErr.length>0){
            image.classList.remove("is-valid")
            image.classList.add("is-invalid")
            smallImage.innerHTML = "solo se permiten imagenes"
            smallImage.classList.add("is-invalidSmall")
            smallImage.classList.remove("is-validSmall")
        }else{
            image.classList.remove("is-invalid")
            image.classList.add("is-valid")
            smallImage.innerHTML = "Bien!"
            smallImage.classList.remove("is-invalidSmall")
            smallImage.classList.add("is-validSmall")
        }


    })

})