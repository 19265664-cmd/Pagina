function calculando(){ 

                let mat = parseInt(document.getElementById("cliente").value);
                let nom = document.getElementById("nom");
                let tan = document.querySelector("input[name='cafe']:checked");
                let precioCafe = parseInt(tan.value) * mat;
                
                const extras = document.querySelectorAll(".extra:checked");
                           let totalExtras = 0;
    extras.forEach(extra =>{
        totalExtras += parseInt(extra.value) * mat;
    });
                    let total = precioCafe + totalExtras;
        alert("datos de cliente: " + nom.value +
                "\nCantidad: " + mat +
                "\nTamaño: $" + precioCafe +
                "\nExtras: $" + totalExtras +
                "\nTOTAL: $" + total);
            }


             
            
            let botonDos = document.getElementById("botonDos");

            botonDos.addEventListener("click",function(Event){
              Event.preventDefaul();
                alert("oprimistes el botn dos....")

            })