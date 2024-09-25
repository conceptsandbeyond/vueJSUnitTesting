<template>
  <div class="tic-tac-toe">
    <h1>Tic Tac Toe</h1>
    <div class="board">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div v-if="winner" class="result">
      <h2>{{ winner }} wins!</h2>
      <button @click="resetGame" class="play-again-button">Play Again</button>
    </div>
    <div v-else-if="isDraw" class="result">
      <h2>It's a Draw!</h2>
      <button @click="resetGame" class="play-again-button">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicTacToe2",
  data() {
    return {
      cells: Array(9).fill(null),
      xIsNext: true,
      winner: null,
    };
  },
  computed: {
    isDraw() {
      return this.cells.every((cell) => cell) && !this.winner;
    },
  },
  methods: {
    makeMove(index) {
      if (!this.cells[index] && !this.winner) {
        this.cells.splice(index, 1, this.xIsNext ? "X" : "O");
        this.xIsNext = !this.xIsNext;
        this.checkWinner();
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
          this.winner = this.cells[a];
        }
      }
    },
    resetGame() {
      this.cells = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = null;
    },
  },
};
</script>

<style scoped>
.tic-tac-toe {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  margin: 20px auto;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border: 2px solid #007bff; /* Updated border color */
  transition: background-color 0.3s, transform 0.2s;
}

.cell:hover {
  background-color: #e0e0e0;
  transform: scale(1.05); /* Slightly enlarge cell on hover */
}

.result {
  margin-top: 20px;
}

.play-again-button {
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.play-again-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
