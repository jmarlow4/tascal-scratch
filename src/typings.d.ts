/* SystemJS module definition */
declare var module: NodeModule;
declare var firebase: FirebaseWithPromise;
interface FirebaseWithPromise {
  Promise: Promise<any>;
}
interface NodeModule {
  id: string;
}

