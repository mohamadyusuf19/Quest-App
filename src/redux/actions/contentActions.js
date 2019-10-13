import { PILIH_SOAL, PILIH_JAWABAN, TOTAL_NILAI } from "../types";

export const pilihSoal = data => ({
  type: PILIH_SOAL,
  payload: data
});

export const pilihJawaban = data => ({
  type: PILIH_JAWABAN,
  payload: data
});

export const totalNilai = data => ({
  type: TOTAL_NILAI,
  payload: data
});
