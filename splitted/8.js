

let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let Rseed = new Random(seed);

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

