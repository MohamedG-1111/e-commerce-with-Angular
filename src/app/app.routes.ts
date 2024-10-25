import { Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component'
import { LoginPageComponent } from './components/login-page/login-page.component';
import{ProductsComponent} from './components/products/products.component'
import { FormComponent } from './components/products/form/form.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:name', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'form',component:FormComponent },
  { path: 'edit/:id', component: FormComponent },
  {path:'contact',component: ContactUsComponent},
  {path:'details/:id',component: ProductDetailsComponent},
  {path: 'form',component:FormComponent },
  { path: '**', component: NotFoundComponent },


];







