function addNums(){
    
 var fn = document.getElementById('fn').value;
 fn = parseInt(fn);
 var sn = document.getElementById('sn').value;
 sn = parseInt(sn);
 document.getElementById('rs').value = (fn+sn);
}

function subNums(){
    var fn = document.getElementById('fn').value;
    fn = parseInt(fn);
    var sn = document.getElementById('sn').value;
    sn = parseInt(sn);
    document.getElementById('rs').value = (fn-sn);
}

function mulNums(){
    var fn = document.getElementById('fn').value;
    fn = parseInt(fn);
    var sn = document.getElementById('sn').value;
    sn = parseInt(sn);
    document.getElementById('rs').value = (fn*sn);
}