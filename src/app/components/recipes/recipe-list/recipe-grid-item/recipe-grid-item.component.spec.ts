import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGridItemComponent } from './recipe-grid-item.component';

describe('RecipeGridItemComponent', () => {
  let component: RecipeGridItemComponent;
  let fixture: ComponentFixture<RecipeGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeGridItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
