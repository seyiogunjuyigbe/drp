const axios = require('axios').default;
const User = require('../models/user');
const env = require('../config/constants')
exports.getLiveVideos = (req,res)=>{
    axios.get('https://www.googleapis.com/youtube/v3/search',
    {
        params:{
            part: 'snippet',
            eventType: 'live',
            channelId: env.YOUTUBE_CHANNEL_ID,
            type: 'video',
            key: env.YOUTUBE_TOKEN
        }
    })
    .then((data)=>{
        let vids = [];
        if(data){
            axios.get('https://www.googleapis.com/youtube/v3/search',
            {
                params:{
                    part: 'snippet',
                    channelId: env.YOUTUBE_CHANNEL_ID,
                    type: 'video',
                    maxResults: 20,
                    key: env.YOUTUBE_TOKEN,
                    order: 'date'
                }
            })
            .then((resp)=>{
                if(resp){
                    resp.data.items.forEach((vid)=>{
                        vids.push(vid.id.videoId)
                    })
                //    return res.status(200).send(resp.data)

                    return res.status(200).render('live', {items: data.data.items, vids:resp.data.items})
                }
          })          
        }
  })
    .catch((error)=>{
       return res.status(500).render('404',{error: 'Please check your internet connection'})
    })
}
