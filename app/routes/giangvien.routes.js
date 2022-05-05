const { authJwt } = require("../middleware");
const controller = require("../controllers/giangvien.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/giangvien", controller.danhsach_giangvien);
  app.post("/quanly/giangvien/them_giangvien", controller.them_giangvien);
  app.post("/quanly/giangvien/sua_giangvien/:IDgiangvien", controller.capnhat_giangvien);
  app.get("/quanly/giangvien/xoa_giangvien/:IDgiangvien", controller.xoa_giangvien);
 
};