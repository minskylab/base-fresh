export const fetchUsers = async (query: string) => {
  return await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  });
};
