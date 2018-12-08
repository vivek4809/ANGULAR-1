import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPicComponent } from './wall-pic.component';

describe('WallPicComponent', () => {
  let component: WallPicComponent;
  let fixture: ComponentFixture<WallPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
