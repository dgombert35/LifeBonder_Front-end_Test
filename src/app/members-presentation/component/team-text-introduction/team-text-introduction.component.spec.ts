import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTextIntroductionComponent } from './team-text-introduction.component';

describe('TeamTextIntroductionComponent', () => {
  let component: TeamTextIntroductionComponent;
  let fixture: ComponentFixture<TeamTextIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTextIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTextIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
