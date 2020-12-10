const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class New extends React.Component {
    render(){
        return (
            <AppLayout
            title="About Me"
            stylesheet="/style.css"
            js="/app.js"
            >
                <div className="aboutme">
                    <h2>Who Am I?</h2>
                    <div></div>
                    <div></div>
                    <p id="aboutmebody">Blah blah blah blah, testing text testing it all
                        i'm soo tired, so confused, blah blah blah
                    </p>
                </div>
            </AppLayout>
        )
    }
}
module.exports = New;