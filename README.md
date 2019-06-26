# Ionic v4 Lazy Routing Shell

This is a shell application to show how to do lazy loading in Ionic v4.

Each page of othe application is segmented into a standalone module and then referenced in the top-level `app-routing.module.ts`.

```
children: [
  {
    path: 'chores-dashboard',
    loadChildren:
      './pages/chores-dashboard/chores-dashboard.module#ChoresDashboardPageModule'
  },
  {
    path: 'my-account',
    loadChildren: './pages/my-account/my-account.module#MyAccountPageModule'
  },
  {
    path: 'activity',
    loadChildren: './pages/activity/activity.module#ActivityPageModule'
  },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  {
    path: 'account-details',
    loadChildren:
      './pages/account-details/account-details.module#AccountDetailsPageModule'
  }
]
```

Notice that in the `loadChildren` property of each routing declaration, we are pointing to the module file and then appending the name of the module we want to load from that file like this `chores-dashboard.module#ChoresDashboardPageModule`.

We are also setting a preloading strategy to preload all modules as quickly as possible as seen in the code below.

```@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})```

You could set this to `NoPreloading` if you did not want to preload any modules. Using one or the other should be a data-driven decision based on usage patterns and the business case for your users.
