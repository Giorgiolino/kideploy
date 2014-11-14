Template.deployButton.helpers({
    buttonStatusClass: function () {
        if (Meteor.user().profile.isDeploying) {
            return 'trigger-deploy-stop';
        }
        return 'trigger-deploy-start';
    }
});

Template.deployButton.events({
    'click .trigger-deploy-start': function (event, template) {
        // increment the counter when button is clicked

        if (confirm("Y a vraiment pas le choix ?")) {
            Session.set("counter", Session.get("counter") + 1);
            Meteor.users.update(Meteor.userId(), {$set: {"profile.isDeploying": true}});
            Deploys.insert({type: "start", createdAt: new Date(), actor: Meteor.user()});

        } else {
            return false;
        }
    },
    'click .trigger-deploy-stop': function (event, template) {
        // increment the counter when button is clicked

        if (confirm("On est d'accord que c'est bien fini ?")) {
            Session.set("counter", Session.get("counter") + 1);
            Meteor.users.update(Meteor.userId(), {$set: {"profile.isDeploying": false}});
            Deploys.insert({type: "stop", createdAt: new Date(), actor: Meteor.user()});

        } else {
            return false;
        }
    },

    'mouseenter button.action': function (event, template) {
        $(event.target).addClass('animated shake');
    },
    'mouseleave button.action': function (event, template) {
        $(event.target).removeClass('animated shake');
    }
});

