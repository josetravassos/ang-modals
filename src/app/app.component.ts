import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  Input,
  OnInit,
  Renderer2,
  RendererFactory2,
} from "@angular/core";
import { ModalService } from "./modal-basic/modal.service";
import { ModalWithFactoryService } from "./modal-with-factory/modal.service";
import { User } from "./user/user.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Angular Modal";

  @Input() tacoScriptId = "taco-js";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private rendererFactory: RendererFactory2,
    private modalService: ModalService,
    private modalWithFactory: ModalWithFactoryService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const renderer = this.rendererFactory.createRenderer(null, null);
    loadScript(
      `https://cc3cdndev.blob.core.windows.net/design-system/latest/taco-components/bundled.js`,
      this.document,
      renderer,
      this.tacoScriptId
    );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    console.log("passou app");
  }

  public openModalWithFactory() {
    this.modalWithFactory.create(User, {
      headerText: "Modal with Factory",
      bodyText: "Content from modal with factory",
      confirmText: "Confirm",
      cancelText: "Cancel",
      confirm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log('resolve'));
          }, 100);
        });
      },
    });
  }
}

export const loadScript = (
  url: string,
  document: Document,
  renderer: Renderer2,
  id: string
) => {
  if (!isScriptInDOM(id, url, document)) {
    const script = renderer.createElement("script") as HTMLScriptElement;
    script.id = id;
    script.type = "text/javascript";
    script.src = url;
    script.async = true;
    script.defer = true;

    renderer.appendChild(document.body, script);
  }
};

/**
 * Checks if the script already exists in the DOM by looking for an id or matching src
 * @returns boolean
 */
export const isScriptInDOM = (id: string, src: string, document: Document) => {
  const scriptElArray = Array.from(document.querySelectorAll("script"));

  return scriptElArray.some((scriptEl) => {
    if (id) {
      return id === scriptEl.id;
    }

    return src === scriptEl.src;
  });
};
