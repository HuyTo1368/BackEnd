const db = require("./index");

async function setEnterData(data) {
  const hometown =
    data.hometown.province +
    ", " +
    data.hometown.town +
    ", " +
    data.hometown.village;
  const address =
    data.address.province +
    ", " +
    data.address.town +
    ", " +
    data.address.village;
  const village_id = await getVillageId(data.hometown);
  const query = `INSERT INTO resume_btl (CCCD, fullname, datebirth, gender, hometown, address, religion, job, village_id) VALUES ('${data.CCCD}', '${data.fullName}', '${data.datebirth}', '${data.gender}', '${hometown}', '${address}', '${data.region}', '${data.job}', '${village_id[0].village_id}');`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
function getVillageId(data) {
  const query = `SELECT village_id FROM diachi WHERE (village = "${data.village}") AND (town = "${data.town}") AND (province = "${data.province}")`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}
module.exports = getVillageId;
module.exports = setEnterData;
