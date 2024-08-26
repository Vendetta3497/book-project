import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
   constructor(appState) {
      super();
      this.appState = appState;
   }

   render() {
      this.el.innerHTML = '';
      this.el.classList.add('header');
      this.el.innerHTML = `
         <div class="header__logo">
            <img src="/src/static/logo.svg" alt="logo" />
         </div>
         <div class="menu">
            <a class="menu__item" href="#">
               <img src="/src/static/logo.svg" alt="search" />
            </a>          
         </div>
      `;
      return this.el;
   }
}