import { describe, it, expect, vi } from "vitest";
import { JobService } from "./JobService";

const techSearchRepositoryMock = {};

const jobRepositoryMock = {
  create: vi.fn(),
  searchJobs: vi.fn(),
  favoriteJob: vi.fn(),
  model: { find: vi.fn() },
};

const userRepositoryMock = {};
const sut = new JobService(
  jobRepositoryMock,
  techSearchRepositoryMock,
  userRepositoryMock
);

describe("JobService", () => {
  describe("create()", () => {
    it("Should be able to create a job", async () => {
      const dataMock = {
        title: "Software Developer",
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
        favoritedBy: [],
      };
      const expectMock = { ...dataMock, id: "1" };
      vi.spyOn(jobRepositoryMock, "create").mockReturnValue(expectMock);

      const result = await sut.create(dataMock);

      expect(result).toStrictEqual(expectMock);
    });
  });

  describe("searchJobs()", () => {
    it("Should be able to filter jobs", async () => {
      const filtersMock = { title: "Software Developer" };
      const startIndexMock = 0;
      const itemsPerPageMock = 10;
      const expectMock = [{ ...filtersMock, id: "1" }];
      vi.spyOn(jobRepositoryMock, "searchJobs").mockReturnValue(expectMock);

      const result = await sut.searchJobs(
        filtersMock,
        startIndexMock,
        itemsPerPageMock
      );

      expect(expectMock).toStrictEqual(expectMock);
    });
  });

  describe("favoriteJob()", () => {
    it("Should be able to favorite a job", async () => {
      const userIdMock = "1";
      const jobIdMock = "1";
      const expectMock = { userId: userIdMock, jobId: jobIdMock };
      vi.spyOn(jobRepositoryMock, "favoriteJob").mockReturnValue(expectMock);

      const result = await sut.favoriteJob(userIdMock, jobIdMock);

      expect(result).toStrictEqual(expectMock);
    });
  });
});
