import { Subject } from "rxjs";
import { Post } from "./../model/post";
import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { takeUntil } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostService {
  posts: Post[] = [];
  backendURL = environment.backendAPI;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get(`${this.backendURL}/posts`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => console.log(res));
  }
}