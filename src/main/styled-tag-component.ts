import { ComponentClass, createElement, CSSProperties, HTMLAttributes, SFC } from 'react';
import { applyIfIsArr, condArr } from '../util/cond-arr';
import { partitionObj } from '../util/partition-obj';
import { mapValues } from '../util/map-values';

export type T_StyledTagArg<P> = {
	tag?: string | any
	ep?: string[]
	cn?: (p: P) => (string | [boolean, string])[],
	style?: (p?: P) => CSSProperties,
	nullIf?: (p?: P) => boolean,
};
export type T_StyledTagComponent = <P>(opt: T_StyledTagArg<P>) => SFC<P & { innerRef?: (el: HTMLElement) => void } & HTMLAttributes<any>>;
export const StyledTagComponent: T_StyledTagComponent = (a) => {
	let { tag = 'div', ep = [], cn, style: _s, nullIf } = a;
	return (p) => {
		let [eP, dP] = partitionObj(ep.concat('innerRef'))(p);
		if (nullIf && nullIf(eP)) return null;
		let className = cn ? condArr(cn(eP)).join(' ') : null;
		let style = _s && mapValues(applyIfIsArr(v => {
				let t = v.find(([b]) => b);
				return (t && t[1]) || null;
			}))(_s(eP));
		return createElement(tag, { className, style, ref: eP.innerRef, ...dP });
	};
};