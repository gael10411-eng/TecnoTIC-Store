function calcularTotal() {

    let laptop = parseInt(document.getElementById("laptop").value) || 0;
    let router = parseInt(document.getElementById("router").value) || 0;
    let usb = parseInt(document.getElementById("usb").value) || 0;
    let ssd = parseInt(document.getElementById("ssd").value) || 0;
    let camara = parseInt(document.getElementById("camara").value) || 0;

    let total =
        (laptop * 12000) +
        (router * 1200) +
        (usb * 250) +
        (ssd * 1800) +
        (camara * 900);

    document.getElementById("resultado").innerHTML =
        "Total: $" + total + " MXN";
}