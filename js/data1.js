/* Module 1-4 : Regelungstechnik, Medizinische Grundlagen 1, Physik diagnostischer Verfahren, Elektronik */
MODULES.push({
  id: 'regelung', code: '930000', emoji: '🎛️', color: '#0f766e',
  title: L(`Steuerungs- und Regelungstechnik`, `Technique de commande et de régulation`, `Control and Feedback Engineering`),
  chapters: [
    {
      id: 'rt1', title: L(`Steuerung und Regelung`, `Commande (boucle ouverte) et régulation`, `Open-loop control vs. closed-loop control`),
      body: L(
        `<p><b>Steuerung</b> (open loop): offene Wirkungskette – die Ausgangsgröße wird <i>nicht</i> zurückgemeldet. Störungen werden nicht ausgeglichen.</p>
<p><b>Regelung</b> (closed loop): geschlossener Wirkungskreis – die <b>Regelgröße y</b> (Istwert) wird gemessen und mit der <b>Führungsgröße w</b> (Sollwert) verglichen.</p>
<ul><li>Regeldifferenz: <b>e = w − y</b></li><li>Regler → <b>Stellgröße u</b> → Stellglied → Strecke</li><li><b>Störgröße d</b> wirkt auf die Strecke</li><li>Gegenkopplung (negative Rückkopplung) stabilisiert; Mitkopplung kann instabil machen</li></ul>
<p>Beispiele: Ampel mit festem Zeitplan = Steuerung · Thermostat, Körpertemperatur, Insulinpumpe im Closed-Loop-Betrieb (Blutzucker), Beatmungsgerät mit Druckregelung = Regelung.</p>`,
        `<p><b>Commande</b> (boucle ouverte) : chaîne d'action ouverte – la sortie n'est <i>pas</i> renvoyée. Les perturbations ne sont pas compensées.</p>
<p><b>Régulation</b> (boucle fermée) : la <b>grandeur réglée y</b> (valeur réelle) est mesurée et comparée à la <b>consigne w</b>.</p>
<ul><li>Écart : <b>e = w − y</b></li><li>Régulateur → <b>grandeur de commande u</b> → actionneur → processus (« Strecke »)</li><li>La <b>perturbation d</b> agit sur le processus</li><li>La contre-réaction (rétroaction négative) stabilise ; la rétroaction positive peut déstabiliser</li></ul>
<p>Exemples : feu tricolore à horaire fixe = commande · thermostat, température corporelle, pompe à insuline en boucle fermée, respirateur avec régulation de pression = régulation.</p>`,
        `<p><b>Open-loop control</b> (Steuerung): the output is <i>not</i> fed back, so disturbances are not compensated.</p>
<p><b>Closed-loop control</b> (Regelung): the <b>controlled variable y</b> (actual value) is measured and compared with the <b>reference w</b> (setpoint).</p>
<ul><li>Error: <b>e = w − y</b></li><li>Controller → <b>manipulated variable u</b> → actuator → plant (“Strecke”)</li><li>The <b>disturbance d</b> acts on the plant</li><li>Negative feedback stabilises; positive feedback can destabilise</li></ul>
<p>Examples: traffic light on a fixed timer = open loop · thermostat, body temperature, closed-loop insulin pump, ventilator with pressure control = closed loop.</p>`),
      quiz: [
        { q: L(`Welche Größe wird im Regelkreis zurückgeführt und mit dem Sollwert verglichen?`, `Quelle grandeur est renvoyée et comparée à la consigne dans une boucle de régulation ?`, `Which quantity is fed back and compared with the setpoint in a control loop?`),
          o: [`Regelgröße y (Istwert)`, `Störgröße d`, `Stellgröße u`, `Führungsgröße w`], a: 0,
          e: L(`Die Regelgröße y wird gemessen und mit w verglichen.`, `La grandeur réglée y est mesurée et comparée à w.`, `The controlled variable y is measured and compared with w.`) },
        { q: L(`Eine Ampel mit fester Zeitschaltung ist …`, `Un feu tricolore à minuterie fixe est …`, `A traffic light on a fixed timer is …`),
          o: [L(`eine Steuerung`, `une commande (boucle ouverte)`, `an open-loop control`), L(`eine Regelung`, `une régulation`, `a closed-loop control`)], a: 0,
          e: L(`Es gibt keine Rückmeldung des Verkehrs → Steuerung.`, `Aucun retour du trafic → commande en boucle ouverte.`, `There is no feedback from the traffic → open loop.`) },
        { q: L(`Wie lautet die Regeldifferenz?`, `Quelle est l'expression de l'écart de régulation ?`, `What is the control error?`),
          o: [`e = w − y`, `e = y − w`, `e = u − d`, `e = w + y`], a: 0,
          e: L(`Sollwert minus Istwert.`, `Consigne moins valeur réelle.`, `Setpoint minus actual value.`) }
      ]
    },
    {
      id: 'rt2', title: L(`PID-Regler und PT1-Glied`, `Régulateur PID et élément PT1`, `PID controller and first-order lag (PT1)`),
      body: L(
        `<ul><li><b>P-Anteil:</b> u = K<sub>P</sub>·e – schnell, aber bleibende Regelabweichung</li><li><b>I-Anteil:</b> u = K<sub>I</sub>·∫e dt – beseitigt bleibende Abweichung, kann zum Schwingen führen</li><li><b>D-Anteil:</b> u = K<sub>D</sub>·de/dt – dämpft, reagiert auf die Änderungsgeschwindigkeit, rauschempfindlich</li></ul>
<p><b>PT1-Glied</b> (Verzögerung 1. Ordnung): G(s) = K / (1 + T·s). Sprungantwort: y(t) = K·(1 − e<sup>−t/T</sup>). Nach t = T sind <b>63,2 %</b> des Endwerts erreicht, nach 3T ≈ 95 %, nach 5T ≈ 99 %.</p>
<p>Übertragungsfunktion = Laplace-Transformierte Ausgang / Eingang (bei Anfangswerten 0). Ein Regelkreis ist stabil, wenn alle Pole links der imaginären Achse liegen.</p>`,
        `<ul><li><b>Action P :</b> u = K<sub>P</sub>·e – rapide, mais écart statique résiduel</li><li><b>Action I :</b> u = K<sub>I</sub>·∫e dt – supprime l'écart statique, peut provoquer des oscillations</li><li><b>Action D :</b> u = K<sub>D</sub>·de/dt – amortit, réagit à la vitesse de variation, sensible au bruit</li></ul>
<p><b>Élément PT1</b> (retard du 1<sup>er</sup> ordre) : G(s) = K / (1 + T·s). Réponse indicielle : y(t) = K·(1 − e<sup>−t/T</sup>). À t = T, <b>63,2 %</b> de la valeur finale ; à 3T ≈ 95 % ; à 5T ≈ 99 %.</p>
<p>Fonction de transfert = transformée de Laplace sortie / entrée (conditions initiales nulles). La boucle est stable si tous les pôles sont dans le demi-plan gauche.</p>`,
        `<ul><li><b>P term:</b> u = K<sub>P</sub>·e – fast, but leaves a steady-state error</li><li><b>I term:</b> u = K<sub>I</sub>·∫e dt – removes the steady-state error, may cause oscillation</li><li><b>D term:</b> u = K<sub>D</sub>·de/dt – damps, reacts to the rate of change, noise-sensitive</li></ul>
<p><b>PT1 element</b> (first-order lag): G(s) = K / (1 + T·s). Step response: y(t) = K·(1 − e<sup>−t/T</sup>). At t = T it reaches <b>63.2 %</b> of the final value, at 3T ≈ 95 %, at 5T ≈ 99 %.</p>
<p>Transfer function = Laplace transform of output / input (zero initial conditions). A loop is stable if all poles lie in the left half-plane.</p>`),
      quiz: [
        { q: L(`Welcher Anteil beseitigt die bleibende Regelabweichung?`, `Quelle action supprime l'écart statique ?`, `Which term removes the steady-state error?`),
          o: [`P-Anteil`, `I-Anteil`, `D-Anteil`, `Keiner / None`], a: 1,
          e: L(`Der Integrierer summiert den Fehler auf, bis e = 0.`, `L'intégrateur accumule l'erreur jusqu'à e = 0.`, `The integrator accumulates the error until e = 0.`) },
        { q: L(`PT1-Glied mit T = 2 s: Wie viel vom Endwert ist nach t = 2 s erreicht?`, `Élément PT1 avec T = 2 s : quelle part de la valeur finale à t = 2 s ?`, `PT1 element with T = 2 s: how much of the final value is reached at t = 2 s?`),
          o: [`37 %`, `50 %`, `63 %`, `100 %`], a: 2,
          e: L(`1 − e⁻¹ ≈ 0,632.`, `1 − e⁻¹ ≈ 0,632.`, `1 − e⁻¹ ≈ 0.632.`) },
        { q: L(`Der D-Anteil reagiert auf …`, `L'action D réagit à …`, `The D term reacts to …`),
          o: [L(`die Änderungsgeschwindigkeit der Regeldifferenz`, `la vitesse de variation de l'écart`, `the rate of change of the error`), L(`die Höhe der Regeldifferenz`, `l'amplitude de l'écart`, `the magnitude of the error`), L(`die Summe vergangener Fehler`, `la somme des erreurs passées`, `the accumulated past error`)], a: 0,
          e: L(`D = Differenzierer: de/dt.`, `D = dérivation : de/dt.`, `D = differentiator: de/dt.`) }
      ]
    }
  ],
  cards: [
    [`Regler`, `régulateur`, `controller`], [`Stellgröße`, `grandeur de commande`, `manipulated variable`],
    [`Regelgröße`, `grandeur réglée`, `controlled variable`], [`Führungsgröße (Sollwert)`, `consigne`, `setpoint / reference`],
    [`Störgröße`, `perturbation`, `disturbance`], [`Regelabweichung`, `écart de régulation`, `control error`],
    [`Rückkopplung`, `rétroaction`, `feedback`], [`Übertragungsfunktion`, `fonction de transfert`, `transfer function`],
    [`Zeitkonstante`, `constante de temps`, `time constant`], [`Stabilität`, `stabilité`, `stability`],
    [`Regelstrecke`, `processus / système réglé`, `plant`], [`Sprungantwort`, `réponse indicielle`, `step response`]
  ]
});

