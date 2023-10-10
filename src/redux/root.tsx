import { configureStore } from '@reduxjs/toolkit';
// import testStore from './test-service/reducer';

const store = configureStore({
	reducer: {
		// testStore,
	},
});

// Global store type
export type StoreType = ReturnType<typeof store.getState>;

// Dispatch type
export type DispatchType = typeof store.dispatch;

export default store;
