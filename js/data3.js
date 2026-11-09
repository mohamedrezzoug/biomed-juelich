/* Module 9-11 : Physik 2, Werkstoffskunde, Praktische Informatik */
MODULES.push({
  id: 'physik2', code: 'Physik 2', emoji: '⚡', color: '#a21caf',
  title: L(`Physik 2 (Elektrizität, Magnetismus, Wellen, Optik)`, `Physique 2 (électricité, magnétisme, ondes, optique)`, `Physics 2 (electricity, magnetism, waves, optics)`),
  chapters: [
    {
      id: 'p21', title: L(`Elektrisches und magnetisches Feld`, `Champ électrique et magnétique`, `Electric and magnetic fields`),
      body: L(
        `<ul><li><b>Coulomb:</b> F = k·q₁·q₂ / r² (k ≈ 8,99·10⁹ N·m²/C²) · <b>Feldstärke:</b> E = F/q</li><li><b>Kondensator:</b> C = Q/U; Plattenkondensator C = ε₀·ε<sub>r</sub>·A/d; Energie W = ½·C·U²</li><li><b>Lorentzkraft:</b> F = q·v·B·sin α (Ladung im Magnetfeld, Kraft senkrecht zu v und B)</li><li><b>Induktion (Faraday):</b> U<sub>ind</sub> = −dΦ/dt</li><li><b>Transformator:</b> U<sub>s</sub>/U<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></li></ul>
<p>Medizintechnik: Defibrillator (Kondensatorentladung), MRT (starke Magnetfelder, Gradientenspulen), Elektrosicherheit (Patientenableitstrom).</p>`,
        `<ul><li><b>Coulomb :</b> F = k·q₁·q₂ / r² (k ≈ 8,99·10⁹ N·m²/C²) · <b>champ :</b> E = F/q</li><li><b>Condensateur :</b> C = Q/U ; condensateur plan C = ε₀·ε<sub>r</sub>·A/d ; énergie W = ½·C·U²</li><li><b>Force de Lorentz :</b> F = q·v·B·sin α (charge dans un champ magnétique, force perpendiculaire à v et B)</li><li><b>Induction (Faraday) :</b> U<sub>ind</sub> = −dΦ/dt</li><li><b>Transformateur :</b> U<sub>s</sub>/U<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></li></ul>
<p>Technique médicale : défibrillateur (décharge d'un condensateur), IRM (champs magnétiques intenses, bobines de gradient), sécurité électrique (courant de fuite patient).</p>`,
        `<ul><li><b>Coulomb:</b> F = k·q₁·q₂ / r² (k ≈ 8.99·10⁹ N·m²/C²) · <b>field strength:</b> E = F/q</li><li><b>Capacitor:</b> C = Q/U; parallel-plate C = ε₀·ε<sub>r</sub>·A/d; energy W = ½·C·U²</li><li><b>Lorentz force:</b> F = q·v·B·sin α (charge in a magnetic field, force perpendicular to v and B)</li><li><b>Induction (Faraday):</b> U<sub>ind</sub> = −dΦ/dt</li><li><b>Transformer:</b> U<sub>s</sub>/U<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></li></ul>
<p>Medical technology: defibrillator (capacitor discharge), MRI (strong magnetic fields, gradient coils), electrical safety (patient leakage current).</p>`),
      quiz: [
        { q: L(`Transformator: N_p = 1000, N_s = 100, U_p = 230 V. U_s = ?`, `Transformateur : N_p = 1000, N_s = 100, U_p = 230 V. U_s = ?`, `Transformer: N_p = 1000, N_s = 100, U_p = 230 V. U_s = ?`),
          o: [`23 V`, `2300 V`, `230 V`, `2,3 V`], a: 0, e: L(`U_s = 230 · 100/1000 = 23 V.`, `U_s = 230 · 100/1000 = 23 V.`, `U_s = 230 · 100/1000 = 23 V.`) },
        { q: L(`Kondensator C = 100 µF, U = 400 V. Gespeicherte Energie (Defibrillator-Größenordnung)?`, `Condensateur C = 100 µF, U = 400 V. Énergie stockée (ordre de grandeur d'un défibrillateur) ?`, `Capacitor C = 100 µF, U = 400 V. Stored energy (defibrillator order of magnitude)?`),
          o: [`8 J`, `40 J`, `0,8 J`, `80 J`], a: 0, e: L(`W = ½·10⁻⁴·400² = 8 J.`, `W = ½·10⁻⁴·400² = 8 J.`, `W = ½·10⁻⁴·400² = 8 J.`) },
        { q: L(`Die Lorentzkraft steht …`, `La force de Lorentz est …`, `The Lorentz force is …`),
          o: [L(`senkrecht zu v und B`, `perpendiculaire à v et B`, `perpendicular to v and B`), L(`parallel zu v`, `parallèle à v`, `parallel to v`), L(`parallel zu B`, `parallèle à B`, `parallel to B`)], a: 0, e: L(`F = q·(v × B) – Kreuzprodukt.`, `F = q·(v × B) – produit vectoriel.`, `F = q·(v × B) – cross product.`) }
      ]
    },
    {
      id: 'p22', title: L(`Wellen und Optik`, `Ondes et optique`, `Waves and optics`),
      body: L(
        `<ul><li><b>Welle:</b> c = λ·f · Lichtgeschwindigkeit c ≈ 3·10⁸ m/s</li><li><b>Brechung (Snellius):</b> n₁·sin α₁ = n₂·sin α₂ · Totalreflexion → Lichtleiter (Endoskopie!)</li><li><b>Dünne Linse:</b> 1/f = 1/g + 1/b · Abbildungsmaßstab B/G = b/g · Brechkraft D = 1/f (in Dioptrien)</li><li><b>Interferenz und Beugung:</b> Überlagerung von Wellen, Auflösungsgrenze</li><li><b>Photon:</b> E = h·f (h = 6,626·10⁻³⁴ J·s); Welle-Teilchen-Dualismus</li><li>Elektromagnetisches Spektrum: Radio → Mikrowellen → IR → sichtbar → UV → Röntgen → γ</li></ul>`,
        `<ul><li><b>Onde :</b> c = λ·f · vitesse de la lumière c ≈ 3·10⁸ m/s</li><li><b>Réfraction (Snell) :</b> n₁·sin α₁ = n₂·sin α₂ · réflexion totale → fibre optique (endoscopie !)</li><li><b>Lentille mince :</b> 1/f = 1/g + 1/b · grandissement B/G = b/g · vergence D = 1/f (en dioptries)</li><li><b>Interférences et diffraction :</b> superposition d'ondes, limite de résolution</li><li><b>Photon :</b> E = h·f (h = 6,626·10⁻³⁴ J·s) ; dualité onde-corpuscule</li><li>Spectre électromagnétique : radio → micro-ondes → IR → visible → UV → rayons X → γ</li></ul>`,
        `<ul><li><b>Wave:</b> c = λ·f · speed of light c ≈ 3·10⁸ m/s</li><li><b>Refraction (Snell):</b> n₁·sin α₁ = n₂·sin α₂ · total internal reflection → optical fibre (endoscopy!)</li><li><b>Thin lens:</b> 1/f = 1/g + 1/b · magnification B/G = b/g · optical power D = 1/f (in dioptres)</li><li><b>Interference and diffraction:</b> superposition of waves, resolution limit</li><li><b>Photon:</b> E = h·f (h = 6.626·10⁻³⁴ J·s); wave–particle duality</li><li>Electromagnetic spectrum: radio → microwaves → IR → visible → UV → X-rays → γ</li></ul>`),
      quiz: [
        { q: L(`Wellenlänge einer Radiowelle mit f = 100 MHz?`, `Longueur d'onde d'une onde radio de f = 100 MHz ?`, `Wavelength of a radio wave with f = 100 MHz?`),
          o: [`3 m`, `0,3 m`, `30 m`, `300 m`], a: 0, e: L(`λ = c/f = 3·10⁸ / 10⁸ = 3 m.`, `λ = c/f = 3·10⁸ / 10⁸ = 3 m.`, `λ = c/f = 3·10⁸ / 10⁸ = 3 m.`) },
        { q: L(`Linse f = 10 cm, Gegenstandsweite g = 30 cm. Bildweite b?`, `Lentille f = 10 cm, distance objet g = 30 cm. Distance image b ?`, `Lens f = 10 cm, object distance g = 30 cm. Image distance b?`),
          o: [`15 cm`, `20 cm`, `7,5 cm`, `30 cm`], a: 0, e: L(`1/b = 1/10 − 1/30 = 2/30 → b = 15 cm.`, `1/b = 1/10 − 1/30 = 2/30 → b = 15 cm.`, `1/b = 1/10 − 1/30 = 2/30 → b = 15 cm.`) },
        { q: L(`Licht geht von Luft (n = 1) in Wasser (n = 1,33) bei α₁ = 30°. Der Brechungswinkel ist …`, `La lumière passe de l'air (n = 1) à l'eau (n = 1,33) avec α₁ = 30°. L'angle de réfraction est …`, `Light goes from air (n = 1) into water (n = 1.33) at α₁ = 30°. The refraction angle is …`),
          o: [`≈ 22°`, `≈ 40°`, `30°`, `≈ 45°`], a: 0, e: L(`sin α₂ = 0,5/1,33 ≈ 0,376 → α₂ ≈ 22°. Zum Lot hin gebrochen.`, `sin α₂ = 0,5/1,33 ≈ 0,376 → α₂ ≈ 22°. Rapproché de la normale.`, `sin α₂ = 0.5/1.33 ≈ 0.376 → α₂ ≈ 22°. Bent toward the normal.`) }
      ]
    }
  ],
  cards: [
    [`Ladung`, `charge`, `charge`], [`Feld`, `champ`, `field`], [`Induktion`, `induction`, `induction`], [`Wechselspannung`, `tension alternative`, `alternating voltage`],
    [`Welle`, `onde`, `wave`], [`Wellenlänge`, `longueur d'onde`, `wavelength`], [`Frequenz`, `fréquence`, `frequency`], [`Brechung`, `réfraction`, `refraction`],
    [`Linse`, `lentille`, `lens`], [`Brennweite`, `distance focale`, `focal length`], [`Beugung`, `diffraction`, `diffraction`], [`Lichtleiter`, `fibre optique`, `optical fibre`]
  ]
});

