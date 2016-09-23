import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions: {
        submit() {
            this.transitionTo('researcher.metadata')
        },
        departmentSelected(departmentId) {
            this.get('store').getRecord('department', departmentId);
        },
    },

    model() {
        var researcher = this.modelFor('researcher');
        return Ember.RSVP.hash({
            document: researcher.document,
            departments: researcher.departments,
            grants: this.get('store').findAll('grant')
        })
    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('isFileUploaded', "researcher-form");
        var grants = model.grants.reduce(function(r, n, i) {
            if (n.get('document').get('id') == model.document.get('id')) { r.push(n); }
            return r;
        }, [])
        controller.set('grants', grants)
        controller.set('document', model.document)
        controller.set('departments', model.departments)
    
    }

});

