

let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let Rseed = new Random(seed);
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
let colors = "EEE77E-F0DA45-FBB040-B86228-D16562-D15054-A51E22-F1B7C9-E17FA0-B54365-670917-A789A6-603E6F-2C1D52-241537-67B8BE-13999F-0B6976-004554-8FD0BA-21B18A-087561-024235".split("-").map(a => `#${a}`);
let colors1 = "EAB94E-DD683B-D53C52-B5347E-603387-2F69AC-449F9C-7AB551".split("-").map(a => `#${a}`);
let colors2 = "F61067-5E239D-00F0B5-6DECAF-F4F4ED-FAA300-E57C04-FF6201".split("-").map(a => `#${a}`);
let colors3 = "8FD0BA-21B18A-087561-024235".split("-").map(a => `#${a}`);
let colors4 = "F63E02-FAA300-E57C04-FF6201".split("-").map(a => `#${a}`);
let colors5 = "E6D957-D8B07C-BA7B89-7A4E91-594D91-AC323C-CE5545-CF683A-DB9638-E2AD54".split("-").map(a => `#${a}`);
let colors6 = "F7F8F8-F4D498-EDA98E-E27C81-AA608C-724B84-543D6D-374A8A-3A6E96-4C97B0-5DBBC3-96D4C5-CAE7D4".split("-").map(a => `#${a}`);

let colorYellow = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"];
let sunColor;
let colorBlue = ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"];
let mountainColor;

let colorRed = "641220-6e1423-85182a-a11d33-a71e34-b21e35-bd1f36-c71f37-da1e37-e01e37".split("-").map(a => `#${a}`);
let colorSofts = "FAFAFA-ffffff-eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd".split("-").map(a => `#${a}`);
let glassColors = "0353a4-023e7d-002855-001845-001233-33415c-5c677d-7d8597-979dac".split("-").map(a => `#${a}`);

let planets = [];
let selectedPlanet = Rseed.random_int(0, 5);
let planet;

let gemiSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.6 103.19"><defs><style>.cls-1{fill:#939393;}.cls-2{fill:#c7c8ca;}.cls-3{fill:#ebebed;}.cls-4{fill:#f7f7f9;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><polygon class="cls-1" points="77.16 47.31 69.48 63.83 0.05 39.03 77.16 47.31"/><polygon class="cls-1" points="212.37 9.6 211.83 10.1 211.81 10.11 211.8 10.12 211.79 10.13 141.7 56.86 131.04 42.75 212.37 9.6"/><polygon class="cls-2" points="109.91 78.04 109.69 78.19 93.94 72.56 69.48 63.83 77.16 47.31 99.17 0 99.27 0.72 99.17 0.58 109.91 78.04"/><polygon class="cls-3" points="141.7 56.86 132.85 62.75 109.92 78.04 99.27 0.72 131.04 42.75 141.7 56.86"/><polygon class="cls-4" points="109.69 78.19 103.09 83.58 79.1 103.19 40.48 103.19 0 39.03 0 39.02 0.03 39.02 0.05 39.03 69.48 63.83 93.94 72.56 109.69 78.19"/><polygon class="cls-4" points="212.6 9.6 178.27 103.19 173.5 103.19 118.86 81.78 109.95 78.29 109.92 78.04 132.85 62.75 141.7 56.86 211.79 10.13 211.8 10.12 211.81 10.11 211.83 10.1 212.6 9.6"/><polygon class="cls-2" points="173.5 103.19 79.1 103.19 103.09 83.58 109.69 78.19 109.94 78.29 109.95 78.29 118.86 81.78 173.5 103.19"/></g></g></svg>`;
let gemi;
let availableNoiseLevels = [WIDTH / 25, WIDTH / 9, WIDTH / 5]
let pitircik = Rseed.random_choice(availableNoiseLevels);


