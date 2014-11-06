Meteor.publish('deploys', function() {
	return Deploys.find({}, {sort: {createdAt: -1}});
});
