import bcrypt from "bcrypt";

class Crypt {
  static encrypt(text: string | Buffer) {
    return bcrypt.hashSync(text, 8);
  }

  static compare(text: string | Buffer, hash: string) {
    return bcrypt.compareSync(text, hash);
  }
}

export { Crypt };
