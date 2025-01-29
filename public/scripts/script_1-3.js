const btn_camas=document.querySelectorAll('.cama');


const formu_user=document.querySelector('.formulario_data_user');

const btn_cerrar=document.querySelector('.cerrar');
const num_cama=document.querySelector('#nro_cama');

let global_resu=null;





    document.addEventListener('DOMContentLoaded', async (e) => {
        try {
          // Hacer una petición al backend
          const response = await fetch('/1-3/sal?sala=1-3');
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
  
          // Convertir la respuesta a JSON
          const data = await response.json();
  
          // Mostrar los datos en la página
    
           global_resu=data.resultado[0];
            data.resultado[0].forEach((element,i) => {
            btn_camas[i].style.background="#2ecc71";
            
            console.log(element);
          });
        } catch (error) {
          console.error('Error:', error);
        
        }
      });




btn_cerrar.addEventListener('click',(e)=>{

 formu_user.style.display="none";



});


//......



const names=document.querySelector('#name');
const surname=document.querySelector('#surname');
const dieta=document.querySelector('#dietas');
const radio=document.querySelector('#radiobutton');
const colaciones=document.querySelector('#colaciones');
const textarea=document.querySelector('#textarea');

btn_camas.forEach((cama,i) => {

    cama.addEventListener('click',(e)=>{
            if(global_resu[i]!==undefined){
               
              const fullname=global_resu[i].paciente?.split(' ');

              names.value=fullname[0];
              surname.value=fullname[1];
              dieta.value=global_resu[i].indicacionAlimentaria;
              formu_user.style.display="flex";
              num_cama.value=e.target.innerText;

            }else{

                formu_user.style.display="flex";
             
                num_cama.value=e.target.innerText;

            }
           
             

    });
    
});
//.......
