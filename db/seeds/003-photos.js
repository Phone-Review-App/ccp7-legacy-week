/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('photos').del()
  await knex('photos').insert([
    {id: 1, user_id: 1, prefecture_id: 1, photo_key:'', description: 'A snowy mountain in Niseko'},
    // {id: 2, user_id: 4, prefecture_id: 1, photo_key:'', description: 'Beautiful flowers in Furano'},
    // {id: 3, user_id: 3, prefecture_id: 26, photo_key:'', description: 'A temple in Kyoto'},
    // {id: 4, user_id: 2, prefecture_id: 1, photo_key:'', description: 'Odori Park in Sapporo'},
    // {id: 5, user_id: 1, prefecture_id: 47, photo_key:'', description: 'A huge beach in Okinawa'},
    // {id: 6, user_id: 5, prefecture_id: 27, photo_key:'', description: 'The running man in Osaka'},
    // {id: 7, user_id: 5, prefecture_id: 43, photo_key:'', description: 'Kumamon'},
    // {id: 8, user_id: 5, prefecture_id: 26, photo_key:'', description: 'A temple in Kyoto'},
    // {id: 9, user_id: 4, prefecture_id: 13, photo_key:'', description: 'A shrine in Asakusa'},
    // {id: 10, user_id: 4, prefecture_id: 12, photo_key:'', description: 'The statue in Hachiko'},
  ]);
};
