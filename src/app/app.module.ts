import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { PushModule } from '@rx-angular/template';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, PostComponent],
  imports: [BrowserModule, PushModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(injector: Injector) {
    // customElements.define(
    //   'local-post',
    //   createCustomElement(PostComponent, { injector })
    // );
  }

  ngDoBootstrap() {}
}
