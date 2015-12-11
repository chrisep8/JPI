import {updateName, updateTanggal, updateHarga} from '../../../redux/actions.jsx'
const RaisedButton = require('material-ui/lib/raised-button');
import {connect} from 'react-redux';

const TextField = require('material-ui/lib/text-field');
const React = require('react');

class Details extends React.Component{
    render(){
        return(
            <div className="details">
                <div className="preview">Preview</div>
                <div className="info">
                    <TextField
                        style={{width:'70%'}}
                        underlineStyle={{opacity:0}}
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Nama Project"
                        defaultValue={this.props.projectName}
                        onChange={this.props.updateName}/>
                    <div className="date">Update terakhir: {this.props.tanggal}<br/>
                        <RaisedButton label="Default" /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        projectName:state.detailReducer.project_name,
        tanggal:state.detailReducer.tanggal,
        harga:state.detailReducer.harga
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateName: (event) => dispatch(updateName(event.target.value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)