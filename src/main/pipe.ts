// 参考: https://blog.andoshin11.me/posts/pipeline-operator-like-helper

type PipelineResult<T1> = {
  <T2>(f1: (a: T1) => T2): T2;
  <T2, T3>(f1: (a: T1) => T2, f2: (a: T2) => T3): T3;
  <T2, T3, T4>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4): T4;
  <T2, T3, T4, T5>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5): T5;
  <T2, T3, T4, T5, T6>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6): T6;
  <T2, T3, T4, T5, T6, T7>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7): T7;
  <T2, T3, T4, T5, T6, T7, T8>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8): T8;
  <T2, T3, T4, T5, T6, T7, T8, T9>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9): T9;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10): T10;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11): T11;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12): T12;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13): T13;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14): T14;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15): T15;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15, f15: (a: T15) => T16): T16;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15, f15: (a: T15) => T16, f16: (a: T16) => T17): T17;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15, f15: (a: T15) => T16, f16: (a: T16) => T17, f17: (a: T17) => T18): T18;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15, f15: (a: T15) => T16, f16: (a: T16) => T17, f17: (a: T17) => T18, f18: (a: T18) => T19): T19;
  <T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(f1: (a: T1) => T2, f2: (a: T2) => T3, f3: (a: T3) => T4, f4: (a: T4) => T5, f5: (a: T5) => T6, f6: (a: T6) => T7, f7: (a: T7) => T8, f8: (a: T8) => T9, f9: (a: T9) => T10, f10: (a: T10) => T11, f11: (a: T11) => T12, f12: (a: T12) => T13, f13: (a: T13) => T14, f14: (a: T14) => T15, f15: (a: T15) => T16, f16: (a: T16) => T17, f17: (a: T17) => T18, f18: (a: T18) => T19, f19: (a: T19) => T20): T20;
};

export const pipe = <T>(init: T): PipelineResult<T> => (...functions: Function[]) => functions.reduce((result, next) => next(result), init);

export const p_sum = (arr: number[]) => arr.reduce((p, c) => p + c, 0);

