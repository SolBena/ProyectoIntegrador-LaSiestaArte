window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }

    
    const email = qs("#email")
    const smallEmail = qs('small.email')
    const password = qs('#password')
    const smallPassword = qs('small.password')
    const button = qs('.guardar')
    const form = qs("#formLogin")
    const iconEye = qs('.icon-eye')

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
        email: false,
        password: false
    }
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    email.addEventListener('input', (e) => {
        switch(true){
            case !e.target.value:
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                smallEmail.innerHTML = 'Debes ingresar un email'
                smallEmail.classList.add("is-invalidSmall")
                smallEmail.classList.remove("is-validSmall")
                validate.email = false
                break
            case !expReg.test(e.target.value.toLowerCase()):
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                smallEmail.innerHTML = 'Debes ingresar un email valido'
                smallEmail.classList.add("is-invalidSmall")
                smallEmail.classList.remove("is-validSmall")
                validate.email = false
                break
            default:
                email.classList.remove('is-invalid')
                email.classList.add('is-valid')
                smallEmail.innerHTML = 'Bien!'
                smallEmail.classList.remove("is-invalidSmall")
                smallEmail.classList.add("is-validSmall")
                validate.email = true
                break

        }
        funcValidate(validate)

        
    })

    password.addEventListener('input', (e) => {
        iconEye.style.transform = 'translateY(-5%)'
        switch(true){
            case !e.target.value:
                password.classList.add('is-invalid')
                password.classList.remove('is-valid')
                smallPassword.innerHTML = 'Debes ingresar una contraseña'
                smallPassword.classList.add("is-invalidSmall")
                smallPassword.classList.remove("is-validSmall")
                validate.password = false
                break
            case e.target.value.length<8:
                password.classList.add('is-invalid')
                password.classList.remove('is-valid')
                smallPassword.innerHTML = 'La contraseña debe tener 8 digitos minimo'
                smallPassword.classList.add("is-invalidSmall")
                smallPassword.classList.remove("is-validSmall")
                validate.password = false
                break
            default:
                password.classList.remove('is-invalid')
                password.classList.add('is-valid')
                smallPassword.innerHTML = 'Bien!'
                smallPassword.classList.remove("is-invalidSmall")
                smallPassword.classList.add("is-validSmall")
                validate.password = true
                break
        }
        funcValidate(validate)
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let arr = Object.values(validate)
        if(!arr.includes(false)){
            form.submit()
        }
    })

})