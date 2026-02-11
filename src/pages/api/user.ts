import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const { userId } = locals.auth();

  return new Response(
    JSON.stringify({
      userId: userId || null,
      authenticated: !!userId,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
