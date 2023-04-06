/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_has_prefecture').del()
  await knex('photos').del()
  await knex('prefectures').del()
  await knex('users').del()
  
};
