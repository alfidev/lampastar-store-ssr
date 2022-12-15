import { Config } from '@jest/types';

const options: Config.InitialOptions = {
  preset: 'ts-jest',

  testEnvironment: 'node',

  testTimeout: 10000,

  roots: ['<rootDir>/tests'],

  testRegex: '.spec.tsx?$',

  setupFiles: ['<rootDir>/tests/setup.ts'],

  globals: {
    // mock injected build variables. See DefinePlugin options on webpack configuration files.
    __PRODUCTION__: true,
    __SERVER__: true,
  },

  transform: {
    '\\.(jpe?g|png|gif|svg|woff2?|eot|ttf|otf)$': 'jest-transform-stub',
  },

  moduleNameMapper: {
    '^@common/(.*)$': '<rootDir>/src/client/common/$1',
    '^@layouts/(.*)$': '<rootDir>/src/client/layouts/$1',
    '^@pages/(.*)$': '<rootDir>/src/client/pages/$1',
    '^@pages$': '<rootDir>/src/client/pages',
    '^@components/(.*)$': '<rootDir>/src/client/components/$1',
    '^@modules/(.*)$': '<rootDir>/src/client/modules/$1',
    '^@resources/(.*)$': '<rootDir>/src/client/resources/$1',
    '^@ui/(.*)$': '<rootDir>/src/client/ui/$1',
    '^client/(.*)$': '<rootDir>/src/client/$1',
    '^server/(.*)$': '<rootDir>/src/server/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',

    '\\.(jpe?g|png|gif|svg|woff2?|eot|ttf|otf)$': '<rootDir>/tests/_fixtures/empty-string.ts',
    '\\.(css|less)$': '<rootDir>/tests/_fixtures/empty-string.ts',
  },
};

export default options;
