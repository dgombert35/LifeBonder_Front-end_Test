import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

//import header-banner
import { HeaderComponent } from './header-banner/container/header/header.component';
import { MenuComponent } from './header-banner/container/menu/menu.component';
import { MenuChoiceComponent } from './header-banner/component/menu-choice/menu-choice.component';

//import team-member-presentations
import { TeamTextIntroductionComponent } from './members-presentation/component/team-text-introduction/team-text-introduction.component';
import { TeamMembersListComponent } from './members-presentation/container/team-members-list/team-members-list.component';
import { TeamMemberDetailComponent } from './members-presentation/component//team-member-detail/team-member-detail.component';
import { TeamMemberPresentationComponent } from './members-presentation/container/team-member-presentation/team-member-presentation.component';
import { SocialNetworksComponent } from './members-presentation/component/social-networks/social-networks.component';

// import services
import { LibelleService } from './services/libelle.service';
import { ObjectsService } from './services/objects.service';

//imoprt pipes
import { LibellePipe } from './Pipes/libelle.pipe';

import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuChoiceComponent,
    TeamTextIntroductionComponent,
    TeamMembersListComponent,
    TeamMemberDetailComponent,
    TeamMemberPresentationComponent,
    SocialNetworksComponent,
    LibellePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ObjectsService, LibelleService, LibellePipe, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
