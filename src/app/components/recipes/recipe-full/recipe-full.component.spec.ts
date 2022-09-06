import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFullComponent } from './recipe-full.component';

describe('RecipeFullComponent', () => {
  let component: RecipeFullComponent;
  let fixture: ComponentFixture<RecipeFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
