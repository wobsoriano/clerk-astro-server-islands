import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const { userId, isAuthenticated } = locals.auth();

  return Response.json({
    userId,
    authenticated: isAuthenticated,
  });
};
