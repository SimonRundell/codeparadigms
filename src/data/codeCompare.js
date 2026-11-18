// "Same task, two ways" examples for the Explore page.
export const CODE_COMPARISONS = [
  {
    id: 'evens',
    task: 'Get the even numbers from a list',
    imperative: {
      label: 'Imperative (step by step)',
      code:
`let numbers = [4, 8, 15, 16, 23, 42];
let evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}`,
      note: 'You spell out every step: make an empty list, check each number, decide, add it.',
    },
    declarative: {
      label: 'Declarative (describe the result)',
      code:
`const numbers = [4, 8, 15, 16, 23, 42];

const evens = numbers.filter(n => n % 2 === 0);`,
      note: 'You describe what you want ("the ones that are even") and let .filter() handle the loop.',
    },
  },
  {
    id: 'square',
    task: 'Draw a square',
    imperative: {
      label: 'Imperative (turtle-style steps)',
      code:
`moveForward(100);
turnRight(90);
moveForward(100);
turnRight(90);
moveForward(100);
turnRight(90);
moveForward(100);`,
      note: 'Like giving a robot turn-by-turn directions to trace out a square.',
    },
    declarative: {
      label: 'Declarative (CSS)',
      code:
`.square {
  width: 100px;
  height: 100px;
  background: steelblue;
}`,
      note: 'You describe the shape you want — the browser works out how to paint it on screen.',
    },
  },
  {
    id: 'students',
    task: 'Find students aged 16 or over',
    imperative: {
      label: 'Imperative (step by step)',
      code:
`let result = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 16) {
    result.push(students[i]);
  }
}`,
      note: 'You manually loop through every student and check the condition yourself.',
    },
    declarative: {
      label: 'Declarative (SQL)',
      code:
`SELECT * FROM students
WHERE age >= 16;`,
      note: 'You just describe the data you want. The database decides how to search for it.',
    },
  },
];
