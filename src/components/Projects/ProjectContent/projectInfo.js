import brewdog from '../../../assets/videos/brewdog.mov';
import calc from '../../../assets/videos/calc.mov';
import morse from '../../../assets/videos/morse.mov';
import kiki from '../../../assets/videos/kikissite.mov';

const projectInfo = [
    {
        name: 'API IPA OPA!',
        tools: [
            'React',
            'SCSS'
        ],
        description: 
        'A frontend site for the Punk API, fetching the beers and then offering a range of filtering and sorting methods.',
        img: brewdog,
        githubPage: 'https://kirstyclark.github.io/brewdog/',
        code: 'https://github.com/kirstyclark/brewdog'
    },
    {
        name: "Kiki's Sounds",
        tools: [
            'Firebase',
            'React',
            'SCSS'
        ],
        description: 'An ongoing personal project presenting my radio content, top twenty lists and archived artworks.',
        img: kiki,
        githubPage: 'https://github.com/kirstyclark/kikis-site',
        code: 'https://github.com/kirstyclark/kikis-site'
    },
    {
        name: 'KnoWaste',
        tools: [
            'Agile',
            'Firebase',
            'React',
            'Prototyping & Design'
        ],
        description: "4 week client project for KnoWaste sustainable startup, during which I PM'd the 2nd week sprint.",
        // img: '',
        githubPage: 'https://github.com/kirstyclark/kikis-site',
        code: 'https://github.com/kirstyclark/kikis-site'
    },
    {
        name: 'Calculator',
        tools: [
            'JavaScript',
            'Testing',
            'SCSS'
        ],
        description: "A simple calculator with 'ans' and 'ac' functionality and a dynamic background.",
        img: calc,
        githubPage: 'https://github.com/kirstyclark/calculator',
        code: 'https://github.com/kirstyclark/calculator'
    },
    {
        name: 'Cosmis Noughts & Crosses',
        tools: [
            'JavaScript',
            'SCSS'
        ],
        description: 'A cosmic game made using HTML and SCSS, zooming out from the smallest things in the universe to the largest.',
        // img: '',
        githubPage: 'https://github.com/kirstyclark/',
        code: 'https://github.com/kirstyclark/'
    },
    {
        name: 'Morse Code Translator',
        tools: [
            'Test Driven',
            'JavaScript'
        ],
        description: 'Created using test-driven development, this translator translates english text to morse or vice versa with an audio output.',
        img: morse,
        githubPage: 'https://github.com/kirstyclark/morseTranslator',
        code: 'https://kirstyclark.github.io/morseTranslator/'
    }
]

export default projectInfo;