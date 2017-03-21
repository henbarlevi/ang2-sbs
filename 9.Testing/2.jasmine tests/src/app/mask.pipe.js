//pipe that show only letters that exist in the selection, other letters will be '*'
class MaskPipe {

  transform(value, selection) {
    let masked = '';
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (selection.includes(c)) {
        masked += c;
      } else {
        masked += '*';
      }
    }
    return masked;
  }

}
