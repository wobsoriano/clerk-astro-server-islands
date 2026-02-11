import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const { userId } = locals.auth();

  return Response.json({
    userId: userId || null,
    authenticated: !!userId,
  });
};
