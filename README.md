<div align="center">
	<img src=".github/logo.svg" width="128">
	<p>Create and manage your basketball leagues.</p>
</div>

## Features

- **League Structure** - Manage the structure of your leagues whether it's a round-robin or knockout tournament.
- **Teams and Players** - Add teams and players to your leagues and manage their records and statistics.
- **Schedule** - Manage the schedule of matches/games including start time, venue, and their results.
- **Public Site** - Generate a publicly available website allowing your fans to follow what's happening in your leagues.

## Development

Install `node_modules`:

```bash
pnpm install --frozen-lockfile
```

Create and fill out a `.env` file based on `.env.example`.

Generate prisma client:

```bash
pnpm prisma generate
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.