var now = new Blaze.ReactiveVar(new Date());

Template.deployItem.helpers({
	status: function() {
		if("start" == this.type) {
			return "DEMARRAGE";
		} else {
			return "FIN";
		}
	},
	delay: function() {
		return moment(this.createdAt).from(now.get());
	}
});

setInterval(function () {
  now.set(new Date());
}, 60000);
