import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component'
import { DropdownOnHoverOnHoverModule } from './shared/directives/dropdown-on-hover.module';
import { MensagemModule } from './libs/components/mensagem/mensagem.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    NgxSpinnerModule,
    DropdownOnHoverOnHoverModule,
    MensagemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
