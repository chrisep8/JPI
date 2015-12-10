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

export function updateBackground(data){
    return {
        type:'UPDATE_BACKGROUND',
        background:data
    }
}

export function updateBahan(data){
    return {
        type:'UPDATE_BAHAN',
        bahan:data
    }
}

export function updateBentuk(data){
    return {
        type:'UPDATE_BENTUK',
        bentuk:data
    }
}

export function updateUkuranPanjang(data){
    return {
        type:'UPDATE_UKURAN_PANJANG',
        panjang:data
    }
}
export function updateUkuranTinggi(data){
    return {
        type:'UPDATE_UKURAN_TINGGI',
        tinggi:data
    }
}
export function updateUkuranLebar(data){
    return {
        type:'UPDATE_UKURAN_LEBAR',
        lebar:data
    }
}

export function updateName(data){
    return {
        type:'UPDATE_NAME',
        name:data
    }
}

export function updateTanggal(data){
    return {
        type:'UPDATE_TANGGAL',
        tanggal:data
    }
}

export function updateHarga(data){
    return {
        type:'UPDATE_HARGA',
        harga:data
    }
}
