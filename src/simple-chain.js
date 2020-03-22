const chainMaker = {
  str: [],

  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') this.str.push(`|`);
    else this.str.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.str.length && parseInt(position)) {
      this.str.splice(position - 1, 1);
      return this;
    }
    else {
      this.str = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let result = (`( `).concat(this.str.join(` )~~( `)).concat(` )`);
    this.str = [];
    return result;
  }
};

module.exports = chainMaker;
