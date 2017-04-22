export type T_applyIfIsArr = (a: any[] | any) => any;
export const applyIfIsArr: T_applyIfIsArr = f => (a) => Array.isArray(a) ? f(a) : a;
export type T_condArr = (a: any[]) => any[];
export const condArr: T_condArr = (a) => a.map(applyIfIsArr(i => i[0] ? i[1] : false)).filter(i => i);