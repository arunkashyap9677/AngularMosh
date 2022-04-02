import { detailReducer } from './Store/Reducers/details.reducer';
import { TextFormatterPipe } from './pipes/text-formatter.pipe';
import { AuthorService } from './../services/author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ValidationErrorComponent } from './sharedComponents/validation-error/validation-error.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import { PromiseComponent } from './promise/promise.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { TestFormComponent } from './ngrxTest/test-form/test-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    TextFormatterPipe,
    TemplateFormComponent,
    ValidationErrorComponent,
    ReactiveFormComponent,
    ResetPasswordComponent,
    PostsComponent,
    PromiseComponent,
    HomeComponent,
    LibraryComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({details: detailReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })  
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
