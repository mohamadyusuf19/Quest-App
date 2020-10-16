/* eslint-disable no-fallthrough */
import {
  PILIH_SOAL,
  PILIH_JAWABAN,
  TOTAL_NILAI,
  START_TIME,
  END_TIME,
  REVIEW_SOAL,
  RESET,
} from '../types';
import { dataSoal } from '../../data/test';
import { shuffle } from '../../utils/Function';

const initialState = {
  data: {
    soal: 1,
    pertanyaan:
      'Harga bola dengan sepatu totalnya Rp. 150.000. Harga sepatu lebih besar Rp 100.000. Berapa harga bola ?',
    pilihan: [
      {
        key: 'A',
        value: 'Rp 50.000',
      },
      {
        key: 'B',
        value: 'Rp 75.000',
      },
      {
        key: 'C',
        value: 'Rp 25.000',
      },
      {
        key: 'D',
        value: 'Rp 150.000',
      },
    ],
    jawaban: 'C',
  },
  answer: shuffle(dataSoal),
  time: {
    start: new Date(),
    end: new Date(),
    _detik: 1000,
    _menit: 1000 * 60,
    _jam: 1000 * 60 * 60,
    _hari: 1000 * 60 * 60 * 24,
  },
  review: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PILIH_SOAL:
      return { ...state, data: action.payload };
    case PILIH_JAWABAN:
      const { idx } = action.payload;
      const pos = state.answer
        .map(function (e, index) {
          return index;
        })
        .indexOf(idx);
      // mengisi jawaban yang masih kosong
      if (pos === -1) {
        return { ...state, answer: [...state.answer, action.payload] };
      }
      // untuk mengganti object lama dengan object baru
      // mengganti jawaban
      else if (pos === idx) {
        return {
          ...state,
          answer: state.answer.map((item) =>
            item.soal === action.payload.soal ? action.payload : item
          ),
        };
      } else {
        return { ...state, answer: [...state.answer, action.payload] };
      }
    case TOTAL_NILAI:
      return {
        ...state,
        answer: state.answer.map((item) =>
          item.soal === action.payload.soal ? action.payload : item
        ),
      };
    case START_TIME:
      return { ...state, time: action.payload };
    case END_TIME:
      return { ...state, time: { ...state.time, end: action.payload } };
    case REVIEW_SOAL:
      return {
        ...state,
        review: action.payload,
      };
    case RESET:
      return {
        ...state,
        answer: shuffle(dataSoal),
      };
    default:
      return state;
  }
};
