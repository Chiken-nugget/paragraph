function getParagraph1(){
    var inputs=[];
    for(var i = 1 ; i<=6 ; i++){
        inputs.push(document.getElementById("input1")+i.value);
    }
    inputs.join(" .");
    document.getElementById("showparagraph1").innerHTML=inputs.join(" .");
}
function getParagraph2(){
    var inputs=[];
    for(var i = 1 ; i<=6 ; i++){
        inputs.push(document.getElementById("input7")+i.value);
    }
    inputs.join(" .");
    document.getElementById("showparagraph2").innerHTML=inputs.join(" .");
}