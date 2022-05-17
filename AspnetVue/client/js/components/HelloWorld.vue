<template>
    <div>
        <h1>Hello World</h1>

        <p>data from API = {{ title }}</p>
        <button v-on:click="handleClick">{{ count }}</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    created: async function (this: HelloWorld) {
        await this.fetchData();
    },
})
export default class HelloWorld extends Vue {
    title = "";
    count = 0;

    handleClick() {
        this.count++;
    }

    async fetchData() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (response.ok) {
            const json = await response.json();
            this.title = json.title;
        }
    }
}
</script>
