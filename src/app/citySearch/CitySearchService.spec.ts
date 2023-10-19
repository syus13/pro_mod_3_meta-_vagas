import { describe, it, vi, expect } from "vitest"
import { CitySearchService } from "./CitySearchService"
import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"

const repositoryMock = { 
    find: vi.fn().mockImplementation(() => {
        return [
            { name: 'Belo Horizonte', count: 5 },
            { name: 'São Paulo', count: 4 },
            { name: 'Rio de Janeiro', count: 3 },
            { name: 'Brasília', count: 2 },
            { name: 'Recife', count: 1 },
        ];
    }), 
}

const techSearchServiceMock = {
    getTop5Technologies: vi.fn(),
}

const sut = new CitySearchService(repositoryMock, techSearchServiceMock)

describe("CitySearchService", () => {
    describe("getTop5Cities()", () => {
        it("Should be able to get the top 5 cities", async () => {
            const expectMock = ["Belo Horizonte", "São Paulo", "Rio de Janeiro", "Brasília", "Recife"]

            const result = await sut.getTop5Cities()

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("getTop5CitiesForMostSearchedTech()", () => {
        it("Should be able to get the top 5 cities for most searched tech", async () => {
            const topTechnologyMock = "JavaScript"
            const expectMock = ["Belo Horizonte", "São Paulo", "Rio de Janeiro", "Brasília", "Recife"]
            vi.spyOn(techSearchServiceMock, "getTop5Technologies").mockReturnValue(topTechnologyMock)

            const result = await sut.getTop5CitiesForMostSearchedTech()

            expect(result).toStrictEqual(expectMock)
        })
    })
})
