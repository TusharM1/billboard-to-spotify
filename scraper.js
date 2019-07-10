const request = require("request");
const fs = require('fs');
const jsdom = require("jsdom");
const sugar = require("sugar-date");

var Date = sugar.Date;
var a = new Date('2012-06-08');
console.log(a.full());

const billboardURL = "https://www.billboard.com";
var allCharts = {};

fs.readFile('TestPages/BillboardCharts.htm', 'utf8', (err, contents) => {
	const document = new jsdom.JSDOM(contents).window.document;
	const categories = document.querySelectorAll('.chart-panel__item.chart-panel__item--selector');
	categories.forEach((category) => {
		const currentCategory = category.textContent.replace(/\n/g, '');
		const currentCharts = Array.from(document.querySelectorAll('#' + currentCategory.toLowerCase().replace(/[\s/&]/gi, '') + 'ChartPanel a'))
									.map((chart) => chart.querySelector('.chart-panel__text').textContent.replace(/\n/g, ''));
		allCharts[currentCategory] = currentCharts;
	});
});
/*
request(billboardURL + '/charts/', (error, response, body) => {

})
// */

module.exports = class Scraper {

	constructor() {
		console.log("Constructor");
		// this.todaysDate = Date.now();
		// scrape all charts and put them in the dictionary
	}

	getCategories() {
		console.log("getCategories");
		return Object.keys(allCharts);
		// return keys from allCharts
	}

	getCharts(category) {
		console.log("getCharts");
		return allCharts[category];
		// return array of charts given category key
	}

	getAllCharts() {
		console.log("getAllCharts");
		return allCharts;
	}

	getNearestValidDate(date) {
		console.log("getNearestValidDate");
		// Get the next Saturday without going over the current date
	}

	downloadWebpage(date) {
		console.log("downloadWebpage");
		// Download the webpage of the current date
	}

	getSongList(webpage) {
		console.log("getSongList");
		// Return dictionary of songs
	}

	getNextDate() {
		console.log("getNextDate");
		// Return the next date
	}

	scrape(category, chart, startingDate, endingDate, maxSize) {
		var error = "";
		if (!category) error += "Error: category must have a valid entry. ";
		if (!chart) error += "Error: chart must have a valid entry. ";
		if (!startingDate) error += "Error: starting_date must have a valid entry. ";
		if (!endingDate) error += "Error: ending_date must have a valid entry. ";
		if (error) return error.substring(0, error.length - 1);

		if (maxSize < 0) maxSize = 0;


		console.log("scrape");
		// Scrape the pages from the options
	}

}

// TODO see if this file can remove the class and object oriented design
// Then I have to actually do most of the work. 
// First create the date parser
// Then the parse function