MODULES.push({
  id: 'medgrund1', code: '910060', emoji: '🧬', color: '#b91c1c',
  title: L(`Medizinische Grundlagen 1 (Zellbiologie · Mikrobiologie · Terminologie)`, `Bases médicales 1 (biologie cellulaire · microbiologie · terminologie)`, `Medical Fundamentals 1 (cell biology · microbiology · terminology)`),
  chapters: [
    {
      id: 'mg1', title: L(`Zellbiologie`, `Biologie cellulaire`, `Cell biology`),
      body: L(
        `<p><b>Eukaryotische Zelle</b> – wichtige Organellen:</p>
<ul><li><b>Zellkern:</b> DNA, Steuerzentrale</li><li><b>Mitochondrien:</b> Zellatmung, ATP-Produktion („Kraftwerke“)</li><li><b>Raues ER</b> (mit Ribosomen): Proteinsynthese · <b>Glattes ER:</b> Lipide, Entgiftung</li><li><b>Golgi-Apparat:</b> Modifikation und Verpackung von Proteinen</li><li><b>Lysosomen:</b> Abbau</li><li><b>Zellmembran:</b> Phospholipid-Doppelschicht, selektiv permeabel</li></ul>
<p><b>Transport:</b> Diffusion (entlang des Gradienten, ohne Energie), Osmose (Wasser), aktiver Transport (ATP) – z. B. die <b>Na⁺/K⁺-ATPase</b>: 3 Na⁺ hinaus, 2 K⁺ hinein.</p>
<p><b>Zellzyklus:</b> G1 → S (DNA-Replikation) → G2 → M (Mitose: Prophase, Metaphase, Anaphase, Telophase).</p>`,
        `<p><b>Cellule eucaryote</b> – organites importants :</p>
<ul><li><b>Noyau :</b> ADN, centre de contrôle</li><li><b>Mitochondries :</b> respiration cellulaire, production d'ATP (« centrales »)</li><li><b>RE rugueux</b> (avec ribosomes) : synthèse des protéines · <b>RE lisse :</b> lipides, détoxification</li><li><b>Appareil de Golgi :</b> modification et emballage des protéines</li><li><b>Lysosomes :</b> dégradation</li><li><b>Membrane cellulaire :</b> double couche de phospholipides, perméabilité sélective</li></ul>
<p><b>Transport :</b> diffusion (selon le gradient, sans énergie), osmose (eau), transport actif (ATP) – ex. la <b>pompe Na⁺/K⁺-ATPase</b> : 3 Na⁺ sortent, 2 K⁺ entrent.</p>
<p><b>Cycle cellulaire :</b> G1 → S (réplication de l'ADN) → G2 → M (mitose : prophase, métaphase, anaphase, télophase).</p>`,
        `<p><b>Eukaryotic cell</b> – key organelles:</p>
<ul><li><b>Nucleus:</b> DNA, control centre</li><li><b>Mitochondria:</b> cellular respiration, ATP production (“powerhouses”)</li><li><b>Rough ER</b> (with ribosomes): protein synthesis · <b>Smooth ER:</b> lipids, detoxification</li><li><b>Golgi apparatus:</b> modifies and packages proteins</li><li><b>Lysosomes:</b> degradation</li><li><b>Cell membrane:</b> phospholipid bilayer, selectively permeable</li></ul>
<p><b>Transport:</b> diffusion (down the gradient, no energy), osmosis (water), active transport (ATP) – e.g. the <b>Na⁺/K⁺-ATPase</b>: 3 Na⁺ out, 2 K⁺ in.</p>
<p><b>Cell cycle:</b> G1 → S (DNA replication) → G2 → M (mitosis: prophase, metaphase, anaphase, telophase).</p>`),
      quiz: [
        { q: L(`Welches Organell ist für die ATP-Produktion zuständig?`, `Quel organite produit l'ATP ?`, `Which organelle produces ATP?`),
          o: [`Mitochondrium`, `Golgi-Apparat`, `Lysosom`, `Zellkern`], a: 0,
          e: L(`Mitochondrien = Zellatmung.`, `Mitochondries = respiration cellulaire.`, `Mitochondria = cellular respiration.`) },
        { q: L(`Die Na⁺/K⁺-ATPase transportiert pro Zyklus …`, `La pompe Na⁺/K⁺-ATPase transporte par cycle …`, `The Na⁺/K⁺-ATPase moves per cycle …`),
          o: [`3 Na⁺ raus, 2 K⁺ rein`, `2 Na⁺ raus, 3 K⁺ rein`, `3 Na⁺ rein, 2 K⁺ raus`, `1 Na⁺ raus, 1 K⁺ rein`], a: 0,
          e: L(`Netto verlässt eine positive Ladung die Zelle.`, `Au final une charge positive sort de la cellule.`, `Net, one positive charge leaves the cell.`) },
        { q: L(`In welcher Phase wird die DNA verdoppelt?`, `Dans quelle phase l'ADN est-il répliqué ?`, `In which phase is DNA replicated?`),
          o: [`G1`, `S`, `G2`, `M`], a: 1,
          e: L(`S = Synthese-Phase.`, `S = phase de synthèse.`, `S = synthesis phase.`) }
      ]
    },
    {
      id: 'mg2', title: L(`Mikrobiologie`, `Microbiologie`, `Microbiology`),
      body: L(
        `<ul><li><b>Bakterien:</b> Prokaryoten, kein Zellkern, ca. 1–5 µm. <b>Gram-positiv:</b> dicke Peptidoglykanschicht → violett. <b>Gram-negativ:</b> dünne Schicht + äußere Membran → rosa/rot.</li><li><b>Viren:</b> kein eigener Stoffwechsel; Nukleinsäure (DNA oder RNA) + Kapsid; Vermehrung nur in Wirtszellen. Antibiotika wirken <i>nicht</i> gegen Viren.</li><li><b>Pilze:</b> Eukaryoten (Hefen, Schimmelpilze).</li></ul>
<p><b>Medizintechnik-relevant:</b> <b>Desinfektion</b> reduziert Keime, <b>Sterilisation</b> tötet <i>alle</i> Mikroorganismen inkl. Sporen. Dampfsterilisation (Autoklav): 121 °C / 15–20 min bzw. 134 °C / 3–5 min. Nicht hitzebeständige Produkte: Ethylenoxid oder Plasma. Nosokomiale Infektionen: Hände­desinfektion, Medizinprodukte-Aufbereitung.</p>`,
        `<ul><li><b>Bactéries :</b> procaryotes, sans noyau, env. 1–5 µm. <b>Gram-positives :</b> paroi épaisse de peptidoglycane → violet. <b>Gram-négatives :</b> paroi fine + membrane externe → rose/rouge.</li><li><b>Virus :</b> pas de métabolisme propre ; acide nucléique (ADN ou ARN) + capside ; multiplication uniquement dans des cellules hôtes. Les antibiotiques n'agissent <i>pas</i> sur les virus.</li><li><b>Champignons :</b> eucaryotes (levures, moisissures).</li></ul>
<p><b>Pertinent en technique médicale :</b> la <b>désinfection</b> réduit les germes, la <b>stérilisation</b> tue <i>tous</i> les micro-organismes, spores comprises. Stérilisation à la vapeur (autoclave) : 121 °C / 15–20 min ou 134 °C / 3–5 min. Produits thermosensibles : oxyde d'éthylène ou plasma. Infections nosocomiales : désinfection des mains, retraitement des dispositifs médicaux.</p>`,
        `<ul><li><b>Bacteria:</b> prokaryotes, no nucleus, about 1–5 µm. <b>Gram-positive:</b> thick peptidoglycan layer → violet. <b>Gram-negative:</b> thin layer + outer membrane → pink/red.</li><li><b>Viruses:</b> no metabolism of their own; nucleic acid (DNA or RNA) + capsid; replicate only inside host cells. Antibiotics do <i>not</i> work against viruses.</li><li><b>Fungi:</b> eukaryotes (yeasts, moulds).</li></ul>
<p><b>Relevant for medical technology:</b> <b>disinfection</b> reduces germs, <b>sterilisation</b> kills <i>all</i> micro-organisms including spores. Steam sterilisation (autoclave): 121 °C / 15–20 min or 134 °C / 3–5 min. Heat-sensitive products: ethylene oxide or plasma. Hospital-acquired infections: hand disinfection, reprocessing of medical devices.</p>`),
      quiz: [
        { q: L(`Wie färben sich Gram-positive Bakterien bei der Gram-Färbung?`, `Comment se colorent les bactéries Gram-positives ?`, `What colour do Gram-positive bacteria stain?`),
          o: [L(`violett / blau`, `violet / bleu`, `violet / blue`), L(`rosa / rot`, `rose / rouge`, `pink / red`), L(`grün`, `vert`, `green`)], a: 0,
          e: L(`Die dicke Peptidoglykanschicht hält den Kristallviolett-Komplex.`, `L'épaisse couche de peptidoglycane retient le cristal violet.`, `The thick peptidoglycan layer retains the crystal violet.`) },
        { q: L(`Welches Verfahren tötet auch Bakteriensporen sicher ab?`, `Quel procédé tue aussi sûrement les spores bactériennes ?`, `Which process reliably kills bacterial spores too?`),
          o: [L(`Sterilisation (Autoklav)`, `Stérilisation (autoclave)`, `Sterilisation (autoclave)`), L(`Händedesinfektion`, `Désinfection des mains`, `Hand disinfection`), L(`Pasteurisieren`, `Pasteurisation`, `Pasteurisation`)], a: 0,
          e: L(`Dampf bei 134 °C inaktiviert Sporen.`, `La vapeur à 134 °C inactive les spores.`, `Steam at 134 °C inactivates spores.`) },
        { q: L(`Gegen welche Erreger wirken Antibiotika?`, `Contre quels agents les antibiotiques agissent-ils ?`, `Against which pathogens do antibiotics work?`),
          o: [L(`Bakterien`, `Bactéries`, `Bacteria`), L(`Viren`, `Virus`, `Viruses`), L(`Beide`, `Les deux`, `Both`)], a: 0,
          e: L(`Viren haben keinen eigenen Stoffwechsel als Angriffspunkt.`, `Les virus n'ont pas de métabolisme propre à cibler.`, `Viruses have no metabolism of their own to target.`) }
      ]
    },
    {
      id: 'mg3', title: L(`Medizinische Terminologie`, `Terminologie médicale`, `Medical terminology`),
      body: L(
        `<p>Fachbegriffe bestehen aus <b>Präfix – Wortstamm – Suffix</b> (meist griechisch/lateinisch).</p>
<table><tr><th>Baustein</th><th>Bedeutung</th></tr>
<tr><td>-itis</td><td>Entzündung (Gastritis)</td></tr><tr><td>-ektomie</td><td>operative Entfernung (Nephrektomie)</td></tr><tr><td>-tomie</td><td>Schnitt (Laparotomie)</td></tr><tr><td>-ostomie</td><td>künstliche Öffnung (Kolostomie)</td></tr><tr><td>-pathie</td><td>Erkrankung (Neuropathie)</td></tr><tr><td>-skopie</td><td>Betrachtung/Spiegelung (Endoskopie)</td></tr><tr><td>hyper- / hypo-</td><td>über / unter (Hypertonie, Hypotonie)</td></tr><tr><td>tachy- / brady-</td><td>schnell / langsam (Tachykardie, Bradykardie)</td></tr><tr><td>kardio, nephro, hepato, neuro, osteo, gastro, pulmo</td><td>Herz, Niere, Leber, Nerv, Knochen, Magen, Lunge</td></tr></table>
<p>Lagebezeichnungen: proximal/distal, ventral/dorsal, medial/lateral, superior/inferior.</p>`,
        `<p>Les termes techniques se composent de <b>préfixe – radical – suffixe</b> (surtout grec/latin).</p>
<table><tr><th>Élément</th><th>Signification</th></tr>
<tr><td>-itis</td><td>inflammation (gastrite)</td></tr><tr><td>-ektomie</td><td>ablation chirurgicale (néphrectomie)</td></tr><tr><td>-tomie</td><td>incision (laparotomie)</td></tr><tr><td>-ostomie</td><td>ouverture artificielle (colostomie)</td></tr><tr><td>-pathie</td><td>maladie (neuropathie)</td></tr><tr><td>-skopie</td><td>examen visuel (endoscopie)</td></tr><tr><td>hyper- / hypo-</td><td>au-dessus / au-dessous (hypertension, hypotension)</td></tr><tr><td>tachy- / brady-</td><td>rapide / lent (tachycardie, bradycardie)</td></tr><tr><td>kardio, nephro, hepato, neuro, osteo, gastro, pulmo</td><td>cœur, rein, foie, nerf, os, estomac, poumon</td></tr></table>
<p>Termes de position : proximal/distal, ventral/dorsal, médial/latéral, supérieur/inférieur.</p>`,
        `<p>Medical terms are built from <b>prefix – root – suffix</b> (mostly Greek/Latin).</p>
<table><tr><th>Element</th><th>Meaning</th></tr>
<tr><td>-itis</td><td>inflammation (gastritis)</td></tr><tr><td>-ektomie / -ectomy</td><td>surgical removal (nephrectomy)</td></tr><tr><td>-tomie / -tomy</td><td>incision (laparotomy)</td></tr><tr><td>-ostomie / -ostomy</td><td>artificial opening (colostomy)</td></tr><tr><td>-pathie / -pathy</td><td>disease (neuropathy)</td></tr><tr><td>-skopie / -scopy</td><td>visual examination (endoscopy)</td></tr><tr><td>hyper- / hypo-</td><td>above / below (hypertension, hypotension)</td></tr><tr><td>tachy- / brady-</td><td>fast / slow (tachycardia, bradycardia)</td></tr><tr><td>kardio, nephro, hepato, neuro, osteo, gastro, pulmo</td><td>heart, kidney, liver, nerve, bone, stomach, lung</td></tr></table>
<p>Position terms: proximal/distal, ventral/dorsal, medial/lateral, superior/inferior.</p>`),
      quiz: [
        { q: L(`Was bedeutet „Gastritis“?`, `Que signifie « Gastritis » ?`, `What does “gastritis” mean?`),
          o: [L(`Entzündung des Magens`, `Inflammation de l'estomac`, `Inflammation of the stomach`), L(`Entfernung des Magens`, `Ablation de l'estomac`, `Removal of the stomach`), L(`Entzündung der Leber`, `Inflammation du foie`, `Inflammation of the liver`)], a: 0,
          e: L(`gastro = Magen, -itis = Entzündung.`, `gastro = estomac, -itis = inflammation.`, `gastro = stomach, -itis = inflammation.`) },
        { q: L(`„Bradykardie“ bedeutet …`, `« Bradykardie » signifie …`, `“Bradycardia” means …`),
          o: [L(`zu langsamer Herzschlag`, `rythme cardiaque trop lent`, `abnormally slow heartbeat`), L(`zu schneller Herzschlag`, `rythme cardiaque trop rapide`, `abnormally fast heartbeat`), L(`Herzentzündung`, `inflammation du cœur`, `inflammation of the heart`)], a: 0,
          e: L(`brady = langsam (Ruhepuls < 60/min).`, `brady = lent (pouls au repos < 60/min).`, `brady = slow (resting rate < 60/min).`) },
        { q: L(`Welches Suffix steht für „operative Entfernung“?`, `Quel suffixe désigne « ablation chirurgicale » ?`, `Which suffix means “surgical removal”?`),
          o: [`-ektomie`, `-ostomie`, `-skopie`, `-pathie`], a: 0,
          e: L(`Nephrektomie = Entfernung der Niere.`, `Néphrectomie = ablation du rein.`, `Nephrectomy = removal of the kidney.`) }
      ]
    }
  ],
  cards: [
    [`Zelle`, `cellule`, `cell`], [`Zellkern`, `noyau`, `nucleus`], [`Mitochondrium`, `mitochondrie`, `mitochondrion`],
    [`Zellmembran`, `membrane cellulaire`, `cell membrane`], [`Bakterium`, `bactérie`, `bacterium`], [`Virus`, `virus`, `virus`],
    [`Entzündung`, `inflammation`, `inflammation`], [`Herz`, `cœur`, `heart`], [`Niere`, `rein`, `kidney`],
    [`Leber`, `foie`, `liver`], [`Lunge`, `poumon`, `lung`], [`Knochen`, `os`, `bone`], [`Nerv`, `nerf`, `nerve`], [`Magen`, `estomac`, `stomach`],
    [`Sterilisation`, `stérilisation`, `sterilisation`], [`Desinfektion`, `désinfection`, `disinfection`]
  ]
});

