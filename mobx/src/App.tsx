import { observer } from "mobx-react-lite";
import todoStore from "./store/todo-store";
import { useEffect } from "react";

const App = observer(() => {

    useEffect(() => {
        todoStore.getPostsActions();
    }, [])

    console.log(todoStore.todo.map(item => item.id))

    return (
        <div>
            123
        </div>
    )
});
export default App;