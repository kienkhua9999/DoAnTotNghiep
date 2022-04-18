module.exports = (sequelize, Sequelize) => {
    const Khoadaotao = sequelize.define("khoadaotaos", {
      IDkhoadaotao: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ghichu: {
        type: Sequelize.TEXT
      },
      niemkhoa:{
        type: Sequelize.TEXT
      }
    
    });
    return Khoadaotao;
};