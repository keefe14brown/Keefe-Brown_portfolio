const React = require('react');

class AppLayout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    <nav>
                        <ul>
                            <li><a href="/fruits">Homepage</a></li>
                            <li><a href="/fruits/new">About Me</a></li>
                            <li><a href="/fruits/:id">Contact Me</a></li>
                        </ul>
                    </nav>
                    {this.props.children}
                    <script src={this.props.js}></script>
                </body>
            </html>
        )
    }
}
module.exports = AppLayout;