import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberPresentationComponent } from './team-member-presentation.component';

describe('TeamMemberPresentationComponent', () => {
  let component: TeamMemberPresentationComponent;
  let fixture: ComponentFixture<TeamMemberPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
