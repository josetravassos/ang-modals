import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal-basic/modal.service';
import { ModalWithFactoryService } from './modal-with-factory/modal.service';
import {User} from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Modal';

  constructor(private modalService: ModalService, private modalWithFactory: ModalWithFactoryService) {}

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    console.log('passou app')
  }

  public openDialogZ(){
    this.modalWithFactory.create(User, {header: 'This is the header'});
      }
}
