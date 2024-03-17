import { createEffect, createStore } from "effector";


export const add = createEffect()
export const del = createEffect()
export const sendNumber = createEffect()

export const $store = createStore<number>(0)
    .on(add, (state) => state + 1)
    .on(del, (state) => state - 1)