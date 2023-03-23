export type Override<T, N> = Omit<T, keyof N> & N;
