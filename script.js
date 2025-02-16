function renderizarMapa2() {
    let endereco = document.getElementById("endereco").value;
    if (endereco.trim() !== "") {
        let mapa2 = document.getElementById("mapa2");
        let url = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`;
        mapa2.innerHTML = `<iframe width="100%" height="400" src="${url}" allowfullscreen></iframe>`;
    } else {
        alert("Digite um endereço válido para renderizar no mapa!");
    }
}