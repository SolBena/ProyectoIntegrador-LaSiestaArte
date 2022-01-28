window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const form = qs("#formV")
    const nombre = qs("#Nombre")
    const apellido = qs("#apellido")
    const provincia = qs("#provincia")
    const localidad = qs("#localidad")
    const telefono = qs("#telefono")
    const email = qs("#email")
    const password = qs("#Password")
    const password2 = qs("#Password2")
    const image = qs("#product-img")
    const smallEmail = qs('#smallEmail')
    const smallNombre = qs('#smallNombre')
    const smallApellido = qs('#smallApellido')
    const smallTelefono = qs('#smallTelefono')
    const smallLocalidad = qs('#smallLocalidad')
    const smallProvincia = qs('#smallProvincia')
    const smallPassword = qs('#smallPassword')
    const smallPassword2 = qs('#smallPassword2')
    const button = qs('.guardar')
    const smallImage = qs("#smallImage")
    const iconEye1 = qs('.icon-eye1')
    const iconEye2 = qs('.icon-eye2')


    button.disabled = true
    button.style.backgroundColor = 'gray'
    button.style.borderColor = 'gray'



    const validate = {
        nombre: false,
        apellido: false,
        telefono: false,
        provincia: false,
        localidad: false,
        email: false,
        password: false,
        password2: false,
        image: true

    }

    //Se deshabilita el botón de iniciar sesión, si los campos cumplen los requisitos se activará
    const funcValidate = (obj) => {
        let arr = Object.values(validate)
        if (!arr.includes(false)) {
            button.disabled = false
            button.style.backgroundColor = 'var(--rojo)'
            button.style.borderColor = 'var(--bordo)'
        } else {
            button.disabled = true
            button.style.backgroundColor = 'gray'
            button.style.borderColor = 'gray'
        }
    }
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumeros = /^[0-9]*$/
    let expRegMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/


    nombre.focus();
    nombre.addEventListener("input", (e) => {

        switch (true) {
            case !e.target.value:
                nombre.classList.remove("is-valid")
                nombre.classList.add("is-invalid")
                smallNombre.innerHTML = "El Nombre no debe quedar vacio"
                smallNombre.classList.add("is-invalidSmall")
                smallNombre.classList.remove("is-validSmall")
                validate.nombre = false
                break
            case e.target.value.length < 3:
                nombre.classList.remove("is-valid")
                nombre.classList.add("is-invalid")
                smallNombre.innerHTML = "El Nombre debe tener mas de 3 caracteres"
                smallNombre.classList.add("is-invalidSmall")
                smallNombre.classList.remove("is-validSmall")
                validate.nombre = false
                break
            case !regExLetras.test(e.target.value):
                nombre.classList.remove("is-valid")
                nombre.classList.add("is-invalid")
                smallNombre.innerHTML = "Solo letras"
                smallNombre.classList.add("is-invalidSmall")
                smallNombre.classList.remove("is-validSmall")
                validate.nombre = false
                break
            default:
                nombre.classList.remove("is-invalid")
                nombre.classList.add("is-valid")
                smallNombre.innerHTML = "Bien!"
                smallNombre.classList.remove("is-invalidSmall")
                smallNombre.classList.add("is-validSmall")
                validate.nombre = true
                break;
        }




        funcValidate(validate)
    })
    apellido.addEventListener("input", (e) => {
        switch (true) {
            case !e.target.value:
                apellido.classList.remove("is-valid")
                apellido.classList.add("is-invalid")
                smallApellido.innerHTML = "El Apellido no debe quedar vacio"
                smallApellido.classList.add("is-invalidSmall")
                smallApellido.classList.remove("is-validSmall")
                validate.apellido = false
                break
            case e.target.value.length < 3:
                apellido.classList.remove("is-valid")
                apellido.classList.add("is-invalid")
                smallApellido.innerHTML = "El Apellido debe tener mas de 3 caracteres"
                smallApellido.classList.add("is-invalidSmall")
                smallApellido.classList.remove("is-validSmall")
                validate.apellido = false
                break;
            case !regExLetras.test(e.target.value):
                apellido.classList.remove("is-valid")
                apellido.classList.add("is-invalid")
                smallApellido.innerHTML = "Solo letras"
                smallApellido.classList.add("is-invalidSmall")
                smallApellido.classList.remove("is-validSmall")
                validate.apellido = false
                break
            default:
                apellido.classList.remove("is-invalid")
                apellido.classList.add("is-valid")
                smallApellido.innerHTML = "Bien!"
                smallApellido.classList.remove("is-invalidSmall")
                smallApellido.classList.add("is-validSmall")
                validate.apellido = true
                break;
        }

        funcValidate(validate)
    })
    telefono.addEventListener("input", (e) => {
        switch (true) {
            case !e.target.value:
                telefono.classList.remove("is-valid")
                telefono.classList.add("is-invalid")
                smallTelefono.innerHTML = "El telefono no debe quedar vacio"
                smallTelefono.classList.add("is-invalidSmall")
                smallTelefono.classList.remove("is-validSmall")
                validate.telefono = false
                break;
            case e.target.value.length < 8:
                telefono.classList.remove("is-valid")
                telefono.classList.add("is-invalid")
                smallTelefono.innerHTML = "Debes ingresar un telefono valido"
                smallTelefono.classList.add("is-invalidSmall")
                smallTelefono.classList.remove("is-validSmall")
                validate.telefono = false
                break;
            case !regExNumeros.test(e.target.value):
                telefono.classList.remove("is-valid")
                telefono.classList.add("is-invalid")
                smallTelefono.innerHTML = "Solo numeros"
                smallTelefono.classList.add("is-invalidSmall")
                smallTelefono.classList.remove("is-validSmall")
                validate.telefono = false
                break
            default:
                telefono.classList.remove("is-invalid")
                telefono.classList.add("is-valid")
                smallTelefono.innerHTML = "Bien!"
                smallTelefono.classList.remove("is-invalidSmall")
                smallTelefono.classList.add("is-validSmall")
                validate.telefono = true
                break;

        }
        funcValidate(validate)
    })
    provincia.addEventListener("input", (e) => {
        if (e.target.value === "") {
            provincia.classList.remove("is-valid")
            provincia.classList.add("is-invalid")
            smallProvincia.innerHTML = "Debes elegir una Provincia"
            smallProvincia.classList.add("is-invalidSmall")
            smallProvincia.classList.remove("is-validSmall")
            validate.provincia = false

        } else {
            provincia.classList.remove("is-invalid")
            provincia.classList.add("is-valid")
            smallProvincia.innerHTML = "Bien!"
            smallProvincia.classList.remove("is-invalidSmall")
            smallProvincia.classList.add("is-validSmall")
            validate.provincia = true
        }
        funcValidate(validate)
    })
    localidad.addEventListener("input", (e) => {
        if (e.target.value === "") {
            localidad.classList.remove("is-valid")
            localidad.classList.add("is-invalid")
            smallLocalidad.innerHTML = "Debes elegir una localidad"
            smallLocalidad.classList.add("is-invalidSmall")
            smallLocalidad.classList.remove("is-validSmall")
            validate.localidad = false

        } else {
            localidad.classList.remove("is-invalid")
            localidad.classList.add("is-valid")
            smallLocalidad.innerHTML = "Bien!"
            smallLocalidad.classList.remove("is-invalidSmall")
            smallLocalidad.classList.add("is-validSmall")
            validate.localidad = true
        }
        funcValidate(validate)
    })
    /* email */
    email.addEventListener("input", (e) => {

        fetch(`http://localhost:3000/api/users?email=${e.target.value}`)
            .then(response => {
                return response.json()
            })
            .then(usuario => {
                switch (true) {
                    case (usuario.data.length > 0):
                        email.classList.remove("is-valid")
                        email.classList.add("is-invalid")
                        smallEmail.innerHTML = "Mail ya registrado"
                        smallEmail.classList.add("is-invalidSmall")
                        smallEmail.classList.remove("is-validSmall")
                        validate.email = false
                        break
                    case (!expRegMail.test(email.value.toLowerCase())):
                        email.classList.remove("is-valid")
                        email.classList.add("is-invalid")
                        smallEmail.innerHTML = "Debes ingresar un mail valido"
                        smallEmail.classList.add("is-invalidSmall")
                        smallEmail.classList.remove("is-validSmall")
                        validate.email = false
                        break
                    case (!email.value):
                        email.classList.remove("is-valid")
                        email.classList.add("is-invalid")
                        smallEmail.innerHTML = "Email no puede quedar vacio"
                        smallEmail.classList.add("is-invalidSmall")
                        smallEmail.classList.remove("is-validSmall")
                        validate.email = false
                        break
                    default:
                        email.classList.remove("is-invalid")
                        email.classList.add("is-valid")
                        smallEmail.innerHTML = "Bien!"
                        smallEmail.classList.remove("is-invalidSmall")
                        smallEmail.classList.add("is-validSmall")
                        validate.email = true
                        break


                }
                funcValidate(validate)
            })
        funcValidate(validate)
    })

    password.addEventListener("input", (e) => {
        iconEye1.style.transform= 'translateY(-35%)'
        if (e.target.value.length < 8) {
            password.classList.remove("is-valid")
            password.classList.add("is-invalid")
            smallPassword.innerHTML = "La contraseña debe tener 8 caracteres"
            smallPassword.classList.add("is-invalidSmall")
            smallPassword.classList.remove("is-validSmall")
            validate.password = false

        } else {
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")
            smallPassword.innerHTML = "Bien!"
            smallPassword.classList.remove("is-invalidSmall")
            smallPassword.classList.add("is-validSmall")
            validate.password = true
        }
        funcValidate(validate)
    })

    password2.addEventListener("input", (e) => {
        iconEye2.style.transform= 'translateY(-35%)'
        switch (true) {
            case e.target.value.length < 8:
                password2.classList.remove("is-valid")
                password2.classList.add("is-invalid")
                smallPassword2.innerHTML = "La contraseña debe tener 8 caracteres"
                smallPassword2.classList.add("is-invalidSmall")
                smallPassword2.classList.remove("is-validSmall")
                validate.password2 = false
                break
            case e.target.value != password.value:
                password2.classList.remove("is-valid")
                password2.classList.add("is-invalid")
                smallPassword2.innerHTML = "Las contraseñas no coinciden"
                smallPassword2.classList.add("is-invalidSmall")
                smallPassword2.classList.remove("is-validSmall")
                validate.password2 = false
                break
            default:
                password2.classList.remove("is-invalid")
                password2.classList.add("is-valid")
                smallPassword2.innerHTML = "Bien!"
                smallPassword2.classList.remove("is-invalidSmall")
                smallPassword2.classList.add("is-validSmall")
                validate.password2 = true

        }
        funcValidate(validate)

    })

    form.addEventListener("submit", e => {
        e.preventDefault();
        let arr = Object.values(validate)
        if (!arr.includes(false)) {
            form.submit()
        }
    })

    image.addEventListener("change", () => {
        let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        if (image.value && !regExExt.exec(image.value)) {
            image.classList.remove("is-valid")
            image.classList.add("is-invalid")
            smallImage.innerHTML = "solo se permiten imagenes"
            smallImage.classList.add("is-invalidSmall")
            smallImage.classList.remove("is-validSmall")
            validate.image = false
        } else {
            image.classList.remove("is-invalid")
            image.classList.add("is-valid")
            smallImage.innerHTML = "Bien!"
            smallImage.classList.remove("is-invalidSmall")
            smallImage.classList.add("is-validSmall")
            validate.image = true

        }
        funcValidate(validate)
    })

    const $ = id => document.getElementById(id)

    /* imagen previa de la foto de perfil */

    $("product-img").addEventListener('change', (e) => {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        let nombre = $("nombre-imagen")
        console.log(nombre);
        nombre.style.display = "none"
        reader.onload = () => $("img-preview").src = reader.result
        changeImage(e.target.name, e.target.files)



    })

    const localsOld = qs("#localsOld")
    const oldProvincia = qs("#oldProvincia")
    const oldLocalidad = qs("#oldLocalidad")
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
                if(localsOld&&oldProvincia===provAz[i]){
                provincia.innerHTML += `<option value="${provAz[i]}" selected> ${provAz[i]} </option>`
                }else{
                    provincia.innerHTML += `<option value="${provAz[i]}"> ${provAz[i]} </option>`
                }
            }
        })
        .then(()=>{
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
                        if(localsOld&&oldLocalidad===localidadesAz[i]){
                        localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]} selected>${localidadesAz[i]} </option>`
                        }else
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
                        if(localsOld&&oldLocalidad===muniAz[i]){
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
                        localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]}>${muniAz[i]} </option>`
                    }
                })
        })


        console.log(validate)
});

