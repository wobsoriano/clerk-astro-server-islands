import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getUser: defineAction({
    handler: async (_, context) => {
      const { userId } = context.locals.auth();

      return {
        userId: userId || null,
        authenticated: !!userId,
      };
    },
  }),
};
