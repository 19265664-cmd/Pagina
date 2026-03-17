
let formulario = document.getElementById("form1");  

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    let foData = new FormData (formulario);
    let d1 =  foData.get("dato1");
    let d2 =  foData.get("dato2");
    let d3 =  foData.get("dato3");
     console.log("Dato1:"+d1+ "\ndato2:"+d2+"\ndato3:"+d3)

     let suma = Number(d1) + Number(d2) + Number(d3);
     if(suma >10) {
     alert("el resultado es mayor que 10");
     } else {
        alert("el resultado es menor que 10");
     }
})