import { createEvent, createStore } from 'effector'

export const textValue = createEvent<string>()

export const $store = createStore("")

$store.on(textValue, (_, text) => text)
