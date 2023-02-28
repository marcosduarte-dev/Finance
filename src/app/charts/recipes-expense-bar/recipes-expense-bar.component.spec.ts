import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { RecipesExpenseBarComponent } from './recipes-expense-bar.component';

describe('RecipesExpenseBarComponent', () => {
  let component: RecipesExpenseBarComponent;
  let fixture: ComponentFixture<RecipesExpenseBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesExpenseBarComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesExpenseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
