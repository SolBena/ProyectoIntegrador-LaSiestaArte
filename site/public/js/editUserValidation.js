window.addEventListener("load",()=>{
let qs =(algo)=>{ return document.querySelector(algo)}


let provincia= qs("#provincia")
let localidad= qs("#localidad")
let userProv=qs("#userProv")
let userLoc=qs("#userLoc")
let formEdit=qs("#formUserEdit")
let nombre=qs("#nombre")
let apellido=qs("#apellido")
let telefono=qs("#telefono")
let inputs=[nombre,apellido,telefono]
let smallNombre=qs("#smallNombre")
let smallApellido=qs("#smallApellido")
let smallTelefono=qs("#smallTelefono")
let smallPerfil=qs("#smallPerfil")
let perfil=qs("#perfil")
let imgPreview=qs("#img-preview")

let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i

formEdit.addEventListener("submit",(e)=>{

    for (let i = 0; i < inputs.length; i++) {
        //// ningun campo puede quedar vacio
        if (inputs[i].value === "") {
            e.preventDefault()
            inputs[i].classList.remove("is-valid")
            inputs[i].classList.add("is-invalid")
        } else if (inputs[i].classList.contains("is-invalid")) {
            inputs[i].classList.remove("is-invalid")
            inputs[i].classList.add("is-valid")
        }
    }
    if(nombre.value.length < 3) {
        e.preventDefault()
        nombre.classList.remove("is-valid")
        nombre.classList.add("is-invalid")
        smallNombre.innerText = "El nombre debe contener al menos 5 caracteres"
        smallNombre.classList.remove("is-validSmall")
        smallNombre.classList.add("is-invalidSmall")
    } else if (nombre.classList.contains("is-invalid")) {
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
        smallNombre.innerText = "Campo completado correctamente"
        smallNombre.classList.remove("is-invalidSmall")
        smallNombre.classList.add("is-validSmall")
    }

    if(apellido.value.length < 3) {
        e.preventDefault()
        apellido.classList.remove("is-valid")
        apellido.classList.add("is-invalid")
        smallApellido.innerText = "El apellido debe contener al menos 3 caracteres"
        smallApellido.classList.remove("is-validSmall")
        smallApellido.classList.add("is-invalidSmall")
    } else if (nombre.classList.contains("is-invalid")) {
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
        smallApellido.innerText = "Campo completado correctamente"
        smallApellido.classList.remove("is-invalidSmall")
        smallApellido.classList.add("is-validSmall")
    }

    if(telefono.value.length >7 && telefono.value.length<11) {
        e.preventDefault()
        telefono.classList.remove("is-valid")
        telefono.classList.add("is-invalid")
        smallTelefono.innerText = "El telefono debe contener entre 8 y 10 caracteres"
        smallTelefono.classList.remove("is-validSmall")
        smallTelefono.classList.add("is-invalidSmall")
    } else if (nombre.classList.contains("is-invalid")) {
        telefono.classList.remove("is-invalid")
        telefono.classList.add("is-valid")
        smallTelefono.innerText = "Campo completado correctamente"
        smallTelefono.classList.remove("is-invalidSmall")
        smallTelefono.classList.add("is-validSmall")
    }

    if(!regExExt.exec(perfil.value)){
        e.preventDefault()
        perfil.classList.remove("is-valid")
        perfil.classList.add("is-invalid")
        smallPerfil.innerHTML = "solo se permiten imagenes"
        smallPerfil.classList.add("is-invalidSmall")
        smallPerfil.classList.remove("is-validSmall")
    }else{
        formEdit.submit()
        perfil.classList.remove("is-invalid")
        perfil.classList.add("is-valid")
        smallPerfil.innerHTML = "Bien!"
        smallPerfil.classList.remove("is-invalidSmall")
        smallPerfil.classList.add("is-validSmall")
    }


})

perfil.addEventListener("change",(e)=>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => imgPreview.src = reader.result
    changeImage(e.target.name, e.target.files)
})




fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(resultado => {
        return resultado.json()
    })
    .then(provData => {
        let prov = provData.provincias.map(provincia=>{
            return provincia.nombre
        })
        let provAz= prov.sort()
        
        
        for (let i = 0; i < provAz.length; i++) {
            if(userProv.value===provAz[i]){
            provincia.innerHTML += `<option value="${provAz[i]}" selected  > ${provAz[i]} </option>`
            }else{
            provincia.innerHTML += `<option value="${provAz[i]}"> ${provAz[i]} </option>`
            }
        }
    }).then(()=>{
        if(provincia.value==="Ciudad Autónoma de Buenos Aires" || provincia.value==="Santiago del Estero" || provincia.value==="Santa Cruz"|| provincia.value==="Entre Ríos"){
                fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia.value}&max=300`)
                .then(resultado => {
                    
                    return resultado.json()
                })
                .then(data => {
                    let localidades= data.localidades.map(element=>{
                        return element.nombre
                    })
                    console.log(localidades)
                    let localidadesAz= localidades.sort()
                    for (let i = 0; i < localidadesAz.length; i++) {
                        if(localidadesAz[i]===userLoc.value){
                        localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]} selected>${localidadesAz[i]} </option>`
                        }else{
                            localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]}>${localidadesAz[i]} </option>`
                        }
                    }
                })
            }
            fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.value}&max=300`)
                .then(resultado => {
                    
                    return resultado.json()
                })
                .then(data => {
                    let muni= data.municipios.map(element=>{
                        return element.nombre
                    })
                    let muniAz= muni.sort()
                    for (let i = 0; i < muniAz.length; i++) {
                        if(muniAz[i]===userLoc.value){
                        localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]} selected>${muniAz[i]} </option>`
                        }else{
                            localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]}>${muniAz[i]} </option>`
                        }
                    }
                })
    })
    provincia.addEventListener("change", () => {
        if(provincia.value==="Ciudad Autónoma de Buenos Aires" || provincia.value==="Santiago del Estero" || provincia.value==="Santa Cruz"|| provincia.value==="Entre Ríos"){
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia.value}&max=300`)
            .then(resultado => {
                
                return resultado.json()
            })
            .then(data => {
                localidad.innerHTML = `<option class="optionProv" value="0" disabled selected> Seleccione tu localidad </option>`
                let localidades= data.localidades.map(element=>{
                    return element.nombre
                })
                console.log(localidades)
                let localidadesAz= localidades.sort()
                for (let i = 0; i < localidadesAz.length; i++) {
                    localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]}>${localidadesAz[i]} </option>`
                }
            })
        }
        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.value}&max=300`)
            .then(resultado => {
                
                return resultado.json()
            })
            .then(data => {
                localidad.innerHTML = `<option class="optionProv" value="0" disabled selected> Seleccione tu localidad </option>`
                let muni= data.municipios.map(element=>{
                    return element.nombre
                })
                let muniAz= muni.sort()
                for (let i = 0; i < muniAz.length; i++) {
                    localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]} >${muniAz[i]} </option>`
                }
            })
    })
    
            





})