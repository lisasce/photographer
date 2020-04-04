import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { GaleryPageComponent } from './galery-page/galery-page.component';


const routes: Routes = [
	{
		path: "",
		component: HomePageComponent
	},{
		path: "portfolio",
		component: PortfolioPageComponent
	},{
		path: "about",
		component: BookPageComponent
	},{
		path: "contact",
		component: ContactPageComponent
	},
	{
		path: "galery",
		component: GaleryPageComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
