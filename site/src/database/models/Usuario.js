module.exports = (sequelize, DataTypes) => {
    let Usuarios = sequelize.define(
    'Usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        provincia: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        localidad: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
            defaultValue: null
        },
        id_rol:{
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
    },
    {
        tableName: "usuarios",
        timestamps: false
    })

    Usuarios.associate = (models) => {
        Usuarios.belongsTo(models.Rol, {
            as: 'roles',
            foreignKey: 'id_rol'
        })
        Usuarios.belongsToMany(models.Productos, {
            as: 'productos_favorito',
            through: 'favoritos',
            foreignKey: 'id_usuario',
            otherKey: 'id_producto'
        })
        Usuarios.belongsToMany(models.Productos, {
            as: 'productos_carrito',
            through: 'carrito',
            foreignKey: 'id_usuario',
            otherKey: 'id_producto'
        })
        Usuarios.hasMany(models.Orden, {
            as: 'usuariosOr',
            foreignKey: 'id_usuario'
        })
    }

return Usuarios
}