module.exports.generateRandomCode = () => {
  var code = "";
  var characters = `${process.env.SECRET}`;
  var length = 6;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
};

module.exports.calculatePrice = (kids, isLate) => {
  if (isLate === true) {
    return 15 * kids;
  }

  return 35 * kids;
};

module.exports.getFormattedDate = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
