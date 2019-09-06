'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreguntaSchema extends Schema {
  up () {
    this.create('preguntas', (table) => {
      table.increments()
      table.string('pregunta',100).notNullable()
      table.string('respuesta1',100).notNullable()
      table.string('respuesta2',100).notNullable()
      table.string('respuesta3',100).notNullable()
      table.string('respuesta4',100).notNullable()
      table.integer('puntos_1',100).notNullable()
      table.integer('puntos_2',100).notNullable()
      table.integer('puntos_3',100).notNullable()
      table.integer('puntos_4',100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('preguntas')
  }
}

module.exports = PreguntaSchema
