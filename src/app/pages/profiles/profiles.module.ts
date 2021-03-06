import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfilesRoutingModule } from "./profiles-routing.module";
import { ProfilesComponent } from "./profiles.component";
import { ProfileModule } from "./profile/profile.module";

@NgModule({
  declarations: [ProfilesComponent],
  imports: [CommonModule, ProfilesRoutingModule, ProfileModule],
})
export class ProfilesModule {}
