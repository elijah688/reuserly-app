import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrawsPage } from './straws.page';

describe('StrawsPage', () => {
  let component: StrawsPage;
  let fixture: ComponentFixture<StrawsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrawsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
