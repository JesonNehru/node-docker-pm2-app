module.exports = {
  apps: [{
    name: "node-app",
    script: "./app.js",
    instances: 1,
    autorestart: true
  }]
};
