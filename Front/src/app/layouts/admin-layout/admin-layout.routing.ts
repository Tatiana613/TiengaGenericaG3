import { Routes } from "@angular/router";

import { LoginComponent } from "src/app/pages/login/login.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { ProductosComponent } from "src/app/pages/productos/productos.component";
import { ClientesComponent } from "src/app/pages/clientes/clientes.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "productos", component: ProductosComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "clientes", component: ClientesComponent},
  // { path: "rtl", component: RtlComponent }
];
