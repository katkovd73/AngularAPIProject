import { AppRouterModule } from './app-router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

// services
import { EntryService } from './entry.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

// forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    // Material Design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,

    ReactiveFormsModule
    
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
