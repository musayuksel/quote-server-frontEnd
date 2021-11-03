export default function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}