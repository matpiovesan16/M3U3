(function(){

// <--------------------TAREA 1------------------------->
    function vehiculos (metros){
        if (metros>0 && metros<=1000){
            alert("Tenes que ir a pie");
        }
        if (metros>1000 && metros<=10000){
            alert("Tenes que ir en bicicleta");
        }

        if (metros>10000 && metros<=30000){
            alert("Tenes que ir en colectivo");
        }

        if (metros>30000 && metros<=100000){
            alert("Tenes que ir en auto");
        }
        if (metros>100000){
            alert("Tenes que ir en avion");
        }

    }
    
    var metros= parseInt(prompt("Cuantos metros vas a viajar?",''));

    vehiculos(metros);


// <-------------------- FIN TAREA 1------------------------->




// <-------------------- TAREA 2------------------------->



    var mayor = function (numeros){
        var mayorQue=0;
        for(var i=0; i<numeros.length; i++){
            if(numeros[i]>mayorQue){
                mayorQue=numeros[i];
            }
            
        }

        alert("El mayor numero dentro del array es: " + mayorQue);
    }

    var n = parseInt(prompt("Cuanto numeros va a tener el array?",''));
    var numeros =[];

    for(var i=0; i<n; i++){
        numeros[i]=parseInt(prompt("Ingresar un numero:",''));
    }

    

    mayor(numeros);


// <-------------------- FIN TAREA 2------------------------->
    

    




}())