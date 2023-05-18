const connection = require('../connect');
const fetchUsers = ((req, res) => {
    
    const data = connection.query('SELECT * FROM coredb', (err, result) => {
        if (err) throw err;
        res.send(result.find((user) => user.ID === 64));
        console.log(result.find((user) => user.ID === 64));
        
    });
})

module.exports = {fetchUsers}; 