tutorialSchema.plugin(mongoosePaginate);

//retrieve all tutorials with pagination
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };


exports.findAllByPage = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Tutorial.paginate(condition, { limit, offset })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        tutorials: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred whilr retrieving tutorials",
      });
    });
};

exports.findAllPublishedByPage = (req, res) => {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    Tutorial.paginate({ published: true }, { offset, limit })
      .then((data) => {
        res.send({
          totalItems: data.totalDocs,
          tutorials: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "some error occured while retrieving tutorials.",
        });
      });
  };
  