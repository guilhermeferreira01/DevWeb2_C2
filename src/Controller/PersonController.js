// store, update, destroy
const Person = require('../Model/Persons');

    exports.index = (request, response) => {
        Person.get((err, person) => {
            if (err) {
                response.json({
                    status: "error",
                    message: err.message
                })
            }
            response.json({
                status: "SUCCESS",
                message: "Lista de Pessoas Inseridas",
                dados: person
            })
        })
    };
    
    exports.store = (request, response) => {
        let person = new Person();
        person.name = request.body.name ? request.body.name : person.name;
        person.email = request.body.email;
        person.latitude = request.body.latitude;
        person.longitude = request.body.longitude;
        person.date_created = new Date();
    
        person.save((err) => {
            if (err) {
                response.json(err);
            }
            response.json({
                message: "Pessoa Salva!",
                dados: person
            })
        })
    };

    exports.update = (request, response) => {
        Person.findById(request.params.id, (err, person) => {
            if (err) response.send(err);
            person.name = request.body.name;
            person.email = request.body.email;
            person.latitude = request.body.latitude;
            person.longitude = request.body.longitude;
            person.date_updated = new Date();
    
            person.save(err => {
                if (err) response.json(err);
                response.json({
                    message: "Pessoa atualizada com sucesso!",
                    dados: person
                })
            })
        })
    };
    
    exports.delete = (request, response) => {
    
        Person.deleteOne({
            _id: request.body.id
        }, (err, response) => {
            if (err) response.send(err);
            response.json({
                status: 'SUCCESS',
                message: 'Person deletado(a) com sucesso!'
            })
        });
    };
