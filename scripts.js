document.getElementById('search-btn').addEventListener('click', searchTrain);

const trainData = [
    { number: '12345', name: 'Express 1', source: 'City A', destination: 'City B', arrival: '10:00 AM', departure: '10:30 AM' },
    { number: '54321', name: 'Express 2', source: 'City C', destination: 'City D', arrival: '11:00 AM', departure: '11:30 AM' },
    { number: '67890', name: 'Express 3', source: 'City A', destination: 'City D', arrival: '12:00 PM', departure: '12:30 PM' }
];

function searchTrain() {
    const trainNumber = document.getElementById('train-number').value.toLowerCase();
    const trainName = document.getElementById('train-name').value.toLowerCase();
    const source = document.getElementById('train-source').value.toLowerCase();
    const destination = document.getElementById('train-destination').value.toLowerCase();
    
    const filteredTrains = trainData.filter(train => {
        return (
            (train.number.includes(trainNumber) || trainNumber === '') &&
            (train.name.toLowerCase().includes(trainName) || trainName === '') &&
            (train.source.toLowerCase().includes(source) || source === '') &&
            (train.destination.toLowerCase().includes(destination) || destination === '')
        );
    });

    displayTrains(filteredTrains);
}

function displayTrains(trains) {
    const resultsContainer = document.getElementById('train-results');
    const trainTableBody = document.querySelector('#train-table tbody');
    
    // Clear previous results
    trainTableBody.innerHTML = '';

    if (trains.length === 0) {
        resultsContainer.style.display = 'block';
        trainTableBody.innerHTML = `<tr><td colspan="6">No train found with the given information.</td></tr>`;
    } else {
        trains.forEach(train => {
            const row = `
                <tr>
                    <td>${train.number}</td>
                    <td>${train.name}</td>
                    <td>${train.source}</td>
                    <td>${train.destination}</td>
                    <td>${train.arrival}</td>
                    <td>${train.departure}</td>
                </tr>`;
            trainTableBody.innerHTML += row;
        });
        resultsContainer.style.display = 'block';
    }
}
