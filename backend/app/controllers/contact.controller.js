exports.create = (req, res) => {
   res.send({ message: "create handler"});
};
exports.findAll = (req, res) => {
   res.send({ message: "findAll handler"});
};
exports.findOne = (req, res) => {
   res.send({ message: "finOne handler"});
};
exports.update = (req, res) => {
   res.send({ message: "update handler"});
};
exports.delete = (req, res) => {
   res.send({ message: "delete handler"});
};
exports.deleteAll = (_req, res) => {
   res.send({ message: "deleteAll handler"});
};
exports.findAllFavorite = (_req, res) => {
   res.send({ message: "findAllFavorite handler"});
};


