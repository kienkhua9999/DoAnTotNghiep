const { authJwt } = require("../middleware");
const controller = require("../controllers/sinhvien.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/sinhvien", controller.danhsach_sinhvien);
  app.post("/quanly/sinhvien/them_sinhvien", controller.them_sinhvien);
  app.post("/quanly/sinhvien/sua_sinhvien/:IDsinhvien", controller.capnhat_sinhvien);
  app.get("/quanly/sinhvien/xoa_sinhvien/:IDsinhvien", controller.xoa_sinhvien);
 
};