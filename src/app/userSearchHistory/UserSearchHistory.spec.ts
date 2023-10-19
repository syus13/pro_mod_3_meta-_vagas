import { describe, it, vi, expect } from "vitest"
import { UserSearchHistoryService } from "./UserSearchHistoryService"
import { UserSearchHistory } from "./UserSearchHistory"

const repositoryMock = { 
    save: vi.fn(), 
    find: vi.fn()
}

const sut = new UserSearchHistoryService()

describe("UserSearchHistoryService", () => {
    describe("addSearchHistory()", () => {
        it("Should be able to add a search history", async () => {
            const userIdMock = "1"
            const searchQueryMock = "test query"
            const expectMock = new UserSearchHistory({
                userId: userIdMock,
                searchQuery: searchQueryMock,
            })
            vi.spyOn(repositoryMock, "save").mockReturnValue(expectMock)

            const result = await sut.addSearchHistory(userIdMock, searchQueryMock)

            expect(result).toStrictEqual(expectMock)
        })
    })

    describe("getLastSearches()", () => {
        it("Should be able to get the last searches", async () => {
            const userIdMock = "1"
            const limitMock = 5
            const expectMock = [
                new UserSearchHistory({userId: userIdMock, searchQuery: "query 1"}),
                new UserSearchHistory({userId: userIdMock, searchQuery: "query 2"}),
                new UserSearchHistory({userId: userIdMock, searchQuery: "query 3"}),
                new UserSearchHistory({userId: userIdMock, searchQuery: "query 4"}),
                new UserSearchHistory({userId: userIdMock, searchQuery: "query 5"}),
            ]
            vi.spyOn(repositoryMock, "find").mockReturnValue(expectMock)

            const result = await sut.getLastSearches(userIdMock, limitMock)

            expect(result).toStrictEqual(expectMock)
        })
    })
})
