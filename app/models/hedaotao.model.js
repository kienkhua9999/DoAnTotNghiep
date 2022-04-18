module.exports = (sequelize, Sequelize) => {
    const Hedaotao = sequelize.define("hedaotaos", {
      IDhedaotao: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tenhedaotao: {
        type: Sequelize.TEXT
      }
    
    });
    return Hedaotao;
};