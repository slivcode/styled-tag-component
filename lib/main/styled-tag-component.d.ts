/// <reference types="react" />
import { CSSProperties, HTMLAttributes, SFC } from 'react';
export declare type T_StyledTagArg<P> = {
    tag?: string | any;
    ep?: string[];
    cn?: (p: P) => (string | [boolean, string])[];
    style?: (p?: P) => CSSProperties;
    nullIf?: (p?: P) => boolean;
};
export declare type T_StyledTagComponent = <P>(opt: T_StyledTagArg<P>) => SFC<P & {
    innerRef?: (el: HTMLElement) => void;
} & HTMLAttributes<any>>;
export declare const StyledTagComponent: T_StyledTagComponent;
