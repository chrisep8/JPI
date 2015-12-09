export function chooseMenu(id){
    return {
        type:'CHOOSE_MENU',
        selectedMenu:id
    }
}

export function chooseView(id){
    return {
        type:'CHOOSE_VIEW',
        selectedView:id
    }
}