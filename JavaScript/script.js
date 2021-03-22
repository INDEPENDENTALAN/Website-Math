function function_I() {
    var y = document.getElementById("txt_I").value;
    var z = document.getElementById("txt_II").value;
    var x = +y + +z;
    document.getElementById("calculated").innerHTML = x;
}
function function_II() {
    var y = document.getElementById("txt_I").value;
    var z = document.getElementById("txt_II").value;
    var x = +y - +z;
    document.getElementById("calculated").innerHTML = x;
}
function function_III() {
    var y = document.getElementById("txt_I").value;
    var z = document.getElementById("txt_II").value;
    var x = +y * +z;
    document.getElementById("calculated").innerHTML = x;
}
function function_IV() {
    var y = document.getElementById("txt_I").value;
    var z = document.getElementById("txt_II").value;
    var x = +y / +z;
    document.getElementById("calculated").innerHTML = x;
}