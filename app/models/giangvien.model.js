module.exports = (sequelize, Sequelize) => {
    const Giangvien = sequelize.define("giangviens", {
      IDgiangvien: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tengiangvien: {
        type: Sequelize.TEXT
      },
      gioitinh: {
        type: Sequelize.TEXT
      },
      namsinh: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      sodienthoai: {
        type: Sequelize.INTEGER
      },
      diachi: {
        type: Sequelize.TEXT
      },
      hocvi: {
        type: Sequelize.TEXT
      },
      chucvu: {
        type: Sequelize.TEXT
      },
      anhgiangvien: {
        type: Sequelize.TEXT
      }
    
    });
    return Giangvien;
  };