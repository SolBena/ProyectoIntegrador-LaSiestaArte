module.exports = (sequelize, DataTypes) => {
    let Productos = sequelize.define(
    'Productos',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        medida_alto: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: null,
        },
        diametro: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: null,
        },
        capacidad: {
            type: DataTypes.INTEGER,
            defaulValue: null,
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_motivo: {
            type: DataTypes.INTEGER,
            defaulValue: null,
        }
    },
    {
        tableName: "productos",
        timestamps: false
    },
    )

    Productos.associate = (models) => {
        Productos.belongsTo(models.Categorias, {
            as: 'categoriasPr',
            foreignKey: 'id_categoria'
        })
        Productos.belongsTo(models.Motivos, {
            as: 'motivosPr',
            foreignKey: 'id_motivo'
        })
        Productos.hasMany(models.Imagen, {
            as: 'productosIm',
            foreignKey: 'id_producto'
        })
        Productos.belongsToMany(models.Usuarios, {
            as: 'usuarios_favorito',
            through: 'favoritos',
            foreignKey: 'id_producto',
            otherKey: 'id_usuario'
        })
        Productos.belongsToMany(models.Usuarios, {
            as: 'usuarios_carrito',
            through: 'carrito',
            foreignKey: 'id_producto',
            otherKey: 'id_usuario'
        })
    }


return Productos
}
