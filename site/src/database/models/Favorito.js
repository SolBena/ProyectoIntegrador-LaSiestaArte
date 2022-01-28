module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define(
    'Favorito',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "favoritos",
        timestamps: false
    })
return Favorito
}