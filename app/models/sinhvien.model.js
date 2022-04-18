module.exports = (sequelize, Sequelize) => {
  const Sinhvien = sequelize.define("sinhviens", {
    IDsinhvien: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    tensinhvien: {
      type: Sequelize.TEXT,
    },
    gioitinh: {
      type: Sequelize.STRING,
    },
    namsinh: {
      type: Sequelize.INTEGER,
    },
    quequan: {
      type: Sequelize.TEXT,
    },
    hokhuathuongchu: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.STRING,
    },
    sodienthoai: {
      type: Sequelize.INTEGER,
    },
    anhsinhvien: {
      type: Sequelize.TEXT,
    },
  });
  return Sinhvien;
};
