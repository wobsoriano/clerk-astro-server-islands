## Clerk + Astro Server Islands Examples

This quickstart demonstrates Astro Server Islands with Clerk authentication components. All Clerk components (`SignedIn`, `SignedOut`, `Protect`, `UserButton`) fully support server islands.

### What are Server Islands?

Server islands allow you to have dynamic, server-rendered content that loads at request time. They work on both:
- **Prerendered pages** (`export const prerender = true`): Add dynamic content to static pages
- **SSR pages**: Defer expensive operations for faster initial page loads

### Example Pages

#### [/prerendered](http://localhost:4321/prerendered)
Static page with dynamic authentication via server islands. Includes:
- `SignedIn` / `SignedOut` components with `server:defer`
- `Protect` component for role-based access control (`role="admin"`)
- API route call demonstrating server-to-server cookie forwarding
- Direct server context access via `Astro.locals.auth()`
- Loading spinner fallbacks for all server islands

#### [/ssr-example](http://localhost:4321/ssr-example)
Fully server-rendered page showing deferred auth checks:
- Same server islands as prerendered page
- Demonstrates faster initial page render by deferring auth operations
- Shows server render timestamp that changes on each request

### Features Demonstrated

**Clerk Components with Server Islands:**
```astro
<SignedIn server:defer>
  <p>Authenticated content</p>
  <div slot="fallback"><LoadingSpinner /></div>
</SignedIn>

<Protect role="admin" server:defer>
  <p>Admin content</p>
  <div slot="protect-fallback">Access denied</div>
  <div slot="fallback"><LoadingSpinner /></div>
</Protect>
```

**API Route with Cookie Forwarding:**
```astro
<!-- Component fetches from /api/user -->
<UserFromAPI server:defer>
  <div slot="fallback"><LoadingSpinner /></div>
</UserFromAPI>
```

**Direct Server Context Access:**
```astro
---
const { userId } = Astro.locals.auth();
---
<p>User ID: {userId}</p>
```

### Key Concepts

- **`server:defer` directive** - Creates a server island that executes at request time
- **`protect-fallback` slot** - Shows content when authorization fails (separate from loading fallback)
- **`fallback` slot** - Shows loading state while server island loads
- **Server-to-server cookies** - Cookies automatically forwarded in server-side fetch requests
- **`Astro.locals.auth()`** - Access authentication context directly in server components

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
