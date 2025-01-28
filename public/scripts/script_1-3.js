const btn_camas=document.querySelectorAll('.cama');


const formu_user=document.querySelector('.formulario_data_user');

const btn_cerrar=document.querySelector('.cerrar');







btn_cerrar.addEventListener('click',(e)=>{

 formu_user.style.display="none";



});

btn_camas.forEach(cama => {

    cama.addEventListener('click',(e)=>{
            formu_user.style.display="flex";

    });
    
});
