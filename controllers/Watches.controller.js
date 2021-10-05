const Watch = require ('../Models/Watch.mongoose.model')

import axios from 'axios'
import { watch } from 'fs'
this.state ={
    super(props);
    
}

    render () {

const data = axios.get(`https://watches-world.herokuapp.com/watches-list/`)

getData = constructor ((req, res) => {
res.send(data)
})

getFavWatch = constructor( (req, res) => {

})

creatFavWatch = constructor ((req, res) =>{

})

deleteFavWatch= constructor ((req, res) =>{
    id : req.params
    Watch.findByIdAndRemove(id.todoId, (err, item) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: res.data,
            id: item._id
        };
        return res.status(200).send(response);
        
})
updateFavWatch= constructor  ((req, res) => {
    findByIdAndUpdate(
        req.params.todoId,
        (err, item) => {
        
            if (err) return res.status(500).send(err);
            return res.send(item);
        }
    )
}
}
export default {getData, getFavWatch, creatFavWatch, deleteFavWatch, updateFavWatch}