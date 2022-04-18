module.exports = (sequelize, Sequelize) => {
  const Banner = sequelize.define("banners", {
    IDbanner: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    bannername: {
      type: Sequelize.TEXT,
    },
    bannerlink: {
      type: Sequelize.TEXT,
    },
    bannerimg: {
      type: Sequelize.TEXT,
    },
  });
  return Banner;
};
