Template.deploysList.helpers({
  deploys: function() {
    return Deploys.find({}, {sort: {createdAt: -1}});
  }
});
