import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGridItemComponent } from './project-grid-item.component';

describe('ProjectGridItemComponent', () => {
  let component: ProjectGridItemComponent;
  let fixture: ComponentFixture<ProjectGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGridItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
