<template>
	<router-link :to="to" class="link" active-class="active">
		<i class="icon" :class="icon" />
		<transition name="fade">
			<span v-if="!collapsed">
				<slot />
			</span>
		</transition>
	</router-link>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

const props = defineProps({
	to: { type: String, required: true },
	icon: { type: String, required: true }
});

const route = useRoute();
const isActive = computed(() => route.matched.some(record => record.path === props.to));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.link {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;
	margin: 0.1em 0;
	padding: 0.4em;
	border-radius: 0.25em;
	height: 1.5em;
	color: white;
	text-decoration: none;
}

.link:hover {
	background-color: var(--sidebar-item-hover);
}

.link.active {
	background-color: var(--sidebar-item-active);
}

.icon {
	flex-shrink: 0;
	width: 25px;
	margin-right: 10px;
}
</style>
