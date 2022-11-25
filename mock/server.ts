// src/mocks/server.js
import { setupServer } from 'msw/node'
import { generateHandlers } from './characters';

const { handlers } = generateHandlers();

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)