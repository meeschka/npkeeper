var mongoose = require("mongoose");
var Npc = require("./models/npc");

var data = [
  {
    firstName: "Melva",
    lastName: "Ironfield",
    city: "Willowdale",
    job: "Farmer",
    race: "Dwarf",
    gender: "Female",
    description: "A cheerful 'holy warrior' fighting for Cervanus, this young farmer dreamed of being a hero.",
    interactions: "Adventured with party for several sessions before dying to lizardfolk",
    plotNotes: "Corrupted Anleh'el's home with a cursed pot, won the cheese tossing contest"

  },
  {
    firstName: "Mara",
    lastName: "Brightwood",
    city: "Fantasy Spain",
    job: "Cleric",
    race: "Human",
    gender: "Female",
    description: "A cheerful grave cleric determined to fight both evil and sadness",
    interactions: "Adventured with party for several sessions, culminating in killing a dragon",
    plotNotes: "Main character, did all the plot things"
  },
  {
    firstName: "Glenda",
    lastName: "Honeyseed",
    city: "Willowdale",
    job: "Gossip",
    race: "Human",
    gender: "Female",
    description: "The town gossip, and 5-time winner of best vegetable",
    interactions: "Session 9, she provided gossip about xyz",
    plotNotes: "5 years ago she couldnt grow anything and suddenly she wins every year. We suspect dark magic."
  }
]

function seedDB(){
   //Remove all campgrounds
   Npc.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed npcs!");
        data.forEach(function(seed){
            Npc.create(seed, function(err, npc){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an npc");
                    //create a comment
                }
            });
        });
    });
}

module.exports = seedDB;
