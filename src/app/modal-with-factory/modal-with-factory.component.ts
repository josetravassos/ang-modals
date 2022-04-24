import { Component, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ModalDirective } from './modal.directive';

@Component({
  selector: 'modal-with-factory',
  templateUrl: './modal-with-factory.component.html',
  styleUrls: ['./modal-with-factory.component.scss']
})
export class ModalWithFactoryComponent implements OnInit {

  header: string = "";
  content: any;
  modalService: any;
  _id: any;

  @ViewChild(ModalDirective)
  contentHolder!: ModalDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(this.content);
    setTimeout(() => {
      this.contentHolder.viewContainerRef.createComponent(componentRef);
    }, 0);
   
  }

  setup(component:any, config:any, service:any) {
    this.content = component;
    this.header = config.header;
    this.modalService = service;
  }

  close(){
    this.modalService.close(this._id);
  }
}


