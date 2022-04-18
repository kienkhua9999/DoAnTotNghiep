const { authJwt } = require("../middleware");
const controller = require("../controllers/khoadaotao.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/khoadaotao", controller.danhsach_khoadaotao);
  app.post("/quanly/khoadaotao/them_khoadaotao", controller.them_khoadaotao);
  app.post("/quanly/khoadaotao/sua_khoadaotao/:IDkhoadaotao", controller.capnhat_khoadaotao);
  app.get("/quanly/khoadaotao/xoa_khoadaotao/:IDkhoadaotao", controller.xoa_khoadaotao);
 
};