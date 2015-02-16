module.exports = function(app) {
    
    app.get('/list/issues', function(req, res) {

        // get the issues collection
        var issues = app.db.get('issues')

        var q = {}

        issues.find(q, {
            limit: 30
        }, function(err, issues) {
            res.render('listIssues.jade', {
                issues: issues
            })
        })

    })
}