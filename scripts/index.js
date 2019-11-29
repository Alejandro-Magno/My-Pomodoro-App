let pomodoroTiempo = 0
let min_short = 0
let min_log = 0
let cronometro = ''
let segundos = 0
let minutos = pomodoroTiempo
let pomodoros = 0
let cronometro2 = 0



function config() {

    pomodoroTiempo = document.getElementById('pomodoro').value;
    min_short = document.getElementById('res-short').value;
    min_log = document.getElementById('res-long').value;
    if (pomodoro && min_log && min_short != '') {

        document.getElementById('fill').style.display = "block";
        document.getElementById('dates').style.display = "none";

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
        document.getElementById('agregado').innerHTML = 'corto'
        minutos = min_short
        segundos = 60


        cronometro2 = setInterval(() => {
     


            if(minutos>0){
                segundos -=10

                if(segundos <= 0){
                    segundos =60
                    minutos --
                }
            } 

            if(minutos<=0){
                segundos -=10
            } 

            

            if (minutos <= 0 && segundos <= 0) {
                clearInterval(cronometro2)
                minutos = 0
                segundos = 0


                document.getElementById('continuar').style.display = "block";
                document.getElementById('descanzo2').style.display = "block";
                document.getElementById('descanzo').style.display = "none";

            }
            document.getElementById('minutos2').innerHTML = minutos
            document.getElementById('segundos2').innerHTML = segundos



        }, 1000);

    } else {
        console.log('Entraste en el descanzo largo')
        document.getElementById('agregado').innerHTML = 'largo'
        minutos = min_log
        segundos = 60
        cronometro2 = setInterval(() => {



            if(minutos>=0){
                segundos -=10

                if(segundos <= 0){
                    segundos =60
                    minutos --
                }
            } 

            if(minutos<=0){
                segundos -=10
            } 

            

            if (minutos <= 0 && segundos <= 0) {
                clearInterval(cronometro2)
                minutos = 0
                segundos = 0


                document.getElementById('continuar').style.display = "block";
                document.getElementById('descanzo2').style.display = "block";
                document.getElementById('descanzo').style.display = "none";

            }

            document.getElementById('minutos2').innerHTML = minutos
            document.getElementById('segundos2').innerHTML = segundos






        }, 1000);
    }



}





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

    minutos = pomodoroTiempo - 1
    segundos = 60




    cronometro = setInterval(() => {


        segundos -= 5

        if (segundos <= 0) {
            segundos = 59

            minutos--




        }

        if (minutos <= 0) {
            clearInterval(cronometro)
            pomodoros++
            document.getElementById('pomodoros').innerHTML = pomodoros
            descanzo()
        }

        document.getElementById('minutos').innerHTML = minutos
        document.getElementById('segundos').innerHTML = segundos


    }, 1000);


}

function stop() {

    clearInterval(cronometro)

}