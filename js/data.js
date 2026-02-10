const questionsData = [
  {
    "id": 1001,
    "chapter": 1,
    "text": "Was bedeutet Koppelung (Coupling) im Software-Engineering?",
    "image": null,
    "explanation": "Koppelung misst die Abhängigkeit zwischen Einheiten. Ziel ist lose Koppelung, um Änderungen lokal zu begrenzen (Folie 68/70).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Koppelung ist das Maß der Abhängigkeit zwischen zwei unterschiedlichen Einheiten eines Systems.", "isCorrect": true },
      { "text": "Sie beschreibt, wie stark sich eine Änderung in einer Einheit auf andere Einheiten auswirkt (Änderungsaufwand).", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Koppelung bezeichnet den inneren Zusammenhalt der Funktionen innerhalb eines einzelnen Moduls.", "isCorrect": false }, // Falle: Das ist Kohäsion!
      { "text": "Koppelung ist das Maß dafür, wie viele Methoden eine Klasse maximal enthalten darf.", "isCorrect": false }, // Klingt plausibel, ist aber falsch.
      { "text": "Eine hohe Koppelung ist erstrebenswert, um die Performance durch direkte Speicherzugriffe zu optimieren.", "isCorrect": false }, // Falle: Performance-Argument zieht oft, ist hier aber falsch.
      { "text": "Koppelung beschreibt die Verbindung von Hardware-Schnittstellen mit der Software-Logik.", "isCorrect": false },
      { "text": "Koppelung entsteht ausschließlich durch die Vererbung von Klassen in der Objektorientierung.", "isCorrect": false } // Zu spezifisch/falsch.
    ]
  },
  {
    "id": 1002,
    "chapter": 1,
    "text": "Was ist das Ziel von Kapselung (Encapsulation)?",
    "image": null,
    "explanation": "Kapselung verbirgt Implementierungsdetails (Information Hiding) und stellt eine definierte Schnittstelle bereit (Folie 67).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Trennung der öffentlichen Schnittstelle von der verborgenen Implementierung (Information Hiding).", "isCorrect": true },
      { "text": "Schutz des internen Zustands eines Objekts vor unerlaubtem Zugriff von außen.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Zusammenfassung möglichst vieler verschiedener Funktionen in einer einzigen 'Gott-Klasse'.", "isCorrect": false }, // Falle: Gegenteil von gutem Design.
      { "text": "Vollständige Offenlegung aller Variablen, um die Testbarkeit zu erhöhen.", "isCorrect": false }, // Falle: Testbarkeit klingt gut, aber Prinzip ist falsch.
      { "text": "Auslagerung von Programmcode in externe Bibliotheken (DLLs) zur Laufzeitoptimierung.", "isCorrect": false }, // Klingt technisch, ist aber Modularisierung/Linking.
      { "text": "Verschlüsselung des Quellcodes, um geistiges Eigentum zu schützen.", "isCorrect": false }, // Klassische Falle: Kapselung vs. Kryptografie.
      { "text": "Sicherstellung, dass jedes Modul Zugriff auf die globalen Datenstrukturen hat.", "isCorrect": false }
    ]
  },
  {
    "id": 1003,
    "chapter": 1,
    "text": "Was beschreibt die Kohäsion (Cohesion)?",
    "image": null,
    "explanation": "Kohäsion misst den inneren Zusammenhalt. Ein Modul soll EINE Aufgabe erfüllen (Folie 76).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Kohäsion ist das Maß für den inneren Zusammenhalt und die Aufgabenfokussierung eines Moduls.", "isCorrect": true },
      { "text": "Sie gibt an, wie stark die Elemente innerhalb einer Komponente logisch zusammengehören.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Kohäsion beschreibt die Stärke der Abhängigkeit zwischen zwei verschiedenen Modulen.", "isCorrect": false }, // Falle: Das ist Koppelung!
      { "text": "Kohäsion ist ein Maß für die Anzahl der Codezeilen pro Methode (LOC).", "isCorrect": false },
      { "text": "Eine niedrige Kohäsion ist ideal, da sie für maximale Flexibilität und Wiederverwendbarkeit sorgt.", "isCorrect": false }, // Falle: Falsche Schlussfolgerung.
      { "text": "Kohäsion beschreibt die Konsistenz der grafischen Benutzeroberfläche (Corporate Identity).", "isCorrect": false },
      { "text": "Kohäsion misst die Geschwindigkeit, mit der Module miteinander kommunizieren.", "isCorrect": false }
    ]
  },
  {
    "id": 1004,
    "chapter": 1,
    "text": "Wie unterscheiden sich Komplexität in Breite und Tiefe?",
    "image": null,
    "explanation": "Breite = Menge (viele Funktionen/User). Tiefe = Struktur (Verknüpfungen, Verschachtelung, Details). (Folie 37/38).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Breite entsteht durch die Menge an Funktionen und Schnittstellen; Tiefe durch strukturelle Verknüpfungen und Logik-Details.", "isCorrect": true },
      { "text": "Breite bezieht sich auf die Anzahl gleichartiger Elemente (z.B. User), Tiefe auf die Abhängigkeitsketten und Verschachtelung.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Breite bezieht sich auf die Dauer der Entwicklung, Tiefe auf die Größe des Entwicklerteams.", "isCorrect": false }, // Klingt nach Management, ist aber falsch.
      { "text": "Breite entsteht durch komplexe Algorithmen, Tiefe durch eine große Anzahl einfacher Funktionen.", "isCorrect": false }, // Falle: Genau verdreht!
      { "text": "Breite ist die physische Verteilung der Server, Tiefe ist die Größe der Datenbank.", "isCorrect": false },
      { "text": "Breite bezeichnet das Frontend, Tiefe bezeichnet das Backend und die Datenbank.", "isCorrect": false }, // Beliebte Falle.
      { "text": "Komplexität in der Breite gibt es in der Informatik nicht, nur algorithmische Tiefe.", "isCorrect": false }
    ]
  },
  {
    "id": 1005,
    "chapter": 1,
    "text": "Welche Maßnahme verbessert die Kohäsion eines Systems?",
    "image": null,
    "explanation": "SoC (Separation of Concerns) teilt Verantwortlichkeiten auf. Jedes Modul macht nur das, wofür es zuständig ist -> Hohe Kohäsion.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Anwendung von 'Separation of Concerns' (SoC) zur Trennung von Verantwortlichkeiten.", "isCorrect": true },
      { "text": "Aufteilung einer großen Klasse in mehrere kleine Klassen mit jeweils nur einer Verantwortlichkeit.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Erhöhung der Abhängigkeiten zwischen den Modulen, um Daten schneller auszutauschen.", "isCorrect": false }, // Führt zu hoher Koppelung.
      { "text": "Zusammenlegen von Hilfsfunktionen in eine globale 'Utils'-Klasse für einfachen Zugriff.", "isCorrect": false }, // Falle: Führt oft zu niedriger Kohäsion (God Class).
      { "text": "Verwendung von globalen Variablen statt Parameterübergabe.", "isCorrect": false },
      { "text": "Reduzierung der Anzahl der Klassen durch Zusammenfassung ähnlicher Funktionalitäten.", "isCorrect": false }, // Falle: Kann Kohäsion senken.
      { "text": "Implementierung aller Methoden als 'public static', um Instanziierung zu sparen.", "isCorrect": false }
    ]
  },
  {
    "id": 1006,
    "chapter": 1,
    "text": "Welches sind fundamentale Prinzipien des Software-Engineerings?",
    "image": null,
    "explanation": "Prinzipien sind Grundregeln wie Abstraktion, Modularisierung, Kapselung etc. (Folie 62).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Abstraktion, Modularisierung, Kapselung, Information Hiding.", "isCorrect": true },
      { "text": "Separation of Concerns, DRY (Don't Repeat Yourself), Inkrementelles Vorgehen.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Anforderungsanalyse, Entwurf, Implementierung, Test, Wartung.", "isCorrect": false }, // Falle: Das sind Phasen, keine Prinzipien!
      { "text": "Objektorientierung, Vererbung, Polymorphie.", "isCorrect": false }, // Falle: Das sind OOP-Konzepte, keine allgemeinen SE-Prinzipien.
      { "text": "Wasserfall-Modell, V-Modell, Scrum, Kanban.", "isCorrect": false }, // Falle: Das sind Vorgehensmodelle.
      { "text": "Java, C++, Python, JavaScript.", "isCorrect": false },
      { "text": "User Experience (UX), Interface Design (UI), Accessibility.", "isCorrect": false }
    ]
  },
  {
    "id": 1007,
    "chapter": 1,
    "text": "Warum ist Abstraktion im Software-Engineering essenziell?",
    "image": null,
    "explanation": "Abstraktion reduziert Komplexität, indem Details weggelassen werden. Man behält den Überblick (Folie 63).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Sie reduziert Komplexität, indem sie unnötige Details ausblendet und sich auf das Wesentliche fokussiert.", "isCorrect": true },
      { "text": "Sie ermöglicht es, Systeme durch Vereinfachung und Modellbildung handhabbar zu machen.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Sie sorgt dafür, dass der Code hardwarenah ausgeführt wird, um maximale Performance zu erzielen.", "isCorrect": false }, // Falle: Gegenteil.
      { "text": "Abstraktion bedeutet, den Code so generisch zu schreiben, dass er gar keine konkreten Funktionen mehr enthält.", "isCorrect": false }, // Übertrieben.
      { "text": "Sie ist notwendig, um Software vor Reverse-Engineering durch Hacker zu schützen.", "isCorrect": false },
      { "text": "Abstraktion ersetzt die Dokumentation, da der Code sich selbst erklärt.", "isCorrect": false },
      { "text": "Sie eliminiert alle Fehler im Programmcode automatisch.", "isCorrect": false }
    ]
  },
  {
    "id": 1008,
    "chapter": 1,
    "text": "Was charakterisiert 'niedrige Kohäsion'?",
    "image": null,
    "explanation": "Niedrige Kohäsion = Zufällige Ansammlung von Funktionen. Schlecht wartbar, schwer verständlich.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Eine zufällige oder unstrukturierte Ansammlung von Funktionen ohne klaren logischen Zusammenhang.", "isCorrect": true },
      { "text": "Ein Modul, das viele völlig unterschiedliche Aufgaben gleichzeitig erledigt ('bunt gemischt').", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Ein Modul, das nur eine einzige, klar definierte Aufgabe erfüllt.", "isCorrect": false }, // Falle: Das wäre hohe Kohäsion.
      { "text": "Ein System mit sehr wenigen Abhängigkeiten zwischen den Modulen.", "isCorrect": false }, // Falle: Das wäre lose Koppelung.
      { "text": "Code, der besonders kurz und effizient geschrieben ist.", "isCorrect": false },
      { "text": "Ein Modul, das intensiv mit anderen Modulen kommuniziert.", "isCorrect": false }, // Koppelung.
      { "text": "Eine Software, die nur auf alten Betriebssystemen läuft.", "isCorrect": false }
    ]
  },
  {
    "id": 1009,
    "chapter": 1,
    "text": "Berechnung der Systemzuverlässigkeit bei serieller Abhängigkeit: Wenn Module je 90% (0.9) Zuverlässigkeit haben, wie verhält sich das Gesamtsystem?",
    "image": null,
    "explanation": "0.9 * 0.9 = 0.81. Die Gesamtzuverlässigkeit ist immer kleiner als die schwächste Einzelkomponente bei serieller Abhängigkeit.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Die Gesamtzuverlässigkeit ist kleiner als 0,9 (Produktregel).", "isCorrect": true },
      { "text": "Die Fehlerwahrscheinlichkeiten summieren sich, daher sinkt die Gesamtzuverlässigkeit unter den Wert der Einzelkomponenten.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Sie liegt bei exakt 0,9, da das System so stark ist wie sein schwächstes Glied.", "isCorrect": false }, // Beliebter Denkfehler!
      { "text": "Sie steigt über 0,9, da sich die Module gegenseitig absichern (Redundanz).", "isCorrect": false }, // Wäre nur bei paralleler Redundanz so.
      { "text": "Sie beträgt 1,8, da sich die Wahrscheinlichkeiten addieren.", "isCorrect": false },
      { "text": "Die Zuverlässigkeit bleibt konstant, solange keine Bugs im Code sind.", "isCorrect": false },
      { "text": "Das hängt von der Programmiersprache ab.", "isCorrect": false }
    ]
  },
  {
    "id": 1010,
    "chapter": 1,
    "text": "Welches Verhältnis von Koppelung und Kohäsion wird im Software-Engineering angestrebt?",
    "image": null,
    "explanation": "Ziel: Hohe Kohäsion (starker innerer Zusammenhalt) und lose Koppelung (wenig Abhängigkeit nach außen).",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Möglichst hohe Kohäsion und möglichst lose (niedrige) Koppelung.", "isCorrect": true },
      { "text": "Starker innerer Zusammenhalt der Module bei minimalen Abhängigkeiten zwischen den Modulen.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Hohe Koppelung und hohe Kohäsion für maximale Stabilität.", "isCorrect": false }, // Falle: "Hoch" klingt immer gut.
      { "text": "Niedrige Koppelung und niedrige Kohäsion für maximale Flexibilität.", "isCorrect": false }, // Falle: "Niedrig" klingt nach wenig Aufwand.
      { "text": "Hohe Koppelung, um Code wiederzuverwenden, und niedrige Kohäsion zur Vermeidung von Komplexität.", "isCorrect": false }, // Klingt schlau, ist aber falsch.
      { "text": "Ein ausgeglichenes Verhältnis (50/50) ist immer ideal.", "isCorrect": false },
      { "text": "Das ist egal, solange die Unit-Tests grün sind.", "isCorrect": false }
    ]
  },
  {
    "id": 1011,
    "chapter": 1,
    "text": "Was ist der Hauptzweck von Modularisierung?",
    "image": null,
    "explanation": "Zerlegung in handhabbare Teile (Bausteine). Beherrschbarkeit von Komplexität, Austauschbarkeit, parallele Entwicklung.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Zerlegung eines komplexen Systems in überschaubare, austauschbare Teilsysteme.", "isCorrect": true },
      { "text": "Reduktion der Komplexität durch 'Teile und Herrsche' (Divide and Conquer).", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Erhöhung der Performance durch Reduzierung des Speicherverbrauchs.", "isCorrect": false }, // Modularisierung kostet oft minimal Overhead.
      { "text": "Vollständige Eliminierung von Abhängigkeiten zwischen allen Systemteilen.", "isCorrect": false }, // Unmöglich, ein System braucht Kommunikation.
      { "text": "Sicherstellung, dass der Code nicht mehr verändert werden muss.", "isCorrect": false },
      { "text": "Vermeidung von Dokumentation, da kleine Module selbsterklärend sind.", "isCorrect": false },
      { "text": "Automatische Generierung von User Interfaces.", "isCorrect": false }
    ]
  },
  {
    "id": 1012,
    "chapter": 1,
    "text": "Was versteht man unter 'Separation of Concerns' (SoC)?",
    "image": null,
    "explanation": "Trennung von Belangen/Aspekten. Beispiel: Logik getrennt von UI. Datenbank getrennt von Berechnung.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Die Trennung unterschiedlicher Aspekte (z.B. Logik, Daten, Darstellung) in separate Module.", "isCorrect": true },
      { "text": "Jedes Modul sollte sich um genau einen spezifischen Aspekt ('Concern') des Systems kümmern.", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Die Trennung des Entwicklungsteams in Frontend- und Backend-Entwickler.", "isCorrect": false }, // Organisatorisch, nicht das SE-Prinzip.
      { "text": "Die Aufteilung des Codes in möglichst viele kleine Dateien, unabhängig vom Inhalt.", "isCorrect": false },
      { "text": "Die strikte Trennung von objektorientiertem und funktionalem Code.", "isCorrect": false },
      { "text": "Ein Management-Prinzip, um Konflikte im Team zu vermeiden.", "isCorrect": false },
      { "text": "Das Prinzip, Fehler ('Concerns') zu ignorieren, bis sie kritisch werden.", "isCorrect": false }
    ]
  },
  {
    "id": 1013,
    "chapter": 1,
    "text": "Welche Faktoren verursachen Koppelung zwischen Modulen?",
    "image": null,
    "explanation": "Koppelung entsteht durch: Aufrufe, Datenzugriffe (Shared Data), Vererbung, zeitliche Abhängigkeiten.",
    "answersPool": [
      // --- RICHTIGE ANTWORTEN ---
      { "text": "Methodenaufrufe, Nutzung gemeinsamer Datenstrukturen und Vererbung.", "isCorrect": true },
      { "text": "Direkter Zugriff auf innere Variablen anderer Module oder zeitliche Abhängigkeiten (Reihenfolge).", "isCorrect": true },
      
      // --- FALSCHE ANTWORTEN (Verbessert) ---
      { "text": "Die Verwendung der gleichen Programmiersprache in allen Modulen.", "isCorrect": false }, // Erzeugt keine logische Abhängigkeit.
      { "text": "Das Speichern der Dateien auf demselben Server-Laufwerk.", "isCorrect": false }, // Physikalisch, nicht logisch.
      { "text": "Die Einhaltung von Coding-Conventions (z.B. Einrückung).", "isCorrect": false },
      { "text": "Die Nutzung von Kommentaren im Code.", "isCorrect": false },
      { "text": "Hohe Kohäsion innerhalb der Module verursacht automatisch hohe Koppelung.", "isCorrect": false } // Falscher Schluss.
    ]
  },
  // --- KAPITEL 2: Vorgehensmodelle & Prozesse ---
  {
    "id": 2001,
    "chapter": 2,
    "text": "Was versteht man unter einem Softwareprozess?",
    "image": null,
    "explanation": "Ein Softwareprozess ist die strukturierte Menge von Aktivitäten (Spezifikation, Entwurf, Implementierung, Test), die zur Herstellung oder Evolution eines Softwaresystems führen (Folie 98).",
    "answersPool": [
      { "text": "Eine strukturierte Menge von Aktivitäten, Methoden und Praktiken zur Entwicklung oder Wartung von Software.", "isCorrect": true },
      { "text": "Die Gesamtheit aller technischen und organisatorischen Tätigkeiten, die notwendig sind, um ein Softwaresystem zu erstellen.", "isCorrect": true },
      
      { "text": "Die abstrakte Beschreibung einer Vorgehensweise (z.B. Wasserfallmodell).", "isCorrect": false }, // Falle: Das ist das ProzessMODELL.
      { "text": "Die Laufzeitumgebung, in der das fertige Programm ausgeführt wird (Prozess im Betriebssystem).", "isCorrect": false }, // Falle: OS-Prozess vs. SE-Prozess.
      { "text": "Eine grafische Darstellung des Datenflusses innerhalb der Anwendung.", "isCorrect": false },
      { "text": "Die reine Programmierphase innerhalb eines Projekts.", "isCorrect": false },
      { "text": "Die Installation und Konfiguration der Software beim Endkunden.", "isCorrect": false }
    ]
  },
  {
    "id": 2002,
    "chapter": 2,
    "text": "Was ist ein Softwareprozessmodell?",
    "image": null,
    "explanation": "Ein Prozessmodell ist eine abstrakte, vereinfachte Darstellung eines Softwareprozesses (z.B. Wasserfall, V-Modell, Scrum). Es ist eine Schablone, nicht die Durchführung selbst (Folie 99).",
    "answersPool": [
      { "text": "Eine abstrakte Repräsentation oder Schablone eines Softwareprozesses (z.B. Wasserfall, V-Modell).", "isCorrect": true },
      { "text": "Eine Beschreibung, welche Aktivitäten, Rollen und Artefakte in welcher Reihenfolge typischerweise auftreten.", "isCorrect": true },
      
      { "text": "Die konkrete, tägliche Durchführung der Entwicklungsaufgaben im Projekt.", "isCorrect": false }, // Falle: Das ist der Prozess (Instanz).
      { "text": "Ein UML-Diagramm, das die Klassenstruktur der Software zeigt.", "isCorrect": false },
      { "text": "Ein Tool zur automatisierten Überwachung des Projektfortschritts.", "isCorrect": false },
      { "text": "Eine detaillierte Anleitung, wie man eine bestimmte Programmiersprache verwendet.", "isCorrect": false },
      { "text": "Die Dokumentation der fertigen Softwarearchitektur.", "isCorrect": false }
    ]
  },
  {
    "id": 2003,
    "chapter": 2,
    "text": "Welche SCRUM-Meetings erstellen das 'Sprint Backlog' und wie heißen die beiden Teile?",
    "image": null,
    "explanation": "Laut Skript (Folie 141/152) erstellen Sprint Planning 1 (Was) und Sprint Planning 2 (Wie) das 'Sprint Backlog'.",
    "answersPool": [
      { "text": "Sprint Planning 1 und Sprint Planning 2 (Ergebnis: Sprint Backlog).", "isCorrect": true },
      { "text": "Die Sprint Planning Meetings (1 & 2), in denen das Sprint Backlog als Plan für den Sprint entsteht.", "isCorrect": true },
      { "text": "Daily Scrum und Sprint Review.", "isCorrect": false },
      { "text": "Sprint Retrospective und Daily Scrum.", "isCorrect": false },
      { "text": "Product Backlog Refinement.", "isCorrect": false },
      { "text": "Das 'Kick-off' Meeting und das 'Close-out' Meeting.", "isCorrect": false }
    ]
  },
  {
    "id": 2004,
    "chapter": 2,
    "text": "Unterschied: Plangesteuerte (Plan-driven) vs. Agile Prozesse.",
    "image": null,
    "explanation": "Plangesteuert: Planung vorab, Messung gegen Plan (z.B. Wasserfall). Agil: Planung inkrementell/iterativ, Offenheit für Änderungen (z.B. Scrum). (Folie 102).",
    "answersPool": [
      { "text": "Plangesteuert: Detaillierte Planung vorab, Änderungen sind schwierig. Agil: Planung erfolgt iterativ, Änderungen sind willkommen.", "isCorrect": true },
      { "text": "Plangesteuert misst Erfolg an der Einhaltung des Plans. Agil misst Erfolg am gelieferten Geschäftswert und funktionierender Software.", "isCorrect": true },
      
      { "text": "Plangesteuerte Prozesse nutzen Dokumentation, agile Prozesse verbieten Dokumentation komplett.", "isCorrect": false }, // Falle: Agil verbietet Doku nicht, priorisiert sie nur niedriger.
      { "text": "Agile Prozesse haben keine Deadlines, plangesteuerte Prozesse schon.", "isCorrect": false }, // Falle: Sprints sind harte Deadlines (Time-boxed).
      { "text": "Plangesteuert ist nur für kleine Projekte, Agil skaliert besser für riesige Projekte.", "isCorrect": false }, // Eher andersrum (Scrum of Scrums ist komplex).
      { "text": "Bei agilen Prozessen gibt es keinen Projektleiter, daher hat niemand die Verantwortung.", "isCorrect": false },
      { "text": "Plangesteuert bedeutet 'kein Testen', Agil bedeutet 'nur Testen'.", "isCorrect": false }
    ]
  },
  {
    "id": 2005,
    "chapter": 2,
    "text": "Was charakterisiert das 'Code-and-Fix' Modell und welche Probleme bringt es mit sich?",
    "image": null,
    "explanation": "Code-and-Fix = Sofort losprogrammieren ohne Entwurf. Probleme: Strukturzerfall (Spaghetti-Code), schlechte Wartbarkeit, hohe Abhängigkeit von Einzelpersonen. (Folie 103).",
    "answersPool": [
      { "text": "Vorgehen: Direktes Implementieren ohne vorherigen Entwurf. Probleme: Schlechte Struktur, kaum Wartbarkeit, hohe Fehlerkosten.", "isCorrect": true },
      { "text": "Ad-hoc Programmierung. Führt oft zu 'Spaghetti-Code', fehlender Dokumentation und Abhängigkeit vom ursprünglichen Entwickler.", "isCorrect": true },
      
      { "text": "Es ist ein agiles Vorgehensmodell, das besonders effizient für Prototypen ist.", "isCorrect": false }, // Falle: Code & Fix ist KEIN Agil (Agil hat Struktur!).
      { "text": "Es beschreibt das Vorgehen beim Test-Driven Development (TDD): Erst Test, dann Fix.", "isCorrect": false }, // Verwechslung.
      { "text": "Das Modell fordert, dass man erst die Fehlerbehebung plant und dann den Code schreibt.", "isCorrect": false },
      { "text": "Das Hauptproblem ist, dass es zu viel Dokumentation erfordert.", "isCorrect": false }, // Genau das Gegenteil.
      { "text": "Es ist das Standardmodell für sicherheitskritische Software.", "isCorrect": false }
    ]
  },
  {
    "id": 2006,
    "chapter": 2,
    "text": "Welche Vorteile bietet die Agile Vorgehensweise?",
    "image": null,
    "explanation": "Vorteile: Schnelle Reaktion auf Änderungen, frühes Feedback durch regelmäßige Auslieferung, Risikominimierung, Transparenz. (Folie 102/134).",
    "answersPool": [
      { "text": "Hohe Flexibilität bei Anforderungsänderungen, frühe Auslieferung nutzbarer Software, regelmäßiges Kundenfeedback.", "isCorrect": true },
      { "text": "Transparenz durch kurze Zyklen, Risikominimierung durch frühes Erkennen von Fehlentwicklungen, Fokus auf Business Value.", "isCorrect": true },
      
      { "text": "Vollständiger Verzicht auf Planung und Dokumentation spart Zeit.", "isCorrect": false }, // Falle: Mythos. Planung passiert, nur anders.
      { "text": "Es ist kostengünstiger, da man keine Senior-Entwickler benötigt.", "isCorrect": false },
      { "text": "Man muss nie mit dem Kunden reden, da der Product Owner alles weiß.", "isCorrect": false },
      { "text": "Die Software ist ab Tag 1 fehlerfrei.", "isCorrect": false },
      { "text": "Es garantiert, dass das Projekt schneller fertig ist als geplant.", "isCorrect": false }
    ]
  },
  {
    "id": 2007,
    "chapter": 2,
    "text": "Unterschied: Iterativ vs. Inkrementell.",
    "image": null,
    "explanation": "Inkrementell = Stück für Stück fertigstellen (Wand -> Dach -> Haus). Iterativ = Grob zu Fein überarbeiten (Skizze -> Zeichnung -> Gemälde). (Folie 117).",
    "answersPool": [
      { "text": "Inkrementell: System wächst durch Hinzufügen fertiger Teile. Iterativ: System verbessert sich durch Verfeinerung bestehender Teile.", "isCorrect": true },
      { "text": "Inkrementell bedeutet 'Anbau' (Umfang wächst). Iterativ bedeutet 'Überarbeitung' (Qualität/Detailtiefe wächst).", "isCorrect": true },
      
      { "text": "Iterativ bedeutet, dass man Pausen macht. Inkrementell bedeutet, dass man durcharbeitet.", "isCorrect": false },
      { "text": "Inkrementell ist ein Wasserfall-Konzept, Iterativ ein Agiles Konzept.", "isCorrect": false }, // Beides wird oft kombiniert.
      { "text": "Iterativ bedeutet, dass der Kunde erst am Ende das Produkt sieht.", "isCorrect": false },
      { "text": "Inkrementell bedeutet, dass man den Code immer wieder neu schreibt.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, beide Begriffe beschreiben dasselbe.", "isCorrect": false }
    ]
  },
  {
    "id": 2008,
    "chapter": 2,
    "text": "Was ist ein wesentlicher Vorteil iterativ-inkrementeller Vorgehensweisen?",
    "image": null,
    "explanation": "Frühe Teilergebnisse -> Frühes Feedback -> Fehlerkorrektur möglich. Kunde sieht Fortschritt. (Folie 111).",
    "answersPool": [
      { "text": "Frühes Kundenfeedback durch nutzbare Teilprodukte, wodurch Fehlentwicklungen vermieden werden.", "isCorrect": true },
      { "text": "Risikominimierung: Kritische Teile können zuerst gebaut und getestet werden.", "isCorrect": true },
      
      { "text": "Der Gesamtpreis und der Endtermin stehen zu 100% fest und ändern sich nie.", "isCorrect": false }, // Das ist der Vorteil von Wasserfall (theoretisch).
      { "text": "Man benötigt kein Anforderungsmanagement mehr.", "isCorrect": false },
      { "text": "Die Dokumentation wird automatisch generiert.", "isCorrect": false },
      { "text": "Es ist keine Kommunikation im Team notwendig.", "isCorrect": false },
      { "text": "Man kann auf Tests verzichten, da man eh nochmal überarbeitet.", "isCorrect": false }
    ]
  },
  {
    "id": 2009,
    "chapter": 2,
    "text": "Welche Rollen definiert SCRUM und was ist ihre Hauptaufgabe?",
    "image": null,
    "explanation": "PO = Value (Was). SM = Process (Hindernisse weg). Team = Delivery (Wie). (Folie 137).",
    "answersPool": [
      { "text": "Product Owner (verantwortet 'Was' / ROI), Scrum Master (verantwortet Prozess / 'Servant Leader'), Development Team (verantwortet 'Wie' / Umsetzung).", "isCorrect": true },
      { "text": "PO: Priorisiert Backlog. SM: Beseitigt Impediments. Team: Liefert Inkrement.", "isCorrect": true },
      
      { "text": "Projektleiter (verteilt Aufgaben), Architekt (bestimmt Design), Tester (prüft Qualität).", "isCorrect": false }, // Klassische Rollen, nicht Scrum.
      { "text": "Product Owner schreibt Code, Scrum Master testet, Team dokumentiert.", "isCorrect": false },
      { "text": "Scrum Master ist der Chef und bestimmt Gehalt und Urlaub.", "isCorrect": false },
      { "text": "Das Team bestimmt die Anforderungen, der PO setzt sie um.", "isCorrect": false },
      { "text": "Es gibt nur eine Rolle: Den Scrum Developer.", "isCorrect": false }
    ]
  },
  {
    "id": 2010,
    "chapter": 2,
    "text": "Was passiert im Sprint Planning Meeting?",
    "image": null,
    "explanation": "Planning definiert das Sprint-Ziel und das Sprint-Backlog. Teil 1: Was machen wir? (PO stellt vor). Teil 2: Wie machen wir es? (Team plant Tasks). (Folie 141).",
    "answersPool": [
      { "text": "Das Team wählt Items aus dem Product Backlog (Was) und plant deren technische Umsetzung in Tasks (Wie).", "isCorrect": true },
      { "text": "Ergebnis ist das Sprint Backlog und das Sprint Ziel. Es ist eine Kollaboration zwischen PO und Team.", "isCorrect": true },
      
      { "text": "Das Team präsentiert dem Kunden die fertige Software.", "isCorrect": false }, // Das ist das Review.
      { "text": "Das Team bespricht, was im letzten Sprint schlecht lief.", "isCorrect": false }, // Das ist die Retrospektive.
      { "text": "Der Scrum Master verteilt die Aufgaben an die Entwickler.", "isCorrect": false }, // Anti-Pattern (Push statt Pull).
      { "text": "Der Product Owner schreibt das technische Konzept.", "isCorrect": false },
      { "text": "Es wird nur über das Budget verhandelt.", "isCorrect": false }
    ]
  },
  {
    "id": 2011,
    "chapter": 2,
    "text": "Unterschied: Product Backlog vs. Sprint Backlog.",
    "image": null,
    "explanation": "Product Backlog = Alles, was jemals gemacht werden könnte (dynamisch, priorisiert). Sprint Backlog = Plan für den aktuellen Sprint (fest für den Sprint). (Folie 148).",
    "answersPool": [
      { "text": "Product Backlog: Priorisierte Gesamtliste aller Anforderungen (Owned by PO). Sprint Backlog: Aufgaben für den aktuellen Sprint (Owned by Team).", "isCorrect": true },
      { "text": "Product Backlog ist dynamisch und entwickelt sich ständig. Sprint Backlog ist ein fester Plan für die Dauer des Sprints.", "isCorrect": true },
      
      { "text": "Product Backlog enthält erledigte Aufgaben, Sprint Backlog offene Aufgaben.", "isCorrect": false },
      { "text": "Product Backlog ist für Bugs, Sprint Backlog für Features.", "isCorrect": false },
      { "text": "Sprint Backlog wird vom Kunden geschrieben, Product Backlog vom Entwickler.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, beide Listen enthalten dasselbe.", "isCorrect": false },
      { "text": "Das Product Backlog wird am Ende jedes Sprints gelöscht.", "isCorrect": false }
    ]
  },
  {
    "id": 2012,
    "chapter": 2,
    "text": "Was bedeutet die Eigenschaft 'Time-boxed' im Kontext einer Iteration (Sprint)?",
    "image": null,
    "explanation": "Laut Skript (Folie 116): Jede Iteration hat immer dieselbe, feste Dauer (z.B. 30 Tage). Das Ende steht fest, der Umfang variiert ggf.",
    "answersPool": [
      { "text": "Die Iteration hat eine fest definierte Dauer (z.B. 2 oder 4 Wochen), die nicht verlängert wird.", "isCorrect": true },
      { "text": "Feste Zeitvorgabe: Wenn die Zeit um ist, ist der Sprint vorbei, egal ob alles fertig ist oder nicht.", "isCorrect": true },
      { "text": "Time-boxed bedeutet, dass man so lange arbeitet, bis man fertig ist.", "isCorrect": false },
      { "text": "Es bedeutet, dass man die Zeit in einer Box stoppt.", "isCorrect": false },
      { "text": "Time-boxed heißt, dass Überstunden verboten sind.", "isCorrect": false },
      { "text": "Die Zeit wird flexibel an die Aufgaben angepasst.", "isCorrect": false }
    ]
  },
  {
    "id": 2013,
    "chapter": 2,
    "text": "Szenario: Start-Up. Anforderungen unklar. Budget knapp. Früher Markteintritt nötig. Welches Modell?",
    "image": null,
    "explanation": "Unsichere Anforderungen + Zeitdruck + Innovation spricht klar für Agil/Scrum/Iterativ (MVP-Gedanke). Wasserfall wäre zu starr und riskant.",
    "answersPool": [
      { "text": "Agiles Vorgehen (z.B. Scrum). Erlaubt schnelle Anpassung an Marktfeedback und frühe Veröffentlichung eines MVP (Minimum Viable Product).", "isCorrect": true },
      { "text": "Iterativ-Inkrementell. Man kann mit den wichtigsten Features starten und später erweitern, wenn Geld verdient wird.", "isCorrect": true },
      
      { "text": "Wasserfallmodell. Man sollte erst alles perfekt spezifizieren, um kein Geld zu verschwenden.", "isCorrect": false }, // Falle: Zu hohes Risiko, das Falsche zu bauen.
      { "text": "V-Modell. Wegen der strengen Validierung.", "isCorrect": false }, // Zu schwergewichtig für Start-Up.
      { "text": "Code-and-Fix. Einfach drauflos programmieren ist am schnellsten.", "isCorrect": false }, // Skaliert nicht, unwartbar.
      { "text": "Reines Prototyping ohne spätere Implementierung.", "isCorrect": false },
      { "text": "Man sollte gar kein Modell nutzen, das bremst nur.", "isCorrect": false }
    ]
  },
  {
    "id": 2014,
    "chapter": 2,
    "text": "Szenario: Software für Airbag-Steuerung. Anforderungen zu 100% fix und gesetzlich geregelt. Sicherheitskritisch.",
    "image": null,
    "explanation": "Sicherheitskritisch + fixe Anforderungen = Planbarkeit + Dokumentationspflicht. Hier ist V-Modell oder ein strenges inkrementelles Vorgehen besser als reines Scrum.",
    "answersPool": [
      { "text": "V-Modell (oder plangesteuertes Vorgehen). Fokus auf Validierung, Verifikation und Dokumentation ist bei Sicherheit essenziell.", "isCorrect": true },
      { "text": "Ein formales, plangesteuertes Modell, da Anforderungen stabil sind und Sicherheit Vorrang vor Flexibilität hat.", "isCorrect": true },
      
      { "text": "Scrum. Man sollte auch beim Airbag jede Woche neue Features ausprobieren.", "isCorrect": false }, // Gefährlich bei Safety-Critical.
      { "text": "Extreme Programming (XP).", "isCorrect": false }, // Oft zu wenig formale Doku für Behörden.
      { "text": "Code-and-Fix. Hauptsache der Airbag geht irgendwie auf.", "isCorrect": false },
      { "text": "Kanban, um den Durchfluss zu optimieren.", "isCorrect": false },
      { "text": "Agiles Manifest, da Dokumentation unwichtig ist.", "isCorrect": false } // Falsche Interpretation.
    ]
  },
  {
    "id": 2015,
    "chapter": 2,
    "text": "Was ist die 'Definition of Done' (DoD)?",
    "image": null,
    "explanation": "Die DoD ist ein Qualitäts-Vertrag. Ein Item ist erst fertig, wenn es diese Kriterien (Code Style, Tests, Doku) erfüllt. (Folie 157).",
    "answersPool": [
      { "text": "Eine vereinbarte Checkliste von Qualitätskriterien, die erfüllt sein müssen, damit ein Feature als 'fertig' akzeptiert wird.", "isCorrect": true },
      { "text": "Sie sichert die Qualität und verhindert technische Schulden (z.B. 'Code ist getestet', 'Doku ist aktuell').", "isCorrect": true },
      
      { "text": "Die persönliche Meinung des Entwicklers, dass er fertig ist.", "isCorrect": false },
      { "text": "Ein Dokument, das beschreibt, wann das gesamte Projekt beendet ist.", "isCorrect": false }, // Das ist eher Projektende.
      { "text": "Die Liste der Features, die im Product Backlog stehen.", "isCorrect": false },
      { "text": "Eine E-Mail an den Kunden, dass geliefert wurde.", "isCorrect": false },
      { "text": "Die Definition, wann die Mittagspause beginnt.", "isCorrect": false }
    ]
  },
  {
    "id": 2016,
    "chapter": 2,
    "text": "Warum ist Scrum in sehr großen Projekten (z.B. 500 Entwickler) schwierig?",
    "image": null,
    "explanation": "Scrum setzt auf kleine Teams (7 +/- 2). Viele Teams brauchen Koordination (Scrum of Scrums). Der Kommunikationsaufwand explodiert.",
    "answersPool": [
      { "text": "Scrum ist für kleine Teams (ca. 7 Leute) konzipiert. Bei vielen Teams steigt der Kommunikationsaufwand exponentiell.", "isCorrect": true },
      { "text": "Die Synchronisation zwischen vielen autonomen Teams ist komplex (Skalierungsproblem).", "isCorrect": true },
      
      { "text": "Weil Scrum verbietet, mehr als 10 Leute im Unternehmen zu haben.", "isCorrect": false },
      { "text": "Weil man für große Projekte zwingend das Wasserfallmodell nutzen muss.", "isCorrect": false }, // Auch falsch, es gibt SAFe, LeSS etc.
      { "text": "Weil es nicht genug Scrum Master auf dem Arbeitsmarkt gibt.", "isCorrect": false },
      { "text": "Weil große Projekte keine User Stories haben.", "isCorrect": false },
      { "text": "Weil Agil nur für Web-Entwicklung funktioniert.", "isCorrect": false }
    ]
  },
  {
    "id": 2017,
    "chapter": 2,
    "text": "Nennen Sie einen Vorteil von Timeboxing.",
    "image": null,
    "explanation": "Laut Skript (Folie 116): Erhöht Transparenz, Planbarkeit, Fokus auf das Wesentliche.",
    "answersPool": [
      { "text": "Erhöht Transparenz und Planbarkeit; zwingt zur Fokussierung auf das Wichtigste.", "isCorrect": true },
      { "text": "Verhindert das unendliche Ausdehnen von Aufgaben (Parkinson'sches Gesetz).", "isCorrect": true },
      { "text": "Man hat immer unendlich viel Zeit für Aufgaben.", "isCorrect": false },
      { "text": "Es erlaubt den Entwicklern, die Zeit selbst zu bestimmen.", "isCorrect": false },
      { "text": "Es spart Kosten, weil man die Entwickler früher nach Hause schicken kann.", "isCorrect": false },
      { "text": "Es garantiert, dass keine Fehler passieren.", "isCorrect": false }
    ]
  },
  {
    "id": 2018,
    "chapter": 2,
    "text": "Nennen Sie zwei typische Aktivitäten in SW-Prozessen.",
    "image": null,
    "explanation": "Laut Skript (Folie 97): Spezifizieren, Entwerfen, Programmieren, Testen, Planen, etc.",
    "answersPool": [
      { "text": "Spezifizieren, Entwerfen, Programmieren, Testen.", "isCorrect": true },
      { "text": "Anforderungsanalyse und Qualitätssicherung.", "isCorrect": true },
      { "text": "Kaffee trinken und Pause machen.", "isCorrect": false },
      { "text": "Hardware löten und Kabel verlegen.", "isCorrect": false },
      { "text": "Marketing und Vertrieb.", "isCorrect": false },
      { "text": "Rechnungen schreiben und Steuern machen.", "isCorrect": false }
    ]
  },
  {
    "id": 2019,
    "chapter": 2,
    "text": "Folgende Softwareprozessmodelle nach absteigender Häufigkeit der Auslieferung ordnen (Platz 1 am häufigsten): Wasserfallmodell / Inkrementelle Modelle / SCRUM.",
    "image": null,
    "explanation": "Scrum (jeder Sprint, ca. 2-4 Wochen) > Inkrementell (mehrere Phasen) > Wasserfall (einmal am Ende).",
    "answersPool": [
      { "text": "1. SCRUM, 2. Inkrementelle Modelle, 3. Wasserfallmodell.", "isCorrect": true },
      { "text": "Scrum liefert am häufigsten (pro Sprint), dann Inkrementell, Wasserfall liefert nur einmal am Ende.", "isCorrect": true },
      { "text": "1. Wasserfallmodell, 2. SCRUM, 3. Inkrementelle Modelle.", "isCorrect": false },
      { "text": "1. Inkrementelle Modelle, 2. Wasserfallmodell, 3. SCRUM.", "isCorrect": false },
      { "text": "Alle liefern gleich häufig aus.", "isCorrect": false },
      { "text": "SCRUM liefert nie aus, man entwickelt nur.", "isCorrect": false }
    ]
  },
  {
    "id": 2020,
    "chapter": 2,
    "text": "Szenario: Start-Up, 80% Methodik fertig, 20% offen, Änderungen erwartet, früher Markteintritt gewünscht. Welches SWPM? Begründung.",
    "image": null,
    "explanation": "Agiles Vorgehen (z.B. Scrum oder generisch iterativ-inkrementell) ist hier notwendig, da Anforderungen unklar sind, Änderungen erwartet werden und 'Time-to-Market' kritisch ist.",
    "answersPool": [
      { "text": "Agiles Vorgehen (z.B. SCRUM). Gründe: Änderungen sind erwartet, früher Markteintritt (MVP) möglich, iterative Anpassung der Methodik parallel zur SW.", "isCorrect": true },
      { "text": "Iterativ-Inkrementelles Modell. Erlaubt frühe Auslieferung von Teilen und Anpassung an die noch nicht fertige Methodik.", "isCorrect": true },
      { "text": "Wasserfallmodell. Da die Methodik fast fertig ist, sollte man warten und dann alles auf einmal bauen.", "isCorrect": false },
      { "text": "Code-and-Fix. Da es ein Start-Up ist, sollte man einfach drauflos programmieren.", "isCorrect": false },
      { "text": "V-Modell. Wegen der hohen Sicherheitsanforderungen des Start-Ups.", "isCorrect": false },
      { "text": "Man sollte gar kein Modell nutzen.", "isCorrect": false }
    ]
  },
  {
    "id": 2021,
    "chapter": 2,
    "text": "Worin unterscheidet sich die Aufgabe des SCRUM Masters vom Projektleiter?",
    "image": null,
    "explanation": "Laut Skript (Folie 137): SM ist Coach/Facilitator ('Servant Leader'), kein disziplinarischer Chef. PL plant/verteilt Aufgaben. SM hilft Team zur Selbstorganisation.",
    "answersPool": [
      { "text": "Scrum Master ist Coach und beseitigt Hindernisse (dienende Führung), er verteilt keine Aufgaben. Projektleiter plant und weist Aufgaben zu (Command & Control).", "isCorrect": true },
      { "text": "Der SM hat keine Weisungsbefugnis über das Team, der PL meist schon.", "isCorrect": true },
      { "text": "Der Scrum Master ist der Chef, der Projektleiter der Assistent.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, es ist nur ein neuer Name.", "isCorrect": false },
      { "text": "Der Scrum Master kümmert sich um die Technik, der Projektleiter um das Geld.", "isCorrect": false },
      { "text": "Der Projektleiter macht Kaffeepausen, der Scrum Master arbeitet.", "isCorrect": false }
    ]
  },
  {
    "id": 2022,
    "chapter": 2,
    "text": "Szenario: Sicherheitskritische Steuerungssoftware Auto, Anforderungen fix, keine Änderungen, 3 Abschnitte. Welches SWPM?",
    "image": null,
    "explanation": "Hier passt ein plangesteuertes, inkrementelles Vorgehen (oder V-Modell mit Inkrementen). Anforderungen sind fix -> Planbarkeit. 3 Abschnitte -> Inkremente.",
    "answersPool": [
      { "text": "Inkrementelles, plangesteuertes Vorgehen. Gründe: Anforderungen stabil (Planung möglich), Aufteilung in 3 Abschnitte erlaubt Integrationstests pro Abschnitt.", "isCorrect": true },
      { "text": "V-Modell (oder Wasserfall) mit inkrementeller Auslieferung, da Sicherheit und Dokumentation wichtig sind und Anforderungen feststehen.", "isCorrect": true },
      { "text": "SCRUM / Agil. Da man immer agil sein muss.", "isCorrect": false },
      { "text": "Code-and-Fix. Schnell fertig werden.", "isCorrect": false },
      { "text": "Reines Wasserfallmodell. Weil es drei Abschnitte gibt, geht Wasserfall nicht gut (liefert erst ganz am Ende).", "isCorrect": false },
      { "text": "Extreme Programming.", "isCorrect": false }
    ]
  },
  {
    "id": 2023,
    "chapter": 2,
    "text": "Welche Meetings gibt es bei SCRUM und in welcher logischen Reihenfolge finden diese statt?",
    "image": null,
    "explanation": "Reihenfolge pro Sprint: Sprint Planning -> Daily Scrums (täglich) -> Sprint Review -> Sprint Retrospective.",
    "answersPool": [
      { "text": "1. Sprint Planning, 2. Daily Scrums (laufend), 3. Sprint Review, 4. Sprint Retrospective.", "isCorrect": true },
      { "text": "Planning -> Daily -> Review -> Retro.", "isCorrect": true },
      { "text": "Retro -> Review -> Planning -> Daily.", "isCorrect": false },
      { "text": "Daily -> Planning -> Retro -> Review.", "isCorrect": false },
      { "text": "Es gibt keine feste Reihenfolge.", "isCorrect": false },
      { "text": "Planning 1, Planning 2, Planning 3.", "isCorrect": false }
    ]
  },
  // --- KAPITEL 3: Requirements Engineering & Schätzen ---
  {
    "id": 3001,
    "chapter": 3,
    "text": "Nennen Sie vier Qualitätskriterien für eine gute Anforderung.",
    "image": null,
    "explanation": "Qualitätskriterien (Folie 185): Vollständig, Atomar, Notwendig, Verfolgbar, Lösungsneutral, Verständlich, Realisierbar, Konsistent, Eindeutig, Prüfbar.",
    "answersPool": [
      { "text": "Vollständig, Atomar, Notwendig, Verfolgbar.", "isCorrect": true },
      { "text": "Eindeutig, Prüfbar, Konsistent, Lösungsneutral.", "isCorrect": true },
      
      { "text": "Innovativ, Disruptiv, Agil, Modern.", "isCorrect": false }, // Das sind Marketing-Buzzwords.
      { "text": "Objektorientiert, Funktional, Prozedural, Modular.", "isCorrect": false }, // Das sind Programmierparadigmen.
      { "text": "Schnell, Bunt, Billig, Einfach.", "isCorrect": false },
      { "text": "Datenbankbasiert, Cloud-fähig, Verschlüsselt, Responsive.", "isCorrect": false }, // Das sind technische Eigenschaften.
      { "text": "Kurz, Prägnant, Lustig, Spannend.", "isCorrect": false }
    ]
  },
  {
    "id": 3002,
    "chapter": 3,
    "text": "Wie ist der Begriff „Anforderung“ im Software-Engineering definiert?",
    "image": null,
    "explanation": "Anforderungen beschreiben, WAS das System leisten soll (Funktional) und WIE es beschaffen sein muss (Nicht-Funktional). Sie sind Vertragsbasis. (Folie 171/173).",
    "answersPool": [
      { "text": "Eine Aussage darüber, was ein System leisten soll (funktionale Anforderung) oder wie es beschaffen sein muss (nicht-funktionale Anforderung).", "isCorrect": true },
      { "text": "Eine Beschränkung oder Eigenschaft, die das System erfüllen muss, um einen Vertrag, Standard oder eine Spezifikation zu erfüllen.", "isCorrect": true },
      
      { "text": "Eine technische Beschreibung der Datenbankstruktur und der Schnittstellen.", "isCorrect": false }, // Zu technisch/spezifisch.
      { "text": "Ein unverbindlicher Vorschlag des Kunden, den die Entwickler umsetzen können, wenn Zeit ist.", "isCorrect": false }, // Anforderungen sind verbindlich.
      { "text": "Der Quellcode, der die gewünschte Funktion implementiert.", "isCorrect": false },
      { "text": "Eine grafische Darstellung der Benutzeroberfläche (Mockup).", "isCorrect": false }, // Das ist ein Entwurf/Design.
      { "text": "Ein Fehlerbericht (Bug Report), der beschreibt, was nicht funktioniert.", "isCorrect": false }
    ]
  },
  {
    "id": 3003,
    "chapter": 3,
    "text": "Warum haben Anforderungen eine zentrale Funktion für Softwareprojekte?",
    "image": null,
    "explanation": "Sie sind die Basis für Angebote (Kalkulation), Verträge (Rechtsgrundlage) und Abnahmen. (Folie 171).",
    "answersPool": [
      { "text": "Sie dienen als Basis für die Angebotskalkulation und als verbindliche Vertragsgrundlage zwischen Auftraggeber und Auftragnehmer.", "isCorrect": true },
      { "text": "Sie definieren das Abnahmekriterium: Nur wenn die Anforderungen erfüllt sind, gilt das Projekt als erfolgreich abgeschlossen.", "isCorrect": true },
      
      { "text": "Damit die Entwickler beschäftigt sind, wenn das Netzwerk ausfällt.", "isCorrect": false },
      { "text": "Um die Kreativität der Entwickler einzuschränken.", "isCorrect": false },
      { "text": "Sie dienen hauptsächlich dazu, die Dokumentation aufzublähen.", "isCorrect": false },
      { "text": "Damit das Marketing Texte für die Webseite schreiben kann.", "isCorrect": false },
      { "text": "Weil man ohne Anforderungen keine Programmiersprache auswählen kann.", "isCorrect": false }
    ]
  },
  {
    "id": 3004,
    "chapter": 3,
    "text": "Was sind Stakeholder?",
    "image": null,
    "explanation": "Stakeholder = Alle Betroffenen/Interessierten. Nicht nur User, auch Manager, Admins, Geldgeber, Gesetzgeber. (Folie 186).",
    "answersPool": [
      { "text": "Personen oder Organisationen, die vom System betroffen sind und ein berechtigtes Interesse daran haben (z.B. Endanwender, Management, Betrieb).", "isCorrect": true },
      { "text": "Alle Parteien, die Einfluss auf das System haben oder durch dessen Nutzung beeinflusst werden.", "isCorrect": true },
      
      { "text": "Ausschließlich die Geldgeber (Investoren) des Projekts.", "isCorrect": false }, // Zu eng.
      { "text": "Die Programmierer, die den Code 'halten' (Stake = Halter).", "isCorrect": false }, // Falsche Herleitung.
      { "text": "Die Hardware-Komponenten, auf denen die Software läuft.", "isCorrect": false },
      { "text": "Die Konkurrenten am Markt, die das System verhindern wollen.", "isCorrect": false }, // Meist keine legitimen Stakeholder im Projekt.
      { "text": "Nur die Endanwender, die die Software benutzen.", "isCorrect": false } // Zu eng.
    ]
  },
  {
    "id": 3005,
    "chapter": 3,
    "text": "Was ist eine User Story?",
    "image": null,
    "explanation": "Eine User Story beschreibt eine Funktionalität aus Sicht des Nutzers, um Wert zu stiften. (Folie 220).",
    "answersPool": [
      { "text": "Eine prägnante, in Alltagssprache formulierte Beschreibung einer wertstiftenden Funktionalität aus Nutzersicht.", "isCorrect": true },
      { "text": "Ein kurzes Format zur Erfassung von Anforderungen, das Fokus auf den Nutzerwert legt ('Wer', 'Was', 'Warum').", "isCorrect": true },
      
      { "text": "Ein technisches Spezifikationsdokument für die Datenbank.", "isCorrect": false },
      { "text": "Ein Use-Case-Diagramm in der UML-Notation.", "isCorrect": false }, // User Story != Use Case.
      { "text": "Eine Geschichte, die der Entwickler erzählt, um den Kunden zu unterhalten.", "isCorrect": false },
      { "text": "Ein Fehlerbericht, der beschreibt, was der User falsch gemacht hat.", "isCorrect": false },
      { "text": "Der Programmcode, der die Benutzeroberfläche steuert.", "isCorrect": false }
    ]
  },
  {
    "id": 3006,
    "chapter": 3,
    "text": "Was beschreibt das Kano-Modell?",
    "image": null,
    "explanation": "Zusammenhang zwischen Erfüllungsgrad (Feature da?) und Kundenzufriedenheit (User happy?). Unterscheidet Basis-, Leistungs- und Begeisterungsfaktoren. (Folie 236).",
    "answersPool": [
      { "text": "Den Zusammenhang zwischen dem Erfüllungsgrad von Anforderungen und der daraus resultierenden Kundenzufriedenheit.", "isCorrect": true },
      { "text": "Die Kategorisierung von Anforderungen in Basis-, Leistungs- und Begeisterungsfaktoren.", "isCorrect": true },
      
      { "text": "Den Zusammenhang zwischen Projektdauer, Kosten und Qualität (Magisches Dreieck).", "isCorrect": false }, // Verwechslung.
      { "text": "Die Beziehung zwischen Product Owner und Scrum Master.", "isCorrect": false },
      { "text": "Die Abhängigkeit der Software-Performance von der Hardware.", "isCorrect": false },
      { "text": "Eine Methode zur Berechnung von Story Points.", "isCorrect": false },
      { "text": "Den Unterschied zwischen funktionalen und nicht-funktionalen Anforderungen.", "isCorrect": false }
    ]
  },
  {
    "id": 3007,
    "chapter": 3,
    "text": "Wie lautet die Standard-Schablone für User Stories?",
    "image": null,
    "explanation": "Schablone: Als [Rolle] möchte ich [Ziel], um [Nutzen]. (Folie 222).",
    "answersPool": [
      { "text": "Als [Rolle], möchte ich [Ziel/Wunsch], um [Nutzen/Vorteil] zu erreichen.", "isCorrect": true },
      { "text": "As a [user role], I want to [goal], so I can [reason].", "isCorrect": true },
      
      { "text": "Das System muss [Funktion] erfüllen, wenn [Bedingung] eintritt.", "isCorrect": false }, // Klassische Anforderungsschablone ("The System shall...").
      { "text": "Wenn der User auf [Button] klickt, dann passiert [Aktion].", "isCorrect": false }, // Eher Testfall/Szenario.
      { "text": "Der Entwickler soll [Funktion] programmieren, damit der Kunde zufrieden ist.", "isCorrect": false },
      { "text": "Es war einmal ein [User], der wollte [Ziel].", "isCorrect": false },
      { "text": "Ich brauche [Funktion] bis [Datum].", "isCorrect": false }
    ]
  },
  {
    "id": 3008,
    "chapter": 3,
    "text": "Nennen Sie die drei 'Cs' einer User Story (nach Ron Jeffries).",
    "image": null,
    "explanation": "Card (Physischer Träger), Conversation (Gespräch zur Klärung), Confirmation (Akzeptanzkriterien). (Folie 220/221).",
    "answersPool": [
      { "text": "Card (Karte), Conversation (Gespräch), Confirmation (Bestätigung).", "isCorrect": true },
      { "text": "Karte (Placeholder), Konversation (Details klären), Bestätigung (Akzeptanztests).", "isCorrect": true },
      
      { "text": "Code, Comment, Commit.", "isCorrect": false }, // Entwickler-Alltag.
      { "text": "Customer, Contract, Cost.", "isCorrect": false },
      { "text": "Concept, Creation, Check.", "isCorrect": false },
      { "text": "Control, Command, Conquer.", "isCorrect": false },
      { "text": "Class, Component, Connector.", "isCorrect": false }
    ]
  },
  {
    "id": 3009,
    "chapter": 3,
    "text": "Was sind Story Points und welche Vorteile bieten sie?",
    "image": null,
    "explanation": "Story Points = Relatives Maß für Aufwand/Komplexität (abstrakt). Vorteile: Teamspezifisch, vermeiden Diskussion um exakte Stunden, gleichen Schätzfehler aus. (Folie 359/370).",
    "answersPool": [
      { "text": "Ein relatives Maß für die Größe/Komplexität einer Aufgabe. Vorteile: Abstraktion von Zeit, teamspezifisch, vermeidet Scheingenauigkeit.", "isCorrect": true },
      { "text": "Eine abstrakte Einheit zur Aufwandsschätzung. Vorteile: Berücksichtigt Komplexität und Risiko, statt nur Zeit zu raten.", "isCorrect": true },
      
      { "text": "Sie entsprechen exakt Personentagen (1 SP = 1 Tag).", "isCorrect": false }, // Falle: Genau das nicht!
      { "text": "Eine Währung, mit der Entwickler bezahlt werden.", "isCorrect": false },
      { "text": "Punkte, die man sammelt, um im Projekt-Level aufzusteigen.", "isCorrect": false },
      { "text": "Ein Maß für die Qualität des Codes (mehr Punkte = besserer Code).", "isCorrect": false },
      { "text": "Sie dienen dazu, die Leistung einzelner Entwickler zu vergleichen.", "isCorrect": false } // Falle: Anti-Pattern.
    ]
  },
  {
    "id": 3010,
    "chapter": 3,
    "text": "Ablauf von Planning Poker (Schätzverfahren).",
    "image": null,
    "explanation": "1. PO liest Story. 2. Diskussion. 3. Verdecktes Schätzen. 4. Aufdecken. 5. Diskussion bei Abweichung. 6. Neu Schätzen. (Folie 363/364).",
    "answersPool": [
      { "text": "1. Story vorstellen, 2. Diskutieren, 3. Verdeckt schätzen, 4. Aufdecken, 5. Abweichungen diskutieren, 6. Ggf. neu schätzen.", "isCorrect": true },
      { "text": "Vorstellung -> Fragen klären -> Verdeckte Wahl -> Aufdecken -> Diskussion der Extreme -> Konsens finden.", "isCorrect": true },
      
      { "text": "1. Schätzen, 2. Diskutieren, 3. Story lesen.", "isCorrect": false }, // Falsche Reihenfolge.
      { "text": "1. Karten aufdecken, 2. Verdeckt schätzen, 3. Diskutieren.", "isCorrect": false },
      { "text": "Der Scrum Master bestimmt die Punkte, das Team nickt ab.", "isCorrect": false },
      { "text": "Wer die höchste Karte hat, muss die Aufgabe erledigen.", "isCorrect": false },
      { "text": "Es wird so lange geschätzt, bis alle Karten gleich sind, ohne Diskussion.", "isCorrect": false }
    ]
  },
  {
    "id": 3011,
    "chapter": 3,
    "text": "Wofür steht „Confirmation“ bei einer User Story?",
    "image": null,
    "explanation": "Confirmation = Akzeptanzkriterien. Wann ist die Story fertig? (Testbar/Abnehmbar). (Folie 224).",
    "answersPool": [
      { "text": "Für die Akzeptanzkriterien, die definieren, wann die Story vollständig umgesetzt ist.", "isCorrect": true },
      { "text": "Die Bestätigung (Abnahmekriterien), anhand derer überprüft wird, ob die Story korrekt implementiert wurde.", "isCorrect": true },
      
      { "text": "Die Bestätigung des Chefs, dass man anfangen darf zu arbeiten.", "isCorrect": false },
      { "text": "Die E-Mail-Bestätigung, die das System an den User sendet.", "isCorrect": false },
      { "text": "Die Unterschrift unter dem Arbeitsvertrag.", "isCorrect": false },
      { "text": "Die Bestätigung, dass die Story im Backlog gespeichert wurde.", "isCorrect": false },
      { "text": "Ein Pop-up-Fenster in der Software.", "isCorrect": false }
    ]
  },
  {
    "id": 3012,
    "chapter": 3,
    "text": "Ist dies eine gute User Story? „System soll Möglichkeit bieten, Reservierungen zu stornieren“.",
    "image": null,
    "explanation": "Nein. Es fehlt die Rolle ('Wer') und der Nutzen ('Warum'). Das ist eine klassische funktionale Anforderung, keine User Story.",
    "answersPool": [
      { "text": "Nein. Es fehlen die Rolle (Wer) und der Nutzen (Warum). Es ist nur eine Funktionsbeschreibung.", "isCorrect": true },
      { "text": "Nein, das Format 'Als... möchte ich... um...' wird nicht eingehalten, der Mehrwert ist unklar.", "isCorrect": true },
      
      { "text": "Ja, sie ist kurz und prägnant, das reicht.", "isCorrect": false },
      { "text": "Ja, weil jeder Entwickler weiß, was 'stornieren' bedeutet.", "isCorrect": false },
      { "text": "Nein, weil sie zu lang ist.", "isCorrect": false },
      { "text": "Nein, weil man Reservierungen technisch nicht stornieren kann.", "isCorrect": false },
      { "text": "Ja, das ist eine perfekte User Story nach Scrum.", "isCorrect": false }
    ]
  },
  {
    "id": 3013,
    "chapter": 3,
    "text": "Kano-Fragebogen: Wie formuliert man die Fragen für ein Feature?",
    "image": null,
    "explanation": "Kano fragt immer funktional (Feature da -> Wie findest du das?) und dysfunktional (Feature weg -> Wie findest du das?). (Folie 238).",
    "answersPool": [
      { "text": "Funktional: 'Wie würden Sie es finden, wenn das Feature vorhanden ist?' Dysfunktional: 'Wie würden Sie es finden, wenn es NICHT vorhanden ist?'", "isCorrect": true },
      { "text": "Eine positive Frage zum Vorhandensein und eine negative Frage zum Fehlen des Merkmals.", "isCorrect": true },
      
      { "text": "Wollen Sie diese Funktion haben? Ja / Nein.", "isCorrect": false }, // Zu simpel.
      { "text": "Wie viel würden Sie für dieses Feature bezahlen?", "isCorrect": false }, // Preisfrage, nicht Kano.
      { "text": "Ist diese Funktion wichtig für Sie auf einer Skala von 1 bis 10?", "isCorrect": false }, // Wichtigkeits-Rating, nicht Kano.
      { "text": "Warum wollen Sie dieses Feature nutzen?", "isCorrect": false },
      { "text": "Gefällt Ihnen die Farbe des Buttons?", "isCorrect": false }
    ]
  },
  {
    "id": 3014,
    "chapter": 3,
    "text": "Was sollte man vor jeder Aufwandsschätzung tun (Regel 2 & 4)?",
    "image": null,
    "explanation": "Regel 2: Zweck klären (Wozu schätzen wir?). Regel 4: Basis schaffen (Messen, Zählen, Rechnen statt Raten). (Folie 302/309).",
    "answersPool": [
      { "text": "Den Zweck der Schätzung klären ('Wozu?') und eine Basis schaffen (Messen, Zählen, Rechnen).", "isCorrect": true },
      { "text": "Hinterfragen, wofür der Wert gebraucht wird, und Fakten sammeln statt blind zu raten.", "isCorrect": true },
      
      { "text": "Fragen, wie viel Budget noch übrig ist, und dann das Budget aufbrauchen.", "isCorrect": false },
      { "text": "Fragen, wer schuld ist, wenn die Schätzung falsch ist.", "isCorrect": false },
      { "text": "Einfach eine Zahl nennen, damit der Chef zufrieden ist.", "isCorrect": false },
      { "text": "Würfeln oder eine Münze werfen.", "isCorrect": false },
      { "text": "Den Kalender prüfen, wann der nächste Feiertag ist.", "isCorrect": false }
    ]
  },
  {
    "id": 3015,
    "chapter": 3,
    "text": "Klassifikation: Das Delphi-Verfahren.",
    "image": null,
    "explanation": "Delphi ist eine Expertenschätzung. Experten schätzen unabhängig, Moderator konsolidiert. Kein Algorithmus. (Folie 336).",
    "answersPool": [
      { "text": "Es ist ein Expertenschätzungsverfahren (basierend auf Erfahrung und Konsens).", "isCorrect": true },
      { "text": "Eine Methode, bei der Experten unabhängig befragt werden, um zu einer gemeinsamen Schätzung zu kommen.", "isCorrect": true },
      
      { "text": "Ein algorithmisches Verfahren (basierend auf Formeln).", "isCorrect": false }, // Das wäre Function Points / COCOMO.
      { "text": "Ein reines Zufallsverfahren.", "isCorrect": false },
      { "text": "Ein agiles Verfahren wie Planning Poker.", "isCorrect": false }, // Ähnlich, aber Delphi ist der "Urvater"/akademischer.
      { "text": "Eine Methode zur Berechnung der Serverlast.", "isCorrect": false },
      { "text": "Es ist gar kein Schätzverfahren, sondern eine Testmethode.", "isCorrect": false }
    ]
  },
  {
    "id": 3016,
    "chapter": 3,
    "text": "Klassifikation: Das Function-Point-Verfahren.",
    "image": null,
    "explanation": "Function Points werden berechnet (Inputs, Outputs, Dateien * Komplexitätsfaktor). Das ist ein Algorithmus. (Folie 339).",
    "answersPool": [
      { "text": "Es ist ein algorithmisches Verfahren (Berechnung anhand von Formeln und Faktoren).", "isCorrect": true },
      { "text": "Der Aufwand wird anhand funktionaler Größen (Eingaben, Ausgaben, Datenbestände) berechnet.", "isCorrect": true },
      
      { "text": "Ein Expertenschätzungsverfahren (basierend auf Bauchgefühl).", "isCorrect": false },
      { "text": "Ein intuitives Verfahren ohne feste Regeln.", "isCorrect": false },
      { "text": "Ein Verfahren, das nur bei Agile angewendet wird.", "isCorrect": false },
      { "text": "Eine Programmiersprache für funktionale Programmierung.", "isCorrect": false },
      { "text": "Es ist ein Testverfahren für Unit-Tests.", "isCorrect": false }
    ]
  },
  {
    "id": 3017,
    "chapter": 3,
    "text": "In welcher Form sollte ein seriöser Schätzwert angegeben werden?",
    "image": null,
    "explanation": "Schätzungen sind unsicher. Daher immer Intervalle (von-bis) angeben, nie Einzelwerte (Punktschätzung suggeriert falsche Genauigkeit). (Folie 298).",
    "answersPool": [
      { "text": "Als Intervall (Spanne von-bis) oder mit einer Wahrscheinlichkeit, niemals als Einzelwert.", "isCorrect": true },
      { "text": "In Form einer Spanne (z.B. 3-5 Tage), um die Unsicherheit auszudrücken.", "isCorrect": true },
      
      { "text": "Als exakte Zahl mit zwei Nachkommastellen (z.B. 4,53 Tage).", "isCorrect": false }, // Falle: Scheingenauigkeit.
      { "text": "Als festes Datum, das nicht verschoben werden kann.", "isCorrect": false },
      { "text": "Immer genau das, was der Kunde hören möchte.", "isCorrect": false },
      { "text": "Als Ja/Nein Antwort.", "isCorrect": false },
      { "text": "Als Geldbetrag in Euro.", "isCorrect": false }
    ]
  },
  {
    "id": 3018,
    "chapter": 3,
    "text": "Konflikte bei nicht-funktionalen Anforderungen (Architektur). Nennen Sie ein klassisches Beispiel.",
    "image": null,
    "explanation": "Qualitätsziele widersprechen sich oft. Klassiker: Hohe Sicherheit (viele Checks) macht System langsam (Performance) oder schwer bedienbar (Usability).",
    "answersPool": [
      { "text": "Sicherheit (Security) vs. Benutzbarkeit (Usability) oder Performance.", "isCorrect": true },
      { "text": "Effizienz (Performance) vs. Wartbarkeit oder Portabilität.", "isCorrect": true },
      
      { "text": "Funktionalität vs. Farbe der Benutzeroberfläche.", "isCorrect": false },
      { "text": "Preis vs. Kosten.", "isCorrect": false },
      { "text": "Dokumentation vs. Papierverbrauch.", "isCorrect": false },
      { "text": "Programmiersprache A vs. Programmiersprache B.", "isCorrect": false },
      { "text": "Hardware vs. Software.", "isCorrect": false }
    ]
  },
  // --- KAPITEL 4: Architektur & Design ---
  // --- KAPITEL 4: Architektur (Validiert mit PDF 510, 520) ---
  {
    "id": 4001,
    "chapter": 4,
    "text": "Was ist der Unterschied zwischen Software-Architektur und Software-Entwurf (Design)?",
    "image": null,
    "explanation": "Laut Skript (PDF 510, Folie 6/7): Architektur sind die fundamentalen Entscheidungen (Global, schwer änderbar). Entwurf ist die Detailplanung (Lokal, leichter änderbar).",
    "answersPool": [
      { "text": "Architektur betrifft fundamentale, globale Entscheidungen (Systemstruktur). Entwurf betrifft die detaillierte Ausgestaltung einzelner Komponenten.", "isCorrect": true },
      { "text": "Architektur ist die 'Grobstruktur' (Schwer zu ändern), Entwurf ist die 'Feinstruktur' (Leichter zu ändern).", "isCorrect": true },
      { "text": "Architektur ist für die Hardware, Entwurf für die Software.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, die Begriffe sind synonym.", "isCorrect": false },
      { "text": "Architektur wird vom Kunden gemacht, Entwurf vom Programmierer.", "isCorrect": false },
      { "text": "Architektur betrifft nur die Datenbank, Entwurf den Code.", "isCorrect": false }
    ]
  },
  {
    "id": 4002,
    "chapter": 4,
    "text": "Was besagt das 'Golden Rule of Software Architecture' (nach WI-Burger)?",
    "image": null,
    "explanation": "Laut Skript (PDF 510, Folie 13): 'High Cohesion' (hoher Zusammenhalt) und 'Low Coupling' (lose Koppelung).",
    "answersPool": [
      { "text": "Strebe nach hoher Kohäsion (innerer Zusammenhalt) und loser Koppelung (wenig Abhängigkeiten).", "isCorrect": true },
      { "text": "High Cohesion within components, Low Coupling between components.", "isCorrect": true },
      { "text": "Hohe Koppelung für Performance und niedrige Kohäsion für Flexibilität.", "isCorrect": false }, // Genau falsch herum
      { "text": "Maximiere die Anzahl der Klassen und minimiere die Anzahl der Methoden.", "isCorrect": false },
      { "text": "Vermeide jegliche Abhängigkeiten zwischen Modulen (Zero Coupling).", "isCorrect": false }, // Unmöglich
      { "text": "Schreibe so wenig Code wie möglich (KISS Prinzip).", "isCorrect": false } // Gutes Prinzip, aber nicht die "Golden Rule" der Architektur
    ]
  },
  {
    "id": 4003,
    "chapter": 4,
    "text": "Welche Vorteile bietet das Schichtenmodell (Layered Architecture)?",
    "image": null,
    "explanation": "Laut Skript (PDF 520, Folie 5-7): Austauschbarkeit einzelner Schichten, Testbarkeit, klare Abhängigkeiten (nur nach unten).",
    "answersPool": [
      { "text": "Austauschbarkeit von Schichten (z.B. neue UI), Testbarkeit und klare Abhängigkeitsrichtung (meist nur nach unten).", "isCorrect": true },
      { "text": "Reduktion der Komplexität durch Kapselung von Verantwortlichkeiten in Ebenen (z.B. Presentation, Business, Data).", "isCorrect": true },
      { "text": "Es verbessert die Performance, da Daten durch viele Schichten müssen.", "isCorrect": false }, // Performance ist eher ein Nachteil!
      { "text": "Es erlaubt zirkuläre Abhängigkeiten zwischen allen Modulen.", "isCorrect": false }, // Verboten in Schichten
      { "text": "Es eliminiert die Notwendigkeit einer Datenbank.", "isCorrect": false },
      { "text": "Es ist das einzige Architekturmuster, das für Web-Apps funktioniert.", "isCorrect": false }
    ]
  },
  {
    "id": 4004,
    "chapter": 4,
    "text": "Was beschreibt das Repository-Muster (Blackboard)?",
    "image": null,
    "explanation": "Laut Skript (PDF 520, Folie 13): Zentrale Datenhaltung. Komponenten kommunizieren nicht direkt, sondern über das Repository.",
    "answersPool": [
      { "text": "Zentrale Datenhaltung: Komponenten tauschen Informationen aus, indem sie in einen gemeinsamen Speicher (Repository) schreiben/lesen.", "isCorrect": true },
      { "text": "Entkopplung von Komponenten durch eine zentrale Datenbank, auf die alle zugreifen.", "isCorrect": true },
      { "text": "Direkte Kommunikation zwischen allen Komponenten (Peer-to-Peer).", "isCorrect": false },
      { "text": "Eine Architektur zur Versionierung von Quellcode (Git).", "isCorrect": false }, // Namensfalle
      { "text": "Ein Muster für verteilte Rechner ohne zentralen Server.", "isCorrect": false },
      { "text": "Das Speichern von Backups auf Magnetbändern.", "isCorrect": false }
    ]
  },
  {
    "id": 4005,
    "chapter": 4,
    "text": "Was beschreibt das MVC-Muster (Model-View-Controller)?",
    "image": null,
    "explanation": "Trennung von Daten (Model), Darstellung (View) und Steuerung (Controller). Änderung im Model aktualisiert View. (Folie 446).",
    "answersPool": [
      { "text": "Ein Architekturmuster zur Trennung von Datenhaltung (Model), Präsentation (View) und Programmsteuerung (Controller).", "isCorrect": true },
      { "text": "Die Aufteilung einer Anwendung in drei Bereiche: Datenlogik, Benutzeroberfläche und Benutzerinteraktion.", "isCorrect": true },
      { "text": "Model: Datenbank, View: Internet, Controller: Server.", "isCorrect": false },
      { "text": "Eine Methode zum Testen von Software.", "isCorrect": false },
      { "text": "Model zeigt die Daten an, View speichert sie, Controller löscht sie.", "isCorrect": false },
      { "text": "Ein Vorgehensmodell wie Scrum.", "isCorrect": false },
      { "text": "Ein Design für Webseiten-Header, Footer und Sidebar.", "isCorrect": false }
    ]
  },
  {
    "id": 4006,
    "chapter": 4,
    "text": "Was ist der Vorteil von MVC?",
    "image": null,
    "explanation": "Entkopplung. Man kann die View tauschen (z.B. Web statt Desktop) ohne das Model zu ändern. Parallele Entwicklung möglich.",
    "answersPool": [
      { "text": "Entkopplung von Darstellung und Logik: Änderungen an der Oberfläche beeinflussen nicht die Datenhaltung.", "isCorrect": true },
      { "text": "Ermöglicht mehrere Sichten (Views) auf dieselben Daten und verbessert die Wartbarkeit.", "isCorrect": true },
      { "text": "Es reduziert die Anzahl der Codezeilen drastisch.", "isCorrect": false },
      { "text": "Es macht die Software automatisch schneller.", "isCorrect": false },
      { "text": "Man braucht keine Datenbank mehr.", "isCorrect": false },
      { "text": "Der User kann das Design selbst ändern.", "isCorrect": false },
      { "text": "Es verhindert alle Bugs im Code.", "isCorrect": false }
    ]
  },
  {
    "id": 4007,
    "chapter": 4,
    "text": "Was ist der Unterschied zwischen logischer und physischer Sicht in der Architektur?",
    "image": null,
    "explanation": "Logisch: Funktionale Struktur (Klassen, Pakete). Physisch: Deployment (Server, Knoten, Netzwerke). (Folie 406).",
    "answersPool": [
      { "text": "Logisch: Struktur der Software (Klassen, Module). Physisch: Verteilung auf Hardware (Server, Deployment).", "isCorrect": true },
      { "text": "Logische Sicht zeigt die funktionale Zerlegung, physische Sicht zeigt die Installationsumgebung.", "isCorrect": true },
      { "text": "Logisch ist für den User, Physisch für den Entwickler.", "isCorrect": false },
      { "text": "Logisch ist Theorie, Physisch ist Praxis.", "isCorrect": false },
      { "text": "Logisch sind die Daten, Physisch ist der Code.", "isCorrect": false },
      { "text": "Physisch bedeutet, dass man die Software anfassen kann.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied.", "isCorrect": false }
    ]
  },
  {
    "id": 4008,
    "chapter": 4,
    "text": "Was ist ein 'Design Pattern' (Entwurfsmuster)?",
    "image": null,
    "explanation": "Bewährte Lösungsschablone für wiederkehrende Entwurfsprobleme (z.B. Singleton, Observer). (Folie 439).",
    "answersPool": [
      { "text": "Eine bewährte, wiederverwendbare Lösungsschablone für ein häufig auftretendes Entwurfsproblem.", "isCorrect": true },
      { "text": "Best Practice zur Lösung von Design-Problemen (z.B. Singleton, Observer, Factory).", "isCorrect": true },
      { "text": "Ein fertiges Stück Code, das man per Copy-Paste einfügt.", "isCorrect": false },
      { "text": "Ein Design für das Hintergrundbild der Software.", "isCorrect": false },
      { "text": "Eine Vorschrift, wie Variablen benannt werden müssen.", "isCorrect": false },
      { "text": "Ein Tool zum Zeichnen von UML-Diagrammen.", "isCorrect": false },
      { "text": "Ein Muster, das der Kunde vorgibt.", "isCorrect": false }
    ]
  },
  {
    "id": 4009,
    "chapter": 4,
    "text": "Nennen Sie zwei Beispiele für Architekturstile.",
    "image": null,
    "explanation": "Laut Skript (Folie 432): Schichtenarchitektur (Layered), Client-Server, Pipe-and-Filter, Repository.",
    "answersPool": [
      { "text": "Schichtenarchitektur (Layered), Client-Server, Pipe-and-Filter.", "isCorrect": true },
      { "text": "Repository-Architektur, Model-View-Controller (MVC).", "isCorrect": true },
      { "text": "Windows und Linux.", "isCorrect": false },
      { "text": "Java und C#.", "isCorrect": false },
      { "text": "Word und Excel.", "isCorrect": false },
      { "text": "Agil und Wasserfall.", "isCorrect": false },
      { "text": "Maus und Tastatur.", "isCorrect": false }
    ]
  },
  {
    "id": 4010,
    "chapter": 4,
    "text": "Was ist das Prinzip der 'Schichtenarchitektur' (Layered Architecture)?",
    "image": null,
    "explanation": "Hierarchische Gliederung. Jede Schicht nutzt nur Dienste der direkt darunterliegenden Schicht. (Folie 433).",
    "answersPool": [
      { "text": "Hierarchische Strukturierung, bei der jede Schicht nur auf die Dienste der direkt darunterliegenden Schicht zugreift.", "isCorrect": true },
      { "text": "Trennung von Verantwortlichkeiten in Ebenen (z.B. UI, Logik, Daten), um Abhängigkeiten zu ordnen.", "isCorrect": true },
      { "text": "Alle Module dürfen beliebig auf alle anderen zugreifen.", "isCorrect": false },
      { "text": "Es gibt nur eine einzige Schicht für alles.", "isCorrect": false },
      { "text": "Die unterste Schicht greift auf die oberste zu (Zyklus).", "isCorrect": false },
      { "text": "Es beschreibt das Stapeln von Hardware-Komponenten.", "isCorrect": false },
      { "text": "Eine Architektur nur für Bildbearbeitungssoftware.", "isCorrect": false }
    ]
  },
  {
    "id": 4011,
    "chapter": 4,
    "text": "Was bedeutet 'Lose Koppelung' im Kontext von Architektur?",
    "image": null,
    "explanation": "Komponenten sind wenig voneinander abhängig. Änderungen wirken sich lokal aus. (Folie 417).",
    "answersPool": [
      { "text": "Komponenten sind so wenig wie möglich voneinander abhängig. Änderungen bleiben lokal begrenzt.", "isCorrect": true },
      { "text": "Minimierung der Abhängigkeiten zwischen Modulen, um Austauschbarkeit zu erhöhen.", "isCorrect": true },
      { "text": "Komponenten sind fest miteinander verdrahtet und können nicht getrennt werden.", "isCorrect": false },
      { "text": "Es gibt gar keine Verbindung zwischen den Komponenten.", "isCorrect": false },
      { "text": "Die Kabel sind nicht richtig eingesteckt.", "isCorrect": false },
      { "text": "Die Software stürzt oft ab.", "isCorrect": false },
      { "text": "Es bedeutet, dass man WLAN statt Kabel nutzt.", "isCorrect": false }
    ]
  },
  {
    "id": 4012,
    "chapter": 4,
    "text": "Was ist das 'Repository'-Architekturmuster?",
    "image": null,
    "explanation": "Zentrale Datenhaltung (Repository), auf die alle Komponenten zugreifen. (Folie 437).",
    "answersPool": [
      { "text": "Alle Komponenten greifen auf einen gemeinsamen, zentralen Datenbestand (Repository) zu.", "isCorrect": true },
      { "text": "Zentralisierte Datenverwaltung, bei der Subsysteme Daten austauschen, indem sie in das Repository schreiben/lesen.", "isCorrect": true },
      { "text": "Jede Komponente hat ihre eigene, private Datenbank und teilt nichts.", "isCorrect": false },
      { "text": "Daten werden direkt von Komponente zu Komponente geschickt (wie beim Staffellauf).", "isCorrect": false },
      { "text": "Ein Muster zur Versionierung von Quellcode (Git).", "isCorrect": false },
      { "text": "Ein Design für Lagerverwaltungssoftware.", "isCorrect": false },
      { "text": "Eine Architektur ohne Daten.", "isCorrect": false }
    ]
  },
  {
    "id": 4013,
    "chapter": 4,
    "text": "Wann sollte man eine Architektur festlegen?",
    "image": null,
    "explanation": "Früh im Projekt, da sie schwer zu ändern ist. Sie ist das Fundament. (Folie 402).",
    "answersPool": [
      { "text": "Möglichst früh, da sie fundamentale Entscheidungen enthält, die später schwer zu ändern sind.", "isCorrect": true },
      { "text": "In der Entwurfsphase, bevor die detaillierte Implementierung beginnt.", "isCorrect": true },
      { "text": "Ganz am Ende, wenn der Code fertig ist.", "isCorrect": false },
      { "text": "Nach dem Testen, um zu sehen, was funktioniert.", "isCorrect": false },
      { "text": "Architektur entsteht automatisch, man muss sie nicht planen.", "isCorrect": false },
      { "text": "Erst wenn der Kunde sich beschwert.", "isCorrect": false },
      { "text": "Täglich neu im Daily Scrum.", "isCorrect": false }
    ]
  },

  // --- KAPITEL 5: Entwurfsmuster (Quelle: 610_SWEN_25.2_Entwurfsmuster.pdf) ---
  {
    "id": 5001,
    "chapter": 5,
    "text": "Was ist ein Entwurfsmuster (Design Pattern)?",
    "image": null,
    "explanation": "Laut Skript (PDF 610, Folie 4): Eine bewährte Lösungsschablone für wiederkehrende Entwurfsprobleme in einem bestimmten Kontext.",
    "answersPool": [
      { "text": "Eine bewährte, wiederverwendbare Lösungsschablone für ein häufig auftretendes Problem im Software-Entwurf.", "isCorrect": true },
      { "text": "Best Practice zur Lösung von Design-Problemen, die sich in der Praxis bewährt hat (z.B. Singleton, Observer).", "isCorrect": true },
      { "text": "Ein fertiges Code-Snippet, das man per Copy-Paste einfügt.", "isCorrect": false }, // Pattern ist Konzept, kein Code
      { "text": "Eine grafische Vorlage für Benutzeroberflächen.", "isCorrect": false },
      { "text": "Eine strikte Vorschrift, wie Code formatiert werden muss.", "isCorrect": false },
      { "text": "Ein Algorithmus zur Sortierung von Daten.", "isCorrect": false }
    ]
  },
  {
    "id": 5002,
    "chapter": 5,
    "text": "In welche drei Kategorien werden GoF (Gang of Four) Muster unterteilt?",
    "image": null,
    "explanation": "Laut Skript (PDF 610, Folie 8): Erzeugungsmuster (Creational), Strukturmuster (Structural), Verhaltensmuster (Behavioral).",
    "answersPool": [
      { "text": "Erzeugungsmuster, Strukturmuster, Verhaltensmuster.", "isCorrect": true },
      { "text": "Creational Patterns, Structural Patterns, Behavioral Patterns.", "isCorrect": true },
      { "text": "Objektorientiert, Funktional, Prozedural.", "isCorrect": false },
      { "text": "Frontend, Backend, Database.", "isCorrect": false },
      { "text": "Analyse, Design, Implementierung.", "isCorrect": false },
      { "text": "Klasse, Objekt, Methode.", "isCorrect": false }
    ]
  },
  {
    "id": 5003,
    "chapter": 5,
    "text": "Was ist der Zweck des Singleton-Musters?",
    "image": null,
    "explanation": "Laut Skript (PDF 610, Folie 12): Sicherstellen, dass eine Klasse nur genau eine Instanz hat und einen globalen Zugriffspunkt bietet.",
    "answersPool": [
      { "text": "Sicherstellen, dass von einer Klasse nur genau eine Instanz existiert, und Bereitstellung eines globalen Zugriffspunkts.", "isCorrect": true },
      { "text": "Vermeidung mehrfacher Instanziierung (z.B. für Datenbankverbindungen oder Logger).", "isCorrect": true },
      { "text": "Erstellung beliebig vieler unabhängiger Objekte.", "isCorrect": false },
      { "text": "Sicherstellen, dass eine Klasse nur von einem Thread genutzt wird.", "isCorrect": false },
      { "text": "Eine Klasse, die keine Methoden hat, nur Daten.", "isCorrect": false },
      { "text": "Die Verbindung von zwei inkompatiblen Schnittstellen.", "isCorrect": false } // Das wäre Adapter
    ]
  },
  {
    "id": 5004,
    "chapter": 5,
    "text": "Wie funktioniert das Beobachter-Muster (Observer Pattern)?",
    "image": null,
    "explanation": "Laut Skript (PDF 610, Folie 22): Ein Subjekt benachrichtigt automatisch alle registrierten Beobachter bei Zustandsänderungen (1-zu-n Abhängigkeit).",
    "answersPool": [
      { "text": "Ein Subjekt benachrichtigt automatisch alle registrierten Beobachter, wenn sich sein Zustand ändert.", "isCorrect": true },
      { "text": "Definition einer 1-zu-n Abhängigkeit, sodass bei Änderung eines Objekts alle abhängigen Objekte informiert werden.", "isCorrect": true },
      { "text": "Ein Objekt beobachtet den Benutzer und speichert seine Eingaben.", "isCorrect": false },
      { "text": "Eine Kameraüberwachung für Serverräume.", "isCorrect": false },
      { "text": "Es kopiert den Zustand eines Objekts in eine Datenbank.", "isCorrect": false },
      { "text": "Es verhindert, dass ein Objekt verändert wird.", "isCorrect": false }
    ]
  },
  {
    "id": 5005,
    "chapter": 5,
    "text": "Wann verwendet man das Strategie-Muster (Strategy Pattern)?",
    "image": null,
    "explanation": "Laut Skript (PDF 610, Folie 31): Wenn man eine Familie von Algorithmen hat, diese austauschbar machen will und die Auswahl zur Laufzeit treffen möchte.",
    "answersPool": [
      { "text": "Wenn man verschiedene Algorithmen für denselben Zweck hat und diese zur Laufzeit austauschbar machen möchte.", "isCorrect": true },
      { "text": "Um das Verhalten einer Klasse flexibel zu ändern, indem man das Verhalten in eigene Klassen (Strategien) auslagert.", "isCorrect": true },
      { "text": "Um sicherzustellen, dass es nur eine Instanz gibt.", "isCorrect": false }, // Singleton
      { "text": "Um inkompatible Schnittstellen zu verbinden.", "isCorrect": false }, // Adapter
      { "text": "Um komplexe Objekte Schritt für Schritt zu bauen.", "isCorrect": false }, // Builder
      { "text": "Wenn man keine Algorithmen verwenden möchte.", "isCorrect": false }
    ]
  },

  // --- KAPITEL 6: Implementierung & Refactoring (Quelle: 700_SWEN_23.1_Implementierung...) ---
  {
    "id": 6001,
    "chapter": 6,
    "text": "Was versteht man unter 'Refactoring'?",
    "image": null,
    "explanation": "Laut Skript (PDF 700, Folie 19): Änderung der inneren Struktur von Software, um sie verständlicher/änderbarer zu machen, OHNE das äußere Verhalten zu ändern.",
    "answersPool": [
      { "text": "Verbesserung der inneren Struktur des Codes, ohne das beobachtbare äußere Verhalten zu verändern.", "isCorrect": true },
      { "text": "Code-Bereinigung zur Erhöhung der Wartbarkeit und Lesbarkeit, bei gleichbleibender Funktionalität.", "isCorrect": true },
      { "text": "Hinzufügen neuer Funktionen für den Benutzer.", "isCorrect": false }, // Das ist kein Refactoring!
      { "text": "Beheben von Bugs, die das Verhalten der Software ändern.", "isCorrect": false }, // Das ist Bugfixing
      { "text": "Das komplette Neuschreiben der Software in einer anderen Sprache.", "isCorrect": false }, // Rewrite
      { "text": "Das Ändern der Benutzeroberfläche (Redesign).", "isCorrect": false }
    ]
  },
  {
    "id": 6002,
    "chapter": 6,
    "text": "Was sind 'Coding Conventions' (Programmierrichtlinien) und warum sind sie wichtig?",
    "image": null,
    "explanation": "Laut Skript (PDF 700, Folie 12): Regeln für Namensgebung, Formatierung etc. Wichtig für Lesbarkeit und Wartbarkeit im Team.",
    "answersPool": [
      { "text": "Regeln für das Schreiben von Code (z.B. Namensgebung, Einrückung). Sie erhöhen die Lesbarkeit und Wartbarkeit im Team.", "isCorrect": true },
      { "text": "Einheitliche Standards, damit der Code aussieht, als wäre er von einer einzigen Person geschrieben worden.", "isCorrect": true },
      { "text": "Gesetze, die verbieten, Open Source Code zu nutzen.", "isCorrect": false },
      { "text": "Regeln, die vorschreiben, welche Hardware verwendet werden muss.", "isCorrect": false },
      { "text": "Sie dienen dazu, den Code vor Hackern zu verstecken.", "isCorrect": false },
      { "text": "Konventionen, um Programmierer zu ärgern.", "isCorrect": false }
    ]
  },
  {
    "id": 6003,
    "chapter": 6,
    "text": "Was bedeutet der Begriff 'Technical Debt' (Technische Schulden)?",
    "image": null,
    "explanation": "Laut Skript (PDF 700, Folie 25): Kosten für zusätzliche Arbeit in der Zukunft, verursacht durch schnelle/dreckige Lösungen heute.",
    "answersPool": [
      { "text": "Die metaphorischen 'Kosten' für zusätzliche zukünftige Arbeit, verursacht durch die Wahl einer einfachen, aber kurzfristigen Lösung.", "isCorrect": true },
      { "text": "Qualitätsmängel im Code (z.B. fehlende Tests, schlechte Struktur), die später teuer behoben werden müssen (Zinsen).", "isCorrect": true },
      { "text": "Die finanziellen Schulden des Unternehmens bei der Bank.", "isCorrect": false },
      { "text": "Die Lizenzkosten für Software-Tools.", "isCorrect": false },
      { "text": "Fehlende Hardware-Ressourcen.", "isCorrect": false },
      { "text": "Wenn man das Projektbudget überschritten hat.", "isCorrect": false }
    ]
  },

  // --- KAPITEL 7: Versionsverwaltung & Build (Quelle: 710, 720, 740...) ---
  {
    "id": 7001,
    "chapter": 7,
    "text": "Was ist der Unterschied zwischen zentraler (CVCS) und verteilter (DVCS) Versionsverwaltung?",
    "image": null,
    "explanation": "Laut Skript (PDF 710, Folie 10/12): Zentral (SVN) = Ein Server hat alle Versionen. Verteilt (Git) = Jeder Client hat das volle Repository (Clone).",
    "answersPool": [
      { "text": "Zentral: Ein Server hat die Historie, Clients haben nur Arbeitskopie. Verteilt: Jeder Client hat eine vollständige Kopie der Historie (Repository).", "isCorrect": true },
      { "text": "CVCS (z.B. SVN) ist abhängig vom Server. DVCS (z.B. Git) erlaubt lokales Arbeiten mit voller Historie und Offline-Commits.", "isCorrect": true },
      { "text": "Zentral ist für große Teams, Verteilt nur für Einzelpersonen.", "isCorrect": false },
      { "text": "Zentral speichert Code, Verteilt speichert nur Binärdateien.", "isCorrect": false },
      { "text": "Verteilt bedeutet, dass der Code in der Cloud liegt (Google Drive).", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, es sind nur verschiedene Markennamen.", "isCorrect": false }
    ]
  },
  {
    "id": 7002,
    "chapter": 7,
    "text": "Vergleich: 'Lock-Modify-Unlock' vs. 'Copy-Modify-Merge'.",
    "image": null,
    "explanation": "Laut Skript (PDF 710, Folie 6-8): Lock = Sperren der Datei (andere warten). Merge = Paralleles Arbeiten, Zusammenfügen am Ende.",
    "answersPool": [
      { "text": "Lock: Sperrt Datei für andere (serielles Arbeiten). Merge: Erlaubt paralleles Arbeiten, Konflikte werden beim Zusammenführen gelöst.", "isCorrect": true },
      { "text": "Lock-Modify-Unlock verhindert Konflikte durch Sperren. Copy-Modify-Merge erlaubt Konflikte, die gelöst werden müssen.", "isCorrect": true },
      { "text": "Lock ist moderner und besser als Merge.", "isCorrect": false }, // Merge ist Standard heute (Git)
      { "text": "Merge bedeutet, dass Dateien automatisch gelöscht werden.", "isCorrect": false },
      { "text": "Lock-Modify-Unlock wird von Git verwendet.", "isCorrect": false }, // Git nutzt Merge
      { "text": "Copy-Modify-Merge funktioniert nur ohne Internet.", "isCorrect": false }
    ]
  },
  {
    "id": 7003,
    "chapter": 7,
    "text": "Was machen die Git-Befehle: commit, push und pull?",
    "image": null,
    "explanation": "Laut Skript (PDF 720): Commit = Speichern im lokalen Repo. Push = Hochladen zum Server. Pull = Herunterladen & Mergen vom Server.",
    "answersPool": [
      { "text": "Commit: Änderungen im lokalen Repository speichern. Push: Lokale Änderungen zum Server hochladen. Pull: Änderungen vom Server holen und mergen.", "isCorrect": true },
      { "text": "Commit ist lokal (Save point). Push ist Transfer nach Remote. Pull ist Update von Remote (Fetch + Merge).", "isCorrect": true },
      { "text": "Commit lädt Dateien ins Internet hoch.", "isCorrect": false }, // Das ist Push
      { "text": "Push speichert Dateien auf der Festplatte.", "isCorrect": false }, // Das ist Commit
      { "text": "Pull löscht das Repository.", "isCorrect": false },
      { "text": "Commit ist nur für Datenbanken.", "isCorrect": false }
    ]
  },
  {
    "id": 7004,
    "chapter": 7,
    "text": "Was ist 'Build Management' und wozu dient ein Build-Tool (z.B. Maven, Gradle)?",
    "image": null,
    "explanation": "Laut Skript (PDF 740, Folie 4/7): Automatisierung von Kompilieren, Testen, Paketieren und Abhängigkeiten verwalten.",
    "answersPool": [
      { "text": "Automatisierung des Erstellungsprozesses: Kompilieren, Testen, Paketieren und Verwalten von Abhängigkeiten (Libraries).", "isCorrect": true },
      { "text": "Sicherstellung eines wiederholbaren, standardisierten Prozesses vom Quellcode zur ausführbaren Software.", "isCorrect": true },
      { "text": "Ein Tool, um den PC zusammenzubauen (Hardware).", "isCorrect": false },
      { "text": "Es dient dazu, Gebäudepläne zu zeichnen.", "isCorrect": false },
      { "text": "Manuelles Kopieren von Dateien auf einen USB-Stick.", "isCorrect": false },
      { "text": "Ein Tool, das den Code automatisch schreibt.", "isCorrect": false }
    ]
  },
  {
    "id": 7005,
    "chapter": 7,
    "text": "Was bedeutet 'Continuous Integration' (CI)?",
    "image": null,
    "explanation": "Laut Skript (PDF 740, Folie 27): Häufiges (tägliches) Integrieren von Code-Änderungen in den Hauptzweig, inkl. automatischen Tests.",
    "answersPool": [
      { "text": "Die Praxis, Code-Änderungen häufig (z.B. mehrmals täglich) in ein gemeinsames Repository zu integrieren und automatisch zu testen.", "isCorrect": true },
      { "text": "Vermeidung von Integrationsproblemen ('Integration Hell') durch ständige kleine Updates und automatisierte Builds.", "isCorrect": true },
      { "text": "Dass man ununterbrochen ohne Pause programmiert.", "isCorrect": false },
      { "text": "Die Integration von neuer Hardware in den Serverraum.", "isCorrect": false },
      { "text": "Dass der Kunde ständig neben dem Entwickler sitzt.", "isCorrect": false },
      { "text": "Ein Meeting, das niemals endet.", "isCorrect": false }
    ]
  },
  // --- KAPITEL 8: Softwarequalität & Testen (Quelle: 800, 810, 820) ---
  {
    "id": 8001,
    "chapter": 8,
    "text": "Was ist der Unterschied zwischen konstruktiver und analytischer Qualitätssicherung (QS)?",
    "image": null,
    "explanation": "Laut Skript (PDF 800, Folie 13/14): Konstruktiv = Fehlervermeidung VORHER (Richtlinien, Checklisten). Analytisch = Fehlerfindung NACHHER (Testen, Review).",
    "answersPool": [
      { "text": "Konstruktiv: Maßnahmen zur Fehlervermeidung während der Erstellung (z.B. Richtlinien). Analytisch: Maßnahmen zur Fehlerfindung am Produkt (z.B. Tests).", "isCorrect": true },
      { "text": "Konstruktiv soll Fehler präventiv verhindern ('Building it right'). Analytisch sucht Fehler im fertigen Artefakt ('Checking it').", "isCorrect": true },
      
      { "text": "Konstruktiv ist für Hardware, Analytisch für Software.", "isCorrect": false },
      { "text": "Konstruktiv sind Unit-Tests, Analytisch sind Systemtests.", "isCorrect": false }, // Beides ist analytisch!
      { "text": "Konstruktiv wird vom Management gemacht, Analytisch vom Entwickler.", "isCorrect": false },
      { "text": "Analytisch bedeutet, dass man den Code mathematisch beweist.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, beides beschreibt das Testen.", "isCorrect": false }
    ]
  },
  {
    "id": 8002,
    "chapter": 8,
    "text": "Verifikation vs. Validierung: Was ist der Unterschied?",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 5): Verifikation = 'Are we building the product right?' (Spezifikation erfüllt?). Validierung = 'Are we building the right product?' (Kundenwunsch erfüllt?).",
    "answersPool": [
      { "text": "Verifikation: 'Bauen wir das Produkt richtig?' (Spezifikationskonform). Validierung: 'Bauen wir das richtige Produkt?' (Kundennutzen).", "isCorrect": true },
      { "text": "Verifikation prüft gegen die technischen Vorgaben. Validierung prüft gegen die Erwartung des Nutzers/Kunden im realen Einsatz.", "isCorrect": true },
      
      { "text": "Verifikation: 'Bauen wir das richtige Produkt?'. Validierung: 'Bauen wir das Produkt richtig?'.", "isCorrect": false }, // Klassische Falle: Vertauscht!
      { "text": "Verifikation ist manuelles Testen, Validierung ist automatisiertes Testen.", "isCorrect": false },
      { "text": "Verifikation macht der Kunde, Validierung der Entwickler.", "isCorrect": false },
      { "text": "Validierung ist die Prüfung auf Syntaxfehler im Code.", "isCorrect": false },
      { "text": "Verifikation ist teurer als Validierung.", "isCorrect": false }
    ]
  },
  {
    "id": 8003,
    "chapter": 8,
    "text": "Was sind die 7 Grundsätze des Softwaretestens (ISTQB)?",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 12): 1. Testen zeigt Anwesenheit von Fehlern (nicht Abwesenheit). 2. Vollständiges Testen unmöglich. 3. Frühes Testen. 4. Fehlerhäufung. 5. Pestizid-Paradoxon. 6. Kontextabhängigkeit. 7. Trugschluss der Fehlerfreiheit.",
    "answersPool": [
      { "text": "Testen zeigt Anwesenheit von Fehlern (nie Abwesenheit), vollständiges Testen ist unmöglich, Fehler treten gehäuft auf (Cluster).", "isCorrect": true },
      { "text": "Frühes Testen spart Kosten, Pestizid-Paradoxon (Tests müssen variieren), Testen ist kontextabhängig.", "isCorrect": true },
      
      { "text": "Testen kann beweisen, dass eine Software 100% fehlerfrei ist.", "isCorrect": false }, // Hauptfalle!
      { "text": "Man sollte so spät wie möglich testen, um Kosten zu sparen.", "isCorrect": false }, // Falsch, Kurve der Fehlerkosten!
      { "text": "Wenn keine Fehler gefunden werden, ist die Software perfekt.", "isCorrect": false },
      { "text": "Automatisierte Tests finden alle Fehler.", "isCorrect": false },
      { "text": "Testen ist unabhängig vom Kontext immer gleich.", "isCorrect": false }
    ]
  },
  {
    "id": 8004,
    "chapter": 8,
    "text": "Was ist der Unterschied zwischen Statischem und Dynamischem Testen?",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 14): Statisch = Prüfling wird NICHT ausgeführt (Review, statische Analyse). Dynamisch = Prüfling WIRD ausgeführt (Unit-Test, Systemtest).",
    "answersPool": [
      { "text": "Statisch: Prüfung ohne Ausführung des Codes (z.B. Review, Metriken). Dynamisch: Prüfung durch Ausführung des Codes mit Testdaten.", "isCorrect": true },
      { "text": "Statische Tests finden Fehler im Code/Dokument (z.B. Syntax). Dynamische Tests finden Fehler im Verhalten (z.B. falsche Berechnung).", "isCorrect": true },
      
      { "text": "Statisch bedeutet manuelle Tests, Dynamisch bedeutet automatisierte Tests.", "isCorrect": false }, // Falsch. Auch statische Analyse kann autom. sein.
      { "text": "Statische Tests finden nur Design-Fehler, Dynamische Tests nur Code-Fehler.", "isCorrect": false },
      { "text": "Dynamische Tests sind immer Black-Box-Tests.", "isCorrect": false },
      { "text": "Statische Tests werden erst nach dem Release durchgeführt.", "isCorrect": false },
      { "text": "Statisch heißt, der Code darf nicht verändert werden.", "isCorrect": false }
    ]
  },
  {
    "id": 8005,
    "chapter": 8,
    "text": "Nennen Sie die Teststufen (Test Levels) im V-Modell in der richtigen Reihenfolge (von unten nach oben).",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 26): Komponententest (Unit) -> Integrationstest -> Systemtest -> Abnahmetest (Acceptance).",
    "answersPool": [
      { "text": "Komponententest (Unit Test) -> Integrationstest -> Systemtest -> Abnahmetest (Acceptance Test).", "isCorrect": true },
      { "text": "Unit Test (prüft Module), Integration (prüft Zusammenspiel), System (prüft Gesamtsystem), Abnahme (prüft Kundensicht).", "isCorrect": true },
      
      { "text": "Systemtest -> Integrationstest -> Unit Test -> Abnahmetest.", "isCorrect": false }, // Falsche Reihenfolge.
      { "text": "Alpha-Test -> Beta-Test -> Gamma-Test -> Release.", "isCorrect": false },
      { "text": "Code Review -> Bugfixing -> Release.", "isCorrect": false },
      { "text": "Blackbox -> Whitebox -> Greybox.", "isCorrect": false }, // Das sind Testarten, keine Stufen.
      { "text": "Frontend-Test -> Backend-Test -> Datenbank-Test.", "isCorrect": false }
    ]
  },
  {
    "id": 8006,
    "chapter": 8,
    "text": "Unterschied: Black-Box vs. White-Box Testverfahren.",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 34/38): Black-Box: Innere Struktur unbekannt (Test gegen Spezifikation). White-Box: Innere Struktur bekannt (Test gegen Code/Pfade).",
    "answersPool": [
      { "text": "Black-Box: Test ohne Kenntnis der inneren Struktur (Input/Output). White-Box: Test mit Kenntnis der inneren Struktur (Code-Pfad-Abdeckung).", "isCorrect": true },
      { "text": "Black-Box prüft funktionales Verhalten (Spezifikation). White-Box prüft interne Logik (Schleifen, Verzweigungen).", "isCorrect": true },
      
      { "text": "Black-Box ist für böse Hacker, White-Box für gute Entwickler.", "isCorrect": false },
      { "text": "Black-Box testet die Hardware, White-Box die Software.", "isCorrect": false },
      { "text": "Black-Box Tests sind immer manuell, White-Box immer automatisch.", "isCorrect": false },
      { "text": "White-Box bedeutet, dass man den Testbericht auf weißem Papier druckt.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, es sind nur Synonyme.", "isCorrect": false }
    ]
  },
  {
    "id": 8007,
    "chapter": 8,
    "text": "Welche Merkmale gehören zur ISO/IEC 25010 (Software-Qualitätsmodell)?",
    "image": null,
    "explanation": "Laut Skript (PDF 820, Folie 5): Funktionalität, Effizienz, Kompatibilität, Benutzbarkeit, Zuverlässigkeit, Sicherheit, Wartbarkeit, Portabilität.",
    "answersPool": [
      { "text": "Funktionalität, Leistungseffizienz, Kompatibilität, Benutzbarkeit, Zuverlässigkeit, Sicherheit, Wartbarkeit, Portabilität.", "isCorrect": true },
      { "text": "Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability.", "isCorrect": true },
      
      { "text": "Preis, Marketing, Support, Lizenzmodell.", "isCorrect": false }, // Wirtschaftlich, nicht technisch.
      { "text": "Objektorientierung, Modularität, Kapselung.", "isCorrect": false }, // Architektur-Prinzipien.
      { "text": "Agilität, Scrum, Kanban, Wasserfall.", "isCorrect": false }, // Prozessmodelle.
      { "text": "Farbe, Form, Schriftart, Logo.", "isCorrect": false },
      { "text": "Hardware, Netzwerk, Stromverbrauch.", "isCorrect": false }
    ]
  },
  {
    "id": 8008,
    "chapter": 8,
    "text": "Was ist ein 'Regressionstest'?",
    "image": null,
    "explanation": "Laut Skript (PDF 810, Folie 17): Wiederholung von Tests nach Code-Änderungen, um sicherzustellen, dass keine neuen Fehler eingebaut wurden (keine Regression).",
    "answersPool": [
      { "text": "Wiederholung von Tests nach Änderungen, um sicherzustellen, dass bereits funktionierende Teile nicht kaputt gemacht wurden.", "isCorrect": true },
      { "text": "Testen, ob neue Änderungen Seiteneffekte auf bestehende Funktionen haben ('Verschlechterung').", "isCorrect": true },
      
      { "text": "Ein Test, der prüft, ob die Software auf alter Hardware läuft.", "isCorrect": false },
      { "text": "Ein Test, der mathematische Regressionen berechnet.", "isCorrect": false },
      { "text": "Der allererste Test in einem Projekt.", "isCorrect": false },
      { "text": "Ein Test, der von rückwärts nach vorwärts durchgeführt wird.", "isCorrect": false },
      { "text": "Ein Test, der absichtlich fehlschlägt.", "isCorrect": false }
    ]
  },
  {
    "id": 8009,
    "chapter": 8,
    "text": "Welche Arten von Reviews gibt es und wie unterscheiden sie sich?",
    "image": null,
    "explanation": "Laut Skript (PDF 820, Folie 10): Walkthrough (informell, Autor führt durch), Inspektion (formal, Moderator, Protokoll, Checklisten).",
    "answersPool": [
      { "text": "Walkthrough (informell, Autor präsentiert, Feedback) und Inspektion (streng formal, Moderator, Protokoll, Metriken).", "isCorrect": true },
      { "text": "Inspektion ist der formalste Review-Typ mit festen Rollen. Walkthrough ist weniger formal und dient dem gemeinsamen Verständnis.", "isCorrect": true },
      
      { "text": "Walkthrough ist im Gehen, Inspektion im Sitzen.", "isCorrect": false },
      { "text": "Inspektion wird von der Polizei durchgeführt, Walkthrough vom Team.", "isCorrect": false },
      { "text": "Walkthrough ist für Code, Inspektion für Dokumente.", "isCorrect": false }, // Beides geht für beides.
      { "text": "Pair Programming ist die formalste Art der Inspektion.", "isCorrect": false },
      { "text": "Reviews gibt es nur im Wasserfallmodell.", "isCorrect": false }
    ]
  },
  {
    "id": 8010,
    "chapter": 8,
    "text": "Wie verhalten sich die Kosten für Fehlerbehebung im Projektverlauf?",
    "image": null,
    "explanation": "Laut Skript (PDF 800, Folie 21): Exponentieller Anstieg. Fehler in Anforderung = Billig (Faktor 1). Fehler im Betrieb = Extrem teuer (Faktor 100-1000).",
    "answersPool": [
      { "text": "Die Kosten steigen exponentiell an: Je später ein Fehler gefunden wird (z.B. im Betrieb), desto teurer ist die Behebung.", "isCorrect": true },
      { "text": "Fehlerbehebung in der Anforderungsphase ist günstig (Faktor 1), im Betrieb extrem teuer (Faktor 100+).", "isCorrect": true },
      
      { "text": "Die Kosten bleiben über den gesamten Projektverlauf gleich.", "isCorrect": false },
      { "text": "Späte Fehler sind billiger zu beheben, da die Software dann fertig ist.", "isCorrect": false },
      { "text": "Fehler in der Anforderungsphase sind am teuersten.", "isCorrect": false }, // Gegenteil.
      { "text": "Kosten sinken, da die Entwickler Erfahrung sammeln.", "isCorrect": false },
      { "text": "Das hängt nur von der Programmiersprache ab.", "isCorrect": false }
    ]
  },
  // --- ERGÄNZUNG: Design Patterns & SOLID (Aus PDF Fragen 71-80) ---
  {
    "id": 5006,
    "chapter": 5,
    "text": "Szenario: Sie wollen eine Klasse dynamisch zur Laufzeit mit Zusatzfunktionen erweitern (Vererbung ist keine Option). Welches Pattern?",
    "image": null,
    "explanation": "Das Decorator-Pattern (Dekorierer) erlaubt es, Objekten dynamisch neue Zuständigkeiten hinzuzufügen, ohne die Klasse zu ändern. (Frage 71).",
    "answersPool": [
      { "text": "Decorator Pattern (Dekorierer).", "isCorrect": true },
      { "text": "Strategy Pattern.", "isCorrect": false },
      { "text": "Singleton Pattern.", "isCorrect": false },
      { "text": "Factory Pattern.", "isCorrect": false }
    ]
  },
  {
    "id": 5007,
    "chapter": 5,
    "text": "Wofür steht das Akronym SOLID?",
    "image": null,
    "explanation": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
    "answersPool": [
      { "text": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.", "isCorrect": true },
      { "text": "Simple Object, Linked Interface, Data, Integration.", "isCorrect": false },
      { "text": "Secure, Open, Local, Independent, Dynamic.", "isCorrect": false },
      { "text": "Software, Organization, Logic, Implementation, Design.", "isCorrect": false }
    ]
  },
  {
    "id": 5008,
    "chapter": 5,
    "text": "Was besagt das 'Single Responsibility Principle' (SRP)?",
    "image": null,
    "explanation": "Eine Klasse sollte nur einen einzigen Grund haben, sich zu ändern (nur eine Verantwortlichkeit). (Frage 79).",
    "answersPool": [
      { "text": "Eine Klasse sollte nur eine einzige Verantwortlichkeit haben (einen Grund zur Änderung).", "isCorrect": true },
      { "text": "Jede Klasse darf nur eine einzige Instanz haben.", "isCorrect": false }, // Singleton
      { "text": "Eine Klasse sollte nur eine einzige Methode haben.", "isCorrect": false },
      { "text": "Man sollte für jede Funktion ein eigenes Modul schreiben.", "isCorrect": false }
    ]
  },
  {
    "id": 5009,
    "chapter": 5,
    "text": "Was besagt das 'Liskov Substitution Principle' (LSP)?",
    "image": null,
    "explanation": "Objekte einer Basisklasse müssen durch Objekte ihrer abgeleiteten Klassen ersetzbar sein, ohne dass das Programm korrumpiert wird. (Frage 80).",
    "answersPool": [
      { "text": "Abgeleitete Klassen müssen sich so verhalten, dass sie ihre Basisklassen jederzeit ersetzen können (Verhaltenskompatibilität).", "isCorrect": true },
      { "text": "Man soll Klassen so benennen, dass sie leicht austauschbar sind.", "isCorrect": false },
      { "text": "Jede Klasse muss ein Interface implementieren.", "isCorrect": false },
      { "text": "Man darf niemals Vererbung verwenden.", "isCorrect": false }
    ]
  },

  // --- ERGÄNZUNG: Versionierung & Build (Aus PDF Fragen 85-108) ---
  {
    "id": 7006,
    "chapter": 7,
    "text": "Was ist ein 'Feature Branch' und welchen Vorteil bietet er?",
    "image": null,
    "explanation": "Entwicklung eines Features in einem isolierten Zweig. Vorteil: Hauptzweig (Main) bleibt stabil, Feature kann unabhängig getestet werden. (Frage 89/92).",
    "answersPool": [
      { "text": "Ein separater Zweig für ein neues Feature. Vorteil: Isolation vom Hauptcode (Main bleibt stabil) und parallele Entwicklung.", "isCorrect": true },
      { "text": "Ein spezieller Befehl in Git, um Features zu aktivieren.", "isCorrect": false },
      { "text": "Eine Kopie des Projekts auf einem USB-Stick.", "isCorrect": false },
      { "text": "Ein Branch, der nur für Bugfixes genutzt wird.", "isCorrect": false }
    ]
  },
  {
    "id": 7007,
    "chapter": 7,
    "text": "Szenario: Weltweit verteiltes Team, Offline-Arbeit essenziell. Welches Versionsverwaltungssystem wählen Sie?",
    "image": null,
    "explanation": "Dezentral (DVCS) wie Git. Grund: Jeder hat das volle Repo lokal, kann offline committen und History einsehen. (Frage 96).",
    "answersPool": [
      { "text": "Verteiltes System (z.B. Git). Grund: Volles lokales Repository ermöglicht Offline-Arbeit und Commits ohne Serververbindung.", "isCorrect": true },
      { "text": "Zentrales System (z.B. SVN). Grund: Bessere Kontrolle über den Server.", "isCorrect": false },
      { "text": "Dropbox. Grund: Einfachste Synchronisation.", "isCorrect": false },
      { "text": "Keines. Grund: Zu komplex.", "isCorrect": false }
    ]
  },
  {
    "id": 7008,
    "chapter": 7,
    "text": "Welche der folgenden Begriffe ist KEINE Phase im Standard Maven-Build-Lebenszyklus?",
    "image": null,
    "explanation": "Standard Phasen: validate, compile, test, package, verify, install, deploy. 'Collect' ist keine Phase. (Frage 104).",
    "answersPool": [
      { "text": "Collect", "isCorrect": true },
      { "text": "Compile", "isCorrect": false },
      { "text": "Test", "isCorrect": false },
      { "text": "Package", "isCorrect": false },
      { "text": "Install", "isCorrect": false }
    ]
  },
  {
    "id": 7009,
    "chapter": 7,
    "text": "Sie wollen aus Version '1.0.1-SNAPSHOT' ein Release '1.0.1' machen. Was bedeutet SNAPSHOT?",
    "image": null,
    "explanation": "SNAPSHOT kennzeichnet eine Entwicklungsversion, die sich noch ändern kann. Ein Release (ohne Snapshot) ist fest/final. (Frage 107).",
    "answersPool": [
      { "text": "SNAPSHOT kennzeichnet eine instabile Entwicklungsversion. Für das Release muss das Suffix '-SNAPSHOT' entfernt werden.", "isCorrect": true },
      { "text": "SNAPSHOT bedeutet, dass ein Foto vom Code gemacht wurde.", "isCorrect": false },
      { "text": "Es gibt keinen Unterschied, es ist nur ein Name.", "isCorrect": false },
      { "text": "SNAPSHOT Versionen sind schneller als Release Versionen.", "isCorrect": false }
    ]
  },

  // --- ERGÄNZUNG: Qualität & Metriken (Aus PDF Fragen 109-118) ---
  {
    "id": 8011,
    "chapter": 8,
    "text": "Nennen Sie zwei Verfahren, um systematisch Testdaten zu ermitteln.",
    "image": null,
    "explanation": "Äquivalenzklassenbildung (Werte gruppieren) und Grenzwertanalyse (Ränder testen). (Frage 82).",
    "answersPool": [
      { "text": "Äquivalenzklassenbildung und Grenzwertanalyse.", "isCorrect": true },
      { "text": "Raten und Würfeln.", "isCorrect": false },
      { "text": "Copy & Paste aus der Datenbank.", "isCorrect": false },
      { "text": "Unit-Test und Systemtest.", "isCorrect": false } // Das sind Teststufen, keine Daten-Ermittlungsverfahren
    ]
  },
  {
    "id": 8012,
    "chapter": 8,
    "text": "Was messe ich, wenn ich bei einer Klasse A die Anzahl der verwendeten anderen Klassen zähle?",
    "image": null,
    "explanation": "Das ist ein Maß für Koppelung (Coupling), spezifisch oft 'Fan-Out' oder 'Coupling Between Objects' (CBO). (Frage 117).",
    "answersPool": [
      { "text": "Die Koppelung (Coupling) der Klasse (z.B. CBO - Coupling Between Objects).", "isCorrect": true },
      { "text": "Die Kohäsion der Klasse.", "isCorrect": false },
      { "text": "Die Größe der Klasse in Zeilen (LOC).", "isCorrect": false },
      { "text": "Die Testabdeckung.", "isCorrect": false }
    ]
  },
  {
    "id": 8013,
    "chapter": 8,
    "text": "Nennen Sie eine negative Eigenschaft des Softwaremaßes 'Lines of Code' (LOC).",
    "image": null,
    "explanation": "LOC sagt nichts über Qualität oder Komplexität aus. Kann durch Formatierung manipuliert werden. Unterschiedliche Sprachen nicht vergleichbar. (Frage 118).",
    "answersPool": [
      { "text": "Sagt wenig über Qualität oder Komplexität aus; abhängig von Formatierung und Programmiersprache.", "isCorrect": true },
      { "text": "Es ist schwer automatisch zu messen.", "isCorrect": false }, // Falsch, ist sehr leicht zu messen
      { "text": "Es motiviert Entwickler, zu wenig Code zu schreiben.", "isCorrect": false },
      { "text": "Es gibt keine negative Eigenschaft.", "isCorrect": false }
    ]
  },

  // --- KAPITEL 9: Wahr oder Falsch? (Aus PDF Fragen 119-141) ---
  {
    "id": 9001,
    "chapter": 9,
    "text": "Wahr oder Falsch: Die Anzahl möglicher Kommunikationskanäle wächst linear mit der Anzahl der Projektbeteiligten.",
    "image": null,
    "explanation": "Falsch. Sie wächst quadratisch (n*(n-1)/2). Das ist der Grund für Kommunikationsprobleme in großen Teams. (Frage 119).",
    "answersPool": [
      { "text": "Falsch (wächst quadratisch).", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9002,
    "chapter": 9,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Begeisterungsanforderungen können fehlende Basisanforderungen ausgleichen.",
    "image": null,
    "explanation": "Falsch. Basisanforderungen sind 'Muss'-Kriterien. Wenn sie fehlen, ist der Kunde unzufrieden, egal wie toll die Extras sind (Kano-Modell). (Frage 121).",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9003,
    "chapter": 9,
    "text": "Wahr oder Falsch: Es ist sinnvoll, Architekturentscheidungen möglichst spät zu treffen.",
    "image": null,
    "explanation": "Wahr (im agilen Kontext 'Last Responsible Moment'), um Flexibilität zu wahren. ABER: Fundamentale Entscheidungen müssen früh stehen. Die PDF-Frage zielt oft auf 'Falsch' bei klassischer Lehre oder 'Wahr' bei moderner. Kontext: Architektur ist schwer zu ändern -> Früh. Details -> Spät. (Frage 129).",
    "answersPool": [
      { "text": "Falsch (Fundamentale Entscheidungen sollten früh stehen, da Änderungen teuer sind).", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9004,
    "chapter": 9,
    "text": "Wahr oder Falsch: Bei Story Points geht es um die Bestimmung relativer Größe mittels Schätzungen.",
    "image": null,
    "explanation": "Wahr. Story Points sind relative Maße, keine absoluten Stunden. (Frage 127).",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9005,
    "chapter": 9,
    "text": "Wahr oder Falsch: Wenn alle Klassen eine hohe Kohäsion haben, sinkt automatisch die Koppelung im System.",
    "image": null,
    "explanation": "Falsch. Man kann sehr kohärente Klassen haben, die trotzdem extrem stark miteinander verflochten (gekoppelt) sind. (Frage 133).",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9006,
    "chapter": 9,
    "text": "Wahr oder Falsch: White-Box-Testing und Smoke-Test lassen sich nicht kombinieren.",
    "image": null,
    "explanation": "Falsch. Ein Smoke-Test (Schnelltest) kann durchaus White-Box-Elemente enthalten oder automatisiert als Unit-Test laufen. (Frage 137).",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  // --- ERGÄNZUNG: Restliche Wahr/Falsch Fragen (Aus PDF Nr. 120-141) ---
  {
    "id": 9007,
    "chapter": 9,
    "text": "Wahr oder Falsch: Die Komplexität von Software wächst mehr als linear mit der Anzahl der beteiligten Menschen oder Elemente.",
    "image": null,
    "explanation": "Wahr. Durch die exponentiell steigenden Kommunikationsbeziehungen und Abhängigkeiten steigt die Komplexität überproportional.",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9008,
    "chapter": 9,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Leistungsanforderungen können fehlende Basisanforderungen ersetzen.",
    "image": null,
    "explanation": "Falsch. Basisanforderungen sind selbstverständlich. Wenn sie fehlen, ist der Kunde unzufrieden, egal wie gut die Leistungsmerkmale sind.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9009,
    "chapter": 9,
    "text": "Wahr oder Falsch: Fehler, die erst nach Auslieferung entdeckt werden, kosten in der Behebung ca. 2-5 mal mehr als im Entwurf.",
    "image": null,
    "explanation": "Falsch (zu niedrig geschätzt). Die Kosten sind oft um den Faktor 100 bis 1000 höher (exponentieller Anstieg), nicht nur 2-5 fach.",
    "answersPool": [
      { "text": "Falsch (Die Kosten sind oft um Faktor 100+ höher).", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9010,
    "chapter": 9,
    "text": "Wahr oder Falsch: Je mehr Leistungsanforderungen umgesetzt werden, umso zufriedener ist der Kunde (linearer Zusammenhang).",
    "image": null,
    "explanation": "Wahr. Im Kano-Modell sorgen Leistungsanforderungen für proportionale Zufriedenheit ('Mehr ist besser').",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9011,
    "chapter": 9,
    "text": "Wahr oder Falsch: Mit dem Architekturentwurf sollte immer erst begonnen werden, wenn die Anforderungserhebung zu 100% abgeschlossen ist.",
    "image": null,
    "explanation": "Falsch. In modernen/agilen Prozessen laufen Requirements und Architektur oft parallel oder iterativ (Twin Peaks Model).",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9012,
    "chapter": 9,
    "text": "Wahr oder Falsch: Es ist in jedem Fall sinnvoll, alle Architekturentscheidungen möglichst früh zu treffen.",
    "image": null,
    "explanation": "Falsch. Man sollte Entscheidungen so lange offen halten wie möglich ('Last Responsible Moment'), um flexibel zu bleiben, solange es nicht fundamentale Blocker sind.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9013,
    "chapter": 9,
    "text": "Wahr oder Falsch: Bestehende Systemdokumentation darf nicht aktualisiert werden, um die Historie zu wahren.",
    "image": null,
    "explanation": "Falsch. Veraltete Dokumentation ist nutzlos ('Documentation Rot'). Sie muss aktuell gehalten werden. Historie wird über Versionierung (Git) gewahrt.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9014,
    "chapter": 9,
    "text": "Wahr oder Falsch: Die Angabe von Abhängigkeiten (Dependencies) gehört bei Maven nicht zum Build-Prozess.",
    "image": null,
    "explanation": "Falsch. Dependency Management ist eine der Kernaufgaben von Maven und essenzieller Teil des Builds.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9015,
    "chapter": 9,
    "text": "Wahr oder Falsch: Bei Maven beschreibt man nicht Schritt für Schritt 'wie' gebaut wird, sondern deklarativ 'was' (Ziele/Phasen).",
    "image": null,
    "explanation": "Wahr. Maven nutzt 'Convention over Configuration' und deklarative Beschreibungen (pom.xml), im Gegensatz zu imperativen Skripten (Ant).",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9016,
    "chapter": 9,
    "text": "Wahr oder Falsch: Ein wesentliches Ziel von Architektur ist die Erhöhung der Komplexität der Aufgabe.",
    "image": null,
    "explanation": "Falsch. Ziel ist die REDUKTION und Beherrschbarkeit von Komplexität.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },

  // --- KAPITEL 10: Szenarien & Anwendungen (Aus PDF Ende) ---
  {
    "id": 10001,
    "chapter": 10,
    "text": "Klassifizieren Sie: 'Geplante Wartung soll normalerweise Sa/So 0-24 Uhr stattfinden.'",
    "image": null,
    "explanation": "Das ist eine nicht-funktionale Anforderung (Betriebsbedingung/Verfügbarkeit).",
    "answersPool": [
      { "text": "Nicht-funktionale Anforderung.", "isCorrect": true },
      { "text": "Funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10002,
    "chapter": 10,
    "text": "Klassifizieren Sie: 'System soll alle Bestellungen speichern (Datum, Name, Wert).'",
    "image": null,
    "explanation": "Das ist eine funktionale Anforderung (Was tut das System? Es speichert Daten).",
    "answersPool": [
      { "text": "Funktionale Anforderung.", "isCorrect": true },
      { "text": "Nicht-funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10003,
    "chapter": 10,
    "text": "Klassifizieren Sie: 'Das System soll ein relationales Datenbanksystem von der Liste geprüfter Systeme nutzen.'",
    "image": null,
    "explanation": "Nicht-funktionale Anforderung (Technische Randbedingung / Constraint).",
    "answersPool": [
      { "text": "Nicht-funktionale Anforderung (Randbedingung).", "isCorrect": true },
      { "text": "Funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10004,
    "chapter": 10,
    "text": "Bewerten Sie die Aussage eines Kollegen: 'Wir sollten alle Namen (Klassen/Variablen) nach einem einheitlichen Schema vergeben, an das sich jeder halten muss.'",
    "image": null,
    "explanation": "Zustimmung. Einheitliche Naming Conventions (Coding Standards) sind essenziell für Wartbarkeit und Lesbarkeit im Team (Clean Code).",
    "answersPool": [
      { "text": "Zustimmung. Coding Conventions erhöhen Lesbarkeit und Wartbarkeit massiv.", "isCorrect": true },
      { "text": "Ablehnung. Das schränkt die Kreativität ein.", "isCorrect": false }
    ]
  },
  {
    "id": 10005,
    "chapter": 10,
    "text": "Bewerten Sie die Aussage: 'Wortspiele bei Variablennamen lockern das Lesen auf und erhöhen die Verständlichkeit.'",
    "image": null,
    "explanation": "Ablehnung. Code muss professionell und eindeutig sein. 'Witzige' Namen verwirren und erschweren das Verständnis für Dritte.",
    "answersPool": [
      { "text": "Ablehnung. Code muss eindeutig und professionell sein; 'Witze' erzeugen Verwirrung.", "isCorrect": true },
      { "text": "Zustimmung. Spaß bei der Arbeit ist das Wichtigste.", "isCorrect": false }
    ]
  },
  {
    "id": 10006,
    "chapter": 10,
    "text": "Bewerten Sie die Aussage: 'Es ist zu viel Aufwand, Standards ständig zu überprüfen. Wir sind Profis, wir müssen auf Effizienz achten!'",
    "image": null,
    "explanation": "Ablehnung. Das Ignorieren von Standards führt zu Technischen Schulden ('Quick & Dirty'). Langfristig sinkt die Effizienz drastisch (Wartungsprobleme).",
    "answersPool": [
      { "text": "Ablehnung. Kurzfristige 'Effizienz' durch Ignorieren von Standards führt langfristig zu teuren Technischen Schulden.", "isCorrect": true },
      { "text": "Zustimmung. Geschwindigkeit ist wichtiger als Qualität.", "isCorrect": false }
    ]
  },
  // --- GAP CLOSER: Fehlende Details aus PDF (Nr. 90-140) ---
  {
    "id": 7010,
    "chapter": 7,
    "text": "Wozu dient der Befehl 'Check-out' in einem Versionsverwaltungssystem?",
    "image": null,
    "explanation": "Laut Skript (PDF 710): Kopiert eine bestimmte Version (Revision) aus dem Repository in den lokalen Arbeitsbereich (Working Copy), um sie zu bearbeiten.",
    "answersPool": [
      { "text": "Er kopiert eine bestimmte Version aus dem Repository in den lokalen Arbeitsbereich zur Bearbeitung.", "isCorrect": true },
      { "text": "Er sperrt die Datei für andere Benutzer.", "isCorrect": false },
      { "text": "Er lädt Änderungen zum Server hoch.", "isCorrect": false },
      { "text": "Er löscht den lokalen Arbeitsbereich.", "isCorrect": false }
    ]
  },
  {
    "id": 7011,
    "chapter": 7,
    "text": "Was ist ein Grund, weshalb Git gerne bei großen Open-Source-Projekten eingesetzt wird?",
    "image": null,
    "explanation": "Laut Skript (PDF 720): Dezentrale Struktur erlaubt vielen Entwicklern unabhängiges Arbeiten. Forks & Pull Requests erleichtern Beiträge externer Entwickler ohne Schreibrechte am Haupt-Repo.",
    "answersPool": [
      { "text": "Dezentrale Struktur und einfaches Branching/Merging erleichtern die Zusammenarbeit vieler unabhängiger Entwickler (Forks/Pull Requests).", "isCorrect": true },
      { "text": "Weil es von Microsoft entwickelt wurde und daher guten Support hat.", "isCorrect": false },
      { "text": "Weil es einen zentralen Server erzwingt, der alles kontrolliert.", "isCorrect": false },
      { "text": "Weil es keine Versionshistorie speichert und so Speicher spart.", "isCorrect": false }
    ]
  },
  {
    "id": 7012,
    "chapter": 7,
    "text": "Mit welchem 'Goal' muss man Maven aufrufen, um ein Paket zu erzeugen UND es im lokalen Repositorium abzulegen?",
    "image": null,
    "explanation": "Laut Skript (PDF 740, Folie 18): 'mvn install' führt alle Phasen durch (compile, test, package) und kopiert das Ergebnis ins lokale Repo (~/.m2).",
    "answersPool": [
      { "text": "install", "isCorrect": true },
      { "text": "package", "isCorrect": false }, // Erzeugt nur das Paket im target-Ordner
      { "text": "compile", "isCorrect": false },
      { "text": "deploy", "isCorrect": false } // Lädt es ins Remote Repo
    ]
  },
  {
    "id": 7013,
    "chapter": 7,
    "text": "Welches Maven-Goal rufen Sie auf, um alle Artefakte früherer Builds (z.B. target-Ordner) zu entfernen?",
    "image": null,
    "explanation": "Laut Skript (PDF 740): 'mvn clean' löscht das Build-Verzeichnis (target), um einen sauberen Neustart zu garantieren.",
    "answersPool": [
      { "text": "clean", "isCorrect": true },
      { "text": "delete", "isCorrect": false },
      { "text": "remove", "isCorrect": false },
      { "text": "reset", "isCorrect": false }
    ]
  },
  {
    "id": 7014,
    "chapter": 7,
    "text": "Wie ist ein 'Build-Prozess' definiert?",
    "image": null,
    "explanation": "Laut Skript (PDF 740): Der Weg vom Quellcode (Source) zur ausführbaren Software (Artefakt) durch Schritte wie Kompilieren, Testen, Paketieren.",
    "answersPool": [
      { "text": "Der automatisierte Ablauf, der aus Quellcode und Ressourcen eine ausführbare oder auslieferbare Software erstellt.", "isCorrect": true },
      { "text": "Das Schreiben des Quellcodes in der IDE.", "isCorrect": false },
      { "text": "Die Installation der Software beim Kunden.", "isCorrect": false },
      { "text": "Der Prozess der Anforderungserhebung.", "isCorrect": false }
    ]
  },
  {
    "id": 6004,
    "chapter": 6,
    "text": "Reicht eine integrierte Dokumentation (z.B. Javadoc) für ein Projekt aus? Begründen Sie.",
    "image": null,
    "explanation": "Laut Skript (PDF 700): Nein. Javadoc erklärt Klassen/Methoden (Mikro-Ebene), aber nicht die Architektur, Zusammenhänge oder Design-Entscheidungen (Makro-Ebene).",
    "answersPool": [
      { "text": "Nein. Sie dokumentiert nur Details (API), aber nicht die Architektur, Zusammenhänge oder Design-Entscheidungen.", "isCorrect": true },
      { "text": "Ja, der Code ist die beste Dokumentation und Javadoc reicht völlig.", "isCorrect": false },
      { "text": "Ja, solange sie automatisch generiert wird.", "isCorrect": false },
      { "text": "Nein, weil der Kunde kein Englisch kann.", "isCorrect": false }
    ]
  },
  {
    "id": 9017,
    "chapter": 9,
    "text": "Wahr oder Falsch: Wenige geschickt ausgewählte Leistungsanforderungen können mehrere Basisanforderungen ersetzen.",
    "image": null,
    "explanation": "Falsch (PDF Frage 122). Basisanforderungen sind Pflicht. Ohne sie ist das Produkt unbrauchbar, egal wie gut die Leistung ist.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9018,
    "chapter": 9,
    "text": "Wahr oder Falsch: Bei plangesteuerten Prozessen werden alle Aktivitäten vollständig vorweg geplant, bei agilen schrittweise.",
    "image": null,
    "explanation": "Wahr (PDF Frage 125). Das ist der Kernunterschied (Big Design Up Front vs. Rolling Wave Planning).",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9019,
    "chapter": 9,
    "text": "Wahr oder Falsch: Bei integrierter Dokumentation (Javadoc) fehlt oft die Dokumentation der Architektur.",
    "image": null,
    "explanation": "Wahr (PDF Frage 136). Code-Kommentare erklären das 'Was' und 'Wie' im Kleinen, aber selten das 'Warum' und die große Struktur.",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  {
    "id": 9020,
    "chapter": 9,
    "text": "Wahr oder Falsch: Wenn eine Klasse andere (von ihr abgeleitete) Klassen kennt, erhöht das die Koppelung und ist ein Strukturproblem.",
    "image": null,
    "explanation": "Wahr (PDF Frage 140). Eine Basisklasse sollte nie ihre Kinder kennen (Zyklische Abhängigkeit). Das verletzt das Open/Closed Principle.",
    "answersPool": [
      { "text": "Wahr.", "isCorrect": true },
      { "text": "Falsch.", "isCorrect": false }
    ]
  },
  // --- FINALER BLOCK: Die letzten fehlenden 14 Fragen (PDF Abgleich) ---

  // Fragen 4 & 5 (Ganz am Anfang oft übersehen)
  {
    "id": 1014,
    "chapter": 1,
    "text": "Warum gibt es Komplexität in der Software (Breite / Tiefe)?",
    "image": null,
    "explanation": "Laut Skript: Breite entsteht durch die Menge an Anforderungen/Funktionen. Tiefe entsteht durch die technische Schwierigkeit und Vernetzung (Logik).",
    "answersPool": [
      { "text": "Breite durch Menge der Funktionen (Vielzahl), Tiefe durch technische Schwierigkeit und Vernetzung (Detailgrad).", "isCorrect": true },
      { "text": "Breite durch die Größe des Teams, Tiefe durch die Dauer des Projekts.", "isCorrect": false },
      { "text": "Breite durch die Datenbank, Tiefe durch das Frontend.", "isCorrect": false },
      { "text": "Es gibt keine Komplexität in Software, nur komplizierte Programmierer.", "isCorrect": false }
    ]
  },
  {
    "id": 1015,
    "chapter": 1,
    "text": "Nennen Sie ein Beispiel für eine Methode oder ein Vorgehen, mit dem die Kohäsion verbessert werden kann.",
    "image": null,
    "explanation": "Laut Skript (Folie 76/77): Modularisierung nach fachlichen Aspekten, 'Separation of Concerns' (SoC), Aufteilung großer Klassen.",
    "answersPool": [
      { "text": "Anwendung von 'Separation of Concerns' (SoC) und Modularisierung nach fachlicher Zusammengehörigkeit.", "isCorrect": true },
      { "text": "Alles in eine einzige große Datei schreiben ('God Class').", "isCorrect": false },
      { "text": "Verwendung von globalen Variablen.", "isCorrect": false },
      { "text": "Verzicht auf Kommentare.", "isCorrect": false }
    ]
  },

  // Fragen 137-139 (Spezifische Wahr/Falsch Fragen am Ende)
  {
    "id": 9021,
    "chapter": 9,
    "text": "Wahr oder Falsch: White-Box-Testing und Smoke-Test lassen sich nicht kombinieren.",
    "image": null,
    "explanation": "Falsch (PDF Frage 137). Ein Smoke-Test (Schnelltest auf grundlegende Funktion) kann technisch durchaus als automatisierter White-Box-Unit-Test implementiert sein.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9022,
    "chapter": 9,
    "text": "Wahr oder Falsch: Die Angabe von Abhängigkeiten bei Maven gehört nicht zum Build-Prozess.",
    "image": null,
    "explanation": "Falsch (PDF Frage 138). Dependency Management ist ein Kernbestandteil des Maven-Build-Prozesses.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },
  {
    "id": 9023,
    "chapter": 9,
    "text": "Wahr oder Falsch: Ein wesentliches Ziel von Architektur ist die Erhöhung der Komplexität der Aufgabe.",
    "image": null,
    "explanation": "Falsch (PDF Frage 141). Das Ziel ist Management und Reduktion von Komplexität, nicht Erhöhung.",
    "answersPool": [
      { "text": "Falsch.", "isCorrect": true },
      { "text": "Wahr.", "isCorrect": false }
    ]
  },

  // --- DIE SZENARIEN (PDF Seite 6 - "Sonstiges") ---
  // Diese fehlen noch komplett und sind wichtig für Verständnis!
  {
    "id": 10007,
    "chapter": 10,
    "text": "Szenario-Klassifikation: 'Geplante Wartung soll normalerweise Sa/So 0-24 Uhr stattfinden.'",
    "image": null,
    "explanation": "Nicht-funktionale Anforderung (Wartbarkeit / Betriebszeit).",
    "answersPool": [
      { "text": "Nicht-funktionale Anforderung.", "isCorrect": true },
      { "text": "Funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10008,
    "chapter": 10,
    "text": "Szenario-Klassifikation: 'System soll alle Bestellungen speichern zusammen mit Datum, Name, Wert.'",
    "image": null,
    "explanation": "Funktionale Anforderung (Datenhaltung ist eine Funktion).",
    "answersPool": [
      { "text": "Funktionale Anforderung.", "isCorrect": true },
      { "text": "Nicht-funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10009,
    "chapter": 10,
    "text": "Szenario-Klassifikation: 'Das System soll ein relationales Datenbanksystem von der Liste geprüfter Systeme nutzen.'",
    "image": null,
    "explanation": "Nicht-funktionale Anforderung (Technische Randbedingung / Constraint).",
    "answersPool": [
      { "text": "Nicht-funktionale Anforderung (Randbedingung).", "isCorrect": true },
      { "text": "Funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10010,
    "chapter": 10,
    "text": "Szenario-Klassifikation: 'Das System soll zu einem Kunden eine Liste aller Verkäufe ausgeben (Datum, Artikel, Preis).'",
    "image": null,
    "explanation": "Funktionale Anforderung (Ausgabe/Bericht).",
    "answersPool": [
      { "text": "Funktionale Anforderung.", "isCorrect": true },
      { "text": "Nicht-funktionale Anforderung.", "isCorrect": false }
    ]
  },
  {
    "id": 10011,
    "chapter": 10,
    "text": "Kollegen-Aussage: 'Wir sollten alle Namen nach einem einheitlichen Schema vergeben, an das sich jeder halten muss.' - Zustimmen?",
    "image": null,
    "explanation": "Zustimmen. Einheitliche Konventionen (Naming Conventions) sind essenziell für Wartbarkeit.",
    "answersPool": [
      { "text": "Zustimmen.", "isCorrect": true },
      { "text": "Ablehnen.", "isCorrect": false }
    ]
  },
  {
    "id": 10012,
    "chapter": 10,
    "text": "Kollegen-Aussage: 'Gelegentliche Wortspiele bei Variablennamen lockern das Lesen auf.' - Zustimmen?",
    "image": null,
    "explanation": "Ablehnen. Code muss professionell, eindeutig und für jeden verständlich sein. Humor gehört in die Pause, nicht in den Code.",
    "answersPool": [
      { "text": "Ablehnen.", "isCorrect": true },
      { "text": "Zustimmen.", "isCorrect": false }
    ]
  },
  {
    "id": 10013,
    "chapter": 10,
    "text": "Kollegen-Aussage: 'Es ist zu viel Aufwand, Standards ständig zu überprüfen. Wir müssen auf Effizienz achten!' - Zustimmen?",
    "image": null,
    "explanation": "Ablehnen. Das Ignorieren von Standards erzeugt 'Technische Schulden'. Kurzfristig schneller, langfristig viel teurer und ineffizienter.",
    "answersPool": [
      { "text": "Ablehnen.", "isCorrect": true },
      { "text": "Zustimmen.", "isCorrect": false }
    ]
  }

]