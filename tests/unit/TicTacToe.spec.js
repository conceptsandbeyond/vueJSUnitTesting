import { shallowMount } from '@vue/test-utils';
import TicTacToe from '@/components/TicTacToe.vue';

describe('TicTacToe', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TicTacToe);
  });

  it('should render the Tic Tac Toe board', () => {
    const cells = wrapper.findAll('.cell');
    expect(cells.length).toBe(9); // There should be 9 cells
  });

  it('should allow players to make moves', async () => {
    const firstCell = wrapper.findAll('.cell').at(0);

    // Simulate clicking the first cell
    await firstCell.trigger('click');

    // The first move should be 'X'
    expect(firstCell.text()).toBe('X');

    const secondCell = wrapper.findAll('.cell').at(1);

    // Simulate clicking the second cell
    await secondCell.trigger('click');

    // The second move should be 'O'
    expect(secondCell.text()).toBe('O');
  });

  it('should not allow players to click on an occupied cell', async () => {
    const firstCell = wrapper.findAll('.cell').at(0);

    // First player clicks the first cell
    await firstCell.trigger('click');

    // Second player tries to click the same cell
    await firstCell.trigger('click');

    // The cell should still display 'X'
    expect(firstCell.text()).toBe('X');
  });

  it('should determine the winner', async () => {
    const cells = wrapper.findAll('.cell');

    // Simulate a winning scenario for 'X'
    await cells.at(0).trigger('click'); // X
    await cells.at(3).trigger('click'); // O
    await cells.at(1).trigger('click'); // X
    await cells.at(4).trigger('click'); // O
    await cells.at(2).trigger('click'); // X wins

    const result = wrapper.find('.result h2');
    expect(result.text()).toBe('X wins!');
  });

  it('should determine a draw', async () => {
    const cells = wrapper.findAll('.cell');

    // Simulate a draw scenario
    await cells.at(0).trigger('click'); // X
    await cells.at(1).trigger('click'); // O
    await cells.at(2).trigger('click'); // X
    await cells.at(4).trigger('click'); // O
    await cells.at(3).trigger('click'); // X
    await cells.at(5).trigger('click'); // O
    await cells.at(7).trigger('click'); // X
    await cells.at(6).trigger('click'); // O
    await cells.at(8).trigger('click'); // X

    const result = wrapper.find('.result h2');
    expect(result.text()).toBe("It's a Draw!");
  });

  it('should reset the game', async () => {
    const cells = wrapper.findAll('.cell');

    // Simulate a game where X wins
    await cells.at(0).trigger('click'); // X
    await cells.at(3).trigger('click'); // O
    await cells.at(1).trigger('click'); // X
    await cells.at(4).trigger('click'); // O
    await cells.at(2).trigger('click'); // X wins

    // Find the reset button after the game is over (when there's a winner)
    const resetButton = wrapper.find('button');

    // Make sure the reset button exists
    expect(resetButton.exists()).toBe(true);

    // Trigger the click on the reset button
    await resetButton.trigger('click');

    // After resetting, all cells should be empty
    cells.forEach((cell) => {
      expect(cell.text()).toBe('');
    });
  });


});
