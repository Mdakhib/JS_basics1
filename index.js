// var a = 3;
// var b = 5;
// var c = true;
// var d = "hello";

// console.log(typeof a);
// console.log(typeof c);
// // -----------------------------------------------
// function add(a,b) {
//   return a + b;
// }
// console.log(add(5, 9));

// function sub(a, b,c) {
//   return a - b-c;
// }
// console.log(sub(20,10,5));
// // --------------------------------------------------------
// function add(a) {
//   if (a < 0) {
//     console.log("a is -ve");
//   } else {
//     console.log("a is +ve");
//   }
//   return a;
// }

// console.log(add(3));
// // -------------------------------------------------------------------
// function add(a) {
//   if (a < 0) {
//     console.log("a is -ve");
//   } else if (a == 0) {
//     console.log("a is equal");
//   } else {
//     console.log("a is +ve");
//   }
//   return a;
// }

// console.log(add(0));
// // -----------------------------------------------------------------------
// var a=10;
// var b=20;

// function add(a, b) {
//   var c = a + b;
//   console.log(c);
//   return c;
// }
// console.log(add(10, 20));
// // ------------------------------------------------------------------------
// function fn(a, b) {
//   if (a < b) {
//     console.log("a is greater");
//     console.log("a is smaller");
//   } else {
//     console.log("b is greater");
//     console.log("b is smaller");
//   }
//   return a;
//   return b;
// }
// console.log(fn(20, 30));
// console.log(fn(30, 40));
// // ----------------------------------------------------------------------------
// var a=10;
// if(a>=11){
// document.write("a is true");
// }else{
//   document.write("a is false");
// }
// // -------------------------------------------------------------------
// var myage =21;
// if(myage>30){
//   document.write("u r over 30!");

// }else if(myage> 20){
//   document.write("u r over 20!");
// }else if(myage>10){
//   document.write("u r over10!");
// } else{
//   document.write("u r not over 30!");
// }
// // --------------------------------------------------------------------
// var age = 10;
// while (age<=10){
//   console.log("ur age is less then 10");
//   age++;
// }
// document.write("u r now over 10");
// // ----------=-----------------------------------------------------
// for(age=1;age<=10;age++){
//   console.log("ur age is less then 10",age);

//  }
//  document.write("u r now over 10");
// // -----------------------------------------------------
// for(i=1;i<100;i++){
//   console.log(i)
// }
// // ----------------------------------------------------
// for(i=1;i<10;i++){
//   if(i==5||i==3){
//     continue
//   } 
//   console.log(i)
   
    
  
//     if(i==7){
//     break;
//     }
// }
// // ---------------------------------------------------------
// immmmmmmmpppppppppppppp
// var links= document.getElementsByTagName("a");
// for(i=0;i<links.length;i++){
//   links[i].className="link-"+i;
// }
// // --------------------------------------------------------------------------
// function getAverage(a,b,c){
//   var average=(a+b-c)/3;
//   console.log(average);
// }
// getAverage(5,9,7)
// // -------------------------------------------------------
// function getAverage(a,b,c){
//   var average=(a+b-c)/3;//local variable
//   // console.log(average);
//   return average;
// }
// var myresult = getAverage(30,30,30);//global varible
// console.log("the average is" + myresult)
// // ---------------------------------------------------------------------------

// var a=0
// switch(a){
//     case 0:
//         console.log("a is +ive");
//         break;

//     case 1:
//         console.log("s is -ve");
//         break;
        
//     default:
//         confirm.log("a is null") ;
//         break;

// }
// // --------------------------------------------------------------

// var i = 0;
//   do {
//     i == "The number is " + i;
//     i++;
//     console.log(i);
//   }
//   while (i < 10);
// // ---------------------------------------------------------------------
// var i=0;
// var a;
// do{
//   a= i;
//   i++;
//   console.log(a)
// }while(i<5);
// // -----------------------------------------------------------
function changename(){
    alert("changename");
    var domElement = document.getElementById("name");
    domElement.innerHTML="Akhib"
    console.log(domElement);
    
}
// ------------------------------------------------------------------
// for(i=1;i<100;i++){
//   if(i==50||i==30||i==10){
//     continue;
//   } 
//   console.log(i)
   
    
  
