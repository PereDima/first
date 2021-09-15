import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfnComponent } from './nfn.component';

describe('NfnComponent', () => {
  let component: NfnComponent;
  let fixture: ComponentFixture<NfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
