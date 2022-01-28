module.exports = (sequelize, DataTypes) => {
    let Categorias = sequelize.define(
    'Categorias',
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
        href: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        alt: {
            type: DataTypes.STRING(45),
            defaultValue: null
        },
        img: {
            type: DataTypes.STRING(45),
            defaultValue: null
        },
    },
    {
        tableName: "categorias",
        timestamps: false
    },
    )


    Categorias.associate = (models) => {
        Categorias.hasMany(models.Productos, {
            as: 'categoriasPr',
            foreignKey: 'id_categoria'
        })
    }
return Categorias
}