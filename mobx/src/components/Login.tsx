import { useForm, SubmitHandler } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { context } from "../main";
import { Inputs } from "./Register";

export const Login = observer(() => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const { store } = useContext(context)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        store.login(data, "/auth")
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>nick</p>
            <input type="text" {...register("name")} />
            <p>email</p>
            <input type="text" {...register("email")} />
            <p>pass</p>
            <input type="password" {...register("password", { required: true })} />
            <button>log</button>
        </form>
    )
})