exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "event_category"; ALTER SEQUENCE event_category_id_seq RESTART WITH 1')
        .then(function() {
            const eventAndCategory = [{
                category_id: 4,
                event_id: 1
            },
            {
                category_id: 3,
                event_id: 1
            },
            {
                category_id: 3,
                event_id: 2
            },
            {
                category_id: 1,
                event_id: 3
            },
            {
                category_id: 9,
                event_id: 4
            },
            {
                category_id: 9,
                event_id: 5
            },
            {
                category_id: 1,
                event_id: 6
            },
            {
                category_id: 2,
                event_id: 7
            },
            {
                category_id: 5,
                event_id: 8
            }];
          return knex('event_category').insert(eventAndCategory);
        });

};
