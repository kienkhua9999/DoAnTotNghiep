module.exports = (sequelize, Sequelize) => {
    const Diadiemhoc = sequelize.define("diadiemhocs", {
      IDdiadiemhoc: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tendiadiemhoc: {
        type: Sequelize.STRING
      },
      diachi:{
        type: Sequelize.TEXT
      },
      sodienthoai:{
        type: Sequelize.STRING
      }
      ,
      nguoiquanly:{
        type: Sequelize.STRING
      }
    
    });
    return Diadiemhoc;
};