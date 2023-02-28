import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { RecipesExpenseLineComponent } from './recipes-expense-line.component';

describe('RecipesExpenseLineComponent', () => {
  let component: RecipesExpenseLineComponent;
  let fixture: ComponentFixture<RecipesExpenseLineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesExpenseLineComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesExpenseLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
