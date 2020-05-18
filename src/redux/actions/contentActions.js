import {
  PILIH_SOAL,
  PILIH_JAWABAN,
  TOTAL_NILAI,
  START_TIME,
  END_TIME,
  REVIEW_SOAL,
  RESET,
} from '../types';

export const pilihSoal = (data) => ({
  type: PILIH_SOAL,
  payload: data,
});

export const pilihJawaban = (data) => ({
  type: PILIH_JAWABAN,
  payload: data,
});

export const totalNilai = (data) => ({
  type: TOTAL_NILAI,
  payload: data,
});

export const startTime = (data) => ({
  type: START_TIME,
  payload: data,
});

export const endTime = (data) => ({
  type: END_TIME,
  payload: data,
});

export const reviewSoal = (data) => ({
  type: REVIEW_SOAL,
  payload: data,
});

export const reset = () => ({
  type: RESET,
});