MODULES.push({
  id: 'werkstoff', code: 'Werkstoffe', emoji: '🔩', color: '#475569',
  title: L(`Werkstoffskunde (inkl. Biomaterialien)`, `Science des matériaux (biomatériaux inclus)`, `Materials Science (incl. biomaterials)`),
  chapters: [
    {
      id: 'ws1', title: L(`Aufbau und mechanische Eigenschaften`, `Structure et propriétés mécaniques`, `Structure and mechanical properties`),
      body: L(
        `<ul><li><b>Werkstoffgruppen:</b> Metalle, Keramiken, Polymere, Verbundwerkstoffe</li><li><b>Bindungen:</b> metallisch, ionisch, kovalent (+ schwache Van-der-Waals-/Wasserstoffbrücken)</li><li><b>Kristallgitter:</b> kfz (kubisch-flächenzentriert, gut verformbar), krz (kubisch-raumzentriert), hdp (hexagonal dichtest gepackt)</li><li><b>Zugversuch:</b> Spannung σ = F/A₀ · Dehnung ε = ΔL/L₀ · <b>Hooke:</b> σ = E·ε (E-Modul = Steifigkeit)</li><li>Kennwerte: Streckgrenze R<sub>e</sub> (R<sub>p0,2</sub>), Zugfestigkeit R<sub>m</sub>, Bruchdehnung A</li><li><b>Duktil</b> (viel plastische Verformung) vs. <b>spröde</b> (Bruch ohne Vorwarnung)</li><li>Ermüdung: Bruch unter zyklischer Last unterhalb der Streckgrenze – wichtig für Implantate (Millionen Schritte!)</li></ul>`,
        `<ul><li><b>Familles :</b> métaux, céramiques, polymères, composites</li><li><b>Liaisons :</b> métallique, ionique, covalente (+ liaisons faibles de van der Waals / hydrogène)</li><li><b>Réseaux cristallins :</b> cfc (cubique à faces centrées, très ductile), cc (cubique centré), hc (hexagonal compact)</li><li><b>Essai de traction :</b> contrainte σ = F/A₀ · déformation ε = ΔL/L₀ · <b>Hooke :</b> σ = E·ε (module d'Young = rigidité)</li><li>Grandeurs : limite d'élasticité R<sub>e</sub> (R<sub>p0,2</sub>), résistance à la traction R<sub>m</sub>, allongement à la rupture A</li><li><b>Ductile</b> (forte déformation plastique) vs <b>fragile</b> (rupture sans préavis)</li><li>Fatigue : rupture sous charge cyclique en dessous de la limite d'élasticité – crucial pour les implants (millions de pas !)</li></ul>`,
        `<ul><li><b>Material classes:</b> metals, ceramics, polymers, composites</li><li><b>Bonding:</b> metallic, ionic, covalent (+ weak van der Waals / hydrogen bonds)</li><li><b>Crystal lattices:</b> fcc (face-centred cubic, very ductile), bcc (body-centred cubic), hcp (hexagonal close-packed)</li><li><b>Tensile test:</b> stress σ = F/A₀ · strain ε = ΔL/L₀ · <b>Hooke:</b> σ = E·ε (Young's modulus = stiffness)</li><li>Properties: yield strength R<sub>e</sub> (R<sub>p0.2</sub>), tensile strength R<sub>m</sub>, elongation at break A</li><li><b>Ductile</b> (lots of plastic deformation) vs. <b>brittle</b> (fracture without warning)</li><li>Fatigue: failure under cyclic load below the yield strength – vital for implants (millions of steps!)</li></ul>`),
      quiz: [
        { q: L(`F = 10 kN auf A₀ = 50 mm². Spannung σ?`, `F = 10 kN sur A₀ = 50 mm². Contrainte σ ?`, `F = 10 kN on A₀ = 50 mm². Stress σ?`),
          o: [`200 MPa`, `500 MPa`, `20 MPa`, `2 GPa`], a: 0, e: L(`10 000 N / 50 mm² = 200 N/mm² = 200 MPa.`, `10 000 N / 50 mm² = 200 N/mm² = 200 MPa.`, `10,000 N / 50 mm² = 200 N/mm² = 200 MPa.`) },
        { q: L(`E = 200 GPa, σ = 200 MPa (elastisch). Dehnung ε?`, `E = 200 GPa, σ = 200 MPa (élastique). Déformation ε ?`, `E = 200 GPa, σ = 200 MPa (elastic). Strain ε?`),
          o: [`0,1 %`, `1 %`, `10 %`, `0,01 %`], a: 0, e: L(`ε = σ/E = 200 / 200 000 = 0,001.`, `ε = σ/E = 200 / 200 000 = 0,001.`, `ε = σ/E = 200 / 200,000 = 0.001.`) },
        { q: L(`Ein spröder Werkstoff …`, `Un matériau fragile …`, `A brittle material …`),
          o: [L(`bricht mit wenig plastischer Verformung`, `se rompt avec peu de déformation plastique`, `fractures with little plastic deformation`), L(`verformt sich stark vor dem Bruch`, `se déforme fortement avant la rupture`, `deforms a lot before fracture`), L(`hat immer einen niedrigen E-Modul`, `a toujours un faible module d'Young`, `always has a low Young's modulus`)], a: 0, e: L(`Beispiel: Keramik, Glas.`, `Exemples : céramique, verre.`, `Examples: ceramics, glass.`) }
      ]
    },
    {
      id: 'ws2', title: L(`Biomaterialien und Implantate`, `Biomatériaux et implants`, `Biomaterials and implants`),
      body: L(
        `<p><b>Anforderungen:</b> Biokompatibilität, Korrosionsbeständigkeit, Ermüdungsfestigkeit, Verschleißfestigkeit, Sterilisierbarkeit.</p>
<ul><li><b>Titan</b> (z. B. Ti-6Al-4V): leicht, Passivschicht TiO₂, gute Osseointegration → Schrauben, Zahnimplantate, Hüftschäfte</li><li><b>Edelstahl 316L</b>, <b>CoCr-Legierungen</b>: fest, verschleißfest → Gelenkkomponenten, Stents</li><li><b>Polymere:</b> UHMWPE (Gelenkpfannen), PMMA (Knochenzement), Silikon (weich)</li><li><b>Keramik:</b> Al₂O₃, ZrO₂ (Hüftköpfe), Hydroxylapatit (Beschichtung, knochenähnlich)</li></ul>
<p><b>Stress-Shielding:</b> Ein zu steifer Implantatwerkstoff (E<sub>Ti</sub> ≈ 110 GPa, Stahl ≈ 200 GPa vs. Knochen ≈ 10–30 GPa) nimmt die Last auf, der Knochen wird nicht belastet und baut sich ab.</p>`,
        `<p><b>Exigences :</b> biocompatibilité, résistance à la corrosion, à la fatigue et à l'usure, stérilisabilité.</p>
<ul><li><b>Titane</b> (ex. Ti-6Al-4V) : léger, couche passive de TiO₂, bonne ostéointégration → vis, implants dentaires, tiges de hanche</li><li><b>Acier inoxydable 316L</b>, <b>alliages CoCr</b> : résistants, résistants à l'usure → composants articulaires, stents</li><li><b>Polymères :</b> UHMWPE (cotyles), PMMA (ciment osseux), silicone (souple)</li><li><b>Céramiques :</b> Al₂O₃, ZrO₂ (têtes fémorales), hydroxyapatite (revêtement, proche de l'os)</li></ul>
<p><b>Stress-shielding :</b> un implant trop rigide (E<sub>Ti</sub> ≈ 110 GPa, acier ≈ 200 GPa vs os ≈ 10–30 GPa) supporte la charge ; l'os n'est plus sollicité et se résorbe.</p>`,
        `<p><b>Requirements:</b> biocompatibility, corrosion resistance, fatigue and wear resistance, sterilisability.</p>
<ul><li><b>Titanium</b> (e.g. Ti-6Al-4V): light, TiO₂ passive layer, good osseointegration → screws, dental implants, hip stems</li><li><b>Stainless steel 316L</b>, <b>CoCr alloys</b>: strong, wear-resistant → joint components, stents</li><li><b>Polymers:</b> UHMWPE (acetabular cups), PMMA (bone cement), silicone (soft)</li><li><b>Ceramics:</b> Al₂O₃, ZrO₂ (femoral heads), hydroxyapatite (coating, bone-like)</li></ul>
<p><b>Stress shielding:</b> an implant that is too stiff (E<sub>Ti</sub> ≈ 110 GPa, steel ≈ 200 GPa vs. bone ≈ 10–30 GPa) carries the load; the bone is no longer stressed and is resorbed.</p>`),
      quiz: [
        { q: L(`Welcher Werkstoff wird typischerweise für Hüft-Gelenkpfannen als Gleitpartner verwendet?`, `Quel matériau sert typiquement de partenaire de glissement pour les cotyles de hanche ?`, `Which material is typically used as the bearing for hip acetabular cups?`),
          o: [`UHMWPE`, `PMMA-Knochenzement`, `Silikon`, `Gusseisen`], a: 0, e: L(`Ultrahochmolekulares Polyethylen – verschleißarm.`, `Polyéthylène à très haut poids moléculaire – faible usure.`, `Ultra-high-molecular-weight polyethylene – low wear.`) },
        { q: L(`Was verursacht Stress-Shielding?`, `Qu'est-ce qui cause le stress-shielding ?`, `What causes stress shielding?`),
          o: [L(`ein zu hoher E-Modul des Implantats gegenüber dem Knochen`, `un module d'Young de l'implant trop élevé par rapport à l'os`, `an implant Young's modulus that is too high compared with bone`), L(`zu geringe Korrosion`, `une corrosion trop faible`, `too little corrosion`), L(`zu geringe Dichte`, `une densité trop faible`, `too low density`)], a: 0, e: L(`Der Knochen wird entlastet und baut ab.`, `L'os est déchargé et se résorbe.`, `The bone is unloaded and is resorbed.`) },
        { q: L(`Warum ist Titan korrosionsbeständig?`, `Pourquoi le titane résiste-t-il à la corrosion ?`, `Why is titanium corrosion-resistant?`),
          o: [L(`dichte TiO₂-Passivschicht`, `couche passive dense de TiO₂`, `dense TiO₂ passive layer`), L(`es ist ein Edelmetall`, `c'est un métal noble`, `it is a noble metal`), L(`es ist weich`, `il est mou`, `it is soft`)], a: 0, e: L(`Die Oxidschicht bildet sich selbst nach.`, `La couche d'oxyde se reforme d'elle-même.`, `The oxide layer re-forms itself.`) }
      ]
    }
  ],
  cards: [
    [`Werkstoff`, `matériau`, `material`], [`Spannung`, `contrainte`, `stress`], [`Dehnung`, `déformation`, `strain`], [`Elastizitätsmodul`, `module d'Young`, `Young's modulus`],
    [`Streckgrenze`, `limite d'élasticité`, `yield strength`], [`Zugfestigkeit`, `résistance à la traction`, `tensile strength`], [`spröde`, `fragile`, `brittle`], [`duktil`, `ductile`, `ductile`],
    [`Ermüdung`, `fatigue`, `fatigue`], [`Korrosion`, `corrosion`, `corrosion`], [`Biokompatibilität`, `biocompatibilité`, `biocompatibility`], [`Knochenzement`, `ciment osseux`, `bone cement`]
  ]
});

