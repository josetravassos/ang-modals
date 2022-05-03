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
import { ComponentTest } from "./component-test/component-test.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Angular Modal";

  @Input() tacoScriptId = 'taco-js';
  @Input() tacoStyleId = 'taco-css';
  @Input() tacoIndexStyleId = 'taco-index-css';
  @Input() lottieScriptId = 'lottie-js';

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
      `/assets/bundled.js`,
      this.document,
      renderer,
      this.tacoScriptId
    );
    loadStyle(`https://cc3cdndev.blob.core.windows.net/design-system/latest/taco-styles/taco-index.css`, this.document, renderer, this.tacoIndexStyleId);
    loadStyle(`https://cc3cdndev.blob.core.windows.net/design-system/latest/taco-tokens/css/design-tokens-v1.css`, this.document, renderer, this.tacoStyleId);
    loadScript(`https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js`, this.document, renderer, this.lottieScriptId);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    console.log("passou app");
  }

  public openModalWithFactory() {
    this.modalWithFactory.create(ComponentTest, {
      headerText: "Modal with Factory",
      confirmText: "Save",
      cancelText: "Close without saving",
      confirm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log('resolved'));
          }, 1000);
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

export const loadStyle = (url: string, document: Document, renderer: Renderer2, id: string) => {
  if (!document.getElementById(id)) {
    const link = renderer.createElement('link') as HTMLLinkElement;
    link.setAttribute('id', id);
    link.setAttribute('mimeType', 'text/css');
    link.rel = 'stylesheet';
    link.href = url;
    renderer.appendChild(document.head, link);
  }
};
