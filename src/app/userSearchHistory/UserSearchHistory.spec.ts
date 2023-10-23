import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { UserSearchHistoryService } from "./UserSearchHistoryService";

const userSearchHistoryRepositoryMock = {
  getUserSearchHistory: vi.fn(),
  model: { find: vi.fn() },
};
const sut = new UserSearchHistoryService(userSearchHistoryRepositoryMock);

describe("UserSearchHistoryService", () => {
  describe("getUserSearchHistory()", () => {
    it("Should be able to get search history of a user", async () => {
      const userIdMock = "1";
      const expectMock = ["Search1", "Search2", "Search3"];
      vi.spyOn(
        userSearchHistoryRepositoryMock,
        "getUserSearchHistory"
      ).mockReturnValue(expectMock);

      const result = await sut.getUserSearchHistory(userIdMock);

      expect(result).toStrictEqual(expectMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const userIdMock = "1";
      const errorMock = new Error("Error message");
      vi.spyOn(
        userSearchHistoryRepositoryMock,
        "getUserSearchHistory"
      ).mockImplementation(() => {
        throw errorMock;
      });

      const result = await sut.getUserSearchHistory(userIdMock);

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });
});
