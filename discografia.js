
let genero = document.getElementById("genero").value;
var genero_rock  = ["The Rolling Stones.","Pink Floyd.","Radiohead.","Led Zeppelin."]
var genero_Indie = ["Arctic Monkeys.","The Killers.","Franz Ferdinand.","Coldplay."]
var genero_HipHop = ["Snoop Dogg","Jay Z","Tupac Shakur","Eminem"]
var genero_Electronica = ["calvin Harris","deadmau5","Steve Aoki","Afrojack"]

function mostrar(){
    if(genero == 0){
        console.log(genero_rock);
     document.getElementById("banda").value=genero_rock;
    }
    if(genero == 2){
        console.log(genero_Indie);
     document.getElementById("2").value=genero_Indie;
    }
    if(genero == 3){
        console.log(genero_HipHop);
     document.getElementById("3").value=genero_HipHop;
    }
    if(genero == 4){
        console.log(genero_Electronica);
     document.getElementById("4").value=genero_Electronica;
    }

}
