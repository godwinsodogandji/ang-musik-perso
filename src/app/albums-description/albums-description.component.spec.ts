import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDescriptionComponent } from './albums-description.component';

describe('AlbumsDescriptionComponent', () => {
  let component: AlbumsDescriptionComponent;
  let fixture: ComponentFixture<AlbumsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
