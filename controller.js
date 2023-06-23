const {event} = require('./schema');

 
module.exports.insertfaculty = async(req,res)=>{
    const ft = new event({
        //fid:Number(req.body.fid),
        name:req.body.name,
        mail:req.body.mail,
        msg:req.body.msg,
        //event1:req.body.event1
    })
    const facult = await event.findOne({name:req.body.name});
    if(facult){
        return res.send({msg:"Name exist in the collection"});
    }
    const saved_ft = await ft.save();
    res.send(saved_ft);
}
module.exports.getallfaculty = async(req,res) => {
    const facult = await event.find({});
    if(facult.length!=0)
    {
        res.send(facult);
    }
    else{
        res.send({msg:"No Data"})
        res.send({msg:"Data received"})
    }   
 }

module.exports.getfaculty = async (req,res) => {
    const facult = await event.findOne({name:req.params.name}); //id:Number(req.params.id)
   if(facult)
        res.send(facult);
    else
        res.send({msg:"Name not found!"});
}
module.exports.updatefaculty = async (req,res) => {
    const facult = await event.findOneAndUpdate({name:req.params.name},{mail:req.body.mail},{msg:req.body.msg});
    if(facult)
        res.send("Changes Updated");
    else
        res.send("Name does not exists");
}

module.exports.deletefaculty = async (req,res) => {
    const facult = await event.findOneAndDelete({name:req.params.name});
    if(facult)
        res.send("deleted");
    else
        res.send("Does not exists");
}

