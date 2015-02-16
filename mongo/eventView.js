module.exports = function(app) {

    app.get('/view/event/:event_id', function(req, res) {

        // get the events collection
        var events = app.db.get('events')

         var q = {
            'id': req.params.event_id            
        }

        var event = events.findOne(q, function(err, item) {

            res.render('viewEvent.jade', {
                event: item
            })
        })

    })
}