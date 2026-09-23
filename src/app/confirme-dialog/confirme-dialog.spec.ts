import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeDialog } from './confirme-dialog';

describe('ConfirmeDialog', () => {
  let component: ConfirmeDialog;
  let fixture: ComponentFixture<ConfirmeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
