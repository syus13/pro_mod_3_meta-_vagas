import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { TechSearchService } from "./TechSearchService";

const techSearchRepositoryMock = {
  findOne: vi.fn(),
  create: vi.fn(),
  getTopTechnologies: vi.fn(),
};
const sut = new TechSearchService(techSearchRepositoryMock);

describe("TechSearchService", () => {
  describe("registerTechSearch()", () => {
    it("Should be able to register a tech search", async () => {
      const technologyMock = "JavaScript";
      const cityMock = "Belo Horizonte";
      const existingRecordMock = {
        technology: technologyMock,
        city: cityMock,
        count: 1,
        save: vi.fn(),
      };
      vi.spyOn(techSearchRepositoryMock, "findOne").mockReturnValue(
        existingRecordMock
      );

      const result = await sut.registerTechSearch(technologyMock, cityMock);

      expect(result).toStrictEqual(existingRecordMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const technologyMock = "JavaScript";
      const cityMock = "Belo Horizonte";
      const errorMock = new Error("Error message");
      vi.spyOn(techSearchRepositoryMock, "findOne").mockImplementation(() => {
        throw errorMock;
      });

      const result = await sut.registerTechSearch(technologyMock, cityMock);

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });

  describe("getTopTechnologies()", () => {
    it("Should be able to get top technologies", async () => {
      const topTechnologiesMock = ["JavaScript", "Python", "Java"];
      vi.spyOn(techSearchRepositoryMock, "getTopTechnologies").mockReturnValue(
        topTechnologiesMock
      );

      const result = await sut.getTopTechnologies();

      expect(result).toStrictEqual(topTechnologiesMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const errorMock = new Error("Error message");
      vi.spyOn(
        techSearchRepositoryMock,
        "getTopTechnologies"
      ).mockImplementation(() => {
        throw errorMock;
      });

      const result = await sut.getTopTechnologies();

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });
});
