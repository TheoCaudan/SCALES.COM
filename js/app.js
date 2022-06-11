const root = document.querySelector("#root")
const octave = document.querySelector("#octave")
const minorSecond = document.querySelector("#minor2")
const minorThird = document.querySelector("#minor3")
const minorSixth = document.querySelector("#minor6")
const minorSeventh = document.querySelector("#minor7")
const majorSecond = document.querySelector("#major2")
const majorThird = document.querySelector("#major3")
const majorSixth = document.querySelector("#major6")
const majorSeventh = document.querySelector("#major7")
const dimForth = document.querySelector("#diminished4")
const dimFifth = document.querySelector("#diminished5")
const perfForth = document.querySelector("#perfect4")
const perfFifth = document.querySelector("#perfect5")
const augForth = document.querySelector("#augmented4")
const augFifth = document.querySelector("#augmented5")

let displayNotes = (key) => {
    root.textContent = key
    switch(root.textContent) {
        case 'A' :
            minorSecond.textContent = 'A#/Bb'
            majorSecond.textContent = 'B'
            minorThird.textContent = 'C'
            majorThird.textContent = dimForth.textContent = 'C#/Db'
            perfForth.textContent = 'D'
            augForth.textContent = dimFifth.textContent = 'D#/Eb'
            perfFifth.textContent = 'E'
            augFifth.textContent = minorSixth.textContent = 'F'
            majorSixth.textContent = 'F#/Gb'
            minorSeventh.textContent = 'G'
            majorSeventh.textContent = 'G#/Ab'
            octave.textContent = 'A'
        break;
        case 'A#/Bb' :
            minorSecond.textContent = 'B'
            majorSecond.textContent = 'C' 
            minorThird.textContent = 'C#/Db'
            majorThird.textContent = dimForth.textContent = 'D'
            perfForth.textContent = 'D#/Eb'
            augForth.textContent = dimFifth.textContent = 'E'
            perfFifth.textContent = 'F'
            augFifth.textContent = minorSixth.textContent = 'F#/Gb'
            majorSixth.textContent = 'G'
            minorSeventh.textContent = 'G#/Ab'
            majorSeventh.textContent = 'A'
            octave.textContent = 'A#/Bb'
        break;
        case 'B' :
            minorSecond.textContent = 'C'
            majorSecond.textContent = 'C#/Db'  
            minorThird.textContent = 'D'
            majorThird.textContent = dimForth.textContent = 'D#/Eb'
            perfForth.textContent = 'E'
            augForth.textContent = dimFifth.textContent = 'F'
            perfFifth.textContent = 'F#/Gb'
            augFifth.textContent = minorSixth.textContent = 'G'
            majorSixth.textContent = 'G#/Ab'
            minorSeventh.textContent = 'A'
            majorSeventh.textContent = 'A#/Bb'
            octave.textContent = 'B'
        break;
        case 'C' :
            minorSecond.textContent = 'C#/Db'
            majorSecond.textContent = 'D'  
            minorThird.textContent = 'D#/Eb'
            majorThird.textContent = dimForth.textContent = 'E'
            perfForth.textContent = 'F'
            augForth.textContent = dimFifth.textContent = 'F#/Gb'
            perfFifth.textContent = 'G'
            augFifth.textContent = minorSixth.textContent = 'G#/Ab'
            majorSixth.textContent = 'A'
            minorSeventh.textContent = 'A#/Bb'
            majorSeventh.textContent = 'B'
            octave.textContent = 'C'
        break;
        case 'C#/Db' :
            minorSecond.textContent = 'D'
            majorSecond.textContent = 'D#/Eb'   
            minorThird.textContent = 'E'
            majorThird.textContent = dimForth.textContent = 'F' 
            perfForth.textContent = 'F#/Gb'
            augForth.textContent = dimFifth.textContent = 'G' 
            perfFifth.textContent = 'G#/Ab'
            augFifth.textContent = minorSixth.textContent = 'A' 
            majorSixth.textContent = 'A#/Bb'
            minorSeventh.textContent = 'B'
            majorSeventh.textContent = 'C'
            octave.textContent = 'C#/Db'
        break;
        case 'D' :
            minorSecond.textContent = 'D#/Eb'
            majorSecond.textContent = 'E'    
            minorThird.textContent = 'F'
            majorThird.textContent = dimForth.textContent = 'F#/Gb'  
            perfForth.textContent = 'G'
            augForth.textContent = dimFifth.textContent = 'G#/Ab'  
            perfFifth.textContent = 'A'
            augFifth.textContent = minorSixth.textContent = 'A#/Bb' 
            majorSixth.textContent = 'B'
            minorSeventh.textContent = 'C'
            majorSeventh.textContent = 'C#/Db'
            octave.textContent = 'D'
        break;
        case 'D#/Eb' :
            minorSecond.textContent = 'E'
            majorSecond.textContent = 'F'     
            minorThird.textContent = 'F#/Gb'
            majorThird.textContent = dimForth.textContent = 'G'   
            perfForth.textContent = 'G#/Ab'
            augForth.textContent = dimFifth.textContent = 'A'   
            perfFifth.textContent = 'A#/Bb'
            augFifth.textContent = minorSixth.textContent = 'B'  
            majorSixth.textContent = 'C'
            minorSeventh.textContent = 'C#/Db'
            majorSeventh.textContent = 'D'
            octave.textContent = 'D#/Eb'
        break;
        case 'E' :
            minorSecond.textContent = 'F'
            majorSecond.textContent = 'F#/Gb'     
            minorThird.textContent = 'G'
            majorThird.textContent = dimForth.textContent = 'G#/Ab'    
            perfForth.textContent = 'A'
            augForth.textContent = dimFifth.textContent = 'A#/Bb'    
            perfFifth.textContent = 'B'
            augFifth.textContent = minorSixth.textContent = 'C'   
            majorSixth.textContent = 'C#/Db'
            minorSeventh.textContent = 'D'
            majorSeventh.textContent = 'D#/Eb'
            octave.textContent = 'E'
        break;
        case 'F' :
            minorSecond.textContent = 'F#/Gb'
            majorSecond.textContent = 'G'      
            minorThird.textContent = 'G#/Ab'
            majorThird.textContent = dimForth.textContent = 'A'     
            perfForth.textContent = 'A#/Bb'
            augForth.textContent = dimFifth.textContent = 'B'    
            perfFifth.textContent = 'C'
            augFifth.textContent = minorSixth.textContent = 'C#/Db'    
            majorSixth.textContent = 'D'
            minorSeventh.textContent = 'D#/Eb'
            majorSeventh.textContent = 'E' 
            octave.textContent = 'F'
        break;
        case 'F#/Gb' :
            minorSecond.textContent = 'G'
            majorSecond.textContent = 'G#/Ab'       
            minorThird.textContent = 'A'
            majorThird.textContent = dimForth.textContent = 'A#/Bb'     
            perfForth.textContent = 'B'
            augForth.textContent = dimFifth.textContent = 'C'    
            perfFifth.textContent = 'C#/Db'
            augFifth.textContent = minorSixth.textContent = 'D'     
            majorSixth.textContent = 'D#/Eb'
            minorSeventh.textContent = 'E'
            majorSeventh.textContent = 'F'
            octave.textContent = 'F#/Gb'
        break;
        case 'G' :
            minorSecond.textContent = 'G#/Ab'
            majorSecond.textContent = 'A'        
            minorThird.textContent = 'A#/Bb'
            majorThird.textContent = dimForth.textContent = 'B'      
            perfForth.textContent = 'C'
            augForth.textContent = dimFifth.textContent = 'C#/Db'     
            perfFifth.textContent = 'D'
            augFifth.textContent = minorSixth.textContent = 'D#/Eb'      
            majorSixth.textContent = 'E'
            minorSeventh.textContent = 'F'
            majorSeventh.textContent = 'F#/Gb'
            octave.textContent = 'G'
        break;
        case 'G#/Ab' :
            minorSecond.textContent = 'A'
            majorSecond.textContent = 'A#/Bb'         
            minorThird.textContent = 'B'
            majorThird.textContent = dimForth.textContent = 'C'       
            perfForth.textContent = 'C#/Db'
            augForth.textContent = dimFifth.textContent = 'D'      
            perfFifth.textContent = 'D#/Eb'
            augFifth.textContent = minorSixth.textContent = 'E'       
            majorSixth.textContent = 'F'
            minorSeventh.textContent = 'F#/Gb'
            majorSeventh.textContent = 'G'
            octave.textContent = 'G#/Ab'
        break;
        default : 
        console.log('Pick a key')
    }
} 
let displayMode = (mode) => {
    switch(mode) {
        case 'Ionian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'white'
            majorSecond.style.backgroundColor = 'purple'
            minorThird.style.backgroundColor = 'white'
            majorThird.style.backgroundColor = 'purple'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'white'
            majorSixth.style.backgroundColor = 'purple'
            minorSeventh.style.backgroundColor = 'white'
            majorSeventh.style.backgroundColor = 'purple'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Lydian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'white'
            majorSecond.style.backgroundColor = 'purple'
            minorThird.style.backgroundColor = 'white'
            majorThird.style.backgroundColor = 'purple'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'white'
            augForth.style.backgroundColor = 'purple'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'white'
            majorSixth.style.backgroundColor = 'purple'
            minorSeventh.style.backgroundColor = 'white'
            majorSeventh.style.backgroundColor = 'purple'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Mixolydian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'white'
            majorSecond.style.backgroundColor = 'purple'
            minorThird.style.backgroundColor = 'white'
            majorThird.style.backgroundColor = 'purple'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'white'
            majorSixth.style.backgroundColor = 'purple'
            minorSeventh.style.backgroundColor = 'purple'
            majorSeventh.style.backgroundColor = 'white'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Dorian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'white'
            majorSecond.style.backgroundColor = 'purple'
            minorThird.style.backgroundColor = 'purple'
            majorThird.style.backgroundColor = 'white'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'white'
            majorSixth.style.backgroundColor = 'purple'
            minorSeventh.style.backgroundColor = 'purple'
            majorSeventh.style.backgroundColor = 'white'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Phrygian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'purple'
            majorSecond.style.backgroundColor = 'white'
            minorThird.style.backgroundColor = 'purple'
            majorThird.style.backgroundColor = 'white'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'purple'
            majorSixth.style.backgroundColor = 'white'
            minorSeventh.style.backgroundColor = 'purple'
            majorSeventh.style.backgroundColor = 'white'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Aeolian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'white'
            majorSecond.style.backgroundColor = 'purple'
            minorThird.style.backgroundColor = 'purple'
            majorThird.style.backgroundColor = 'white'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'white'
            perfFifth.style.backgroundColor = 'purple'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'purple'
            majorSixth.style.backgroundColor = 'white'
            minorSeventh.style.backgroundColor = 'purple'
            majorSeventh.style.backgroundColor = 'white'
            octave.style.backgroundColor = 'purple'
        break;
        case 'Locrian' :
            root.style.backgroundColor = 'purple'
            minorSecond.style.backgroundColor = 'purple'
            majorSecond.style.backgroundColor = 'white'
            minorThird.style.backgroundColor = 'purple'
            majorThird.style.backgroundColor = 'white'
            dimForth.style.backgroundColor = 'white'
            perfForth.style.backgroundColor = 'purple'
            augForth.style.backgroundColor = 'white'
            dimFifth.style.backgroundColor = 'purple'
            perfFifth.style.backgroundColor = 'white'
            augFifth.style.backgroundColor = 'white'
            minorSixth.style.backgroundColor = 'purple'
            majorSixth.style.backgroundColor = 'white'
            minorSeventh.style.backgroundColor = 'purple'
            majorSeventh.style.backgroundColor = 'white'
            octave.style.backgroundColor = 'purple'
        break;
    }
}