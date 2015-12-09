import {connect} from 'react-redux';
import {chooseView} from '../../redux/actions.jsx';
import {Asset} from './expanded/assets.jsx';
const TextField = require('material-ui/lib/text-field');
const RadioButton = require('material-ui/lib/radio-button');
const RadioButtonGroup = require('material-ui/lib/radio-button-group');
const React = require('react');

const pOptionItem = (props) => {
    return(
        <div style = {props.style} className={"option "} onClick={props.handleClick}>
            {props.children}
            <paper-ripple recenters></paper-ripple>
        </div>
    )
};

const mapStateToProps = (state, ownProps) =>{
    return{
        style:{
            opacity: ownProps.id == state.uiReducer.selectedView ? 1 : 0.5
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        handleClick: () => dispatch(chooseView(ownProps.id))
    }
};

const Option = connect(
    mapStateToProps,
    mapDispatchToProps
)(pOptionItem);

const ViewMenu = () =>(
    <div className="views">
        <Option id={0}>Atas</Option>
        <Option id={1}>Bawah</Option>
        <Option id={2}>Kiri</Option>
        <Option id={3}>Kanan</Option>
        <Option id={4}>Depan</Option>
        <Option id={5}>Belakang</Option>
    </div>
);



/** EXPANDED BELOW
 * ============================================================*/

const pExpandedTool = (props) => {
    const getChildren = () =>{
        switch (props.selectedMenu){
            case 0:
                return '';
            case 1:
                return <Asset/>;
            case 2:
                return <Properties/>;
            case 3:
                return <Details/>;
        }
    };
    return(
        <div className={"expanded"} >
            {getChildren()}
        </div>
    )
};

const mapStateToToolProps = (state, ownProps) =>{
    return{
        selectedMenu:state.uiReducer.selectedMenu
    }
};

const mapDispatchToToolProps = (dispatch, ownProps) => {
    return{
        handleClick: () => dispatch(chooseView(ownProps.id))
    }
};

const ExpandedTool = connect(
    mapStateToToolProps,
    mapDispatchToToolProps
)(pExpandedTool);

export const Tool = () =>(
    <div className="tools">
        <ViewMenu/>
        <div className="dividerBottom"></div>
        <ExpandedTool/>
    </div>
);



const Details = () =>{
    return(
        <div className="details">
            <div className="preview">Preview</div>
            <div className="info">
                <TextField
                    underlineStyle={{opacity:0}}
                    inputStyle={{color: 'white'}}
                    floatingLabelStyle={{color: 'white'}}
                    floatingLabelText="Nama Project" />
                <div className="date">Update terakhir</div>
            </div>
        </div>
    )
};

const Properties = () =>{
    return(
        <div className="properties">
            <div className="panel_one">
                Background
                <RadioButtonGroup name="Background" defaultSelected="Putih"  style={{'paddingTop':'1em'}}>
                    <RadioButton
                        value="Putih"
                        label="Putih"
                        labelStyle={{color:'white','font-size':'0.9em'}} />
                    <RadioButton
                        value="Hitam"
                        label="Hitam"
                        labelStyle={{color:'white','font-size':'0.9em'}}/>
                    <RadioButton
                        value="Biru"
                        label="Biru"
                        labelStyle={{color:'white','font-size':'0.9em'}}/>
                </RadioButtonGroup>
            </div>
            <div className="panel_one">
                Bahan
                <RadioButtonGroup name="Bahan" defaultSelected="Karton" style={{'paddingTop':'1em'}}>
                    <RadioButton
                        value="Karton"
                        label="Karton"
                        labelStyle={{color:'white','font-size':'0.9em'}} />
                    <RadioButton
                        value="Kardus"
                        label="Kardus"
                        labelStyle={{color:'white','font-size':'0.9em'}}/>
                    <RadioButton
                        value="Plastik"
                        label="Plastik"
                        labelStyle={{color:'white','font-size':'0.9em'}}/>
                </RadioButtonGroup>
            </div>
            <div className="panel">
                Ukuran
                Bentuk
            </div>
        </div>
    )
};



