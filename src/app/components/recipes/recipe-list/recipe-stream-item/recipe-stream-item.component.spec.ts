import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStreamItemComponent } from './recipe-stream-item.component';

describe('RecipeStreamItemComponent', () => {
  let component: RecipeStreamItemComponent;
  let fixture: ComponentFixture<RecipeStreamItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStreamItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeStreamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
