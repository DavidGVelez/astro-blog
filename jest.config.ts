import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    rootDir: '.',
    roots: ['<rootDir>', '.'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '@Models/(.*)': '<rootDir>/src/Models/$1',
        '@Interfaces/(.*)': '<rootDir>/src/Interfaces/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
    },
}
export default config
