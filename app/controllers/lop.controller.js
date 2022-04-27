const db = require("../models");
var pool_db = require("../config/crdb.config").pool_db;
const config = require("../config/auth.config");
const Lop = db.lop;
const Op = db.Sequelize.Op;

exports.danhsach_lop = (req, res) => {
    pool_db.connect(function (err, client, done) {
        if (err) {
            return console.error('error', err);
        }
        client.query(`SELECT * FROM lops inner join khoas on lops."IDkhoa" = khoas."IDkhoa" inner join hedaotaos on lops."IDhedaotao" = hedaotaos."IDhedaotao" inner join bacdaotaos on lops."IDbacdaotao" = bacdaotaos."IDbacdaotao" inner join khoadaotaos on lops."IDkhoadaotao" = khoadaotaos."IDkhoadaotao" inner join diadiemhocs on lops."IDdaidiemhoc" = diadiemhocs."IDdiadiemhoc" `, function (err, result) {
            done();

            if (err) {
                res.end();
                return console.error('error running query', err);
            }else{
                var ds_lop=result;
                pool_db.connect(function (err, client, done) {
                    if (err) {
                        return console.error('error', err);
                    }
                    client.query(`SELECT * FROM khoas`, function (err, result) {
                        done();
            
                        if (err) {
                            res.end();
                            return console.error('error running query', err);
                        }
                        else {
                            var khoa = result;
                            pool_db.connect(function (err, client, done) {
                                if (err) {
                                    return console.error('error', err);
                                }
                                client.query("SELECT * FROM bacdaotaos", function (err, result) {
                                    done();
            
                                    if (err) {
                                        res.end();
                                        return console.error('error running query', err);
                                    }else{
                                        var bacdaotao = result;
                                        pool_db.connect(function (err, client, done) {
                                            if (err) {
                                                return console.error('error', err);
                                            }
                                            client.query("SELECT * FROM hedaotaos ", function (err, result) {
                                                done();
                                    
                                                if (err) {
                                                    res.end();
                                                    return console.error('error running query', err);
                                                }
                                                else {
                                                    var hedaotao = result;
                                                    pool_db.connect(function (err, client, done) {
                                                        if (err) {
                                                            return console.error('error', err);
                                                        }
                                                        client.query("SELECT * FROM diadiemhocs", function (err, result) {
                                                            done();
                                    
                                                            if (err) {
                                                                res.end();
                                                                return console.error('error running query', err);
                                                            }else{
                                                                var diadiemhoc= result;
                                                                pool_db.connect(function (err, client, done) {
                                                                    if (err) {
                                                                        return console.error('error', err);
                                                                    }
                                                                    client.query("SELECT * FROM khoadaotaos", function (err, result) {
                                                                        done();
                                                
                                                                        if (err) {
                                                                            res.end();
                                                                            return console.error('error running query', err);
                                                                        }else{
                                                                            
                                                                            pool_db.connect(function (err, client, done) {
                                                                                if (err) {
                                                                                    return console.error('error', err);
                                                                                }
                                                                                client.query("SELECT * FROM khoadaotaos", function (err, result) {
                                                                                    done();
                                                            
                                                                                    if (err) {
                                                                                        res.end();
                                                                                        return console.error('error running query', err);
                                                                                    }else{
                                                                                        var khoadaotao = result;
                                                                                        pool_db.connect(function (err, client, done) {
                                                                                            if (err) {
                                                                                                return console.error('error', err);
                                                                                            }
                                                                                            client.query(`SELECT * FROM lops inner join khoas on lops."IDkhoa" = khoas."IDkhoa" inner join hedaotaos on lops."IDhedaotao" = hedaotaos."IDhedaotao" inner join bacdaotaos on lops."IDbacdaotao" = bacdaotaos."IDbacdaotao" inner join khoadaotaos on lops."IDkhoadaotao" = khoadaotaos."IDkhoadaotao" inner join diadiemhocs on lops."IDdaidiemhoc" = diadiemhocs."IDdiadiemhoc" `, function (err, result) {
                                                                                                done();
                                                                        
                                                                                                if (err) {
                                                                                                    res.end();
                                                                                                    return console.error('error running query', err);
                                                                                                }else{
                                                                                                    var chon_lop=result;
                                                                                                    pool_db.connect(function (err, client, done) {
                                                                                                        if (err) {
                                                                                                            return console.error('error', err);
                                                                                                        }
                                                                                                        client.query(`SELECT * FROM khoas where "IDkhoa" != ${chon_lop.rows[0].IDkhoa} `, function (err, result) {
                                                                                                            done();
                                                                        
                                                                                                            if (err) {
                                                                                                                res.end();
                                                                                                                return console.error('error running query', err);
                                                                                                            }

                                                                                                            res.render("./lop.ejs", {chon_lop:chon_lop.rows[0],chon_khoa:result, bacdaotao: bacdaotao, ds_lop: ds_lop,khoa:khoa,hedaotao:hedaotao,diadiemhoc:diadiemhoc,khoadaotao:khoadaotao });
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

exports.them_lop = (req, res) => {
    Lop.create({
        IDlop:req.body.IDlop,
        tenlop:req.body.tenlop,
        sosinhvien:req.body.sosinhvien,
        IDkhoa:req.body.IDkhoa,
        IDhedaotao:req.body.IDhedaotao,
        IDbacdaotao:req.body.IDbacdaotao,
        IDdaidiemhoc:req.body.IDdaidiemhoc,
        IDkhoadaotao:req.body.IDkhoadaotao
    }).then(() => {
      res.redirect("../lop");
    });
  };
  
  exports.capnhat_lop = async (req, res) => {
    await Lop.update(
      { 
        IDlop:req.body.IDlop,
        tenlop:req.body.tenlop,
        sosinhvien:req.body.sosinhvien,
        IDkhoa:req.body.IDkhoa,
        IDhedaotao:req.body.IDhedaotao,
        IDbacdaotao:req.body.IDbacdaotao,
        IDdaidiemhoc:req.body.IDdaidiemhoc,
        IDkhoadaotao:req.body.IDkhoadaotao
      },
      {
        where: {
          IDlop: req.params.IDlop,
        },
      }
    )
      .then(() => {
        res.redirect("../../../quanly/lop");
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.xoa_lop = async (req, res) => {
    await Lop.destroy({
      where: {
          IDlop: req.params.IDlop,
      },
    })
      .then(() => {
        res.redirect("../../../quanly/lop");
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
