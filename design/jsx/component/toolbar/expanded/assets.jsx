import {connect} from 'react-redux';
const React = require('react');

export const Asset = () => {
    return(
        <div className="asset">
            <AddAsset/>
        </div>
    )
};

const pAddAsset = () => {
    return(
        <div className="addAsset">
            <svg fill="#FFFFFF" height="35" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg><br/><br/>
            <span>Tambah Asset</span>
            <paper-ripple recenters></paper-ripple>
        </div>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        handleClick: () => dispatch(chooseView(ownProps.id))
    }
};

const AddAsset = connect(
    null,
    mapDispatchToProps
)(pAddAsset);