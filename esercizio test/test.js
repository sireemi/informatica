function diagonali(){
    let dim = document.getElementById("numero").value;
    let quadrato = "";
    for(let i=0; i<dim; i++){
        for(let j=0; j<dim; j++){
            if(i==j)
                quadrato += "* ";
        }
        quadrato += "<br>";
    }
    document.getElementById("risultato").innerHTML = quadrato;
}