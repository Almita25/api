let imagenes=document.getElementsByTagName("img");
for(let i=0; i<imagenes.length; i++) {

    imagenes[i].addEventListener("click", function(){
        imagenes[i].classList.toggle("filtro")
    }) 
}



        