const db = require("./index");

exports.getMember = () => {
  const query = `SELECT * FROM resume_btl WHERE id = 1`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
function addMember(data) {}
exports.getAllUser = (role, user) => {
  const query = `SELECT user,role,time_open,time_close,per_declare, parent_user,name_unit FROM user_btl WHERE role = '${role}' AND parent_user ='${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
exports.getUser = (user) => {
  const query = `SELECT * FROM user_btl WHERE user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
exports.setUser = (data) => {
  const query = `INSERT INTO user_btl(user, PASSWORD, name_unit,role, parent_user) VALUES('${data.user}', '${data.password}', '${data.name}','${data.role}', '${data.parent_user}')`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
exports.setTimeOpen = (data, user) => {
  const query = `UPDATE user_btl 
        SET time_open = '${data}'
        WHERE user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
exports.setTimeClose = (data, user) => {
    const query = `UPDATE user_btl 
          SET time_close = '${data}'
          WHERE user = '${user}'`;
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  };
  exports.setPer = (data, user) => {
    const query = `UPDATE user_btl 
          SET per_declare = '${data}'
          WHERE user = '${user}'`;
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  };
