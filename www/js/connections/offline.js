dmx.databases = dmx.databases || {};
dmx.databases['offline'] = {
  "version": 4,
  "upgrade": [
    {
      "toVersion": 1,
      "statements": [
        "SELECT 1",
        "create table `boards` (`id_boards` char(36) default null, primary key (`id_boards`))",
        "SELECT 1",
        "create table `etapas` (`id_etapas` char(36) default null, primary key (`id_etapas`))",
        "SELECT 1",
        "create table `cards` (`id_cards` char(36) default null, primary key (`id_cards`))",
        "SELECT 1",
        "create table `cards_responsaveis` (`id` char(36) default null, primary key (`id`))"
      ]
    },
    {
      "toVersion": 2,
      "statements": [
        "PRAGMA table_info(`boards`)",
        "PRAGMA table_info(`cards`)",
        "PRAGMA table_info(`cards_responsaveis`)",
        "alter table `cards_responsaveis` rename `id` to `id_cards_responsaveis`",
        "PRAGMA table_info(`departamentos`)",
        "PRAGMA table_info(`empresas`)",
        "PRAGMA table_info(`etapas`)",
        "PRAGMA table_info(`papeis`)",
        "PRAGMA table_info(`papeis_permissoes`)",
        "PRAGMA table_info(`permissoes`)",
        "PRAGMA table_info(`usuarios`)",
        "PRAGMA table_info(`usuarios_empresas`)",
        "PRAGMA table_info(`usuarios_empresas_departamentos`)"
      ]
    },
    {
      "toVersion": 3,
      "statements": [
        "SELECT 1",
        "create table `cards_notas` (`id_cards_notas` char(36) default null, primary key (`id_cards_notas`))",
        "SELECT 1",
        "create table `cards_tarefas` (`id_cards_tarefas` char(36) default null, primary key (`id_cards_tarefas`))",
        "SELECT 1",
        "create table `boards_acessos` (`id_boards_acessos` char(36) default null, primary key (`id_boards_acessos`))"
      ]
    },
    {
      "toVersion": 4,
      "statements": [
        "PRAGMA table_info(`boards`)",
        "PRAGMA table_info(`boards_acessos`)",
        "PRAGMA table_info(`cards`)",
        "PRAGMA table_info(`cards_notas`)",
        "PRAGMA table_info(`cards_responsaveis`)",
        "PRAGMA table_info(`cards_tarefas`)",
        "PRAGMA table_info(`departamentos`)",
        "PRAGMA table_info(`empresas`)",
        "PRAGMA table_info(`etapas`)",
        "PRAGMA table_info(`papeis`)",
        "PRAGMA table_info(`papeis_permissoes`)",
        "PRAGMA table_info(`permissoes`)",
        "PRAGMA table_info(`usuarios`)",
        "PRAGMA table_info(`usuarios_empresas`)",
        "PRAGMA table_info(`usuarios_empresas_departamentos`)"
      ]
    }
  ]
}