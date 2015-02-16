var express = require('express')
var app = express()

var _ = require('lodash')

var events = require('./data/events.json')
var issues = require('./data/issues.json')

// use jade as the view engine
app.set('view engine', 'jade');
// Hosting
// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.jade', {})
})

app.get('/list/events', function(req, res) {
    res.render('listEvents.jade', {
        events: events
    })
})

app.get('/list/issues', function(req, res) {
    res.render('listIssues.jade', {
        issues: issues
    })
})

app.get('/view/event/:event_id', function(req, res) {
    var event = _.find(events, {'event_id' : req.params.event_id})
    res.render('viewEvent.jade', {
        event: event
    })
})

app.get('/view/issue/:issue_id', function(req, res) {
    var issue = _.find(issues, {'issue_id' : req.params.issue_id})
    res.render('viewIssue.jade', {
        issue: issue
    })
})

var server = app.listen(process.env.PORT || 3000, function() {
    require('./mongo')(app)
    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
