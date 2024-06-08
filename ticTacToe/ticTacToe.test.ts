import { handlePlayerA, handlePlayerB, playerA, playerB, squares } from "./ticTacToe";

describe("TicTacToe", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should nine squares", () => {
        expect(squares).toHaveLength(9);
    });
    it("should have a player", () => {
        expect(playerA).toBeTruthy;
    });

    it("should have two players", () => {
        expect(playerA).toBeTruthy;
        expect(playerB).toBeTruthy;
    });

    it("should playerA put a X on board", () => {
        expect(handlePlayerA(0)).toStrictEqual(["X", 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it("should playerB put a O on board", () => {
        expect(handlePlayerB(1)).toStrictEqual(["X", "O", 0, 0, 0, 0, 0, 0, 0]);
    });
});
