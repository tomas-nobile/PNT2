const condiciones = [{condicion:"Debe haber pelota", valor:true},
{condicion:"El equipo A tiene 11 jugadores", valor:true},
{condicion:"El equipo B tiene 11 jugadores", valor:false},
{condicion:"Todos los jugadores son mayores de 18", valor:true},
{condicion:"Las condiciones climaticas son buenas", valor:false}]


onInit()

function onInit(){
    const impedimentos= condiciones.filter(o=>!o.valor);
    const divCondicion = document.getElementById("condicion-partido");
    const h1Condicion = document.getElementById("condicion-partido-bool");

    if(impedimentos.length > 0){

        h1Condicion.textContent = "No";

        impedimentos.forEach(e=>{
            const item= document.createElement("h4");
            item.textContent= e.condicion;
            divCondicion.appendChild(item);
        })
    }else{
        h1Condicion.textContent = "Si";

    }
    
        

}
