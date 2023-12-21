import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaventryComponentComponent } from './naventry-component.component';

describe('NaventryComponentComponent', () => {
  let component: NaventryComponentComponent;
  let fixture: ComponentFixture<NaventryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaventryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaventryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
