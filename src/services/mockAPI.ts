import { createServer } from 'miragejs';

export const startMockAPI = () => {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/transactions', (schema, request) => {
        return [
          {
            id: 1,
            title: 'Desenvolvimento de website',
            value: 12000,
            category: 'Desenvolvimento',
            date: '26/03/2022',
          },
          {
            id: 2,
            title: 'Aluguel',
            value: -1100,
            category: 'Casa',
            date: '27/03/2022',
          },
        ];
      });
    },
  });
};
