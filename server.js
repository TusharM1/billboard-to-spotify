const express = require('express');
const scraper = require('./scraper.js');
// const Scraper = scraper_class.Scraper;

const app = express();
app.use(express.json())

// var scraper = new Scraper();

// Returns a JSON string of all of the charts in each category
app.get('/get-charts/', (request, response) => {
	// console.log('Get Charts');
	response.json(scraper.getAllCharts());
});

// Returns a JSON string of all of the songs
app.get('/scrape-songs/', (request, response) => {
	// console.log('Scrape Songs');
	response.json(scraper.scrape(request.query.category, request.query.chart, request.query.starting_date, request.query.ending_date, request.query.max_size));
});

// Possibly returns a JSON string of the songs that were not added
app.post('/create-playlist/', (request, response) => {
	// console.log('Create Playlist');
	response.end();
	// response.json(request.body);
});

app.listen(3000);

// TODO the only thing left in this file to do is the create playlists function
// It will connect to the user's spotify account and then create a playlist given a list of songs.
// It still needs to be done completely