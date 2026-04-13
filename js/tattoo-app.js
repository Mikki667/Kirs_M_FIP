export function TattoosApp() { 
       
    const app = Vue.createApp({
        data() {
            return {
                tattoosData: [],
                error: null,
                loadingTattoos: true
            }
        },
        created() {
            this.getTattoos()
        },
        methods: {
            getTattoos() {
                fetch("http://127.0.0.1:8000/api/tattoos")
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Failed to fetch the tattoos");
                    }
                    return res.json()
                })
                .then(tattoos => {
                    this.tattoosData = tattoos
                })
                .catch(err => {
                    this.error = err.message;
                })
                .finally(()=>{
                    this.loadingTattoos = false;
                })
            }
        }
    })
    .mount("#app");
}