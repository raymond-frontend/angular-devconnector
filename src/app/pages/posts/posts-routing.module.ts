import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts.component";
import { AuthGuardGuard } from "src/app/core/auth/guards/auth-guard.guard";

const routes: Routes = [
  { path: "", component: PostsComponent, canActivate: [AuthGuardGuard] },
  {
    path: "post-list",
    loadChildren: () =>
      import("./post-list/post-list.module").then((m) => m.PostListModule),
  },
  {
    path: "create-post",
    loadChildren: () =>
      import("./create-post/create-post.module").then(
        (m) => m.CreatePostModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard],
})
export class PostsRoutingModule {}
