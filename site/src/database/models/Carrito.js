module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define(
    'Carrito',
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
        id_orden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        total: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        updateAt:{
            type: DataTypes.DATE,
            defaultValue: null
        }, 
    },
    {
        tableName: "carrito",
        timestamps: false
    })

    Carrito.associate = (models) => {
        Carrito.belongsTo(models.Orden, {
            as: 'ordenCa',
            foreignKey: 'id_orden'
        })
    }
return Carrito
}