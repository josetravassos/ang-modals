import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      if (!this.id) {
          console.error('modal must have an id');
          return;
      }

      // element at the bottom of page to be displayed above everything else
      document.body.appendChild(this.element);

      // close on background click
      this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
          if (el.target.className === 'app-modal') {
              this.modalDisplayNone();
          }
      });

       // pass an instance of "this" modal component to the service to be able to access modal component's methods
      this.modalService.add(this);

  }

  // remove service when destroyed
  ngOnDestroy(): void {
      this.modalService.remove(this.id as string);
      this.element.remove();
      console.log('passou no destroy')
  }
 
  modalDisplayBlock(): void {
      this.element.style.display = 'block';
      document.body.classList.add('app-modal-open');
  }
 
  modalDisplayNone(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('app-modal-open');
      console.log('passou modal component')
  }
}
