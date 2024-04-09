import { observer } from "mobx-react-lite";
import App from "./App";
import Counter from "./store/counterStore";

const stores = {
    MoviesStore: new Counter(),
    WatchedStore: new Counter(),
}

const Wrapper = observer(() => {

    return (
        <div>
            <App count={stores.MoviesStore.count} reset={stores.MoviesStore.reset} addCount={() => stores.MoviesStore.addCount()} removeCount={() => stores.MoviesStore.removeCount()} />
            <App count={stores.WatchedStore.count} reset={stores.WatchedStore.reset} addCount={() => stores.WatchedStore.addCount()} removeCount={() => stores.WatchedStore.removeCount()} />
        </div>
    )
});
export default Wrapper;