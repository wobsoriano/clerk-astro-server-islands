<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and Astro Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/astro">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/astro" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any Astro application.

After following the quickstart you'll have learned how to:

- Integrate Clerk authentication with Astro
- Use Clerk components (SignedIn, SignedOut, UserButton, SignInButton)
- Protect routes with middleware
- Use server islands for dynamic authentication on prerendered pages
- Implement role-based and permission-based access control with the Protect component
- Access user data and OAuth tokens from API endpoints

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-astro-quickstart&env=PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fastro&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fastro)

## Running the template

```bash
git clone https://github.com/clerk/clerk-astro-quickstart
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-astro-app-quickstart).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-astro-quickstart) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env` file](./.env.example).

4. `pnpm install` the required dependencies.

5. `pnpm dev` to launch the development server.

## Server Islands Examples

This quickstart includes several examples demonstrating Astro Server Islands with Clerk authentication:

### What are Server Islands?

Server islands allow you to have dynamic, server-rendered content that loads at request time. They work on both:
- **Prerendered pages**: Add dynamic content to static pages (e.g., auth checks)
- **SSR pages**: Defer expensive operations for faster initial page loads

### Example Pages

1. **[/prerendered](http://localhost:4321/prerendered)** - Prerendered page with server islands
   - Demonstrates `SignedIn`, `SignedOut`, and `Protect` components with `server:defer`
   - Shows authentication status checked at request time on a static page
   - Includes role-based and permission-based access control examples
   - Uses the `protect-fallback` slot for unauthorized states

2. **[/ssr-example](http://localhost:4321/ssr-example)** - SSR page with server islands
   - Non-prerendered page that's fully server-side rendered on every request
   - Shows how server islands work on regular SSR pages for deferred loading
   - Demonstrates faster initial page renders by deferring auth checks

### Key Concepts

- **`export const prerender = true`** - Marks a page for prerendering at build time
- **`server:defer` directive** - Creates a server island that executes at request time
- **`protect-fallback` slot** - Used with Protect component to show content when authorization fails
- **Dynamic authentication on static pages** - Server islands check auth status at request time, even on prerendered pages

## Learn more

To learn more about Clerk and Astro, check out the following resources:

- [Quickstart: Get started with Astro and Clerk](https://clerk.com/docs/quickstarts/astro?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-astro-quickstart)

- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-astro-quickstart)
- [Astro Documentation](https://docs.astro.build/)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
