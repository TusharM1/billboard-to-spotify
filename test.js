const scraper_class = require('./scraper.js');
var scraper = new scraper_class.Scraper();

console.log('-------------------------');
console.log(scraper_class);
console.log(scraper);
// console.log(scraper.getCategories());
// console.log(scraper.getCharts('Top Charts'));
// console.log(scraper_class.getChartLinks());
console.log(scraper_class.getAllCharts());
console.log(scraper.getNearestValidDate('January 1st 2019'));
console.log(scraper.downloadWebpage('Top Charts', 'The Hot 100', '2019-01-05'));
console.log(scraper.getSongList(undefined));
console.log(scraper.getNextDate(undefined));
console.log(scraper.scrape('Top Charts', 'The Hot 100', '2019-01-05', '2019-02-03'));
console.log('-------------------------');