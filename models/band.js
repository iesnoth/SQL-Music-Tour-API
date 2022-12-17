//DEPENDENCIES  
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
//what does extend do again?
class Band extends Model {


}
//When writing a model, we call the init method on the model class. 
Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    band_members: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    //always include the "sequelize" connection instance before
    //configuring the table
    {
        sequelize,
        modelName: 'Band',
        //Sequelize will assume the table is named "bands" so specify it here
        tableName: 'band_info',
        //Sequelize automatically creates createdAt and updatedAt columns.
        //This gets rid of that.
        timestamps: false
    })
//export
module.exports = Band