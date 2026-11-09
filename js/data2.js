/* Module 5-8 : Angewandte Informatik 1, Medizinische Statistik, Technische Informatik, Physik 1 */
MODULES.push({
  id: 'anginf1', code: '930050', emoji: '💻', color: '#1d4ed8',
  title: L(`Angewandte Informatik 1`, `Informatique appliquée 1`, `Applied Computer Science 1`),
  chapters: [
    {
      id: 'ai1', title: L(`Programmieren: Variablen, Kontrollstrukturen, Funktionen`, `Programmation : variables, structures de contrôle, fonctions`, `Programming: variables, control flow, functions`),
      body: L(
        `<p>Beispiele in <b>Python</b> (Syntax anderer Sprachen wie MATLAB/C ähnlich im Konzept).</p>
<ul><li><b>Datentypen:</b> int, float, str, bool</li><li><b>Operatoren:</b> <code>+ − * /</code>, ganzzahlige Division <code>//</code>, Rest <code>%</code>, Potenz <code>**</code>, Vergleiche <code>== != &lt; &gt;</code>, logisch <code>and or not</code></li><li><b>Verzweigung:</b> <code>if / elif / else</code> · <b>Schleifen:</b> <code>for</code>, <code>while</code></li><li><b>Funktionen:</b> Wiederverwendbarer Code mit Parametern und Rückgabewert</li></ul>
<pre><code>def mittelwert(werte):
    return sum(werte) / len(werte)

for i in range(3):      # 0, 1, 2
    print(i)

print(7 // 2, 7 % 2)    # 3 1</code></pre>
<p>Gutes Vorgehen: Problem zerlegen → Algorithmus skizzieren → implementieren → testen.</p>`,
        `<p>Exemples en <b>Python</b> (les concepts sont similaires en MATLAB/C).</p>
<ul><li><b>Types :</b> int, float, str, bool</li><li><b>Opérateurs :</b> <code>+ − * /</code>, division entière <code>//</code>, reste <code>%</code>, puissance <code>**</code>, comparaisons <code>== != &lt; &gt;</code>, logiques <code>and or not</code></li><li><b>Conditions :</b> <code>if / elif / else</code> · <b>Boucles :</b> <code>for</code>, <code>while</code></li><li><b>Fonctions :</b> code réutilisable avec paramètres et valeur de retour</li></ul>
<pre><code>def mittelwert(werte):
    return sum(werte) / len(werte)

for i in range(3):      # 0, 1, 2
    print(i)

print(7 // 2, 7 % 2)    # 3 1</code></pre>
<p>Bonne démarche : décomposer le problème → esquisser l'algorithme → implémenter → tester.</p>`,
        `<p>Examples in <b>Python</b> (the concepts are similar in MATLAB/C).</p>
<ul><li><b>Data types:</b> int, float, str, bool</li><li><b>Operators:</b> <code>+ − * /</code>, integer division <code>//</code>, remainder <code>%</code>, power <code>**</code>, comparisons <code>== != &lt; &gt;</code>, logical <code>and or not</code></li><li><b>Branching:</b> <code>if / elif / else</code> · <b>Loops:</b> <code>for</code>, <code>while</code></li><li><b>Functions:</b> reusable code with parameters and return value</li></ul>
<pre><code>def mittelwert(werte):
    return sum(werte) / len(werte)

for i in range(3):      # 0, 1, 2
    print(i)

print(7 // 2, 7 % 2)    # 3 1</code></pre>
<p>Good workflow: break the problem down → sketch the algorithm → implement → test.</p>`),
      quiz: [
        { q: L(`Was gibt <code>7 // 2</code> in Python aus?`, `Que renvoie <code>7 // 2</code> en Python ?`, `What does <code>7 // 2</code> return in Python?`),
          o: [`3`, `3.5`, `4`, `1`], a: 0, e: L(`<code>//</code> ist die ganzzahlige Division.`, `<code>//</code> est la division entière.`, `<code>//</code> is integer division.`) },
        { q: L(`Welche Zahlen erzeugt <code>range(3)</code>?`, `Quels nombres produit <code>range(3)</code> ?`, `Which numbers does <code>range(3)</code> produce?`),
          o: [`0, 1, 2`, `1, 2, 3`, `0, 1, 2, 3`, `1, 2`], a: 0, e: L(`Start 0, Ende 3 ist ausgeschlossen.`, `Départ 0, la borne 3 est exclue.`, `Starts at 0, the end 3 is excluded.`) },
        { q: L(`Was ergibt <code>10 % 3</code>?`, `Que donne <code>10 % 3</code> ?`, `What is <code>10 % 3</code>?`),
          o: [`1`, `3`, `0`, `3.33`], a: 0, e: L(`10 = 3·3 + 1 → Rest 1.`, `10 = 3·3 + 1 → reste 1.`, `10 = 3·3 + 1 → remainder 1.`) }
      ]
    },
    {
      id: 'ai2', title: L(`Listen, Dictionaries, Dateien und Algorithmen`, `Listes, dictionnaires, fichiers et algorithmes`, `Lists, dictionaries, files and algorithms`),
      body: L(
        `<ul><li><b>Liste:</b> geordnet, veränderlich: <code>a = [4, 8, 15]</code>; Index ab 0: <code>a[0] → 4</code>; <code>len(a)</code>, <code>a.append(16)</code>, Slicing <code>a[1:3]</code></li><li><b>Dictionary:</b> Schlüssel → Wert: <code>d = {"HR": 72, "SpO2": 98}</code>; <code>d["HR"] → 72</code></li><li><b>Dateien:</b> <code>with open("messung.csv") as f:</code> – Messdaten einlesen und auswerten</li><li><b>Algorithmen:</b> lineare Suche O(n), binäre Suche O(log n) (sortierte Liste), Sortieren (Bubble Sort O(n²), Mergesort O(n log n))</li></ul>
<pre><code>werte = [72, 75, 71, 90]
maximum = werte[0]
for w in werte:
    if w &gt; maximum:
        maximum = w
print(maximum)   # 90</code></pre>
<p>Typische Anwendung: Vitalparameter aus einer CSV-Datei laden, Mittelwert/Maximum berechnen, Ausreißer markieren.</p>`,
        `<ul><li><b>Liste :</b> ordonnée, modifiable : <code>a = [4, 8, 15]</code> ; indice dès 0 : <code>a[0] → 4</code> ; <code>len(a)</code>, <code>a.append(16)</code>, tranche <code>a[1:3]</code></li><li><b>Dictionnaire :</b> clé → valeur : <code>d = {"HR": 72, "SpO2": 98}</code> ; <code>d["HR"] → 72</code></li><li><b>Fichiers :</b> <code>with open("messung.csv") as f:</code> – lire et analyser des mesures</li><li><b>Algorithmes :</b> recherche linéaire O(n), recherche binaire O(log n) (liste triée), tris (tri à bulles O(n²), tri fusion O(n log n))</li></ul>
<pre><code>werte = [72, 75, 71, 90]
maximum = werte[0]
for w in werte:
    if w &gt; maximum:
        maximum = w
print(maximum)   # 90</code></pre>
<p>Application typique : charger des constantes vitales depuis un CSV, calculer moyenne/maximum, repérer les valeurs aberrantes.</p>`,
        `<ul><li><b>List:</b> ordered, mutable: <code>a = [4, 8, 15]</code>; index from 0: <code>a[0] → 4</code>; <code>len(a)</code>, <code>a.append(16)</code>, slicing <code>a[1:3]</code></li><li><b>Dictionary:</b> key → value: <code>d = {"HR": 72, "SpO2": 98}</code>; <code>d["HR"] → 72</code></li><li><b>Files:</b> <code>with open("messung.csv") as f:</code> – read and analyse measurements</li><li><b>Algorithms:</b> linear search O(n), binary search O(log n) (sorted list), sorting (bubble sort O(n²), merge sort O(n log n))</li></ul>
<pre><code>werte = [72, 75, 71, 90]
maximum = werte[0]
for w in werte:
    if w &gt; maximum:
        maximum = w
print(maximum)   # 90</code></pre>
<p>Typical use: load vital signs from a CSV file, compute mean/maximum, flag outliers.</p>`),
      quiz: [
        { q: L(`<code>a = [4, 8, 15]</code> – was ist <code>a[1:3]</code>?`, `<code>a = [4, 8, 15]</code> – que vaut <code>a[1:3]</code> ?`, `<code>a = [4, 8, 15]</code> – what is <code>a[1:3]</code>?`),
          o: [`[8, 15]`, `[4, 8]`, `[4, 8, 15]`, `[8]`], a: 0, e: L(`Slicing: Start 1 inklusive, Ende 3 exklusive.`, `Tranche : départ 1 inclus, fin 3 exclue.`, `Slicing: start 1 inclusive, end 3 exclusive.`) },
        { q: L(`Welche Komplexität hat die binäre Suche in einer sortierten Liste?`, `Quelle complexité a la recherche binaire dans une liste triée ?`, `What is the complexity of binary search in a sorted list?`),
          o: [`O(log n)`, `O(n)`, `O(n²)`, `O(1)`], a: 0, e: L(`Bei jedem Schritt wird der Suchbereich halbiert.`, `À chaque étape l'espace de recherche est divisé par deux.`, `Each step halves the search range.`) },
        { q: L(`Wie greift man auf den Wert von „HR“ im Dictionary <code>d</code> zu?`, `Comment accéder à la valeur de « HR » dans le dictionnaire <code>d</code> ?`, `How do you access the value of “HR” in dictionary <code>d</code>?`),
          o: [`d["HR"]`, `d[0]`, `d.HR()`, `d(HR)`], a: 0, e: L(`Zugriff über den Schlüssel.`, `Accès par la clé.`, `Access via the key.`) }
      ]
    }
  ],
  cards: [
    [`Variable`, `variable`, `variable`], [`Schleife`, `boucle`, `loop`], [`Verzweigung`, `branchement / condition`, `branching / conditional`], [`Funktion`, `fonction`, `function`],
    [`Liste`, `liste`, `list`], [`Wörterbuch (Dictionary)`, `dictionnaire`, `dictionary`], [`Rückgabewert`, `valeur de retour`, `return value`], [`Fehlersuche (Debugging)`, `débogage`, `debugging`],
    [`Zuweisung`, `affectation`, `assignment`], [`Zeichenkette`, `chaîne de caractères`, `string`], [`Ganzzahl`, `entier`, `integer`], [`Algorithmus`, `algorithme`, `algorithm`]
  ]
});