MODULES.push({
  id: 'physdiag', code: '930020', emoji: '🩻', color: '#6d28d9',
  title: L(`Physik diagnostischer Verfahren`, `Physique des procédés diagnostiques`, `Physics of Diagnostic Methods`),
  chapters: [
    {
      id: 'pd1', title: L(`Röntgen und CT`, `Rayons X et scanner (CT)`, `X-ray and CT`),
      body: L(
        `<ul><li>Röntgenstrahlung: elektromagnetische Strahlung, erzeugt in der Röntgenröhre (Glühkathode, Hochspannung ca. 30–150 kV, Wolframanode): <b>Bremsstrahlung</b> + <b>charakteristische Strahlung</b>.</li><li><b>Schwächungsgesetz:</b> I = I₀ · e<sup>−μ·x</sup> (μ = Schwächungskoeffizient). Halbwertsschicht: HVL = ln 2 / μ.</li><li>Bildkontrast entsteht durch unterschiedliches μ (Knochen &gt; Weichteil &gt; Luft).</li><li><b>CT:</b> viele Projektionen aus verschiedenen Winkeln → Rekonstruktion (gefilterte Rückprojektion). <b>Hounsfield-Einheit:</b> HU = 1000 · (μ − μ<sub>Wasser</sub>) / μ<sub>Wasser</sub>. Wasser = 0 HU, Luft = −1000 HU, Knochen ≈ +400 bis +1000 HU.</li><li><b>Dosis:</b> Energiedosis in Gray (Gy = J/kg); Äquivalent-/effektive Dosis in Sievert (Sv). Strahlenschutz: Abstand, Abschirmung, kurze Zeit (ALARA).</li></ul>`,
        `<ul><li>Rayons X : rayonnement électromagnétique produit dans le tube (cathode chauffée, haute tension env. 30–150 kV, anode en tungstène) : <b>rayonnement de freinage</b> + <b>rayonnement caractéristique</b>.</li><li><b>Loi d'atténuation :</b> I = I₀ · e<sup>−μ·x</sup> (μ = coefficient d'atténuation). Couche de demi-atténuation : HVL = ln 2 / μ.</li><li>Le contraste vient de μ différents (os &gt; tissus mous &gt; air).</li><li><b>CT :</b> nombreuses projections sous différents angles → reconstruction (rétroprojection filtrée). <b>Unité de Hounsfield :</b> HU = 1000 · (μ − μ<sub>eau</sub>) / μ<sub>eau</sub>. Eau = 0 HU, air = −1000 HU, os ≈ +400 à +1000 HU.</li><li><b>Dose :</b> dose absorbée en gray (Gy = J/kg) ; dose équivalente/efficace en sievert (Sv). Radioprotection : distance, blindage, temps court (ALARA).</li></ul>`,
        `<ul><li>X-rays: electromagnetic radiation produced in the X-ray tube (heated cathode, high voltage ~30–150 kV, tungsten anode): <b>bremsstrahlung</b> + <b>characteristic radiation</b>.</li><li><b>Attenuation law:</b> I = I₀ · e<sup>−μ·x</sup> (μ = attenuation coefficient). Half-value layer: HVL = ln 2 / μ.</li><li>Image contrast comes from different μ (bone &gt; soft tissue &gt; air).</li><li><b>CT:</b> many projections from different angles → reconstruction (filtered back-projection). <b>Hounsfield unit:</b> HU = 1000 · (μ − μ<sub>water</sub>) / μ<sub>water</sub>. Water = 0 HU, air = −1000 HU, bone ≈ +400 to +1000 HU.</li><li><b>Dose:</b> absorbed dose in gray (Gy = J/kg); equivalent/effective dose in sievert (Sv). Radiation protection: distance, shielding, short time (ALARA).</li></ul>`),
      quiz: [
        { q: L(`Welchen HU-Wert hat Wasser per Definition?`, `Quelle valeur HU l'eau a-t-elle par définition ?`, `What HU value does water have by definition?`),
          o: [`0 HU`, `−1000 HU`, `+1000 HU`, `+100 HU`], a: 0,
          e: L(`Die HU-Skala ist auf Wasser = 0 und Luft = −1000 normiert.`, `L'échelle HU est normée sur eau = 0 et air = −1000.`, `The HU scale is normalised to water = 0 and air = −1000.`) },
        { q: L(`μ = 0,2 cm⁻¹, Schichtdicke x = 5 cm. Welcher Anteil I/I₀ wird durchgelassen?`, `μ = 0,2 cm⁻¹, épaisseur x = 5 cm. Quelle fraction I/I₀ est transmise ?`, `μ = 0.2 cm⁻¹, thickness x = 5 cm. What fraction I/I₀ is transmitted?`),
          o: [`≈ 37 %`, `≈ 50 %`, `≈ 63 %`, `≈ 10 %`], a: 0,
          e: L(`μ·x = 1 → e⁻¹ ≈ 0,368.`, `μ·x = 1 → e⁻¹ ≈ 0,368.`, `μ·x = 1 → e⁻¹ ≈ 0.368.`) },
        { q: L(`In welcher Einheit wird die effektive Dosis angegeben?`, `Dans quelle unité exprime-t-on la dose efficace ?`, `In which unit is the effective dose given?`),
          o: [`Sievert (Sv)`, `Gray (Gy)`, `Becquerel (Bq)`, `Tesla (T)`], a: 0,
          e: L(`Gy = Energiedosis, Sv = gewichtete Dosis, Bq = Aktivität.`, `Gy = dose absorbée, Sv = dose pondérée, Bq = activité.`, `Gy = absorbed dose, Sv = weighted dose, Bq = activity.`) }
      ]
    },
    {
      id: 'pd2', title: L(`Ultraschall und MRT`, `Échographie et IRM`, `Ultrasound and MRI`),
      body: L(
        `<p><b>Ultraschall:</b> f &gt; 20 kHz, medizinisch 1–15 MHz. Schallgeschwindigkeit in Weichteilen ≈ 1540 m/s. Reflexion an Grenzflächen mit unterschiedlicher akustischer Impedanz Z = ρ·c. <b>Tiefe:</b> d = c·t / 2 (Hin- und Rückweg). <b>Doppler:</b> Frequenzverschiebung ∝ Geschwindigkeit des Blutflusses. Höhere Frequenz = bessere Auflösung, aber geringere Eindringtiefe.</p>
<p><b>MRT:</b> Wasserstoffkerne (¹H-Protonen) richten sich im starken Magnetfeld B₀ (1,5–3 T) aus. Ein Hochfrequenzpuls bei der <b>Larmorfrequenz f = (γ/2π)·B₀</b> regt sie an; für ¹H gilt γ/2π = 42,58 MHz/T (1,5 T ≈ 63,9 MHz). Relaxationszeiten <b>T1</b> (Längs) und <b>T2</b> (Quer) erzeugen den Gewebekontrast. Keine ionisierende Strahlung; Gefahr: Metallimplantate, Herzschrittmacher.</p>`,
        `<p><b>Échographie :</b> f &gt; 20 kHz, en médecine 1–15 MHz. Vitesse du son dans les tissus mous ≈ 1540 m/s. Réflexion aux interfaces d'impédance acoustique différente Z = ρ·c. <b>Profondeur :</b> d = c·t / 2 (aller-retour). <b>Doppler :</b> décalage de fréquence ∝ vitesse du flux sanguin. Fréquence élevée = meilleure résolution, mais moindre pénétration.</p>
<p><b>IRM :</b> les noyaux d'hydrogène (protons ¹H) s'alignent dans le champ magnétique fort B₀ (1,5–3 T). Une impulsion radiofréquence à la <b>fréquence de Larmor f = (γ/2π)·B₀</b> les excite ; pour ¹H : γ/2π = 42,58 MHz/T (1,5 T ≈ 63,9 MHz). Les temps de relaxation <b>T1</b> (longitudinal) et <b>T2</b> (transversal) créent le contraste. Pas de rayonnement ionisant ; danger : implants métalliques, stimulateurs cardiaques.</p>`,
        `<p><b>Ultrasound:</b> f &gt; 20 kHz, medical 1–15 MHz. Speed of sound in soft tissue ≈ 1540 m/s. Reflection at interfaces with different acoustic impedance Z = ρ·c. <b>Depth:</b> d = c·t / 2 (round trip). <b>Doppler:</b> frequency shift ∝ blood-flow velocity. Higher frequency = better resolution but less penetration.</p>
<p><b>MRI:</b> hydrogen nuclei (¹H protons) align in the strong magnetic field B₀ (1.5–3 T). An RF pulse at the <b>Larmor frequency f = (γ/2π)·B₀</b> excites them; for ¹H γ/2π = 42.58 MHz/T (1.5 T ≈ 63.9 MHz). Relaxation times <b>T1</b> (longitudinal) and <b>T2</b> (transverse) create tissue contrast. No ionising radiation; hazards: metal implants, pacemakers.</p>`),
      quiz: [
        { q: L(`Ein Echo kommt nach 130 µs zurück (c = 1540 m/s). Wie tief liegt die Grenzfläche?`, `Un écho revient après 130 µs (c = 1540 m/s). À quelle profondeur est l'interface ?`, `An echo returns after 130 µs (c = 1540 m/s). How deep is the interface?`),
          o: [`≈ 10 cm`, `≈ 20 cm`, `≈ 5 cm`, `≈ 1 cm`], a: 0,
          e: L(`d = c·t/2 = 1540 · 130·10⁻⁶ / 2 ≈ 0,10 m.`, `d = c·t/2 = 1540 · 130·10⁻⁶ / 2 ≈ 0,10 m.`, `d = c·t/2 = 1540 · 130·10⁻⁶ / 2 ≈ 0.10 m.`) },
        { q: L(`Larmorfrequenz von ¹H bei 3 T?`, `Fréquence de Larmor de ¹H à 3 T ?`, `Larmor frequency of ¹H at 3 T?`),
          o: [`≈ 128 MHz`, `≈ 64 MHz`, `≈ 42,6 MHz`, `≈ 300 MHz`], a: 0,
          e: L(`42,58 MHz/T · 3 T ≈ 127,7 MHz.`, `42,58 MHz/T · 3 T ≈ 127,7 MHz.`, `42.58 MHz/T · 3 T ≈ 127.7 MHz.`) },
        { q: L(`Welches Verfahren nutzt KEINE ionisierende Strahlung?`, `Quelle méthode n'utilise PAS de rayonnement ionisant ?`, `Which method uses NO ionising radiation?`),
          o: [L(`MRT und Ultraschall`, `IRM et échographie`, `MRI and ultrasound`), L(`CT`, `Scanner (CT)`, `CT`), L(`Röntgen`, `Radiographie`, `X-ray`)], a: 0,
          e: L(`MRT: Magnetfeld + Radiowellen; Ultraschall: Schallwellen.`, `IRM : champ magnétique + ondes radio ; échographie : ondes sonores.`, `MRI: magnetic field + radio waves; ultrasound: sound waves.`) }
      ]
    }
  ],
  cards: [
    [`Röntgenröhre`, `tube à rayons X`, `X-ray tube`], [`Schwächung`, `atténuation`, `attenuation`], [`Halbwertsschicht`, `couche de demi-atténuation`, `half-value layer`],
    [`Computertomographie`, `tomodensitométrie (scanner)`, `computed tomography`], [`Energiedosis`, `dose absorbée`, `absorbed dose`], [`Strahlenschutz`, `radioprotection`, `radiation protection`],
    [`Ultraschall`, `ultrasons / échographie`, `ultrasound`], [`Schallgeschwindigkeit`, `vitesse du son`, `speed of sound`], [`Impedanz`, `impédance`, `impedance`],
    [`Magnetresonanztomographie`, `imagerie par résonance magnétique`, `magnetic resonance imaging`], [`Larmorfrequenz`, `fréquence de Larmor`, `Larmor frequency`], [`Relaxationszeit`, `temps de relaxation`, `relaxation time`]
  ]
});

