<template>
    <div>
        Pages manage Roles
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