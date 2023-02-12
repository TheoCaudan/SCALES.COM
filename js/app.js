import scales from './scales.js';

let arr = scales;

// ==== Circles elements ==== //
const root = document.querySelector('#root');
const octave = document.querySelector('#octave');
const minorSecond = document.querySelector('#minor2');
const minorThird = document.querySelector('#minor3');
const minorSixth = document.querySelector('#minor6');
const minorSeventh = document.querySelector('#minor7');
const majorSecond = document.querySelector('#major2');
const majorThird = document.querySelector('#major3');
const majorSixth = document.querySelector('#major6');
const majorSeventh = document.querySelector('#major7');
const dimForth = document.querySelector('#diminished4');
const dimFifth = document.querySelector('#diminished5');
const perfForth = document.querySelector('#perfect4');
const perfFifth = document.querySelector('#perfect5');
const augForth = document.querySelector('#augmented4');
const augFifth = document.querySelector('#augmented5');

// ==== Buttons ==== //
// = Keys = //
const buttonA = document.querySelector('#keyA');
const buttonBb = document.querySelector('#keyBb');
const buttonB = document.querySelector('#keyB');
const buttonC = document.querySelector('#keyC');
const buttonDb = document.querySelector('#keyDb');
const buttonD = document.querySelector('#keyD');
const buttonEb = document.querySelector('#keyEb');
const buttonE = document.querySelector('#keyE');
const buttonF = document.querySelector('#keyF');
const buttonGb = document.querySelector('#keyGb');
const buttonG = document.querySelector('#keyG');
const buttonAb = document.querySelector('#keyAb');
// = Modes = //
const ionian = document.querySelector('#modeIonian');
const lydian = document.querySelector('#modeLydian');
const mixolydian = document.querySelector('#modeMixolydian');
const dorian = document.querySelector('#modeDorian');
const phrygian = document.querySelector('#modePhrygian');
const aeolian = document.querySelector('#modeAeolian');
const locrian = document.querySelector('#modeLocrian');
// = Instruments = //
const guitar = document.querySelector('#guitar');
const bass = document.querySelector('#bass');

// ==== Instruments vizualisation ==== //
const guitarFretboard = document.querySelector('#guitarFretboard');
const bassFretboard = document.querySelector('#bassFretboard');

// Highlights circles that contains the notes in the picked mode
let displayMode = (mode) => {
	switch (mode) {
		case 'Ionian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'white';
			minorSecond.style.color = 'black';
			majorSecond.style.backgroundColor = 'purple';
			majorSecond.style.color = 'white';
			minorThird.style.backgroundColor = 'white';
			minorThird.style.color = 'black';
			majorThird.style.backgroundColor = 'purple';
			majorThird.style.color = 'white';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'white';
			minorSixth.style.color = 'black';
			majorSixth.style.backgroundColor = 'purple';
			majorSixth.style.color = 'white';
			minorSeventh.style.backgroundColor = 'white';
			minorSeventh.style.color = 'black';
			majorSeventh.style.backgroundColor = 'purple';
			majorSeventh.style.color = 'white';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Lydian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'white';
			minorSecond.style.color = 'black';
			majorSecond.style.backgroundColor = 'purple';
			majorSecond.style.color = 'white';
			minorThird.style.backgroundColor = 'white';
			minorThird.style.color = 'black';
			majorThird.style.backgroundColor = 'purple';
			majorThird.style.color = 'white';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'white';
			perfForth.style.color = 'black';
			augForth.style.backgroundColor = 'purple';
			augForth.style.color = 'white';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'white';
			minorSixth.style.color = 'black';
			majorSixth.style.backgroundColor = 'purple';
			majorSixth.style.color = 'white';
			minorSeventh.style.backgroundColor = 'white';
			minorSeventh.style.color = 'black';
			majorSeventh.style.backgroundColor = 'purple';
			majorSeventh.style.color = 'white';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Mixolydian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'white';
			minorSecond.style.color = 'black';
			majorSecond.style.backgroundColor = 'purple';
			majorSecond.style.color = 'white';
			minorThird.style.backgroundColor = 'white';
			minorThird.style.color = 'black';
			majorThird.style.backgroundColor = 'purple';
			majorThird.style.color = 'white';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'white';
			minorSixth.style.color = 'black';
			majorSixth.style.backgroundColor = 'purple';
			majorSixth.style.color = 'white';
			minorSeventh.style.backgroundColor = 'purple';
			minorSeventh.style.color = 'white';
			majorSeventh.style.backgroundColor = 'white';
			majorSeventh.style.color = 'black';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Dorian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'white';
			minorSecond.style.color = 'black';
			majorSecond.style.backgroundColor = 'purple';
			majorSecond.style.color = 'white';
			minorThird.style.backgroundColor = 'purple';
			minorThird.style.color = 'white';
			majorThird.style.backgroundColor = 'white';
			majorThird.style.color = 'black';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'white';
			minorSixth.style.color = 'black';
			majorSixth.style.backgroundColor = 'purple';
			majorSixth.style.color = 'white';
			minorSeventh.style.backgroundColor = 'purple';
			minorSeventh.style.color = 'white';
			majorSeventh.style.backgroundColor = 'white';
			majorSeventh.style.color = 'black';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Phrygian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'purple';
			minorSecond.style.color = 'white';
			majorSecond.style.backgroundColor = 'white';
			majorSecond.style.color = 'black';
			minorThird.style.backgroundColor = 'purple';
			minorThird.style.color = 'white';
			majorThird.style.backgroundColor = 'white';
			majorThird.style.color = 'black';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'purple';
			minorSixth.style.color = 'white';
			majorSixth.style.backgroundColor = 'white';
			majorSixth.style.color = 'black';
			minorSeventh.style.backgroundColor = 'purple';
			minorSeventh.style.color = 'white';
			majorSeventh.style.backgroundColor = 'white';
			majorSeventh.style.color = 'black';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Aeolian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'white';
			minorSecond.style.color = 'black';
			majorSecond.style.backgroundColor = 'purple';
			majorSecond.style.color = 'white';
			minorThird.style.backgroundColor = 'purple';
			minorThird.style.color = 'white';
			majorThird.style.backgroundColor = 'white';
			majorThird.style.color = 'black';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'white';
			dimFifth.style.color = 'black';
			perfFifth.style.backgroundColor = 'purple';
			perfFifth.style.color = 'white';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'purple';
			minorSixth.style.color = 'white';
			majorSixth.style.backgroundColor = 'white';
			majorSixth.style.color = 'black';
			minorSeventh.style.backgroundColor = 'purple';
			minorSeventh.style.color = 'white';
			majorSeventh.style.backgroundColor = 'white';
			majorSeventh.style.color = 'black';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
		case 'Locrian':
			root.style.backgroundColor = 'purple';
			root.style.color = 'white';
			minorSecond.style.backgroundColor = 'purple';
			minorSecond.style.color = 'white';
			majorSecond.style.backgroundColor = 'white';
			majorSecond.style.color = 'black';
			minorThird.style.backgroundColor = 'purple';
			minorThird.style.color = 'white';
			majorThird.style.backgroundColor = 'white';
			majorThird.style.color = 'black';
			dimForth.style.backgroundColor = 'white';
			dimForth.style.color = 'black';
			perfForth.style.backgroundColor = 'purple';
			perfForth.style.color = 'white';
			augForth.style.backgroundColor = 'white';
			augForth.style.color = 'black';
			dimFifth.style.backgroundColor = 'purple';
			dimFifth.style.color = 'white';
			perfFifth.style.backgroundColor = 'white';
			perfFifth.style.color = 'black';
			augFifth.style.backgroundColor = 'white';
			augFifth.style.color = 'black';
			minorSixth.style.backgroundColor = 'purple';
			minorSixth.style.color = 'white';
			majorSixth.style.backgroundColor = 'white';
			majorSixth.style.color = 'black';
			minorSeventh.style.backgroundColor = 'purple';
			minorSeventh.style.color = 'white';
			majorSeventh.style.backgroundColor = 'white';
			majorSeventh.style.color = 'black';
			octave.style.backgroundColor = 'purple';
			octave.style.color = 'white';
			break;
	}
};

