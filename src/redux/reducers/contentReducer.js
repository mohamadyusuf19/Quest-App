/* eslint-disable no-fallthrough */
import { PILIH_SOAL, PILIH_JAWABAN, TOTAL_NILAI } from "../types";
import { dataSoal } from "../../data/test";

const initialState = {
  data: {
    soal: 1,
    pertanyaan:
      "Harga bola dengan sepatu totalnya Rp. 150.000. Harga sepatu lebih besar Rp 100.000. Berapa harga bola ?",
    pilihan: [
      {
        key: "A",
        value: "Rp 50.000"
      },
      {
        key: "B",
        value: "Rp 75.000"
      },
      {
        key: "C",
        value: "Rp 25.000"
      },
      {
        key: "D",
        value: "Rp 150.000"
      }
    ],
    jawaban: "C"
  },
  answer: dataSoal
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PILIH_SOAL:
      return { ...state, data: action.payload };
    case PILIH_JAWABAN:
      const { soal } = action.payload;
      const pos = state.answer
        .map(function(e) {
          return e.soal;
        })
        .indexOf(soal);
      // mengisi jawaban yang masih kosong
      if (pos === -1) {
        return { ...state, answer: [...state.answer, action.payload] };
      }
      // untuk mengganti object lama dengan object baru
      // mengganti jawaban
      else if (pos + 1 === soal) {
        return {
          ...state,
          answer: state.answer.map(item =>
            item.soal === action.payload.soal ? action.payload : item
          )
        };
      } else {
        return { ...state, answer: [...state.answer, action.payload] };
      }
    case TOTAL_NILAI:
      return {
        ...state,
        answer: state.answer.map(item =>
          item.soal === action.payload.soal ? action.payload : item
        )
      };
    default:
      return state;
  }
};