MODULES.push({
  id: 'statistik', code: '930030', emoji: '📊', color: '#0e7490',
  title: L(`Medizinische Statistik`, `Statistique médicale`, `Medical Statistics`),
  chapters: [
    {
      id: 'st1', title: L(`Deskriptive Statistik`, `Statistique descriptive`, `Descriptive statistics`),
      body: L(
        `<ul><li><b>Skalenniveaus:</b> nominal (Blutgruppe) · ordinal (Schmerzskala) · intervall (°C) · verhältnis (Größe, Blutdruck)</li><li><b>Mittelwert:</b> x̄ = Σxᵢ / n · <b>Median:</b> mittlerer Wert der sortierten Daten (robust gegen Ausreißer) · <b>Modus:</b> häufigster Wert</li><li><b>Varianz:</b> s² = Σ(xᵢ − x̄)² / (n − 1) · <b>Standardabweichung:</b> s = √s²</li><li><b>Quartile / Boxplot:</b> Q1, Median, Q3; Interquartilsabstand IQR = Q3 − Q1</li><li><b>Normalverteilung:</b> ca. 68 % der Werte in x̄ ± 1s, 95 % in ± 2s</li></ul>`,
        `<ul><li><b>Échelles :</b> nominale (groupe sanguin) · ordinale (échelle de douleur) · d'intervalle (°C) · de rapport (taille, tension)</li><li><b>Moyenne :</b> x̄ = Σxᵢ / n · <b>médiane :</b> valeur centrale des données triées (robuste aux valeurs aberrantes) · <b>mode :</b> valeur la plus fréquente</li><li><b>Variance :</b> s² = Σ(xᵢ − x̄)² / (n − 1) · <b>écart-type :</b> s = √s²</li><li><b>Quartiles / boîte à moustaches :</b> Q1, médiane, Q3 ; écart interquartile IQR = Q3 − Q1</li><li><b>Loi normale :</b> env. 68 % des valeurs dans x̄ ± 1s, 95 % dans ± 2s</li></ul>`,
        `<ul><li><b>Scales:</b> nominal (blood group) · ordinal (pain scale) · interval (°C) · ratio (height, blood pressure)</li><li><b>Mean:</b> x̄ = Σxᵢ / n · <b>median:</b> middle value of sorted data (robust to outliers) · <b>mode:</b> most frequent value</li><li><b>Variance:</b> s² = Σ(xᵢ − x̄)² / (n − 1) · <b>standard deviation:</b> s = √s²</li><li><b>Quartiles / boxplot:</b> Q1, median, Q3; interquartile range IQR = Q3 − Q1</li><li><b>Normal distribution:</b> about 68 % of values within x̄ ± 1s, 95 % within ± 2s</li></ul>`),
      quiz: [
        { q: L(`Median der Werte 3, 9, 5, 7, 1?`, `Médiane des valeurs 3, 9, 5, 7, 1 ?`, `Median of the values 3, 9, 5, 7, 1?`),
          o: [`5`, `7`, `3`, `5,0 (Mittelwert 4,2)`], a: 0, e: L(`Sortiert: 1, 3, 5, 7, 9 → mittlerer Wert 5.`, `Triées : 1, 3, 5, 7, 9 → valeur centrale 5.`, `Sorted: 1, 3, 5, 7, 9 → middle value 5.`) },
        { q: L(`Stichprobenvarianz von 2, 4, 4, 6 (Nenner n − 1)?`, `Variance d'échantillon de 2, 4, 4, 6 (dénominateur n − 1) ?`, `Sample variance of 2, 4, 4, 6 (denominator n − 1)?`),
          o: [`≈ 2,67`, `2`, `8`, `≈ 1,63`], a: 0, e: L(`x̄ = 4; Σ(x − x̄)² = 4+0+0+4 = 8; 8/3 ≈ 2,67.`, `x̄ = 4 ; Σ(x − x̄)² = 4+0+0+4 = 8 ; 8/3 ≈ 2,67.`, `x̄ = 4; Σ(x − x̄)² = 4+0+0+4 = 8; 8/3 ≈ 2.67.`) },
        { q: L(`Die Schmerzskala „keine / leicht / mittel / stark“ ist …`, `L'échelle de douleur « aucune / légère / moyenne / forte » est …`, `The pain scale “none / mild / moderate / severe” is …`),
          o: [L(`ordinalskaliert`, `ordinale`, `ordinal`), L(`nominalskaliert`, `nominale`, `nominal`), L(`verhältnisskaliert`, `de rapport`, `ratio-scaled`)], a: 0, e: L(`Es gibt eine Rangfolge, aber keine gleichen Abstände.`, `Il y a un ordre, mais pas d'intervalles égaux.`, `There is an order but no equal spacing.`) }
      ]
    },
    {
      id: 'st2', title: L(`Diagnostische Tests und Hypothesentests`, `Tests diagnostiques et tests d'hypothèses`, `Diagnostic tests and hypothesis testing`),
      body: L(
        `<p><b>Vierfeldertafel:</b> RP (richtig positiv), FP (falsch positiv), FN (falsch negativ), RN (richtig negativ).</p>
<ul><li><b>Sensitivität</b> = RP / (RP + FN) – Anteil der Kranken, die erkannt werden</li><li><b>Spezifität</b> = RN / (RN + FP) – Anteil der Gesunden, die korrekt negativ sind</li><li><b>PPV</b> (positiver prädiktiver Wert) = RP / (RP + FP) · <b>NPV</b> = RN / (RN + FN) – hängen von der <b>Prävalenz</b> ab</li></ul>
<p><b>Hypothesentest:</b> H₀ (Nullhypothese) vs. H₁. <b>p-Wert</b> = Wahrscheinlichkeit, Daten mindestens so extrem zu beobachten, <i>wenn H₀ gilt</i>. Signifikanzniveau meist α = 0,05. <b>Fehler 1. Art</b> (α): H₀ fälschlich verworfen · <b>Fehler 2. Art</b> (β): H₀ fälschlich beibehalten · Power = 1 − β. <b>Konfidenzintervall:</b> Bereich plausibler Werte für den wahren Parameter (z. B. 95 %).</p>`,
        `<p><b>Tableau 2×2 :</b> VP (vrai positif), FP (faux positif), FN (faux négatif), VN (vrai négatif).</p>
<ul><li><b>Sensibilité</b> = VP / (VP + FN) – part des malades détectés</li><li><b>Spécificité</b> = VN / (VN + FP) – part des sains correctement négatifs</li><li><b>VPP</b> (valeur prédictive positive) = VP / (VP + FP) · <b>VPN</b> = VN / (VN + FN) – dépendent de la <b>prévalence</b></li></ul>
<p><b>Test d'hypothèse :</b> H₀ (hypothèse nulle) vs H₁. <b>Valeur p</b> = probabilité d'observer des données au moins aussi extrêmes <i>si H₀ est vraie</i>. Seuil usuel α = 0,05. <b>Erreur de 1<sup>re</sup> espèce</b> (α) : rejeter H₀ à tort · <b>2<sup>e</sup> espèce</b> (β) : conserver H₀ à tort · puissance = 1 − β. <b>Intervalle de confiance :</b> plage de valeurs plausibles du vrai paramètre (ex. 95 %).</p>`,
        `<p><b>2×2 table:</b> TP (true positive), FP (false positive), FN (false negative), TN (true negative).</p>
<ul><li><b>Sensitivity</b> = TP / (TP + FN) – share of diseased people detected</li><li><b>Specificity</b> = TN / (TN + FP) – share of healthy people correctly negative</li><li><b>PPV</b> (positive predictive value) = TP / (TP + FP) · <b>NPV</b> = TN / (TN + FN) – depend on <b>prevalence</b></li></ul>
<p><b>Hypothesis test:</b> H₀ (null hypothesis) vs. H₁. <b>p-value</b> = probability of observing data at least this extreme <i>if H₀ is true</i>. Usual significance level α = 0.05. <b>Type I error</b> (α): wrongly rejecting H₀ · <b>Type II error</b> (β): wrongly keeping H₀ · power = 1 − β. <b>Confidence interval:</b> range of plausible values for the true parameter (e.g. 95 %).</p>`),
      quiz: [
        { q: L(`RP = 90, FN = 10. Sensitivität?`, `VP = 90, FN = 10. Sensibilité ?`, `TP = 90, FN = 10. Sensitivity?`),
          o: [`90 %`, `10 %`, `81,8 %`, `80 %`], a: 0, e: L(`90 / (90 + 10) = 0,9.`, `90 / (90 + 10) = 0,9.`, `90 / (90 + 10) = 0.9.`) },
        { q: L(`RP = 90, FP = 20. Positiver prädiktiver Wert?`, `VP = 90, FP = 20. Valeur prédictive positive ?`, `TP = 90, FP = 20. Positive predictive value?`),
          o: [`≈ 81,8 %`, `90 %`, `≈ 18 %`, `80 %`], a: 0, e: L(`90 / (90 + 20) ≈ 0,818.`, `90 / (90 + 20) ≈ 0,818.`, `90 / (90 + 20) ≈ 0.818.`) },
        { q: L(`Ein Fehler 1. Art bedeutet …`, `Une erreur de 1<sup>re</sup> espèce signifie …`, `A type I error means …`),
          o: [L(`H₀ wird fälschlich verworfen`, `H₀ est rejetée à tort`, `H₀ is wrongly rejected`), L(`H₀ wird fälschlich beibehalten`, `H₀ est conservée à tort`, `H₀ is wrongly retained`), L(`p-Wert = 1`, `valeur p = 1`, `p-value = 1`)], a: 0, e: L(`Falsch-positives Ergebnis des Tests; Wahrscheinlichkeit = α.`, `Résultat faussement positif du test ; probabilité = α.`, `A false-positive test result; probability = α.`) }
      ]
    }
  ],
  cards: [
    [`Mittelwert`, `moyenne`, `mean`], [`Median`, `médiane`, `median`], [`Standardabweichung`, `écart-type`, `standard deviation`], [`Varianz`, `variance`, `variance`],
    [`Stichprobe`, `échantillon`, `sample`], [`Grundgesamtheit`, `population`, `population`], [`Sensitivität`, `sensibilité`, `sensitivity`], [`Spezifität`, `spécificité`, `specificity`],
    [`Prävalenz`, `prévalence`, `prevalence`], [`Nullhypothese`, `hypothèse nulle`, `null hypothesis`], [`Signifikanz`, `signification`, `significance`], [`Konfidenzintervall`, `intervalle de confiance`, `confidence interval`]
  ]
});

