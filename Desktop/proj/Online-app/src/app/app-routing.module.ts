import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { TestComponent } from "./test/test.component";


export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'test', component: TestComponent },
    { path: '**', component: PageNotFoundComponent }

]
