window.addEventListener('load', () => {

    console.log('vinculacion exitosa');
    
    let imgPrincipal = document.querySelector('.principal')

    let imagenes = document.querySelectorAll('.imgAlt')


    for (let i = 0; i < imagenes.length; i++) {
        /* console.log(imagenes[i]); */
        imagenes[i].addEventListener('click', ()=>{
            imgPrincipal.setAttribute("src",`/img/products/${imagenes[i].alt}`)
            
        })
        console.log(imagenes[i]);
        
    }

   
    //BOTONES LATERALES DE LA IMAGEN PRINCIPAL
    let left = document.querySelector('.left')
    let right = document.querySelector('.right')
    
    
    

    right.addEventListener('click', () => {
        for (let i = 0; i < imagenes.length; i++) {
            if(imgPrincipal.id === imagenes[i].id){
                imgPrincipal.setAttribute("src",`/img/products/${imagenes[i+1].alt}`)  
                imgPrincipal.id = imagenes[i].id
                console.log(imagenes[i]);
            }
        }
    })
    /* console.log(imgPrincipal); */    
        /* if(imgPrincipal.alt === "img0"){
            let next = img1
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img1'
        }else if(imgPrincipal.alt === "img1"){
            let next = img2
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img2'
        }else if(imgPrincipal.alt === "img2"){
            let next = img0
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img0'
        } */
        
        
    
    
    /* left.addEventListener('click', () => {
        if(imgPrincipal.alt === "img0"){
            let previous = img2
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img2'
        }else if(imgPrincipal.alt === "img1"){
            let previous = img0
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img0'
        }else if(imgPrincipal.alt === "img2"){
            let previous = img1
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img1'
        }
        
        
    }) */

    /* //imagen0
    let img0 = document.querySelector('#img0')

    img0.addEventListener('click', () => {
        imgPrincipal.src = `/img/products/${img0.alt}`
        imgPrincipal.alt = `img0`
    })

    //imagen1
    let img1 = document.querySelector('#img1')

    img1.addEventListener('click', () => {
        imgPrincipal.src = `/img/products/${img1.alt}`
        imgPrincipal.alt = `img1`
    })

    //imagen2
    let img2 = document.querySelector('#img2')

    img2.addEventListener('click', () => {
        imgPrincipal.src = `/img/products/${img2.alt}`
        imgPrincipal.alt = `img2`
    })


    //BOTONES LATERALES DE LA IMAGEN PRINCIPAL
    let left = document.querySelector('.left')
    let right = document.querySelector('.right')

    right.addEventListener('click', () => {
        if(imgPrincipal.alt === "img0"){
            let next = img1
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img1'
        }else if(imgPrincipal.alt === "img1"){
            let next = img2
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img2'
        }else if(imgPrincipal.alt === "img2"){
            let next = img0
            imgPrincipal.src = `/img/products/${next.alt}`
            imgPrincipal.alt = 'img0'
        }
        
        
    })
    
    left.addEventListener('click', () => {
        if(imgPrincipal.alt === "img0"){
            let previous = img2
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img2'
        }else if(imgPrincipal.alt === "img1"){
            let previous = img0
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img0'
        }else if(imgPrincipal.alt === "img2"){
            let previous = img1
            imgPrincipal.src = `/img/products/${previous.alt}`
            imgPrincipal.alt = 'img1'
        }
        
        
    })
     */


})