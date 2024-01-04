const bcrypt = require("bcryptjs");

//when user register
exports.hash = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.error(err.message);
  }
  return null;
};

exports.comparePasswords = async (password, hashedPass) => {
  try {
    const matchFound = await bcrypt.compare(password, hashedPass); //comparing the password we have in our db
    //  with the one the user logs in with
    return matchFound;
  } catch (err) {
    console.error(err.message);
  }
  return false;
};
