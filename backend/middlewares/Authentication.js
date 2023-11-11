const jwt = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]; 
    if(!token){
        res.send({msg : "plz login first"})
    }
    else{
    
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(err){
                res.send({msg:"login first"});
                }
                else{
                    const {userId} = decoded;
                    req.userId = userId;
                    next();
                }
          });

    }
    
}

module.exports = {
    authentication
}