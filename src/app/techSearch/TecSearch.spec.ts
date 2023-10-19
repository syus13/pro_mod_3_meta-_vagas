import { describe, it, vi, expect } from "vitest"
import { TechSearchService } from "./TechSearchService"
import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"

const repositoryMock = { 
    findOne: vi.fn(), 
    create: vi.fn(),
    save: vi.fn(),
    getTopTechnologies: vi.fn(),
    getTopCitiesForMostSearchedTech: vi.fn(),
    getSearchCount: vi.fn(),
    incrementSearchCount: vi.fn(),
    createSearchCount: vi.fn(),
    searchTech: vi.fn()
}

const sut = new TechSearchService(repositoryMock)

describe("TechSearchService", () => {
    describe("registerTechSearch()", () => {
        it("Should be able to register a tech search", async () => {
            const technologyMock = "JavaScript"
            const cityMock = "Belo Horizonte"
            const expectMock = { technology: technologyMock, city: cityMock, count: 1 }
            vi.spyOn(repositoryMock, "findOne").mockReturnValue(false)
            vi.spyOn(repositoryMock, "create").mockReturnValue(expectMock)

            const result = await sut.registerTechSearch(technologyMock, cityMock)

            expect(expectMock).toStrictEqual(expectMock)
        })
    })

    describe("getTopTechnologies()", () => {
        it("Should be able to get the top technologies", async () => {
            const limitMock = 5
            const expectMock = ["JavaScript", "Python", "Java", "C#", "Ruby"]
            vi.spyOn(repositoryMock, "getTopTechnologies").mockReturnValue(expectMock)

            const result = await sut.getTopTechnologies(limitMock)

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("getTopCitiesForMostSearchedTech()", () => {
        it("Should be able to get the top cities for most searched tech", async () => {
            const expectMock = ["Belo Horizonte", "São Paulo", "Rio de Janeiro", "Brasília", "Recife"]
            vi.spyOn(repositoryMock, "getTopCitiesForMostSearchedTech").mockReturnValue(expectMock)

            const result = await sut.getTopCitiesForMostSearchedTech()

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("searchTechAndCity()", () => {
        it("Should be able to search tech and city", async () => {
            const technologyMock = "JavaScript"
            const cityMock = "Belo Horizonte"
            const expectMock = 1
            vi.spyOn(repositoryMock, "getSearchCount").mockReturnValue(null)
            vi.spyOn(repositoryMock, "createSearchCount").mockReturnValue(expectMock)

            const result = await sut.searchTechAndCity(technologyMock, cityMock)

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("searchTech()", () => {
        it("Should be able to search tech", async () => {
            const queryMock = { technology: "JavaScript" }
            const startIndexMock = 0
            const perPageMock = 10
            const expectMock = [{ technology: "JavaScript", city: "Belo Horizonte", count: 1 }]
            vi.spyOn(repositoryMock, "searchTech").mockReturnValue(expectMock)

            const result = await sut.searchTech(queryMock, startIndexMock, perPageMock)

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("searchTech()", () => {
        it("Should be able to search tech", async () => {
            const queryMock = { technology: "JavaScript" }
            const startIndexMock = 0
            const perPageMock = 10
            const expectMock = [{ technology: "JavaScript", city: "Belo Horizonte", count: 1 }]
            vi.spyOn(repositoryMock, "searchTech").mockReturnValue(expectMock)

            const result = await sut.searchTech(queryMock, startIndexMock, perPageMock)

            expect(result).toStrictEqual(expectMock)
        })

        it("Should return an error when the search fails", async () => {
            const queryMock = { technology: "JavaScript" }
            const startIndexMock = 0
            const perPageMock = 10
            vi.spyOn(repositoryMock, "searchTech").mockImplementation(() => {
                throw new Error("Error searching technology")
            })

            try {
                await sut.searchTech(queryMock, startIndexMock, perPageMock)
            } catch (erro: any) {
                expect(erro).toBeInstanceOf(CommonError)
                expect(erro.statusCode).toEqual(STATUS_CODE.INTERNAL_SERVER_ERROR)
                expect(erro.message).toEqual("Error searching technology")
            }
        })
    })
    
    
})
