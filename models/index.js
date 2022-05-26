const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.hasMany(Trip, {
	foreignKey: 'traveller_id',
	onDelete: 'SET NULL'
});

Trip.belongsTo(Traveller, {
	foreignKey: 'traveller_id'
});

Location.hasMany(Trip, {
	foreignKey: 'location_id',
	onDelete: 'CASCADE'
});

Trip.belongsTo(Location, {
	foreignKey: 'location_id'
});

module.exports = { Traveller, Location, Trip };
