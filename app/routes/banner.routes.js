const { authJwt } = require("../middleware");
const controller = require("../controllers/banner.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/quanly/banner", controller.danhsach_banner);
  app.post("/quanly/banner/them_banner", controller.them_banner);
  app.post("/quanly/banner/capnhat_banner/:IDbanner", controller.capnhat_banner);
  app.get("/quanly/banner/xoa_banner/:IDbanner", controller.xoa_banner);
 
};