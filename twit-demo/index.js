console.log("Starting node.js");

var Twit   = require('twit');
var config = require('./config')

var T = new Twit(config);

//
//  tweet 'hello world!'
//
var params = { 
	status: 'hello world! I\'m trying Node.js with Twiter api' 
};
// T.post('statuses/update', params , showData);


//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var params = { 
	q: 'bolsonaro bozo', 
    count: 100 
};

T.get('search/tweets',params, showData);

function showData(err, data, response) {
  var tweets = data.statuses;
  for (var i = tweets.length - 1; i >= 0; i--) {
  	console.log('Tweet: ' + tweets[i].text);
  }

  console.log('Total: ' + tweets.length);
}