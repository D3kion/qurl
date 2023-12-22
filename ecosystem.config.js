module.exports = {
  apps: [
    {
      name: "qURL | API",
      cwd: "./apps/api",
      script: "npm",
      args: "run dev",
      // env_production: {
      //   NODE_ENV: "production",
      // },
      // env_development: {
      //   NODE_ENV: "development",
      // },
    },
    {
      name: "qURL | Web",
      cwd: "./apps/web",
      script: "npm",
      args: "run dev",
      // env_production: {
      //   NODE_ENV: "production",
      // },
      // env_development: {
      //   NODE_ENV: "development",
      // },
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
