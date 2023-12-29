export interface ServerConfig {
  // host: string
  port: number;
}

export interface DatabaseConfig {
  url: string;
}

export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 4200,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
});
