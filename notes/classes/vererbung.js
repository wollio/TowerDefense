

// Konstruktoren
function Auto (name) {
    this.name = name;
    alert('Auto wird gebaut');
}

// Lege Methoden an
Auto.prototype.fahr = function () {
    alert(this.name + ' macht brumm, brumm');
};

function Elektroauto (name) {
    Auto.call(this, name);
    alert('Batterie und Elektromotor werden eingebaut');
}

// Pseudoklassen-Vererbung
inheritPseudoClass(Auto, Elektroauto);

// Lege Methoden an
Elektroauto.prototype.lade = function () {
    alert(this.name + ' wird geladen');
};

//Um die Vererbung zu testen, werden zwei Instanzen erzeugt und anschließend sowohl vererbte als auch eigene Methoden aufgerufen:

// Erzeuge Beispiel-Instanzen
    var auto = new Auto('2CV'); // Auto 2CV wird gebaut
var elektroauto = new Elektroauto('La Jamais Content');
// Auto La Jamais Content wird gebaut,
// La Jamais Content: Batterie und Elektromotor werden eingebaut

auto.fahr(); // 2CV macht brumm, brumm
elektroauto.fahr(); // La Jamais Content macht brumm, brumm
elektroauto.lade(); // La Jamais Content wird geladen