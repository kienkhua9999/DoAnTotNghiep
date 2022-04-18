const { authJwt } = require("../middleware");
const controller = require("../controllers/bacdaotao.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/bacdaotao", controller.danhsach_bacdaotao);
  app.post("/quanly/bacdaotao/them_bacdaotao", controller.them_bacdaotao);
  app.post("/quanly/bacdaotao/sua_bacdaotao/:IDbacdaotao", controller.capnhat_bacdaotao);
  app.get("/quanly/bacdaotao/xoa_bacdaotao/:IDbacdaotao", controller.xoa_bacdaotao);
 
};