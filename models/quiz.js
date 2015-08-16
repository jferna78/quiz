// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz', {
        tema: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta Tema"},
                       fn: function(val) {
                           if (val === "Tema") {throw new Error("-> Falta Tema");}
                       }
                      }
        },
        pregunta: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta Pregunta"},
                       fn: function(val) {
                           if (val === "Pregunta") {throw new Error("-> Falta Pregunta");}
                       }
                      }
        },
        respuesta: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta Respuesta"},
                       fn: function(val) {
                           if (val === "Respuesta") {throw new Error("-> Falta Respuesta");}
                       }
                      }
        }
    }
                           );
};