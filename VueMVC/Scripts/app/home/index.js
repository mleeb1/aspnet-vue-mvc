import Vue from 'vue'
import FirstComponent from './FirstComponent.vue'
import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

new Vue({
    el: '#app',
    components: {
        FirstComponent,
        SweetModal,
        SweetModalTab
    },
    data(){
        return {
            vueMessage: 'Message from Vue 8'
        }
    },
    methods: {
        toggleModal (){
            this.$refs.modal.open();
        }
    }
})