import { Routes } from '@angular/router';
import path from 'path';
import { MenuComponent } from './menu/menu.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

export const routes: Routes = [
 {
    path:"",
    component: ViewTemplateComponent,
    children: [
      {
         path:"", pathMatch:'full', redirectTo:"home"
      },
      {
         path:"home",
         loadComponent: () => import("./home-template/home-template.component").then(mod => mod.HomeTemplateComponent)
      },
      {
         path:"pacttos",
         loadComponent: () => import("./pacttos-template/pacttos-template.component").then(mod => mod.PacttosTemplateComponent)
      },
      {
         path: "videos-to-review",
         loadComponent: () => import("./videos-review-template/videos-review-template.component").then(mod => mod.VideosReviewTemplateComponent)
      },
      {
         path: "shared-links",
         loadComponent: () => import("./shared-links-template/shared-links-template.component").then(mod => mod.SharedLinksTemplateComponent)
      },
      {
         path: "personal-info",
         loadComponent: () => import("./personal-info-template/personal-info-template.component").then(mod => mod.PersonalInfoTemplateComponent)
      },
      {
         path: "packages",
         loadComponent: () => import("./packages-template/packages-template.component").then(mod => mod.PackagesTemplateComponent)
      },
      {
         path: "profile",
         loadComponent: () => import("./profile-template/profile-template.component").then(mod => mod.ProfileTemplateComponent)
      },
      {
         path: "library",
         loadComponent: () => import("./library-template/library-template.component").then(mod => mod.LibraryTemplateComponent)
      },
      {
         path: "subscription",
         loadComponent: () => import("./subscription-template/subscription-template.component").then(mod => mod.SubscriptionTemplateComponent)
      },
      {
         path: "review-settings",
         loadComponent: () => import("./settings-template/settings-template.component").then(mod => mod.SettingsTemplateComponent)
      }
    ]

 },
 {
   path:"login",
   component: LoginTemplateComponent
 },
 {
   path:"upload",
   component: ImageUploadComponent
 }

];
