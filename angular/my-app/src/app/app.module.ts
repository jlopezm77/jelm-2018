import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { CapturarComponent } from './capturar/capturar.component';

@NgModule({
  declarations: [
    AppComponent,
    MiListaComponent,
    CapturarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
