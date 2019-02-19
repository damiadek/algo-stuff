function minMaxHealth(genes, health, d) {
  let index,
    j,
    sum = 0,
    healthSum = 0,
    geneHealth = {},
    _health,
    gene;

  for (let i = 0; i < genes.length; i++) {
    gene = genes[i];
    _health = health[i];

    for (j = 0; j < d.length; ) {
      index = d.indexOf(gene, j);

      if (index == -1) {
        break;
      } else {
        j = index + 1;
        sum += _health;
      }
    }
  }

  return sum;
}
