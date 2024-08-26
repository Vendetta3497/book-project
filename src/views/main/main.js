import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../../components/header/header";

export class MainView extends AbstractView {
   state = {
      list: [],
      loading: false,
      searchQuery: undefined,
      offSet : 0
   }


   constructor(appState) {
      super();
      this.appState = appState;
      this.appState = onChange(this.appState, this.appStateHook.bind(this))
      this.setTitle('Book looking')
   }

   appStateHook(path) {
      if (path === 'favorites') {
         console.log(path);
         
      }
   }

   render() {
      const main = document.createElement('div');
      // main.innerHTML = `Count of books : ${this.appState.favorites.length}`;
      this.app.innerHTML = '';
      this.app.append(main);
      this.renderHeader()
      this.appState.favorites.push('rr')
   }

   renderHeader() {
      const header = new Header(this.appState).render();
      this.app.prepend(header)
   }
}