import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {CdkOverlayOrigin, ConnectedPosition, Overlay} from "@angular/cdk/overlay";
import {DynamicPageCollapseChangeEvent} from "@fundamental-ngx/platform";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('overlay')
  overlay: ElementRef<HTMLElement>;

  fullscreen = false;

  onCollapseChange(event: DynamicPageCollapseChangeEvent): void {
    console.log('collapse changed');
  }

  resizeClicked(event: Event): void {
    event.stopPropagation();
  }

  openPage(): void {
    this.fullscreen = true;
    this.overlay.nativeElement.style.width = '100%';
  }
  closePage(event: Event): void {
    event.stopPropagation();
    this.fullscreen = false;
    this.overlay.nativeElement.style.width = '0%';
  }
}
