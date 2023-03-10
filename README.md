# Bases de Angular

'''
Esta aplicacion sirve para practicar los fundamentos de Angular15
'''

## Agunos comandos importantes:

'''
ng new [nombre de la carpeta] --> crea un proyecto de angular
ng serve -o --> inicializa el proyecto en `http://localhost:4200/`
ng generate environments --> crea archvios para variables de entorno
ng g c pathCarpet --> crea un modulos de Angular con el CSS, Test, Html, TS y lo importa en el app.module.ts
ng build --configuration production
'''

## Crear:

```
Crear Modulo
ng generate module nombreDeCarpeta === ng g m nombreDeCarpeta

Crear Componente
ng generate component path/nombre === ng g c path/nombre

Baderas
--skip-tests --> para no crear los test del componente

```

## Bloques Fundamentales:

```
MODULOS --> Componentes (HTML + Class TS)
        --> Rutas (URL)
        --> Directivas (Componentes , Estructurales , Atributos)
        --> Servicios (Informacion Centralizada)
El MODULO agrupa todos los bloques.
```

## Otros Codigos Importantes

```
*ngFor="let algo of algos ; let i = index" --> funciona como un for
*ngIf="condicion; else referenciaLocal"
#referenciaLocal

FormModule --> import in module, es el formulario comun
ngForm --> manejar formularios
@Input('data') personajes: Personaje[] = []; pasar info de padre a hijo
```

## Fundamentos;

```
los [] son para establecer propiedades
los () son para escuchar eventos(eventListeners)
[(ngModel)] --> two way data binding(tanto emite como recibe eventos o propiedades)
 | pipes --> los pipes sirven para transformar visualmente la info
 {{1000 | number}} --> lo transforma a 1,000

```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
