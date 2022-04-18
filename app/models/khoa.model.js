module.exports = (sequelize, Sequelize) => {
    const Khoa = sequelize.define("khoas", {
      IDkhoa: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tenkhoa: {
        type: Sequelize.TEXT
      },
      truongkhoa: {
        type: Sequelize.TEXT
      }
    });
    return Khoa;
};