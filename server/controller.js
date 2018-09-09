module.exports = {
    getHouses: (req,res,next) => {
        const db = req.app.get('db');
        db.get_houses().then(Houses  => {
            res.status(200).send(Houses)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    addHouses : (req,res,next) => {
    let {name, address, city, state, zip} = req.body
    const db = req.app.get('db');
    db.add_house({name,address,city,state,zip}).then(Houses => {
        res.status(200).send(Houses)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
    },
    deleteHouse : (req,res,next) => {
        console.log(req.params)
        let {id} = req.params
        const db = req.app.get('db');
        db.delete_house({id}).then(Houses =>{
            res.status(200).send(Houses)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    }

}