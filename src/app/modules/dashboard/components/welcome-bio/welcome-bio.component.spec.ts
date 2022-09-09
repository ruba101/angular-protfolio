import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBioComponent } from './welcome-bio.component';

describe('WelcomeBioComponent', () => {
  let component: WelcomeBioComponent;
  let fixture: ComponentFixture<WelcomeBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
