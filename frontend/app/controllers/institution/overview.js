
import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    role: 'institution',
    //active_grant: null,
    //document: {},
    departments: {},
    actions: {
        getGrantsPage(page_number) {
            console.log('getting grants');
            console.log(page_number);
            this.get('store').query('grant', {
                'institution': true,
                'page': page_number
            }).then((grants) => {
                this.set('grants', grants);
            });
        },

        createGrant(department_id, grant_number, pi_name) {
            var dep = this.get('store').peekRecord('department', department_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('number', grant_number);
            grant.set('department', dep);
            grant.set('pi', pi_name);
            grant.set('questions', dep.toJSON().settings);
            grant.set('institution', true);
            this.store.findRecord('document', 125).then((r) => {
                grant.set('document', r);
                grant.save();
                //this.set('active_grant', grant)
                var grants = this.get('grants');
                grants.push(grant);
                this.set('grants', grants.slice());
            });
        }
    }
});
