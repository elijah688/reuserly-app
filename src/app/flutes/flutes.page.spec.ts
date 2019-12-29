import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlutesPage } from './flutes.page';

describe('FlutesPage', () => {
  let component: FlutesPage;
  let fixture: ComponentFixture<FlutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlutesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
