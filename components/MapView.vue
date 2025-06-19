<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
const coords = [
    {
        number: "84",
        street: "Elm Street",
        x: 1.5,
        y: 21,
        width: 6.5,
        height: 15,
    },
    {
        number: "86",
        street: "Elm Street",
        x: 9.25,
        y: 21,
        width: 6.5,
        height: 15,
    },
    {
        number: "82/84",
        street: "Elm Street",
        x: 25.5,
        y: 21,
        width: 7.5,
        height: 16,
    },
    {
        number: "80",
        street: "Elm Street",
        x: 33.5,
        y: 21,
        width: 7,
        height: 16,
    },
    {
        number: "78",
        street: "Elm Street",
        x: 42,
        y: 21,
        width: 6.5,
        height: 16,
    },
    {
        number: "76",
        street: "Elm Street",
        x: 50.5,
        y: 21,
        width: 7,
        height: 16,
    },
    {
        number: "74",
        street: "Elm Street",
        x: 58.5,
        y: 21,
        width: 7,
        height: 16,
    },
    {
        number: "72",
        street: "Elm Street",
        x: 66.75,
        y: 21,
        width: 7,
        height: 16,
    },
    {
        number: "70",
        street: "Elm Street",
        x: 84.5,
        y: 21,
        width: 7,
        height: 16,
    },
    {
        number: "68",
        street: "Elm Street",
        x: 92,
        y: 21.5,
        width: 6.5,
        height: 17,
    },
    {
        number: "51",
        street: "Holyoke Road",
        x: 25.5,
        y: 42,
        width: 11,
        height: 10,
    },
    {
        number: "49",
        street: "Holyoke Road",
        x: 25.5,
        y: 52.5,
        width: 11.5,
        height: 10,
    },
    {
        number: "29",
        street: "Holyoke Road",
        x: 42,
        y: 48,
        width: 6,
        height: 16.5,
    },
    {
        number: "27",
        street: "Holyoke Road",
        x: 51.5,
        y: 48,
        width: 6.5,
        height: 14.5,
    },
];

const router = useRouter();
function onClick(e: MouseEvent) {
    if (e.target instanceof Element && !e.target.closest("a")) {
        // Clicked away from a link, navigate home
        router.push("/");
    }
}
</script>

<template>
    <nav class="map-view" @click="onClick">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <g>
                <image
                    href="../media/holyoke.webp"
                    height="100"
                    width="100"
                    preserveAspectRatio="none"
                />

                <template
                    v-for="coord of coords"
                    :key="coord.number + coord.street"
                >
                    <RouterLink
                        :to="{
                            name: 'house',
                            params: {
                                house: coord.number + ' ' + coord.street,
                            },
                        }"
                    >
                        <rect
                            :x="coord.x"
                            :y="coord.y"
                            :width="coord.width"
                            :height="coord.height"
                        >
                            <title>{{ coord.number }} {{ coord.street }}</title>
                        </rect>
                        <!-- The <g> container is an unfortunate hack to get centered text in safari -->
                        <g>
                            <text
                                :x="coord.x + coord.width / 2"
                                :y="coord.y + coord.height / 2"
                            >
                                {{ coord.number }}
                            </text>
                        </g>
                    </RouterLink>
                </template>
            </g>
        </svg>
    </nav>
</template>

<style>
:root {
    --aspect-ratio: 1.5;
    --transition-time: 0.2s;
}

.map-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f0e8d1;
    container-type: size;
}

.map-view svg {
    aspect-ratio: var(--aspect-ratio);
    max-height: 100%;
    transition: aspect-ratio var(--transition-time);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);

    g {
        transform-origin: center;
        transition: transform var(--transition-time);
    }

    a {
        text-decoration: none;
    }

    a g {
        transform: scaleX(calc(1 / var(--aspect-ratio)));
        transform-box: fill-box;
    }

    a rect {
        fill: transparent;
        transition: fill var(--transition-time);
    }

    a text {
        /* transition the fill and the stroke */
        transition:
            fill var(--transition-time),
            stroke var(--transition-time);
        fill: pink;
        stroke: black;
        stroke-width: 0.3px;
        font-weight: 800;
        font-size: 3px;
        paint-order: stroke;
        dominant-baseline: middle;
        text-anchor: middle;
    }

    /* a:hover { */
    a {
        cursor: pointer;

        rect {
            fill: #0000ff50;
        }

        text {
            fill: white;
        }
    }
}

/* Change this to a container query */

@container (aspect-ratio < 1) {
    .map-view svg {
        aspect-ratio: calc(1 / var(--aspect-ratio));

        g {
            transform: rotate(90deg);
        }

        a g {
            transform: rotate(-90deg) scaleY(calc(1 / var(--aspect-ratio)));
        }
    }
}
</style>
