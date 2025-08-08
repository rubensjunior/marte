dmx.databases = dmx.databases || {};
dmx.databases['offline'] = {
  "version": 6,
  "upgrade": [
    {
      "toVersion": 1,
      "statements": [
        "create table `teste` (`id` integer not null primary key autoincrement)"
      ]
    },
    {
      "toVersion": 2,
      "statements": [
        "drop table `teste`"
      ]
    },
    {
      "toVersion": 3,
      "statements": [
        "SELECT 1",
        "create table `empresas` (`id_empresa` char(36) default null, `razao_social` varchar(255), `nome_fantasia` varchar(255), `nome_polo` varchar(255), `endereco` varchar(255), `cep` varchar(255), `bairro` varchar(255), `cidade` varchar(255), `estado` varchar(255), `cnpj` varchar(255), primary key (`id_empresa`))"
      ]
    },
    {
      "toVersion": 4,
      "statements": [
        "alter table `empresas` add column `complemento` varchar(255)",
        "alter table `empresas` add column `whatsapp` varchar(255)",
        "alter table `empresas` add column `empresa_matriz` varchar(255)",
        "alter table `empresas` add column `numero` varchar(255)"
      ]
    },
    {
      "toVersion": 5,
      "statements": [
        "SELECT 1",
        "create table `usuarios` (`id_usuario` char(36) default null, `nome_completo` varchar(255), `email` varchar(255), `nome_tratamento` varchar(255), `empresa_atual` varchar(255), `senha` varchar(255), foreign key(`empresa_atual`) references `empresas`(`id_empresa`) on delete CASCADE on update CASCADE, primary key (`id_usuario`))"
      ]
    },
    {
      "toVersion": 6,
      "statements": [
        "SELECT 1",
        "create table `departamento` (`id_departamento` char(36) default null, `nome_departamento` varchar(255), primary key (`id_departamento`))"
      ]
    }
  ]
}