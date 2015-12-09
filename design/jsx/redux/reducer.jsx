export function uiReducer(state = {selectedMenu:0, selectedView:0}, action){
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

const initialDataState = [
    {},
    {},
    {},
    {},
    {},
    {}
];

export function dataReducer(state = initialDataState, action){
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