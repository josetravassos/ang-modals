import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ModalWithFactoryComponent } from './modal-with-factory.component';

@Injectable()
export class ModalWithFactoryService {
  private modalSubject: Subject<any> = new Subject<any>();
  public modalObservable$: Observable<any>;
  counter: number = 1;
  modals: any = [];

  constructor(private compFactRes: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
    this.modalObservable$ = this.modalSubject.asObservable();
  }

  public create(comp:any, config:any) {
    const compRef = this.compFactRes.resolveComponentFactory(ModalWithFactoryComponent).create(this.injector);
    const id = "modal" + this.counter++;
    compRef.instance._id = id;
    compRef.instance.setup(comp, config, this);
    this.modals[id] = { compRef: compRef, hostView: compRef.hostView };

    this.appRef.attachView(compRef.hostView);

    const ele = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(ele);
  }

  close(id: string) {
    if (this.modals[id]) {
      this.modals[id].compRef.destroy();
      this.appRef.detachView(this.modals[id].hostView);
}
  }
}