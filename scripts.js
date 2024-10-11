document.getElementById('search-btn').addEventListener('click', searchTrain);

const trainData = [
    { number: '12002', name: 'New Delhi Habibganj Shatabdi Express', source: 'New Delhi', destination: 'Habibganj', arrival: '2:55 PM', departure: '3:00 PM' },
    { number: '12951', name: 'Mumbai Rajdhani Express', source: 'Mumbai Central', destination: 'New Delhi', arrival: '8:30 PM', departure: '8:50 PM' },
    { number: '12623', name: 'Chennai Thiruvananthapuram Mail', source: 'Chennai Central', destination: 'Thiruvananthapuram Central', arrival: '5:30 AM', departure: '5:50 AM' },
    { number: '12137', name: 'Punjab Mail', source: 'Chhatrapati Shivaji Maharaj Terminus', destination: 'Firozpur Cantt.', arrival: '7:20 AM', departure: '7:40 AM' },
    { number: '12301', name: 'Howrah Rajdhani Express', source: 'Howrah Junction', destination: 'New Delhi', arrival: '6:00 PM', departure: '6:20 PM' },
    { number: '12295', name: 'Sanghamitra Express', source: 'Bangalore City Junction', destination: 'Patna Junction', arrival: '11:00 AM', departure: '11:20 AM' },
    { number: '12423', name: 'Dibrugarh Rajdhani Express', source: 'New Delhi', destination: 'Dibrugarh', arrival: '1:30 PM', departure: '1:50 PM' },
    { number: '12381', name: 'Poorva Express', source: 'Howrah Junction', destination: 'New Delhi', arrival: '9:30 PM', departure: '9:50 PM' },
    { number: '12903', name: 'Golden Temple Mail', source: 'Mumbai Central', destination: 'Amritsar Junction', arrival: '6:20 PM', departure: '6:40 PM' },
    { number: '12723', name: 'Telangana Express', source: 'Hyderabad Deccan', destination: 'New Delhi', arrival: '1:40 PM', departure: '2:00 PM' },
    { number: '12505', name: 'North East Express', source: 'Guwahati', destination: 'Anand Vihar Terminal', arrival: '10:45 AM', departure: '11:00 AM' },
    { number: '12647', name: 'Kongu Express', source: 'Coimbatore Junction', destination: 'Hazrat Nizamuddin', arrival: '5:30 AM', departure: '5:50 AM' },
    { number: '12839', name: 'Howrah Chennai Mail', source: 'Howrah Junction', destination: 'Chennai Central', arrival: '3:15 PM', departure: '3:30 PM' },
    { number: '12658', name: 'Bangalore Mail', source: 'Chennai Central', destination: 'Bangalore City Junction', arrival: '10:10 PM', departure: '10:30 PM' },
    { number: '12953', name: 'August Kranti Rajdhani Express', source: 'Mumbai Central', destination: 'Hazrat Nizamuddin', arrival: '11:30 AM', departure: '11:50 AM' },
    { number: '12553', name: 'Vaishali Express', source: 'Saharsa Junction', destination: 'New Delhi', arrival: '7:20 PM', departure: '7:40 PM' },
    { number: '12019', name: 'Shatabdi Express', source: 'Howrah Junction', destination: 'Ranchi', arrival: '1:45 PM', departure: '2:00 PM' },
    { number: '11093', name: 'Mahanagari Express', source: 'Chhatrapati Shivaji Maharaj Terminus', destination: 'Varanasi Junction', arrival: '8:30 AM', departure: '8:50 AM' },
    { number: '12313', name: 'Sealdah Rajdhani Express', source: 'Sealdah', destination: 'New Delhi', arrival: '11:45 AM', departure: '12:05 PM' },
    { number: '12611', name: 'Matsyagandha Express', source: 'Lokmanya Tilak Terminus', destination: 'Mangalore Central', arrival: '10:10 PM', departure: '10:30 PM' },
    { number: '12123', name: 'Deccan Queen', source: 'Mumbai CST', destination: 'Pune', arrival: '8:25 AM', departure: '8:40 AM' },
    { number: '11029', name: 'Koyna Express', source: 'Mumbai CST', destination: 'Kolhapur', arrival: '5:20 PM', departure: '5:40 PM' },
    { number: '12127', name: 'Intercity Express', source: 'Mumbai CST', destination: 'Pune', arrival: '8:00 PM', departure: '8:20 PM' },
    { number: '12051', name: 'Jan Shatabdi', source: 'Dadar', destination: 'Madgaon', arrival: '11:00 AM', departure: '11:20 AM' },
    { number: '12111', name: 'Amravati Express', source: 'Mumbai CST', destination: 'Amravati', arrival: '10:00 PM', departure: '10:20 PM' },
    { number: '11007', name: 'Deccan Express', source: 'Mumbai CST', destination: 'Pune', arrival: '4:30 PM', departure: '4:50 PM' },
    { number: '11009', name: 'Sinhagad Express', source: 'Mumbai CST', destination: 'Pune', arrival: '7:30 PM', departure: '7:50 PM' },
    { number: '11059', name: 'Chhapra Express', source: 'Mumbai CST', destination: 'Varanasi', arrival: '10:00 AM', departure: '10:30 AM' },
    { number: '12163', name: 'Mumbai LTT - Chennai Express', source: 'Lokmanya Tilak Terminus', destination: 'Chennai', arrival: '7:45 AM', departure: '8:00 AM' },
    { number: '22177', name: 'Mumbai LTT - Madurai Express', source: 'Lokmanya Tilak Terminus', destination: 'Madurai', arrival: '10:30 AM', departure: '10:50 AM' },
    { number: '12101', name: 'Jnaneshwari Super Deluxe Express', source: 'Lokmanya Tilak Terminus', destination: 'Howrah', arrival: '3:30 PM', departure: '3:50 PM' },
    { number: '11061', name: 'Lokmanya Tilak Terminus - Darbhanga Express', source: 'Lokmanya Tilak Terminus', destination: 'Darbhanga', arrival: '7:00 AM', departure: '7:20 AM' },
    { number: '12105', name: 'Vidarbha Express', source: 'Mumbai CST', destination: 'Gondia', arrival: '6:30 PM', departure: '6:50 PM' }
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

