var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render() {
        return (
            div(null,
                h1( { style: { color: this.props.colour } }, this.props.title)
            )
        )
    }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
    render () {
        return (
            React.DOM.div(null,
                MyTitleFactory({ title: 'props are the best', colour: 'rebeccapurple' }),
                MyTitleFactory({ title: 'semicolons are the worst', colour: 'hotpink' }),
                MyTitleFactory({ title: 'I really need a pee', colour: 'peachpuff' }),
                MyTitleFactory({ title: 'Imelda and her keys', colour: 'dodgerblue' }),
                MyTitleFactory({ title: 'What a bottlenose chump', colour: 'wheat' })
            )
        )
    }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
