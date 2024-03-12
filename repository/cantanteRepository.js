const Cantante = require('../model/cantante');
const db = require('../db');

class CantanteRepository {
    async getAllCantantes() {
     
        return await db.Cantante.findAll();
    }

    async getCantanteById(id) {
       
        return await db.Cantante.findByPk(id);
    }

    async createCantante(cantanteData) {

        return await db.Cantante.create(cantanteData);
    }

    async updateCantante(id, cantanteData) {
   
        const cantante = await db.Cantante.findByPk(id);
        if (!cantante) return null;
        return await cantante.update(cantanteData);
    }

    async deleteCantante(id) {
        
        const cantante = await db.Cantante.findByPk(id);
        if (!cantante) return false;
        await cantante.destroy();
        return true;
    }

    async findByNombreContainingIgnoreCase(nombre) {
      
        return await db.Cantante.findAll({
            where: {
                nombre: { [db.Sequelize.Op.iLike]: `%${nombre}%` }
            }
        });
    }
}

module.exports = CantanteRepository;
