const app = "I don't do much."

function destructivelyAppendKitten(felix) {
  kittens.push(felix);
  return kittens;
}

function destructivelyPrependKitten(felix) {
  kittens.unshift(felix);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(felix) {
  
}