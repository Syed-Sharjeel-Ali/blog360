module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "192.168.4.167"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      // },
    },
    debug: false,
  },
});
