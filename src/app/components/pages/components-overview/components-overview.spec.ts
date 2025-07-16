import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsOverview } from './components-overview';

describe('ComponentsOverview', () => {
  let component: ComponentsOverview;
  let fixture: ComponentFixture<ComponentsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
