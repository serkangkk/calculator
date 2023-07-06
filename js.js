function ekranayaz(val){
    document.getElementById("deger").value+=val;
}
function esittir(){
    var a=document.getElementById("deger").value;
    var b=eval(a);
    document.getElementById("deger").value=b;
}
function temizle(){
    document.getElementById("deger").value="";
    
}