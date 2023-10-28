const { Sequelize } = require('sequelize')

const conexion = new Sequelize(
    'railway',
    'postgres',
    '3egcAEbE36cE5E4bA3FeGb66cfgE2g2d',
    {
        host: 'roundhouse.proxy.rlwy.net',
        port: 36568,
        dialect: 'postgres'
    }
)

module.exports = conexion