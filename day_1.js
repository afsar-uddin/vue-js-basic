const { createApp} = Vue

// import {createApp} from 'vue'

const app = createApp({
    data() {
        return {
            message: "Bismillah, Alhamdulillah",
            count: 0
        }
    }
})

app.mount('#app')

const another_container = createApp({
    data() {
        return {
            message: "Subhanallah",
        }
    }
})

another_container.mount('#anotherContainer')




// createApp({
//     data() {
//         return{
//             message: "Bismillah, Alhamdulillah"
//         }
//     }
// }).mount('#app')