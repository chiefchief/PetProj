---
to: src/reducers/types.ts
unless_exists: true
---
import {
  INITIAL_GLOBAL,
  INITIAL_PERSISTED,
  // ADD IMPORT TYPE
} from './__proto__';

export type TAppState = {
  _global: INITIAL_GLOBAL;
  _persisted: INITIAL_PERSISTED;
  // ADD TYPE
};
