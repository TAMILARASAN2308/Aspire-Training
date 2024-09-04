import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsPageComponent } from './destinations-page.component';

describe('DestinationsPageComponent', () => {
  let component: DestinationsPageComponent;
  let fixture: ComponentFixture<DestinationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
