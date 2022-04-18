const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.bacdaotao = require("../models/bacdaotao.model")(sequelize, Sequelize);
db.banner = require("../models/banner.model")(sequelize, Sequelize);
db.chude = require("../models/chude.model")(sequelize, Sequelize);
db.diadiemhoc = require("../models/daidiemhoc.model")(sequelize, Sequelize);
db.detai = require("../models/detai.model")(sequelize, Sequelize);
db.donvi = require("../models/donvi.model")(sequelize, Sequelize);
db.giangvien = require("../models/giangvien.model")(sequelize, Sequelize);
db.hedaotao = require("../models/hedaotao.model")(sequelize, Sequelize);
db.hoidong = require("../models/hoidong.model")(sequelize, Sequelize);
db.khoa = require("../models/khoa.model")(sequelize, Sequelize);
db.khoadaotao = require("../models/khoadaotao.model")(sequelize, Sequelize);
db.lop = require("../models/lop.model")(sequelize, Sequelize);
db.sinhvien = require("../models/sinhvien.model")(sequelize, Sequelize);
db.tintuc = require("../models/tintuc.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.giangvien.belongsToMany(db.detai, {
  through: "giangvienhuongdans",
  foreignKey: "IDgiangvien",
  otherKey: "IDdetai"
});
db.detai.belongsToMany(db.giangvien, {
  through: "giangvienhuongdans",
  foreignKey: "IDdetai",
  otherKey: "IDgiangvien"
});

db.giangvien.belongsToMany(db.detai, {
  through: "giangvienphanbiens",
  foreignKey: "IDgiangvien",
  otherKey: "IDdetai"
});
db.detai.belongsToMany(db.giangvien, {
  through: "giangvienphanbiens",
  foreignKey: "IDdetai",
  otherKey: "IDgiangvien"
});



db.detai.belongsTo(db.chude, { foreignKey: 'IDchude' });
db.detai.belongsTo(db.hoidong, { foreignKey: 'IDhoidong' });
db.sinhvien.belongsTo(db.lop, { foreignKey: 'IDlop' });
db.sinhvien.belongsTo(db.detai, { foreignKey: 'IDdetai' });
db.lop.belongsTo(db.khoa, { foreignKey: 'IDkhoa' });
db.lop.belongsTo(db.hedaotao, { foreignKey: 'IDhedaotao' });
db.lop.belongsTo(db.bacdaotao, { foreignKey: 'IDbacdaotao' });
db.lop.belongsTo(db.diadiemhoc, { foreignKey: 'IDdaidiemhoc' });
db.lop.belongsTo(db.khoadaotao, { foreignKey: 'IDkhoadaotao' });
db.giangvien.belongsTo(db.khoa, { foreignKey: 'IDkhoa' });
db.giangvien.belongsTo(db.donvi, { foreignKey: 'IDdonvi' });

db.ROLES = ["user", "admin", "moderator"];
module.exports = db;