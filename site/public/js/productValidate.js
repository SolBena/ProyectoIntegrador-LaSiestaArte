window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }
 
 const titulo = qs("#titulo")
 const precio = qs("#precio")
 const categorias = qs("#categorias")
 const descripcion = qs("#descripcion")
 const image = qs("#image")

 const button = qs('.crear')
 const form = qs("#createForm")
 //Se deshabilita el botón de iniciar sesión, si los campos cumplen los requisitos se activará
 button.disabled = true
 button.style.backgroundColor = 'gray'
 button.style.borderColor = 'gray'
 
 const funcValidate = (obj) => {
     let arr = Object.values(validate)
     if(!arr.includes(false)){
         button.disabled= false
         button.style.backgroundColor = 'var(--rojo)'
         button.style.borderColor = 'var(--bordo)'
     } else{
         button.disabled = true
         button.style.backgroundColor = 'gray'
         button.style.borderColor = 'gray'
     }
 }
 
 const validate = {
     titulo: false,
     precio: false,
     categorias: false,
     descripcion: false,
     image:true
 }

titulo.addEventListener("input",(e)=>{
    if(e.target.value.length<5){
        titulo.classList.remove("is-valid")
        titulo.classList.add("is-invalid")
        smallTitulo.innerHTML= "El Nombre debe tener mas de 5 caracteres"
        smallTitulo.classList.add("is-invalidSmall")
        smallTitulo.classList.remove("is-validSmall")
        validate.titulo=false

    } else{
        titulo.classList.remove("is-invalid")
        titulo.classList.add("is-valid")
        smallTitulo.innerHTML= "Campo completado correctamente"
        smallTitulo.classList.remove("is-invalidSmall")
        smallTitulo.classList.add("is-validSmall")
        validate.titulo=true
    }

    funcValidate(validate)
})
precio.addEventListener("input",(e)=>{
    if(e.target.value.length<1){
        precio.classList.remove("is-valid")
        precio.classList.add("is-invalid")
        smallPrecio.innerHTML= "El precio no puede quedar vacio"
        smallPrecio.classList.add("is-invalidSmall")
        smallPrecio.classList.remove("is-validSmall");
        validate.precio=false

    } else{
        precio.classList.remove("is-invalid")
        precio.classList.add("is-valid")
        smallPrecio.innerHTML= "Campo completado correctamente"
        smallPrecio.classList.remove("is-invalidSmall")
        smallPrecio.classList.add("is-validSmall")
        validate.precio=true
    }

    funcValidate(validate)
})
categorias.addEventListener("input",(e)=>{
    if(!e.target.value){
        categorias.classList.remove("is-valid")
        categorias.classList.add("is-invalid")
        smallCategorias.innerHTML= "Debes elegir una categoria"
        smallCategorias.classList.add("is-invalidSmall")
        smallCategorias.classList.remove("is-validSmall")
        validate.categorias=false

    } else{ 
        categorias.classList.remove("is-invalid")
        categorias.classList.add("is-valid")
        smallCategorias.innerHTML= "Campo completado correctamente"
        smallCategorias.classList.remove("is-invalidSmall")
        smallCategorias.classList.add("is-validSmall")
        validate.categorias=true
    }
    funcValidate(validate)
})
descripcion.addEventListener("input",(e)=>{
    if((e.target.value.length<21)){
        descripcion.classList.remove("is-valid")
        descripcion.classList.add("is-invalid")
        smallDescripcion.innerHTML= "La descripcion debe tener al menos 20 caracteres"
        smallDescripcion.classList.add("is-invalidSmall")
        smallDescripcion.classList.remove("is-validSmall")
        validate.descripcion=false

    } else{ 
        descripcion.classList.remove("is-invalid")
        descripcion.classList.add("is-valid")
        smallDescripcion.innerHTML= "Campo completado correctamente"
        smallDescripcion.classList.remove("is-invalidSmall")
        smallDescripcion.classList.add("is-validSmall")
        validate.descripcion=true
    }
    funcValidate(validate)
})

image.addEventListener("change", (e) => {

    let files= image.files
    let fileErr=[]
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i
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
        validate.image = false
    }
    else{
        image.classList.remove("is-invalid")
        image.classList.add("is-valid")
        smallImage.innerHTML = "Bien!"
        smallImage.classList.remove("is-invalidSmall")
        smallImage.classList.add("is-validSmall")
        validate.image = true
    }
    
    funcValidate(validate)

})

    console.log(validate)
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let arr = Object.values(validate)
        if(!arr.includes(false)){
            form.submit()
        }
    })
})