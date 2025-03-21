var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel")
cel.addEventListener("input", function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    let k = 273 + Number(c);
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
    kel.value = k;
});
fah.addEventListener("input", function(){
    let f = this.value;
    let c = (f-32)*(5/9);
    let k = (f - 32) * 5/9 + 273
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }

    cel.value = c;
    kel.value = k;
});
kel.addEventListener("input", function(){
    let k = this.value;
    let c = Number(k) - 273;
    let f = (k - 273) * 9/5 + 32;
    cel.value = c;
    fah.value = f;
});
