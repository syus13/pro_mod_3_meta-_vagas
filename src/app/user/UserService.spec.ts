import { describe, it, vi, expect } from "vitest"
import { UserService } from "./UserService"
import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"
import { Crypt } from "../../utils/Crypt"

const repositoryMock = { 
    findByEmail: vi.fn(), 
    create: vi.fn(), 
    findById: vi.fn(), 
    update: vi.fn()
}

const sut = new UserService(repositoryMock)

describe("UserService", () => {
    describe("Create()", () => {
        it("Should return error if user already exists", async () => {
            const paramMock = { name: "Fulaninho", email: "fulano@email.com", password: "123456", createdAt: new Date(), updatedAt: new Date(), favoritedJobs: []  }
            vi.spyOn(repositoryMock, "findByEmail").mockReturnValue({})

            const result = await sut.create(paramMock)

            expect(result).toStrictEqual(CommonError.build(result.message, STATUS_CODE.CONFLICT))
        })

        it("Should be able create a new user", async () => {
            const paramMock = { name: "Fulaninho", email: "fulano@email.com", password: "123456", createdAt: new Date(), updatedAt: new Date(), favoritedJobs: [] }
            const expectMock = {
                id: "1",
                name: "Fulaninho",
                email: "fulano@email.com",
                password: Crypt.encrypt("123456"),
                createdAt: "2023-10-16T15:37:13.228Z",
                updatedAt: "2023-10-16T15:37:13.228Z",
                favoritedJobs: paramMock.favoritedJobs,
            }
            vi.spyOn(repositoryMock, "findByEmail").mockReturnValue(false)
            vi.spyOn(repositoryMock, "create").mockReturnValue(expectMock)

            const result = await sut.create(paramMock)

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("Update", () => {
        it("Should return error if user not exists", async () => {
            const paramMockId = { id: "1" }
            const paramMockData = { name: "Fulaninho", email: "fulano@email.com", password: "123456", createdAt: new Date(), updatedAt: new Date(), favoritedJobs: [] }
            vi.spyOn(repositoryMock, "findById").mockReturnValue(null)

            const result = await sut.update(paramMockId as any as string, paramMockData)

            expect(result).toStrictEqual(CommonError.build(result.message, STATUS_CODE.NOT_FOUND))
        })

        it("Should be able to update data", async () => {
            const paramMockId = {id: "1"}
            const paramMockData = {name: "Fulaninho", email: "fulano@email.com", password: "123456", createdAt: new Date(), updatedAt: new Date(), favoritedJobs: []}
            const expected = {name: "Fulaninho", email: "fulano@email.com", password: Crypt.encrypt("123456")}
            vi.spyOn(repositoryMock, "findById").mockResolvedValue(true)
            vi.spyOn(repositoryMock, "update").mockResolvedValue(expected)
            
            const result = await sut.update(paramMockId as any as string, paramMockData)
            
            expect(result).toStrictEqual(expected)
        })

        it("Should return to handle error when doesn't get to update data", async () => {
            const paramMockId = { id: "1" }
            const paramMockData = { name: "Fulaninho", email: "fulano@email.com", password: "123456", createdAt: new Date(), updatedAt: new Date(), favoritedJobs: [] }
            const returnError = CommonError.build("Internal server errorr.", STATUS_CODE.INTERNAL_SERVER_ERROR)
            vi.spyOn(repositoryMock, "findById").mockReturnValue(true)
            vi.spyOn(repositoryMock, "update").mockRejectedValue(returnError)

            const result = await sut.update(paramMockId as any as string, paramMockData)

            expect(result).toStrictEqual(returnError)
        })
    })
})

describe("MarkJobAsFavorite()", () => {
    it("Should return error if user not exists", async () => {
        const userIdMock = "1"
        const jobIdMock = "1"
        vi.spyOn(repositoryMock, "findById").mockReturnValue(null)

        const result = await sut.markJobAsFavorite(userIdMock, jobIdMock)

        expect(result).toStrictEqual(CommonError.build(result.message, STATUS_CODE.NOT_FOUND))
    })

    it("Should be able to mark job as favorite", async () => {
        const userIdMock = "1"
        const jobIdMock = "1"
        const userMock = { favoriteJobs: [] }
        const expected = { favoriteJobs: [jobIdMock] }
        vi.spyOn(repositoryMock, "findById").mockReturnValue(userMock)
        vi.spyOn(repositoryMock, "update").mockReturnValue(expected)

        const result = await sut.markJobAsFavorite(userIdMock, jobIdMock)

        expect(result).toStrictEqual(expected)
    })

    it("Should not duplicate job in favorite list", async () => {
        const userIdMock = "1"
        const jobIdMock = "1"
        const userMock = { favoriteJobs: [jobIdMock] }
        vi.spyOn(repositoryMock, "findById").mockReturnValue(userMock)
        vi.spyOn(repositoryMock, "update").mockReturnValue(userMock)

        const result = await sut.markJobAsFavorite(userIdMock, jobIdMock)

        expect(result).toStrictEqual(userMock)
    })

    it("Should return to handle error when doesn't get to update data", async () => {
        const userIdMock = "1"
        const jobIdMock = "1"
        const userMock = { favoriteJobs: [] }
        const returnError = CommonError.build("Internal server error", STATUS_CODE.INTERNAL_SERVER_ERROR)
        vi.spyOn(repositoryMock, "findById").mockReturnValue(userMock)
        vi.spyOn(repositoryMock, "update").mockRejectedValue(returnError)

        const result = await sut.markJobAsFavorite(userIdMock, jobIdMock)

        expect(result).toStrictEqual(returnError)
    })
})

describe("function getSearchHistory()", () => {
    it("Should return empty array if user not exists", async () => {
        const userIdMock = "1"
        const pageMock = "1"
        const perPageMock = "10"
        vi.spyOn(repositoryMock, "findById").mockReturnValue(null)

        const result = await sut.getSearchHistory(userIdMock, pageMock, perPageMock)

        expect(result).toStrictEqual([])
    })

    it("Should be able to get search history", async () => {
        const userIdMock = "1"
        const pageMock = "1"
        const perPageMock = "10"
        const userMock = { searchHistory: ["search1", "search2", "search3", "search4", "search5", "search6", "search7", "search8", "search9", "search10", "search11"] }
        const expected = ["search1", "search2", "search3", "search4", "search5", "search6", "search7", "search8", "search9", "search10"]
        vi.spyOn(repositoryMock, "findById").mockReturnValue(userMock)

        const result = await sut.getSearchHistory(userIdMock, pageMock, perPageMock)

        expect(result).toStrictEqual(expected)
    })

    it("Should handle pagination correctly", async () => {
        const userIdMock = "1"
        const pageMock = "2"
        const perPageMock = "5"
        const userMock = { searchHistory: ["search1", "search2", "search3", "search4", "search5", "search6", "search7", "search8", "search9", "search10"] }
        const expected = ["search6", "search7", "search8", "search9", "search10"]
        vi.spyOn(repositoryMock, "findById").mockReturnValue(userMock)

        const result = await sut.getSearchHistory(userIdMock, pageMock, perPageMock)

        expect(result).toStrictEqual(expected)
    })

    it("Should return empty array when an error occurs", async () => {
        const userIdMock = "1"
        const pageMock = "1"
        const perPageMock = "10"
        vi.spyOn(repositoryMock, "findById").mockImplementation(() => { throw new Error() })

        const result = await sut.getSearchHistory(userIdMock, pageMock, perPageMock)

        expect(result).toStrictEqual([])
    })
})



