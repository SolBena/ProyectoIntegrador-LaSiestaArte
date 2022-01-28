module.exports = (sequelize, DataTypes) => {
    let Rol = sequelize.define(
    'Rol',
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
    },
    {
        tableName: "rol",
        timestamps: false
        
    },
)
    Rol.associate = (models) => {
        Rol.hasMany(models.Usuarios, {
            as: 'roles',
            foreignKey: 'id_rol'
        })
    }
return Rol
}