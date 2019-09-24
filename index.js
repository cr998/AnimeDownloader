
var cloudscraper = require('cloudscraper');
const cheerio = require('cheerio')



cloudscraper.get('https://animeflv.net/anime/5601/vinland-saga').then(function(animeHTML){

    const $ = cheerio.load(animeHTML);

    inicioArray=animeHTML.indexOf("[[")+2
    finalArray=animeHTML.indexOf("]]")
    lista=animeHTML.substr(inicioArray,finalArray-inicioArray).split("],[").map(function(item){
        return {
            cap:item.split(",")[0],
            id:item.split(",")[1]
        }
    }).reverse()
    console.log(lista)

    /*
    $("#episodeList").children().each((i,capNode) => {
        console.log(capNode.text())
        console.log("a")
    });

    $(".ListCaps").children().each((i,capNode) => {
        console.log(capNode.text())
        console.log("aa")
    });
    */
},console.error);





