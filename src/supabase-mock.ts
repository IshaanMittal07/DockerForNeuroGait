// src/supabase-mock.ts
export const createClient = () => {
  return {
    from: () => ({
      select: async () => [{ id: 1, name: "Dummy User" }],
      insert: async (data: any) => data,
    }),
  };
};
