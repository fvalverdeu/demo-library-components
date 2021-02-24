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

![demo-lib-components-directories](https://user-images.githubusercontent.com/36082218/109058268-ca94c080-76b0-11eb-91d5-cf332807504c.png)

4. Create the components.

5. Update de public-api.ts file with the new components route.
