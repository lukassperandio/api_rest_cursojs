const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Lukas',
        email: 'lukas@example.com',
        password_hash: await bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lukas2',
        email: 'lukas2@example.com',
        password_hash: await bcryptjs.hashSync('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lukas3',
        email: 'lukas3@example.com',
        password_hash: await bcryptjs.hashSync('741025', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
