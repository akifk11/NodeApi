const login = async (req, res) => {
  console.log(req.body);
};
const register = async (req, res) => {
  console.log(req.body);

  return res.json(req.body);
};

module.exports = {
  login,
  register,
};
