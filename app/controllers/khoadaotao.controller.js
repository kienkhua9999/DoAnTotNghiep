const db = require("../models");
const Khoadaotao = db.khoadaotao;
const Op = db.Sequelize.Op;
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");
const { bacdaotao } = require("../models");

exports.danhsach_khoadaotao = (req, res) => {
    Khoadaotao.findAll().then((ds_khoadaotao) => {
    // res.json(ds_khoa);
    res.render("./khoadaotao.ejs", { DS_khoadaotao: ds_khoadaotao });
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

exports.them_khoadaotao = (req, res) => {
  Khoadaotao.create({
    IDkhoadaotao: req.body.IDkhoadaotao,
    niemkhoa: req.body.niemkhoa,
    ghichu: req.body.ghichu,
  }).then(() => {
    res.redirect("../khoadaotao");
  });
};

exports.capnhat_khoadaotao = async (req, res) => {
  await Khoadaotao.update(
    {
        IDkhoadaotao: req.body.IDkhoadaotao,
        niemkhoa: req.body.niemkhoa,
        ghichu: req.body.ghichu,
    },
    {
      where: {
        IDkhoadaotao: req.params.IDkhoadaotao,
      },
    }
  )
    .then(() => {
      res.redirect("../../../quanly/khoadaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.xoa_khoadaotao = async (req, res) => {
  await Khoadaotao.destroy({
    where: {
        IDkhoadaotao: req.params.IDkhoadaotao,
    },
  })
    .then(() => {
      res.redirect("../../../quanly/khoadaotao");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
