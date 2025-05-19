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
                    <text
                        :x="coord.x + coord.width / 2"
                        :y="coord.y + coord.height / 2"
                    >
                        {{ coord.number }}
                    </text>
                </a>
            </template>
        </g>
    </svg>
</template>

<style>
#app {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

svg {
    max-height: 100vh;
    aspect-ratio: 3/2;
    transition: all 0.2s;

    * {
        transition: all 0.2s;
    }

    a {
        text-decoration: none;
    }

    g {
        transform-origin: 50% 50%;
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
        transform-origin: center;
        transform-box: fill-box;
        transform: scaleX(0.666);
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
@media (max-aspect-ratio: 2/3) {
    svg {
        aspect-ratio: 2/3;

        g {
            transform: rotate(90deg);
        }

        a text {
            transform: rotate(-90deg) scaleY(0.6666);
        }
    }
}
</style>
