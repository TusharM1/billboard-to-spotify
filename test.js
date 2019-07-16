const scraper = require('./scraper.js');
// var scraper = new scraper_class.Scraper();

console.log('-------------------------');
// console.log('Scraper Class:\t\t' + scraper_class);
// console.log('Scraper:\t\t\t' + scraper);
// console.log('Get Categories:\t' + scraper.getCategories());
// console.log('Get Charts:\t\t' + scraper.getCharts('Top Charts'));
// console.log('Get Chart Links:\t' + JSON.stringify(scraper_class.getChartLinks()));
// console.log('Get All Charts:\t\t' + JSON.stringify(scraper_class.getAllCharts()));
// console.log('Get Nearest Valid Date:\t' + scraper.getNearestValidDate('January 1st 2019').toString());
console.log('Download Webpage:\t' + scraper.downloadWebpage('Top Charts', 'The Hot 100', '2019-01-05'));
console.log('Get Song List:\t\t' + scraper.getSongList(undefined));
console.log('Get Next Date:\t\t' + scraper.getNextDate(undefined));
console.log('Scrape:\t\t\t' + scraper.scrape('Top Charts', 'The Hot 100', '2019-01-05', '2019-02-03'));
console.log('-------------------------');