import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, PostComponent],
  imports: [BrowserModule, ReactiveComponentModule],
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
