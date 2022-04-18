const db = require("../models");
const Khoa = db.khoa;
const Op = db.Sequelize.Op;
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");

exports.danhsach_khoa = (req, res) => {
  Khoa.findAll().then((ds_khoa) => {
    // res.json(ds_khoa);
    res.render("./khoa.ejs", { DS_khoa: ds_khoa });
  });
};

exports.chitiet_khoa = (req, res) => {
  Khoa.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((ct_khoa) => {
      res.json(ct_khoa);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.them_khoa = (req, res) => {
  Khoa.create({
    IDkhoa: req.body.IDkhoa,
    tenkhoa: req.body.tenkhoa,
    truongkhoa: req.body.truongkhoa,
  }).then(() => {
    res.redirect("../khoa");
  });
};

exports.capnhat_khoa = async (req, res) => {
  await Khoa.update(
    { IDkhoa: req.body.IDkhoa,
        tenkhoa: req.body.tenkhoa,
        truongkhoa: req.body.truongkhoa
    },
    {
      where: {
        IDkhoa: req.params.IDkhoa,
      },
    }
  )
    .then(() => {
      res.redirect("../../../quanly/khoa");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.xoa_khoa = async (req, res) => {
  await Khoa.destroy({
    where: {
        IDkhoa: req.params.IDkhoa,
    },
  })
    .then(() => {
      res.redirect("../../../quanly/khoa");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
