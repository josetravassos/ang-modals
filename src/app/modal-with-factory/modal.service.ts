import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ModalWithFactoryComponent } from './modal-with-factory.component';

@Injectable()
export class ModalWithFactoryService {
  private modalSubject: Subject<any> = new Subject<any>();
  public modalObservable$: Observable<any>;
  counter: number = 1;
  modals: any = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
    this.modalObservable$ = this.modalSubject.asObservable();
  }

  public create(comp:any, config:any) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(ModalWithFactoryComponent).create(this.injector);
    const id = "modal" + this.counter++;
    componentRef.instance._id = id;
    componentRef.instance.setup(comp, config, this);
    this.modals[id] = { componentRef: componentRef, hostView: componentRef.hostView };

    this.appRef.attachView(componentRef.hostView);

    const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(element);
  }

  close(id: string) {
    if (this.modals[id]) {
      this.modals[id].componentRef.destroy();
      this.appRef.detachView(this.modals[id].hostView);
}
  }
}