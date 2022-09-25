export interface IsPlayer {
  name: string; // we don't need to type "public". it's default.
  readonly country: string;

  getProperty(): number; //we can access private property by using a method.
  play(): void;
}
