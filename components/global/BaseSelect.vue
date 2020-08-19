<template>
    <div
        class="space-y-1"
        @keydown.up.prevent="moveHighlightUp"
        @keydown.down.prevent="moveHighlightDown"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.space.prevent="selectHighlighted"
        @keydown.escape.prevent="escapeHandler"
    >
        <label
            v-if="label"
            :id="('listbox-label-' + title)"
            class="block text-sm font-medium leading-5 text-gray-700"
        >
            {{ title }}
        </label>
        <div v-click-outside="clickAway" class="relative">
            <span class="inline-block w-full rounded-md shadow-sm">
                <button
                    :id="('select-button-' + title)"
                    type="button"
                    aria-haspopup="listbox"
                    :aria-expanded="expanded.toString()"
                    :aria-labelledby="
                        'listbox-label-' + title + (' select-button-' + title)
                    "
                    :class="[
                        className,
                        expanded
                            ? 'focus:outline-none'
                            : `focus:outline-none focus:shadow-outline-${color} focus:border-${color}-300`,
                    ]"
                    class="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default sm:text-sm sm:leading-5"
                    @click.prevent="toggleSelect"
                >
                    <span class="block truncate">
                        {{ selected }}
                    </span>
                    <span
                        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                    >
                        <svg
                            class="w-5 h-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </span>

            <transition
                enter-active-class="transition duration-150 ease-out"
                enter-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
            >
                <div
                    v-show="expanded"
                    class="absolute z-30 w-full mt-1 bg-white rounded-md shadow-lg"
                >
                    <ul
                        :id="'options-box-' + title"
                        tabindex="-1"
                        role="listbox"
                        :aria-labelledby="('listbox-label-' + title)"
                        :aria-activedescendant="[
                            expanded ? 'listbox-item-' + options[ind] : '',
                        ]"
                        class="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                    >
                        <li
                            v-for="(option, o) in options"
                            :id="'listbox-item-' + option"
                            :key="option"
                            :tabindex="o"
                            :class="
                                highlighted === o
                                    ? `text-white bg-${color}-600`
                                    : 'text-gray-900'
                            "
                            role="option"
                            :aria-selected="selected === option"
                            class="relative py-2 pl-3 cursor-pointer select-none pr-9 focus:outline-none"
                            @mouseenter.prevent="highlightMe(o)"
                            @mouseleave.prevent="unHighlight"
                            @click.prevent="selectOption(option)"
                        >
                            <span
                                class="block antialiased truncate"
                                :class="[
                                    selected === option
                                        ? 'font-semibold'
                                        : 'font-normal',
                                ]"
                            >
                                {{ option }}
                            </span>
                            <span
                                v-if="selected === option"
                                :class="[
                                    highlighted === o
                                        ? 'text-white'
                                        : `text-${color}-600`,
                                ]"
                                class="absolute inset-y-0 right-0 flex items-center pr-4"
                            >
                                <svg
                                    class="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'CustomSelect',
    directives: {
        ClickOutside,
    },
    props: {
        options: {
            type: Array,
            default() {
                return ['Lapel Pins', 'Challenge Coins', 'Keychains']
            },
        },
        className: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: 'Select product',
        },
        label: {
            type: Boolean,
            default: false,
        },
        preselected: {
            type: [String, Object],
            default: null,
        },
        color: {
            validator(value) {
                return [
                    'gray',
                    'cool-gray',
                    'pink',
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'teal',
                    'blue',
                    'indigo',
                    'purple',
                ].includes(value)
            },
            default: 'purple',
        },
    },
    data() {
        return {
            highlighted: 0,
            expanded: false,
            selected: this.preselected ? this.preselected : this.options[0],
        }
    },
    computed: {
        ind() {
            return this.options.indexOf(this.selected)
        },
        optionsLength() {
            return this.options.length - 1
        },
        focusID() {
            return 'listbox-item-' + this.options[this.highlighted]
        },
    },
    watch: {
        expanded(newVal, oldVal) {
            if (newVal) {
                this.highlighted = this.ind
            } else if (!newVal && process.browser) {
                document.getElementById('select-button-' + this.title).focus()
            }
        },
        highlighted(newVal, oldVal) {
            if (this.expanded && newVal !== -1) {
                if (process.browser) {
                    document.getElementById(this.focusID).focus()
                }
            }
        },
        selected(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$emit('chosen', this.selected)
                this.expanded = false
            }
        },
    },
    methods: {
        escapeHandler() {
            if (this.expanded) {
                this.expanded = false
            }
        },
        unHighlight() {
            this.highlighted = -1
        },
        selectHighlighted(e) {
            e.preventDefault()
            if (this.expanded) {
                this.expanded = false
                this.selected = this.options[this.highlighted]
            } else {
                this.expanded = true
            }
            return true
        },
        highlightMe(val) {
            this.highlighted = val
        },
        moveHighlightDown(e) {
            e.preventDefault()
            if (this.expanded) {
                this.highlighted !== this.optionsLength
                    ? (this.highlighted += 1)
                    : (this.highlighted = 0)
                return true
            } else {
                this.expanded = true
            }
        },
        moveHighlightUp(e) {
            e.preventDefault()
            if (this.expanded) {
                this.highlighted !== 0
                    ? (this.highlighted -= 1)
                    : (this.highlighted = this.optionsLength)
                return true
            } else {
                this.expanded = true
            }
        },
        toggleSelect() {
            this.highlighted = this.ind
            this.expanded = !this.expanded
        },
        clickAway() {
            this.expanded = false
        },
        selectOption(option) {
            this.selected = option
            this.expanded = false
            document.getElementById('select-button-' + this.title).focus()
        },
    },
}
</script>
