const mongoose=require('mongoose')

const WatchSchema=mongoose.Schema({
    title:String,
    description:String,
    price: String,
    image : String
});
const Watchmodule=mongoose.model('Watch',WatchSchema)

const watch =new Watchmodule ;


module.exports (watch)
