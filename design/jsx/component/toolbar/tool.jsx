import {connect} from 'react-redux';
import {chooseView} from '../../redux/actions.jsx';
import {Asset} from './expanded/assets.jsx';

const pOptionItem = (props) => {
    return(
        <div style = {props.style} className={"option "} onClick={props.handleClick}>
            {props.children}
        </div>
    )
};

const mapStateToProps = (state, ownProps) =>{
    return{
        style:{
            opacity: ownProps.id == state.selectedView ? 1 : 0.5
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
            case 4:
                return <Preview/>;
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
        selectedMenu:state.selectedMenu
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


const Preview = () =>{
    return(
        <div className="preview">
            Preview
        </div>
    )
};

const Details = () =>{
    return(
        <div className="details">
            Details
        </div>
    )
};

const Properties = () =>{
    return(
        <div className="properties">
            Properties
        </div>
    )
};




