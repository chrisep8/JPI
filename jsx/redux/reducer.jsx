import { combineReducers } from 'redux'

function uiReducer(state = {
    selectedMenu:0,
    selectedView:0,
    addAssetDialog:false,
    pesanDialog:false
}, action){
    switch(action.type){
        case 'CHOOSE_MENU':
            return {
                selectedMenu:action.selectedMenu,
                selectedView:state.selectedView,
                addAssetDialog:state.addAssetDialog,
                pesanDialog:state.pesanDialog

            };
        case 'CHOOSE_VIEW':
            return {
                selectedMenu:state.selectedMenu,
                selectedView:action.selectedView,
                addAssetDialog:state.addAssetDialog,
                pesanDialog:state.pesanDialog
            };
        case 'SHOW_PESAN_DIALOG':
            return {
                selectedMenu:state.selectedMenu,
                selectedView:state.selectedView,
                addAssetDialog:state.addAssetDialog,
                pesanDialog:action.pesanDialog
            };
        case 'SHOW_ADDASSET_DIALOG':
            return {
                selectedMenu:state.selectedMenu,
                selectedView:state.selectedView,
                addAssetDialog:action.addAssetDialog,
                pesanDialog:state.pesanDialog
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
            id:0,
            fontSize:20
        },
        {name:'logo',
            type:'image',
            content:'img/logo_full.png',
            id:1,
            x:500,
            y:108}
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
    harga:21600
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
    background:'white',
    bahan:'Karton',
    bentuk:'Kubus',
    tinggi:'10',
    panjang:'20',
    lebar:'30'
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