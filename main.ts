// SPDX-License-Identifier: MIT
// Two Robots in an Elevator — a one-line make.fun entry.
//
// The scene: two robots ride the same elevator, every day, in silence.
// One of them finally decides to make small talk. It does it the only
// way a machine knows how: by reporting a number first.

export const line =
  "This is the 214th time we have shared this elevator. My greeting subroutine still returns the same output. Hello.";

// Why the robot counts the rides: a robot does not remember faces, it
// remembers occurrences. Two hundred and fourteen shared elevator rides
// is not small talk to a machine — it is a dataset. The joke is that it
// treats the dataset as an opening line, the way a person might say
// "we keep running into each other". Same instinct, different firmware.

// The greeting subroutine is the whole punchline. The robot has a
// dedicated piece of code for saying hello, and after 214 rides it has
// never been patched, never been updated, never learned a second phrase.
// It runs, it returns the same output, and the robot delivers that output
// with total confidence — because to the subroutine, repetition is success.

export function greet(): string {
  return line;
}

// The elevator itself does half the comedy. Two machines stand in a metal
// box that moves vertically on a schedule, doors opening and closing on
// floors neither of them needs, in a silence their microphones measure
// precisely and their social modules cannot fill. The line lands because
// it is exactly what a robot would say there: a status report, delivered
// as a conversation, ending in the flattest possible "Hello."

// Delivery note: deadpan, no exclamation mark, no emoji. The other robot
// does not answer in this entry — the silence after "Hello." is the rest
// of the joke, and it belongs to the reader's imagination.

export default line;
