setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);


const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < spin.length * 2; i++) {
  setTimeout(() => {
    process.stdout.write(spin[i % spin.length]);
  }, i * 200);
}

//End with a pipe
setTimeout(() => {
  process.stdout.write('\r|\n');
}, 1700);