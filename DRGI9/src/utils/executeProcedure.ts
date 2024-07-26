import knex from '../config/database'
export async function executeProcedure() {
  await knex.raw(`BEGIN INM.PRC_INM_DIARIA(); END;`)
}
