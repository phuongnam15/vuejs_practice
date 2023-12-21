<template>
    <div class="container-fluid">
        <div class="row text-white" style="background-color: rgb(53, 61, 55); padding: 1rem;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerCate()">
                    <i class="fa-solid fa-bars"></i>
                </span>
            </div>
            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/amai-conntent.png" alt="" height="50" width="50" class="ms-3 me-3">
                <span class="d-none d-sm-flex">QUẢN TRỊ</span>
            </div>
            <div class="col-1 col-sm-3 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end">
                <span>Admin</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center justify-content-sm-end">
                <span @click="showDrawerUsers()">
                    <i class="fa-solid fa-user"></i>
                </span>
            </div>
        </div>
    </div>
    <a-drawer 
        v-model:open="visable" 
        title="Danh Mục" 
        placement="left"
        style="width: 60%;"
        >
        <TheMenu />
    </a-drawer>
    <a-drawer 
        v-model:open="visableUser" 
        title="Users" 
        placement="right"
        >
        <p>Some contents...</p> 
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>
<script lang="ts" setup>
    import TheMenu from "./menu.vue";
    import { ref } from 'vue';
    const visable = ref<boolean>(false);
    const visableUser = ref<boolean>(false);

    const showDrawerCate = () => {
        visable.value = true;
    };
    const showDrawerUsers = () => {
        visableUser.value = true;
    };
</script>
