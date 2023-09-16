export default class Collapse {
  constructor(triger, target) {
    this.triger = triger || document.querySelector('.triger');
    this.target = target || document.querySelector('.target');

    this.activateCollapsing();
  }

  activateCollapsing() {
    this.triger.addEventListener('click', () => {
      if (this.target.style.height === '0px') {
        this.target.style.height = `${this.target.scrollHeight}px`;
      } else {
        this.target.style.height = `${this.target.scrollHeight}px`;
        // window.getComputedStyle(elBlock, null).getPropertyValue("height");
        this.target.clientHeight; // eslint-disable-line no-unused-expressions
        this.target.style.height = '0';
      }
    });

    this.target.addEventListener('transitionend', () => {
      if (this.target.style.height !== '0px') {
        this.target.style.height = 'auto';
      }
    });
  }
}
