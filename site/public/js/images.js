window.addEventListener('load', () => {
    console.log('validacion de images.js exitosa');

    const $ = id => document.getElementById(id)

    /* imagen previa del producto */

    $("product-img").addEventListener('change', (e) => {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        let nombre = $("nombre-imagen")
        console.log(nombre);
        nombre.style.display = "none"
        reader.onload = () => $("img-preview").src = reader.result
        changeImage(e.target.name,e.target.files)

        
    
    })

})