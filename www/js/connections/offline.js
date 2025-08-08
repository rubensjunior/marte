dmx.databases = dmx.databases || {};
dmx.databases['offline'] = {
  "version": 6,
  "upgrade": [
    {
      "toVersion": 1,
      "statements": [
        "SELECT 1",
        "create table `papeis` (`id` char(36) default null, `nome` varchar(255), `descricao` varchar(255), primary key (`id`))",
        "SELECT 1",
        "create table `permissoes` (`id` char(36) default null, primary key (`id`))"
      ]
    },
    {
      "toVersion": 2,
      "statements": [
        "drop table `departamento`",
        "alter table `papeis` rename `id` to `id_`"
      ]
    },
    {
      "toVersion": 3,
      "statements": [
        "drop table `papeis`",
        "drop table `empresas`"
      ]
    },
    {
      "toVersion": 4,
      "statements": [
        "drop table `permissoes`"
      ]
    },
    {
      "toVersion": 5,
      "statements": [
        "drop table `usuarios`"
      ]
    },
    {
      "toVersion": 6,
      "statements": [
        "SELECT 1",
        "create table `usuarios` (`id_usuarios` char(36) default null, primary key (`id_usuarios`))",
        "SELECT 1",
        "create table `empresas` (`id_empresa` char(36) default null, primary key (`id_empresa`))",
        "SELECT 1",
        "create table `departamentos` (`id_departamentos` char(36) default null, primary key (`id_departamentos`))",
        "SELECT 1",
        "create table `papeis` (`id_papeis` char(36) default null, primary key (`id_papeis`))",
        "SELECT 1",
        "create table `permissoes` (`id_permissoes` char(36) default null, primary key (`id_permissoes`))",
        "SELECT 1",
        "create table `papeis_permissoes` (`id_papeis_permissoes` char(36) default null, primary key (`id_papeis_permissoes`))",
        "SELECT 1",
        "create table `usuarios_empresas` (`id_usuarios_empresas` char(36) default null, primary key (`id_usuarios_empresas`))",
        "SELECT 1",
        "create table `usuarios_empresas_departamentos` (`id_usuarios_empresas_departamentos` char(36) default null, primary key (`id_usuarios_empresas_departamentos`))"
      ]
    }
  ]
}