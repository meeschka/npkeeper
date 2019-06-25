var mongoose = require("mongoose");
var NpcSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    image: String,
    city: String,
    job: String,
    race: String,
    gender: String,
    description: String,
    //relatedNpcs: {},
    interactions: String,
    plotNotes: String,
    // author: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     username: String
    // }
});


module.exports = mongoose.model("Npc", NpcSchema);
