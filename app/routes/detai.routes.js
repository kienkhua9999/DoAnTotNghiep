const { authJwt } = require("../middleware");
const controller = require("../controllers/detai.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/detai", controller.danhsach_detai);
  app.post("/quanly/detai/them_detai", controller.them_detai);
  app.post("/quanly/detai/sua_detai/:IDdetai", controller.capnhat_detai);
  app.get("/quanly/detai/xoa_detai/:IDdetai", controller.xoa_detai);
 
};