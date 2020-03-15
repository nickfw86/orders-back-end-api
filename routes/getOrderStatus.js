const db = require('../database.js');

const getOrderStatus = (req, res) => {
let id = req.params.id;
console.log(id);
db.connect();
db.query(
"SELECT `Order_ID`, `Order_Status`, `Date_Created` FROM orders WHERE `Order_ID` = ?" ,
[id],
(err, data) => {
    if (err) {
        console.log(err);
    } else {
        if (data.length < 1) {
            res.send({
                message: 'Order does not exist'
            })
        } else {
            res.send({
                data
            })
        }
        console.log(data);
    }
})
}

module.exports = getOrderStatus;
