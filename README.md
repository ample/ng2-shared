# ng2-shared

    $ git clone git@github.com:ample/ng2-shared.git
    $ cd crds-styleguide
    $ npm link ../ng2-shared
    $ vim package.json
    
        "devDependencies": {
          "ng2-shared": "*",
          ...
        }
   
    $ npm i
    $ vim src/app/app.module.ts
    
      import { SharedModule } from 'ng2-shared';
      
      @NgModule({
        imports: [
          ...
          SharedModule // <-- Add to imports
        ]
      })
      export class AppModule {}
      
    $ npm run start
 
 Yields the following error...
 
>  Error: Unexpected value 'SharedModule' imported by the module 'AppModule' at SyntaxError.ZoneAwareError
