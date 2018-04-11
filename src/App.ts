import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import  RwHeader from '@/components/Header.vue';
@Component({
    name: 'App',
    components: {
        RwHeader
    }
})
export default class App extends Vue {
}