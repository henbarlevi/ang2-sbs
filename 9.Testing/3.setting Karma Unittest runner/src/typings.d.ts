//-----------what are *.d.ts files------------
//*.d.ts files are declaration files that declare to 
//TypeScript design time the exposed objects, functions, classes 
//and interfaces included in a script. Without using the declaration files 
//you will get design time errors since TypeScript compiler won’t recognize
// the libraries and their content. 
//------------the declare keyword------------
//Not all JavaScript libraries/frameworks have TypeScript declaration files. 
//On the other hand, we might want to use libraries/frameworks in our 
//TypeScript files without getting compilation errors. What can we do?
//One solution is to use the declare keyword. The declare keyword is used for
// ambient declarations where you want to define a variable that may not have
// originated from a TypeScript file. 
declare var app: {
  environment: string;
};

interface WebpackRequire {
  (id: string): any;
  context(dir: string, useSubdirs: boolean, pattern: RegExp): any;
}

declare var require: WebpackRequire;
