const db = require("../models");
const Hedaotao = db.hedaotao;
const Op = db.Sequelize.Op;
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");
const { bacdaotao } = require("../models");

exports.danhsach_hedaotao = (req, res) => {
    Hedaotao.findAll().then((ds_hedaotao) => {
    // res.json(ds_khoa);
    res.render("./hedaotao.ejs", { DS_hedaotao: ds_hedaotao });
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

exports.them_hedaotao = (req, res) => {
  Hedaotao.create({
    IDhedaotao: req.body.IDhedaotao,
    tenhedaotao: req.body.tenhedaotao,
  }).then(() => {
    res.redirect("../hedaotao");
  });
};

exports.capnhat_hedaotao = async (req, res) => {
  await Hedaotao.update(
    {
        IDhedaotao: req.body.IDhedaotao,
        tenhedaotao: req.body.tenhedaotao,
    },
    {
      where: {
        IDhedaotao: req.params.IDhedaotao,
      },
    }
  )
    .then(() => {
      res.redirect("../../../quanly/hedaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.xoa_hedaotao = async (req, res) => {
  await Hedaotao.destroy({
    where: {
        IDhedaotao: req.params.IDhedaotao,
    },
  })
    .then(() => {
      res.redirect("../../../quanly/hedaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
