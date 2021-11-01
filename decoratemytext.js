
window.onload = eventHandler;
 
function myDeco(){
    setInterval(function(){
        var txt = document.getElementById("txtarea");
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + 2) + 'px';
    }, 500);
   
}

function eventHandler(){
    var evt = document.getElementById('btn');
    var evt2 = document.getElementById('bling');

    evt.onclick = myDeco;
    evt2.onchange = myBling;
}

function myBling(){
    var attr = document.getElementById('bling');
   
    if(attr.checked){
        document.getElementById("txtarea").style.fontWeight = "bold";
        document.getElementById("txtarea").style.color = "green";
    }
    else{
        document.getElementById("txtarea").style.fontWeight = "normal";
        document.getElementById("txtarea").style.color = "initial";
    }
}