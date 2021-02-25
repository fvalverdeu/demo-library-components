# WsNgFvalverdeu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.


## How to create a library components:

1. Create a workspace with: 
```
ng new ws-ng-fvalverdeu --createApplication=false
```

2. Create a library with:
```
ng g library fvu-commons --prefix=fvu
```

- The prefix fvu is for the tag in your HTML files: 
```
<fvu-mycomponent></fvu-mycomponent>
```

3. The structure of directories is:

![demo-lib-components-directories](https://user-images.githubusercontent.com/36082218/109058566-22cbc280-76b1-11eb-857e-bd3549399b5a.png)

4. Create the components.

5. Update de public-api.ts file with the new components route.


## How to building an Angular library:

1. Test the project with:
```
ng test fvu-commons
```
2. Build the project with (if you want to use View Engine):
```
ng build fvu-commons --prod
```
If you want to use Ivy instead of View Engine, build with:

```
ng build fvu-commons
```
- In this case, Angular CLI show the follow warning because is not recomendable use Ivy.
- ![warning-to-use-ivy](https://user-images.githubusercontent.com/36082218/109093129-d8b10400-76e5-11eb-95ac-c1ef5fd52131.png)

- This warning is because the apps whit < Angular 9 not working correctly.


## How to publishing Angular library on npm

1. Access to dist/fvu-commons directory

2. Create an account on npm:
```
npm adduser
```
- Add username, password and email.
- Verify your email (it's important).

3. Login in npm:
```
npm login
```
- Insert the password.
- Verify are you logged: 
```
npm whoami
```
- It's show a username.

4. Publish the library:
```
npm publish
```

5. For other publishing you should change the version manualy in package.json file.



