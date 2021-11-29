
        
         
         
         let boton = document.getElementById("recargar-imagen");
          boton.addEventListener("click" , nuevaImagen);

          function nuevaImagen() {
            // tu codigo fetch
            let url = "https://foodish-api.herokuapp.com/api/"
            fetch(url).then(function(response){
                return response.json();
               
                
            }).then (function(data){
                let url_imagen = data ["image"];
                let imagen = document.querySelector("img");
                imagen.src = url_imagen;
            }).catch (function(error){
    
                console.log ("error");
            })
    
           
        } 
        nuevaImagen();