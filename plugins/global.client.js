import Vue from 'vue'
import CursorFx from '@luxdamore/vue-cursor-fx'
import '@/assets/css/cursor.css'
// import Ripple from 'vue-ripple-directive'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.use(CursorFx)
// Vue.directive('ripple', Ripple)
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
