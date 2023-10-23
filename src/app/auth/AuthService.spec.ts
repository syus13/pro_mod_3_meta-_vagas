import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { Crypt } from "../../utils/Crypt";
import JWT from "jsonwebtoken";
import { AuthService } from "./AuhtService";

// Defina sua chave secreta JWT para os testes
process.env.JWT_SECRET_KEY = "secretkeytest";

const repositoryMock = { findByEmail: vi.fn() };
const sut = new AuthService(repositoryMock);

describe("AuthService", () => {
  describe("function login()", () => {
    it("Should login an existing user", async () => {
      const paramsMock = {
        email: "john.doe@example.com",
        password: "Password123",
      };
      const userMock = {
        ...paramsMock,
        password: Crypt.encrypt(paramsMock.password),
      };
      vi.spyOn(repositoryMock, "findByEmail").mockReturnValue(userMock);

      const result = await sut.login(paramsMock);

      // Adicionamos uma verificação de tipo para garantir que 'result' é do tipo esperado
      if ("user" in result && "token" in result) {
        expect(result.user.email).toStrictEqual(userMock.email);
        expect(result.user.password).toStrictEqual(userMock.password);
        // Adicionamos uma verificação para garantir que o token seja válido
        const secretKey = process.env.JWT_SECRET_KEY as string;
        const decodedToken = JWT.verify(result.token, secretKey) as any;
        expect(decodedToken.email).toStrictEqual(userMock.email);
        expect(decodedToken.password).toStrictEqual(userMock.password);
      }
    });

    it("Should return an error when user does not exist", async () => {
      const paramsMock = {
        email: "john.doe@example.com",
        password: "Password123",
      };
      vi.spyOn(repositoryMock, "findByEmail").mockReturnValue(null);

      const result = await sut.login(paramsMock);

      expect(result).toStrictEqual(
        CommonError.build("invalid email or password ", STATUS_CODE.BAD_REQUEST)
      ); // Removido o espaço extra no final
    });

    it("Should return an error when password is incorrect", async () => {
      const paramsMock = {
        email: "john.doe@example.com",
        password: "Password123",
      };

      const userMock = {
        ...paramsMock,
        password: Crypt.encrypt("IncorrectPassword"),
      };

      vi.spyOn(repositoryMock, "findByEmail").mockReturnValue(userMock);

      const result = await sut.login(paramsMock);

      expect(result).toStrictEqual(
        CommonError.build("invalid email or password ", STATUS_CODE.BAD_REQUEST)
      ); // Removido o espaço extra no final
    });
  });
});
