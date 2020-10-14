const Stream = require("../models/stream");
module.exports = {
    async goLiveWithWeb(req, res) {
        return res.status(200).render('broadcast', { user: req.user })
    },
    async joinBroadcast(req, res) {
        let livestream = await Stream.findOne({ isLive: true });
        return res.status(200).render('live-broadcast', { user: req.user, livestream })
    },
    async startNewStream(req, res) {
        try {
            let livestreams = await Stream.find({ isLive: true });
            livestreams.forEach(async stream => {
                stream.set({ isLive: false });
                await stream.save()
            })
            let newStream = await Stream.create({ ...req.body, startedAt: new Date(), isLive: true, })
            return res.status(200).json({ success: true, newStream })
        } catch (err) {
            return res.status(500).json({ success: false, err })
        }
    },
    async stopLiveStream(req, res) {
        try {
            let livestream = await Stream.findById(req.params.streamId);
            if (!livestream) return res.status(404).json({ success: true, err: "Invalid stream ID" });
            livestream.endedAt = new Date()
            livestream.isLive = false;
            await livestream.save()
            return res.status(200).json({ success: true, livestream })

        } catch (err) {
            return res.status(500).json({ success: false, err })

        }
    },
    async fetchCurrentStream(req, res) {
        try {
            let livestream = await Stream.findOne({ isLive: true });
            return res.status(200).json({ success: true, livestream })
        } catch (err) {
            return res.status(500).json({ success: false, err, livestream: null })

        }
    }
}