// script.js

const apiKey = '5627c578b85e4022fcddd89adefdd8db';

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('cityInput').value.trim();

    if (city === '') {
        alert('Por favor, digite o nome da cidade.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada.');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name + ', ' + data.sys.country;
            const temperature = data.main.temp + '°C';
            const condition = data.weather[0].description;

            const weatherCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${location}</h5>
                            <p class="card-text">${temperature}</p>
                            <p class="card-text">${condition}</p>
                            <p class="card-text">Umidade: ${data.main.humidity}%</p>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('weatherCards').innerHTML = weatherCard;
        })
        .catch(error => {
            alert(error.message);
            console.error('Erro ao buscar dados:', error);
        });
});
