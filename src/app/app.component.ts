import { Component } from '@angular/core';
import { LibelleService } from './services/libelle.service';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeBonder-FrontEnd-Test';

  constructor(private readonly libelleService: LibelleService, private readonly store: Store){
  }

  ngOnInit(){
    this.libelleService.getLibelleListFromCms().subscribe(() => {
      this.libelleService.getLibelleList('textIntroduction');
      this.libelleService.getLibelleList('choiceMenu');
      this.libelleService.getLibelleList('header');
      this.libelleService.getLibelleList('footer');
      this.libelleService.getLibelleList('socialNetworks');
      this.libelleService.getLibelleList('member');
    });

  }
}
