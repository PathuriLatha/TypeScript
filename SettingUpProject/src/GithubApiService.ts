import * as request from "request";
import { User } from "./User";
import { Repo } from "./Repo";


let options : any = {
  headers: {
    "User-Agent": "request"
  },
  json: true
}

export class GithubApiService{
  getUserInfo(userName: string, callback: (user: User) => any){
    // request.get("https://api.github.com/users/"+ userName, (response: any) => {
    request.get("https://api.github.com/users/"+ userName, options, (error: any, response: any, body: any) => {
      // console.log(error);
     // console.log(response);
     //let user = new User(JSON.parse(body));
     let user = new User(body);
     //console.log(user);
     callback(user);
    })
  }
  getRepos(userName: string, callback: (repos: Repo[]) => any){
    request.get("https://api.github.com/users/"+ userName+"/repos", options, (error: any, response: any, body: any) => {
     // let repoArray = body;
      let repos = body.map((repo: any) => new Repo(repo));
      callback(repos);
    });
  }
}
