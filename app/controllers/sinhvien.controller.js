const db = require("../models");
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");
const Sinhvien = db.sinhvien;
const Op = db.Sequelize.Op;

exports.danhsach_sinhvien = (req, res) => {
    pool_db.connect(function (err, client, done) {
        if (err) {
            return console.error('error', err);
        }
        client.query(`SELECT * FROM sinhviens inner join lops on sinhviens."IDlop" = lops."IDlop" inner join detais on sinhviens."IDdetai" = detais."IDdetai"`, function (err, result) {
            done();

            if (err) {
                res.end();
                return console.error('error running query', err);
            }else{
                
                var ds_sinhvien=result;
                pool_db.connect(function (err, client, done) {
                    if (err) {
                        return console.error('error', err);
                    }
                    client.query(`SELECT * FROM lops`, function (err, result) {
                        done();
            
                        if (err) {
                            res.end();
                            return console.error('error running query', err);
                        }
                        else {
                            var lop=result;
                            pool_db.connect(function (err, client, done) {
                                if (err) {
                                    return console.error('error', err);
                                }
                                client.query(`SELECT * FROM detais`, function (err, result) {
                                    done();
                        
                                    if (err) {
                                        res.end();
                                        return console.error('error running query', err);
                                    }
                                    else {
                                        var detai=result;
                                        pool_db.connect(function (err, client, done) {
                                            if (err) {
                                                return console.error('error', err);
                                            }
                                            client.query(`SELECT * FROM sinhviens inner join lops on sinhviens."IDlop" = lops."IDlop" inner join detais on sinhviens."IDdetai" = detais."IDdetai"`, function (err, result) {
                                                done();
                                    
                                                if (err) {
                                                    res.end();
                                                    return console.error('error running query', err);
                                                }
                                                else {
                                                    var chon_sinhvien=result;
                                                    pool_db.connect(function (err, client, done) {
                                                        if (err) {
                                                            return console.error('error', err);
                                                        }
                                                        client.query(`SELECT * FROM lops where "IDlop" != ${chon_sinhvien.rows[0].IDlop} `, function (err, result) {
                                                            done();
                                                
                                                            if (err) {
                                                                res.end();
                                                                return console.error('error running query', err);
                                                            }
                                                            else {
                                                                var chon_lop=result;
                                                                pool_db.connect(function (err, client, done) {
                                                                    if (err) {
                                                                        return console.error('error', err);
                                                                    }
                                                                    client.query(`SELECT * FROM detais where "IDdetai" != ${chon_sinhvien.rows[0].IDdetai} `, function (err, result) {
                                                                        done();
                                                            
                                                                        if (err) {
                                                                            res.end();
                                                                            return console.error('error running query', err);
                                                                        }
                                                                        else {
                                                                            var chon_detai = result
                                                                            res.render("./sinhvien.ejs", {chon_sinhvien:chon_sinhvien.rows[0],chon_lop:chon_lop,chon_detai:chon_detai, lop:lop, ds_sinhvien: ds_sinhvien,detai:detai});
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            }
        });
    });
};

exports.them_sinhvien = (req, res) => {
    Sinhvien.create({
        IDsinhvien:req.body.IDsinhvien,
        tensinhvien:req.body.tensinhvien,
        gioitinh:req.body.gioitinh,
        email:req.body.email,
        namsinh:req.body.namsinh,
        quequan:req.body.quequan,
        sodienthoai:req.body.sodienthoai,
        diachi:req.body.diachi,
        hokhauthuongchu:req.body.hocvi,
        anhsinhvien:req.body.anhsinhvien,
        IDdetai:req.body.IDdetai,
        IDlop:req.body.IDlop
    }).then(() => {
      res.redirect("../sinhvien");
    });
  };
  
  exports.capnhat_sinhvien = async (req, res) => {
    await Sinhvien.update(
      { 
        IDsinhvien:req.body.IDsinhvien,
        tensinhvien:req.body.tensinhvien,
        gioitinh:req.body.gioitinh,
        email:req.body.email,
        namsinh:req.body.namsinh,
        quequan:req.body.quequan,
        sodienthoai:req.body.sodienthoai,
        diachi:req.body.diachi,
        hokhauthuongchu:req.body.hocvi,
        anhsinhvien:req.body.anhsinhvien,
        IDdetai:req.body.IDdetai,
        IDlop:req.body.IDlop
      },
      {
        where: {
            IDsinhvien: req.params.IDsinhvien,
        },
      }
    )
      .then(() => {
        res.redirect("../../../quanly/sinhvien");
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.xoa_sinhvien = async (req, res) => {
    await Sinhvien.destroy({
      where: {
          IDsinhvien: req.params.IDsinhvien,
      },
    })
      .then(() => {
        res.redirect("../../../quanly/sinhvien");
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
