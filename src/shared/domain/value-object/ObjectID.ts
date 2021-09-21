import { ObjectId } from 'mongodb';
import { InvalidArgumentError } from './InvalidArgumentError';

export class ObjectID {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidObjectID(value);

    this.value = value;
  }

  static random(): string {
    return new ObjectId().toHexString();
  }

  private ensureIsValidObjectID(id: string): void {
    if (id && (!ObjectId.isValid(id) || String(new ObjectId(id)) !== id)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${id}>`
      );
    }
  }

  toString(): string {
    return this.value;
  }
}
