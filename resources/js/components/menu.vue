<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{name: 'admin-users'}">
                <span><UserOutlined class="icon"/> Tài khoản</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{name: 'admin-roles'}">
                <span><TagsOutlined class="icon"/> Roles</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{name: 'admin-settings'}">
                <span><SettingOutlined class="icon"/> Settings</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script lang="ts">
import { UserOutlined, TagsOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue'; 
import { useMenu } from '../stores/use-menu';
import { storeToRefs } from 'pinia'
export default defineComponent({
    components: {
        UserOutlined,
        TagsOutlined,
        SettingOutlined
    },
    setup() {
        const store = useMenu();

        return {
            ...storeToRefs(store)
        }
    }
});
</script>