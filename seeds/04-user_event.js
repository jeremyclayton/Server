exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user_event"; ALTER SEQUENCE user_event_id_seq RESTART WITH 1')
        .then(function() {
            const userAndEvent = [{
                user_id: 1,
                event_id: 2
            },
            {
                user_id: 1,
                event_id: 1
            },
            {
                user_id: 2,
                event_id: 7
            },
            {
                user_id: 3,
                event_id: 3
            },
            {
                user_id: 3,
                event_id: 8
            },
            {
                user_id: 3,
                event_id: 6
            },
            {
                user_id: 4,
                event_id: 2
            },
            ];
          return knex('user_event').insert(userAndEvent);
        });

};
