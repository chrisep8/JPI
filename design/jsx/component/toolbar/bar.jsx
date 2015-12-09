//export var Menu = React.createClass({
//    getInitialState: function(){
//        return {selected:0};
//    },
//    handleClick: function(id){
//        this.setState({selected:id});
//        this.props.handleclick(id);
//    },
//    render: function(){
//        return(
//            <div className="menu">
//                <Option name="Asset" id={1} selected={this.state.selected} handleclick={this.handleClick}/>
//                <Option name="Properties" id={2} selected={this.state.selected} handleclick={this.handleClick}/>
//                <Option name="Details" id={3} selected={this.state.selected} handleclick={this.handleClick}/>
//                <Option name="Preview" id={4} selected={this.state.selected} handleclick={this.handleClick}/>
//            </div>
//        )
//    }
//});
//
//var Option = React.createClass({
//    getInitialState: function(){
//        return {style:{opacity:0.5}};
//    },
//    handleClick: function(){
//        if(this.props.selected == this.props.id){
//            this.props.handleclick(0);
//        }else{
//            this.props.handleclick(this.props.id);
//        }
//    },
//    render: function(){
//        var style = {opacity:1};
//        if(this.props.selected == this.props.id){
//            style.opacity = 1;
//        } else{
//            style.opacity = 0.5;
//        }
//        return (
//            <div style={style} className="option" onClick={this.handleClick}>{this.props.name}</div>
//        )
//    }
//});
import {connect} from 'react-redux';
import {chooseMenu} from '../../redux/actions.jsx';
const React = require('react');

const OptionItem = (props) => {
    return(
        <div style = {props.style}
             className={"option "}
             onClick={ props.id === props.selectedMenu ? props.turnOff : props.turnOn}>
            <div>
            {props.children}
            </div>
            <paper-ripple recenters></paper-ripple>
        </div>
    )
};

const mapStateToProps = (state, ownProps) =>{
    return{
        style:{
            opacity: ownProps.id == state.uiReducer.selectedMenu ? 1 : 0.5
        },selectedMenu: state.uiReducer.selectedMenu
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        turnOn: () => dispatch(chooseMenu(ownProps.id)),
        turnOff: () => dispatch(chooseMenu(0))
    }
};

const Option = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionItem);

export const Bar = () =>(
    <div className="menu">
        <Option id={1}>Asset</Option>
        <Option id={2}>Properties</Option>
        <Option id={3}>Details</Option>
    </div>
);