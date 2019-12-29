import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtectorsPage } from './protectors.page';

describe('ProtectorsPage', () => {
  let component: ProtectorsPage;
  let fixture: ComponentFixture<ProtectorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
