# Golden Cut concept site

Private, unapproved German-language website concept for a local salon prospect in
Hamburg-Harburg. This is not the official Golden Cut website and must not be published or
deployed as one.

## Installation

Requirements: Node.js 18.18 or newer and npm.

From this directory, install the dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

The app is available at `http://localhost:3000`.

## Production build

Create an optimized production build:

```bash
npm run build
```

Start the built app:

```bash
npm run start
```

## Edit the concept

All editable business data and page content lives in
`src/lib/golden-cut-config.ts`. Local placeholder artwork lives in
`public/golden-cut/`. The current generated editorial images are concept assets, not
photographs of the actual salon; replace them with owner-approved or properly licensed
photography before publication.

Before publication, confirm the business name, address, phone number, opening hours,
services, prices, photography, contact workflow, and legal texts with Golden Cut. The
opening hours and source rating are provisional; the rating is intentionally not
displayed. The appointment form is a demo interaction only and is not connected to the
salon.
