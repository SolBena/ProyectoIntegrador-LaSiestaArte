module.exports = (sequelize, DataTypes) => {
    const Motivos = sequelize.define(
    'Motivos',
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
        tableName: "motivos",
        timestamps: false
    })

    Motivos.associate = (models) => {
        Motivos.hasMany(models.Productos, {
            as: 'motivosPr',
            foreignKey: 'id_motivo'
        })
    }

return Motivos
}