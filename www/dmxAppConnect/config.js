dmx.config({
  "criarconta": {
    "step": [
      {
        "name": "value",
        "type": "number"
      }
    ]
  },
  "home": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "usuario_logado": {
      "meta": {},
      "local": [
        {
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {}
          }
        }
      ]
    }
  },
  "backoffice": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "redirect_deslogado": {
      "meta": {},
      "local": [
        {
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {}
          }
        }
      ]
    }
  },
  "empresa": {
    "data_empresa": {
      "meta": [
        {
          "type": "text",
          "name": "id_empresa"
        },
        {
          "type": "text",
          "name": "razao_social"
        },
        {
          "type": "text",
          "name": "nome_fantasia"
        },
        {
          "type": "text",
          "name": "nome_polo"
        },
        {
          "type": "text",
          "name": "cnpj"
        },
        {
          "type": "text",
          "name": "status_empresa"
        },
        {
          "type": "number",
          "name": "empresa_matriz"
        }
      ],
      "outputType": "array"
    }
  },
  "colaborador": {
    "data_colaborador": {
      "meta": [
        {
          "type": "text",
          "name": "nome_completo"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "cargo_usuario_empresa"
        },
        {
          "type": "text",
          "name": "status_usuario"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "type": "text",
          "name": "id_usuarios"
        },
        {
          "type": "text",
          "name": "nome_completo"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "cargo_usuario_empresa"
        },
        {
          "type": "text",
          "name": "status_usuario"
        }
      ],
      "outputType": "array"
    }
  }
});
