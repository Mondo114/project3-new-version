module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            validate:{
               isEmail: true, 
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 20]
            }
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.TEXT
          }
    });

  
    return User; 
};
