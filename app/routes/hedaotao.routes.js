const { authJwt } = require("../middleware");
const controller = require("../controllers/hedaotao.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/hedaotao", controller.danhsach_hedaotao);
  app.post("/quanly/hedaotao/them_hedaotao", controller.them_hedaotao);
  app.post("/quanly/hedaotao/sua_hedaotao/:IDhedaotao", controller.capnhat_hedaotao);
  app.get("/quanly/hedaotao/xoa_hedaotao/:IDhedaotao", controller.xoa_hedaotao);
 
};