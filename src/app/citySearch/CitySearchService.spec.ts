import { describe, it, expect, vi } from "vitest";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { CitySearchService } from "./CitySearchService";

const citySearchRepositoryMock = {
  find: vi.fn(),
  getTopTechnology: vi.fn(),
  getTopCitiesForTechnology: vi.fn(),
};
const techSearchServiceMock = {};
const sut = new CitySearchService(
  citySearchRepositoryMock,
  techSearchServiceMock
);

describe("CitySearchService", () => {
  describe("function getTop5Cities()", () => {
    it("Should return top 5 cities", async () => {
      const citiesMock = [
        { name: "City1", count: 5 },
        { name: "City2", count: 4 },
        { name: "City3", count: 3 },
        { name: "City4", count: 2 },
        { name: "City5", count: 1 },
        { name: "City6", count: 0 },
      ];
      vi.spyOn(citySearchRepositoryMock, "find").mockReturnValue(citiesMock);

      const result = await sut.getTop5Cities();

      expect(result).toStrictEqual([
        "City1",
        "City2",
        "City3",
        "City4",
        "City5",
      ]);
    });

    it("Should return error when an exception is thrown", async () => {
      const errorMock = new Error("Error message");
      vi.spyOn(citySearchRepositoryMock, "find").mockImplementation(() => {
        throw errorMock;
      });

      const result = await sut.getTop5Cities();

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });

  describe("function getTop5CitiesForMostSearchedTech()", () => {
    it("Should return top 5 cities for most searched tech", async () => {
      const topTechMock = "Tech1";
      const topCitiesMock = ["City1", "City2", "City3", "City4", "City5"];
      vi.spyOn(citySearchRepositoryMock, "getTopTechnology").mockReturnValue(
        topTechMock
      );
      vi.spyOn(
        citySearchRepositoryMock,
        "getTopCitiesForTechnology"
      ).mockReturnValue(topCitiesMock);

      const result = await sut.getTop5CitiesForMostSearchedTech();

      expect(result).toStrictEqual(topCitiesMock);
    });

    it("Should return error when an exception is thrown", async () => {
      const errorMock = new Error("Error message");
      vi.spyOn(citySearchRepositoryMock, "getTopTechnology").mockImplementation(
        () => {
          throw errorMock;
        }
      );

      const result = await sut.getTop5CitiesForMostSearchedTech();

      expect(result).toStrictEqual(
        CommonError.build(errorMock.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    });
  });
});
