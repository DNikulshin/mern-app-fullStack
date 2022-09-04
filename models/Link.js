const { Schema, model } = require('mongoose')

const schema = new Schema({
    from: { type: String, required: true },
    to: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
    links: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },

})

module.exports = model('Link', schema)
