import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { TechSearchService } from "./TechSearchService";

const techSearchRepositoryMock = {
  findOne: vi.fn(),
  create: vi.fn(),
  getTopTechnologies: vi.fn(),
  getTopCitiesForMostSearchedTech: vi.fn(),
  getSearchCount: vi.fn(),
  incrementSearchCount: vi.fn(),
  createSearchCount: vi.fn(),
  searchTech: vi.fn(),
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

  describe("getTopCitiesForMostSearchedTech()", () => {
    it("Should be able to get top cities for most searched tech", async () => {
      const topCitiesForMostSearchedTechMock = [
        "Belo Horizonte",
        "São Paulo",
        "Rio de Janeiro",
      ];
      vi.spyOn(
        techSearchRepositoryMock,
        "getTopCitiesForMostSearchedTech"
      ).mockReturnValue(topCitiesForMostSearchedTechMock);

      const result = await sut.getTopCitiesForMostSearchedTech();

      expect(result).toStrictEqual(topCitiesForMostSearchedTechMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const errorMock = new Error("Error message");
      vi.spyOn(
        techSearchRepositoryMock,
        "getTopCitiesForMostSearchedTech"
      ).mockImplementation(() => {
        throw errorMock;
      });

      const result = await sut.getTopCitiesForMostSearchedTech();

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });

  describe("searchTechAndCity()", () => {
    it("Should be able to search tech and city and increment the count if found", async () => {
      const technologyMock = "JavaScript";
      const cityMock = "Belo Horizonte";

      vi.spyOn(techSearchRepositoryMock, "getSearchCount").mockReturnValue(1);
      vi.spyOn(
        techSearchRepositoryMock,
        "incrementSearchCount"
      ).mockReturnValue(true);

      const result = await sut.searchTechAndCity(technologyMock, cityMock);

      expect(result).toBe(2);
    });

    it("Should be able to search tech and city and create a new count if not found", async () => {
      const technologyMock = "JavaScript";
      const cityMock = "Belo Horizonte";

      vi.spyOn(techSearchRepositoryMock, "getSearchCount").mockReturnValue(
        null
      );
      vi.spyOn(techSearchRepositoryMock, "createSearchCount").mockReturnValue(
        true
      );

      const result = await sut.searchTechAndCity(technologyMock, cityMock);

      expect(result).toBe(1);
    });

    it('Should return error when an exception is thrown', async ({ expect }) => {
      const technologyMock = "JavaScript";
      const cityMock = "Belo Horizonte";
      const errorMock = new Error("Error message");
    
      vi.spyOn(techSearchRepositoryMock, 'getSearchCount').mockImplementation(async () => {
        throw CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      });
    
      const result = await sut.searchTechAndCity(technologyMock, cityMock).catch((err) => err);
    
      expect(result).toEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
    
  });

  describe("searchTech()", () => {
    it("Should be able to search tech", async () => {
      const queryMock = { technology: "JavaScript" };
      const startIndexMock = 0;
      const perPageMock = 10;
      const searchResultsMock = [
        { technology: "JavaScript", city: "Belo Horizonte", count: 1 },
      ];
      vi.spyOn(techSearchRepositoryMock, "searchTech").mockReturnValue(
        searchResultsMock
      );

      const result = await sut.searchTech(
        queryMock,
        startIndexMock,
        perPageMock
      );

      expect(result).toStrictEqual(searchResultsMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const queryMock = { technology: "JavaScript" };
      const startIndexMock = 0;
      const perPageMock = 10;
      const errorMock = new Error("Error message");
      vi.spyOn(techSearchRepositoryMock, "searchTech").mockImplementation(
        () => {
          throw errorMock;
        }
      );

      const result = await sut.searchTech(
        queryMock,
        startIndexMock,
        perPageMock
      );

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });
});
