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
           console.log("Este es el global resu",global_resu);
            data.resultado[0].forEach((element,i) => {

            console.log("Este es el element",element);
            btn_camas[element.numero_cama-1].style.background="#2ecc71";
            btn_camas[element.numero_cama-1].dataset.index2=element.id;
            btn_camas[element.numero_cama-1].dataset.index3=i;
            
    
                                                                                               
          });
        } catch (error) {
          console.error('Error:', error);
        
        }
      });




btn_cerrar.addEventListener('click',(e)=>{

 formu_user.style.display="none";



});


//......


const conte_camas=document.querySelector('.conteinner_camas');
const names=document.querySelector('#name');
const surname=document.querySelector('#surname');
const dieta=document.querySelector('#dietas');
const radio=document.querySelector('#radiobutton');
const colaciones=document.querySelector('#Colaciones');
const textarea=document.querySelector('#textarea');







conte_camas.addEventListener('click',(e)=>{

const cama=e.target;

//console.log("Este es cama",cama);
const index = cama.dataset.index-1; // Obtener el índice desde el atributo data-index
const index3=cama.dataset.index3;
const index2=cama.dataset.index2;
console.log("Este es el valor de cama.dataset",cama.dataset.index);


if(index!==undefined){

  const pacienteData = global_resu[index3] || {};
        const fullname = pacienteData?.paciente?.split(' ') || [];
        console.log("Este es el pacientedata",pacienteData);
        // Asignación de valores
        names.value = fullname[0] || "";
        surname.value = fullname[1] || "";
        dieta.value = pacienteData?.indicacionAlimentaria || "";
        colaciones.value = pacienteData?.Colaciones || "";
        textarea.value = pacienteData?.observaciones || "";

        // Mostrar el formulario y asignar el número de cama
        formu_user.style.display = "flex";
        formu_user.dataset.index2=index2;
        num_cama.value = cama.innerText;




}



});
// btn_camas.forEach((cama,i) => {

//     cama.addEventListener('click',(e)=>{
//             if(global_resu[i]!==undefined){
               
//               const fullname=global_resu[i].paciente?.split(' ');
//               names.value=fullname[0];
//               surname.value=fullname[1];
//               dieta.value=global_resu[i].indicacionAlimentaria;
//               formu_user.style.display="flex";
//               num_cama.value=e.target.innerText;
//               colaciones.value=global_resu[i].Colaciones;
//               textarea.value=global_resu[i].observaciones;

//             }else{



            


             
//               names.value=""
//               surname.value=""
//               dieta.value=""
//               formu_user.style.display="flex";
//               num_cama.value=e.target.innerText;
//               colaciones.value=""
//               textarea.value=""
               
//             }
           
             

//     });
    
// });
// //.......



///........////

const btn_eliminar=document.querySelector('#btn_eliminar');






btn_eliminar.addEventListener('click',async(e)=>{

const url=`/1-3/delete`;
           



console.log("Este es el resultado",e.target.parentElement);
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify({id:e.target.parentElement.dataset.index2}), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {console.log("Success:", response); if(response.success===true){


        location.reload();
           


    }
  
});



});
