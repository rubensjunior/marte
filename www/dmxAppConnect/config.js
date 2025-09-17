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
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "id_funil"
      }
    ]
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
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
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
          "type": "number",
          "name": "empresa_matriz"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "whatsapp"
        },
        {
          "type": "text",
          "name": "status_empresa"
        },
        {
          "type": "text",
          "name": "endereco"
        },
        {
          "type": "text",
          "name": "numero"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "bairro"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        }
      ],
      "outputType": "array"
    }
  },
  "times": {
    "data_filtro_colaborador": {
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
    },
    "repeat_times": {
      "meta": [
        {
          "type": "text",
          "name": "id_times"
        },
        {
          "type": "text",
          "name": "nome_time"
        },
        {
          "type": "text",
          "name": "descricao_time"
        },
        {
          "type": "number",
          "name": "criado_por_time"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "status_time"
        },
        {
          "type": "number",
          "name": "empresa_times"
        }
      ],
      "outputType": "array"
    },
    "data_time": {
      "meta": [
        {
          "type": "text",
          "name": "id_times"
        },
        {
          "type": "text",
          "name": "nome_time"
        },
        {
          "type": "text",
          "name": "descricao_time"
        },
        {
          "type": "number",
          "name": "criado_por_time"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "status_time"
        },
        {
          "type": "number",
          "name": "empresa_times"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        }
      ],
      "outputType": "array"
    },
    "repeatmembros": {
      "meta": [
        {
          "type": "text",
          "name": "id_times_membros"
        },
        {
          "type": "number",
          "name": "membro_time"
        },
        {
          "type": "number",
          "name": "board_time"
        },
        {
          "type": "text",
          "name": "status_membro"
        },
        {
          "type": "number",
          "name": "empresa_membro"
        },
        {
          "type": "number",
          "name": "time"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        }
      ],
      "outputType": "array"
    },
    "repeat_cards_times": {
      "meta": [
        {
          "type": "text",
          "name": "id_times"
        },
        {
          "type": "text",
          "name": "nome_time"
        },
        {
          "type": "text",
          "name": "descricao_time"
        },
        {
          "type": "number",
          "name": "criado_por_time"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "status_time"
        },
        {
          "type": "number",
          "name": "empresa_times"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        }
      ],
      "outputType": "array"
    }
  },
  "funildevendas": {
    "repeat_funil": {
      "meta": [
        {
          "type": "text",
          "name": "id_board"
        },
        {
          "type": "datetime",
          "name": "created_at_board"
        },
        {
          "type": "text",
          "name": "nome_board"
        },
        {
          "type": "text",
          "name": "tipo_board"
        },
        {
          "type": "number",
          "name": "criado_por_board"
        },
        {
          "type": "text",
          "name": "descricao_board"
        },
        {
          "type": "number",
          "name": "time"
        },
        {
          "type": "number",
          "name": "empresa_board"
        }
      ],
      "outputType": "array"
    },
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "data_funil": {
      "meta": [
        {
          "type": "text",
          "name": "id_board"
        },
        {
          "type": "text",
          "name": "nome_board"
        },
        {
          "type": "text",
          "name": "tipo_board"
        },
        {
          "type": "text",
          "name": "descricao_board"
        },
        {
          "type": "number",
          "name": "time"
        },
        {
          "type": "number",
          "name": "empresa_board"
        },
        {
          "type": "text",
          "name": "status_board"
        },
        {
          "type": "text",
          "name": "nome_time"
        },
        {
          "type": "text",
          "name": "descricao_time"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "name": "lists",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_board_lists"
            },
            {
              "type": "datetime",
              "name": "created_at_board_lists"
            },
            {
              "type": "number",
              "name": "board"
            },
            {
              "type": "text",
              "name": "status_list"
            },
            {
              "type": "text",
              "name": "tpo_list"
            },
            {
              "type": "text",
              "name": "nome_list"
            },
            {
              "type": "number",
              "name": "empresa_list"
            }
          ]
        },
        {
          "name": "times_membros",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_times_membros"
            },
            {
              "type": "number",
              "name": "membro_time"
            },
            {
              "type": "number",
              "name": "board_time"
            },
            {
              "type": "number",
              "name": "empresa_membro"
            },
            {
              "type": "number",
              "name": "time"
            },
            {
              "type": "text",
              "name": "nome_tratamento"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "datastore_funil": [
      {
        "type": "text",
        "name": "id_funil"
      }
    ],
    "cookies": [
      {
        "type": "number",
        "name": "id_funil"
      }
    ],
    "id_funil_selecionado": [
      {
        "type": "text",
        "name": "id"
      }
    ]
  },
  "boardfunil": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "datastore_funil": [
      {
        "type": "text",
        "name": "id_funil"
      }
    ],
    "cookies": [
      {
        "type": "text",
        "name": "id_funil"
      }
    ],
    "repeat_listas": {
      "meta": [
        {
          "type": "text",
          "name": "id_board_lists"
        },
        {
          "type": "number",
          "name": "board"
        },
        {
          "type": "text",
          "name": "status_list"
        },
        {
          "type": "text",
          "name": "tpo_list"
        },
        {
          "type": "text",
          "name": "nome_list"
        },
        {
          "type": "number",
          "name": "empresa_list"
        },
        {
          "name": "board_cards",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_card"
            },
            {
              "type": "text",
              "name": "status_card"
            },
            {
              "type": "number",
              "name": "board_list"
            },
            {
              "type": "number",
              "name": "empresa_card"
            },
            {
              "type": "number",
              "name": "criado_por"
            },
            {
              "type": "number",
              "name": "resposavel_card"
            },
            {
              "type": "text",
              "name": "nome_lead"
            },
            {
              "type": "text",
              "name": "whats_lead"
            },
            {
              "type": "text",
              "name": "email_lead"
            },
            {
              "type": "number",
              "name": "curso_lead"
            },
            {
              "type": "text",
              "name": "nome_curso"
            },
            {
              "type": "text",
              "name": "tipo_curso"
            },
            {
              "type": "text",
              "name": "modalidade"
            },
            {
              "type": "text",
              "name": "grau"
            },
            {
              "type": "text",
              "name": "area_atuaca"
            },
            {
              "type": "text",
              "name": "duracao"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_lista_funil": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "text",
          "name": "id_board_lists"
        },
        {
          "type": "number",
          "name": "board"
        },
        {
          "type": "text",
          "name": "status_list"
        },
        {
          "type": "text",
          "name": "tpo_list"
        },
        {
          "type": "text",
          "name": "nome_list"
        },
        {
          "type": "number",
          "name": "empresa_list"
        },
        {
          "name": "board_cards",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_card"
            },
            {
              "type": "text",
              "name": "status_card"
            },
            {
              "type": "number",
              "name": "board_list"
            },
            {
              "type": "number",
              "name": "empresa_card"
            },
            {
              "type": "number",
              "name": "criado_por"
            },
            {
              "type": "number",
              "name": "resposavel_card"
            },
            {
              "type": "text",
              "name": "nome_lead"
            },
            {
              "type": "text",
              "name": "whats_lead"
            },
            {
              "type": "text",
              "name": "email_lead"
            },
            {
              "type": "number",
              "name": "curso_lead"
            },
            {
              "type": "text",
              "name": "nome_curso"
            },
            {
              "type": "text",
              "name": "tipo_curso"
            },
            {
              "type": "text",
              "name": "modalidade"
            },
            {
              "type": "text",
              "name": "grau"
            },
            {
              "type": "text",
              "name": "area_atuaca"
            },
            {
              "type": "text",
              "name": "duracao"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_card": {
      "meta": [
        {
          "type": "text",
          "name": "id_card"
        },
        {
          "type": "text",
          "name": "status_card"
        },
        {
          "type": "number",
          "name": "board_list"
        },
        {
          "type": "number",
          "name": "empresa_card"
        },
        {
          "type": "number",
          "name": "criado_por"
        },
        {
          "type": "number",
          "name": "resposavel_card"
        },
        {
          "type": "text",
          "name": "nome_lead"
        },
        {
          "type": "text",
          "name": "whats_lead"
        },
        {
          "type": "text",
          "name": "email_lead"
        },
        {
          "type": "number",
          "name": "curso_lead"
        }
      ],
      "outputType": "array"
    },
    "repeat_cards": {
      "meta": [
        {
          "type": "text",
          "name": "id_card"
        },
        {
          "type": "text",
          "name": "status_card"
        },
        {
          "type": "number",
          "name": "board_list"
        },
        {
          "type": "number",
          "name": "empresa_card"
        },
        {
          "type": "number",
          "name": "criado_por"
        },
        {
          "type": "number",
          "name": "resposavel_card"
        },
        {
          "type": "text",
          "name": "nome_lead"
        },
        {
          "type": "text",
          "name": "whats_lead"
        },
        {
          "type": "text",
          "name": "email_lead"
        },
        {
          "type": "number",
          "name": "curso_lead"
        },
        {
          "type": "text",
          "name": "nome_curso"
        },
        {
          "type": "text",
          "name": "tipo_curso"
        },
        {
          "type": "text",
          "name": "modalidade"
        },
        {
          "type": "text",
          "name": "grau"
        },
        {
          "type": "text",
          "name": "area_atuaca"
        },
        {
          "type": "text",
          "name": "duracao"
        }
      ],
      "outputType": "array"
    },
    "data_filtr0_card": {
      "meta": [
        {
          "type": "text",
          "name": "id_card"
        },
        {
          "type": "text",
          "name": "status_card"
        },
        {
          "type": "number",
          "name": "board_list"
        },
        {
          "type": "number",
          "name": "empresa_card"
        },
        {
          "type": "number",
          "name": "criado_por"
        },
        {
          "type": "number",
          "name": "resposavel_card"
        },
        {
          "type": "text",
          "name": "nome_lead"
        },
        {
          "type": "text",
          "name": "whats_lead"
        },
        {
          "type": "text",
          "name": "email_lead"
        },
        {
          "type": "number",
          "name": "curso_lead"
        },
        {
          "type": "text",
          "name": "nome_curso"
        },
        {
          "type": "text",
          "name": "tipo_curso"
        },
        {
          "type": "text",
          "name": "modalidade"
        },
        {
          "type": "text",
          "name": "grau"
        },
        {
          "type": "text",
          "name": "area_atuaca"
        },
        {
          "type": "text",
          "name": "duracao"
        }
      ],
      "outputType": "array"
    },
    "data_filtro_card": {
      "meta": [
        {
          "type": "text",
          "name": "id_card"
        },
        {
          "type": "text",
          "name": "status_card"
        },
        {
          "type": "number",
          "name": "board_list"
        },
        {
          "type": "number",
          "name": "empresa_card"
        },
        {
          "type": "number",
          "name": "criado_por"
        },
        {
          "type": "number",
          "name": "resposavel_card"
        },
        {
          "type": "text",
          "name": "nome_lead"
        },
        {
          "type": "text",
          "name": "whats_lead"
        },
        {
          "type": "text",
          "name": "email_lead"
        },
        {
          "type": "number",
          "name": "curso_lead"
        },
        {
          "type": "text",
          "name": "nome_curso"
        },
        {
          "type": "text",
          "name": "tipo_curso"
        },
        {
          "type": "text",
          "name": "modalidade"
        },
        {
          "type": "text",
          "name": "grau"
        },
        {
          "type": "text",
          "name": "area_atuaca"
        },
        {
          "type": "text",
          "name": "duracao"
        }
      ],
      "outputType": "array"
    }
  }
});
