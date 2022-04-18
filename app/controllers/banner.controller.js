const db = require("../models");
const Banner = db.banner;
const Op = db.Sequelize.Op;
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");



exports.danhsach_banner = (req, res) => {
  Banner.findAll().then((ds_banner) => {
    res.render("./banner.ejs", { DS_banner: ds_banner });
  });
};

// exports.newbyid = (req, res) => {
//   Producer.findOne(
//     {
//       where :{
//           id:req.params.id
//       }
//     }
//   ).then((news) => {
//     res.json(news);
//   });
// }

exports.them_banner = (req, res) => {
  Banner.create({
    IDbanner: req.body.IDbanner,
    bannername: req.body.bannername,
    bannerlink: req.body.bannerlink,
    bannerimg: req.body.bannerimg,
  })
    .then(() => {
      res.redirect("../banner");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.capnhat_banner = async (req, res) => {
  await Banner.update(
    {
      IDbanner: req.body.IDbanner,
      bannername: req.body.bannername,
        bannerlink: req.body.bannerlink,
        bannerimg: req.body.bannerimg,  
    },
    {
      where: {
        IDbanner: req.params.IDbanner,
      },
    }
  )
    .then(() => {
      res.redirect("../../../quanly/banner");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//delete
exports.xoa_banner = async (req, res) => {
  await Banner.destroy({
    where: {
      IDbanner: req.params.IDbanner,
    },
  })
    .then(() => {
      res.redirect("../../../quanly/banner");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
