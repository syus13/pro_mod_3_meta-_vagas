import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { UserService } from "./UserService";

const userRepositoryMock = {
  findByEmail: vi.fn(),
  create: vi.fn(),
  findById: vi.fn(),
  update: vi.fn(),
  getFavoriteJobs: vi.fn(),
  getUserSearchHistory: vi.fn(),
};
const sut = new UserService(userRepositoryMock);

describe("UserService", () => {
  describe("create()", () => {
    it("Should be able to create a user", async () => {
      const dataMock = {
        name: "John Doe",
        password: "Password123",
        email: "john.doe@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        searchHistory: [],
        favoritedBy: [],
      };
      const expectMock = { ...dataMock, id: "1" };
      vi.spyOn(userRepositoryMock, "create").mockReturnValue(expectMock);

      const result = await sut.create(dataMock);

      expect(result).toStrictEqual(expectMock);
    });
  });

  describe("update()", () => {
    it("Should be able to update a user", async () => {
      const idMock = "1";
      const dataMock = {
        name: "John Doe",
        password: "Password123",
        email: "john.doe@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        searchHistory: [],
        favoritedBy: [],
      };
      const expectMock = { ...dataMock, id: idMock };
      vi.spyOn(userRepositoryMock, "update").mockReturnValue(expectMock);
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue({
        id: idMock,
        ...dataMock,
      });

      const result = await sut.update(idMock, dataMock);

      expect(result).toStrictEqual(expectMock);
    });
  });

  describe("getFavoriteJobs()", () => {
    it("Should be able to get favorite jobs of a user", async () => {
      const userIdMock = "1";
      const expectMock = ["Job1", "Job2", "Job3"];
      vi.spyOn(userRepositoryMock, "getFavoriteJobs").mockReturnValue(
        expectMock
      );
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue({
        id: userIdMock,
      });

      const result = await sut.getFavoriteJobs(userIdMock);

      expect(result).toStrictEqual(expectMock);
    });
  });

  describe("getUserSearchHistory()", () => {
    it("Should be able to get search history of a user", async () => {
      const userIdMock = "1";
      const expectMock = ["Search1", "Search2", "Search3"];
      vi.spyOn(userRepositoryMock, "getUserSearchHistory").mockReturnValue(
        expectMock
      );
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue({
        id: userIdMock,
      });

      const result = await sut.getUserSearchHistory(userIdMock);

      expect(result).toStrictEqual(expectMock);
    });
  });
});
