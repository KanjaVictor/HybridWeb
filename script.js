    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(user => {
        const markup = `<li>${user.name}</li>`;

        document.querySelector('ol').insertAdjacentHTML('beforeend', markup);
      });
    })
    .catch(error => console.log(error));

    /*
    const axios = require('axios');
const cheerio = require('cheerio');
const util = require('util');

const link = "https://onefootball.com/en/competition/premier-league-9/table";

axios.get(link)
  .then((response) => {
    const source = response.data;
    const $ = cheerio.load(source);
    const tab = $("a.standings__row-grid");

    const table = [];
    table.push("  ________________ PL W D L GD PTS");

    tab.each((index, element) => {
      table.push($(element).text().trim());
    });

    console.log(util.inspect(table, false, null, true));
  })
  .catch((error) => {
    console.error("Error:", error);
  });

    
    
    */