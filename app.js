window.onload = () => {
        let numnum = numeroGenerator();
        let picafinal = picaGenerator();

        document.querySelector("#numcarta").innerHTML = numnum;
        document.querySelector("#picaa2").innerHTML = picafinal;
        document.querySelector("#picaa").innerHTML = picafinal;

        if(picafinal === '\u2665' || picafinal === '\u2666'){
                document.querySelector("#picaa").style.color = 'red';
                document.querySelector("#picaa2").style.color = 'red';
                document.querySelector("#numcarta").style.color = 'red';
        } 
}

function numeroGenerator(){   
    let numero = Math.floor((Math.random()*13)+1);
    if(numero === 1){
        numero = 'A';
    }else if(numero<=10){
        numero = numero;
    }else{
        switch(numero){
            case 11:
            numero = 'J';
            break;
            case 12:
            numero = 'Q';
            break;
            case 13:
            numero = 'K';
            break;
        }
    }
    return numero;
}

function picaGenerator(){
    let pica = Math.floor((Math.random()*4)+1);
    switch (pica){
        case 1:
            pica = '\u2665'; // corazon
        break;
        case 2:
            pica = '\u2666'; //diamante
        break;
        case 3:
            pica = '\u2663';
        break;
        case 4:
            pica = '\u2660';
        break;
    }
    return pica;
}
