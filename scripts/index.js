let pomodoroTiempo = 0
let min_short = 0
let min_log = 0
let cronometro = ''
let segundos = 0
let minutos = pomodoroTiempo
let pomodoros = 0
let cronometro2 = 0
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var btnconfig=document.getElementById('configurarBtn')
btnconfig.addEventListener('click',()=>{config()})


function config() {

    
    pomodoroTiempo = document.getElementById('pomodoro').value;
    min_short = document.getElementById('res-short').value;
    min_log = document.getElementById('res-long').value;
    if (pomodoro && min_log && min_short != '') {

        document.getElementById('fill').style.display = "block";
        document.getElementById('dates').style.display = "none";

        document.getElementById('minutos').innerHTML = pomodoroTiempo
        document.getElementById('segundos').innerHTML = '0'
       

    } else {
        alert('Rellena todos los campos')
        document.getElementById('pomodoro').value = ''
        document.getElementById('res-short').value = ''
        document.getElementById('res-long').value = ''
        pomodoroTiempo = 0
        min_short = 0
        min_log = 0


    }


    document.getElementById('pomodoro').value = ''
    document.getElementById('res-short').value = ''
    document.getElementById('res-long').value = ''

}



function crono1() {

    document.getElementById('descanzo').style.display = "block";
    
    
    if (pomodoros != 4 && pomodoros != 8 && pomodoros != 12) {

        console.log('Entraste en el descanzo corto')
        audio1.play();
        document.getElementById('agregado').innerHTML = 'corto'
        minutos = min_short -1
        segundos = 60

        cronometro2 = setInterval(() => {
     

            segundos--
             
            if (minutos <= 0 && segundos <= 0) {
                
                clearInterval(cronometro2)
                minutos = 0
                segundos = 0
                audio3.play();


                document.getElementById('continuar').style.display = "block";
                document.getElementById('descanzo2').style.display = "block";
                document.getElementById('descanzo').style.display = "none";
            }
           
    
        
            document.getElementById('minutos2').innerHTML = minutos
            document.getElementById('segundos2').innerHTML = segundos
    
            if (segundos <= 0) {
                segundos = 59
               
                if(minutos >0){
                    minutos--
                }
                
    
    
    
    
            }
    
    
    
        }, 1000);
       
    } else {
        console.log('Entraste en el descanzo largo')
        audio2.play();
        document.getElementById('agregado').innerHTML = 'largo'
        minutos = min_log -1
        segundos = 60

        cronometro2 = setInterval(() => {
     

            segundos--
             
            if (minutos <= 0 && segundos <= 0) {
                
                clearInterval(cronometro2)
                minutos = 0
                segundos = 0
                audio3.play();

                document.getElementById('continuar').style.display = "block";
                document.getElementById('descanzo2').style.display = "block";
                document.getElementById('descanzo').style.display = "none";
            }
           
    
        
            document.getElementById('minutos2').innerHTML = minutos
            document.getElementById('segundos2').innerHTML = segundos
    
            if (segundos <= 0) {
                segundos = 59
               
                if(minutos >0){
                    minutos--
                }
                
    
    
    
    
            }
    
    
    
        }, 1000);
    }



}




reload = ()=>{location.reload()}
function descanzo() {
    document.getElementById('contando').style.display = "none";
    document.getElementById('descanzo').style.display = "block";
    document.getElementById('contador1').style.display = "none";
    document.getElementById('descanzo2').style.display = "none";
    
    crono1()



}


function start() {
    
    document.getElementById('contando').style.display = "block";
    document.getElementById('descanzo').style.display = "none";
    document.getElementById('contador1').style.display = "block";
    document.getElementById('continuar').style.display = "none";
    document.getElementById('descanzo2').style.display = "none";
    document.getElementById('comienzo').style.display = "none";
    document.getElementById('continue').style.display = "inline-block";
   
    document.getElementById(`configurarBtn`).setAttribute('disabled', '')

    minutos = pomodoroTiempo - 1
    segundos = 60
    


    cronometro = setInterval(() => {
     

        segundos--
         
        if (minutos <= 0 && segundos <= 0) {
            
            clearInterval(cronometro)
            pomodoros++
            document.getElementById('pomodoros').innerHTML = pomodoros
            descanzo()
        }
       

    
        document.getElementById('minutos').innerHTML = minutos
        document.getElementById('segundos').innerHTML = segundos

        if (segundos <= 0) {
            segundos = 59
           
            if(minutos >0){
                minutos--
            }
            




        }



    }, 1000);



    


}

function continuar(){
    document.getElementById(`continue`).disabled = true
    
    
    cronometro = setInterval(() => {
     

        segundos--
         
        if (minutos <= 0 && segundos <= 0) {
            
            clearInterval(cronometro)
            pomodoros++
            document.getElementById('pomodoros').innerHTML = pomodoros
            descanzo()
        }
       

    
        document.getElementById('minutos').innerHTML = minutos
        document.getElementById('segundos').innerHTML = segundos

        if (segundos <= 0) {
            segundos = 59
           
            if(minutos >0){
                minutos--
            }
            




        }



    }, 1000);

}

function stop() {
    document.getElementById(`continue`).disabled = false;
    clearInterval(cronometro)

}