MODULES.push({
  id: 'elektronik', code: '930040', emoji: '🔌', color: '#b45309',
  title: L(`Grundlagen der Elektronik`, `Bases de l'électronique`, `Fundamentals of Electronics`),
  chapters: [
    {
      id: 'el1', title: L(`Gleichstromkreise und RC-Glied`, `Circuits continus et circuit RC`, `DC circuits and RC circuits`),
      body: L(
        `<ul><li><b>Ohmsches Gesetz:</b> U = R·I · <b>Leistung:</b> P = U·I = I²R = U²/R</li><li><b>Kirchhoff:</b> Knotenregel ΣI = 0 · Maschenregel ΣU = 0</li><li><b>Reihenschaltung:</b> R = R₁ + R₂ · <b>Parallelschaltung:</b> 1/R = 1/R₁ + 1/R₂</li><li><b>Spannungsteiler:</b> U₂ = U · R₂ / (R₁ + R₂)</li><li><b>Kondensator:</b> Q = C·U; <b>RC-Glied:</b> Zeitkonstante τ = R·C; Aufladung u(t) = U₀(1 − e<sup>−t/τ</sup>); Grenzfrequenz des Tiefpasses f<sub>g</sub> = 1 / (2π·R·C)</li></ul>
<p>Medizintechnik: EKG-Signale sind nur ca. 1 mV groß → Filter und Verstärker nötig.</p>`,
        `<ul><li><b>Loi d'Ohm :</b> U = R·I · <b>Puissance :</b> P = U·I = I²R = U²/R</li><li><b>Kirchhoff :</b> loi des nœuds ΣI = 0 · loi des mailles ΣU = 0</li><li><b>En série :</b> R = R₁ + R₂ · <b>En parallèle :</b> 1/R = 1/R₁ + 1/R₂</li><li><b>Diviseur de tension :</b> U₂ = U · R₂ / (R₁ + R₂)</li><li><b>Condensateur :</b> Q = C·U ; <b>circuit RC :</b> constante de temps τ = R·C ; charge u(t) = U₀(1 − e<sup>−t/τ</sup>) ; fréquence de coupure du passe-bas f<sub>g</sub> = 1 / (2π·R·C)</li></ul>
<p>Technique médicale : les signaux ECG ne font qu'env. 1 mV → filtres et amplificateurs nécessaires.</p>`,
        `<ul><li><b>Ohm's law:</b> U = R·I · <b>Power:</b> P = U·I = I²R = U²/R</li><li><b>Kirchhoff:</b> junction rule ΣI = 0 · loop rule ΣU = 0</li><li><b>Series:</b> R = R₁ + R₂ · <b>Parallel:</b> 1/R = 1/R₁ + 1/R₂</li><li><b>Voltage divider:</b> U₂ = U · R₂ / (R₁ + R₂)</li><li><b>Capacitor:</b> Q = C·U; <b>RC circuit:</b> time constant τ = R·C; charging u(t) = U₀(1 − e<sup>−t/τ</sup>); low-pass cut-off f<sub>g</sub> = 1 / (2π·R·C)</li></ul>
<p>Medical technology: ECG signals are only ~1 mV → filters and amplifiers are required.</p>`),
      quiz: [
        { q: L(`Spannungsteiler: U = 9 V, R₁ = 1 kΩ, R₂ = 2 kΩ. Wie groß ist U₂ (über R₂)?`, `Diviseur de tension : U = 9 V, R₁ = 1 kΩ, R₂ = 2 kΩ. Quelle est U₂ (aux bornes de R₂) ?`, `Voltage divider: U = 9 V, R₁ = 1 kΩ, R₂ = 2 kΩ. What is U₂ (across R₂)?`),
          o: [`6 V`, `3 V`, `4,5 V`, `9 V`], a: 0, e: L(`U₂ = 9 · 2/3 = 6 V.`, `U₂ = 9 · 2/3 = 6 V.`, `U₂ = 9 · 2/3 = 6 V.`) },
        { q: L(`Zwei Widerstände 100 Ω parallel ergeben …`, `Deux résistances de 100 Ω en parallèle donnent …`, `Two 100 Ω resistors in parallel give …`),
          o: [`50 Ω`, `200 Ω`, `100 Ω`, `25 Ω`], a: 0, e: L(`1/R = 1/100 + 1/100 = 2/100.`, `1/R = 1/100 + 1/100 = 2/100.`, `1/R = 1/100 + 1/100 = 2/100.`) },
        { q: L(`R = 1 kΩ, C = 1 µF. Zeitkonstante τ?`, `R = 1 kΩ, C = 1 µF. Constante de temps τ ?`, `R = 1 kΩ, C = 1 µF. Time constant τ?`),
          o: [`1 ms`, `1 s`, `1 µs`, `1 kHz`], a: 0, e: L(`τ = 10³ · 10⁻⁶ = 10⁻³ s.`, `τ = 10³ · 10⁻⁶ = 10⁻³ s.`, `τ = 10³ · 10⁻⁶ = 10⁻³ s.`) }
      ]
    },
    {
      id: 'el2', title: L(`Diode, Transistor, Operationsverstärker`, `Diode, transistor, amplificateur opérationnel`, `Diode, transistor, operational amplifier`),
      body: L(
        `<ul><li><b>Diode:</b> leitet in Durchlassrichtung (Si: U<sub>F</sub> ≈ 0,7 V), sperrt in Sperrrichtung → Gleichrichter. Z-Diode: Spannungsbegrenzung/-stabilisierung. LED: leuchtet in Durchlassrichtung.</li><li><b>Bipolartransistor (BJT):</b> Stromverstärkung I<sub>C</sub> = β·I<sub>B</sub>; als Schalter oder Verstärker. <b>MOSFET:</b> spannungsgesteuert.</li><li><b>Idealer Operationsverstärker:</b> Verstärkung → ∞, Eingangsströme = 0, bei Gegenkopplung U₊ = U₋.<br>• <b>Invertierend:</b> U<sub>a</sub> = −(R₂/R₁)·U<sub>e</sub><br>• <b>Nichtinvertierend:</b> U<sub>a</sub> = (1 + R₂/R₁)·U<sub>e</sub></li></ul>
<p>Anwendung: EKG/EMG-Messverstärker (Instrumentationsverstärker mit hoher Gleichtaktunterdrückung).</p>`,
        `<ul><li><b>Diode :</b> conduit dans le sens direct (Si : U<sub>F</sub> ≈ 0,7 V), bloque dans le sens inverse → redresseur. Diode Zener : limitation/stabilisation de tension. LED : s'allume en sens direct.</li><li><b>Transistor bipolaire (BJT) :</b> amplification de courant I<sub>C</sub> = β·I<sub>B</sub> ; interrupteur ou amplificateur. <b>MOSFET :</b> commandé en tension.</li><li><b>AOP idéal :</b> gain → ∞, courants d'entrée = 0, avec contre-réaction U₊ = U₋.<br>• <b>Inverseur :</b> U<sub>a</sub> = −(R₂/R₁)·U<sub>e</sub><br>• <b>Non inverseur :</b> U<sub>a</sub> = (1 + R₂/R₁)·U<sub>e</sub></li></ul>
<p>Application : amplificateurs de mesure ECG/EMG (amplificateur d'instrumentation à fort taux de réjection du mode commun).</p>`,
        `<ul><li><b>Diode:</b> conducts in forward direction (Si: U<sub>F</sub> ≈ 0.7 V), blocks in reverse → rectifier. Zener diode: voltage limiting/regulation. LED: lights up in forward direction.</li><li><b>Bipolar transistor (BJT):</b> current gain I<sub>C</sub> = β·I<sub>B</sub>; used as switch or amplifier. <b>MOSFET:</b> voltage-controlled.</li><li><b>Ideal op-amp:</b> gain → ∞, input currents = 0, with negative feedback U₊ = U₋.<br>• <b>Inverting:</b> U<sub>a</sub> = −(R₂/R₁)·U<sub>e</sub><br>• <b>Non-inverting:</b> U<sub>a</sub> = (1 + R₂/R₁)·U<sub>e</sub></li></ul>
<p>Application: ECG/EMG measurement amplifiers (instrumentation amplifier with high common-mode rejection).</p>`),
      quiz: [
        { q: L(`Invertierender OPV: R₁ = 10 kΩ, R₂ = 100 kΩ, U_e = 0,1 V. U_a = ?`, `AOP inverseur : R₁ = 10 kΩ, R₂ = 100 kΩ, U_e = 0,1 V. U_a = ?`, `Inverting op-amp: R₁ = 10 kΩ, R₂ = 100 kΩ, U_e = 0.1 V. U_a = ?`),
          o: [`−1 V`, `+1 V`, `−0,1 V`, `+11 V`], a: 0, e: L(`−(100/10)·0,1 = −1 V.`, `−(100/10)·0,1 = −1 V.`, `−(100/10)·0.1 = −1 V.`) },
        { q: L(`Nichtinvertierender OPV mit R₁ = 1 kΩ und R₂ = 9 kΩ: Verstärkung?`, `AOP non inverseur avec R₁ = 1 kΩ et R₂ = 9 kΩ : gain ?`, `Non-inverting op-amp with R₁ = 1 kΩ and R₂ = 9 kΩ: gain?`),
          o: [`10`, `9`, `−9`, `0,1`], a: 0, e: L(`1 + 9/1 = 10.`, `1 + 9/1 = 10.`, `1 + 9/1 = 10.`) },
        { q: L(`Ab welcher Durchlassspannung leitet eine Silizium-Diode typischerweise?`, `À partir de quelle tension directe une diode au silicium conduit-elle typiquement ?`, `At roughly what forward voltage does a silicon diode conduct?`),
          o: [`≈ 0,7 V`, `≈ 5 V`, `≈ 0,1 V`, `≈ 12 V`], a: 0, e: L(`Silizium ≈ 0,6–0,7 V, Germanium ≈ 0,3 V.`, `Silicium ≈ 0,6–0,7 V, germanium ≈ 0,3 V.`, `Silicon ≈ 0.6–0.7 V, germanium ≈ 0.3 V.`) }
      ]
    }
  ],
  cards: [
    [`Widerstand`, `résistance`, `resistor`], [`Spannung`, `tension`, `voltage`], [`Strom`, `courant`, `current`], [`Kondensator`, `condensateur`, `capacitor`],
    [`Spule`, `bobine`, `inductor / coil`], [`Reihenschaltung`, `montage en série`, `series connection`], [`Parallelschaltung`, `montage en parallèle`, `parallel connection`],
    [`Halbleiter`, `semi-conducteur`, `semiconductor`], [`Durchlassrichtung`, `sens direct`, `forward direction`], [`Sperrrichtung`, `sens bloquant`, `reverse direction`],
    [`Operationsverstärker`, `amplificateur opérationnel`, `operational amplifier`], [`Gegenkopplung`, `contre-réaction`, `negative feedback`], [`Tiefpass`, `filtre passe-bas`, `low-pass filter`]
  ]
});
