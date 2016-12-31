import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '45ffedcfa721a3fd492a';
    private client_secret = '9e6fa8be5e20ed21062e3f1c458d24905416bd7f';

   
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }
      getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
}