//     if(i==70){
//     break;
//     }
// }
// ---------------------------------------------------

// about object

// console.log("hello world");

// var fruitsList = ["apple", "mango", "tomato", "grapes", "orange"];
// console.log(fruitsList);
// console.log(fruitsList[2]);
// ---------------------------------------------------
// var student = {
//   name: "Anum",
//   usn: "1gc17cs007",
//   cgpa: 9.8
// };
// ------------------------------------------------------
// var emp = {
//   name: "umrah",
//   emp_id: 12,
//   sal: 350000
// };
// console.log(emp);
// ---------------------------------------------------------------

// var employee = {
//     name: "umrah",
//     emp_id: 12,
//     sal: 350000,
//     address: {
//       pin: 56007,
//       city: "bm road"
//     }
//   };
  
//   //  1. dot notation
//   //  2. Bracket notation
//   console.log(employee["address"]["pin"]);
// -----------------------------------------------------------------------------
// var starWarsHero = {
//     name: "C-3PO",
//     height: "167",
//     mass: "75",
//     hair_color: "n/a",
//     skin_color: "gold",
//     eye_color: "yellow",
//     birth_year: "112BBY",
//     gender: "n/a",
//     homeworld: "https://swapi.co/api/planets/1/",
//     films: [
//       "https://swapi.co/api/films/2/",
//       "https://swapi.co/api/films/5/",
//       "https://swapi.co/api/films/4/",
//       "https://swapi.co/api/films/6/",
//       "https://swapi.co/api/films/3/",
//       "https://swapi.co/api/films/1/"
//     ],
//     species: ["https://swapi.co/api/species/2/"],
//     vehicles: [],
//     starships: [],
//     created: "2014-12-10T15:10:51.357000Z",
//     edited: "2014-12-20T21:17:50.309000Z",
//     url: "https://swapi.co/api/people/2/"
//   };
//   console.log(starWarsHero.films[0])//(how to access main data using array)
// -------------------------------------------------------------------------
// var details = {                //object within object
//     name: "Mohammed Umair",
//     address: {
//       city: "Ramanagaram",
//       state: "Karnataka",
//       pin: 562159
//     }
//   };
//   console.log(details.address.pin);
// --------------------------------------------------------------------------
// var details = {  // to add another object within object
//     name: "Mohammed Umair",
//     address: {
//       city: "Ramanagaram",
//       state: "Karnataka",
//       pin: 562159
//     },
//   };
//   console.log(details);
  
