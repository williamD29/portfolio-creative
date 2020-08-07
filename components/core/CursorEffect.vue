<template>
    <div>
        <div
            class="cursor-small fixed inset-0 pointer-events-none w-2 h-2 rounded-full bg-black"
        ></div>
        <canvas
            class="cursor-canvas fixed inset-0 pointer-events-none w-screen h-screen"
            resize
        ></canvas>
    </div>
</template>

<script>
import paper from 'paper/dist/paper-core.js'
import SimplexNoise from 'simplex-noise'

let clientX = -100
let clientY = -100

let lastX = 0
let lastY = 0
const isStuck = false
// let showCursor = false
let group, stuckX, stuckY // , fillOuterCursor

export default {
    mounted() {
        this.initCursor()
        this.initCanvas()
        // this.initHovers()
    },
    methods: {
        initCursor() {
            if (process.client) {
                const innerCursor = document.querySelector('.cursor-small')
                document.addEventListener('mousemove', (e) => {
                    clientX = e.clientX
                    clientY = e.clientY
                })

                const render = () => {
                    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`

                    requestAnimationFrame(render)
                }
                requestAnimationFrame(render)
            }
        },
        initCanvas() {
            if (process.client) {
                const canvas = document.querySelector('.cursor-canvas')
                const shapeBounds = {
                    width: 75,
                    height: 75,
                }
                paper.setup(canvas)
                const strokeColor = 'rgba(255, 0, 0, 0.5)'
                const strokeWidth = 0
                const segments = 8
                const radius = 30

                // we'll need these later for the noisy circle
                const noiseScale = 150 // speed
                const noiseRange = 4 // range of distortion
                let isNoisy = false // state

                // the base shape for the noisy circle
                const polygon = new paper.Path.RegularPolygon(
                    new paper.Point(0, 0),
                    segments,
                    radius
                )
                polygon.strokeColor = strokeColor
                polygon.strokeWidth = strokeWidth
                polygon.fillColor = 'rgba(255, 0, 0, 0.5)'
                polygon.smooth()
                group = new paper.Group([polygon])
                group.applyMatrix = false

                const noiseObjects = polygon.segments.map(
                    () => new SimplexNoise()
                )
                let bigCoordinates = []

                // function for linear interpolation of values
                const lerp = (a, b, n) => {
                    return (1 - n) * a + n * b
                }

                // function to map a value from one range to another range
                const map = (value, inMin, inMax, outMin, outMax) => {
                    return (
                        ((value - inMin) * (outMax - outMin)) /
                            (inMax - inMin) +
                        outMin
                    )
                }

                // the draw loop of Paper.js
                // (60fps with requestAnimationFrame under the hood)
                paper.view.onFrame = (event) => {
                    // using linear interpolation, the circle will move 0.2 (20%)
                    // of the distance between its current position and the mouse
                    // coordinates per Frame
                    if (!isStuck) {
                        // move circle around normally
                        lastX = lerp(lastX, clientX, 0.2)
                        lastY = lerp(lastY, clientY, 0.2)
                        group.position = new paper.Point(lastX, lastY)
                    } else if (isStuck) {
                        // fixed position on a nav item
                        lastX = lerp(lastX, stuckX, 0.2)
                        lastY = lerp(lastY, stuckY, 0.2)
                        group.position = new paper.Point(lastX, lastY)
                    }

                    if (isStuck && polygon.bounds.width < shapeBounds.width) {
                        // scale up the shape
                        polygon.scale(1.08)
                    } else if (!isStuck && polygon.bounds.width > 30) {
                        // remove noise
                        if (isNoisy) {
                            polygon.segments.forEach((segment, i) => {
                                segment.point.set(
                                    bigCoordinates[i][0],
                                    bigCoordinates[i][1]
                                )
                            })
                            isNoisy = false
                            bigCoordinates = []
                        }
                        // scale down the shape
                        /* const scaleDown = 0.92
                        polygon.scale(scaleDown) */
                    }

                    // while stuck and big, apply simplex noise
                    // if (isStuck && polygon.bounds.width >= shapeBounds.width) {
                    isNoisy = true
                    // first get coordinates of large circle
                    if (bigCoordinates.length === 0) {
                        polygon.segments.forEach((segment, i) => {
                            bigCoordinates[i] = [
                                segment.point.x,
                                segment.point.y,
                            ]
                        })
                    }

                    // loop over all points of the polygon
                    polygon.segments.forEach((segment, i) => {
                        // get new noise value
                        // we divide event.count by noiseScale to get a very smooth value
                        const noiseX = noiseObjects[i].noise2D(
                            event.count / noiseScale,
                            0
                        )
                        const noiseY = noiseObjects[i].noise2D(
                            event.count / noiseScale,
                            1
                        )

                        // map the noise value to our defined range
                        const distortionX = map(
                            noiseX,
                            -2,
                            2,
                            -noiseRange,
                            noiseRange
                        )
                        const distortionY = map(
                            noiseY,
                            -2,
                            2,
                            -noiseRange,
                            noiseRange
                        )

                        // apply distortion to coordinates
                        const newX = bigCoordinates[i][0] + distortionX
                        const newY = bigCoordinates[i][1] + distortionY

                        // set new (noisy) coodrindate of point
                        segment.point.set(newX, newY)
                    })
                    // }
                    polygon.smooth()
                }
            }
        },
        /* initHovers() {
            if (process.client) {
                // find the center of the link element and set stuckX and stuckY
                // these are needed to set the position of the noisy circle
                const handleMouseEnter = (e) => {
                    const navItem = e.currentTarget
                    const navItemBox = navItem.getBoundingClientRect()
                    stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
                    stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
                    isStuck = true
                }

                // reset isStuck on mouseLeave
                const handleMouseLeave = () => {
                    isStuck = false
                }

                // add event listeners to all items
                const linkItems = document.querySelectorAll('.link')
                linkItems.forEach((item) => {
                    item.addEventListener('mouseenter', handleMouseEnter)
                    item.addEventListener('mouseleave', handleMouseLeave)
                })
            }
        }, */
    },
}
</script>

<style>
* {
    cursor: none !important;
}

.cursor-small {
    top: -0.25rem;
    left: -0.25rem;
    z-index: 11000;
}

.cursor-canvas {
    z-index: 12000;
}
</style>
