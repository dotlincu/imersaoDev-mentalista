var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value)
    console.log(chute)

    if(chute == numeroSecreto){
        console.log("Chute certo")
    }

    // document.getElementById("valor").innerHTML = ""
}