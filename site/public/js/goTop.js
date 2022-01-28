window.addEventListener('load', () => {
    

    var goTop = document.getElementById('go-top')
    
    goTop.addEventListener('click', scrollUp)

    function scrollUp() {

        var currentScroll  = document.documentElement.scrollTop;

        if(currentScroll > 0){
            window.requestAnimationFrame(scrollUp)
            window.scrollTo(0, currentScroll - (currentScroll/10));
            goTop.style.transform = "scale(0)"
        }
    }

    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;

        if(scroll > 300){
            goTop.style.transform = "scale(1)"
        } else if(scroll<300){
            goTop.style.transform = "scale(0)"
        }
    })
})


