import { NgModule } from '@angular/core';

@NgModule({
})
export class SharedModule {
  constructor() {
    console.log('Hello world!', 'SharedModule()');
  }
}

export function testingStuff() {
  console.log('Hello world!', 'testingStuff()');
}