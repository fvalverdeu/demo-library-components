# WsNgFvalverdeu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.


## How to create a library components:

1. Create a workspace with: 
```
ng new ws-ng-fvalverdeu --createApplication=false
```

- The prefix fvu is for the tag in your HTML files: 
```
<fvu-mycomponent></fvu-mycomponent>
```

2. Create a library with:
```
ng g library fvu-commons --prefix=fvu
```

3. The structure of directories is:

![demo-lib-components-directories](https://user-images.githubusercontent.com/36082218/109058566-22cbc280-76b1-11eb-857e-bd3549399b5a.png)

4. Create the components.

5. Update de public-api.ts file with the new components route.
