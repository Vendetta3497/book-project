import { MainView } from "./views/main/main";

class App {
   routes = [
      { path: '', view: MainView },
   ];

   appState = {
      favorites: []
   }
   constructor() {
      window.addEventListener('hashchange', this.route.bind(this));
      this.route();
   }

   route() {
      if (this.courrentView) {
         this.courrentView.destroy();
       }

      
      const view = this.routes.find(r => r.path == location.hash).view;
      this.courrentView = new view(this.appState);
      this.courrentView.render();
   }
}

new App();