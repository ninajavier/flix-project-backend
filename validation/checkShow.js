const checkRequest = (req, res, next) => {
    if (req.body &&
        req.body.title &&
        req.body.year &&
        req.body.tv_rating &&
        req.body.num_episodes && 
        req.body.num_seasons && 
        req.body.actors && 
        req.body.star_rating && 
        req.body.genre && 
        typeof req.body.is_favorite === "boolean"){
            next();
        }else{
            res.status(400).json({error:"body is missing info"})
        }
} 

const checkId = (req, res, next) => {
    if(req.params.id){
        next();
    }else{
        res.status(400).json({error:"id not found"})
    }
}

module.exports = { checkRequest, checkId};