//   details.personaldetails={ age:23}
// ------------------------------------------------------------

    //  //how to fetch the names by multiples objects

    //  var news = {
    //     status: "ok",
    //     totalResults: 4437,
    //     articles: [
    //       {
    //         source: {
    //           id: null,
    //           name: "Lse.ac.uk"
    //         },
    //         author: "David Tuckett",
    //         title:
    //           "Narrative Economics: How Stories Go Viral and Drive Major Economic Events – Book Review",
    //         description:
    //           "If you are interested in this review, you can watch a video of Robert J. Shiller speaking about his new book at LSE or listen to a podcast of the event, both recorded on 6 September 2019. Narrative Economics: How Stories Go Viral and Drive Major Economic Even…",
    //         url:
    //           "https://blogs.lse.ac.uk/businessreview/2020/03/08/narrative-economics-how-stories-go-viral-and-drive-major-economic-events-book-review/",
    //         urlToImage:
    //           "https://blogsmedia.lse.ac.uk/blogs.dir/99/files/2020/03/Narrative-Economics.jpg",
    //         publishedAt: "2020-03-08T06:00:05Z",
    //         content:
    //           "If you are interested in this review, you can watch a video of Robert J. Shiller speaking about his new book at LSE or listen to a podcast of the event, both recorded on 6 September 2019. \r\nNarrative Economics: How Stories Go Viral and Drive Major Economic Ev… [+7897 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Aayush Jindal",
    //         title: "Bitcoin Just Reversed and $8,400 Is Imminent, Here’s Why",
    //         description:
    //           "Bitcoin failed to continue above the $9,200 resistance and it is down more than 4% against the US Dollar. BTC is now trading in a bearish zone and it could slide further below $8,700. After forming a short term top near $9,211, bitcoin price declined sharply …",
    //         url:
    //           "https://www.newsbtc.com/2020/03/08/bitcoin-just-reversed-and-8400-is-imminent/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_451002544-1200x780.jpg",
    //         publishedAt: "2020-03-08T05:48:03Z",
    //         content:
    //           "Bitcoin failed to continue above the $9,200 resistance and it is down more than 4% against the US Dollar. BTC is now trading in a bearish zone and it could slide further below $8,700.\r\n<ul><li>After forming a short term top near $9,211, bitcoin price declined… [+2227 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Aayush Jindal",
    //         title: "Ethereum Trading Near Crucial Juncture, Can Bulls Save The Day?",
    //         description:
    //           "Ethereum failed to continue higher above the $252 resistance and declined against the US Dollar, similar to bitcoin. However, ETH price is now trading near a key uptrend support. ETH price is down 5% and it is now trading below the $235 level against the US D…",
    //         url:
    //           "https://www.newsbtc.com/2020/03/08/ethereum-trading-near-crucial-juncture/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_561906238-1200x780.jpg",
    //         publishedAt: "2020-03-08T04:48:32Z",
    //         content:
    //           "Ethereum failed to continue higher above the $252 resistance and declined against the US Dollar, similar to bitcoin. However, ETH price is now trading near a key uptrend support.\r\n<ul><li>ETH price is down 5% and it is now trading below the $235 level against… [+2171 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Yahoo.co.jp"
    //         },
    //         author: "CoinDesk Japan",
    //         title:
    //           "ビットコイン値上がりの一方、世界の株価や米国債が低迷（CoinDesk Japan）",
    //         description:
    //           "従来からの金融商品市場で強力な売りが続く中、ビットコインは堅い値上がりを見せた。この状況は、時価総額でトップの仮想通貨であるビットコインが株式や国債の利回りと並んで劇的に値下がりした2月最終週とは対",
    //         url:
    //           "https://headlines.yahoo.co.jp/hl?a=20200308-00063153-coindesk-bus_all",
    //         urlToImage:
    //           "https://lpt.c.yimg.jp/amd/20200308-00063153-coindesk-000-view.jpg",
    //         publishedAt: "2020-03-08T03:25:48Z",
    //         content:
    //           "2\r\nBTC202035880093915096900095\r\nCoinDeskBitcoin Price Index9100963619000242%\r\nDAXCAC 40FTSE 1001.5%2.2%36S&amp;P 5001%\r\n100.8%13\r\n116811811\r\nFRBFRB31850\r\nMoragn Creek DigitalAnthony PomplianoMichael Novogratz\r\nSP 50024%13%\r\n28.5%\r\nCoinDeskOpen Money Initiativ… [+237 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Forbes.com"
    //         },
    //         author:
    //           "James Asquith, Contributor, James Asquith, Contributor https://www.forbes.com/sites/jamesasquith/",
    //         title:
    //           "Speculative Bubbles: The Future Of Travel Influencers—The Questions That No One Seems To Be Asking",
    //         description:
    //           "The word influencer has become know amongst all demographics. However, what does it actually mean? What is the difference between being an influencer and being influential? How to be a travel influencer? But is the bubble about to burst?",
    //         url:
    //           "https://www.forbes.com/sites/jamesasquith/2020/03/07/speculative-bubbles-the-future-of-travel-influencers-the-questions-that-no-one-seems-to-be-asking/",
    //         urlToImage:
    //           "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1200295983%2F0x0.jpg",
    //         publishedAt: "2020-03-08T03:00:13Z",
    //         content:
    //           "Learn how to become an influencer.\r\nCould this be amongst the most nauseating adverts appearing on social media today? The irony of other influencers charging a price to supposedly teach others their secret ways. The very word influencer is derived from someo… [+7405 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Yahoo.co.jp"
    //         },
    //         author: "CoinDesk Japan",
    //         title:
    //           "電力は原価で調達──発電所、1日5万ドルをマイニング（CoinDesk Japan）",
    //         description:
    //           "ニューヨーク州北部にある発電所は、発電した電力の一部を使ってビットコインをマイニングしている。その規模は産業規模だ。天然ガス発電所のグリーニッジ・ジェネレーション（Greenidge Generat",
    //         url:
    //           "https://headlines.yahoo.co.jp/hl?a=20200308-00062890-coindesk-bus_all",
    //         urlToImage:
    //           "https://lpt.c.yimg.jp/amd/20200308-00062890-coindesk-000-view.jpg",
    //         publishedAt: "2020-03-08T02:00:44Z",
    //         content:
    //           "Greenidge Generation700015.5CoinDeskBitcoin Price Index5\r\nKevin Zhang\r\n6500\r\n2017Dale Irwin\r\n56.25\r\nTim Rainey\r\n1937Atlas Holdings41\r\n1061411000\r\n| | The mining facility. Credit: Greenidge Generation | A New York Power Plant Is Mining $50K Worth of Bitcoin a … [+2 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Nick Chong",
    //         title:
    //           "This Eerie Fractal Shows the Bitcoin Price Has Further To Fall From $9,000",
    //         description:
    //           "Over the past few days, Bitcoin has started to trend higher; since hitting $8,400 last weekend, the price of the leading cryptocurrency rallied as high as $9,250 on Saturday morning. Although there are many optimists saying that this price action is a precurs…",
    //         url:
    //           "https://www.newsbtc.com/2020/03/08/this-eerie-fractal-shows-bitcoin-further-fall-from-9000/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_1077030059-1200x780.jpg",
    //         publishedAt: "2020-03-08T02:00:31Z",
    //         content:
    //           "Over the past few days, Bitcoin has started to trend higher; since hitting $8,400 last weekend, the price of the leading cryptocurrency rallied as high as $9,250 on Saturday morning.\r\nAlthough there are many optimists saying that this price action is a precur… [+2680 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Techmeme.com"
    //         },
    //         author: null,
    //         title:
    //           'How North Korean hackers laundered $100M in stolen Bitcoin by using hundreds of automated transactions to "peel" small amounts off the original (Mike Orcutt/MIT Technology Review)',
    //         description:
    //           "Mike Orcutt / MIT Technology Review : How North Korean hackers laundered $100M in stolen Bitcoin by using hundreds of automated transactions to “peel” small amounts off the original — Hackers working for Kim Jong-un have become experts at covering their track…",
    //         url: "https://www.techmeme.com/200307/p11",
    //         urlToImage:
    //           "https://www.technologyreview.com/i/images/ap494082739730-web.jpg?sw=560&cx=0&cy=0&cw=3000&ch=1688",
    //         publishedAt: "2020-03-08T00:40:15Z",
    //         content: null
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Nick Chong",
    //         title:
    //           "Analyst 4 Reasons Why Bitcoin Is Looking Extremely Bullish at $9,000",
    //         description:
    //           "Despite the slight recovery seen over the past few days, analysts still fear that Bitcoin is on a trajectory that will see its price correct even further than it already has. In fact, Related Reading: Crypto Tidbits: India Makes Watershed Ruling On Bitcoin, E…",
    //         url:
    //           "https://www.newsbtc.com/2020/03/08/analyst-4-reasons-why-bitcoin-looking-extremely-bullish-9000/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_664170823-1200x780.jpg",
    //         publishedAt: "2020-03-08T00:30:43Z",
    //         content:
    //           "Despite the slight recovery seen over the past few days, analysts still fear that Bitcoin is on a trajectory that will see its price correct even further than it already has. In fact,\r\nSome, however, aren’t so concerned. One persistent bull is a trader fittin… [+2735 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Elconfidencialdigital.com"
    //         },
    //         author: "UCR",
    //         title:
    //           "En qué consiste Kuailian, la nueva forma de invertir usando crypto-tecnología",
    //         description:
    //           "El desarrollo de nuevas tecnologías y la irrupción de las criptomonedas ha traído consigo nuevos modelos de inversión que están seduciendo a millones de inversores en todo el mundo. Uno de estos modelos de inversión es el que llevan a cabo desde la empresa Ku…",
    //         url:
    //           "https://www.elconfidencialdigital.com/articulo/negocio/kuailian-crypto-tecnologia/20200306115559140247.html",
    //         urlToImage:
    //           "https://www.elconfidencialdigital.com/media/elconfidencialdigital/images/2020/03/06/2020030611522920740.jpg",
    //         publishedAt: "2020-03-08T00:00:00Z",
    //         content:
    //           "El desarrollo de nuevas tecnologías y la irrupción de las criptomonedas ha traído consigo nuevos modelos de inversión que están seduciendo a millones de inversores en todo el mundo. Uno de estos modelos de inversión es el que llevan a cabo desde la empresa Ku… [+4341 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Slashdot.org"
    //         },
    //         author: "feedfeeder",
    //         title:
    //           "Cancelled: Bitcoin 2020, Stanford, SXSW and James Bond – As Coronavirus Cases Top 100,000 Worldwide - The Daily Hodl",
    //         description:
    //           "Cancelled: Bitcoin 2020, Stanford, SXSW and James Bond – As Coronavirus Cases Top 100,000 WorldwideThe Daily Hodl SXSW canceled due to coronavirus after Austin declares 'local disaster'CNBC Comprehensive Coronavirus Coverage In TexasCBSDFW Coronavirus: Here's…",
    //         url: "https://slashdot.org/firehose.pl?op=view&amp;id=126916528",
    //         urlToImage: null,
    //         publishedAt: "2020-03-07T23:32:36Z",
    //         content:
    //           "Those who do not understand Unix are condemned to reinvent it, poorly.\r\n- Henry Spencer, University of Toronto Unix hack"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Hackernoon.com"
    //         },
    //         author: "Shino",
    //         title:
    //           "The Ultimate Takeaway From The Rise of Blockchains is The Importance of Incentivization",
    //         description:
    //           "What is the significance of blockchain technology in the future, why can Bitcoin be hyped for over ten years and still have such strong vitality? It is impossible to know what the future world will look like without studying these issues in depth.",
    //         url:
    //           "https://hackernoon.com/the-ultimate-takeaway-from-the-rise-of-blockchains-is-the-importance-of-incentivization-w9hw32vj",
    //         urlToImage: "https://hackernoon.com/drafts/wl9i32bh.png",
    //         publishedAt: "2020-03-07T23:01:09Z",
    //         content: null
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Nick Chong",
    //         title:
    //           "Crypto Tidbits: India Makes Watershed Ruling On Bitcoin, Elon Musk Bumps Dogecoin, Ethereum Founder Supports Twitter CEO",
    //         description:
    //           "Another week, another round of Crypto Tidbits. The past seven days have been rather positive for Bitcoin and the rest of the cryptocurrency market, which was battered the week prior to the one that just transpired. BTC rallied from $8,400 to $8,888 (as of the…",
    //         url:
    //           "https://www.newsbtc.com/2020/03/07/crypto-tidbits-india-makes-watershed-ruling-on-bitcoin-elon-musk-bumps-dogecoin-ethereum-founder-supports-twitter-ceo/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/02/shutterstock_1117458386-1200x780.jpg",
    //         publishedAt: "2020-03-07T23:00:27Z",
    //         content:
    //           "Another week, another round of Crypto Tidbits. The past seven days have been rather positive for Bitcoin and the rest of the cryptocurrency market, which was battered the week prior to the one that just transpired.\r\nBTC rallied from $8,400 to $8,888 (as of th… [+5104 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Cointelegraph.com"
    //         },
    //         author: "Cointelegraph By Joel Comm",
    //         title:
    //           "Steem Scandal, Blockchain Voting Fiasco & More: Bad Crypto News of the Week",
    //         description: "Check the bad crypto news of the past week.",
    //         url:
    //           "https://cointelegraph.com/news/steem-scandal-blockchain-voting-fiasco-more-bad-crypto-news-of-the-week",
    //         urlToImage:
    //           "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy82NDNhMjBkNDAwNTAyNDdlYzY1YTQyYmZlMmZkNzU5OS5qcGc=.jpg",
    //         publishedAt: "2020-03-07T23:00:00Z",
    //         content:
    //           "So, how high is Bitcoin about to go? Analyst Willy Woo thinks it’s going to hit $135,000. It’s a “common-sense prediction” he told RT’s Keiser Report. Tim Draper is betting even higher. The venture capitalist has moved his money out of the stock market (too “… [+3293 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Idnes.cz"
    //         },
    //         author: "https://www.facebook.com/iDNES.cz",
    //         title:
    //           "Hackeři zneužili paniku kolem koronaviru, Českem se šíří podvodné maily",
    //         description:
    //           "Hackeři využili paniku kolem koronaviru, Českem se začínají šířit podvodné maily, které na ní chtějí vydělat. Kliknutím na odkazy obdržené v elektronické poště, které často vypadají velmi důvěryhodně, však lidé velmi riskují. Podvodníci pak snadno získají cit…",
    //         url:
    //           "https://www.idnes.cz/zpravy/domaci/koronavirus-panika-podvodne-maily-hackeri-elektronicka-posta-lakaji-penize.A200306_111313_domaci_chtl",
    //         urlToImage: "https://servis.idnes.cz/fbimg.aspx?foto=JB81a0c2_001.jpg",
    //         publishedAt: "2020-03-07T23:00:00Z",
    //         content:
    //           "Staí kliknout a budete za pouhých sedm tisíc korun vdt, jestli máte koronavirus. Jiný odkaz zase nabízí zaruen nepropustné rouky za pár up. No a pak samozejm nezapomete otevít mail nabízející skutenou mapu hrozeb a exkluzivní informace, které nám vláda tají.\r… [+5352 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Redmondregister.com"
    //         },
    //         author: "Jeff Slater",
    //         title:
    //           "PIBBLE (PIB) 24 Hour Trading Volume Hits $70,970.00 - Redmond Register",
    //         description:
    //           "PIBBLE (CURRENCY:PIB) traded down 5.7% against the dollar during the twenty-four hour period ending at 17:00 PM Eastern on March 7th. One PIBBLE token can currently be bought for approximately $0.0001 or 0.00000001 BTC on exchanges. During the last week, PIBB…",
    //         url:
    //           "https://redmondregister.com/2020/03/07/pibble-pib-24-hour-trading-volume-hits-70970-00.html",
    //         urlToImage: "wp-content/themes/newsalambre/images/image-pending.gif",
    //         publishedAt: "2020-03-07T22:48:24Z",
    //         content:
    //           "PIBBLE (CURRENCY:PIB) traded down 5.7% against the dollar during the twenty-four hour period ending at 17:00 PM Eastern on March 7th. One PIBBLE token can currently be bought for approximately $0.0001 or 0.00000001 BTC on exchanges. During the last week, PIBB… [+2323 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Cointelegraph.com"
    //         },
    //         author: "Cointelegraph By Tiago Vidal",
    //         title:
    //           "Hash Rate and Bitcoin Price During Mining Events: Are They Related?",
    //         description:
    //           "The correlation between Bitcoin’s hash rate and price action provide useful insight into the upcoming 2020 halving event",
    //         url:
    //           "https://cointelegraph.com/news/hash-rate-and-bitcoin-price-during-mining-events-are-they-related",
    //         urlToImage:
    //           "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85MWIwZDViNmRhMTkyOWY4MWQyZTM1N2VhODVhNzUyMy5qcGc=.jpg",
    //         publishedAt: "2020-03-07T22:29:00Z",
    //         content:
    //           "On Saturday Bitcoin (BTC) price dropped below $9,000 again, increasing the uncertainty surrounding future price estimates and reminding investors that the Coronavirus continues to impact markets across the world.\r\nCryptocurrency market daily performance. Sour… [+5888 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Cointelegraph.com"
    //         },
    //         author: "Cointelegraph By Benjamin Pirus",
    //         title: "Cryptocurrency News From Japan: March 1-7 in Review",
    //         description:
    //           "This week’s news from Japan includes a blockchain proposal from the Federation of Economic Affairs, Rakuten Wallet margin account registrations and more",
    //         url:
    //           "https://cointelegraph.com/news/cryptocurrency-news-from-japan-march-1-7-in-review",
    //         urlToImage:
    //           "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85MTE0ZTFmZmViYjMxZWJhZjM5MTNmNDI4NjQ0ZmQ1OS5qcGc=.jpg",
    //         publishedAt: "2020-03-07T22:21:00Z",
    //         content:
    //           "This week’s headlines from Japan include crypto exchange Zaif reopening account registrations, government agencies meeting on crypto, the Federation of Economic Affairs submitting a national Blockchain proposal, Coincheck adding Qtum, and Rakuten Wallet openi… [+2389 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Newsbtc.com"
    //         },
    //         author: "Cole Petersen",
    //         title: "This Crypto is About to Explode if It Reclaims One Key Level",
    //         description:
    //           "Throughout the course of the crypto market’s intense 2020 uptrend, Tezos has been one of the best performing cryptocurrencies, posting an insane rally that recently allowed it to set fresh year-to-date highs. This intense rally has been able to extend further…",
    //         url:
    //           "https://www.newsbtc.com/2020/03/07/this-crypto-is-about-to-explode-if-it-reclaims-one-key-level/",
    //         urlToImage:
    //           "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_1550259818-1200x780.jpg",
    //         publishedAt: "2020-03-07T22:00:36Z",
    //         content:
    //           "Throughout the course of the crypto markets intense 2020 uptrend, Tezos has been one of the best performing cryptocurrencies, posting an insane rally that recently allowed it to set fresh year-to-date highs.\r\nThis intense rally has been able to extend further… [+2668 chars]"
    //       },
    //       {
    //         source: {
    //           id: null,
    //           name: "Activistpost.com"
    //         },
    //         author: "Aaron",
    //         title:
    //           "Post-Coronavirus Future? Injectable Biosensors, A.I. Virus Detection, Robots and a Cashless Society",
    //         description:
    //           "By Aaron Kesel As a result of the coronavirus, we are witnessing a push towards injectable sensors for virus detection, Orwellian surveillance, A.I. and robots,... Post-Coronavirus Future? Injectable Biosensors, A.I. Virus Detection, Robots and a Cashless Soc…",
    //         url:
    //           "https://www.activistpost.com/2020/03/post-coronavirus-future-injectable-biosensors-a-i-virus-detection-robots-and-a-cashless-society.html",
    //         urlToImage:
    //           "https://www.activistpost.com/wp-content/uploads/2020/03/virus-ai-pix-1024x609-1.jpg",
    //         publishedAt: "2020-03-07T21:38:25Z",
    //         content:
    //           "By Aaron Kesel\r\nAs a result of the coronavirus, we are witnessing a push towards injectable sensors for virus detection, Orwellian surveillance, A.I. and robots, as well as a call to quarantine U.S. fiat money coming out of China due to its potential to sprea… [+4245 chars]"
    //       }
    //     ]
    //   };
      
      
    //   function getAllNames() {
    //     for(var i=0;i<news.articles.length; i++){
    //       console.log(news.articles[i].source.name)
    //     }
    //   }
      
    //   getAllNames();