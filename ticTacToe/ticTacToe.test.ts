import { playerA, playerB, swquares } from "./ticTacToe";

describe("TicTacToe", () => {
  it("should nine squares", () => {
      expect(swquares).toHaveLength(9)
  });
  it("should have a player", () => {
      expect(playerA).toBeTruthy
  });

  it("should have two players", () => {
      expect(playerA).toBeTruthy
      expect(playerB).toBeTruthy
  });
});
