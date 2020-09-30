const app = new Vue({
    el: "#app",
    data: {
        restaurantName: "Café avec Vue",
        year: 2020,
        mail: 'hello@cafewithavue.bakery',
        adress: '18 avenue du Beurre, Paris, France',
        phoneNumber: '01 88 88 88 88',
        costOfApple: 6,
        costOfBanane: 3,
        costOfCoconut: 8,
    },
    computed: {
        totalAmount() {
            return this.costOfApple + this.costOfBanane + this.costOfCoconut
        }
    }
})
