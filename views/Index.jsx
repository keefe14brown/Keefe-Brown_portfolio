const React = require('react');
const AppLayout = require('./layout/AppLayout');
class Index extends React.Component {
    render(){
        return (
            <AppLayout
            title="Keefe's Portfolio"
            stylesheet="/style.css"
            js="/app.js"
            >
            <div className="homepagetitle">
                <h1>Keefe Brown</h1>
                <h3>Software Engineer</h3>
                <h3>Web Developer</h3>
            </div>
            </AppLayout>
        )
    }
}

module.exports = Index;