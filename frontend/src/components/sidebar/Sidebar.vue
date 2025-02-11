<template>
	<!-- Hamburger-Button für Mobile -->
	<button class="hamburger-menu" @click="toggleMobileSidebar">
		<i class="fas fa-bars"></i>
	</button>

	<div
		class="sidebar"
		:class="{ 'show-sidebar': showSidebar }"
		:style="{ width: sidebarWidth }">
		<h1>
			<span v-if="collapsed">
				<div>H</div>
				<div>G</div>
			</span>
			<span v-else>Alumni Verein</span>
		</h1>

		<SidebarLink to="/" icon="fas fa-home">Startseite</SidebarLink>
		<SidebarLink to="/termine" icon="fas fa-calendar-alt"
			>Termine</SidebarLink
		>
		<SidebarLink to="/verein" icon="fas fa-users">Verein</SidebarLink>
		<SidebarLink to="/mitglied-werden" icon="fas fa-user-plus"
			>Mitglied werden</SidebarLink
		>
		<SidebarLink to="/impressum" icon="fas fa-book">Impressum</SidebarLink>

		<!-- Toggle-Button -->
		<span
			class="collapse-icon"
			:class="{ 'rotate-180': collapsed }"
			@click="toggleSidebar">
			<i class="fas fa-angle-double-left"></i>
		</span>
	</div>
</template>

<script>
import SidebarLink from './SidebarLink.vue';
import { ref } from 'vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state';

export default {
	components: { SidebarLink },
	setup() {
		const showSidebar = ref(false);

		const toggleMobileSidebar = () => {
			showSidebar.value = !showSidebar.value;
		};

		return {
			collapsed,
			toggleSidebar,
			sidebarWidth,
			showSidebar,
			toggleMobileSidebar,
		};
	},
};
</script>

<style>
:root {
	--sidebar-bg-color: #0563bf;
	--sidebar-item-hover: #0985ff;
	--sidebar-item-active: #00448b;
}
</style>

<style scoped>
/* Standardmäßig verstecken wir den Hamburger-Button */
.hamburger-menu {
	display: none;
	position: fixed;
	top: -5px;
	left: -15px;
	background: none;
	border: none;
	font-size: 24px;
	color: black;
	cursor: pointer;
	z-index: 3000; /* Höchste Priorität */
}

/* Sidebar-Styling */
.sidebar {
	color: white;
	background-color: var(--sidebar-bg-color);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 0.5em;
	transition: 0.3s ease;
	display: flex;
	flex-direction: column;
}

/* Sidebar-Titel */
.sidebar h1 {
	height: 2.5em;
	text-align: center;
}

/* Sidebar-Icons */
.sidebar i {
	font-size: 1.2em;
	margin-right: 10px;
}

/* Toggle-Button */
.collapse-icon {
	position: absolute;
	bottom: 0;
	left: 150px;

	padding: 10px;
	/*color: black;*/
	color: rgba(255, 255, 255, 0.7);

	
    transition: transform 1s ease-in-out, left 0.3s ease-in-out;
}


/* Dreh-Effekt für den Toggle-Button */
.rotate-180 {
	transform: rotate(-180deg) translateX(152px);
	transition: 0.3s linear;
}
/* Mobile Styling */
@media (max-width: 768px) {
	.hamburger-menu {
		display: block;
	}

	.sidebar {
		display: none;
		width: 250px;
		position: fixed;
		top: 0;
		left: -250px;
		height: 200vh;
		transition: transform 0.3s ease-in-out;
	}

	/* Sidebar sichtbar machen, wenn `showSidebar` aktiv ist */
	.show-sidebar {
		display: block;
		transform: translateX(250px);
	}
}
</style>
