/*
let tokenData = {"hash":"0x11ac128f8b54949c12d04102cfc01960fc496813cbc3495bf77aeed738579738","tokenId":"57000284"};
let hash = tokenData.hash;
*/
function random_hash() {
    let chars = "0123456789abcdef";
    let result = '0x';
    for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

let tokenData = {"hash": random_hash()}
// let tokenData = {"hash": "0x010f2c2d0dae6d7aa771527ce57e0f8c7576ff36348339e6527ca5bc09fd9454", "tokenId": "57000284"};


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

function preload() {
    const loadablePlanets = [
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.19 123.19"><defs><style>.cls-1{fill:#62a9de;}.cls-2{fill:#659a58;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="earth"><path class="cls-1" d="M123.19,61.6a61.49,61.49,0,0,1-38.55,57.13h0a61.28,61.28,0,0,1-23,4.46H59.93a61.67,61.67,0,0,1-13.4-1.85c-1.73-.43-3.44-.94-5.11-1.52h0A61.64,61.64,0,0,1,0,61.6c0-.8,0-1.59,0-2.38A61.64,61.64,0,0,1,36.12,5.5a60.79,60.79,0,0,1,6.62-2.56A60,60,0,0,1,54,.47,61.63,61.63,0,0,1,116.66,34,56.81,56.81,0,0,1,119,39.32,61.27,61.27,0,0,1,123.19,61.6Z"/><path class="cls-2" d="M89,13c-.53-1.62,1.45-3.1,4-4.42A61.73,61.73,0,0,1,116.66,34a66.6,66.6,0,0,0-10.26-2.44c-3.3-.67-7.92,5.49-9,5.49s-7.48-1.54-4-3.07,8.15-11.23,5.06-15S89.69,15,89,13Z"/><path class="cls-2" d="M123.19,61.6a61.54,61.54,0,0,1-2.89,18.71c-4.3,5.83-10,13.59-11,15.45-1.76,3.08-10.11,5.28-13,3.52s-.67-7.92,1.31-11.22-3.07-16.72.44-21-2.86-8.68-5.72-5.45S71.2,60.12,68.57,58.14s2.42-11,2-11.66,5.72-4.4,9.46-4,3.51-2.86,9.9-3.3,17.78,4.76,20.45,4.63A12.81,12.81,0,0,0,119,39.32,61.27,61.27,0,0,1,123.19,61.6Z"/><path class="cls-2" d="M87.19,20.52c2.94,2.94,2.35,4,0,5.58s-9.53.58-9.53,0-2.64-6.16-.88-7S87.19,20.52,87.19,20.52Z"/><path class="cls-2" d="M61.6,7.64C58,9.53,48,12.75,48,12.75s-9.45.15-6.46-5.11a10.63,10.63,0,0,0,1.16-4.7A60,60,0,0,1,54,.47C60.12,4.37,64.58,6.07,61.6,7.64Z"/><path class="cls-2" d="M42.75,21.26c-.58-1.18-5.57-1.18-5.57-1.18s-.29,5-3.81,2.83-5.57,11.55-5,13.3,4.11,7.93.59,7.93S21.93,43,16.55,40s-.78,8.8-4.3,10.26S14.89,69.07,16.55,70s1.57,7.91,0,7.91S13.42,76.11,12,73.47s-.59-5.87-3.82-6.42C5.88,66.66,2.83,62.5,0,59.22A61.64,61.64,0,0,1,36.12,5.5c-1,3.31-2.33,7.81-1.58,7.25a21.5,21.5,0,0,0,4.55,0c1.91-.29,4.84,4.4,6.89,4.7S43.34,22.43,42.75,21.26Z"/><path class="cls-2" d="M41.42,119.81h0C22.68,102,27.9,113.46,23.83,98.54,11.57,92.39,15.05,89,15,87.84c-.1-8.8,5.72-17.31,11-19.36,6.11-2.38,11.43,11.15,13.05,11.44s6,2.64,9.82,2.64,6.46,9.09,10,7.92,5.57,1.46,3.66,5.57-7.48,12.62-6,15.55S51.77,114,51.77,114s-4.51,1.08-5.24,7.38Z"/><path class="cls-2" d="M84.64,118.73a61.28,61.28,0,0,1-23,4.46H59.93a10.44,10.44,0,0,0,2.62-4.84s4.78,4.11,5.25,3.23,6-5.28,6-5.28l4.1,2.35s1-5.86,4.73-2.35A9.92,9.92,0,0,1,84.64,118.73Z"/></g></g></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.19 123.19"><defs><style>.cls-1{fill:#d15442;}.cls-2{fill:#ad5338;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="mars"><path class="cls-1" d="M123.07,65.51a61.55,61.55,0,0,1-91.18,50l-.7-.39a59.86,59.86,0,0,1-8.44-5.76c-1.1-.89-2.17-1.82-3.2-2.78-.4-.37-.79-.75-1.18-1.13A64.37,64.37,0,0,1,12.64,99,61.42,61.42,0,0,1,2.29,78.25a62.29,62.29,0,0,1-1.9-9.77,61.14,61.14,0,0,1,4.2-30.23c.56-1.36,1.16-2.69,1.82-4A61.71,61.71,0,0,1,23.69,13c.33-.26.67-.52,1-.76a61.61,61.61,0,0,1,83.63,9.21c.1.12.2.23.29.35a61,61,0,0,1,10.69,18.25,60.24,60.24,0,0,1,2.48,8.5h0a61.28,61.28,0,0,1,1,6.11c.11,1,.2,2,.27,3.07A62.46,62.46,0,0,1,123.07,65.51Z"/><path class="cls-2" d="M99,93.13a149.53,149.53,0,0,1,3,15,61.28,61.28,0,0,1-17.33,10.63c-11.42-3.37-25.59-.79-35.06,3.3a61,61,0,0,1-17.71-6.48,62.24,62.24,0,0,1-.7-8.11c0-4.34-6-2.83-12.82-2A64.37,64.37,0,0,1,12.64,99a61,61,0,0,1-7-11.69c12.92,1.22,33.77,7.89,41.31,5.83,11.23-3.06,2-14.29,22.21-22.46S117.29,87.9,117.29,87.9Z"/><path class="cls-2" d="M23.7,49.48c6.37,3.06,7.9-4.6,15.56,0s8.43-13,4.6-11.49-12.67-.1-12.67-.1-7.49.77-7.49,6.18Z"/><path class="cls-2" d="M29.15,26.24c-.62,2.55-3.66,3.57-5.46,4.09s-1.37-8.17-4.14-6.64,1.24,10.21,0,11.23c-.63.52-7,0-13.14-.67A61.71,61.71,0,0,1,23.69,13c.33-.26.67-.52,1-.76,5.69,2.48,13.3,4.88,14,7.84C39.77,24.2,29.77,23.69,29.15,26.24Z"/><path class="cls-2" d="M121.79,48.58h0c-4.78,8.91-11.23,20.2-13.46,20.46-3.69.42-22.35-23.41-14.68-18.81s13.43,0,13.43,0l-2.32-9.19s-7.29,6.89-14.19-3.16c-4.88-7.12,6.06-12.38,18.05-16.06a61,61,0,0,1,10.69,18.25A60.24,60.24,0,0,1,121.79,48.58Z"/><path class="cls-2" d="M64.69,26.07c3.3,1,14.91.21,14.23-3.81s-8.17-9.46-12.6-7.76S62.93,25.54,64.69,26.07Z"/></g></g></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.19 123.19"><defs><style>.cls-1{fill:#c7c7c7;}.cls-2{fill:#8a8a8a;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="moon"><path class="cls-1" d="M123.19,61.6A61.59,61.59,0,0,1,61.6,123.19h-.78A61.62,61.62,0,0,1,34.83,6.1a61.63,61.63,0,0,1,88.36,55.5Z"/><path class="cls-2" d="M38,36.54S15,45.8,1.83,46.67A61.49,61.49,0,0,1,19.2,16.92C29.47,22.26,38,36.54,38,36.54Z"/><path class="cls-2" d="M49.76,12.53C48.66,14,39.84,11.3,34.83,6.1A61.27,61.27,0,0,1,51.28.86C51.78,5,50.66,11.34,49.76,12.53Z"/><path class="cls-2" d="M45.55,27.69c0,2.11-1.68,3.37,0,5.9s8,2.11,8.42,0-2.57-8.42-2.57-8.42Z"/><path class="cls-2" d="M58.19,22.22c.91,6.38,15.16,9,13.89,13.11s-10,12.58-6.88,13.42,13.2,1.69,18.68,0,8.84-18.53,3.37-20.21S57.34,16.32,58.19,22.22Z"/><path class="cls-2" d="M22.39,58.86C22.6,66,36.28,74.44,38,77s9.69.42,9.69-5.47-6.74-10.53,0-12.64,8.42-12.86,0-12.12S22.27,54.91,22.39,58.86Z"/><path class="cls-2" d="M61.6,98.87c-6.72-3,7.54-14.74,14.7-14.74s14.32,3.37,16,0,5.9,8,1.69,11-1.69,8-6.32,8.42S72.51,97.19,70.4,98,66.27,101,61.6,98.87Z"/><path class="cls-2" d="M60.82,123.19a61.25,61.25,0,0,1-23.42-4.93c4.87-7,14.89-11.81,18.68-11.81,4.63,0-.46,11.79,2.08,11.79C59.41,118.24,60.27,120.7,60.82,123.19Z"/><path class="cls-2" d="M102.41,62.36c7.16,0,7.58,15.66,0,15.66S92.7,62.36,102.41,62.36Z"/></g></g></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.19 123.2"><defs><style>.cls-1{fill:#6074c7;}.cls-2{fill:#aec0ff;}.cls-3{fill:#94a3d9;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="neptune"><path class="cls-1" d="M123.07,65.51a61.1,61.1,0,0,1-3.16,15.94,63.53,63.53,0,0,1-2.62,6.45l0,.07a61.93,61.93,0,0,1-10.18,15.15,61.48,61.48,0,0,1-75.19,12.42l-.7-.39a59.86,59.86,0,0,1-8.44-5.76c-1.1-.89-2.17-1.82-3.2-2.78-.4-.37-.79-.75-1.18-1.13s-1-1-1.53-1.57q-2.22-2.35-4.2-4.92c-.46-.6-.9-1.2-1.34-1.82a61.45,61.45,0,0,1-9-18.92,62.29,62.29,0,0,1-1.9-9.77A61.58,61.58,0,0,1,.63,52.7a60.85,60.85,0,0,1,1.2-6,59.51,59.51,0,0,1,2.76-8.41l.21-.49c.5-1.19,1-2.36,1.61-3.51A61.71,61.71,0,0,1,23.69,13c.33-.26.67-.52,1-.76a61.61,61.61,0,0,1,83.63,9.21c.1.12.2.23.29.35l.26.31a60.6,60.6,0,0,1,10.43,17.94,60.24,60.24,0,0,1,2.48,8.5h0a61.28,61.28,0,0,1,1,6.11c.11,1,.2,2,.27,3.07A62.46,62.46,0,0,1,123.07,65.51Z"/><path class="cls-2" d="M114.14,29.44c-15.94,3.11-36.2,6.6-58.31,10-20,3-38.67,5.53-54,7.27a59.51,59.51,0,0,1,2.76-8.41l.21-.49c14.33-2.66,31.3-5.52,49.52-8.28,20.29-3.08,39.12-5.59,54.56-7.34A61.48,61.48,0,0,1,114.14,29.44Z"/><path class="cls-2" d="M119.91,81.45a63.53,63.53,0,0,1-2.62,6.45l0,.07c-16.5,3.16-38.33,6.88-62.32,10.52-13.54,2.06-26.43,3.88-38.1,5.42q-2.22-2.35-4.2-4.92c-.46-.6-.9-1.2-1.34-1.82C24,95,38.41,92.6,53.69,90.28,79.44,86.37,102.83,83.29,119.91,81.45Z"/><ellipse class="cls-3" cx="36.97" cy="72.96" rx="10.21" ry="5.28"/><ellipse class="cls-3" cx="99.27" cy="45.04" rx="8.17" ry="5.62"/></g></g></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.6 212.6"><defs><style>.cls-1{fill:#d19842;}.cls-2{fill:#ad7338;}.cls-3{fill:#bf8741;}.cls-4{fill:#bf8d57;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="saturn"><path class="cls-1" d="M166.71,54.71c.12,1,.21,2,.27,3.07a60.43,60.43,0,0,1,0,7.73A61.61,61.61,0,0,1,66.67,109.4c-1.1-.89-2.17-1.82-3.2-2.79a61.5,61.5,0,0,1-15-68.35,61.55,61.55,0,0,1,94.23-25.73,62.42,62.42,0,0,1,9.51,9,61.37,61.37,0,0,1,14.46,33.23Z"/><path class="cls-2" d="M152.25,21.48c-9.89,10.66-25,25.63-33.25,27.06-12.85,2.24,2.44-9.38,3.37-13.45S88.92,51.31,70.54,53.77c-9.19,1.24-18.73.24-26-1.06a60.82,60.82,0,0,1,4-14.45C68.74,36,125.32,24.74,142.74,12.53A62.42,62.42,0,0,1,152.25,21.48Z"/><path class="cls-2" d="M127.29,4A157,157,0,0,1,67.61,13,61.66,61.66,0,0,1,127.29,4Z"/><path class="cls-2" d="M166.71,54.71c.12,1,.21,2,.27,3.07C141.35,69.75,86.65,94.15,56.56,99A61.27,61.27,0,0,1,46.21,78.26c31.49-4.28,95.1-20.2,117-38.18A61.29,61.29,0,0,1,166.71,54.71Z"/><path class="cls-2" d="M151,103.13a61.61,61.61,0,0,1-75.89,12C94.26,110.86,131.13,103.19,151,103.13Z"/><path class="cls-2" d="M167,65.51A61.1,61.1,0,0,1,161.2,87.9C140,94,83.38,105.92,66.67,109.4c-1.1-.89-2.17-1.82-3.2-2.79C81.73,102.34,145.14,76.82,167,65.51Z"/><path class="cls-3" d="M166.62,52.1c.17,1,.3,2,.41,3.06,0,.19.05.38.07.58,10.71-1,19.06-1.42,22.45-1,1,.14,1.59.36,1.65.66a.34.34,0,0,1,0,.21c-.67,1.46-10.34,4.68-23.8,8.36-16.88,4.62-39.72,10-58.18,13.51h-.08l-1.6.31c-5.6,1.06-11.57,2.09-17.64,3.06C75.55,83.19,60.73,85.14,49,86.31c-13,1.29-22.28,1.63-23.06.43a.31.31,0,0,1,0-.12.5.5,0,0,1,.18-.44c1.27-1.48,9.12-4.34,20.18-7.61-.08-.28-.16-.58-.23-.86q-.39-1.42-.69-2.88C17.4,81.85-.6,88.22,0,91.49s20.83,2.6,50.77-1.31C67.44,88,87.1,84.86,108.08,80.91c22-4.14,42.25-8.58,59-12.79,28-7,46.12-13.44,45.5-16.71S193.89,48.73,166.62,52.1Z"/><path class="cls-4" d="M191.2,55.44c-.24-.36-.24-.43-1.06-.65-3.37-.92-11.95-.73-23.11.37,0,.19.05.38.07.58.06.63.11,1.27.15,1.9,0,.1,0,.2,0,.3,6.66-.46,11-.42,11.1.37s-4.17,2.46-11,4.47C153,67,127.46,72.91,109.5,76.13,91.3,79.38,63.89,83.52,48.39,85c-7,.65-11.61.74-11.75-.06s3.83-2.37,10.16-4.37c-.21-.64-.41-1.29-.59-2-.08-.28-.16-.58-.23-.86C34.41,81.1,27.08,84.11,26,86.18a.91.91,0,0,0-.13.56.17.17,0,0,0,0,.07c.37,2.14,9.21,1.94,23.38.25,10.86-1.31,24.85-3.48,40.57-6.16,6.18-1.05,12.62-2.18,19.24-3.37h.08l.54-.1c22.52-4,42.84-8.21,57.57-12,15.18-3.85,24.41-7.23,24-9.48A1.68,1.68,0,0,0,191.2,55.44Z"/></g></g></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.6 212.6"><defs><style>.cls-1{fill:#80e3ef;}.cls-2{fill:#bcf5f9;}.cls-3{fill:#6bc0c6;}.cls-4{fill:#73cfd7;}.cls-5{fill:#6bc1c7;}.cls-6{fill:#e1f8f8;}</style></defs><g id="katman_2" data-name="katman 2"><g id="katman_1-2" data-name="katman 1"><g id="Uranus"><path class="cls-1" d="M167,65.5a61.57,61.57,0,0,1-16,37.62c-.31.34-.61.65-.91,1a61.57,61.57,0,0,1-83.41,5.31c-1.1-.89-2.17-1.82-3.2-2.78A61.65,61.65,0,0,1,56.56,99q-1.32-1.72-2.51-3.55l-.21-.3-.56-.88L53,93.79l-.28-.47c0-.07-.09-.14-.13-.22a60.11,60.11,0,0,1-4.7-9.76c-.16-.42-.32-.84-.46-1.27h0c-.44-1.25-.84-2.53-1.2-3.82-.18-.64-.35-1.28-.51-1.93-.42-1.69-.76-3.41-1-5.16a2.43,2.43,0,0,1,0-.3c0-.14,0-.27,0-.39,0-.42-.11-.8-.16-1.18,0-.12,0-.24,0-.36l-.06-.45A62.28,62.28,0,0,1,44,58c.1-1.79.29-3.57.54-5.32a61.54,61.54,0,0,1,4-14.45c.21-.51.43-1,.65-1.53.07-.17.15-.33.23-.5a61.64,61.64,0,0,1,10-15.43,60.09,60.09,0,0,1,6.82-6.62q.69-.59,1.41-1.14A61.69,61.69,0,0,1,127.29,4,57.56,57.56,0,0,1,134.08,7h0c1.13.57,2.23,1.2,3.31,1.86l.15.09h0c1.79,1.09,3.5,2.27,5.17,3.53,1,.74,1.94,1.52,2.87,2.32s2.08,1.84,3.07,2.82q1.86,1.83,3.57,3.81A61.86,61.86,0,0,1,157,27.82a60.6,60.6,0,0,1,3.14,5.36q1.11,2.15,2.06,4.38c.35.83.69,1.67,1,2.52s.59,1.64.86,2.48A54.82,54.82,0,0,1,165.57,48a56.76,56.76,0,0,1,1.14,6.72c.06.54.12,1.07.16,1.6s.08,1,.11,1.47A58.64,58.64,0,0,1,167,65.5Z"/><path class="cls-2" d="M166.87,56.3c-25.69,12-90.76,35.16-112,40.24-.15-.26-.4-.54-.8-1.1l-.21-.3c-.17-.24-.36-.53-.56-.88L53,93.79l-.28-.47c0-.07-.09-.14-.13-.22-.31-.54-.66-1.19-1.06-1.95C114,80.48,143.66,65.94,165.57,48a56.76,56.76,0,0,1,1.14,6.72C166.77,55.24,166.83,55.77,166.87,56.3Z"/><path class="cls-2" d="M151,103.12c-9.71,10.64-18.14,4.54-33.58,6.27-13.45,1.52-31.39,12-42.31,5.77C94.26,110.85,131.13,103.19,151,103.12Z"/><path class="cls-3" d="M167,65.51A61.1,61.1,0,0,1,161.2,87.9C140,94,83.38,105.92,66.67,109.39c-1.1-.89-2.17-1.81-3.2-2.78C81.73,102.34,163.76,92.09,167,65.51Z"/><path class="cls-2" d="M160.17,33.18C92.8,44.32,67.51,58.45,45.7,76.32l-1-5.16a2.43,2.43,0,0,1,0-.3c0-.14,0-.27,0-.39,0-.42-.11-.8-.16-1.18s-.09-.77-.12-1.22C69.67,56.21,135.08,33.19,157,27.82A60.6,60.6,0,0,1,160.17,33.18Z"/><path class="cls-2" d="M134.1,7.05h0c-8.55-1.68-27.57,6.48-39,7.76-11.58,1.3-21.35-3.87-28.91-.63a60.09,60.09,0,0,0-6.82,6.62c19.87-.07,59-7.48,78.18-11.79h0Z"/><path class="cls-4" d="M148.68,17.67C129.85,22,48.51,32.1,44,58c0,.22-.07.45-.1.67a61.5,61.5,0,0,1,5.24-22c.07-.17.15-.33.23-.5,21.08-6.06,79.2-17.82,96.23-21.37Z"/><path class="cls-5" d="M164.09,42.56S56.12,84.33,47.88,83.34c-.16-.42-.32-.84-.46-1.27.85-.35,110.79-44.53,114.81-44.51.35.83.69,1.67,1,2.52S163.82,41.72,164.09,42.56Z"/><path class="cls-6" d="M166.62,52.1c.17,1,.1.52.29,1.52,0,.19,0,.12.19.12,21.27-3.16,30.85-2.41,34.24-2a5.25,5.25,0,0,1,2.44,1,1.11,1.11,0,0,1-.24,1.53c-1.15,1.2-22.83,7.32-36.18,11.73-16.62,5.5-39.72,9-58.18,12.51h-.08l-1.6.31c-5.6,1.06-11.57,2.09-17.64,3-14.31,2.3-29,4.93-40.9,6.41-3.88.49-31.72,5.15-36.25.31,0,0,0-.08-.05-.12a.51.51,0,0,1,.18-.44c1.27-1.48,22.31-6.21,33.37-9.48-.08-.29-.16-.58-.23-.86q-.39-1.42-.69-2.88C17.4,81.85-.6,88.22,0,91.49s20.83,2.6,50.77-1.31C67.44,88,87.1,84.86,108.08,80.91c22-4.14,42.25-8.58,59-12.79,28-7.05,46.12-13.44,45.5-16.72S193.89,48.73,166.62,52.1Z"/></g></g></g></svg>`
    ]
    planet = loadImage("data:image/svg+xml;base64," + btoa(loadablePlanets[selectedPlanet]))
    gemi = loadImage("data:image/svg+xml;base64," + btoa(gemiSVG));
}


let robot = null;
let overAllTexture;

function addRobot(x, y) {
    robot = new Robot({
        p: createVector(x, y)
    });
}

let bg;
let seedNum;
let noiseImg;
const BGCOL = "#1d5ae7";
var angle = 0;
var noiseX;
var noiseY;
var noiseF;
var f = 0.0;
var colorState;
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
var DEFAULT_SIZE = 1000;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;
let ellipse1$ = HEIGHT / 5 + HEIGHT / 30
let ellipse2$ = HEIGHT / 5 + HEIGHT / 15
let mouth = Rseed.random_int(0, 3)
let mouthVector = Rseed.random_int(0, 3)
let mouthSvg = Rseed.random_int(0, 9)
let glassType = Rseed.random_int(0, 3)
let glassSVG = Rseed.random_int(0, 17)
let glassVector = Rseed.random_int(0, 1)
let features = getMetadata()
window.features = features

function setup() {
    createCanvas(WIDTH, HEIGHT);
    rect(100 * M, 500 * M, 50 * M, 50 * M);

    smooth(8);

    noiseImg = createGraphics(WIDTH, HEIGHT);
    noiseImg.noStroke();

    noiseImg.fill(0, 150);

    for (let i = 0; i < WIDTH * HEIGHT * 0.3; i++) {
        let x = WIDTH/3;
        let y = HEIGHT/3;
        let d = noise(0.01 * x, 0.01 * y) * 0.5 + 1;
        noiseImg.ellipse(x, y, d / 1.75, d / 1.75);
    }


    ellipseMode(CENTER);
    seedNum = int(Rseed.random_between(0, 10000));

    bg = createGraphics(WIDTH, HEIGHT);
    bg.noStroke();
    for (let i = 0; i < 300000; i++) {
        let x = WIDTH / 2;
        let y = HEIGHT / 2;
        let s = noise(x * 0.01, y * 0.01) * 2;
        bg.fill(255, 30);
        bg.rect(x, y, s, s);
    }

    overAllTexture = createGraphics(WIDTH, HEIGHT);
    overAllTexture.loadPixels();
    for (var i = 0; i < WIDTH + 50; i++) {
        for (var o = 0; o < HEIGHT + 50; o++) {
            overAllTexture.set(i, o, color(100, noise(i / 3, o / 3, i * o / 50) * pitircik));
        }
    }


    overAllTexture.updatePixels();
    noiseX = Rseed.random_between(0, 100);
    noiseY = Rseed.random_between(0, 100);
    noiseF = Rseed.random_between(0, 100);
    colorState = 0;


    addRobot(WIDTH / 2, HEIGHT / 2);

    sunColor = color(Rseed.random_choice(colorYellow));
    mountainColor = color(Rseed.random_choice(colorBlue));

    c1 = color(29, 90, 231);
    c2 = color(255, 209, 102);
    c3 = color(128, 255, 219);


}


function draw() {
    randomSeed(seedNum);
    background(255, 209, 102);
    background(0);
    noStroke();


    sol(sunColor);


    push();
    fill(BGCOL);
    cloud(-10, HEIGHT / 2 - HEIGHT * 0.1, HEIGHT * 0.2);

    image(noiseImg, 0, -HEIGHT * 0.05);
    image(noiseImg, 0, -HEIGHT * 0.1);
    cloud(0, HEIGHT / 2, HEIGHT * 0.225);
    image(noiseImg, 0, 0);
    cloud(-10, HEIGHT / 2 + HEIGHT * 0.1, HEIGHT * 0.25);

    pop();


    push();
    rotate(sin(frameCount / 50) / 8);
    image(planet, WIDTH / 8 - mouseX / 15, HEIGHT / 10 - mouseY / 15, WIDTH / 10, WIDTH / 10);
    pop();


    push();
    fill(mountainColor);


    setGradient(0, HEIGHT / 1.75, WIDTH, HEIGHT / 2, c1, c3, Y_AXIS);

    f += 0.015;
    var waveH = map(0, 0, WIDTH, 100, 500);
    for (var h = HEIGHT / 1.75; h < HEIGHT; h += 4) {
        beginShape();
        stroke(128, 255, 219, 90);
        fill(128, 255, 219, 30);
        var x = 0;
        var y = h + waveH * noise(noiseX, noiseY + h * 0.01, noiseF + f);
        curveVertex(x, y);
        for (var w = 0; w <= WIDTH + 20; w += 20) {
            x = w;
            y = h + waveH * noise(noiseX + w * 0.001, noiseY + h * 0.01, noiseF + f);
            curveVertex(x, y);
        }
        x = WIDTH;
        y = h + waveH * noise(noiseX + WIDTH, noiseY + h * 0.01, noiseF + f);
        curveVertex(x, y);
        endShape();
    }
    pop();


    robot.update();
    robot.draw();

    boat(WIDTH / 2, HEIGHT / 2);


    push();
    blendMode(MULTIPLY);
    image(overAllTexture, 0, 0);
    pop();


}

function sol(gunesColor) {
    gunesColor.setAlpha(255);
    push();
    fill(gunesColor);
    ellipse(WIDTH / 1.25, HEIGHT / 4, HEIGHT / 5, HEIGHT / 5);
    gunesColor.setAlpha(70);
    fill((gunesColor));
    ellipse(WIDTH / 1.25, HEIGHT / 4, ellipse1$ * sin(frameCount / 100), ellipse1$ * sin(frameCount / 100));
    ellipse(WIDTH / 1.25, HEIGHT / 4, ellipse2$ * sin(-frameCount / 100), ellipse2$ * sin(-frameCount / 100));
    pop();
}


function cloud(noiseOff, baseY, maxOff) {
    let x = -maxOff;
    beginShape();
    while (x < WIDTH + maxOff) {
        let yOffset = noise(x * 0.01 + frameCount / 1000 + noiseOff, baseY) * maxOff;
        let y = baseY - yOffset;
        let dia = (noise(x * 0.01, baseY * 0.01) + 0.1) * (maxOff);
        ellipse(x, y, dia, dia);
        vertex(x, y);
        x += dia * 0.35;
    }
    vertex(WIDTH, baseY);
    vertex(WIDTH, HEIGHT);
    vertex(0, HEIGHT);
    vertex(0, baseY);
    endShape(CLOSE);
}


function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis === Y_AXIS) {
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis === X_AXIS) {
        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}


function boat(x, y) {
    const theta = map(frameCount, 0, 60, 0, 2 * PI);
    const pendulumAngle = sin(theta) * 0.025;

    push();
    noStroke();
    rotate(pendulumAngle / 2);
    //scale(0.2);
    translate(x + mouseX / 5, y);

    image(gemi, WIDTH / 8 - mouseX / 15, HEIGHT / 3 - mouseY / 15, WIDTH / 5, HEIGHT / 10);
    pop();
}


function getMetadata() {
    const glasses = [
        ["Chad Shades", "Tea Shades"],
        ["Contact Lenses"],
        ["Ultra Mega Hyper Intergalactic Shades"],
        ["Skewed Spectacles",
            "Sun Readers",
            "Nerd Glasses",
            "South Beach",
            "Round Shades",
            "Wayfarer",
            "Aviator",
            "Classic Shades",
            "Anaglyph 3D Glasses",
            "Dark Phoenix",
            "Frost Shades",
            "Big Shades",
            "Small Shades",
            "Thug Life Sunglasses",
            "Party Sunglasses",
            "Low Bridge Glasses",
            "Nerdy",
            "Heart Shades"]]
    const mouths = [
        [
            "Displeased",
            "FeelsGoodMan",
            "Poggers",
            "Sadge"],
        ["FeelsOkayMan"], ["ResidentSleeper"],
        [
            "Goblin",
            "Goofy",
            "Drip",
            "Womanizer",
            "Creepy",
            "Dumped",
            "Infant",
            "Dental Braced",
            "Soulless",
            "Geek"
        ]
    ]
    let planetlist$ = ["Earth", "Mars", "Moon", "Neptune", "Saturn", "Uranus"]
    let clarities = ["Polished", "Noisy", "Rusty"]

    const noiseLevel = availableNoiseLevels.indexOf(pitircik);
    return {
        clarity: clarities[noiseLevel],
        mouth: mouths[mouth][mouth === 0 ? mouthVector : mouth === 3 ? mouthSvg : 0],
        glasses: glasses[glassType][glassType === 3 ? glassSVG : glassType === 0 ? glassVector : 0],
        planet: planetlist$[selectedPlanet]
    }
}


console.log(features)
