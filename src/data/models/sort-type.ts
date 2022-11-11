export namespace Sort {
  export class Type {
    title: String = "";
    hasOptions: Boolean = false;
    selectedOption: Option | undefined = undefined;

    constructor(title: String, hasOptions: Boolean = false) {
      this.title = title;
      this.hasOptions = hasOptions;
    }

    selectOption(option: Option | undefined) {
      this.selectedOption = option;
    }

    clearOption() {
      this.selectOption(undefined);
    }

    isOptionSelected(option: Option): boolean {
      return this.selectedOption == option;
    }
  }

  export class Option {
    title: String = "";

    constructor(title: String) {
      this.title = title;
    }
  }
}
