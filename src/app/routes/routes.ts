import { AppComponent } from '../app.component'
import { ProductsComponent } from '../products/products.component'

import { AuthComponent } from '../auth/auth.component'
import { AuthGuard } from '../auth/authguard.service'

export const routes = [
  { path: 'products', component : ProductsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: 'products' }
];
