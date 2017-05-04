var express = require('express');
var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');
var d = new Date();
var n = d.getTime();


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));





app.get('/', function(req, res){
  res.render('index');
})

app.get('/businessinsider', function(req, res){
        var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();



            time = new Date(tweet.time * 1000);


            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/techreview', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/newscientist', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/sciencealert', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>30 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/iflscience', function(req, res){

  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>20 && ((n/1000) - tweet.time)<1000000){

              var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/gizmodo', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/techcrunch', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/thenextweb', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/wired', function(req, res){
  var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });
});

app.get('/engadget', function(req, res){
        var thisAcct = url.parse(req.url);
        var account = thisAcct.path;
        var profile = account.slice(1, account.length);

        streamOfTweets = new TwitterPosts({
          username: profile,
          retweets: false
        });
       
        streamOfTweets.on('readable', function() {
          var time, tweet;
          tweet = streamOfTweets.read();


            time = new Date(tweet.time * 1000);

            if(tweet.retweet>50 && ((n/1000) - tweet.time)<1000000){

            var date = new Date(tweet.time * 1000)


              res.write(tweet.username +' '+date+' '+ tweet.retweet+' '+tweet.text+'\n')
            }
            
          });

});

var server = app.listen(process.env.PORT  || 8080, function() {
	console.log('Express server listening on port ' + server.address().port);
});
