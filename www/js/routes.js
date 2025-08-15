if (!dmx.routing) dmx.routing = {};
dmx.routing.router = 'hash';
dmx.routing.routes = [
  {
    "path": "/",
    "url": "./home.html"
  },
  {
    "path": "front/f/criar-conta",
    "url": "./criar-conta.html"
  },
  {
    "path": "/interno/backoffice",
    "url": "./interno/backoffice.html"
  },
  {
    "path": "/interno/home",
    "url": "./interno/home.html"
  }
]