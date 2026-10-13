const weatherForm = document.querySelector('#weatherForm');
const weatherInput = document.querySelector('#weather');
const temperatureInput = document.querySelector('#temperature');
const suggestion = document.querySelector('#suggestion p');

weatherForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const weather = weatherInput.value;
	const temperature = Number(temperatureInput.value);
	let message = '';

	// Choose what to bring based on the weather the user selected.
	if (weather === 'cloudy' || weather === 'rainy') {
		message = `It's ${weather}! A light jacket might be a good idea. \u2601\ufe0f \ud83d\udca7`;
	} else if (weather === 'sunny') {
		message = 'It is sunny! Bring sunglasses and sunscreen. \ud83d\ude0e\u2600\ufe0f';
	} else if (weather === 'snowy') {
		message = 'It is snowy! Bring a warm coat, gloves, and a hat. \u2744\ufe0f\ud83e\udde4\ud83e\udde4';
	} else if (weather === 'windy') {
		message = 'It is windy! Bring a jacket to stay warm. \ud83c\udf2c\ufe0f\ud83e\udde5';
	} else {
		message = 'Please select the weather first. \ud83c\udf24\ufe0f';
	}

	if (temperatureInput.value !== '' && temperature < 50) {
		message += ' It is cold outside! Make sure to bring a warm coat as well! \ud83e\udde5';
	}

	suggestion.textContent = message;
});
