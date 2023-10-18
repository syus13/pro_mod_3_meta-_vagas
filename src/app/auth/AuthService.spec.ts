import { describe, it, vi, expect } from "vitest"
import { AuthService } from "./AuhtService"

import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"
import { Crypt } from "../../utils/Crypt"
import JWT from "jsonwebtoken"

const repositoryMock = { 
    findByEmail: vi.fn()
}

const sut = new AuthService(repositoryMock)

describe("AuthService", () => {
    describe("login()", () => {
        it("Should be able to login a user", async () => {
            const dataMock = { email: "test@example.com", password: "password" }
            const userMock = { ...dataMock, id: "1" }
            const tokenMock = "token"
            vi.spyOn(repositoryMock, "findByEmail").mockReturnValue(userMock)
            vi.spyOn(Crypt, "compare").mockReturnValue(true)
            vi.spyOn(JWT, "sign").mockReturnValue("token")

            const result = await sut.login(dataMock)

            expect(result).toStrictEqual({ token: tokenMock, user: userMock })
        }) 
    })
})
