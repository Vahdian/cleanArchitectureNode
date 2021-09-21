export abstract class ValueObject<T extends Record<string, unknown>> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public value(): T {
    return this._value;
  }

  public equals(o: ValueObject<T>): boolean {
    return this.value() === o.value();
  }

  toJSON(): string {
    return this.toString();
  }

  toString(): string {
    if (this._value) {
      return this._value.toString();
    }

    return this._value;
  }

  valueOf(): Record<string, unknown> {
    return this._value;
  }
}
