import { observer } from "mobx-react-lite";
import todoStore from "./store/todo-store";
import { useEffect } from "react";

const App = observer(() => {

    const { getPostsActions, todo } = todoStore;

    useEffect(() => {
        getPostsActions();
    }, [])

    console.log(todo?.value)
    return (
        <div>
        </div>
    )
});
export default App;