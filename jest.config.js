module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: { 
      '^.+\\.png$': 'jest-transform-stub', // Agrega esta línea para transformar archivos PNG
      '^.+\\.svg$': 'jest-transform-stub', // Agrega esta línea para transformar archivos PNG
    },
  };
  