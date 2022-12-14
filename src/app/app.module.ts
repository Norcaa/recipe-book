import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicLayoutComponent } from './theme/basic-layout/basic-layout.component';
import { HeaderComponent } from './theme/header/header.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingModule } from './components/shopping/shopping.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RecipesModule,
    ShoppingModule,
    HomeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
