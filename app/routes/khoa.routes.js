const { authJwt } = require("../middleware");
const controller = require("../controllers/khoa.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/khoa", controller.danhsach_khoa);
  app.post("/quanly/khoa/them_khoa", controller.them_khoa);
  app.post("/quanly/khoa/sua_khoa/:IDkhoa", controller.capnhat_khoa);
  app.get("/quanly/khoa/xoa_khoa/:IDkhoa", controller.xoa_khoa);
 
};