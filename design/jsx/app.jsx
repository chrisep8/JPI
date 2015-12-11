import { createStore } from 'redux';
import {Provider, connect} from 'react-redux';
import {Bar} from './component/toolbar/bar.jsx';
import {Tool} from './component/toolbar/tool.jsx';
import Workspace from './component/workspace.jsx';
import reducer from './redux/reducer.jsx';

const React = require('react');
const ReactDOM = require('react-dom');
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();



//import {Menu} from './component/toolbar/menu.jsx';
//
//const uiReducer = (state = [], action) =>{
//    switch(action.type){
//        case 'CHOOSE_MENU':
//            return action.menu;
//        default :
//            return state;
//    }
//};
//const store = createStore(uiReducer);
//
//var App = React.createClass({
//    getInitialState: function(){
//        return{
//            chosenView:0
//        }
//    },
//    viewChosen: function(id){
//        this.setState({chosenView:id})
//    },
//    render:function(){
//        var style = {
//            cursor:"pointer",
//            height: '200px',
//            width: '200px',
//            background:'#2e2e2e',
//            color: 'white'
//        };
//        var pos = {x: 100, y: 100};
//        return(
//            <div>
//                <Toolbar viewChosen={this.viewChosen}/>
//            </div>
//        )
//    }
//});
//
//var Toolbar = React.createClass({
//    getInitialState: function(){
//        return{chosenMenu:0}
//    },
//    handleClickView: function(id){
//        this.props.viewChosen(id)
//    },
//    handleClickMenu:function(menu){
//        this.setState({chosenMenu:menu})
//    },
//    render: function(){
//        return(
//            <div className="toolbar">
//                <Tools chosen={this.state.chosenMenu} viewChosen={this.handleClickView}/>
//                <Menu handleclick={this.handleClickMenu} chosen={this.state.chosenMenu}/>
//            </div>
//       )
//   }
//});
//
//var Tools = React.createClass({
//    viewChosen: function(id){
//        this.props.viewChosen(id)
//    },
//    render: function(){
//        return(
//            <div className="tools">
//                <ViewsMenu viewChosen={this.viewChosen}/>
//            </div>
//        )
//    }
//});
//
//var ViewsMenu = React.createClass({
//    viewClicked: function(id){
//
//    },
//    render: function(){
//        return(
//            <div className="viewsMenu">
//                <span onClick={this.viewClicked(0)}>Atas</span>
//                <span onClick={this.viewClicked(1)}>Bawah</span>
//                <span onClick={this.viewClicked(2)}>Depan</span>
//                <span onClick={this.viewClicked(3)}>Belakang</span>
//                <span onClick={this.viewClicked(4)}>Kiri</span>
//                <span onClick={this.viewClicked(5)}>Kanan</span>
//            </div>
//        )
//    }
//});
//
//ReactDOM.render(<App/>, document.getElementById('app'));


const App = () => (
    <div>
        <Workspace/>
        <Toolbar/>
    </div>
);

const Toolbar = () =>(
    <div className="toolbar">
        <Tool/>
        <Bar/>
    </div>
);

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App/>
    </Provider>, document.getElementById('app'));