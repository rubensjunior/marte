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
  }
});
