const React = require('react');
const AppLayout = require('./layout/AppLayout');


class Show extends React.Component {
    render(){
        return (
            <AppLayout
            title=""
            stylesheet="/style.css"
            js="/app.js"
            >
                <div>
                    <h2>Please complete the form below, if you would like to recieve contact.</h2>
                    <form action="">
                        NAME: <input type="text" name="name"/><br/>
                        EMAIL: <input type="text" name="Email"/><br/>
                        PHONE: <input type="text" name="Phone"/><br/>
                        <input type="submit" name="" value="Submit"/>
                    </form>
                </div>
            </AppLayout>
        )
    }
}
module.exports = Show;