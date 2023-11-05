import { UseGithubUser } from "./UseGithubUser";

export const GithubUser = ({username}) => {
  const { data } = UseGithubUser(username);
  return (
    <div>
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url}/>
    </div>
  );
};