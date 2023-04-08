import {Operation} from '../operation';

import {CommonState} from './common-state';

export type OperationState = {
  sending?: boolean;
  sendingError?: unknown;
} & Record<
  number,
  {
    list: Operation[] | null;
    total?: number;
  } & CommonState
>;
