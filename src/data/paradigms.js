// Core content for the paradigm explorer.
// "category" groups each paradigm under the two big families: imperative or declarative.

export const FAMILIES = {
  imperative: {
    id: 'imperative',
    name: 'Imperative',
    tagline: 'Tell the computer HOW to do it, step by step.',
    analogy: 'Like a recipe: cream the butter and sugar, crack in the eggs, fold in the flour, bake for 20 minutes.',
    color: '#2563eb',
    colorSoft: '#dbeafe',
  },
  declarative: {
    id: 'declarative',
    name: 'Declarative',
    tagline: 'Tell the computer WHAT you want, and let it work out how.',
    analogy: "Like ordering at a restaurant: you say \"I'd like the pasta, no cheese\" — you don't tell the kitchen how to cook it.",
    color: '#7c3aed',
    colorSoft: '#ede9fe',
  },
};

export const PARADIGMS = [
  {
    id: 'procedural',
    family: 'imperative',
    name: 'Procedural',
    icon: '📋',
    oneLiner: 'A list of instructions carried out in order, grouped into reusable procedures.',
    description:
      "Procedural programming is the most direct style: you write a sequence of steps, exactly like a to-do list. You can group steps into named 'procedures' (also called functions or subroutines) so you can reuse them without retyping everything.",
    features: [
      'Code runs top-to-bottom, in order',
      'Uses variables that can change (be reassigned) as the program runs',
      'Loops (for/while) repeat steps; if/else makes decisions',
      'Procedures/functions group steps so you can reuse them',
    ],
    languages: ['C', 'Pascal', 'BASIC'],
    example: {
      title: 'Add up all the numbers in a list',
      code:
`let numbers = [4, 8, 15, 16, 23, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}

console.log(total); // 108`,
    },
  },
  {
    id: 'oop',
    family: 'imperative',
    name: 'Object-Oriented (OOP)',
    icon: '🧩',
    oneLiner: "Bundles data and the actions that use it together, into 'objects'.",
    description:
      'Object-oriented programming models a program as a collection of objects, similar to real-world things. Each object has properties (data) and methods (actions it can perform). A "class" is the blueprint used to create objects, and objects can be built from other objects through inheritance.',
    features: [
      "Objects bundle data (properties) with behaviour (methods)",
      "Classes are blueprints for creating objects",
      'Encapsulation hides internal details behind a clean interface',
      'Inheritance lets one class reuse and extend another',
    ],
    languages: ['Java', 'C++', 'C#', 'Python', 'Ruby'],
    example: {
      title: 'Model a Car as an object',
      code:
`class Car {
  constructor(colour, speed) {
    this.colour = colour;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }
}

const mini = new Car("red", 0);
mini.accelerate();
console.log(mini.speed); // 10`,
    },
  },
  {
    id: 'functional',
    family: 'declarative',
    name: 'Functional',
    icon: '🧮',
    oneLiner: 'Builds programs by combining pure functions, like mathematical expressions.',
    description:
      "Functional programming treats computation as evaluating expressions, not changing state. You describe a transformation — 'take this list and give me the even numbers' — using functions that always give the same output for the same input, and never secretly change data elsewhere.",
    features: [
      'Functions are "pure": same input always gives the same output',
      'Avoids changing (mutating) data directly',
      'Functions can be passed around like data (e.g. map, filter)',
      'Focuses on *what* the result should be, not the step-by-step process',
    ],
    languages: ['Haskell', 'Elixir', 'F#'],
    example: {
      title: 'Get all the even numbers from a list',
      code:
`const numbers = [4, 8, 15, 16, 23, 42];

const evens = numbers.filter(n => n % 2 === 0);

console.log(evens); // [4, 8, 16, 42]`,
    },
  },
  {
    id: 'logic',
    family: 'declarative',
    name: 'Logic',
    icon: '🔎',
    oneLiner: 'You state facts and rules; the computer searches for an answer.',
    description:
      "Logic programming describes a problem as a set of facts and rules about the world. Instead of saying how to solve it, you ask a question and the computer searches through the facts and rules to find an answer that fits — a bit like describing a family tree and then asking 'who is Sam's grandparent?'",
    features: [
      'Program = facts + rules, not step-by-step instructions',
      'You ask questions ("queries") and the system searches for answers',
      'Good for problems about relationships, rules and logic puzzles',
      'The "how" (the search) is handled automatically',
    ],
    languages: ['Prolog', 'Datalog'],
    example: {
      title: 'Facts and a rule about family',
      code:
`parent(maya, sam).
parent(sam, alex).

grandparent(X, Y) :- parent(X, Z), parent(Z, Y).

?- grandparent(maya, alex).
% true.`,
    },
  },
  {
    id: 'declarative-markup',
    family: 'declarative',
    name: 'Declarative Queries & Markup',
    icon: '🗂️',
    oneLiner: 'Describes the result you want — the engine figures out how to produce it.',
    description:
      "Some languages aren't about calculations at all — they describe an outcome and leave the 'how' entirely to an engine underneath. SQL describes *which* data you want, not how to search the database for it. HTML/CSS describe *what* a webpage should look like, not the steps a browser takes to draw it on screen.",
    features: [
      'You describe the desired result, not the method',
      'An underlying engine (database, browser) works out the "how"',
      'Very readable — close to natural language',
      'Little or no concept of step-by-step order',
    ],
    languages: ['SQL', 'HTML/CSS'],
    example: {
      title: 'Ask a database for data',
      code:
`SELECT name, age
FROM students
WHERE age >= 16
ORDER BY name;`,
    },
  },
];

export const paradigmsByFamily = (familyId) => PARADIGMS.filter((p) => p.family === familyId);
