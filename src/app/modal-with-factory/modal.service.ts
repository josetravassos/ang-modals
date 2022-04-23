import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ModalWithFactoryComponent } from './modal-with-factory.component';

@Injectable()
export class ModalWithFactoryService {
  private dialogSubject: Subject<any> = new Subject<any>();
  public dialogObservable$: Observable<any>;
  counter: number = 1;
  dialogs: any = [];

  constructor(private compFactRes: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
    this.dialogObservable$ = this.dialogSubject.asObservable();
  }

  public create(comp:any, config:any) {
    const compRef = this.compFactRes.resolveComponentFactory(ModalWithFactoryComponent).create(this.injector);
    const id = "dialog" + this.counter++;
    compRef.instance.__id = id;
    compRef.instance.setup(comp, config, this);
    this.dialogs[id] = { compRef: compRef, hostView: compRef.hostView };

    this.appRef.attachView(compRef.hostView);

    const ele = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(ele);
  }

  close(id: string) {
    if (this.dialogs[id]) {
      this.dialogs[id].compRef.destroy();
      this.appRef.detachView(this.dialogs[id].hostView);
}
  }
}