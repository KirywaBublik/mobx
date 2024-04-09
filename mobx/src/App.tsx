import { observer } from "mobx-react-lite";
import todoStore from "./store/todo-store";

const App = observer(() => {

    
    return(
        <div>
            <button onClick={() => todoStore.addTodo()}>add</button>
            {
                todoStore.todo.map(t => (
                    <div key={t.id}>
                        <input type="checkbox" checked={t.complete} onChange={() => todoStore.completeTodo(t.id)} />
                        {t.title}
                        <button onClick={() => todoStore.removeTodo(t.id)}>remove</button>
                    </div>
                ))
            }
        </div>
    )
});
export default App;