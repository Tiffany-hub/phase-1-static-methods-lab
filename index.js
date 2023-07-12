class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-\s']/g, '');
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }

}

console.log(Formatter.capitalize('Tiffany'));
console.log(Formatter.sanitize('he$llo-Tiff#any'));
console.log(Formatter.titleize('While you were sleeping is her favourite drama'));