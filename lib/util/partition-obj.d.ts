export declare type T_partitionObj = (lKeys: string[]) => <O>(o: O) => [Partial<O>, Partial<O>];
export declare const partitionObj: T_partitionObj;
