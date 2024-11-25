import { createRoot } from "react-dom/client";
import { observable, configure, reaction } from "mobx";
import { connectToFirebase } from "../firebase/firebaseModel"

configure({ enforceActions: "never" }); 

import { model } from "../model/rehabModel"; 
import { Search } from "../components/search/searchPresenter";

const reactiveModel = observable(model);

connectToFirebase(reactiveModel, reaction);

createRoot(document.getElementById('root')).render(
  <div>
    <h1>My App</h1>

    <Search model={reactiveModel} />
  </div>
);

// Expose model for debugging
window.myModel = reactiveModel;
