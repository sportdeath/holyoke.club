<script setup lang="ts">
const coords = [
    {
        number: "82/84",
        street: "Elm Street",
        x: 25.5,
        y: 20,
        width: 7.5,
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
];
</script>

<template>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <g>
            <image
                href="../media/holyoke.png"
                height="100"
                width="100"
                preserveAspectRatio="none"
            />

            <template v-for="coord of coords">
                <a href="">
                    <rect
                        :x="coord.x"
                        :y="coord.y"
                        :width="coord.width"
                        :height="coord.height"
                    >
                        <title>{{ coord.number }} {{ coord.street }}</title>
                    </rect>
                    <!-- The <g> is an unfortunate hack to get centered text in safari -->
                    <g>
                        <text
                            :x="coord.x + coord.width / 2"
                            :y="coord.y + coord.height / 2"
                        >
                            {{ coord.number }}
                        </text>
                    </g>
                </a>
            </template>
        </g>
    </svg>
</template>

<style>
:root {
    --aspect-ratio: 1.5;
}

#app {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

svg {
    aspect-ratio: var(--aspect-ratio);
    max-height: 100%;
    width: min(100%, calc(100vh * var(--aspect-ratio)));
    transition: all 0.2s;

    * {
        transition: all 0.2s;
    }

    a {
        text-decoration: none;
    }

    g {
        transform-origin: center;
    }

    a g {
        transform: scaleX(calc(1 / var(--aspect-ratio)));
        transform-box: fill-box;
    }

    a rect {
        fill: transparent;
    }

    a text {
        fill: pink;
        stroke: black;
        stroke-width: 0.3px;
        font-weight: 800;
        font-size: 3px;
        paint-order: stroke;
        dominant-baseline: middle;
        text-anchor: middle;
    }

    a:hover {
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
@media (max-aspect-ratio: 2/3) {
    svg {
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
