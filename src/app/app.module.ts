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
import { AuthService } from './auth.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


// forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';
import { AdddollarsignPipe } from './adddollarsign.pipe';
import { DataTestService } from './data-test.service';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent,
    AdddollarsignPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    // Material Design
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatListModule,

    ReactiveFormsModule,
    FormsModule
    
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService, AuthService, DataTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
