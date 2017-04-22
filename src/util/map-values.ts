export type T_mapValues = (f: (v) => any) => <O>(o: O) => O;
export const mapValues: T_mapValues = (f) => (o) => {
	let t = {};
	for (let k in o) t[k] = f(o[k]);
	return t;
};