const request = require('request');
const cheerio = require('cheerio');

request ('https://www.links.hr/hr/discounted-products/informatika-IT?pagenumber=2', (error, response, html)=>{
    if(!error && response.statusCode==200){
       const $ = cheerio.load(html);

       const artikl = $('.details');
      
       //const artikl = $('.details > h2');  direktno dolaziš do h2, ne mora se onda koristi find dolje

       //console.log(artikl.text());  -> ispisuje samo tekst, cijeli naziv artikla s opisom
       //console.log(artikl.html()); -> ipisuje cijeli naziv artikla s opisom ali u html obliku
       const output = artikl.find('h2').text();

       console.log(output); 
    }
})

