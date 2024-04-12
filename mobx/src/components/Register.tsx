import { useForm, SubmitHandler } from "react-hook-form"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { context } from "../main"


export interface Inputs {
    name: string
    email: string
    password: number
}
export const Register = observer(() => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const { store } = useContext(context)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        store.register(data, "/register")
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>nick</p>
            <input type="text" {...register("name")} />
            <p>email</p>
            <input type="text" {...register("email")} />
            <p>pass</p>
            <input type="password" {...register("password")} />
            <br />
            <button>reg</button>
        </form>
    )
})
