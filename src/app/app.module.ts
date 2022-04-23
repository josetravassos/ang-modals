import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal-basic/modal.component';
import { ModalService } from './modal-basic/modal.service';
import { ModalWithFactoryService } from './modal-with-factory/modal.service';
import { ModalWithFactoryComponent } from './modal-with-factory/modal-with-factory.component';
import { ModalDirective } from './modal-with-factory/modal.directive';
import { User } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalWithFactoryComponent,
    ModalDirective,
    User
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService, ModalWithFactoryService],
  entryComponents: [ModalWithFactoryComponent, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
