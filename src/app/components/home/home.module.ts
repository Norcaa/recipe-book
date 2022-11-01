import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselCardComponent } from './carousel/carousel-card/carousel-card.component';
import { RecipesModule } from '../recipes/recipes.module';

const MODULES = [
    HomeComponent,
    CarouselComponent,
    CarouselCardComponent
]

@NgModule({
  declarations: [
        ...MODULES
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipesModule
  ],
  exports: [
    ...MODULES
  ]
})
export class HomeModule { }
