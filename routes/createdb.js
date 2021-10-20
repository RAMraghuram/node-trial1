exports.create = function (req, res) {
  nano.db.create(req.body.dbname, function (err) {
    if (err) {
      res.send("Error creating the Database");
      return;
    }
    res.send("Database created successfully");
  });
};