MODULES.push({
  id: 'techinf', code: '940060', emoji: '🖥️', color: '#4338ca',
  title: L(`Technische Informatik`, `Informatique technique`, `Technical Computer Science`),
  chapters: [
    {
      id: 'ti1', title: L(`Zahlensysteme und Boolesche Algebra`, `Systèmes de numération et algèbre de Boole`, `Number systems and Boolean algebra`),
      body: L(
        `<ul><li><b>Binär</b> (Basis 2), <b>Hexadezimal</b> (Basis 16: 0–9, A–F). Beispiel: 1011₂ = 8+2+1 = 11; 0xFF = 255; 0x2A = 42.</li><li><b>Zweierkomplement</b> (negative Zahlen): alle Bits invertieren, +1. Bei 8 Bit: Bereich −128 … +127. Beispiel −5: 00000101 → 11111010 → 11111011 (0xFB).</li><li><b>Logische Gatter:</b> AND, OR, NOT, NAND, NOR, XOR</li><li><b>De Morgan:</b> ¬(A∧B) = ¬A ∨ ¬B · ¬(A∨B) = ¬A ∧ ¬B</li><li>Ein Byte = 8 Bit; 1 KiB = 1024 Byte.</li></ul>
<table><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>`,
        `<ul><li><b>Binaire</b> (base 2), <b>hexadécimal</b> (base 16 : 0–9, A–F). Exemple : 1011₂ = 8+2+1 = 11 ; 0xFF = 255 ; 0x2A = 42.</li><li><b>Complément à deux</b> (nombres négatifs) : inverser tous les bits, +1. Sur 8 bits : plage −128 … +127. Exemple −5 : 00000101 → 11111010 → 11111011 (0xFB).</li><li><b>Portes logiques :</b> AND, OR, NOT, NAND, NOR, XOR</li><li><b>De Morgan :</b> ¬(A∧B) = ¬A ∨ ¬B · ¬(A∨B) = ¬A ∧ ¬B</li><li>Un octet = 8 bits ; 1 Kio = 1024 octets.</li></ul>
<table><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>`,
        `<ul><li><b>Binary</b> (base 2), <b>hexadecimal</b> (base 16: 0–9, A–F). Example: 1011₂ = 8+2+1 = 11; 0xFF = 255; 0x2A = 42.</li><li><b>Two's complement</b> (negative numbers): invert all bits, +1. For 8 bits: range −128 … +127. Example −5: 00000101 → 11111010 → 11111011 (0xFB).</li><li><b>Logic gates:</b> AND, OR, NOT, NAND, NOR, XOR</li><li><b>De Morgan:</b> ¬(A∧B) = ¬A ∨ ¬B · ¬(A∨B) = ¬A ∧ ¬B</li><li>One byte = 8 bits; 1 KiB = 1024 bytes.</li></ul>
<table><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>`),
      quiz: [
        { q: L(`Wie lautet 1011₂ im Dezimalsystem?`, `Que vaut 1011₂ en décimal ?`, `What is 1011₂ in decimal?`),
          o: [`11`, `13`, `9`, `15`], a: 0, e: L(`8 + 0 + 2 + 1 = 11.`, `8 + 0 + 2 + 1 = 11.`, `8 + 0 + 2 + 1 = 11.`) },
        { q: L(`Wie lautet −5 im 8-Bit-Zweierkomplement?`, `Comment s'écrit −5 en complément à deux sur 8 bits ?`, `How is −5 written in 8-bit two's complement?`),
          o: [`11111011`, `10000101`, `11111010`, `00000101`], a: 0, e: L(`5 = 00000101 → invertiert 11111010 → +1 = 11111011.`, `5 = 00000101 → inversé 11111010 → +1 = 11111011.`, `5 = 00000101 → inverted 11111010 → +1 = 11111011.`) },
        { q: L(`Was ergibt 1 XOR 1?`, `Que donne 1 XOR 1 ?`, `What is 1 XOR 1?`),
          o: [`0`, `1`, `2`, `undefiniert`], a: 0, e: L(`XOR ist 1, wenn die Eingänge verschieden sind.`, `XOR vaut 1 si les entrées sont différentes.`, `XOR is 1 if the inputs differ.`) }
      ]
    },
    {
      id: 'ti2', title: L(`Digitale Schaltungen und Rechnerarchitektur`, `Circuits numériques et architecture des ordinateurs`, `Digital circuits and computer architecture`),
      body: L(
        `<ul><li><b>Halbaddierer:</b> Summe S = A XOR B, Übertrag C = A AND B. <b>Volladdierer:</b> zusätzlich Eingangsübertrag.</li><li><b>Kombinatorische Schaltungen:</b> Ausgang hängt nur von den Eingängen ab (Addierer, Multiplexer). <b>Sequenzielle:</b> mit Speicher (Flip-Flop, Register, Zähler), taktgesteuert.</li><li><b>Von-Neumann-Architektur:</b> CPU (Steuerwerk + Rechenwerk/ALU), gemeinsamer Speicher für Daten und Programm, Bussystem, Ein-/Ausgabe.</li><li><b>Befehlszyklus:</b> Fetch → Decode → Execute (→ Write-back).</li><li><b>Adressraum:</b> n Adressbits → 2ⁿ Adressen (16 Bit → 65 536).</li><li>Medizintechnik: Mikrocontroller in Infusionspumpen, Pulsoximetern, Schrittmachern (eingebettete Systeme, Echtzeit).</li></ul>`,
        `<ul><li><b>Demi-additionneur :</b> somme S = A XOR B, retenue C = A AND B. <b>Additionneur complet :</b> avec retenue d'entrée.</li><li><b>Circuits combinatoires :</b> la sortie ne dépend que des entrées (additionneur, multiplexeur). <b>Séquentiels :</b> avec mémoire (bascule, registre, compteur), cadencés par une horloge.</li><li><b>Architecture de von Neumann :</b> CPU (unité de commande + UAL), mémoire commune pour données et programme, bus, entrées/sorties.</li><li><b>Cycle d'instruction :</b> Fetch → Decode → Execute (→ Write-back).</li><li><b>Espace d'adressage :</b> n bits d'adresse → 2ⁿ adresses (16 bits → 65 536).</li><li>Technique médicale : microcontrôleurs dans pompes à perfusion, oxymètres, stimulateurs (systèmes embarqués, temps réel).</li></ul>`,
        `<ul><li><b>Half adder:</b> sum S = A XOR B, carry C = A AND B. <b>Full adder:</b> adds a carry-in.</li><li><b>Combinational circuits:</b> output depends only on the inputs (adder, multiplexer). <b>Sequential:</b> with memory (flip-flop, register, counter), clocked.</li><li><b>Von Neumann architecture:</b> CPU (control unit + ALU), shared memory for data and program, bus system, I/O.</li><li><b>Instruction cycle:</b> Fetch → Decode → Execute (→ Write-back).</li><li><b>Address space:</b> n address bits → 2ⁿ addresses (16 bits → 65,536).</li><li>Medical technology: microcontrollers in infusion pumps, pulse oximeters, pacemakers (embedded, real-time systems).</li></ul>`),
      quiz: [
        { q: L(`Halbaddierer: 1 + 1 → S und C?`, `Demi-additionneur : 1 + 1 → S et C ?`, `Half adder: 1 + 1 → S and C?`),
          o: [`S = 0, C = 1`, `S = 1, C = 0`, `S = 1, C = 1`, `S = 0, C = 0`], a: 0, e: L(`1 XOR 1 = 0, 1 AND 1 = 1 (binär 10).`, `1 XOR 1 = 0, 1 AND 1 = 1 (binaire 10).`, `1 XOR 1 = 0, 1 AND 1 = 1 (binary 10).`) },
        { q: L(`Wie viele Speicheradressen sind mit 16 Adressbits möglich?`, `Combien d'adresses mémoire possibles avec 16 bits d'adresse ?`, `How many memory addresses are possible with 16 address bits?`),
          o: [`65 536`, `16 384`, `1 024`, `256`], a: 0, e: L(`2¹⁶ = 65 536.`, `2¹⁶ = 65 536.`, `2¹⁶ = 65,536.`) },
        { q: L(`Welche Reihenfolge hat der Befehlszyklus?`, `Quel est l'ordre du cycle d'instruction ?`, `What is the order of the instruction cycle?`),
          o: [`Fetch → Decode → Execute`, `Decode → Fetch → Execute`, `Execute → Fetch → Decode`, `Fetch → Execute → Decode`], a: 0, e: L(`Holen, Entschlüsseln, Ausführen.`, `Chercher, décoder, exécuter.`, `Fetch, decode, execute.`) }
      ]
    }
  ],
  cards: [
    [`Zweierkomplement`, `complément à deux`, `two's complement`], [`Hexadezimal`, `hexadécimal`, `hexadecimal`], [`Gatter`, `porte logique`, `logic gate`], [`Addierer`, `additionneur`, `adder`],
    [`Speicher`, `mémoire`, `memory`], [`Prozessor`, `processeur`, `processor`], [`Rechenwerk (ALU)`, `unité arithmétique et logique`, `arithmetic logic unit`], [`Takt`, `horloge`, `clock`],
    [`Bus`, `bus`, `bus`], [`eingebettetes System`, `système embarqué`, `embedded system`], [`Register`, `registre`, `register`], [`Befehl`, `instruction`, `instruction`]
  ]
});

