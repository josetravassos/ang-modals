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

  constructor(private compFacRes: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const compRef = this.compFacRes.resolveComponentFactory(this.content);
    setTimeout(() => {
      this.contentHolder.viewContainerRef.createComponent(compRef);
    }, 0);
   
  }

  setup(comp:any, config:any, service:any) {
    this.content = comp;
    this.header = config.header;
    this.modalService = service;
  }

  close(){
    this.modalService.close(this._id);
  }
}


