import {DatVeXemPhim} from "./constt"

export const GheDaChon = (payload) => {
    return {
        type: DatVeXemPhim.GheDaChon,
        payload
    }
}

export const LayTen = (payload) => {
    return {
        type: DatVeXemPhim.LayTen,
        payload
    }
}

export const LayTien = (payload) => {
    return {
        type: DatVeXemPhim.LayTien,
        payload
    }
}