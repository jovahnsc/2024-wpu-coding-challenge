function feast([...beast], [...dish]) {
  if (beast[0] != dish[0]) {
    return false;
  } else if (beast[0] == dish[0]) {
    if (beast[beast.length - 1] != dish[dish.length - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(feast("great blue heron", "garlic naan"));
