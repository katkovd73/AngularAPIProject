import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('footer text verified', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const footerText = footerElement.querySelector('mat-toolbar')!;
    expect(footerText.textContent).toEqual('Test-Driven Development Test Application');
  })
});
