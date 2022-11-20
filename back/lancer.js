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