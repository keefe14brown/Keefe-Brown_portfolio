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
                    <p id="aboutmebody">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem. Lectus nulla at volutpat diam ut. Sit amet nisl suscipit adipiscing. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Consequat mauris nunc congue nisi vitae suscipit tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Fermentum posuere urna nec tincidunt. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ut pharetra sit amet aliquam.

Lacus sed turpis tincidunt id aliquet risus feugiat. In aliquam sem fringilla ut. Aliquam purus sit amet luctus. Nunc id cursus metus aliquam. Nibh sit amet commodo nulla facilisi nullam vehicula. Vulputate odio ut enim blandit. Pharetra magna ac placerat vestibulum lectus. Mi in nulla posuere sollicitudin aliquam ultrices. Dui ut ornare lectus sit. Sagittis orci a scelerisque purus. Amet risus nullam eget felis. Eget nunc lobortis mattis aliquam faucibus purus. Volutpat ac tincidunt vitae semper quis lectus. Risus at ultrices mi tempus imperdiet.
                    </p>
                </div>
            </AppLayout>
        )
    }
}
module.exports = New;