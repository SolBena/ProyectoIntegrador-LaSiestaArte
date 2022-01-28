window.addEventListener('load', () => {
    console.log('validacion de images.js exitosa');

    const $ = id => document.getElementById(id)

    /* imagen previa del producto */

    $("image").addEventListener('change', (e) => {

        $("img-preview-container").innerHTML = ""
        for (let i=0; i<e.target.files.length;i++){
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[i]);
            $("img-preview-container").innerHTML += `<img class="img-preview" id="img-preview${i}" src="" alt="">`
            reader.onload = () => $(`img-preview${i}`).src = reader.result
        }
 
        
    
    })

})