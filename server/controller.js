module.exports = {
    getHouses(req, res) {
        
        let db = req.app.get('db');

        db.get_houses().then( db => {
            res.status(200).send(db)
        })
    },

    postHouse(req, res) {

        let db = req.app.get('db');

        const {name, address, city, state, zip, img, mortgage, rent} = req.body;

        db.post_house(name, address, city, state, zip, img, mortgage, rent).then( db => {
            res.sendStatus(200);
        })
    },

    deleteHouse(req, res) {

        let db = req.app.get('db');

        const {id} = req.params;

        db.delete_house(id).then(db => {
            res.sendStatus(200);
        }).catch(() => console.log('error'))
    }
}