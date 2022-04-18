module.exports = (sequelize, Sequelize) => {
    const Detai = sequelize.define("detais", {
      IDdetai: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tendetai: {
        type: Sequelize.TEXT
      },
      sosinhvienthamgia:{
        type: Sequelize.INTEGER
      },
      banmendoan:{
        type: Sequelize.STRING
      }
      ,
      sourcecode:{
        type: Sequelize.STRING
      } ,
      nam:{
        type: Sequelize.INTEGER
      } ,
      nhanxetchung:{
        type: Sequelize.STRING
      }
    
    });
    return Detai;
};