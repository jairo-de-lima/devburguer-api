module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'devburguer',
  define: {
    timestamps: true, //criar dois registro created_at e updated_at
    underscored: true, //criar as tabelas com _ ex: user_groups separando por "_" e nao pascalcase
    underscoredAll: true, //criar as colunas com _ ex: user_id
  },
};
