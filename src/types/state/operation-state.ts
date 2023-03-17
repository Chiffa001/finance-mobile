import {Operation} from '../operation';

import {CommonState} from './common-state';

export type OperationState = Record<
  number,
  {
    list: Operation[] | null;
    total?: number;
  } & CommonState
>;
