const request = require('request');
const cheerio = require('cheerio');
const fs =require('fs');
const writeStream = fs.createWriteStream('post3.scv');

//Write Headers
writeStream.write(`Artikl, Slika \n`);

request ('https://www.instar-informatika.hr/akcija.asp', (error, response, html)=>{
    if(!error && response.statusCode==200){
       const $ = cheerio.load(html);

       $('.product').each((i, el)=>{
            const artikl=$(el)
            .find('.name')
            .text()
            .replace(/\s\s+/g, '');
        
        const Slika=$(el)
        .find('.img')
        .text();

        //Write Row To CSV
        writeStream.write(`${artikl}, ${Slika} \n`);
       });

       console.log('Scraping Done...');
    }
});

