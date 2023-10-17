const User=require('../model/data');

exports.postAddData = async(req,res,next) => {
    try{
        const name=req.body.name;
        const email=req.body.email;
        const phone= req.body.phone;
        if(!phone){
            throw new Error('Phone number is mandatory');
        }
        const obj={name,email,phone};
        const datas= await User.create(obj);
        res.status(201).json({datas:datas});
    }
    catch(err){
        console.log('error from adding data from controller');
        console.log(err);
        res.status(500).json({ error: err });
    }
}

exports.postDeleteData = async(req,res,next) =>{
    try{
    const id=req.params.id;
    console.log(id);
    const data= await User.findByPk(id);
    res.send({data:data.destroy()})
    }
    catch(err){
        console.log('error in deletion of data in controller');
        console.log(err);
        res.status(500).json({ error: err });
    }
}
exports.getAllData = async(req,res,next) => {
    try{
        const datas = await User.findAll();
        res.status(201).json({datas:datas});
    }
    catch(err){
        console.log('error while getting all data in controller');
        console.log(err);
        res.status(500).json({ error: err });
    }
}