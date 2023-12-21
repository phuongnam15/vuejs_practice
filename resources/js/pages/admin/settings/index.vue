<template>
    <div>
        Pages manage Settings
    </div>
</template>
<script>
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        useMenu().onSelectedKeys('admin-users');
    }
}
</script>