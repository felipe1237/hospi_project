const btns_salas=document.querySelectorAll('.salas_conteinner');



btns_salas.forEach(sala => {
    
  sala.addEventListener('click',(e)=>{

  const ubi=sala.getAttribute('data-ubication');


  if(ubi){

    window.location.href=`/${ubi}`;

  }else{


    console.error('"No se definió una ubicación en el atributo data-ubicacion"');
  }
   

  })


});