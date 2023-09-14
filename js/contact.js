function aviso(){
    swal({
        title: "Submitted",
        text: "We will contact you soon...",
        icon: "success",
      }).then((value) => {
        // Esta función se ejecutará cuando el usuario haga clic en el botón "OK" de SweetAlert.
        if (value) {
          // Redireccionar a la página deseada, por ejemplo:
          window.location.href = "../index.html"; // Cambia esta URL por la que desees.
        }
      });

}


