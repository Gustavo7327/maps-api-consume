function obterMinhaLocalizacao() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                alert(`Sua localização:\nLatitude: ${latitude}, Longitude: ${longitude}`);

                // Exibir mapa com a posição do usuário
                let mapa2 = document.getElementById("mapa2");
                mapa2.innerHTML = `<iframe width="100%" height="400" 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&layer=mapnik&marker=${latitude},${longitude}" 
                    allowfullscreen></iframe>`;
            },
            function (error) {
                alert("Erro ao obter localização: " + error.message);
            }
        );
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}
