import { createEffect, createEvent, createStore, sample } from 'effector'
import axios from 'axios'

export const changeStore = createEvent<number>()

export const incrementButtonPressed = createEvent()

export const decrementButtonPressed = createEvent()

export const $store = createStore<number>(0)

const sendStateToServerFx = createEffect(async (state: number) => {
	try {
		await axios.post('https://affdf12e9349600c.mokky.dev/number', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			state,
		})
	} catch (error) {
		console.error('Error posting:')
	}
})

sample({
	source: changeStore,
	target: [sendStateToServerFx, $store],
})

sample({
	source: sendStateToServerFx.pending,
	clock: changeStore,
	filter: (pending, value) => !pending,
	fn: (pending, value) => value,
	target: sendStateToServerFx,
})

// Но что, если нам нужно предотвратить эти изменения, когда sendStateToServerFxон находится в состоянии ожидания (выполняется запрос/получается ответ)
// Эта операция говорит: «Когда будут вызваны часы , возьмите значение из источника и отправьте его в фильтр . Если фильтр возвращает значение , trueвызовите fn и возвращаемое значение из fn отправьте в цель , в противном случае пропустите шаги fn и target »

sample({
	source: $store,
	clock: incrementButtonPressed,
	fn: state => state + 1,
	target: changeStore,
})

sample({
	source: $store,
	clock: decrementButtonPressed,
	fn: state => state - 1,
	target: changeStore,
})
