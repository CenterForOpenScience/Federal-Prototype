import DS from 'ember-data';

import OsfModel from './osf-model';

/**
 * Model for OSF APIv2 contributors. Primarily accessed via relationship fields.
 * For field and usage information, see:
 *    https://api.osf.io/v2/docs/#!/v2/Node_Contributors_List_GET
 */
export default OsfModel.extend({
    bibliographic: DS.attr('boolean'),
    permission: DS.attr('string'),
    userId: DS.attr('string'),
    users: DS.belongsTo('user'),
    nodeId: DS.attr('string'),
    unregisteredContributor: DS.attr('string')
});