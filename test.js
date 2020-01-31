const config=require('./config')
const twit=require('twit')
const T=new twit(config.twitterConfig)
const e=require('./error')

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
//T.get('statuses/user_timeline', { screen_name: 'FUD_Buddy', include_rts: false, count: 10 }, function(err, data, response) {
//  console.log(data)
//})



function findTweetByUser(q,username,count) {

    T.get('search/tweets', {q: '${q} from:${username} AND -filter:retweets', count: $count }, function(err, data, response) {
	if(!data.statuses.length)
	    throw new e.TwitterSearchError('No Tweets found using: ${q}')
	
	return data
    })
}


q='test'

T.get('search/tweets', { q: 'asdfa from:FUD_Buddy AND -filter:retweets', include_rts: false, count: 3 }, function(err, data, response) {
    console.log(response)
    if(!data.statuses.length)
	throw new e.TwitterSearchError('No Tweets found using: ${q}')
    
//    console.log(data.statuses[0].text)
})