MODULES.push({
  id: 'prakinf', code: 'Prakt. Inf.', emoji: '🧮', color: '#0369a1',
  title: L(`Praktische Informatik`, `Informatique pratique`, `Practical Computer Science`),
  chapters: [
    {
      id: 'pi1', title: L(`Algorithmen und Datenstrukturen`, `Algorithmes et structures de données`, `Algorithms and data structures`),
      body: L(
        `<ul><li><b>Algorithmus:</b> eindeutige, endliche Folge von Schritten (terminiert, deterministisch, allgemein).</li><li><b>Datenstrukturen:</b> Array/Liste, <b>Stack</b> (LIFO – last in, first out), <b>Queue</b> (FIFO – first in, first out), verkettete Liste, Baum, Graph.</li><li><b>Komplexität (O-Notation):</b> O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ).</li><li><b>Suchen:</b> linear O(n); binär O(log n) – nur in <i>sortierten</i> Daten.</li><li><b>Sortieren:</b> Bubble/Insertion O(n²); Merge-/Quicksort O(n log n).</li><li><b>Rekursion:</b> Funktion ruft sich selbst auf (Abbruchbedingung nicht vergessen!), z. B. Fakultät n! = n·(n−1)!</li></ul>`,
        `<ul><li><b>Algorithme :</b> suite d'étapes non ambiguë et finie (termine, déterministe, général).</li><li><b>Structures de données :</b> tableau/liste, <b>pile</b> (LIFO – dernier entré, premier sorti), <b>file</b> (FIFO – premier entré, premier sorti), liste chaînée, arbre, graphe.</li><li><b>Complexité (notation O) :</b> O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ).</li><li><b>Recherche :</b> linéaire O(n) ; binaire O(log n) – seulement sur données <i>triées</i>.</li><li><b>Tri :</b> bulles/insertion O(n²) ; tri fusion/rapide O(n log n).</li><li><b>Récursivité :</b> une fonction s'appelle elle-même (ne pas oublier la condition d'arrêt !), ex. factorielle n! = n·(n−1)!</li></ul>`,
        `<ul><li><b>Algorithm:</b> unambiguous, finite sequence of steps (terminates, deterministic, general).</li><li><b>Data structures:</b> array/list, <b>stack</b> (LIFO – last in, first out), <b>queue</b> (FIFO – first in, first out), linked list, tree, graph.</li><li><b>Complexity (Big-O):</b> O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ).</li><li><b>Searching:</b> linear O(n); binary O(log n) – only on <i>sorted</i> data.</li><li><b>Sorting:</b> bubble/insertion O(n²); merge/quick sort O(n log n).</li><li><b>Recursion:</b> a function calls itself (don't forget the base case!), e.g. factorial n! = n·(n−1)!</li></ul>`),
      quiz: [
        { q: L(`Welche Datenstruktur arbeitet nach dem LIFO-Prinzip?`, `Quelle structure de données suit le principe LIFO ?`, `Which data structure follows the LIFO principle?`),
          o: [`Stack`, `Queue`, `Array`, `Hash-Tabelle`], a: 0, e: L(`Stack = Stapel: zuletzt hinein, zuerst heraus.`, `Pile : dernier entré, premier sorti.`, `Stack: last in, first out.`) },
        { q: L(`Welche Voraussetzung hat die binäre Suche?`, `Quelle condition requiert la recherche binaire ?`, `What does binary search require?`),
          o: [L(`sortierte Daten`, `données triées`, `sorted data`), L(`höchstens 10 Elemente`, `au plus 10 éléments`, `at most 10 elements`), L(`eine verkettete Liste`, `une liste chaînée`, `a linked list`)], a: 0, e: L(`Nur dann kann man den Suchbereich halbieren.`, `Seulement alors on peut diviser l'espace de recherche par deux.`, `Only then can the search range be halved.`) },
        { q: L(`Welcher Algorithmus ist am schnellsten bei großem n?`, `Quel algorithme est le plus rapide pour un grand n ?`, `Which is fastest for large n?`),
          o: [`O(n log n)`, `O(n²)`, `O(2ⁿ)`, `O(n³)`], a: 0, e: L(`n log n wächst deutlich langsamer als n².`, `n log n croît bien plus lentement que n².`, `n log n grows much more slowly than n².`) }
      ]
    },
    {
      id: 'pi2', title: L(`Datenbanken, Netzwerke und medizinische Informatik`, `Bases de données, réseaux et informatique médicale`, `Databases, networks and medical informatics`),
      body: L(
        `<ul><li><b>Relationale Datenbank:</b> Tabellen, Zeilen (Datensätze), Spalten (Attribute), <b>Primärschlüssel</b>, Fremdschlüssel. <b>SQL:</b> <code>SELECT name FROM patient WHERE alter &gt; 60;</code> · INSERT, UPDATE, DELETE.</li><li><b>Betriebssystem:</b> Prozess, Thread, Dateisystem, Speicherverwaltung.</li><li><b>Netzwerk:</b> IP-Adresse, TCP (zuverlässig) vs. UDP (schnell), HTTP/HTTPS, Client-Server.</li><li><b>Medizinische Informatik:</b> <b>DICOM</b> (Standard für medizinische Bilder und deren Übertragung), <b>HL7/FHIR</b> (Austausch klinischer Daten), <b>PACS</b> (Bildarchiv), Krankenhausinformationssystem (KIS).</li><li><b>Datenschutz:</b> Gesundheitsdaten sind besonders schützenswert (DSGVO): Verschlüsselung, Zugriffskontrolle, Datensparsamkeit.</li></ul>`,
        `<ul><li><b>Base de données relationnelle :</b> tables, lignes (enregistrements), colonnes (attributs), <b>clé primaire</b>, clé étrangère. <b>SQL :</b> <code>SELECT name FROM patient WHERE alter &gt; 60;</code> · INSERT, UPDATE, DELETE.</li><li><b>Système d'exploitation :</b> processus, thread, système de fichiers, gestion de la mémoire.</li><li><b>Réseau :</b> adresse IP, TCP (fiable) vs UDP (rapide), HTTP/HTTPS, client-serveur.</li><li><b>Informatique médicale :</b> <b>DICOM</b> (norme des images médicales et de leur transfert), <b>HL7/FHIR</b> (échange de données cliniques), <b>PACS</b> (archivage d'images), système d'information hospitalier.</li><li><b>Protection des données :</b> les données de santé sont particulièrement sensibles (RGPD) : chiffrement, contrôle d'accès, minimisation des données.</li></ul>`,
        `<ul><li><b>Relational database:</b> tables, rows (records), columns (attributes), <b>primary key</b>, foreign key. <b>SQL:</b> <code>SELECT name FROM patient WHERE alter &gt; 60;</code> · INSERT, UPDATE, DELETE.</li><li><b>Operating system:</b> process, thread, file system, memory management.</li><li><b>Network:</b> IP address, TCP (reliable) vs. UDP (fast), HTTP/HTTPS, client–server.</li><li><b>Medical informatics:</b> <b>DICOM</b> (standard for medical images and their transfer), <b>HL7/FHIR</b> (exchange of clinical data), <b>PACS</b> (image archive), hospital information system.</li><li><b>Data protection:</b> health data is especially sensitive (GDPR): encryption, access control, data minimisation.</li></ul>`),
      quiz: [
        { q: L(`Welcher SQL-Befehl liest Daten aus einer Tabelle?`, `Quelle commande SQL lit des données d'une table ?`, `Which SQL command reads data from a table?`),
          o: [`SELECT`, `INSERT`, `DELETE`, `UPDATE`], a: 0, e: L(`SELECT … FROM … WHERE …`, `SELECT … FROM … WHERE …`, `SELECT … FROM … WHERE …`) },
        { q: L(`DICOM ist …`, `DICOM est …`, `DICOM is …`),
          o: [L(`ein Standard für medizinische Bilddaten`, `une norme pour les images médicales`, `a standard for medical image data`), L(`ein Betriebssystem`, `un système d'exploitation`, `an operating system`), L(`ein Röntgenverfahren`, `une technique de radiographie`, `an X-ray method`)], a: 0, e: L(`Digital Imaging and Communications in Medicine.`, `Digital Imaging and Communications in Medicine.`, `Digital Imaging and Communications in Medicine.`) },
        { q: L(`Was ist ein Primärschlüssel?`, `Qu'est-ce qu'une clé primaire ?`, `What is a primary key?`),
          o: [L(`ein eindeutiger Bezeichner jeder Zeile`, `un identifiant unique de chaque ligne`, `a unique identifier for every row`), L(`ein Passwort`, `un mot de passe`, `a password`), L(`eine Spalte mit Text`, `une colonne de texte`, `a text column`)], a: 0, e: L(`z. B. die Patienten-ID.`, `par ex. l'identifiant du patient.`, `e.g. the patient ID.`) }
      ]
    }
  ],
  cards: [
    [`Algorithmus`, `algorithme`, `algorithm`], [`Datenstruktur`, `structure de données`, `data structure`], [`Stapel`, `pile`, `stack`], [`Warteschlange`, `file d'attente`, `queue`],
    [`Rekursion`, `récursivité`, `recursion`], [`Datenbank`, `base de données`, `database`], [`Primärschlüssel`, `clé primaire`, `primary key`], [`Netzwerk`, `réseau`, `network`],
    [`Verschlüsselung`, `chiffrement`, `encryption`], [`Datenschutz`, `protection des données`, `data protection`], [`Betriebssystem`, `système d'exploitation`, `operating system`], [`Schnittstelle`, `interface`, `interface`]
  ]
});
