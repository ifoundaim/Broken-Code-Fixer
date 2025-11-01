#!/usr/bin/env node
// broken.js — "Broken Code Fixer" sandbox (intentionally buggy)

const round = Number(process.argv[2] || 0);

switch (round) {
  case 1: bugReferenceError(); break;     // Round 1: Name typo (ReferenceError)
  case 2: bugOffByOne(); break;           // Round 2: Off-by-one loop bound
  case 3: bugPropertyOfUndefined(); break;// Round 3: Property of undefined
  default:
    console.log("Usage:");
    console.log("  node broken.js 1   # Round 1: ReferenceError (name typo)");
    console.log("  node broken.js 2   # Round 2: Off-by-one loop bound");
    console.log("  node broken.js 3   # Round 3: property of undefined");
    process.exit(1);
}

// --- Round 1: ReferenceError (typo) -------------------------------
function bugReferenceError() {
  const userName = "Hymn";
  console.log("About to greet:", userName);
  // BUG: variable name typo (usrName vs userName) -> ReferenceError
  console.log("Hello, " + usrName);
}

// --- Round 2: Off-by-one loop bound -------------------------------
function bugOffByOne() {
  // Intent: print numbers 1 through 5 (inclusive)
  console.log("Counting 1..5:");
  // BUG: Prints 1..6 because the stop condition is wrong
  for (let i = 1; i <= 6; i++) {
    console.log(i);
  }
}

// --- Round 3: Property of undefined (TypeError) -------------------
function bugPropertyOfUndefined() {
  // Intent: show the length of the first item’s text
  const items = []; // BUG: empty list; items[0] is undefined
  console.log("Items length:", items.length);
  // TypeError: cannot read properties of undefined (reading 'length')
  const first = items[0];
  console.log("First item length:", first.length);
}
