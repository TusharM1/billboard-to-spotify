const request = require("request");
const fs = require('fs');

const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

const sugar = require("sugar-date");
const Date = sugar.Date;

const billboardURL = "https://www.billboard.com";
let allCharts = {};
let chartLinks = {};

let fileContents = fs.readFileSync('TestPages/BillboardCharts.htm', 'utf8');
console.log("Create Charts Dictionary");
const document = new JSDOM(fileContents).window.document;
const categories = document.querySelectorAll('.chart-panel__item.chart-panel__item--selector');
categories.forEach((category) => {
	const currentCategory = category.textContent.replace(/\n/g, '');
	const currentCharts = Array.from(document.querySelectorAll('#' + currentCategory.toLowerCase().replace(/[\s/&]/gi, '') + 'ChartPanel a')).map((chart) => {
		const chartName = chart.querySelector('.chart-panel__text').textContent.replace(/\n/g, '');
		chartLinks[chartName] = chart['href'];
		return chartName;
	});
	allCharts[currentCategory] = currentCharts;
});

/*
request(billboardURL + '/charts/', (error, response, body) => {

})
// */

// module.exports.getCategories = function getCategories() {
// 	console.log("getCategories");
// 	return Object.keys(allCharts);
// 	// return keys from allCharts
// }

// module.exports.getCharts = function getCharts(category) {
// 	console.log("getCharts");
// 	return allCharts[category].map((entry) => entry[0]);
// 	// return array of charts given category key
// }

// module.exports.getChartLinks = function getChartLinks() {
// 	return chartLinks;
// } 

module.exports.getAllCharts = function getAllCharts() {
	console.log("getAllCharts");
	return allCharts;
}

module.exports.Scraper = class Scraper {

	constructor() {
		console.log("Constructor");
		this.todaysDate = new Date();
		this.earliestDate = new Date('1958-07-28');
		// scrape all charts and put them in the dictionary
	}

	getNearestValidDate(date) {
		console.log("getNearestValidDate");
		if (!date)
			return null;
		var currentDate = new Date(date);
		if (currentDate.raw == 'Invalid Date')
			return null;
		currentDate.addDays((6 - currentDate.getWeekday().raw) % 7);
		if (currentDate.isFuture().raw)
			currentDate.addDays(-7);	
		// check if setDate, rewind, advance, and range works here	
		if (currentDate.isFuture().raw)
			currentDate = this.todaysDate;
		else if (currentDate.isBefore(this.earliestDate.raw).raw)
			currentDate = this.ealiestDate;
		return currentDate;
		// Get the next Saturday without going over the current date
	}

	downloadWebpage(category, chart, date) {
		console.log("downloadWebpage");
		// const url = billboardURL + allCharts
		// Download the webpage of the current date
	}

	getSongList(webpage) {
		console.log("getSongList");
		// Return dictionary of songs
	}

	getNextDate(webpage) {
		console.log("getNextDate");
		// Return the next date
	}

	scrape(category, chart, startingDate, endingDate, maxSize) {
		console.log("scrape");
		console.log(category + " | " + chart + " | " + startingDate + " | " + endingDate + " | " + maxSize);
		var error = "";
		if (!category) 
			error += "Error: category must have a valid entry. ";
		if (!chart) 
			error += "Error: chart must have a valid entry. ";	
		startingDate = this.getNearestValidDate(startingDate);
		if (!startingDate) 
			error += "Error: starting_date must have a valid entry. ";
		endingDate = this.getNearestValidDate(endingDate);
		if (!endingDate) 
			error += "Error: ending_date must have a valid entry. ";
		if (error) 
			return error.substring(0, error.length - 1);

		if (!maxSize || maxSize < 0) 
			maxSize = 0;

		console.log(category + " | " + chart + " | " + startingDate.full().raw + " | " + endingDate.full().raw + " | " + maxSize);	

		return "Success";
		// Scrape the pages from the options
	}

}

// TODO see if this file can remove the class and object oriented design
// Then I have to actually do most of the work. 
// First create the date parser
// Then the parse function
