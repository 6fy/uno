var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
    created_by: Object,
    code: String,
    topOfPile: {
        type: String,
        default: '0'
    },
    type: {
        type: String,
        default: 'unrated'
    },
    players: {
        type: Array,
        default: {}
    },
    status: {
        type: String,
        default: 'pending'
    },
    chat_messages: {
        type: Object,
        default: {}
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'games'
});

module.exports = mongoose.model('Game', Game)