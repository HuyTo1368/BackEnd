const db = require("./index")

    exports.getMember = () =>{
        const query = `SELECT * FROM resume_btl WHERE id = 1`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) return reject(err);
                return resolve(results);
            })
        })
    }
    function addMember(data){
        
    }
    exports.getAllUser =(role,user) =>{
        const query = `SELECT * FROM user_btl WHERE role = '${role}' AND parent_user ='${user}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) return reject(err);
                return resolve(results);
            })
        })
    }
