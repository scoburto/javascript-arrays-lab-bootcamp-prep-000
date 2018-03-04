const app = "I don't do much."

function destructivelyAppendKitten(list,felix) {
  list.push(felix);
  return list;
}

function destructivelyPrependKitten(list,felix) {
  list.unshift(felix);
  return list;
}

function destructivelyRemoveLastKitten(list) {
  list.pop();
  return list;
}

function destructivelyRemoveFirstKitten(list) {
  list.shift();
  return list;
}