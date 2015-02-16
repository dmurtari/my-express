module.exports = function(app) {

    app.get('/view/issue/:issue_id', function(req, res) {

        // get the issues collection
        var issues = app.db.get('issues')

         var q = {
            '_id': req.params.issue_id            
        }

        var issue = issues.findOne(q, function(err, item) {

            res.render('viewIssue.jade', {
                issue: item
            })
        })

    })
}