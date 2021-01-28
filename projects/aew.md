# AUF EWIG WINTER

## Overview

- **Description**
  - Website for german record label
- **Technologies**
  - [Figma](https://www.figma.com/)
  - [Font Awesome](https://fontawesome.com/)
  - [Netlify](https://www.netlify.com/)
  - [Vue.js](https://vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
- Code
  - [GitHub](https://github.com/stevefrenzel/auf-ewig-winter)
- Live
  - [AUF EWIG WINTER](https://www.aufewigwinter.de/)

Zusammen mit drei Freunden habe ich Ende 2019 die Plattenfirma AUF EWIG WINTER gegründet, welche als Sammelstelle für alle Informationen zu unseren Künstlern aus den Bereichen Metal, Lo-Fi und Hip Hop / Rap dient. Da wir für eine professionelle Außenwirkung neben den üblichen social media Präsenzen auch eine eigene Website und E-Mail Adresse benötigten, habe ich mich um die Umsetzung gekümmert. Zu diesem Zeitpunkt habe ich mich viel mit Vue.js beschäftigt, weshalb ich diese Technologie gewählt habe. Unter anderem auch, weil es von sich aus bereits Möglichkeiten zum Routing, sowie integrierte Animationen CSS-Animationen anbot.

## Purpose & Goal

Diese Website dient als offizielle Informationsquelle zu unserem Schaffen als Plattenfirma AUF EWIG WINTER. Neben dem digitalen und physischen Vertrieb von Musik bieten wir auch Merchandise (T-Shirts & Hoodies) an. Außerdem haben wir einen Podcast, welcher in regelmäßigen Abständen erscheint. All diese Informationen sollten möglichst einfach zu finden sein und in der entsprechenden Schwarz/Rot Ästhetik präsentiert werden. Vor allem die bereits veröffentlichte Musik und Videos sollten mit möglichst einem Klick abrufbar sein.

## Tech Stack

- [Figma](https://www.figma.com/)
- [Font Awesome](https://fontawesome.com/)
- [Netlify](https://www.netlify.com/)
- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

Bevor ich mit dem Programmieren begonnen habe, habe ich zuerst ein Design in Figma entworfen, an welchem ich mich später orientiert habe. Da dies meine erstes Projekt mit Figma war und ich mich damit noch nicht sehr gut auskannte, habe ich nur einen groben Entwurf für die Desktop-Variante erstellt. Bei darauffolgenden Projekten hielt ich zuerst den Aufbau schriftlich fest, um daraufhin mit dem Design für die Mobile-Variante zu beginnen. Diese Herangehensweise nennt sich "mobile first" und hat den Vorteil, dass man schnell herausfindet, welche Elemente essenziell sind und wie man diese am besten anordnet.

Zur Umsetzung habe ich Vue.js benutzt, welches ein JavaScript Framework ist. Es hat eine relativ flache Lernkurve, vor allem, da ich bereits Erfahrung mit React sammeln konnte. Dank Vue Router war das Erstellen separater Seiten für die Künstler sehr einfach, für welche ich mehrere wiederverwendbare Komponenten erstellt habe, um dem DRY-Prinzip zu folgen. So sieht zum Beispiel die Komponente, welche pro Veröffentlichung den jeweiligen Spotify Player und die Verfügbarkeit auf anderen Streamingplattformen darstellt:

```javascript
<template>
  <section class="container-releases">
    <h2>{{ heading }}</h2>

    <SpotifyPlayer :url="spotifyUrl" />

    <div class="link-collection">
      <a
        class="media-link"
        :href="item.url"
        rel="noopener noreferrer"
        v-for="item in linkCollection"
        :key="item.id"
      >
        <font-awesome-icon
          class="media-icon"
          :icon="['fab', item.icon]"
          size="1x"
        />
        {{ item.title }}</a
      >
    </div>
  </section>
</template>

<script>
  const SpotifyPlayer = () =>
    import(
      /* webpackChunkName: "Spotify Player" */ '../components/SpotifyPlayer'
    );

  export default {
    name: 'SpotifyAndMedia',
    components: { SpotifyPlayer },
    props: {
      heading: {
        type: String,
        required: true,
      },
      spotifyUrl: {
        type: String,
        required: true,
      },
      linkCollection: {
        type: Array,
        required: true,
      },
    },
  };
</script>
```

## Challenges & Problems

Eine der größten Herausforderungen bei diesem Projekt war für mich, die Dateigröße der finalen Website so gut es ging zu verringern. Auch hier hat Vue.jswieder eine interne Lösung parat, nämlich das lazy loadingvon Komponenten. In der Praxis bedeutet es, dass zum Beispiel die Künstlerseiten erst geladen werden, wenn man sie auswählt. Im Beispiel weiter oben kann man dies in Aktion sehen. webpackChunkName dient hierbei einer leichteren Identifizierung der jeweiligen Komponente:

```javascript
const SpotifyPlayer = () =>
  import(
    /* webpackChunkName: "Spotify Player" */ '../components/SpotifyPlayer'
  );
```

Das gleiche Verfahren habe ich auch bei den Bildern angewendet, hier gibt es sogar von HTML direkt ein natives Attribut: loading='lazy'. Dies fügt man einfach dem <img> Tag hinzu und das Bild wird erst geladen, sobald es 'in Sicht' ist. Eine weitere Herausforderung war das bereitstellen der Website durch Netlify. Es ist generell sehr einfach mit diesem Dienst, aber ein bisschen komplizierter, sobald die Domain nicht direkt von Netlify kommt, sondern in diesem Fall von Strato.

Nachdem das geklappt hatte, ist allerdings ein anderes Problem aufgetaucht: Wollte man direkt zu einer der Unterseiten navigieren (zum Beispiel https://www.aufewigwinter.de/kora-winter), sah man eine 404-Seite, da der Redirect fehlschlug. Dies konnte ich beheben, indem ich eine entsprechende netlify.toml erstellt habe. Diese Datei wird von Netlify beim Bereitstellungsprozess bevorzugt behandelt und teilt ihnen mit, dass bei einem Redirect zur jeweiligen index.html weitergeleitet und ein Statuscode 200 gesendet wird:

```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Die letzte große Herausforderung war das Erstellen einiger wiederverwendbarer Komponenten, da ich in Zukunft neue Inhalte schnell und einfach hinzufügen wollte, ohne mehrere Stellen der Anwendung bearbeiten zu müssen. Diese Komponenten sind sozusagen Schablonen mit fertiger Struktur, Logik und Styling, die ich nur an wenigen Stellen mit den entsprechenden Informationen versorgen muss. Am Ende sind es fünf Stück geworden, die teilweise ineinander verschachtelt sind:

- `MediaIcons.vue`
- `SpotifyAndMedia.vue`
- `SpotifyFollowButton.vue`
- `SpotifyPlayer.vue`
- `YouTubePlayer.vue`

## Conclusion

Dank diesem Projekt konnte ich sehr viel über Vue.js und Netlify lernen und wie ich die beiden Technologien für die Produktion optimieren kann. Leider bin ich mit dieser Version der Website nicht zu 100% zufrieden, was vor allem mit der Struktur zusammen hängt. Meine größten Kritikpunkte sind, dass

- nicht auf einen Blick klar ist, was AUF EWIG WINTER überhaupt ist
- es zu wenig Information über die Plattenfirma selbst und die Künstler gibt
- Benutzer müssen sich erst durchklicken, um zu den Inhalten zu gelangen

Aus diesem Grund werde ich eine überarbeitete Variante mit Next.js erstellen, da es sehr benutzerfreundlich für Entwickler ist, sehr viele sinnvollen Funktionen hat und es statisch generierte HTML-Dateien erzeugt. Dass bedeutet in der Praxis, dass die empfunde Geschwindigkeit bei Benutzern höher ist und die Dateigrößen geringer ausfallen.

Folgende strukturelle Änderungen werde ich vornehmen:

- Kurzbeschreibung von AUF EWIG WINTER auf der Startseite, sowie die aktuellste Veröffentlichung zum anhören und ansehen
- Automatische Spracherkennung und manuelle Sprachauswahl möglich (Englisch und Deutsch)
- Künstlerseiten werden mehr Infos über den Künstler, sowie über die Veröffentlichungen enthalten