// Add note names in the circles
let displayNotes = (key) => {
	root.textContent = key;
	for (let i = 0; i < arr.length; i++) {
		if (key == arr[i].notes.root) {
			minorSecond.textContent = arr[i].notes.minorSecond;
			majorSecond.textContent = arr[i].notes.majorSecond;
			minorThird.textContent = arr[i].notes.minorThird;
			majorThird.textContent = arr[i].notes.majorThird;
			dimForth.textContent = arr[i].notes.dimForth;
			perfForth.textContent = arr[i].notes.perfForth;
			augForth.textContent = arr[i].notes.augForth;
			dimFifth.textContent = arr[i].notes.dimFifth;
			perfFifth.textContent = arr[i].notes.perfFifth;
			augFifth.textContent = arr[i].notes.augFifth;
			minorSixth.textContent = arr[i].notes.minorSixth;
			majorSixth.textContent = arr[i].notes.majorSixth;
			minorSeventh.textContent = arr[i].notes.minorSeventh;
			majorSeventh.textContent = arr[i].notes.majorSeventh;
			octave.textContent = arr[i].notes.octave;
		}
	}
};

// Handles every click on a button
let eventHandler = () => {
	buttonA.onclick = () => {
		displayNotes('A');
	};
	buttonBb.onclick = () => {
		displayNotes('A#/Bb');
	};
	buttonB.onclick = () => {
		displayNotes('B');
	};
	buttonC.onclick = () => {
		displayNotes('C');
	};
	buttonDb.onclick = () => {
		displayNotes('C#/Db');
	};
	buttonD.onclick = () => {
		displayNotes('D');
	};
	buttonEb.onclick = () => {
		displayNotes('D#/Eb');
	};
	buttonE.onclick = () => {
		displayNotes('E');
	};
	buttonF.onclick = () => {
		displayNotes('F');
	};
	buttonGb.onclick = () => {
		displayNotes('F#/Gb');
	};
	buttonG.onclick = () => {
		displayNotes('G');
	};
	buttonAb.onclick = () => {
		displayNotes('G#/Ab');
	};
	ionian.onclick = () => {
		displayMode('Ionian');
	};
	lydian.onclick = () => {
		displayMode('Lydian');
	};
	mixolydian.onclick = () => {
		displayMode('Mixolydian');
	};
	dorian.onclick = () => {
		displayMode('Dorian');
	};
	phrygian.onclick = () => {
		displayMode('Phrygian');
	};
	aeolian.onclick = () => {
		displayMode('Aeolian');
	};
	locrian.onclick = () => {
		displayMode('Locrian');
	};
	guitar.onclick = () => {
		if (guitarFretboard.style.display == 'none') {
			guitarFretboard.style.display = 'table';
			bassFretboard.style.display = 'none';
		} else {
			guitarFretboard.style.display = 'none';
		}
	};
	bass.onclick = () => {
		if (bassFretboard.style.display == 'none') {
			bassFretboard.style.display = 'table';
			guitarFretboard.style.display = 'none';
		} else {
			bassFretboard.style.display = 'none';
		}
	};
};

displayMode('Lydian');
displayNotes('F');
eventHandler();
