import { DatVeXemPhim } from "./constt"
const STATE_DEFAULT = {
    Ten: "",
    SoTien: "",
    SoGhe:"",
    MangGheChon: [
        // "a",
        // "b",
        // "a",
        // "b",
        // "a",
        // "b",
    ]
}

const mangGhe = {
    newMangGheChon: [
    ]
}

export const GheReducer = (state = STATE_DEFAULT, action) => {
    // console.log(state)

    switch (action.type) {
        case DatVeXemPhim.LayTen:

            // console.log(action.payload);

            // if(action.payload === ''){
            //     alert("vui lòng nhập họ tên, nếu không quý khách sẽ bị mất vé!");
            // }else{
            //     state.Ten = action.payload;
            // }

            state.Ten = action.payload;
            return { ...state }
            
        case DatVeXemPhim.GheDaChon:

            
            mangGhe.newMangGheChon.push(action.payload)
            // console.log(mangGhe.newMangGheChon)

            // state.MangGheChon = mangGhe.newMangGheChon;

            // reduce vs set dùng để bỏ các phần tử lặp lại trong 1 mảng, ES6 hỗ trợ
            state.MangGheChon = mangGhe.newMangGheChon.reduce((uniqueArr, item) => {
                if(uniqueArr.includes(item)) {
                    return uniqueArr;
                } else {
                    uniqueArr.push(item);
             
                    return uniqueArr;
                }
            }, []);

            
            // console.log(state.MangGheChon)
            // return { ...state };
            break;

        case DatVeXemPhim.LayTien:
            
            let price = 0;
            for (let i = 1; i <= state.MangGheChon.length; i++) {
                price++;
                // console.log(price)
            }

            state.SoTien = action.payload * price;
            state.SoGhe = price;
            // console.log(state.SoGhe)
            return { ...state };
        default:
            break;
    }

    return state


}