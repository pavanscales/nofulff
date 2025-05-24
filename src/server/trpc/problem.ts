import { z } from "zod";
import { router, publicProcedure } from "../trpc"; // assuming you export this from somewhere

export const problemRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(5),
        description: z.string().optional(),
        tags: z.array(z.string()).max(5),
        context: z.string().min(10),
        impact: z.string().min(10),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const problem = await ctx.prisma.problem.create({
        data: {
          title: input.title,
          description: input.description,
          tags: input.tags,
          context: input.context,
          impact: input.impact,
        },
      });
      return problem;
    }),
});
