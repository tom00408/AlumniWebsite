<template>
	<div class="content">
		
		<div class="left-text">
			<p class="bold">
				Der Alumni-Verein des Hainberg-Gymnasiums - ehemalige
				Schüler:innen engagieren sich für „ihre“ Schule
			</p>

			<p>
				„Bildung, Kunst und Kultur zum Wohle des Hainberg-Gymnasiums“ zu
				fördern benennt der 2014 gegründete „Alumni-Verein“ des HG als
				ein Hauptziel seiner Arbeit. Zudem unterstützt der Verein die
				Mitglieder der Schule bei der beruflichen Orientierung der
				Schüler:innen der Oberstufe.
			</p>

			<p>
				Daneben will der Verein auch immer wieder Formate der Begegnung
				bereitstellen, in denen Ehemalige sich in freundlicher
				Atmosphäre treffen, nett beisammen sein und austauschen können –
				z.B. dass ehemalige Schüler:innen sich anlässlich ihres vor 10
				oder 25 Jahren bestandenen Abiturs gemeinsam an „damals“
				erinnern möchten oder mit einem Besuch in ihrer ehemaligen
				Schule und einer Schulführung.
			</p>

			<p>
				Der Alumni-Verein möchte auch die ehemaligen Lehrer:innen
				ermutigen, die jährlich stattfindende große „Alumni-Party“ im
				Spätsommer als Chance der Begegnung mit ihren ehemaligen
				Tutand:innen bzw. Schüler: innen, z.B. in den Prüfungskursen, zu
				nutzen. Beim Alumni-Konzert zeigen auch aktive Schüler:innen ihr
				Können auf der Bühne.
			</p>

			<p>
				Die Mitgliedschaft im Verein ist für Schüler:innen in den ersten
				drei Jahren kostenfrei. Weitere Informationen bei:
				<a href="mailto:g.bartelt@hg-gym.de">g.bartelt@hg-gym.de</a>
			</p>

			<p>Der Vorstand im Alumni-Verein</p>
		</div>
		<div class="right-picture">
			<img src="/ogbild.png" alt="möp" />
		</div>
	</div>
</template>

<style scoped>
.content {
	display: flex;
	justify-content: space-between;
	gap: 50px;
	flex-wrap: wrap; /* Ermöglicht das Umbruchverhalten bei kleineren Bildschirmen */
}

.bold {
	font-weight: bold;
}

.left-text {
	text-align: left;
	flex: 1; /* Nimmt den verfügbaren Platz ein */
	min-width: 300px; /* Mindestbreite für den Textbereich */
}

p {
	color: rgb(40, 40, 40);
}

img {
	border-radius: 15px;
	max-width: 100%; /* Bild passt sich der Breite des Containers an */
	height: auto; /* Behält das Seitenverhältnis bei */
}

.right-picture {
	flex: 1; /* Nimmt den verfügbaren Platz ein */
	min-width: 300px; /* Mindestbreite für das Bild */
	display: flex;
	justify-content: center; /* Zentriert das Bild */
}

/* Media Query für mobile Geräte */
@media (max-width: 768px) {
	.content {
		flex-direction: column; /* Stapelt die Elemente vertikal */
		gap: 20px; /* Reduziert den Abstand zwischen den Elementen */
	}

	.left-text,
	.right-picture {
		min-width: 100%; /* Nimmt die volle Breite ein */
	}

	.right-picture {
		order: -1; /* Bild wird über dem Text angezeigt */
	}
}
</style>
