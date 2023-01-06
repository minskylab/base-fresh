import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

import DarkModeButton from "../islands/DarkModeButton.tsx";
import { usersGraphql } from "../graphql/queries.ts";
import { fetchUsers } from "../utils/fetchUsers.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext): Promise<Response> {
    const response: Response = await fetchUsers(usersGraphql);

    if (!response.ok) {
      return ctx.render(null);
    }
    const { data } = await response.json();
    return ctx.render(data);
  },
};

type Users = {
  id: string;
  name: string;
  email: string;
};

export default function Home({ data }: PageProps) {
  const users: Users[] = data?.users?.data;

  return (
    <html>
      <div class="h-screen grid place-items-center dark:bg-black dark:text-white">
        <Head>
          <title>Fresh Base</title>
        </Head>
        <div class="p-4 w-96">
          <div class="flex justify-between items-center">
            <p class="my-6 text-4xl font-bold">Hello MINSKY!</p>
            <DarkModeButton />
          </div>
          <ul class="px-4 list-disc list-inside">
            {users?.map((d) => {
              return <li>{d.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </html>
  );
}
