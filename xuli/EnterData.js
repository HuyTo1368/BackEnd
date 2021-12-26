const db = require("./index");


function getVillageId  (data)  {
  const query = `SELECT village_id FROM diachi WHERE (village = "${data.village}") AND (town = "${data.town}") AND (province = "${data.province}")`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};


exports.setEnterData = async (data) => {
  const hometown =
    data.hometown.village +
    ", " +
    data.hometown.town +
    ", " +
    data.hometown.province;
  const address =
    data.address.village +
    ", " +
    data.address.town +
    ", " +
    data.address.province;
  const village_id = await getVillageId(data.address);
  const query = `INSERT INTO resume_btl (CCCD, fullname, datebirth, gender, hometown, address, religion, job, village_id) VALUES ('${data.CCCD}', '${data.fullName}', '${data.datebirth}', '${data.gender}', '${hometown}', '${address}', '${data.region}', '${data.job}', '${village_id[0].village_id}');`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

exports.getPer = async (user) => {
  const query = `SELECT u1.per_declare AS p, u2.per_declare as t,u3.per_declare AS v
  FROM user_btl u1
  JOIN user_btl u2 on u1.user = u2.parent_user
  JOIN user_btl u3 on u2.user = u3.parent_user
  WHERE u3.user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

exports.getPerParent = (user) => {
  const query = `SELECT u1.per_declare AS per
  FROM user_btl u1
  JOIN user_btl u2 on u1.user = u2.parent_user
  WHERE u2.user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

exports.getParent = (user) => {
  const query = `SELECT parent_user FROM user_btl WHERE user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
exports.getPermiss = (user) => {
  const query = `SELECT per_declare AS per from user_btl
  WHERE user = '${user}'`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
