[
  {
    "id": 1001,
    "text": "Was bedeutet Koppelung (Coupling) im Software-Engineering?",
    "hint": "Koppelung misst die Abhängigkeit zwischen Einheiten. Ziel ist lose Koppelung, um Änderungen lokal zu begrenzen (Folie 68/70).",
    "correct_answers": [
      "Koppelung ist das Maß der Abhängigkeit zwischen zwei unterschiedlichen Einheiten eines Systems.",
      "Sie beschreibt, wie stark sich eine Änderung in einer Einheit auf andere Einheiten auswirkt (Änderungsaufwand)."
    ]
  },
  {
    "id": 1002,
    "text": "Was ist das Ziel von Kapselung (Encapsulation)?",
    "hint": "Kapselung verbirgt Implementierungsdetails (Information Hiding) und stellt eine definierte Schnittstelle bereit (Folie 67).",
    "correct_answers": [
      "Trennung der öffentlichen Schnittstelle von der verborgenen Implementierung (Information Hiding).",
      "Schutz des internen Zustands eines Objekts vor unerlaubtem Zugriff von außen."
    ]
  },
  {
    "id": 1003,
    "text": "Was beschreibt die Kohäsion (Cohesion)?",
    "hint": "Kohäsion misst den inneren Zusammenhalt. Ein Modul soll EINE Aufgabe erfüllen (Folie 76).",
    "correct_answers": [
      "Kohäsion ist das Maß für den inneren Zusammenhalt und die Aufgabenfokussierung eines Moduls.",
      "Sie gibt an, wie stark die Elemente innerhalb einer Komponente logisch zusammengehören."
    ]
  },
  {
    "id": 1004,
    "text": "Wie unterscheiden sich Komplexität in Breite und Tiefe?",
    "hint": "Breite = Menge (viele Funktionen/User). Tiefe = Struktur (Verknüpfungen, Verschachtelung, Details). (Folie 37/38).",
    "correct_answers": [
      "Breite entsteht durch die Menge an Funktionen und Schnittstellen; Tiefe durch strukturelle Verknüpfungen und Logik-Details.",
      "Breite bezieht sich auf die Anzahl gleichartiger Elemente (z.B. User), Tiefe auf die Abhängigkeitsketten und Verschachtelung."
    ]
  },
  {
    "id": 1005,
    "text": "Welche Maßnahme verbessert die Kohäsion eines Systems?",
    "hint": "SoC (Separation of Concerns) teilt Verantwortlichkeiten auf. Jedes Modul macht nur das, wofür es zuständig ist -> Hohe Kohäsion.",
    "correct_answers": [
      "Anwendung von 'Separation of Concerns' (SoC) zur Trennung von Verantwortlichkeiten.",
      "Aufteilung einer großen Klasse in mehrere kleine Klassen mit jeweils nur einer Verantwortlichkeit."
    ]
  },
  {
    "id": 1006,
    "text": "Welches sind fundamentale Prinzipien des Software-Engineerings?",
    "hint": "Prinzipien sind Grundregeln wie Abstraktion, Modularisierung, Kapselung etc. (Folie 62).",
    "correct_answers": [
      "Abstraktion, Modularisierung, Kapselung, Information Hiding.",
      "Separation of Concerns, DRY (Don't Repeat Yourself), Inkrementelles Vorgehen."
    ]
  },
  {
    "id": 1007,
    "text": "Warum ist Abstraktion im Software-Engineering essenziell?",
    "hint": "Abstraktion reduziert Komplexität, indem Details weggelassen werden. Man behält den Überblick (Folie 63).",
    "correct_answers": [
      "Sie reduziert Komplexität, indem sie unnötige Details ausblendet und sich auf das Wesentliche fokussiert.",
      "Sie ermöglicht es, Systeme durch Vereinfachung und Modellbildung handhabbar zu machen."
    ]
  },
  {
    "id": 1008,
    "text": "Was charakterisiert 'niedrige Kohäsion'?",
    "hint": "Niedrige Kohäsion = Zufällige Ansammlung von Funktionen. Schlecht wartbar, schwer verständlich.",
    "correct_answers": [
      "Eine zufällige oder unstrukturierte Ansammlung von Funktionen ohne klaren logischen Zusammenhang.",
      "Ein Modul, das viele völlig unterschiedliche Aufgaben gleichzeitig erledigt ('bunt gemischt')."
    ]
  },
  {
    "id": 1009,
    "text": "Berechnung der Systemzuverlässigkeit bei serieller Abhängigkeit: Wenn Module je 90% (0.9) Zuverlässigkeit haben, wie verhält sich das Gesamtsystem?",
    "hint": "0.9 * 0.9 = 0.81. Die Gesamtzuverlässigkeit ist immer kleiner als die schwächste Einzelkomponente bei serieller Abhängigkeit.",
    "correct_answers": [
      "Die Gesamtzuverlässigkeit ist kleiner als 0,9 (Produktregel).",
      "Die Fehlerwahrscheinlichkeiten summieren sich, daher sinkt die Gesamtzuverlässigkeit unter den Wert der Einzelkomponenten."
    ]
  },
  {
    "id": 1010,
    "text": "Welches Verhältnis von Koppelung und Kohäsion wird im Software-Engineering angestrebt?",
    "hint": "Ziel: Hohe Kohäsion (starker innerer Zusammenhalt) und lose Koppelung (wenig Abhängigkeit nach außen).",
    "correct_answers": [
      "Möglichst hohe Kohäsion und möglichst lose (niedrige) Koppelung.",
      "Starker innerer Zusammenhalt der Module bei minimalen Abhängigkeiten zwischen den Modulen."
    ]
  },
  {
    "id": 1011,
    "text": "Was ist der Hauptzweck von Modularisierung?",
    "hint": "Zerlegung in handhabbare Teile (Bausteine). Beherrschbarkeit von Komplexität, Austauschbarkeit, parallele Entwicklung.",
    "correct_answers": [
      "Zerlegung eines komplexen Systems in überschaubare, austauschbare Teilsysteme.",
      "Reduktion der Komplexität durch 'Teile und Herrsche' (Divide and Conquer)."
    ]
  },
  {
    "id": 1012,
    "text": "Was versteht man unter 'Separation of Concerns' (SoC)?",
    "hint": "Trennung von Belangen/Aspekten. Beispiel: Logik getrennt von UI. Datenbank getrennt von Berechnung.",
    "correct_answers": [
      "Die Trennung unterschiedlicher Aspekte (z.B. Logik, Daten, Darstellung) in separate Module.",
      "Jedes Modul sollte sich um genau einen spezifischen Aspekt ('Concern') des Systems kümmern."
    ]
  },
  {
    "id": 1013,
    "text": "Welche Faktoren verursachen Koppelung zwischen Modulen?",
    "hint": "Koppelung entsteht durch: Aufrufe, Datenzugriffe (Shared Data), Vererbung, zeitliche Abhängigkeiten.",
    "correct_answers": [
      "Methodenaufrufe, Nutzung gemeinsamer Datenstrukturen und Vererbung.",
      "Direkter Zugriff auf innere Variablen anderer Module oder zeitliche Abhängigkeiten (Reihenfolge)."
    ]
  },
  {
    "id": 2001,
    "text": "Was versteht man unter einem Softwareprozess?",
    "hint": "Ein Softwareprozess ist die strukturierte Menge von Aktivitäten (Spezifikation, Entwurf, Implementierung, Test), die zur Herstellung oder Evolution eines Softwaresystems führen (Folie 98).",
    "correct_answers": [
      "Eine strukturierte Menge von Aktivitäten, Methoden und Praktiken zur Entwicklung oder Wartung von Software.",
      "Die Gesamtheit aller technischen und organisatorischen Tätigkeiten, die notwendig sind, um ein Softwaresystem zu erstellen."
    ]
  },
  {
    "id": 2002,
    "text": "Was ist ein Softwareprozessmodell?",
    "hint": "Ein Prozessmodell ist eine abstrakte, vereinfachte Darstellung eines Softwareprozesses (z.B. Wasserfall, V-Modell, Scrum). Es ist eine Schablone, nicht die Durchführung selbst (Folie 99).",
    "correct_answers": [
      "Eine abstrakte Repräsentation oder Schablone eines Softwareprozesses (z.B. Wasserfall, V-Modell).",
      "Eine Beschreibung, welche Aktivitäten, Rollen und Artefakte in welcher Reihenfolge typischerweise auftreten."
    ]
  },
  {
    "id": 2003,
    "text": "Welche SCRUM-Meetings erstellen das 'Sprint Backlog' und wie heißen die beiden Teile?",
    "hint": "Laut Skript (Folie 141/152) erstellen Sprint Planning 1 (Was) und Sprint Planning 2 (Wie) das 'Sprint Backlog'.",
    "correct_answers": [
      "Sprint Planning 1 und Sprint Planning 2 (Ergebnis: Sprint Backlog).",
      "Die Sprint Planning Meetings (1 & 2), in denen das Sprint Backlog als Plan für den Sprint entsteht."
    ]
  },
  {
    "id": 2004,
    "text": "Unterschied: Plangesteuerte (Plan-driven) vs. Agile Prozesse.",
    "hint": "Plangesteuert: Planung vorab, Messung gegen Plan (z.B. Wasserfall). Agil: Planung inkrementell/iterativ, Offenheit für Änderungen (z.B. Scrum). (Folie 102).",
    "correct_answers": [
      "Plangesteuert: Detaillierte Planung vorab, Änderungen sind schwierig. Agil: Planung erfolgt iterativ, Änderungen sind willkommen.",
      "Plangesteuert misst Erfolg an der Einhaltung des Plans. Agil misst Erfolg am gelieferten Geschäftswert und funktionierender Software."
    ]
  },
  {
    "id": 2005,
    "text": "Was charakterisiert das 'Code-and-Fix' Modell und welche Probleme bringt es mit sich?",
    "hint": "Code-and-Fix = Sofort losprogrammieren ohne Entwurf. Probleme: Strukturzerfall (Spaghetti-Code), schlechte Wartbarkeit, hohe Abhängigkeit von Einzelpersonen. (Folie 103).",
    "correct_answers": [
      "Vorgehen: Direktes Implementieren ohne vorherigen Entwurf. Probleme: Schlechte Struktur, kaum Wartbarkeit, hohe Fehlerkosten.",
      "Ad-hoc Programmierung. Führt oft zu 'Spaghetti-Code', fehlender Dokumentation und Abhängigkeit vom ursprünglichen Entwickler."
    ]
  },
  {
    "id": 2006,
    "text": "Welche Vorteile bietet die Agile Vorgehensweise?",
    "hint": "Vorteile: Schnelle Reaktion auf Änderungen, frühes Feedback durch regelmäßige Auslieferung, Risikominimierung, Transparenz. (Folie 102/134).",
    "correct_answers": [
      "Hohe Flexibilität bei Anforderungsänderungen, frühe Auslieferung nutzbarer Software, regelmäßiges Kundenfeedback.",
      "Transparenz durch kurze Zyklen, Risikominimierung durch frühes Erkennen von Fehlentwicklungen, Fokus auf Business Value."
    ]
  },
  {
    "id": 2007,
    "text": "Unterschied: Iterativ vs. Inkrementell.",
    "hint": "Inkrementell = Stück für Stück fertigstellen (Wand -> Dach -> Haus). Iterativ = Grob zu Fein überarbeiten (Skizze -> Zeichnung -> Gemälde). (Folie 117).",
    "correct_answers": [
      "Inkrementell: System wächst durch Hinzufügen fertiger Teile. Iterativ: System verbessert sich durch Verfeinerung bestehender Teile.",
      "Inkrementell bedeutet 'Anbau' (Umfang wächst). Iterativ bedeutet 'Überarbeitung' (Qualität/Detailtiefe wächst)."
    ]
  },
  {
    "id": 2008,
    "text": "Was ist ein wesentlicher Vorteil iterativ-inkrementeller Vorgehensweisen?",
    "hint": "Frühe Teilergebnisse -> Frühes Feedback -> Fehlerkorrektur möglich. Kunde sieht Fortschritt. (Folie 111).",
    "correct_answers": [
      "Frühes Kundenfeedback durch nutzbare Teilprodukte, wodurch Fehlentwicklungen vermieden werden.",
      "Risikominimierung: Kritische Teile können zuerst gebaut und getestet werden."
    ]
  },
  {
    "id": 2009,
    "text": "Welche Rollen definiert SCRUM und was ist ihre Hauptaufgabe?",
    "hint": "PO = Value (Was). SM = Process (Hindernisse weg). Team = Delivery (Wie). (Folie 137).",
    "correct_answers": [
      "Product Owner (verantwortet 'Was' / ROI), Scrum Master (verantwortet Prozess / 'Servant Leader'), Development Team (verantwortet 'Wie' / Umsetzung).",
      "PO: Priorisiert Backlog. SM: Beseitigt Impediments. Team: Liefert Inkrement."
    ]
  },
  {
    "id": 2010,
    "text": "Was passiert im Sprint Planning Meeting?",
    "hint": "Planning definiert das Sprint-Ziel und das Sprint-Backlog. Teil 1: Was machen wir? (PO stellt vor). Teil 2: Wie machen wir es? (Team plant Tasks). (Folie 141).",
    "correct_answers": [
      "Das Team wählt Items aus dem Product Backlog (Was) und plant deren technische Umsetzung in Tasks (Wie).",
      "Ergebnis ist das Sprint Backlog und das Sprint Ziel. Es ist eine Kollaboration zwischen PO und Team."
    ]
  },
  {
    "id": 2011,
    "text": "Unterschied: Product Backlog vs. Sprint Backlog.",
    "hint": "Product Backlog = Alles, was jemals gemacht werden könnte (dynamisch, priorisiert). Sprint Backlog = Plan für den aktuellen Sprint (fest für den Sprint). (Folie 148).",
    "correct_answers": [
      "Product Backlog: Priorisierte Gesamtliste aller Anforderungen (Owned by PO). Sprint Backlog: Aufgaben für den aktuellen Sprint (Owned by Team).",
      "Product Backlog ist dynamisch und entwickelt sich ständig. Sprint Backlog ist ein fester Plan für die Dauer des Sprints."
    ]
  },
  {
    "id": 2012,
    "text": "Was bedeutet die Eigenschaft 'Time-boxed' im Kontext einer Iteration (Sprint)?",
    "hint": "Laut Skript (Folie 116): Jede Iteration hat immer dieselbe, feste Dauer (z.B. 30 Tage). Das Ende steht fest, der Umfang variiert ggf.",
    "correct_answers": [
      "Die Iteration hat eine fest definierte Dauer (z.B. 2 oder 4 Wochen), die nicht verlängert wird.",
      "Feste Zeitvorgabe: Wenn die Zeit um ist, ist der Sprint vorbei, egal ob alles fertig ist oder nicht."
    ]
  },
  {
    "id": 2013,
    "text": "Szenario: Start-Up. Anforderungen unklar. Budget knapp. Früher Markteintritt nötig. Welches Modell?",
    "hint": "Unsichere Anforderungen + Zeitdruck + Innovation spricht klar für Agil/Scrum/Iterativ (MVP-Gedanke). Wasserfall wäre zu starr und riskant.",
    "correct_answers": [
      "Agiles Vorgehen (z.B. Scrum). Erlaubt schnelle Anpassung an Marktfeedback und frühe Veröffentlichung eines MVP (Minimum Viable Product).",
      "Iterativ-Inkrementell. Man kann mit den wichtigsten Features starten und später erweitern, wenn Geld verdient wird."
    ]
  },
  {
    "id": 2014,
    "text": "Szenario: Software für Airbag-Steuerung. Anforderungen zu 100% fix und gesetzlich geregelt. Sicherheitskritisch.",
    "hint": "Sicherheitskritisch + fixe Anforderungen = Planbarkeit + Dokumentationspflicht. Hier ist V-Modell oder ein strenges inkrementelles Vorgehen besser als reines Scrum.",
    "correct_answers": [
      "V-Modell (oder plangesteuertes Vorgehen). Fokus auf Validierung, Verifikation und Dokumentation ist bei Sicherheit essenziell.",
      "Ein formales, plangesteuertes Modell, da Anforderungen stabil sind und Sicherheit Vorrang vor Flexibilität hat."
    ]
  },
  {
    "id": 2015,
    "text": "Was ist die 'Definition of Done' (DoD)?",
    "hint": "Die DoD ist ein Qualitäts-Vertrag. Ein Item ist erst fertig, wenn es diese Kriterien (Code Style, Tests, Doku) erfüllt. (Folie 157).",
    "correct_answers": [
      "Eine vereinbarte Checkliste von Qualitätskriterien, die erfüllt sein müssen, damit ein Feature als 'fertig' akzeptiert wird.",
      "Sie sichert die Qualität und verhindert technische Schulden (z.B. 'Code ist getestet', 'Doku ist aktuell')."
    ]
  },
  {
    "id": 2016,
    "text": "Warum ist Scrum in sehr großen Projekten (z.B. 500 Entwickler) schwierig?",
    "hint": "Scrum setzt auf kleine Teams (7 +/- 2). Viele Teams brauchen Koordination (Scrum of Scrums). Der Kommunikationsaufwand explodiert.",
    "correct_answers": [
      "Scrum ist für kleine Teams (ca. 7 Leute) konzipiert. Bei vielen Teams steigt der Kommunikationsaufwand exponentiell.",
      "Die Synchronisation zwischen vielen autonomen Teams ist komplex (Skalierungsproblem)."
    ]
  },
  {
    "id": 2017,
    "text": "Nennen Sie einen Vorteil von Timeboxing.",
    "hint": "Laut Skript (Folie 116): Erhöht Transparenz, Planbarkeit, Fokus auf das Wesentliche.",
    "correct_answers": [
      "Erhöht Transparenz und Planbarkeit; zwingt zur Fokussierung auf das Wichtigste.",
      "Verhindert das unendliche Ausdehnen von Aufgaben (Parkinson'sches Gesetz)."
    ]
  },
  {
    "id": 2018,
    "text": "Nennen Sie zwei typische Aktivitäten in SW-Prozessen.",
    "hint": "Laut Skript (Folie 97): Spezifizieren, Entwerfen, Programmieren, Testen, Planen, etc.",
    "correct_answers": [
      "Spezifizieren, Entwerfen, Programmieren, Testen.",
      "Anforderungsanalyse und Qualitätssicherung."
    ]
  },
  {
    "id": 2019,
    "text": "Folgende Softwareprozessmodelle nach absteigender Häufigkeit der Auslieferung ordnen (Platz 1 am häufigsten): Wasserfallmodell / Inkrementelle Modelle / SCRUM.",
    "hint": "Scrum (jeder Sprint, ca. 2-4 Wochen) > Inkrementell (mehrere Phasen) > Wasserfall (einmal am Ende).",
    "correct_answers": [
      "1. SCRUM, 2. Inkrementelle Modelle, 3. Wasserfallmodell.",
      "Scrum liefert am häufigsten (pro Sprint), dann Inkrementell, Wasserfall liefert nur einmal am Ende."
    ]
  },
  {
    "id": 2020,
    "text": "Szenario: Start-Up, 80% Methodik fertig, 20% offen, Änderungen erwartet, früher Markteintritt gewünscht. Welches SWPM? Begründung.",
    "hint": "Agiles Vorgehen (z.B. Scrum oder generisch iterativ-inkrementell) ist hier notwendig, da Anforderungen unklar sind, Änderungen erwartet werden und 'Time-to-Market' kritisch ist.",
    "correct_answers": [
      "Agiles Vorgehen (z.B. SCRUM). Gründe: Änderungen sind erwartet, früher Markteintritt (MVP) möglich, iterative Anpassung der Methodik parallel zur SW.",
      "Iterativ-Inkrementelles Modell. Erlaubt frühe Auslieferung von Teilen und Anpassung an die noch nicht fertige Methodik."
    ]
  },
  {
    "id": 2021,
    "text": "Worin unterscheidet sich die Aufgabe des SCRUM Masters vom Projektleiter?",
    "hint": "Laut Skript (Folie 137): SM ist Coach/Facilitator ('Servant Leader'), kein disziplinarischer Chef. PL plant/verteilt Aufgaben. SM hilft Team zur Selbstorganisation.",
    "correct_answers": [
      "Scrum Master ist Coach und beseitigt Hindernisse (dienende Führung), er verteilt keine Aufgaben. Projektleiter plant und weist Aufgaben zu (Command & Control).",
      "Der SM hat keine Weisungsbefugnis über das Team, der PL meist schon."
    ]
  },
  {
    "id": 2022,
    "text": "Szenario: Sicherheitskritische Steuerungssoftware Auto, Anforderungen fix, keine Änderungen, 3 Abschnitte. Welches SWPM?",
    "hint": "Hier passt ein plangesteuertes, inkrementelles Vorgehen (oder V-Modell mit Inkrementen). Anforderungen sind fix -> Planbarkeit. 3 Abschnitte -> Inkremente.",
    "correct_answers": [
      "Inkrementelles, plangesteuertes Vorgehen. Gründe: Anforderungen stabil (Planung möglich), Aufteilung in 3 Abschnitte erlaubt Integrationstests pro Abschnitt.",
      "V-Modell (oder Wasserfall) mit inkrementeller Auslieferung, da Sicherheit und Dokumentation wichtig sind und Anforderungen feststehen."
    ]
  },
  {
    "id": 2023,
    "text": "Welche Meetings gibt es bei SCRUM und in welcher logischen Reihenfolge finden diese statt?",
    "hint": "Reihenfolge pro Sprint: Sprint Planning -> Daily Scrums (täglich) -> Sprint Review -> Sprint Retrospective.",
    "correct_answers": [
      "1. Sprint Planning, 2. Daily Scrums (laufend), 3. Sprint Review, 4. Sprint Retrospective.",
      "Planning -> Daily -> Review -> Retro."
    ]
  },
  {
    "id": 3001,
    "text": "Nennen Sie vier Qualitätskriterien für eine gute Anforderung.",
    "hint": "Qualitätskriterien (Folie 185): Vollständig, Atomar, Notwendig, Verfolgbar, Lösungsneutral, Verständlich, Realisierbar, Konsistent, Eindeutig, Prüfbar.",
    "correct_answers": [
      "Vollständig, Atomar, Notwendig, Verfolgbar.",
      "Eindeutig, Prüfbar, Konsistent, Lösungsneutral."
    ]
  },
  {
    "id": 3002,
    "text": "Wie ist der Begriff „Anforderung“ im Software-Engineering definiert?",
    "hint": "Anforderungen beschreiben, WAS das System leisten soll (Funktional) und WIE es beschaffen sein muss (Nicht-Funktional). Sie sind Vertragsbasis. (Folie 171/173).",
    "correct_answers": [
      "Eine Aussage darüber, was ein System leisten soll (funktionale Anforderung) oder wie es beschaffen sein muss (nicht-funktionale Anforderung).",
      "Eine Beschränkung oder Eigenschaft, die das System erfüllen muss, um einen Vertrag, Standard oder eine Spezifikation zu erfüllen."
    ]
  },
  {
    "id": 3003,
    "text": "Warum haben Anforderungen eine zentrale Funktion für Softwareprojekte?",
    "hint": "Sie sind die Basis für Angebote (Kalkulation), Verträge (Rechtsgrundlage) und Abnahmen. (Folie 171).",
    "correct_answers": [
      "Sie dienen als Basis für die Angebotskalkulation und als verbindliche Vertragsgrundlage zwischen Auftraggeber und Auftragnehmer.",
      "Sie definieren das Abnahmekriterium: Nur wenn die Anforderungen erfüllt sind, gilt das Projekt als erfolgreich abgeschlossen."
    ]
  },
  {
    "id": 3004,
    "text": "Was sind Stakeholder?",
    "hint": "Stakeholder = Alle Betroffenen/Interessierten. Nicht nur User, auch Manager, Admins, Geldgeber, Gesetzgeber. (Folie 186).",
    "correct_answers": [
      "Personen oder Organisationen, die vom System betroffen sind und ein berechtigtes Interesse daran haben (z.B. Endanwender, Management, Betrieb).",
      "Alle Parteien, die Einfluss auf das System haben oder durch dessen Nutzung beeinflusst werden."
    ]
  },
  {
    "id": 3005,
    "text": "Was ist eine User Story?",
    "hint": "Eine User Story beschreibt eine Funktionalität aus Sicht des Nutzers, um Wert zu stiften. (Folie 220).",
    "correct_answers": [
      "Eine prägnante, in Alltagssprache formulierte Beschreibung einer wertstiftenden Funktionalität aus Nutzersicht.",
      "Ein kurzes Format zur Erfassung von Anforderungen, das Fokus auf den Nutzerwert legt ('Wer', 'Was', 'Warum')."
    ]
  },
  {
    "id": 3006,
    "text": "Was beschreibt das Kano-Modell?",
    "hint": "Zusammenhang zwischen Erfüllungsgrad (Feature da?) und Kundenzufriedenheit (User happy?). Unterscheidet Basis-, Leistungs- und Begeisterungsfaktoren. (Folie 236).",
    "correct_answers": [
      "Den Zusammenhang zwischen dem Erfüllungsgrad von Anforderungen und der daraus resultierenden Kundenzufriedenheit.",
      "Die Kategorisierung von Anforderungen in Basis-, Leistungs- und Begeisterungsfaktoren."
    ]
  },
  {
    "id": 3007,
    "text": "Wie lautet die Standard-Schablone für User Stories?",
    "hint": "Schablone: Als [Rolle] möchte ich [Ziel], um [Nutzen]. (Folie 222).",
    "correct_answers": [
      "Als [Rolle], möchte ich [Ziel/Wunsch], um [Nutzen/Vorteil] zu erreichen.",
      "As a [user role], I want to [goal], so I can [reason]."
    ]
  },
  {
    "id": 3008,
    "text": "Nennen Sie die drei 'Cs' einer User Story (nach Ron Jeffries).",
    "hint": "Card (Physischer Träger), Conversation (Gespräch zur Klärung), Confirmation (Akzeptanzkriterien). (Folie 220/221).",
    "correct_answers": [
      "Card (Karte), Conversation (Gespräch), Confirmation (Bestätigung).",
      "Karte (Placeholder), Konversation (Details klären), Bestätigung (Akzeptanztests)."
    ]
  },
  {
    "id": 3009,
    "text": "Was sind Story Points und welche Vorteile bieten sie?",
    "hint": "Story Points = Relatives Maß für Aufwand/Komplexität (abstrakt). Vorteile: Teamspezifisch, vermeiden Diskussion um exakte Stunden, gleichen Schätzfehler aus. (Folie 359/370).",
    "correct_answers": [
      "Ein relatives Maß für die Größe/Komplexität einer Aufgabe. Vorteile: Abstraktion von Zeit, teamspezifisch, vermeidet Scheingenauigkeit.",
      "Eine abstrakte Einheit zur Aufwandsschätzung. Vorteile: Berücksichtigt Komplexität und Risiko, statt nur Zeit zu raten."
    ]
  },
  {
    "id": 3010,
    "text": "Ablauf von Planning Poker (Schätzverfahren).",
    "hint": "1. PO liest Story. 2. Diskussion. 3. Verdecktes Schätzen. 4. Aufdecken. 5. Diskussion bei Abweichung. 6. Neu Schätzen. (Folie 363/364).",
    "correct_answers": [
      "1. Story vorstellen, 2. Diskutieren, 3. Verdeckt schätzen, 4. Aufdecken, 5. Abweichungen diskutieren, 6. Ggf. neu schätzen.",
      "Vorstellung -> Fragen klären -> Verdeckte Wahl -> Aufdecken -> Diskussion der Extreme -> Konsens finden."
    ]
  },
  {
    "id": 3011,
    "text": "Wofür steht „Confirmation“ bei einer User Story?",
    "hint": "Confirmation = Akzeptanzkriterien. Wann ist die Story fertig? (Testbar/Abnehmbar). (Folie 224).",
    "correct_answers": [
      "Für die Akzeptanzkriterien, die definieren, wann die Story vollständig umgesetzt ist.",
      "Die Bestätigung (Abnahmekriterien), anhand derer überprüft wird, ob die Story korrekt implementiert wurde."
    ]
  },
  {
    "id": 3012,
    "text": "Ist dies eine gute User Story? „System soll Möglichkeit bieten, Reservierungen zu stornieren“.",
    "hint": "Nein. Es fehlt die Rolle ('Wer') und der Nutzen ('Warum'). Das ist eine klassische funktionale Anforderung, keine User Story.",
    "correct_answers": [
      "Nein. Es fehlen die Rolle (Wer) und der Nutzen (Warum). Es ist nur eine Funktionsbeschreibung.",
      "Nein, das Format 'Als... möchte ich... um...' wird nicht eingehalten, der Mehrwert ist unklar."
    ]
  },
  {
    "id": 3013,
    "text": "Kano-Fragebogen: Wie formuliert man die Fragen für ein Feature?",
    "hint": "Kano fragt immer funktional (Feature da -> Wie findest du das?) und dysfunktional (Feature weg -> Wie findest du das?). (Folie 238).",
    "correct_answers": [
      "Funktional: 'Wie würden Sie es finden, wenn das Feature vorhanden ist?' Dysfunktional: 'Wie würden Sie es finden, wenn es NICHT vorhanden ist?'",
      "Eine positive Frage zum Vorhandensein und eine negative Frage zum Fehlen des Merkmals."
    ]
  },
  {
    "id": 3014,
    "text": "Was sollte man vor jeder Aufwandsschätzung tun (Regel 2 & 4)?",
    "hint": "Regel 2: Zweck klären (Wozu schätzen wir?). Regel 4: Basis schaffen (Messen, Zählen, Rechnen statt Raten). (Folie 302/309).",
    "correct_answers": [
      "Den Zweck der Schätzung klären ('Wozu?') und eine Basis schaffen (Messen, Zählen, Rechnen).",
      "Hinterfragen, wofür der Wert gebraucht wird, und Fakten sammeln statt blind zu raten."
    ]
  },
  {
    "id": 3015,
    "text": "Klassifikation: Das Delphi-Verfahren.",
    "hint": "Delphi ist eine Expertenschätzung. Experten schätzen unabhängig, Moderator konsolidiert. Kein Algorithmus. (Folie 336).",
    "correct_answers": [
      "Es ist ein Expertenschätzungsverfahren (basierend auf Erfahrung und Konsens).",
      "Eine Methode, bei der Experten unabhängig befragt werden, um zu einer gemeinsamen Schätzung zu kommen."
    ]
  },
  {
    "id": 3016,
    "text": "Klassifikation: Das Function-Point-Verfahren.",
    "hint": "Function Points werden berechnet (Inputs, Outputs, Dateien * Komplexitätsfaktor). Das ist ein Algorithmus. (Folie 339).",
    "correct_answers": [
      "Es ist ein algorithmisches Verfahren (Berechnung anhand von Formeln und Faktoren).",
      "Der Aufwand wird anhand funktionaler Größen (Eingaben, Ausgaben, Datenbestände) berechnet."
    ]
  },
  {
    "id": 3017,
    "text": "In welcher Form sollte ein seriöser Schätzwert angegeben werden?",
    "hint": "Schätzungen sind unsicher. Daher immer Intervalle (von-bis) angeben, nie Einzelwerte (Punktschätzung suggeriert falsche Genauigkeit). (Folie 298).",
    "correct_answers": [
      "Als Intervall (Spanne von-bis) oder mit einer Wahrscheinlichkeit, niemals als Einzelwert.",
      "In Form einer Spanne (z.B. 3-5 Tage), um die Unsicherheit auszudrücken."
    ]
  },
  {
    "id": 3018,
    "text": "Konflikte bei nicht-funktionalen Anforderungen (Architektur). Nennen Sie ein klassisches Beispiel.",
    "hint": "Qualitätsziele widersprechen sich oft. Klassiker: Hohe Sicherheit (viele Checks) macht System langsam (Performance) oder schwer bedienbar (Usability).",
    "correct_answers": [
      "Sicherheit (Security) vs. Benutzbarkeit (Usability) oder Performance.",
      "Effizienz (Performance) vs. Wartbarkeit oder Portabilität."
    ]
  },
  {
    "id": 4001,
    "text": "Was ist der Unterschied zwischen Software-Architektur und Software-Entwurf (Design)?",
    "hint": "Laut Skript (PDF 510, Folie 6/7): Architektur sind die fundamentalen Entscheidungen (Global, schwer änderbar). Entwurf ist die Detailplanung (Lokal, leichter änderbar).",
    "correct_answers": [
      "Architektur betrifft fundamentale, globale Entscheidungen (Systemstruktur). Entwurf betrifft die detaillierte Ausgestaltung einzelner Komponenten.",
      "Architektur ist die 'Grobstruktur' (Schwer zu ändern), Entwurf ist die 'Feinstruktur' (Leichter zu ändern)."
    ]
  },
  {
    "id": 4002,
    "text": "Was besagt das 'Golden Rule of Software Architecture' (nach WI-Burger)?",
    "hint": "Laut Skript (PDF 510, Folie 13): 'High Cohesion' (hoher Zusammenhalt) und 'Low Coupling' (lose Koppelung).",
    "correct_answers": [
      "Strebe nach hoher Kohäsion (innerer Zusammenhalt) und loser Koppelung (wenig Abhängigkeiten).",
      "High Cohesion within components, Low Coupling between components."
    ]
  },
  {
    "id": 4003,
    "text": "Welche Vorteile bietet das Schichtenmodell (Layered Architecture)?",
    "hint": "Laut Skript (PDF 520, Folie 5-7): Austauschbarkeit einzelner Schichten, Testbarkeit, klare Abhängigkeiten (nur nach unten).",
    "correct_answers": [
      "Austauschbarkeit von Schichten (z.B. neue UI), Testbarkeit und klare Abhängigkeitsrichtung (meist nur nach unten).",
      "Reduktion der Komplexität durch Kapselung von Verantwortlichkeiten in Ebenen (z.B. Presentation, Business, Data)."
    ]
  },
  {
    "id": 4004,
    "text": "Was beschreibt das Repository-Muster (Blackboard)?",
    "hint": "Laut Skript (PDF 520, Folie 13): Zentrale Datenhaltung. Komponenten kommunizieren nicht direkt, sondern über das Repository.",
    "correct_answers": [
      "Zentrale Datenhaltung: Komponenten tauschen Informationen aus, indem sie in einen gemeinsamen Speicher (Repository) schreiben/lesen.",
      "Entkopplung von Komponenten durch eine zentrale Datenbank, auf die alle zugreifen."
    ]
  },
  {
    "id": 4005,
    "text": "Was beschreibt das MVC-Muster (Model-View-Controller)?",
    "hint": "Trennung von Daten (Model), Darstellung (View) und Steuerung (Controller). Änderung im Model aktualisiert View. (Folie 446).",
    "correct_answers": [
      "Ein Architekturmuster zur Trennung von Datenhaltung (Model), Präsentation (View) und Programmsteuerung (Controller).",
      "Die Aufteilung einer Anwendung in drei Bereiche: Datenlogik, Benutzeroberfläche und Benutzerinteraktion."
    ]
  },
  {
    "id": 4006,
    "text": "Was ist der Vorteil von MVC?",
    "hint": "Entkopplung. Man kann die View tauschen (z.B. Web statt Desktop) ohne das Model zu ändern. Parallele Entwicklung möglich.",
    "correct_answers": [
      "Entkopplung von Darstellung und Logik: Änderungen an der Oberfläche beeinflussen nicht die Datenhaltung.",
      "Ermöglicht mehrere Sichten (Views) auf dieselben Daten und verbessert die Wartbarkeit."
    ]
  },
  {
    "id": 4007,
    "text": "Was ist der Unterschied zwischen logischer und physischer Sicht in der Architektur?",
    "hint": "Logisch: Funktionale Struktur (Klassen, Pakete). Physisch: Deployment (Server, Knoten, Netzwerke). (Folie 406).",
    "correct_answers": [
      "Logisch: Struktur der Software (Klassen, Module). Physisch: Verteilung auf Hardware (Server, Deployment).",
      "Logische Sicht zeigt die funktionale Zerlegung, physische Sicht zeigt die Installationsumgebung."
    ]
  },
  {
    "id": 4008,
    "text": "Was ist ein 'Design Pattern' (Entwurfsmuster)?",
    "hint": "Bewährte Lösungsschablone für wiederkehrende Entwurfsprobleme (z.B. Singleton, Observer). (Folie 439).",
    "correct_answers": [
      "Eine bewährte, wiederverwendbare Lösungsschablone für ein häufig auftretendes Entwurfsproblem.",
      "Best Practice zur Lösung von Design-Problemen (z.B. Singleton, Observer, Factory)."
    ]
  },
  {
    "id": 4009,
    "text": "Nennen Sie zwei Beispiele für Architekturstile.",
    "hint": "Laut Skript (Folie 432): Schichtenarchitektur (Layered), Client-Server, Pipe-and-Filter, Repository.",
    "correct_answers": [
      "Schichtenarchitektur (Layered), Client-Server, Pipe-and-Filter.",
      "Repository-Architektur, Model-View-Controller (MVC)."
    ]
  },
  {
    "id": 4010,
    "text": "Was ist das Prinzip der 'Schichtenarchitektur' (Layered Architecture)?",
    "hint": "Hierarchische Gliederung. Jede Schicht nutzt nur Dienste der direkt darunterliegenden Schicht. (Folie 433).",
    "correct_answers": [
      "Hierarchische Strukturierung, bei der jede Schicht nur auf die Dienste der direkt darunterliegenden Schicht zugreift.",
      "Trennung von Verantwortlichkeiten in Ebenen (z.B. UI, Logik, Daten), um Abhängigkeiten zu ordnen."
    ]
  },
  {
    "id": 4011,
    "text": "Was bedeutet 'Lose Koppelung' im Kontext von Architektur?",
    "hint": "Komponenten sind wenig voneinander abhängig. Änderungen wirken sich lokal aus. (Folie 417).",
    "correct_answers": [
      "Komponenten sind so wenig wie möglich voneinander abhängig. Änderungen bleiben lokal begrenzt.",
      "Minimierung der Abhängigkeiten zwischen Modulen, um Austauschbarkeit zu erhöhen."
    ]
  },
  {
    "id": 4012,
    "text": "Was ist das 'Repository'-Architekturmuster?",
    "hint": "Zentrale Datenhaltung (Repository), auf die alle Komponenten zugreifen. (Folie 437).",
    "correct_answers": [
      "Alle Komponenten greifen auf einen gemeinsamen, zentralen Datenbestand (Repository) zu.",
      "Zentralisierte Datenverwaltung, bei der Subsysteme Daten austauschen, indem sie in das Repository schreiben/lesen."
    ]
  },
  {
    "id": 4013,
    "text": "Wann sollte man eine Architektur festlegen?",
    "hint": "Früh im Projekt, da sie schwer zu ändern ist. Sie ist das Fundament. (Folie 402).",
    "correct_answers": [
      "Möglichst früh, da sie fundamentale Entscheidungen enthält, die später schwer zu ändern sind.",
      "In der Entwurfsphase, bevor die detaillierte Implementierung beginnt."
    ]
  },
  {
    "id": 5001,
    "text": "Was ist ein Entwurfsmuster (Design Pattern)?",
    "hint": "Laut Skript (PDF 610, Folie 4): Eine bewährte Lösungsschablone für wiederkehrende Entwurfsprobleme in einem bestimmten Kontext.",
    "correct_answers": [
      "Eine bewährte, wiederverwendbare Lösungsschablone für ein häufig auftretendes Problem im Software-Entwurf.",
      "Best Practice zur Lösung von Design-Problemen, die sich in der Praxis bewährt hat (z.B. Singleton, Observer)."
    ]
  },
  {
    "id": 5002,
    "text": "In welche drei Kategorien werden GoF (Gang of Four) Muster unterteilt?",
    "hint": "Laut Skript (PDF 610, Folie 8): Erzeugungsmuster (Creational), Strukturmuster (Structural), Verhaltensmuster (Behavioral).",
    "correct_answers": [
      "Erzeugungsmuster, Strukturmuster, Verhaltensmuster.",
      "Creational Patterns, Structural Patterns, Behavioral Patterns."
    ]
  },
  {
    "id": 5003,
    "text": "Was ist der Zweck des Singleton-Musters?",
    "hint": "Laut Skript (PDF 610, Folie 12): Sicherstellen, dass eine Klasse nur genau eine Instanz hat und einen globalen Zugriffspunkt bietet.",
    "correct_answers": [
      "Sicherstellen, dass von einer Klasse nur genau eine Instanz existiert, und Bereitstellung eines globalen Zugriffspunkts.",
      "Vermeidung mehrfacher Instanziierung (z.B. für Datenbankverbindungen oder Logger)."
    ]
  },
  {
    "id": 5004,
    "text": "Wie funktioniert das Beobachter-Muster (Observer Pattern)?",
    "hint": "Laut Skript (PDF 610, Folie 22): Ein Subjekt benachrichtigt automatisch alle registrierten Beobachter bei Zustandsänderungen (1-zu-n Abhängigkeit).",
    "correct_answers": [
      "Ein Subjekt benachrichtigt automatisch alle registrierten Beobachter, wenn sich sein Zustand ändert.",
      "Definition einer 1-zu-n Abhängigkeit, sodass bei Änderung eines Objekts alle abhängigen Objekte informiert werden."
    ]
  },
  {
    "id": 5005,
    "text": "Wann verwendet man das Strategie-Muster (Strategy Pattern)?",
    "hint": "Laut Skript (PDF 610, Folie 31): Wenn man eine Familie von Algorithmen hat, diese austauschbar machen will und die Auswahl zur Laufzeit treffen möchte.",
    "correct_answers": [
      "Wenn man verschiedene Algorithmen für denselben Zweck hat und diese zur Laufzeit austauschbar machen möchte.",
      "Um das Verhalten einer Klasse flexibel zu ändern, indem man das Verhalten in eigene Klassen (Strategien) auslagert."
    ]
  },
  {
    "id": 6001,
    "text": "Was versteht man unter 'Refactoring'?",
    "hint": "Laut Skript (PDF 700, Folie 19): Änderung der inneren Struktur von Software, um sie verständlicher/änderbarer zu machen, OHNE das äußere Verhalten zu ändern.",
    "correct_answers": [
      "Verbesserung der inneren Struktur des Codes, ohne das beobachtbare äußere Verhalten zu verändern.",
      "Code-Bereinigung zur Erhöhung der Wartbarkeit und Lesbarkeit, bei gleichbleibender Funktionalität."
    ]
  },
  {
    "id": 6002,
    "text": "Was sind 'Coding Conventions' (Programmierrichtlinien) und warum sind sie wichtig?",
    "hint": "Laut Skript (PDF 700, Folie 12): Regeln für Namensgebung, Formatierung etc. Wichtig für Lesbarkeit und Wartbarkeit im Team.",
    "correct_answers": [
      "Regeln für das Schreiben von Code (z.B. Namensgebung, Einrückung). Sie erhöhen die Lesbarkeit und Wartbarkeit im Team.",
      "Einheitliche Standards, damit der Code aussieht, als wäre er von einer einzigen Person geschrieben worden."
    ]
  },
  {
    "id": 6003,
    "text": "Was bedeutet der Begriff 'Technical Debt' (Technische Schulden)?",
    "hint": "Laut Skript (PDF 700, Folie 25): Kosten für zusätzliche Arbeit in der Zukunft, verursacht durch schnelle/dreckige Lösungen heute.",
    "correct_answers": [
      "Die metaphorischen 'Kosten' für zusätzliche zukünftige Arbeit, verursacht durch die Wahl einer einfachen, aber kurzfristigen Lösung.",
      "Qualitätsmängel im Code (z.B. fehlende Tests, schlechte Struktur), die später teuer behoben werden müssen (Zinsen)."
    ]
  },
  {
    "id": 7001,
    "text": "Was ist der Unterschied zwischen zentraler (CVCS) und verteilter (DVCS) Versionsverwaltung?",
    "hint": "Laut Skript (PDF 710, Folie 10/12): Zentral (SVN) = Ein Server hat alle Versionen. Verteilt (Git) = Jeder Client hat das volle Repository (Clone).",
    "correct_answers": [
      "Zentral: Ein Server hat die Historie, Clients haben nur Arbeitskopie. Verteilt: Jeder Client hat eine vollständige Kopie der Historie (Repository).",
      "CVCS (z.B. SVN) ist abhängig vom Server. DVCS (z.B. Git) erlaubt lokales Arbeiten mit voller Historie und Offline-Commits."
    ]
  },
  {
    "id": 7002,
    "text": "Vergleich: 'Lock-Modify-Unlock' vs. 'Copy-Modify-Merge'.",
    "hint": "Laut Skript (PDF 710, Folie 6-8): Lock = Sperren der Datei (andere warten). Merge = Paralleles Arbeiten, Zusammenfügen am Ende.",
    "correct_answers": [
      "Lock: Sperrt Datei für andere (serielles Arbeiten). Merge: Erlaubt paralleles Arbeiten, Konflikte werden beim Zusammenführen gelöst.",
      "Lock-Modify-Unlock verhindert Konflikte durch Sperren. Copy-Modify-Merge erlaubt Konflikte, die gelöst werden müssen."
    ]
  },
  {
    "id": 7003,
    "text": "Was machen die Git-Befehle: commit, push und pull?",
    "hint": "Laut Skript (PDF 720): Commit = Speichern im lokalen Repo. Push = Hochladen zum Server. Pull = Herunterladen & Mergen vom Server.",
    "correct_answers": [
      "Commit: Änderungen im lokalen Repository speichern. Push: Lokale Änderungen zum Server hochladen. Pull: Änderungen vom Server holen und mergen.",
      "Commit ist lokal (Save point). Push ist Transfer nach Remote. Pull ist Update von Remote (Fetch + Merge)."
    ]
  },
  {
    "id": 7004,
    "text": "Was ist 'Build Management' und wozu dient ein Build-Tool (z.B. Maven, Gradle)?",
    "hint": "Laut Skript (PDF 740, Folie 4/7): Automatisierung von Kompilieren, Testen, Paketieren und Abhängigkeiten verwalten.",
    "correct_answers": [
      "Automatisierung des Erstellungsprozesses: Kompilieren, Testen, Paketieren und Verwalten von Abhängigkeiten (Libraries).",
      "Sicherstellung eines wiederholbaren, standardisierten Prozesses vom Quellcode zur ausführbaren Software."
    ]
  },
  {
    "id": 7005,
    "text": "Was bedeutet 'Continuous Integration' (CI)?",
    "hint": "Laut Skript (PDF 740, Folie 27): Häufiges (tägliches) Integrieren von Code-Änderungen in den Hauptzweig, inkl. automatischen Tests.",
    "correct_answers": [
      "Die Praxis, Code-Änderungen häufig (z.B. mehrmals täglich) in ein gemeinsames Repository zu integrieren und automatisch zu testen.",
      "Vermeidung von Integrationsproblemen ('Integration Hell') durch ständige kleine Updates und automatisierte Builds."
    ]
  },
  {
    "id": 8001,
    "text": "Was ist der Unterschied zwischen konstruktiver und analytischer Qualitätssicherung (QS)?",
    "hint": "Laut Skript (PDF 800, Folie 13/14): Konstruktiv = Fehlervermeidung VORHER (Richtlinien, Checklisten). Analytisch = Fehlerfindung NACHHER (Testen, Review).",
    "correct_answers": [
      "Konstruktiv: Maßnahmen zur Fehlervermeidung während der Erstellung (z.B. Richtlinien). Analytisch: Maßnahmen zur Fehlerfindung am Produkt (z.B. Tests).",
      "Konstruktiv soll Fehler präventiv verhindern ('Building it right'). Analytisch sucht Fehler im fertigen Artefakt ('Checking it')."
    ]
  },
  {
    "id": 8002,
    "text": "Verifikation vs. Validierung: Was ist der Unterschied?",
    "hint": "Laut Skript (PDF 810, Folie 5): Verifikation = 'Are we building the product right?' (Spezifikation erfüllt?). Validierung = 'Are we building the right product?' (Kundenwunsch erfüllt?).",
    "correct_answers": [
      "Verifikation: 'Bauen wir das Produkt richtig?' (Spezifikationskonform). Validierung: 'Bauen wir das richtige Produkt?' (Kundennutzen).",
      "Verifikation prüft gegen die technischen Vorgaben. Validierung prüft gegen die Erwartung des Nutzers/Kunden im realen Einsatz."
    ]
  },
  {
    "id": 8003,
    "text": "Was sind die 7 Grundsätze des Softwaretestens (ISTQB)?",
    "hint": "Laut Skript (PDF 810, Folie 12): 1. Testen zeigt Anwesenheit von Fehlern (nicht Abwesenheit). 2. Vollständiges Testen unmöglich. 3. Frühes Testen. 4. Fehlerhäufung. 5. Pestizid-Paradoxon. 6. Kontextabhängigkeit. 7. Trugschluss der Fehlerfreiheit.",
    "correct_answers": [
      "Testen zeigt Anwesenheit von Fehlern (nie Abwesenheit), vollständiges Testen ist unmöglich, Fehler treten gehäuft auf (Cluster).",
      "Frühes Testen spart Kosten, Pestizid-Paradoxon (Tests müssen variieren), Testen ist kontextabhängig."
    ]
  },
  {
    "id": 8004,
    "text": "Was ist der Unterschied zwischen Statischem und Dynamischem Testen?",
    "hint": "Laut Skript (PDF 810, Folie 14): Statisch = Prüfling wird NICHT ausgeführt (Review, statische Analyse). Dynamisch = Prüfling WIRD ausgeführt (Unit-Test, Systemtest).",
    "correct_answers": [
      "Statisch: Prüfung ohne Ausführung des Codes (z.B. Review, Metriken). Dynamisch: Prüfung durch Ausführung des Codes mit Testdaten.",
      "Statische Tests finden Fehler im Code/Dokument (z.B. Syntax). Dynamische Tests finden Fehler im Verhalten (z.B. falsche Berechnung)."
    ]
  },
  {
    "id": 8005,
    "text": "Nennen Sie die Teststufen (Test Levels) im V-Modell in der richtigen Reihenfolge (von unten nach oben).",
    "hint": "Laut Skript (PDF 810, Folie 26): Komponententest (Unit) -> Integrationstest -> Systemtest -> Abnahmetest (Acceptance).",
    "correct_answers": [
      "Komponententest (Unit Test) -> Integrationstest -> Systemtest -> Abnahmetest (Acceptance Test).",
      "Unit Test (prüft Module), Integration (prüft Zusammenspiel), System (prüft Gesamtsystem), Abnahme (prüft Kundensicht)."
    ]
  },
  {
    "id": 8006,
    "text": "Unterschied: Black-Box vs. White-Box Testverfahren.",
    "hint": "Laut Skript (PDF 810, Folie 34/38): Black-Box: Innere Struktur unbekannt (Test gegen Spezifikation). White-Box: Innere Struktur bekannt (Test gegen Code/Pfade).",
    "correct_answers": [
      "Black-Box: Test ohne Kenntnis der inneren Struktur (Input/Output). White-Box: Test mit Kenntnis der inneren Struktur (Code-Pfad-Abdeckung).",
      "Black-Box prüft funktionales Verhalten (Spezifikation). White-Box prüft interne Logik (Schleifen, Verzweigungen)."
    ]
  },
  {
    "id": 8007,
    "text": "Welche Merkmale gehören zur ISO/IEC 25010 (Software-Qualitätsmodell)?",
    "hint": "Laut Skript (PDF 820, Folie 5): Funktionalität, Effizienz, Kompatibilität, Benutzbarkeit, Zuverlässigkeit, Sicherheit, Wartbarkeit, Portabilität.",
    "correct_answers": [
      "Funktionalität, Leistungseffizienz, Kompatibilität, Benutzbarkeit, Zuverlässigkeit, Sicherheit, Wartbarkeit, Portabilität.",
      "Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability."
    ]
  },
  {
    "id": 8008,
    "text": "Was ist ein 'Regressionstest'?",
    "hint": "Laut Skript (PDF 810, Folie 17): Wiederholung von Tests nach Code-Änderungen, um sicherzustellen, dass keine neuen Fehler eingebaut wurden (keine Regression).",
    "correct_answers": [
      "Wiederholung von Tests nach Änderungen, um sicherzustellen, dass bereits funktionierende Teile nicht kaputt gemacht wurden.",
      "Testen, ob neue Änderungen Seiteneffekte auf bestehende Funktionen haben ('Verschlechterung')."
    ]
  },
  {
    "id": 8009,
    "text": "Welche Arten von Reviews gibt es und wie unterscheiden sie sich?",
    "hint": "Laut Skript (PDF 820, Folie 10): Walkthrough (informell, Autor führt durch), Inspektion (formal, Moderator, Protokoll, Checklisten).",
    "correct_answers": [
      "Walkthrough (informell, Autor präsentiert, Feedback) und Inspektion (streng formal, Moderator, Protokoll, Metriken).",
      "Inspektion ist der formalste Review-Typ mit festen Rollen. Walkthrough ist weniger formal und dient dem gemeinsamen Verständnis."
    ]
  },
  {
    "id": 8010,
    "text": "Wie verhalten sich die Kosten für Fehlerbehebung im Projektverlauf?",
    "hint": "Laut Skript (PDF 800, Folie 21): Exponentieller Anstieg. Fehler in Anforderung = Billig (Faktor 1). Fehler im Betrieb = Extrem teuer (Faktor 100-1000).",
    "correct_answers": [
      "Die Kosten steigen exponentiell an: Je später ein Fehler gefunden wird (z.B. im Betrieb), desto teurer ist die Behebung.",
      "Fehlerbehebung in der Anforderungsphase ist günstig (Faktor 1), im Betrieb extrem teuer (Faktor 100+)."
    ]
  },
  {
    "id": 5006,
    "text": "Szenario: Sie wollen eine Klasse dynamisch zur Laufzeit mit Zusatzfunktionen erweitern (Vererbung ist keine Option). Welches Pattern?",
    "hint": "Das Decorator-Pattern (Dekorierer) erlaubt es, Objekten dynamisch neue Zuständigkeiten hinzuzufügen, ohne die Klasse zu ändern. (Frage 71).",
    "correct_answers": [
      "Decorator Pattern (Dekorierer)."
    ]
  },
  {
    "id": 5007,
    "text": "Wofür steht das Akronym SOLID?",
    "hint": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
    "correct_answers": [
      "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
    ]
  },
  {
    "id": 5008,
    "text": "Was besagt das 'Single Responsibility Principle' (SRP)?",
    "hint": "Eine Klasse sollte nur einen einzigen Grund haben, sich zu ändern (nur eine Verantwortlichkeit). (Frage 79).",
    "correct_answers": [
      "Eine Klasse sollte nur eine einzige Verantwortlichkeit haben (einen Grund zur Änderung)."
    ]
  },
  {
    "id": 5009,
    "text": "Was besagt das 'Liskov Substitution Principle' (LSP)?",
    "hint": "Objekte einer Basisklasse müssen durch Objekte ihrer abgeleiteten Klassen ersetzbar sein, ohne dass das Programm korrumpiert wird. (Frage 80).",
    "correct_answers": [
      "Abgeleitete Klassen müssen sich so verhalten, dass sie ihre Basisklassen jederzeit ersetzen können (Verhaltenskompatibilität)."
    ]
  },
  {
    "id": 7006,
    "text": "Was ist ein 'Feature Branch' und welchen Vorteil bietet er?",
    "hint": "Entwicklung eines Features in einem isolierten Zweig. Vorteil: Hauptzweig (Main) bleibt stabil, Feature kann unabhängig getestet werden. (Frage 89/92).",
    "correct_answers": [
      "Ein separater Zweig für ein neues Feature. Vorteil: Isolation vom Hauptcode (Main bleibt stabil) und parallele Entwicklung."
    ]
  },
  {
    "id": 7007,
    "text": "Szenario: Weltweit verteiltes Team, Offline-Arbeit essenziell. Welches Versionsverwaltungssystem wählen Sie?",
    "hint": "Dezentral (DVCS) wie Git. Grund: Jeder hat das volle Repo lokal, kann offline committen und History einsehen. (Frage 96).",
    "correct_answers": [
      "Verteiltes System (z.B. Git). Grund: Volles lokales Repository ermöglicht Offline-Arbeit und Commits ohne Serververbindung."
    ]
  },
  {
    "id": 7008,
    "text": "Welche der folgenden Begriffe ist KEINE Phase im Standard Maven-Build-Lebenszyklus?",
    "hint": "Standard Phasen: validate, compile, test, package, verify, install, deploy. 'Collect' ist keine Phase. (Frage 104).",
    "correct_answers": [
      "Collect"
    ]
  },
  {
    "id": 7009,
    "text": "Sie wollen aus Version '1.0.1-SNAPSHOT' ein Release '1.0.1' machen. Was bedeutet SNAPSHOT?",
    "hint": "SNAPSHOT kennzeichnet eine Entwicklungsversion, die sich noch ändern kann. Ein Release (ohne Snapshot) ist fest/final. (Frage 107).",
    "correct_answers": [
      "SNAPSHOT kennzeichnet eine instabile Entwicklungsversion. Für das Release muss das Suffix '-SNAPSHOT' entfernt werden."
    ]
  },
  {
    "id": 8011,
    "text": "Nennen Sie zwei Verfahren, um systematisch Testdaten zu ermitteln.",
    "hint": "Äquivalenzklassenbildung (Werte gruppieren) und Grenzwertanalyse (Ränder testen). (Frage 82).",
    "correct_answers": [
      "Äquivalenzklassenbildung und Grenzwertanalyse."
    ]
  },
  {
    "id": 8012,
    "text": "Was messe ich, wenn ich bei einer Klasse A die Anzahl der verwendeten anderen Klassen zähle?",
    "hint": "Das ist ein Maß für Koppelung (Coupling), spezifisch oft 'Fan-Out' oder 'Coupling Between Objects' (CBO). (Frage 117).",
    "correct_answers": [
      "Die Koppelung (Coupling) der Klasse (z.B. CBO - Coupling Between Objects)."
    ]
  },
  {
    "id": 8013,
    "text": "Nennen Sie eine negative Eigenschaft des Softwaremaßes 'Lines of Code' (LOC).",
    "hint": "LOC sagt nichts über Qualität oder Komplexität aus. Kann durch Formatierung manipuliert werden. Unterschiedliche Sprachen nicht vergleichbar. (Frage 118).",
    "correct_answers": [
      "Sagt wenig über Qualität oder Komplexität aus; abhängig von Formatierung und Programmiersprache."
    ]
  },
  {
    "id": 9001,
    "text": "Wahr oder Falsch: Die Anzahl möglicher Kommunikationskanäle wächst linear mit der Anzahl der Projektbeteiligten.",
    "hint": "Falsch. Sie wächst quadratisch (n*(n-1)/2). Das ist der Grund für Kommunikationsprobleme in großen Teams. (Frage 119).",
    "correct_answers": [
      "Falsch (wächst quadratisch)."
    ]
  },
  {
    "id": 9002,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Begeisterungsanforderungen können fehlende Basisanforderungen ausgleichen.",
    "hint": "Falsch. Basisanforderungen sind 'Muss'-Kriterien. Wenn sie fehlen, ist der Kunde unzufrieden, egal wie toll die Extras sind (Kano-Modell). (Frage 121).",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9003,
    "text": "Wahr oder Falsch: Es ist sinnvoll, Architekturentscheidungen möglichst spät zu treffen.",
    "hint": "Wahr (im agilen Kontext 'Last Responsible Moment'), um Flexibilität zu wahren. ABER: Fundamentale Entscheidungen müssen früh stehen. Die PDF-Frage zielt oft auf 'Falsch' bei klassischer Lehre oder 'Wahr' bei moderner. Kontext: Architektur ist schwer zu ändern -> Früh. Details -> Spät. (Frage 129).",
    "correct_answers": [
      "Falsch (Fundamentale Entscheidungen sollten früh stehen, da Änderungen teuer sind)."
    ]
  },
  {
    "id": 9004,
    "text": "Wahr oder Falsch: Bei Story Points geht es um die Bestimmung relativer Größe mittels Schätzungen.",
    "hint": "Wahr. Story Points sind relative Maße, keine absoluten Stunden. (Frage 127).",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9005,
    "text": "Wahr oder Falsch: Wenn alle Klassen eine hohe Kohäsion haben, sinkt automatisch die Koppelung im System.",
    "hint": "Falsch. Man kann sehr kohärente Klassen haben, die trotzdem extrem stark miteinander verflochten (gekoppelt) sind. (Frage 133).",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9006,
    "text": "Wahr oder Falsch: White-Box-Testing und Smoke-Test lassen sich nicht kombinieren.",
    "hint": "Falsch. Ein Smoke-Test (Schnelltest) kann durchaus White-Box-Elemente enthalten oder automatisiert als Unit-Test laufen. (Frage 137).",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9007,
    "text": "Wahr oder Falsch: Die Komplexität von Software wächst mehr als linear mit der Anzahl der beteiligten Menschen oder Elemente.",
    "hint": "Wahr. Durch die exponentiell steigenden Kommunikationsbeziehungen und Abhängigkeiten steigt die Komplexität überproportional.",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9008,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Leistungsanforderungen können fehlende Basisanforderungen ersetzen.",
    "hint": "Falsch. Basisanforderungen sind selbstverständlich. Wenn sie fehlen, ist der Kunde unzufrieden, egal wie gut die Leistungsmerkmale sind.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9009,
    "text": "Wahr oder Falsch: Fehler, die erst nach Auslieferung entdeckt werden, kosten in der Behebung ca. 2-5 mal mehr als im Entwurf.",
    "hint": "Falsch (zu niedrig geschätzt). Die Kosten sind oft um den Faktor 100 bis 1000 höher (exponentieller Anstieg), nicht nur 2-5 fach.",
    "correct_answers": [
      "Falsch (Die Kosten sind oft um Faktor 100+ höher)."
    ]
  },
  {
    "id": 9010,
    "text": "Wahr oder Falsch: Je mehr Leistungsanforderungen umgesetzt werden, umso zufriedener ist der Kunde (linearer Zusammenhang).",
    "hint": "Wahr. Im Kano-Modell sorgen Leistungsanforderungen für proportionale Zufriedenheit ('Mehr ist besser').",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9011,
    "text": "Wahr oder Falsch: Mit dem Architekturentwurf sollte immer erst begonnen werden, wenn die Anforderungserhebung zu 100% abgeschlossen ist.",
    "hint": "Falsch. In modernen/agilen Prozessen laufen Requirements und Architektur oft parallel oder iterativ (Twin Peaks Model).",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9012,
    "text": "Wahr oder Falsch: Es ist in jedem Fall sinnvoll, alle Architekturentscheidungen möglichst früh zu treffen.",
    "hint": "Falsch. Man sollte Entscheidungen so lange offen halten wie möglich ('Last Responsible Moment'), um flexibel zu bleiben, solange es nicht fundamentale Blocker sind.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9013,
    "text": "Wahr oder Falsch: Bestehende Systemdokumentation darf nicht aktualisiert werden, um die Historie zu wahren.",
    "hint": "Falsch. Veraltete Dokumentation ist nutzlos ('Documentation Rot'). Sie muss aktuell gehalten werden. Historie wird über Versionierung (Git) gewahrt.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9014,
    "text": "Wahr oder Falsch: Die Angabe von Abhängigkeiten (Dependencies) gehört bei Maven nicht zum Build-Prozess.",
    "hint": "Falsch. Dependency Management ist eine der Kernaufgaben von Maven und essenzieller Teil des Builds.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9015,
    "text": "Wahr oder Falsch: Bei Maven beschreibt man nicht Schritt für Schritt 'wie' gebaut wird, sondern deklarativ 'was' (Ziele/Phasen).",
    "hint": "Wahr. Maven nutzt 'Convention over Configuration' und deklarative Beschreibungen (pom.xml), im Gegensatz zu imperativen Skripten (Ant).",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9016,
    "text": "Wahr oder Falsch: Ein wesentliches Ziel von Architektur ist die Erhöhung der Komplexität der Aufgabe.",
    "hint": "Falsch. Ziel ist die REDUKTION und Beherrschbarkeit von Komplexität.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 10001,
    "text": "Klassifizieren Sie: 'Geplante Wartung soll normalerweise Sa/So 0-24 Uhr stattfinden.'",
    "hint": "Das ist eine nicht-funktionale Anforderung (Betriebsbedingung/Verfügbarkeit).",
    "correct_answers": [
      "Nicht-funktionale Anforderung."
    ]
  },
  {
    "id": 10002,
    "text": "Klassifizieren Sie: 'System soll alle Bestellungen speichern (Datum, Name, Wert).'",
    "hint": "Das ist eine funktionale Anforderung (Was tut das System? Es speichert Daten).",
    "correct_answers": [
      "Funktionale Anforderung."
    ]
  },
  {
    "id": 10003,
    "text": "Klassifizieren Sie: 'Das System soll ein relationales Datenbanksystem von der Liste geprüfter Systeme nutzen.'",
    "hint": "Nicht-funktionale Anforderung (Technische Randbedingung / Constraint).",
    "correct_answers": [
      "Nicht-funktionale Anforderung (Randbedingung)."
    ]
  },
  {
    "id": 10004,
    "text": "Bewerten Sie die Aussage eines Kollegen: 'Wir sollten alle Namen (Klassen/Variablen) nach einem einheitlichen Schema vergeben, an das sich jeder halten muss.'",
    "hint": "Zustimmung. Einheitliche Naming Conventions (Coding Standards) sind essenziell für Wartbarkeit und Lesbarkeit im Team (Clean Code).",
    "correct_answers": [
      "Zustimmung. Coding Conventions erhöhen Lesbarkeit und Wartbarkeit massiv."
    ]
  },
  {
    "id": 10005,
    "text": "Bewerten Sie die Aussage: 'Wortspiele bei Variablennamen lockern das Lesen auf und erhöhen die Verständlichkeit.'",
    "hint": "Ablehnung. Code muss professionell und eindeutig sein. 'Witzige' Namen verwirren und erschweren das Verständnis für Dritte.",
    "correct_answers": [
      "Ablehnung. Code muss eindeutig und professionell sein; 'Witze' erzeugen Verwirrung."
    ]
  },
  {
    "id": 10006,
    "text": "Bewerten Sie die Aussage: 'Es ist zu viel Aufwand, Standards ständig zu überprüfen. Wir sind Profis, wir müssen auf Effizienz achten!'",
    "hint": "Ablehnung. Das Ignorieren von Standards führt zu Technischen Schulden ('Quick & Dirty'). Langfristig sinkt die Effizienz drastisch (Wartungsprobleme).",
    "correct_answers": [
      "Ablehnung. Kurzfristige 'Effizienz' durch Ignorieren von Standards führt langfristig zu teuren Technischen Schulden."
    ]
  },
  {
    "id": 7010,
    "text": "Wozu dient der Befehl 'Check-out' in einem Versionsverwaltungssystem?",
    "hint": "Laut Skript (PDF 710): Kopiert eine bestimmte Version (Revision) aus dem Repository in den lokalen Arbeitsbereich (Working Copy), um sie zu bearbeiten.",
    "correct_answers": [
      "Er kopiert eine bestimmte Version aus dem Repository in den lokalen Arbeitsbereich zur Bearbeitung."
    ]
  },
  {
    "id": 7011,
    "text": "Was ist ein Grund, weshalb Git gerne bei großen Open-Source-Projekten eingesetzt wird?",
    "hint": "Laut Skript (PDF 720): Dezentrale Struktur erlaubt vielen Entwicklern unabhängiges Arbeiten. Forks & Pull Requests erleichtern Beiträge externer Entwickler ohne Schreibrechte am Haupt-Repo.",
    "correct_answers": [
      "Dezentrale Struktur und einfaches Branching/Merging erleichtern die Zusammenarbeit vieler unabhängiger Entwickler (Forks/Pull Requests)."
    ]
  },
  {
    "id": 7012,
    "text": "Mit welchem 'Goal' muss man Maven aufrufen, um ein Paket zu erzeugen UND es im lokalen Repositorium abzulegen?",
    "hint": "Laut Skript (PDF 740, Folie 18): 'mvn install' führt alle Phasen durch (compile, test, package) und kopiert das Ergebnis ins lokale Repo (~/.m2).",
    "correct_answers": [
      "install"
    ]
  },
  {
    "id": 7013,
    "text": "Welches Maven-Goal rufen Sie auf, um alle Artefakte früherer Builds (z.B. target-Ordner) zu entfernen?",
    "hint": "Laut Skript (PDF 740): 'mvn clean' löscht das Build-Verzeichnis (target), um einen sauberen Neustart zu garantieren.",
    "correct_answers": [
      "clean"
    ]
  },
  {
    "id": 7014,
    "text": "Wie ist ein 'Build-Prozess' definiert?",
    "hint": "Laut Skript (PDF 740): Der Weg vom Quellcode (Source) zur ausführbaren Software (Artefakt) durch Schritte wie Kompilieren, Testen, Paketieren.",
    "correct_answers": [
      "Der automatisierte Ablauf, der aus Quellcode und Ressourcen eine ausführbare oder auslieferbare Software erstellt."
    ]
  },
  {
    "id": 6004,
    "text": "Reicht eine integrierte Dokumentation (z.B. Javadoc) für ein Projekt aus? Begründen Sie.",
    "hint": "Laut Skript (PDF 700): Nein. Javadoc erklärt Klassen/Methoden (Mikro-Ebene), aber nicht die Architektur, Zusammenhänge oder Design-Entscheidungen (Makro-Ebene).",
    "correct_answers": [
      "Nein. Sie dokumentiert nur Details (API), aber nicht die Architektur, Zusammenhänge oder Design-Entscheidungen."
    ]
  },
  {
    "id": 9017,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Leistungsanforderungen können mehrere Basisanforderungen ersetzen.",
    "hint": "Falsch (PDF Frage 122). Basisanforderungen sind Pflicht. Ohne sie ist das Produkt unbrauchbar, egal wie gut die Leistung ist.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9018,
    "text": "Wahr oder Falsch: Bei plangesteuerten Prozessen werden alle Aktivitäten vollständig vorweg geplant, bei agilen schrittweise.",
    "hint": "Wahr (PDF Frage 125). Das ist der Kernunterschied (Big Design Up Front vs. Rolling Wave Planning).",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9019,
    "text": "Wahr oder Falsch: Bei integrierter Dokumentation (Javadoc) fehlt oft die Dokumentation der Architektur.",
    "hint": "Wahr (PDF Frage 136). Code-Kommentare erklären das 'Was' und 'Wie' im Kleinen, aber selten das 'Warum' und die große Struktur.",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 9020,
    "text": "Wahr oder Falsch: Wenn eine Klasse andere (von ihr abgeleitete) Klassen kennt, erhöht das die Koppelung und ist ein Strukturproblem.",
    "hint": "Wahr (PDF Frage 140). Eine Basisklasse sollte nie ihre Kinder kennen (Zyklische Abhängigkeit). Das verletzt das Open/Closed Principle.",
    "correct_answers": [
      "Wahr."
    ]
  },
  {
    "id": 1014,
    "text": "Warum gibt es Komplexität in der Software (Breite / Tiefe)?",
    "hint": "Laut Skript: Breite entsteht durch die Menge an Anforderungen/Funktionen. Tiefe entsteht durch die technische Schwierigkeit und Vernetzung (Logik).",
    "correct_answers": [
      "Breite durch Menge der Funktionen (Vielzahl), Tiefe durch technische Schwierigkeit und Vernetzung (Detailgrad)."
    ]
  },
  {
    "id": 1015,
    "text": "Nennen Sie ein Beispiel für eine Methode oder ein Vorgehen, mit dem die Kohäsion verbessert werden kann.",
    "hint": "Laut Skript (Folie 76/77): Modularisierung nach fachlichen Aspekten, 'Separation of Concerns' (SoC), Aufteilung großer Klassen.",
    "correct_answers": [
      "Anwendung von 'Separation of Concerns' (SoC) und Modularisierung nach fachlicher Zusammengehörigkeit."
    ]
  },
  {
    "id": 9021,
    "text": "Wahr oder Falsch: White-Box-Testing und Smoke-Test lassen sich nicht kombinieren.",
    "hint": "Falsch (PDF Frage 137). Ein Smoke-Test (Schnelltest auf grundlegende Funktion) kann technisch durchaus als automatisierter White-Box-Unit-Test implementiert sein.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9022,
    "text": "Wahr oder Falsch: Die Angabe von Abhängigkeiten bei Maven gehört nicht zum Build-Prozess.",
    "hint": "Falsch (PDF Frage 138). Dependency Management ist ein Kernbestandteil des Maven-Build-Prozesses.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 9023,
    "text": "Wahr oder Falsch: Ein wesentliches Ziel von Architektur ist die Erhöhung der Komplexität der Aufgabe.",
    "hint": "Falsch (PDF Frage 141). Das Ziel ist Management und Reduktion von Komplexität, nicht Erhöhung.",
    "correct_answers": [
      "Falsch."
    ]
  },
  {
    "id": 10007,
    "text": "Szenario-Klassifikation: 'Geplante Wartung soll normalerweise Sa/So 0-24 Uhr stattfinden.'",
    "hint": "Nicht-funktionale Anforderung (Wartbarkeit / Betriebszeit).",
    "correct_answers": [
      "Nicht-funktionale Anforderung."
    ]
  },
  {
    "id": 10008,
    "text": "Szenario-Klassifikation: 'System soll alle Bestellungen speichern zusammen mit Datum, Name, Wert.'",
    "hint": "Funktionale Anforderung (Datenhaltung ist eine Funktion).",
    "correct_answers": [
      "Funktionale Anforderung."
    ]
  },
  {
    "id": 10009,
    "text": "Szenario-Klassifikation: 'Das System soll ein relationales Datenbanksystem von der Liste geprüfter Systeme nutzen.'",
    "hint": "Nicht-funktionale Anforderung (Technische Randbedingung / Constraint).",
    "correct_answers": [
      "Nicht-funktionale Anforderung (Randbedingung)."
    ]
  },
  {
    "id": 10010,
    "text": "Szenario-Klassifikation: 'Das System soll zu einem Kunden eine Liste aller Verkäufe ausgeben (Datum, Artikel, Preis).'",
    "hint": "Funktionale Anforderung (Ausgabe/Bericht).",
    "correct_answers": [
      "Funktionale Anforderung."
    ]
  },
  {
    "id": 10011,
    "text": "Kollegen-Aussage: 'Wir sollten alle Namen nach einem einheitlichen Schema vergeben, an das sich jeder halten muss.' - Zustimmen?",
    "hint": "Zustimmen. Einheitliche Konventionen (Naming Conventions) sind essenziell für Wartbarkeit.",
    "correct_answers": [
      "Zustimmen."
    ]
  },
  {
    "id": 10012,
    "text": "Kollegen-Aussage: 'Gelegentliche Wortspiele bei Variablennamen lockern das Lesen auf.' - Zustimmen?",
    "hint": "Ablehnen. Code muss professionell, eindeutig und für jeden verständlich sein. Humor gehört in die Pause, nicht in den Code.",
    "correct_answers": [
      "Ablehnen."
    ]
  },
  {
    "id": 10013,
    "text": "Kollegen-Aussage: 'Es ist zu viel Aufwand, Standards ständig zu überprüfen. Wir müssen auf Effizienz achten!' - Zustimmen?",
    "hint": "Ablehnen. Das Ignorieren von Standards erzeugt 'Technische Schulden'. Kurzfristig schneller, langfristig viel teurer und ineffizienter.",
    "correct_answers": [
      "Ablehnen."
    ]
  }
]