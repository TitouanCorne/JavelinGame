function lancer_OneDice(){
    var dice = Math.floor(Math.random()*6)+1;
    return dice
}

function lancer_ManyDices(n){
    var L = []
    for (let i=0; i < n; i++){
        L.push(lancer_OneDice())
    }
    return L 
}

//firstTry = lancer_ManyDices(6) //premier lancer de dés
//console.log(firstTry)

module.exports = {
    res_dices: lancer_ManyDices,
}

function lancerde() {
    return Math.floor(Math.random() * 6 + 1); 
  }

tableau = [[lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false]]

function gelerunde(tableau, index){
    if (tableau[index-1][0] % 2 == 0) {
    	tableau[index-1][1] = true;
    }
    return tableau
}

function relancer(tableau) {
    for(var i = 0; i < nb_des; i++){
        if(tableau[i][1] = false){
            tableau[i][0] = lancer();
        }
    }
    return tableau
}

function somme(tableau){
    S = 0;
    for(var i = 0; i < L.length; i++){
        S = S + L[i][0];
    }
    return S
}

