window.addEventListener('load', () => {

    const iconEye = document.querySelector('.icon-eye') 

    const password = document.querySelector('#password')
    

    iconEye.addEventListener('click', () => {
        const icon = document.getElementById('icon')
            
        console.log(icon);

        if (password.type === "password"){
            password.type = "text"
            icon.classList.remove('fa-eye-slash')
            icon.classList.add('fa-eye')
        } else {
            password.type = "password"
            icon.classList.remove('fa-eye')
            icon.classList.add('fa-eye-slash')
        }
    })

})