MODULES.push({
  id: 'physik1', code: 'Physik 1', emoji: '🍎', color: '#c2410c',
  title: L(`Physik 1 (Mechanik)`, `Physique 1 (mécanique)`, `Physics 1 (mechanics)`),
  chapters: [
    {
      id: 'p11', title: L(`Kinematik, Newton, Energie`, `Cinématique, Newton, énergie`, `Kinematics, Newton, energy`),
      body: L(
        `<ul><li><b>Gleichmäßig beschleunigte Bewegung:</b> v = a·t · s = ½·a·t² · v² = 2·a·s</li><li><b>Newton:</b> 1. Trägheit · 2. <b>F = m·a</b> · 3. actio = reactio. Gewichtskraft F = m·g, g ≈ 9,81 m/s².</li><li><b>Impuls:</b> p = m·v (Erhaltung in abgeschlossenen Systemen)</li><li><b>Arbeit:</b> W = F·s·cos α · <b>Leistung:</b> P = W/t · <b>Kinetische Energie:</b> ½·m·v² · <b>Potenzielle Energie:</b> m·g·h</li><li><b>Energieerhaltung:</b> Fall aus Höhe h: v = √(2·g·h)</li></ul>
<p>Beispiel Biomechanik: Kräfte im Hüftgelenk beim Gehen, Stoßdämpfung bei Landungen.</p>`,
        `<ul><li><b>Mouvement uniformément accéléré :</b> v = a·t · s = ½·a·t² · v² = 2·a·s</li><li><b>Newton :</b> 1. inertie · 2. <b>F = m·a</b> · 3. action = réaction. Poids F = m·g, g ≈ 9,81 m/s².</li><li><b>Quantité de mouvement :</b> p = m·v (conservée dans un système isolé)</li><li><b>Travail :</b> W = F·s·cos α · <b>Puissance :</b> P = W/t · <b>Énergie cinétique :</b> ½·m·v² · <b>Énergie potentielle :</b> m·g·h</li><li><b>Conservation de l'énergie :</b> chute depuis la hauteur h : v = √(2·g·h)</li></ul>
<p>Exemple en biomécanique : forces dans l'articulation de la hanche à la marche, amortissement à la réception d'un saut.</p>`,
        `<ul><li><b>Uniformly accelerated motion:</b> v = a·t · s = ½·a·t² · v² = 2·a·s</li><li><b>Newton:</b> 1st inertia · 2nd <b>F = m·a</b> · 3rd action = reaction. Weight F = m·g, g ≈ 9.81 m/s².</li><li><b>Momentum:</b> p = m·v (conserved in an isolated system)</li><li><b>Work:</b> W = F·s·cos α · <b>Power:</b> P = W/t · <b>Kinetic energy:</b> ½·m·v² · <b>Potential energy:</b> m·g·h</li><li><b>Energy conservation:</b> fall from height h: v = √(2·g·h)</li></ul>
<p>Biomechanics example: forces in the hip joint while walking, shock absorption when landing.</p>`),
      quiz: [
        { q: L(`a = 2 m/s², t = 5 s, Start aus der Ruhe. Zurückgelegter Weg?`, `a = 2 m/s², t = 5 s, départ au repos. Distance parcourue ?`, `a = 2 m/s², t = 5 s, starting from rest. Distance travelled?`),
          o: [`25 m`, `10 m`, `50 m`, `12,5 m`], a: 0, e: L(`s = ½·2·5² = 25 m.`, `s = ½·2·5² = 25 m.`, `s = ½·2·5² = 25 m.`) },
        { q: L(`Freier Fall aus h = 20 m (g = 9,81 m/s²). Aufprallgeschwindigkeit?`, `Chute libre depuis h = 20 m (g = 9,81 m/s²). Vitesse à l'impact ?`, `Free fall from h = 20 m (g = 9.81 m/s²). Impact speed?`),
          o: [`≈ 19,8 m/s`, `≈ 14 m/s`, `≈ 39,6 m/s`, `≈ 9,8 m/s`], a: 0, e: L(`v = √(2·9,81·20) ≈ 19,8 m/s.`, `v = √(2·9,81·20) ≈ 19,8 m/s.`, `v = √(2·9.81·20) ≈ 19.8 m/s.`) },
        { q: L(`Welche Kraft braucht man, um 3 kg mit a = 4 m/s² zu beschleunigen?`, `Quelle force pour accélérer 3 kg à a = 4 m/s² ?`, `What force accelerates 3 kg at a = 4 m/s²?`),
          o: [`12 N`, `0,75 N`, `7 N`, `34 N`], a: 0, e: L(`F = m·a = 3·4 = 12 N.`, `F = m·a = 3·4 = 12 N.`, `F = m·a = 3·4 = 12 N.`) }
      ]
    },
    {
      id: 'p12', title: L(`Schwingungen und Strömung (Blutfluss)`, `Oscillations et écoulement (flux sanguin)`, `Oscillations and fluid flow (blood flow)`),
      body: L(
        `<ul><li><b>Hooke:</b> F = −k·x · <b>Federpendel:</b> T = 2π·√(m/k), f = 1/T, ω = 2π·f</li><li><b>Druck:</b> p = F/A (Pa = N/m²) · <b>hydrostatisch:</b> p = ρ·g·h</li><li><b>Kontinuität:</b> A₁·v₁ = A₂·v₂ (Verengung → höhere Geschwindigkeit)</li><li><b>Bernoulli:</b> p + ½·ρ·v² + ρ·g·h = konst. (schnellere Strömung → niedrigerer Druck)</li><li><b>Hagen–Poiseuille:</b> Q = π·r⁴·Δp / (8·η·L) – der Fluss hängt von r⁴ ab! Eine halbierte Gefäßweite (Stenose) senkt den Fluss auf 1/16.</li></ul>`,
        `<ul><li><b>Hooke :</b> F = −k·x · <b>pendule élastique :</b> T = 2π·√(m/k), f = 1/T, ω = 2π·f</li><li><b>Pression :</b> p = F/A (Pa = N/m²) · <b>hydrostatique :</b> p = ρ·g·h</li><li><b>Continuité :</b> A₁·v₁ = A₂·v₂ (rétrécissement → vitesse plus élevée)</li><li><b>Bernoulli :</b> p + ½·ρ·v² + ρ·g·h = cste (écoulement plus rapide → pression plus basse)</li><li><b>Hagen–Poiseuille :</b> Q = π·r⁴·Δp / (8·η·L) – le débit dépend de r⁴ ! Un diamètre divisé par deux (sténose) réduit le débit à 1/16.</li></ul>`,
        `<ul><li><b>Hooke:</b> F = −k·x · <b>spring pendulum:</b> T = 2π·√(m/k), f = 1/T, ω = 2π·f</li><li><b>Pressure:</b> p = F/A (Pa = N/m²) · <b>hydrostatic:</b> p = ρ·g·h</li><li><b>Continuity:</b> A₁·v₁ = A₂·v₂ (narrowing → higher velocity)</li><li><b>Bernoulli:</b> p + ½·ρ·v² + ρ·g·h = const. (faster flow → lower pressure)</li><li><b>Hagen–Poiseuille:</b> Q = π·r⁴·Δp / (8·η·L) – flow depends on r⁴! Halving the vessel radius (stenosis) cuts flow to 1/16.</li></ul>`),
      quiz: [
        { q: L(`Federpendel: m = 1 kg, k = 100 N/m. Schwingungsdauer T?`, `Pendule élastique : m = 1 kg, k = 100 N/m. Période T ?`, `Spring pendulum: m = 1 kg, k = 100 N/m. Period T?`),
          o: [`≈ 0,63 s`, `≈ 1 s`, `≈ 6,3 s`, `≈ 0,16 s`], a: 0, e: L(`T = 2π·√(1/100) = 2π·0,1 ≈ 0,628 s.`, `T = 2π·√(1/100) = 2π·0,1 ≈ 0,628 s.`, `T = 2π·√(1/100) = 2π·0.1 ≈ 0.628 s.`) },
        { q: L(`Der Gefäßradius halbiert sich (gleiches Δp, gleiche Länge). Der Fluss sinkt auf …`, `Le rayon du vaisseau est divisé par deux (même Δp, même longueur). Le débit tombe à …`, `The vessel radius is halved (same Δp, same length). Flow drops to …`),
          o: [`1/16`, `1/2`, `1/4`, `1/8`], a: 0, e: L(`Q ∝ r⁴ → (1/2)⁴ = 1/16.`, `Q ∝ r⁴ → (1/2)⁴ = 1/16.`, `Q ∝ r⁴ → (1/2)⁴ = 1/16.`) },
        { q: L(`Nach Bernoulli gilt in einer Verengung (höhere Geschwindigkeit) …`, `D'après Bernoulli, dans un rétrécissement (vitesse plus élevée) …`, `According to Bernoulli, in a narrowing (higher velocity) …`),
          o: [L(`der statische Druck sinkt`, `la pression statique baisse`, `static pressure falls`), L(`der statische Druck steigt`, `la pression statique augmente`, `static pressure rises`), L(`der Druck bleibt gleich`, `la pression reste identique`, `pressure stays the same`)], a: 0, e: L(`Gesamtenergie pro Volumen bleibt konstant.`, `L'énergie totale par volume reste constante.`, `Total energy per volume stays constant.`) }
      ]
    }
  ],
  cards: [
    [`Geschwindigkeit`, `vitesse`, `velocity / speed`], [`Beschleunigung`, `accélération`, `acceleration`], [`Kraft`, `force`, `force`], [`Masse`, `masse`, `mass`],
    [`Impuls`, `quantité de mouvement`, `momentum`], [`Arbeit`, `travail`, `work`], [`Leistung`, `puissance`, `power`], [`Energie`, `énergie`, `energy`],
    [`Druck`, `pression`, `pressure`], [`Schwingung`, `oscillation`, `oscillation`], [`Viskosität`, `viscosité`, `viscosity`], [`Strömung`, `écoulement`, `flow`]
  ]
});
