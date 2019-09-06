'use strict'
const Pregunta = use('App/Models/Pregunta')

class PreguntaController {

    async registrar({request, response}){
        let pregunta = new Pregunta();
        pregunta.pregunta = request.input('pregunta');
        pregunta.respuesta1 = request.input('respuesta1');
        pregunta.respuesta2 = request.input('respuesta2');
        pregunta.respuesta3 = request.input('respuesta3');
        pregunta.respuesta4 = request.input('respuesta4');
        pregunta.puntos_1 = 40;
        pregunta.puntos_2 = 35;
        pregunta.puntos_3 = 15;
        pregunta.puntos_4 = 10;

        await pregunta.save();

        return response.status(200).json(await Pregunta.query().orderBy('id').fetch());
    }

    async obtener({response}){
        return response.status(200).json(await Pregunta.query().orderBy('id').fetch());
    }
}

module.exports = PreguntaController
