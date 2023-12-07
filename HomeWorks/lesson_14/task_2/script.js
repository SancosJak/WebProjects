document.addEventListener('DOMContentLoaded', async function () {
    const apiUrls = [
        'https://api.agify.io/?name=vadim',
        'https://api.genderize.io/?name=vadim',
        'https://api.nationalize.io/?name=vadim',
        'https://api.zippopotam.us/us/33162'
    ];

    try {
        const responses = await Promise.all(apiUrls.map(url => fetch(url)));

        const processedData = responses.map(async (response, index) => {
            if (!response.ok) {
                throw new Error(`Ошибка при запросе: ${response.status}`);
            }

            const data = await response.json();

            if (index < 3) {
                return processApiData(data);
            } else {
                return processPostalCodeData(data);
            }
        });

        const dataArray = await Promise.all(processedData);

        displayData(dataArray);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
});

function processApiData(data) {
    return {
        count: data.count || 0,
        name: data.name || '',
        age: data.age || 0,
        gender: data.gender || '',
        probability: data.probability || 0
    };
}

function processPostalCodeData(data) {
    return {
        postCode: data['post code'] || '',
        country: data.country || '',
        countryAbbreviation: data['country abbreviation'] || '',
        placeName: data.places[0]['place name'] || '',
        longitude: data.places[0].longitude || '',
        state: data.places[0].state || '',
        stateAbbreviation: data.places[0]['state abbreviation'] || '',
        latitude: data.places[0].latitude || ''
    };
}

function displayData(dataArray) {
    const container = document.getElementById('data-container');

    const apiTable = createTable(dataArray.slice(0, 3));
    container.appendChild(apiTable);

    const postalCodeContainer = document.getElementById('postal-code-container');
    const postalCodeTable = createTable(dataArray.slice(3)); 
    postalCodeContainer.appendChild(postalCodeTable);
}

function createTable(dataArray) {
    const table = document.createElement('table');

    const headerRow = table.insertRow(0);
    for (const key in dataArray[0]) {
        const th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1); 
        headerRow.appendChild(th);
    }

    dataArray.forEach(data => {
        const row = table.insertRow();
        for (const key in data) {
            const cell = row.insertCell();
            cell.textContent = data[key];
        }
    });

    return table;
}
