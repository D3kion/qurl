export default () => ({
  app: {
    // appName: 'qURL',
    baseUrl: process.env.APP_BASE_URL || 'http://localhost:4100',
  } satisfies AppConfig,
  server: {
    port: parseInt(process.env.PORT, 10) || 4200,
  } satisfies ServerConfig,
  database: {
    url: process.env.DATABASE_URL,
  } satisfies DatabaseConfig,
  auth: {
    jwtSecret: process.env.AUTH_JWT_SECRET || 'changeme',
    magicSecret: process.env.AUTH_MAGIC_SECRET || 'changemetoo',
  } satisfies AuthConfig,
});

export type AppConfig = {
  // appName: string;
  baseUrl: string;
};

export type ServerConfig = {
  // host: string
  port: number;
};

export type DatabaseConfig = {
  url: string;
};

export type AuthConfig = {
  jwtSecret: string;
  magicSecret: string;
};
