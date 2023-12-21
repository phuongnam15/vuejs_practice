<template>
    <TheHeader />
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list size="small" style="width: 100%; border: 1px solid rgb(215, 213, 213);">
                    <TheMenu />
                    <template #header>
                        <div class="ms-4"><MenuOutlined class="icon" /> Bảng điều khiển</div>
                    </template>
                </a-list>
            </div>
            <div class="col-sm-9 col-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { MenuOutlined } from '@ant-design/icons-vue';
import TheMenu from "../components/menu.vue"; 
import TheHeader from "../components/header.vue";
export default {
    components: {
        TheHeader,
        TheMenu,
        MenuOutlined
    }
}
</script>