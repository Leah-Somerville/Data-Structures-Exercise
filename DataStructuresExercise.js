// 1a
const jedi = [];
// 1b
jedi[0] = `Luke`;
// 1c
jedi.push(`Obi-Wan Kenobi`);
// 1d
jedi.unshift(`Yoda`);
// 1e
console.log(jedi[1]);
// 1f
jedi.pop();
// 1g
jedi.shift();
console.log(jedi);


// 2a
const sithLords = [
    "Darth Vader", 
    "Darth Sidious", 
    "Darth Maul"
];
// 2b
const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
];
// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
// 2d
console.log(sithLords.slice(0,2));


// 3a
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO",
    assassin: "IG-88"
}
// 3b
console.log(droids["astromech"]);
// 3c
console.log(droids.protocol);
// 3d
droids["assassin"] = "IG-11";
console.log(droids["assassin"]);