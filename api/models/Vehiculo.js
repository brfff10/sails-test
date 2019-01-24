/**
 * Vehiculo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'vehiculos',

  attributes: {
    marca: {
        type: 'string'
    },
    modelo: {
        type: 'string'
    },
    year: {
        type: 'number',
        min: 1940,
        max: 2020
    },
    placas: {
        type: 'string',
        regex: /^A[A-Z]{2}[0-9]{3}$/i,
        required: true,
        unique: true
    },
    kilometraje: {
        type: 'number'
    },
    numeroSerie: {
        type: 'number',
        required: true,
        unique: true
    }
  },

};

