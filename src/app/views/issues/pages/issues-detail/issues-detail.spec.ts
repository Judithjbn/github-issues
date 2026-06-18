import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesDetail } from './issues-detail';

describe('IssuesDetail', () => {
  let component: IssuesDetail;
  let fixture: ComponentFixture<IssuesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
