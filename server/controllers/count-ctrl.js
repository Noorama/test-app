const Counts = require('../models/count-model')


createCount = async (req, res) => {
    const headerr = req.connection.remoteAddress
/*
    (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress
*/

    if (!headerr) {
        return res.status(400).json({
            success: false,
            error: 'IP is empty',
        })
    }

    await Counts.findOne({ IpInfo: headerr }, (err, comment) => {
        if (comment) {
            return res
                .status(405)
                .json({ success: false, error: `The Ip present on the list. Counter wouldn't work.` })
        }
    })
   const count = new Counts({
           IpInfo: headerr
       })

    count
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            IpInfo: count.IpInfo,
            message: "Ip Successfully added",
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
