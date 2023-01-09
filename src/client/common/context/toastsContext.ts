import { createContext } from 'react';

import { ToastsContextType } from '@common/types';

export const ToastsContext = createContext<ToastsContextType | null>(null);
