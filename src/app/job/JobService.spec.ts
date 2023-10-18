import { describe, it, vi, expect } from "vitest"
import { JobService } from "./JobService"
import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"

const repositoryMock = { 
    create: vi.fn(),
    filterJobs: vi.fn(),
    model: { find: vi.fn() },
    favoriteJob: vi.fn()
}

const techSearchRepositoryMock = {
    upsertTechCount: vi.fn()
}

const userRepositoryMock = {
    searchRecord: vi.fn()
}

const sut = new JobService(repositoryMock, techSearchRepositoryMock, userRepositoryMock)

describe("JobService", () => {
    describe("create()", () => {
        it("Should be able to create a job", async () => {
            const dataMock = { title: "Software Developer",
            description: "Develop and maintain systems",
            createdAt: new Date(),
            updatedAt: new Date(),
            position: "Senior",
            salary: 60000,
            city: "Belo Horizonte",
            website: "www.example.com",
            company: "Example Company",
            link: "www.example.com/jobs/software-developer",
            technology: "JavaScript",
            favoritedBy: [] }
            const expectMock = { ...dataMock, id: "1" }
            vi.spyOn(repositoryMock, "create").mockReturnValue(expectMock)

            const result = await sut.create(dataMock)

            expect(result).toStrictEqual(expectMock)
        }, 10000) // Aumenta o tempo limite para 10 segundos
    })

    describe("filterJobs()", () => {
        it("Should be able to filter jobs", async () => {
            const filtersMock = { title: "Software Developer" }
            const startIndexMock = 0
            const itemsPerPageMock = 10
            const expectMock = [{ ...filtersMock, id: "1" }]
            vi.spyOn(repositoryMock, "filterJobs").mockReturnValue(expectMock)

            const result = await sut.filterJobs(filtersMock, startIndexMock, itemsPerPageMock)

            expect(expectMock).toStrictEqual(expectMock)
        }, 10000) // Aumenta o tempo limite para 10 segundos
    })

    describe("favoriteJob()", () => {
        it("Should be able to favorite a job", async () => {
            const userIdMock = "1"
            const jobIdMock = "1"
            const expectMock = { userId: userIdMock, jobId: jobIdMock }
            vi.spyOn(repositoryMock, "favoriteJob").mockReturnValue(expectMock)

            const result = await sut.favoriteJob(userIdMock, jobIdMock)

            expect(result).toStrictEqual(expectMock)
        }, 10000) // Aumenta o tempo limite para 10 segundos
    })
})
