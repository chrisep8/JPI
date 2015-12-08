var App = React.createClass({
    render:function(){
        var style = {
            height: '200px',
            width: '200px',
            background:'#2e2e2e',
            color: 'white'
        };
        var pos = {x: 100, y: 100};
        return(
            <Draggable  initialPos={pos}>
                <div style={style}>asdasdasdasdasdasd</div>
            </Draggable>
        )
    }
});

var Draggable = React.createClass({
    getDefaultProps: function(){
        return {
            initialPos: {x: 0, y:0}
        }
    },
    getInitialState: function(){
        return{
            pos: this.props.initialPos,
            dragging:false,
            rel: null
        }
    },
    componentDidUpdate: function(props, state){
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp)
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp)
        }
    },
    onMouseDown: function(e){
        if (e.button !== 0) return;
        var pos = $(ReactDOM.findDOMNode(this)).offset();
        this.setState({
            dragging:true,
            rel:{
                y: e.pageX - pos.left,
                x: e.pageY - pos.top
            }
        });
        e.stopPropagation();
        e.preventDefault()
    },
    onMouseUp: function(e){
        this.setState({dragging: false});
        e.stopPropagation();
        e.preventDefault()
    },
    onMouseMove: function(e){
        if (!this.state.dragging) return;
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y
            }
        });
        e.stopPropagation();
        e.preventDefault()
    },
    render: function(){
        var style = {
            position: 'absolute',
            left: this.state.pos.x + 'px',
            top: this.state.pos.y + 'px'
        };
        return (
            <div onMouseDown={this.onMouseDown} style={style}>
                {this.props.children}
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('app'));