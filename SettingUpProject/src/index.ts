import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

let svc = new GithubApiService();

/*
svc.getUserInfo("PathuriLatha", (user: User) => {
  console.log(user);
});

svc.getRepos("PathuriLatha", (repos: Repo[]) => {
  console.log(repos);
});
*/

if(process.argv.length < 3){
  console.log("user name is required pass userName throw command line arguments");
}
else{
  let userName = process.argv[2];
  svc.getUserInfo(userName, (user: User) => {
    svc.getRepos(userName, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
      let filterRepos = _.take(sortedRepos, 3);
      // user.repos = repos;
      // user.repos = sortedRepos;
      user.repos = filterRepos;
      console.log(user);
    })
  })
}

