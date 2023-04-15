export function gacha(){
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
//2 epics
//2 rares
//3 uncommons
//3 commons
function common(){
    var card = Math.floor(Math.random() * 2.99);
    return card;
}
function uncommon(){
    var card = Math.floor(Math.random() * 2.99);
    return 3 + card;
}
function rare(){
    var card = Math.floor(Math.random() * 1.99);
    return 6 + card;
}
function epic(){
    var card = Math.floor(Math.random() * 1.99);
    return 8 + card;
}
function legendary(){
    var card = Math.floor(Math.random() * 1.99);
    return 10 + card;
}