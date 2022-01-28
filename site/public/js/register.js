window.addEventListener('load', () => {

    const iconEye1 = document.querySelector('.icon-eye1') 

    const password1 = document.querySelector('#Password')
    

    iconEye1.addEventListener('click', () => {
        const icon1 = document.getElementById('icon1')
            
        console.log(icon1);

        if (password1.type === "password"){
            password1.type = "text"
            icon1.classList.remove('fa-eye-slash')
            icon1.classList.add('fa-eye')
        } else {
            password1.type = "password"
            icon1.classList.remove('fa-eye')
            icon1.classList.add('fa-eye-slash')
        }
    })

    const iconEye2 = document.querySelector('.icon-eye2') 

    const password2 = document.querySelector('#Password2')
    

    iconEye2.addEventListener('click', () => {
        const icon2 = document.getElementById('icon2')
            
        console.log(icon2);

        if (password2.type === "password"){
            password2.type = "text"
            icon2.classList.remove('fa-eye-slash')
            icon2.classList.add('fa-eye')
        } else {
            password2.type = "password"
            icon2.classList.remove('fa-eye')
            icon2.classList.add('fa-eye-slash')
        }
    })

})