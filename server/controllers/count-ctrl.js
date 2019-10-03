const Counts = require('../models/count-model')


createCount = async (req, res) => {
    const count = Counts((req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress)

    if (!count) {
        return res.status(400).json({
            success: false,
            error: 'IP is empty',
        })
    }

    await Counts.findOne({IpInfo: count}, (err) => {
        if (!err){
            return res
        }
    })

    await count
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            IpInfo: count,
            message: 'IP successfully added!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Unable to add IP info to DB!',
        })
    })
}

getCountSum = async (req, res) => {
    await Counts.find({}, (err, counts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!counts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Any IP not found` })
        }
        return res.status(200).json({ success: true, data: counts })
    }).catch(err => console.log(err))
}

module.exports = {
    createCount,
    getCountSum
}
