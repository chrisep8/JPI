import {connect} from 'react-redux';
var Draggable = require('react-draggable');
const Paper = require('material-ui/lib/paper');
const React = require('react');

class Workspace extends React.Component{
    calculateWidth(){
        switch (this.props.view){
            case 0:
                return this.props.lebar;
            case 1:
                return this.props.lebar;
            case 2:
                return this.props.panjang;
            case 3:
                return this.props.panjang;
            case 4:
                return this.props.tinggi;
            case 5:
                return this.props.tinggi;
        }
    }
    calculateHeight(){
        switch (this.props.view){
            case 0:
                return this.props.panjang;
            case 1:
                return this.props.panjang;
            case 2:
                return this.props.tinggi;
            case 3:
                return this.props.tinggi;
            case 4:
                return this.props.tinggi;
            case 5:
                return this.props.tinggi;
        }
    }
    render(){
        var width = this.calculateWidth.bind(this)();
        var height = this.calculateHeight.bind(this)();
        var color = this.props.background;
        var style = {
            width:width+'cm',
            height:height+'cm',
            margin:0,
            backgroundColor:color,
            overflow: 'hidden'
        };

        return(
            <div className="workspace" >
                <Paper zDepth={2} style={style}>
                    <div className="canvas">
                        <Draggable
                            start={{x: 162, y: 323.5}}>
                            <div style={{background:'url(img/logo_full.png)',width:'500px',height:'108px'}}></div>
                        </Draggable>
                    </div>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        view:state.uiReducer.selectedView,
        tinggi:state.propertiesReducer.tinggi,
        panjang:state.propertiesReducer.panjang,
        lebar:state.propertiesReducer.lebar,
        background:state.propertiesReducer.background
    }
};

//const mapDispatchToProps = (dispatch) =>{
//    return{
//
//    }
//};

export default connect(
    mapStateToProps,
    null
)(Workspace)