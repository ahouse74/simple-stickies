Vue.createApp({
    data() {
        return {
            stickies: [],
            storageKey: "sticky-notes-simple"
        };
    },

    mounted() {

        this.loadFromStorage();
    },

    methods: {


        addStickie() {

            this.stickies.push({
                id: crypto.randomUUID ? crypto.randomUUID() : Date.now() + Math.random(),
                text: ""
            });
        },

        deleteStickie(id) {

            this.stickies = this.stickies.filter(stickie => stickie.id !== id);
        },


        clearAll() {

            if (confirm("Delete all notes?")) {
                this.stickies = [];
                localStorage.removeItem(this.storageKey);
            }
        },

        // ================================
        // Helper — Character Count
        // ================================

        charCount(text) {
            return (text ?? "").length;
        },


        saveToStorage() {
            localStorage.setItem(this.storageKey, JSON.stringify(this.stickies));
        },

        loadFromStorage() {
            if (localStorage.getItem(this.storageKey)) {
                this.stickies = JSON.parse(localStorage.getItem(this.storageKey));
            } else {
                this.stickies = [];
            }
        }
    },

    watch: {
        stickies: {
            handler() {
                this.saveToStorage();
            },
            deep: true
        }
    }
}).mount("#app");