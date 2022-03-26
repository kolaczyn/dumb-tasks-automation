"use strict";
const sleep = require("util").promisify(setTimeout);
const {
  mouse,
  left,
  right,
  up,
  down,
  straightTo,
  centerOf,

  Region,
  Point,
} = require("@nut-tree/nut-js");

const drawX = async () => {
  const target0 = new Point(450, 450);
  const target1 = new Point(600, 600);
  const target2 = new Point(600, 450);
  const target3 = new Point(450, 600);

  await mouse.setPosition(target0);
  await mouse.move(straightTo(target1));

  await sleep(150);

  await mouse.setPosition(target2);
  await mouse.move(straightTo(target3));
};

const drawD = async () => {
  const target0 = new Point(800, 300);
  const target1 = new Point(800, 600);
  const target2 = new Point(1000, 450);

  await mouse.setPosition(target0);
  await mouse.move(straightTo(target1));
  await mouse.move(straightTo(target2));
  await mouse.move(straightTo(target0));
};

const drawXD = async () => {
  await drawX();
  await sleep(650);
  await drawD();
};

(async () => {
  while (1 == "1") {
    await drawXD();
    await sleep(5000);
  }
})();
