import {connect} from 'react-redux';
import {updateHarga,updateBackground, updateBahan, updateBentuk, updateUkuranTinggi, updateUkuranPanjang, updateUkuranLebar} from '../../../redux/actions.jsx';

const RadioButton = require('material-ui/lib/radio-button');
const RadioButtonGroup = require('material-ui/lib/radio-button-group');
const DropDownMenu = require('material-ui/lib/drop-down-menu');
const TextField = require('material-ui/lib/text-field');
const React = require('react');

class Properties extends React.Component{
    loseFocus(){
        this.refs.input.blur();
        this.refs.inputCustom.blur();
    }
    onChangePanjang(event){
        this.props.updateUkuranPanjang(event);
        var luas = (2*(event.target.value*this.props.tinggi))+
            (2*(event.target.value*this.props.lebar))+
            (2*(this.props.lebar*this.props.tinggi));
        this.props.updateHarga(luas);
    }
    onChangeLebar(event){
        this.props.updateUkuranLebar(event);
        var luas = (2*(this.props.panjang*this.props.tinggi))+
            (2*(this.props.panjang*event.target.value))+
            (2*(event.target.value*this.props.tinggi));
        this.props.updateHarga(luas);
    }
    onChangeTinggi(event){
        this.props.updateUkuranTinggi(event);
        var luas = (2*(this.props.panjang*event.target.value))+
            (2*(this.props.panjang*this.props.lebar))+
            (2*(this.props.lebar*event.target.value));
        this.props.updateHarga(luas);
    }
    render(){
        let menuItems = [
            { payload: '1', text: 'Kotak' }
        ];
        var isCustom = !(this.props.background != 'white'
        && this.props.background != "#795548");
        return(
            <div className="properties">
                <div className="panel_one">
                    Background
                    <RadioButtonGroup
                        name="Background"
                        defaultSelected={this.props.background}
                        style={{'paddingTop':'1em'}}
                        onChange={this.props.updateBackground}>
                        <RadioButton
                            value="white"
                            label="Putih"
                            labelStyle={{color:'white','fontSize':'0.9em'}} />
                        <RadioButton
                            value="#795548"
                            label="Coklat"
                            labelStyle={{color:'white','fontSize':'0.9em'}}/>
                        <RadioButton
                            value="#FAFAFA"
                            label="Custom"
                            labelStyle={{color:'white','fontSize':'0.9em'}}/>
                    </RadioButtonGroup>
                    <TextField
                        ref="inputCustom"
                        style={{width:'10em'}}
                        underlineStyle={{opacity:0}}
                        inputStyle={{color: 'white'}}
                        floatingLabelStyle={{color: 'white'}}
                        floatingLabelText="Custom"
                        onChange={this.props.updateBackgroundCustom}
                        onEnterKeyDown={this.loseFocus.bind(this)} disabled={isCustom}/>
                </div>
                <div className="panel_one">
                    Bahan
                    <RadioButtonGroup
                        name="Bahan"
                        defaultSelected={this.props.bahan}
                        style={{'paddingTop':'1em'}}
                        onChange={this.props.updateBahan}>
                        <RadioButton
                            value="Karton"
                            label="Karton"
                            labelStyle={{color:'white','fontSize':'0.9em'}} />
                        <RadioButton
                            value="Kardus"
                            label="Kardus"
                            labelStyle={{color:'white','fontSize':'0.9em'}}/>
                        <RadioButton
                            value="Plastik"
                            label="Plastik"
                            labelStyle={{color:'white','fontSize':'0.9em'}}/>
                    </RadioButtonGroup>
                </div>
                <div className="panel">
                    <div className="bentuk">
                        <span style={{margin:'1em'}}>Bentuk</span>
                        <DropDownMenu menuItems={menuItems} disabled={true} labelStyle={{color:'white'}}/>

                    </div>
                    <div className="ukuran">
                        <span style={{margin:'1em'}}>Ukuran</span>
                        <TextField
                            ref="input"
                            style={{width:'4em',marginLeft:'24px'}}
                            underlineStyle={{opacity:0}}
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Tinggi"
                            defaultValue={this.props.tinggi}
                            onChange={this.onChangeTinggi.bind(this)}
                            onEnterKeyDown={this.loseFocus.bind(this)}
                            type="number"/>
                        <TextField
                            ref="input"
                            style={{width:'4em'}}
                            underlineStyle={{opacity:0}}
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Panjang"
                            defaultValue={this.props.panjang}
                            onChange={this.onChangePanjang.bind(this)}
                            onEnterKeyDown={this.loseFocus.bind(this)}
                            type="number"/>
                        <TextField
                            ref="input"
                            style={{width:'4em'}}
                            underlineStyle={{opacity:0}}
                            inputStyle={{color: 'white'}}
                            floatingLabelStyle={{color: 'white'}}
                            floatingLabelText="Lebar"
                            defaultValue={this.props.lebar}
                            onChange={this.onChangeLebar.bind(this)}
                            onEnterKeyDown={this.loseFocus.bind(this)}
                            type="number"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        background:state.propertiesReducer.background,
        bahan:state.propertiesReducer.bahan,
        bentuk:state.propertiesReducer.bentuk,
        lebar:state.propertiesReducer.lebar,
        tinggi:state.propertiesReducer.tinggi,
        panjang:state.propertiesReducer.panjang
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateBackground:(event, data) => dispatch(updateBackground(data)),
        updateBahan: (event, data) => dispatch(updateBahan(data)),
        updateBentuk: (event, data) => dispatch(updateBentuk(data)),
        updateUkuranTinggi: (event) => dispatch(updateUkuranTinggi(event.target.value)),
        updateUkuranPanjang: (event) => dispatch(updateUkuranPanjang(event.target.value)),
        updateUkuranLebar: (event) => dispatch(updateUkuranLebar(event.target.value)),
        updateHarga: (data) => dispatch(updateHarga(data)),
        updateBackgroundCustom:(event) => dispatch(updateBackground(event.target.value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Properties)