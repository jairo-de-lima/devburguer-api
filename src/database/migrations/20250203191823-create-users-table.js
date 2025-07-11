'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // criar a tabela // comando para criar a tabela= yarn sequelize db:migrate
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true, // id obrigatorio
        allowNull: false, // id nao pode ser nulo
        type: Sequelize.UUID, // id do tipo UUID universal que nao se repetem
        defaultValue: Sequelize.UUIDV4, // valor padrao para o tipo de id
      },
      name: {
        type: Sequelize.STRING, // nome do tipo string
        allowNull: false, // nome nao pode ser nulo
      },
      email: {
        type: Sequelize.STRING, // email do tipo string
        allowNull: false, // email nao pode ser nulo
        unique: true, // email unico nao pode se repetir
      },
      password_hash: {
        type: Sequelize.STRING, // senha do tipo string
        allowNull: false, // senha nao pode ser nula
      },
      admin: {
        type: Sequelize.BOOLEAN, // admin do tipo boolean
        defaultValue: false, // valor padrao para admin automaticamente falso
      },
      created_at: {
        type: Sequelize.DATE, // data de criacao do tipo data
        allowNull: false, // data de criacao nao pode ser nula
      },
      updated_at: {
        type: Sequelize.DATE, // data de atualizacao do tipo data
        allowNull: false, // data de atualizacao nao pode ser nula
      },
    });
  },

  async down(queryInterface) {
    // desfazer a criacao da tabela // comando para desfazer a criacao da tabela= yarn sequelize db:migrate:undo
    // comando yarn sequelize db:migrate:undo:all deleta todas as migratios de baixo para cima na sequencia
    await queryInterface.dropTable('users');
  },
};
