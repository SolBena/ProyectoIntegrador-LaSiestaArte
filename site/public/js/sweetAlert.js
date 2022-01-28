window.addEventListener('load', () => {

  console.log("Estoy vinculado");

  let forms = document.querySelectorAll('.eliminar');
  for (let i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', event => {
              event.preventDefault();
      
              Swal.fire({
                title: 'Estas segura de eliminar el producto?',
                text: "Esta accion es irreversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD8C3D',
                cancelButtonColor: '#D34A1A',
                cancelButtonText: 'No, cancela',
                confirmButtonText: 'Si, eliminalo!'

              }).then((result) => {

                  if (result.isConfirmed) {
                      forms[i].submit();
                  }

              })
      })
  }
})