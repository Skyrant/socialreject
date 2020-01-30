const config=require('./config')
const twit=require('twit')
const T=new twit(config.twitterConfig)

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
//T.get('statuses/user_timeline', { screen_name: 'FUD_Buddy', include_rts: false, count: 10 }, function(err, data, response) {
//  console.log(data)
//})

T.get('search/tweets', { q: 'from:FUD_Buddy', include_rts: false, count: 3 }, function(err, data, response) {
    console.log(data.statuses[0].text)
})
