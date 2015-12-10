import { combineReducers } from 'redux'

function uiReducer(state = {selectedMenu:0, selectedView:0}, action){
    switch(action.type){
        case 'CHOOSE_MENU':
            return {
                selectedMenu:action.selectedMenu,
                selectedView:state.selectedView
            };
        case 'CHOOSE_VIEW':
            return {
                selectedMenu:state.selectedMenu,
                selectedView:action.selectedView
            };
        default :
            return state;
    }
}

function dataReducer(state = [
    {assets:[
        {name:'welcome',
            type:'text',
            content:'Hi, Welcome',
            id:0},
        {name:'logo',
            type:'image',
            content:'img/logo_full.png',
            id:0}
    ]},
    {assets:[]},
    {assets:[]},
    {assets:[]},
    {assets:[]},
    {assets:[]}
], action){
    switch(action.type){
        case 'DELETE_ASSET':
            return {
                selectedMenu:action.selectedMenu,
                selectedView:state.selectedView
            };
        case 'UPDATE_ASSET_DATA':
            return {
                selectedMenu:state.selectedMenu,
                selectedView:action.selectedView
            };
        case 'ADD_ASSET':
            return {

            };
        default :
            return state;
    }
}

function detailReducer(state =  {
    project_name:'Figuran Hans Solo',
    tanggal:'2015-04-04',
    harga:'Rp. 11.000,00'
}, action){
    switch(action.type){
        case 'UPDATE_NAME':
            return {
                project_name:action.name,
                tanggal:state.tanggal,
                harga:state.harga
            };
        case 'UPDATE_TANGGAL':
            return {
                project_name:state.project_name,
                tanggal:action.tanggal,
                harga:state.harga
            };
        case 'UPDATE_HARGA':
            return {
                project_name:state.project_name,
                tanggal:state.tanggal,
                harga:action.harga
            };
        default :
            return state;
    }
}

function propertiesReducer(state = {
    background:'Putih',
    bahan:'Karton',
    bentuk:'Kubus',
    tinggi:'20',
    panjang:'20',
    lebar:'20'
}, action){
    switch(action.type){
        case 'UPDATE_BACKGROUND':
            return {
                background:action.background,
                bahan:state.bahan,
                bentuk:state.bentuk,
                tinggi:state.tinggi,
                panjang:state.panjang,
                lebar:state.lebar
            };
        case 'UPDATE_BAHAN':
            return {
                background:state.background,
                bahan:action.bahan,
                bentuk:state.bentuk,
                tinggi:state.tinggi,
                panjang:state.panjang,
                lebar:state.lebar
            };
        case 'UPDATE_BENTUK':
            return {
                background:state.background,
                bahan:state.bahan,
                bentuk:action.bentuk,
                tinggi:state.tinggi,
                panjang:state.panjang,
                lebar:state.lebar
            };
        case 'UPDATE_UKURAN_PANJANG':
            return {
                background:state.background,
                bahan:state.bahan,
                bentuk:state.bentuk,
                tinggi:state.tinggi,
                panjang:action.panjang,
                lebar:state.lebar

            };
        case 'UPDATE_UKURAN_TINGGI':
            return {
                background:state.background,
                bahan:state.bahan,
                bentuk:state.bentuk,
                tinggi:action.tinggi,
                panjang:state.panjang,
                lebar:state.lebar

            };
        case 'UPDATE_UKURAN_LEBAR':
            return {
                background:state.background,
                bahan:state.bahan,
                bentuk:state.bentuk,
                tinggi:state.tinggi,
                panjang:state.panjang,
                lebar:action.lebar

            };

        default :
            return state;
    }
}

export default combineReducers({
    uiReducer,
    dataReducer,
    detailReducer,
    propertiesReducer
});