import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListaRenderComponent } from "./components/lista-render/lista-render.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListaRenderComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{};