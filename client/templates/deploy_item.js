Template.deployItem.helpers({
	status: function() {
		if("start" == this.type) {
			return "DEMARRAGE";
		} else {
			return "FIN";
		}
	},
	delay: function() {
		return moment(this.createdAt).fromNow();
	}
});
