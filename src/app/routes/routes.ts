import { AppComponent } from '../app.component'
import { ProductsComponent } from '../products/products.component'
import { AuthComponent } from '../auth/auth.component'
export const routes = [
  { path: 'products', component : ProductsComponent},
  { path: 'login', component: AuthComponent }
];
