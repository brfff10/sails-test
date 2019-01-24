/**
 * VehiculoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  get: function(req, res){
  	Vehiculo.find()
  		.then(function(vehiculo){
  			if(!vehiculo || vehiculo.length == 0){
  				return res.send({
  					'success': false,
  					'message': 'No records found'
  				})
  			}

  			return res.send({
  				'success': true,
  				'message': 'Records fetched',
  				'data': vehiculo
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'success': false,
  				'message': 'Cant fetch records',
  			})
  		})
  },

  create: function(req, res){
  	sails.log.debug(req.allParams())
  	Vehiculo.create(req.allParams())
  		.then(function(vehiculo){
  			return res.send({
  				'success': true,
  				'message': 'Created successfully'
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'success': false,
  				'message': 'Not created'
  			})
  		})
  },

  update: function(req, res){
  	Vehiculo.update(req.param('id'), req.allParams())
  		.then(function(vehiculo){
  			return res.send({
  				'success': true,
  				'message': 'Record Updated',
  				'data': vehiculo
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
			return res.send({
				'success': false,
				'messages': 'Unable to update record'
			})				
  		})
  },

  delete: function(req, res){
  	Vehiculo.destroy(req.param('id'))
  		.then(function(vehiculo){
  			return res.send({
  				'success': true,
  				'message': 'Record deleted successfully',
  				'data': vehiculo
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'success': false,
  				'message': 'Unale to delete record',
  			})
  		})
  }

};

