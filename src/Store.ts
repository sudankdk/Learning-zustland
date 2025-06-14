import {create} from 'zustand';

type CounterStore ={
    count: number;
    increment: ()=> void;
    incementAsync: ()=> Promise<void>;
    decrement: ()=> void;
}


export const useCounterStore = create<CounterStore>((set)=>({
    count: 0,
    increment: ()=>{
        set((state)=>({
            count: state.count+1
        }))
    },
    incementAsync: async ()=>{
        await new Promise((resolve)=> setTimeout(resolve,1000))
        set((state)=>({
            count: state.count+1
        }))
    },
    decrement: ()=>{
        set((state)=>({
            count: state.count-1
        }))
    },
}))