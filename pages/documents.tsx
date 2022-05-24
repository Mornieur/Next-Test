import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Link from "next/link";
import { NextPage } from "next";

const Documents: NextPage = () => {
  const { isLoading, error, data, isSuccess, isError } = useQuery(
    "RepoData",
    () =>
      fetch(
        "https://b0bc-8-242-12-114.ngrok.io/grades/reportCard/mobile/5256"
      ).then((res) => res.json())
  );

  console.error(error);
  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {isError && <h1>Deu erro!</h1>}
      {isSuccess && <h1>Deu certo e o nome é {data.name}</h1>}

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Documents;
