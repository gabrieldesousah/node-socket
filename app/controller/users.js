module.exports = function (app) {
    var model = app.model.user;
    
    return {
        index: function (req, res) {
            model.then(function(model){
                model.find(null, (err, result) => {
                    if (err) {
                        console.log('Deu erro!!!!!!');
                        console.log(err);
                        return ;
                    }
                    console.log(result);
                });
            });
            
            return res.send('Oi....');
        }
    }
}