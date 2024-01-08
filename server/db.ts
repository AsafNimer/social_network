const pool = require("./db.config");

module.exports.addNewUser = (first: string, last: string, email: string, password: string) => {
    const query: string = `INSERT INTO users (first, last, email, password) VALUES ("1",  '$2', '$3', '$4')`;
    const param = [first, last, email, password];
    return pool.query(query, param);
};
