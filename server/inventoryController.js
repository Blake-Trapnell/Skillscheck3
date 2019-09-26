module.exports = {
    getAllHomes:  (req,res) => {
        let db = req.app.get('db')
        db.get_all_houses().then(homes => res.status(200).send(homes))
        .catch(err => console.log(err))
    },
    deleteById: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const eradicate = await db.delete_by_id([id])
        res.status(200).send(eradicate).catch(err => console.log(err))
    },
    add: (req,res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {name, address, city, state, zip, img, mortgage, rent} = req.body
        db.add_house([name, address, city, state, zip, img, mortgage, rent])
        .then(results=> {
            res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
},
alterColumn: (req,res) => {
    const db = req.app.get('db')
    console.log(req.body)
    const {nameOfColumn, newColumn} = req.body
    db.alter_column_name({nameOfColumn, newColumn})
    .then(results=> {
        res.status(200).send(results)
    })
}
}