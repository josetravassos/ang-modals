import { Component, ViewChild, OnInit, ComponentFactoryResolver, HostListener } from '@angular/core';
import { ModalDirective } from './modal.directive';

@Component({
  selector: 'modal-with-factory',
  templateUrl: './modal-with-factory.component.html',
  styleUrls: ['./modal-with-factory.component.scss']
})
export class ModalWithFactoryComponent implements OnInit {
  headerText = '';
  bodyText = '';
  confirmText = 'OK';
  cancelText = 'CANCEL';
  confirm: () => Promise<any>;
  onCancel: () => void;
  isPending = false;
  content: any;
  modalService: any;
  obj: {} = {};
  _id: any;

  @ViewChild(ModalDirective)
  contentHolder!: ModalDirective;

  @HostListener('window:keydown', ['$event']) onkeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(this.content);
    setTimeout(() => {
      this.contentHolder.viewContainerRef.createComponent(componentRef);
    }, 0);
   
  }

  setup(component: any, config: any, service: any) {
    this.content = component;
    this.headerText = config.headerText;
    this.bodyText = config.bodyText;
    this.confirmText = config.confirmText;
    this.cancelText = config.cancelText;
    this.modalService = service;
    this.obj = config.obj;
    this.confirm = config.confirm;
  }

  handleConfirm(): void {
    if (this.confirm !== undefined) {
      this.isPending = true;
      this.confirm()
        .then(() => {
          this.modalService.close(this._id);
        })
        .catch(() => {
          this.isPending = false;
        });
    } else {
      this.modalService.close(this._id);
    }
  }

  close(){
    this.modalService.close(this._id);
  }
}


