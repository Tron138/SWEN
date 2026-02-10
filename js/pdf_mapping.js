const pdfMap = {
    // --- KAPITEL 1: EINFÜHRUNG & PRINZIPIEN (IDs 10xx) ---
    // Thema: Koppelung. Quelle: 150_Prinzipien, Folie 68
    1001: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 68 },
    // Thema: Kapselung. Quelle: 150_Prinzipien, Folie 67
    1002: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 67 },
    // Thema: Kohäsion. Quelle: 150_Prinzipien, Folie 76
    1003: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 74 },
    // Thema: Komplexität Breite/Tiefe. Quelle: 100_Einführung, Folie 37/38
    1004: { file: "100_SWEN_V25.2_Einführung.pdf", page: 12 },
    // Thema: Separation of Concerns (SoC). Quelle: 150_Prinzipien, Folie 77
    1005: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 75 },
    // Thema: Fundamentale Prinzipien (Liste). Quelle: 150_Prinzipien, Folie 61/62
    1006: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 47 },
    // Thema: Abstraktion. Quelle: 150_Prinzipien, Folie 63
    1007: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 48 },
    // Thema: Niedrige Kohäsion. Quelle: 150_Prinzipien, Folie 76
    1008: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 74 },
    // ID 1009 (Zuverlässigkeit Berechnung) wurde in den vorliegenden PDFs nicht als Textstelle gefunden (evtl. in einem QS-Skript).
    // Thema: Ziel Verhältnis Koppelung/Kohäsion. Quelle: 150_Prinzipien, Folie 66
    1010: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 66 },
    // Thema: Zweck Modularisierung. Quelle: 150_Prinzipien, Folie 66
    1011: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 65 },
    // Thema: Definition SoC. Quelle: 150_Prinzipien, Folie 77
    1012: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 75 },
    // Thema: Faktoren Koppelung. Quelle: 150_Prinzipien, Folie 69
    1013: { file: "150_SWEN_SS22_Prinzipien_des_SE.pdf", page: 69 },

    // --- KAPITEL 2: PROZESSMODELLE (IDs 20xx) ---
    // Thema: Definition Softwareprozess. Quelle: 300_Prozessmodelle, Folie 98
    2001: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 7 },
    // Thema: Definition Prozessmodell. Quelle: 300_Prozessmodelle, Folie 99
    2002: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 8 },
    // Thema: Scrum Meetings Sprint Backlog. Quelle: 300_Prozessmodelle, Folie 141
    2003: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 43 },
    // Thema: Plangesteuert vs Agil. Quelle: 300_Prozessmodelle, Folie 102
    2004: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 11 },
    // Thema: Code-and-Fix. Quelle: 300_Prozessmodelle, Folie 103
    2005: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 12 },
    // Thema: Vorteile Agil (Flexibilität/Feedback). Quelle: 300_Prozessmodelle, Folie 102/111
    2006: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 11 },
    // Thema: Iterativ vs Inkrementell. Quelle: 300_Prozessmodelle, Folie 117
    2007: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 25 },
    // Thema: Vorteil iterativ-inkrementell. Quelle: 300_Prozessmodelle, Folie 111
    2008: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 20 },
    // Thema: Scrum Rollen. Quelle: 300_Prozessmodelle, Folie 137
    2009: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 39 },
    // Thema: Sprint Planning Meeting. Quelle: 300_Prozessmodelle, Folie 141
    2010: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 43 },
    // Thema: Product vs Sprint Backlog. Quelle: 300_Prozessmodelle, Folie 148/151
    2011: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 51 },
    // Thema: Time-boxed. Quelle: 300_Prozessmodelle, Folie 116
    2012: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 24 },
    // Thema: Szenario Start-Up (Agil Eignung). Quelle: 300_Prozessmodelle, Folie 112 (Impliziert)
    2013: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 21 },
    // Thema: Szenario Airbag (Wasserfall/V-Modell Eignung). Quelle: 300_Prozessmodelle, Folie 108 (Impliziert)
    2014: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 17 },
    // Thema: Definition of Done. Quelle: 300_Prozessmodelle, Folie 157
    2015: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 53 },
    
    // --- WEITERE BEISPIELE AUS DEINER DATEI (IDs 100xx) ---
    // Thema: Szenario Klassifikation (Funktionale Anf.). Quelle: 400_Anforderungen, Folie 174
    10010: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 12 },
    // Thema: Naming Conventions (DoD/Wartbarkeit). Quelle: 300_Prozessmodelle, Folie 157 (Kontext DoD)
    10011: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 53 },
    // Thema: Wortspiele (Ablehnen, Professionalität). (Indirekt in 150 bei "Verständlichkeit" oder 300 DoD)
    // ID 10012 konnte in den Snippets nicht exakt als Text gefunden werden, wird daher ausgelassen um Raten zu vermeiden.
    // --- KAPITEL 4: ARCHITEKTUR (IDs 4xxx) ---
    // Thema: Architektur vs. Entwurf ("All architecture is design..."). Quelle: 600_Entwurf, Folie 522
    4001: { file: "600_SWEN_23.1_Entwurf.pdf", page: 6 },
    // Thema: Golden Rule (Koppelung/Kohäsion). Quelle: 510_Golden_WI-Burger, Zusammenfassung Folie 468
    4002: { file: "510_SWEN_23.1_Architektur_Golden_WI-Burger.pdf", page: 49 },
    // Thema: Vorteile Schichtenmodell. Quelle: 520_Architekturmuster, Folie 484/486
    4003: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 12 },
    // Thema: Repository Muster. Quelle: 520_Architekturmuster, Folie 497
    4004: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 24 },
    // Thema: MVC Muster. Quelle: 520_Architekturmuster, Folie 492
    4005: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 19 },
    // Thema: Vorteile MVC. Quelle: 520_Architekturmuster, Folie 496 (Tabelle)
    4006: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 24 },
    // Thema: Logische vs Physische Sicht. Quelle: 500_Architektur_Einführung, Folie 410
    4007: { file: "500_SWEN_23.1_Architektur_Einführung.pdf", page: 39 },
    // Thema: Definition Entwurfsmuster. Quelle: 610_Entwurfsmuster, Folie 593
    4008: { file: "610_SWEN_25.2_Entwurfsmuster.pdf", page: 4 },
    // Thema: Beispiele Architekturstile. Quelle: 520_Architekturmuster, Folie 476
    4009: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 4 },
    // Thema: Prinzip Schichtenarchitektur. Quelle: 520_Architekturmuster, Folie 484
    4010: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 12 },
    // Thema: Repository Architektur. Quelle: 520_Architekturmuster, Folie 499 (Tabelle)
    4012: { file: "520_SWEN_23.1_Architekturmuster.pdf", page: 27 },
    // Thema: Wann Architektur festlegen? (Früh/Fundament). Quelle: 500_Architektur_Einführung, Folie 411/412
    4013: { file: "500_SWEN_23.1_Architektur_Einführung.pdf", page: 40 },

    // --- KAPITEL 5: ENTWURFSMUSTER & PRINZIPIEN (IDs 5xxx) ---
    // Thema: Definition Design Pattern. Quelle: 610_Entwurfsmuster, Folie 593
    5001: { file: "610_SWEN_25.2_Entwurfsmuster.pdf", page: 4 },
    // Thema: Observer Pattern. Quelle: 610_Entwurfsmuster, Folie 615
    5004: { file: "610_SWEN_25.2_Entwurfsmuster.pdf", page: 24 },
    // Thema: Decorator Pattern. Quelle: 610_Entwurfsmuster, Folie 610
    5006: { file: "610_SWEN_25.2_Entwurfsmuster.pdf", page: 21 },
    // Thema: SOLID Akronym. Quelle: 600_Entwurf, Folie 544
    5007: { file: "600_SWEN_23.1_Entwurf.pdf", page: 28 },
    // Thema: SRP (Single Responsibility). Quelle: 600_Entwurf, Folie 547
    5008: { file: "600_SWEN_23.1_Entwurf.pdf", page: 31 },
    // Thema: LSP (Liskov Substitution). Quelle: 600_Entwurf, Folie 558
    5009: { file: "600_SWEN_23.1_Entwurf.pdf", page: 42 },

    // --- WAHR/FALSCH FRAGEN (IDs 9xxx) ---
    // Thema: Architekturentscheidungen möglichst spät? (Falsch, Fundament früh). Quelle: 600_Entwurf, Folie 522 ("Signifikant = schwer zu ändern")
    9003: { file: "600_SWEN_23.1_Entwurf.pdf", page: 6 },
    // Thema: Ziel Architektur Erhöhung Komplexität? (Falsch, Reduktion). Quelle: 500_Architektur_Einführung, Folie 390
    9016: { file: "500_SWEN_23.1_Architektur_Einführung.pdf", page: 14 },
    // Thema: Klasse kennt abgeleitete Klassen (Zyklisch/Schlecht). Quelle: 600_Entwurf, Folie 538 (Vererbungsprobleme)
    9020: { file: "600_SWEN_23.1_Entwurf.pdf", page: 36 },
    // Thema: Ziel Architektur Erhöhung Komplexität? (Wiederholung).
    9023: { file: "500_SWEN_23.1_Architektur_Einführung.pdf", page: 14 },
    6001: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 19 },
    // Thema: Coding Conventions (Wozu?). Quelle: 700_Implementierung, Folie 12
    6002: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 12 },
    // Thema: Technical Debt (Technische Schulden). Quelle: 700_Implementierung, Folie 25
    6003: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },
    // Thema: Javadoc vs. Architektur-Doku. Quelle: 700_Implementierung, Folie 25 (Kontext Dokumentation)
    6004: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },

    // --- KAPITEL 7: VERSIONSVERWALTUNG & BUILD (IDs 7xxx) ---
    // Thema: Zentral (CVCS) vs. Verteilt (DVCS). Quelle: 710_Versionsverwaltung_Einführung, Folie 12
    7001: { file: "710_SWEN_23.1_Versionsverwaltung_Einführung.pdf", page: 12 },
    // Thema: Lock-Modify-Unlock vs. Copy-Modify-Merge. Quelle: 710_Versionsverwaltung_Einführung, Folie 6-8
    7002: { file: "710_SWEN_23.1_Versionsverwaltung_Einführung.pdf", page: 6 },
    // Thema: Git Befehle (commit, push, pull). Quelle: 720_Versionsverwaltung_mit_Git, Folie 36 (und Einführung)
    7003: { file: "720_SWEN_23.1_Versionsverwaltung_mit_Git.pdf", page: 36 },
    // Thema: Build Management (Definition). Quelle: 740_Buildmanagement, Folie 7
    7004: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 7 },
    // Thema: Continuous Integration (CI). Quelle: 740_Buildmanagement, Folie 27
    7005: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 27 },
    // Thema: Feature Branch (Vorteil). Quelle: 720_Versionsverwaltung_mit_Git (Kontext Branching)
    7006: { file: "720_SWEN_23.1_Versionsverwaltung_mit_Git.pdf", page: 19 },
    // Thema: Verteiltes System (Offline Arbeit). Quelle: 710_Versionsverwaltung_Einführung, Folie 17
    7007: { file: "710_SWEN_23.1_Versionsverwaltung_Einführung.pdf", page: 17 },
    // Thema: Maven Phasen (Lifecycle). Quelle: 740_Buildmanagement, Folie 16/17
    7008: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 16 },
    // Thema: SNAPSHOT Bedeutung. Quelle: 740_Buildmanagement, Folie 26
    7009: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 26 },
    // Thema: Check-out Befehl. Quelle: 710_Versionsverwaltung_Einführung, Folie 19
    7010: { file: "710_SWEN_23.1_Versionsverwaltung_Einführung.pdf", page: 19 },
    // Thema: Git bei Open Source (Forks/Pull Requests). Quelle: 720_Versionsverwaltung_mit_Git, Folie 42
    7011: { file: "720_SWEN_23.1_Versionsverwaltung_mit_Git.pdf", page: 42 },
    // Thema: mvn install (lokales Repo). Quelle: 740_Buildmanagement, Folie 18
    7012: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 18 },
    // Thema: mvn clean (Target löschen). Quelle: 740_Buildmanagement, Folie 17
    7013: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 17 },
    // Thema: Definition Build-Prozess. Quelle: 740_Buildmanagement, Folie 7
    7014: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 7 },

    // --- KAPITEL 8: QUALITÄT & TESTEN (IDs 8xxx) ---
    // Thema: Konstruktive vs. Analytische QS. Quelle: 800_Qualität_Teil_1, Folie 13/14
    8001: { file: "800_SWEN_23.1_Softwarequalität_Teil_1.pdf", page: 13 },
    // Thema: Verifikation vs. Validierung. Quelle: 810_Qualität_Teil_2, Folie 5
    8002: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 5 },
    // Thema: 7 Grundsätze des Testens. Quelle: 810_Qualität_Teil_2, Folie 12
    8003: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 12 },
    // Thema: Statisch vs. Dynamisch. Quelle: 810_Qualität_Teil_2, Folie 14
    8004: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 14 },
    // Thema: Teststufen (V-Modell). Quelle: 810_Qualität_Teil_2, Folie 26
    8005: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 26 },
    // Thema: Black-Box vs. White-Box. Quelle: 810_Qualität_Teil_2, Folie 34/38
    8006: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 34 },
    // Thema: ISO 25010 (Qualitätsmodell). Quelle: 800_Qualität_Teil_1, Folie 30-34
    8007: { file: "800_SWEN_23.1_Softwarequalität_Teil_1.pdf", page: 30 },
    // Thema: Regressionstest. Quelle: 810_Qualität_Teil_2, Folie 17
    8008: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 17 },
    // Thema: Reviews (Walkthrough/Inspektion). Quelle: 810_Qualität_Teil_2, Folie 15 (oder Kontext statische Tests)
    // Anmerkung: Detaillierte Reviews sind oft in einem eigenen Kapitel (820), das hier fehlt, aber 810 erwähnt statische Tests.
    8009: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 14 }, 
    // Thema: Kosten Fehlerbehebung (Exponentiell). Quelle: 800_Qualität_Teil_1, Folie 21
    8010: { file: "800_SWEN_23.1_Softwarequalität_Teil_1.pdf", page: 21 },
    // Thema: Testdaten (Äquivalenz/Grenzwert). Quelle: 810_Qualität_Teil_2, Folie 35
    8011: { file: "810_SWEN_23.1_Softwarequalität_Teil_2.pdf", page: 35 },
    // Thema: Koppelung Messung (Fan-Out). Quelle: 800_Qualität_Teil_1, Folie 49/50
    8012: { file: "800_SWEN_23.1_Softwarequalität_Teil_1.pdf", page: 49 },
    // Thema: LOC (Lines of Code) Kritik. Quelle: 800_Qualität_Teil_1, Folie 47
    8013: { file: "800_SWEN_23.1_Softwarequalität_Teil_1.pdf", page: 47 },

    // --- WAHR/FALSCH & SZENARIEN (IDs 9xxx, 10xxx) ---
    // Thema: Dokumentation veraltet (Rot). Quelle: 700_Implementierung, Folie 25
    9013: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },
    // Thema: Maven Dependencies Teil des Builds. Quelle: 740_Buildmanagement, Folie 19
    9014: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 19 },
    // Thema: Maven deklarativ (pom.xml). Quelle: 740_Buildmanagement, Folie 10
    9015: { file: "740_SWEN_23.1_Buildmanagement.pdf", page: 10 },
    // Thema: Javadoc fehlt Architektur. Quelle: 700_Implementierung, Folie 25
    9019: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },
    // Thema: Naming Conventions Zustimmung. Quelle: 700_Implementierung, Folie 12
    10004: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 12 },
    // Thema: Wortspiele Ablehnung. Quelle: 700_Implementierung, Folie 13 (Clean Code Regeln)
    10005: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 13 },
    // Thema: Standards vs Effizienz (Tech Debt). Quelle: 700_Implementierung, Folie 25
    10006: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },
    // Wiederholung der Szenarien
    10011: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 12 },
    10012: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 13 },
    10013: { file: "700_SWEN_23.1_Implementierung_Einführung.pdf", page: 25 },
    3001: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 23 },
    // Thema: Definition Stakeholder. Quelle: 400_Anforderungen_klassisch, Folie 186
    3004: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 24 },
    // Thema: Definition User Story (3 Cs). Quelle: 410_Anforderungen_agil, Folie 220/221
    3005: { file: "410_SWEN_23.1_Anforderungsmanagement_agil.pdf", page: 6 },
    // Thema: 3 Cs (Card, Conversation, Confirmation). Quelle: 410_Anforderungen_agil, Folie 221
    3008: { file: "410_SWEN_23.1_Anforderungsmanagement_agil.pdf", page: 7 },
    // Thema: Satzschablone User Story (As a... I want...). Quelle: 410_Anforderungen_agil, Folie 222
    3007: { file: "410_SWEN_23.1_Anforderungsmanagement_agil.pdf", page: 8 },
    // Thema: INVEST Kriterien. Quelle: 410_Anforderungen_agil, Folie 225
    3012: { file: "410_SWEN_23.1_Anforderungsmanagement_agil.pdf", page: 12 },
    // Thema: Kano-Modell (Basis-, Leistungs-, Begeisterungsfaktoren). Quelle: 420_Kano, Folie 232/233
    3006: { file: "420_SWEN_23.1_Kano-Modell.pdf", page: 4 },
    // Thema: Kano Fragebogen (Funktional/Dysfunktional). Quelle: 420_Kano, Folie 238
    3013: { file: "420_SWEN_23.1_Kano-Modell.pdf", page: 10 },
    
    // --- KAPITEL 3b: SCHÄTZEN (IDs 30xx fortgesetzt) ---
    // Thema: Story Points Definition. Quelle: 450_Schätzen_agil, Folie 359
    3009: { file: "450_SWEN_23.1_Schätzen_agil.pdf", page: 13 },
    // Thema: Planning Poker Ablauf. Quelle: 450_Schätzen_agil, Folie 361-363
    3010: { file: "450_SWEN_23.1_Schätzen_agil.pdf", page: 15 },
    // Thema: Schätzregeln (Regel 2: Wozu?, Regel 4: Zuerst messen). Quelle: 430_Schätzen_Einführung, Folie 302/309
    3014: { file: "430_SWEN_23.1_Schätzen_Einführung.pdf", page: 16 }, // und Seite 23
    // Thema: Delphi-Verfahren (Expertenschätzung). Quelle: 440_Schätzen_klassisch, Folie 336
    3015: { file: "440_SWEN_23.1_Schätzen_klassisch.pdf", page: 8 },
    // Thema: Function-Point-Verfahren. Quelle: 440_Schätzen_klassisch, Folie 338/343
    3016: { file: "440_SWEN_23.1_Schätzen_klassisch.pdf", page: 10 },
    // Thema: Schätzregel 1 (Spanne statt Einzelwert). Quelle: 430_Schätzen_Einführung, Folie 297
    3017: { file: "430_SWEN_23.1_Schätzen_Einführung.pdf", page: 11 },

    // --- ERGÄNZUNGEN PROZESSMODELLE (IDs 20xx) ---
    // Thema: Scrum Master (Rolle). Quelle: 300_Prozessmodelle, Folie 136
    2016: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 35 },
    // Thema: Product Owner (Rolle). Quelle: 300_Prozessmodelle, Folie 136
    2017: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 35 },
    // Thema: Sprint Backlog (Artefakt). Quelle: 300_Prozessmodelle, Folie 151/152
    2018: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 46 },
    // Thema: Burndown Chart. Quelle: 300_Prozessmodelle, Folie 155
    2019: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 54 },
    // Thema: Daily Scrum (3 Fragen). Quelle: 300_Prozessmodelle, Folie 144/145
    2021: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 43 },
    // Thema: Sprint Retrospective. Quelle: 300_Prozessmodelle, Folie 143
    2023: { file: "300_SWEN_23.1_Softwareprozessmodelle.pdf", page: 42 },

    // --- ERGÄNZUNGEN WAHR/FALSCH (IDs 9xxx) ---
    // Thema: Kommunikationskanäle (n*(n-1)/2). (Indirekt in 300 Teamgröße oder 450 Planning Poker Diskurs)
    // ID 9001: Konnte in den Texten nicht explizit als Formel gefunden werden, wird aber oft in Scrum/Teams (300) behandelt.
    // Thema: Tretmühle des Glücks (Kano). Quelle: 420_Kano, Folie 237
    9002: { file: "420_SWEN_23.1_Kano-Modell.pdf", page: 9 },
    // Thema: Story Points relative Größe. Quelle: 450_Schätzen_agil, Folie 352
    9004: { file: "450_SWEN_23.1_Schätzen_agil.pdf", page: 7 },
    // Thema: Leistungsanforderungen linear. Quelle: 420_Kano, Folie 233
    9008: { file: "420_SWEN_23.1_Kano-Modell.pdf", page: 5 },
    
    // --- SZENARIEN (IDs 10xxx) ---
    // Thema: Szenario Downtime (Nicht-funktional). Quelle: 400_Anforderungen_klassisch, Folie 178
    10001: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 16 },
    // Thema: Szenario Liste Patienten (Funktional). Quelle: 400_Anforderungen_klassisch, Folie 175
    10003: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 13 },
    // Thema: Szenario Wartbarkeit (Nicht-funktional). Quelle: 400_Anforderungen_klassisch, Folie 176
    10007: { file: "400_SWEN_23.1_Anforderungsmanagement_klassisch.pdf", page: 14 },

    // --- NEUE DATEIEN (IDs 8xxx Ergänzungen) ---
    // Thema: Zyklomatische Komplexität (McCabe). Quelle: 820_Anhang_Qualität, Folie 962
    // Falls eine Frage dazu existiert (z.B. ID 8014 o.ä.), gehört sie hierher.
    8014: { file: "820_SWEN_23.1_Anhang_Softwarequalität.pdf", page: 4 },
    // Thema: Heuristiken (Flaschenhalsklassen). Quelle: 820_Anhang_Qualität, Folie 974
    8015: { file: "820_SWEN_23.1_Anhang_Softwarequalität.pdf", page: 16 },
    
    // --- GIT PRAXIS (IDs 11xx) ---
    // Falls Fragen zur Bedienung von IntelliJ Git existieren:
    1101: { file: "1100_SWEN_Anhang_Git_in_IntelliJ.pdf", page: 14 } // Zugriff auf Git-Befehle
};