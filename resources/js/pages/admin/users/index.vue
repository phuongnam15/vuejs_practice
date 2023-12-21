<template>
    <div>
        Pages manage Users
        <input type="text" :value="searchText" @change="searchText=$event.target.value" style="border: 1px solid rgb(183, 183, 183);">
    </div>
</template>
<script> 
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        useMenu().onSelectedKeys('admin-users');
    },
    data() {
        return {
            searchText: "check",
            placehoder: "",
         }
    }
}
</script>