# rent-a-chair Docker security

This repository contains experimental applications. Use the included Compose configuration **locally only**, not as a public production deployment.

```bash
cp .env.example .env
# Generate four independent strong values with: openssl rand -hex 32
# Set POSTGRES_PASSWORD, PAYLOAD_SECRET, JWT_SECRET and COOKIE_SECRET in .env.
docker compose config -q
docker compose up --build
```

Only application ports 3000, 3001 and 9000 are bound to loopback. PostgreSQL and Redis have no published host ports. The root Compose removes the unused MongoDB service because the active Payload configuration (`apps/cms/src/payload.config.ts`) uses PostgreSQL via `DATABASE_URI`. The standalone CMS Compose has likewise been aligned with PostgreSQL.

This changes service topology. If an existing deployment genuinely stores content in MongoDB, stop and assess/migrate data before adopting this Compose. Do not delete old MongoDB volumes. New database credentials do not rotate PostgreSQL users in existing volumes. All four secrets must be provided before startup, and production URLs/CORS must be configured for the actual deployment.

App Docker builds now use supported Node 22 and non-root runtime users and exclude local .env files from each build context. The CMS uses its pnpm lockfile, commerce uses npm ci, and the web app still needs its own lockfile committed for reproducible builds. The Docker images are not verified buildable here. Review older application libraries, Next versions, migration/bootstrap workflow and CVEs before production.
