import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import $ from "jquery";
import 'rxjs/Rx';


import { User } from '../models/dataModels';

import { anime } from '../models/dataModels';
import { animeType } from '../models/dataModels';
import { ReturnData } from '../models/dataModels';

import * as localforage from "localforage"
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebMethod {

  self=this;

  constructor(public http: Http) {

  }

  // Load all github users
  loadUser(): Observable<User[]> {
      var githubApiUrl = 'https://api.github.com';
      return this.http.get(githubApiUrl +'/users')
      .map(res => <User[]>res.json());
  }
  // Load all github users
  Getanime(page,selectTypeItem,type2,lang): Observable<anime[]> {
      var url = 'http://gogogo.synology.me/api/anime/getdata.php?page='+page+'&type='+selectTypeItem +'&type2=' + type2 +'&lang=' + lang;
      return this.http.get(url)
      .map(res => <anime[]>res.json());
  }

  GetanimeType(page,selectTypeItem,type2,favoriteList,lang): Observable<animeType[]> {
      var url = 'http://gogogo.synology.me/api/anime/gettype.php?page='+page+'&type='+selectTypeItem +'&id='+favoriteList + '&type2=' + type2 +'&lang=' + lang;
      return this.http.get(url)
      .map(res => <animeType[]>res.json());
  }

  UpdateanimeLike(masterID)  {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 masterid: masterID
               });

      var url = 'http://gogogo.synology.me/api/anime/updatelike.php';

      return this.http.post(url,data,config);

  }


    AddanimeFavoriteCount(masterID)  {
        console.log("ADD"+masterID);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/anime/addfavorite.php';

        return this.http.post(url,data,config);
    }

    ReduceanimeFavoriteCount(masterID)  {

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/anime/reducefavorite.php';

        return this.http.post(url,data,config);
    }

    test() {

        console.log("test");
        return Observable.empty(null);

    }



  Addfavorite(anime,Addfavoritecallback,Removefavoritecallback) {
    let favoriteArr=[];
    let self=this;
    localforage.getItem('favoriteArr', function (err, value) {

      if($(value).length==0){

          favoriteArr.push(anime);
          localforage.setItem("favoriteArr",favoriteArr);
          self.AddanimeFavoriteCount(anime).subscribe(data => {
                Addfavoritecallback();
          })

      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(anime, favoriteArr) <0){

              favoriteArr.push(anime);
              localforage.setItem("favoriteArr",favoriteArr);
              self.AddanimeFavoriteCount(anime).subscribe(data => {
                    Addfavoritecallback();
              })

          }else{
              favoriteArr.splice( $.inArray(anime,favoriteArr) ,1 );
              localforage.setItem("favoriteArr",favoriteArr);

              self.ReduceanimeFavoriteCount(anime).subscribe(data => {
                    Removefavoritecallback();
              })

          }
      }
    });
  }

  Checkfavorite(anime,IsFavoriteCallback,NotFavoriteCallback) {
    let favoriteArr=[];

    localforage.getItem('favoriteArr', function (err, value) {
      if($(value).length==0){
          NotFavoriteCallback();
      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(anime, favoriteArr) <0){
              NotFavoriteCallback();
          }else{
              IsFavoriteCallback();
          }
      }
    });
  }

  Getfavorite(page,selectTypeItem,favoriteList,lang):Observable<anime[]> {
    console.log(favoriteList);
    var url = 'http://gogogo.synology.me/api/anime/getdata.php?page='+page+'&type='+selectTypeItem+"&id="+favoriteList+"&lang="+lang;
    return this.http.get(url)
    .map(res => <anime[]>res.json());

  }

  SaveLoginInfo(userid){

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 id: userid
               });

      var url = 'http://gogogo.synology.me/api/anime/savelogininfo.php';
      alert(url);
      return this.http.post(url,data,config);

  }
}
