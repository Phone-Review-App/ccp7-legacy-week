/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'hoge@gmail.com', UID: 'XIdGtBMpycOaAx3wdNKYmUlrBcE3'},
    {id: 2, email: 'pushman@gmail.com', UID: ''},
    {id: 3, email: 'inthepast@aol.com', UID: ''},
    {id: 4, email: 'gitignore@gmail.com', UID: ''},
    {id: 5, email: 'npmall@docomo.com', UID: ''},
    {id: 6, email: 'godslayerxd@gmail.com', UID: '6nZKfljQx2RRVNVzbIYrmjHOsjh2'},
  ]);
};
