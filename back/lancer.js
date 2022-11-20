function lancer_OneDice(){
    var dice = Math.floor(Math.random()*6)+1;
    return dice
}

tableau = [[0, false], [0, false], [0, false], [0, false], [0, false], [0, false]]

function lancer_Manydices(remainingDices){
    L = []
    for(var i = 0; i < remainingDices; i++){
        L.push(lancer_OneDice())
    return L 
    }
    
function relancer(tableau){
    for(var i = 0; i < nb_des; i++){
        if(tableau[i][1] = false){
            tableau[i][0] = lancer_OneDice();
        }
    }
    return tableau
}

function gelerunde(tableau, index){
    if (tableau[index-1][0] % 2 == 0) {
    	tableau[index-1][1] = true;
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

module.exports = {
    res_dices: lancer_ManyDices,
    freeze : gelerunde,
    score : somme,
    relancer : relancer
}


