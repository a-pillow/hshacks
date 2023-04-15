function gacha(){
    var roll = Math.random() * 100;
    if(roll < 40){
        return common();
    }else if(roll < 70){
        return uncommon();
    }else if(roll < 85){
        return rare();
    }else if(roll < 95){
        return epic();
    }else{
        return legendary();
    }
}
//2 legendaries
//3 epics
//3 rares
//4 uncommons
//5 commons
function common(){
    var card = Math.floor(Math.random() * 5);
    return card;
}
function uncommon(){
    var card = Math.floor(Math.random() * 4);
    return 5 + card;
}
function rare(){
    var card = Math.floor(Math.random() * 3);
    return 8 + card;
}
function epic(){
    var card = Math.floor(Math.random() * 3);
    return 11 + card;
}
function legendary(){
    var card = Math.floor(Math.random() * 2);
    return 14 + card;
}