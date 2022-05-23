<template>
    <div class="">
        <div class="">
            <div v-if="loading">
                <div
                    class="overlay d-flex align-items-center justify-content-center"
                >
                    <div class="spinner-border" />
                </div>
            </div>

            <div class="d-flex overflow-auto">
                <div
                    v-for="column in columns"
                    :key="column.title"
                    class="px-3"
                    style="min-width: 360px; max-width: 360px;"
                >
                    <div
                        class="bg-light min-vh-100 p-3 text-black-50 rounded text-left "
                    >
                        <div class="font-weight-bold mb-3">
                            {{ column.title }}
                        </div>

                        <dragable
                            :list="column.tasks"
                            :animation="200"
                            @end="onMove"
                            group="tasks"
                        >
                            <div
                                v-for="task in column.tasks"
                                :key="task.id"
                                class="shadow-sm bg-white mb-3 rounded p-3"
                                style="cursor: move;"
                            >
                                <div class="font-weight-bold mb-3">
                                    {{ task.title }}
                                </div>

                                <div class="d-flex justify-content-between">
                                    <div>
                                        {{ task.date }}
                                    </div>

                                    <div>
                                        {{ task.type }}
                                    </div>
                                </div>
                            </div>
                        </dragable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.overlay {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* position: fixed; */
    /* z-index: 1060; */
    /* left: 0; */
    /* top: 0; */
    /* width: 100%; */
    /* height: 100%; */
    /* overflow: auto; */
    /* background: rgba(0, 0, 0, 0.4); */

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1060;
    cursor: pointer;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    created: async function(this: HelloWorld) {
        // await this.fetchData();
    },
})
export default class HelloWorld extends Vue {
    loading = false;

    async onMove(a, b, c, d) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        this.loading = true;
        await new Promise((r) => setTimeout(r, 2000));
        this.loading = false;
    }

    columns = [
        {
            title: "Backlog",
            tasks: [
                {
                    id: 1,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
                {
                    id: 2,
                    title: "Provide documentation on integrations",
                    date: "Sep 12",
                },
                {
                    id: 3,
                    title: "Design shopping cart dropdown",
                    date: "Sep 9",
                    type: "Design",
                },
                {
                    id: 4,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
                {
                    id: 5,
                    title: "Test checkout flow",
                    date: "Sep 15",
                    type: "QA",
                },
            ],
        },
        {
            title: "In Progress",
            tasks: [
                {
                    id: 6,
                    title: "Design shopping cart dropdown",
                    date: "Sep 9",
                    type: "Design",
                },
                {
                    id: 7,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
                {
                    id: 8,
                    title: "Provide documentation on integrations",
                    date: "Sep 12",
                    type: "Backend",
                },
            ],
        },
        {
            title: "Review",
            tasks: [
                {
                    id: 9,
                    title: "Provide documentation on integrations",
                    date: "Sep 12",
                },
                {
                    id: 10,
                    title: "Design shopping cart dropdown",
                    date: "Sep 9",
                    type: "Design",
                },
                {
                    id: 11,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
                {
                    id: 12,
                    title: "Design shopping cart dropdown",
                    date: "Sep 9",
                    type: "Design",
                },
                {
                    id: 13,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
            ],
        },
        {
            title: "Done",
            tasks: [
                {
                    id: 14,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
                {
                    id: 15,
                    title: "Design shopping cart dropdown",
                    date: "Sep 9",
                    type: "Design",
                },
                {
                    id: 16,
                    title: "Add discount code to checkout page",
                    date: "Sep 14",
                    type: "Feature Request",
                },
            ],
        },
    ];
}
</script>
