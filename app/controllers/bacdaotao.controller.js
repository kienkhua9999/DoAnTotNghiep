const db = require("../models");
const Bacdaotao = db.bacdaotao;
const Op = db.Sequelize.Op;
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");
const { bacdaotao } = require("../models");

exports.danhsach_bacdaotao = (req, res) => {
  Bacdaotao.findAll().then((ds_bacdaotao) => {
    // res.json(ds_khoa);
    res.render("./bacdaotao.ejs", { DS_bacdaotao: ds_bacdaotao });
  });
};

// exports.chitiet_khoa = (req, res) => {
//   Khoa.findOne({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((ct_khoa) => {
//       res.json(ct_khoa);
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

exports.them_bacdaotao = (req, res) => {
  Bacdaotao.create({
    IDbacdaotao: req.body.IDbacdaotao,
    tenbacdaotao: req.body.tenbacdaotao,
  }).then(() => {
    res.redirect("../bacdaotao");
  });
};

exports.capnhat_bacdaotao = async (req, res) => {
  await Bacdaotao.update(
    {
    IDbacdaotao: req.body.IDbacdaotao,
      tenbacdaotao: req.body.tenbacdaotao,
    },
    {
      where: {
        IDbacdaotao: req.params.IDbacdaotao,
      },
    }
  )
    .then(() => {
      res.redirect("../../../quanly/bacdaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.xoa_bacdaotao = async (req, res) => {
  await Bacdaotao.destroy({
    where: {
        IDbacdaotao: req.params.IDbacdaotao,
    },
  })
    .then(() => {
      res.redirect("../../../quanly/bacdaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
