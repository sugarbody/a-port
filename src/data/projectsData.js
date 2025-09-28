import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: "Intelligent Data Analysis Platform",
        projectDesc: "Delivered an end-to-end data platform with CSV ingestion, schema inference, Text-to-SQL LLM agent, and RAG-based automated insight generation. Implemented natural-language-driven charting and a chat orchestrator for conversational analytics.",
        tags: ["LangGraph", "Streamlit", "Pinecone", "SQLite", "Docker", "React"],
        code: "https://github.com/ASquare010/Chat-With-Data",
        demo: "https://github.com/ASquare010/Chat-With-Data",
        image: one
    },
    {
        id: 3,
        projectName: "FadeAway Background Remover",
        projectDesc: "Implemented BiRefNet-based mask generation with Canny edge preprocessing to accelerate inference and improve blending, reducing inference time by 50% with CPU/GPU optimized builds.",
        tags: ["PyTorch", "BiRefNet", "Flask", "Docker"],
        code: "https://github.com/ASquare010/FadeAway",
        demo: "https://github.com/ASquare010/FadeAway",
        image: three
    },
    {
        id: 4,
        projectName: "PhishGuard Phishing Detection",
        projectDesc: "Developed browser extension backend service to analyze email headers and URLs with ML models deployed on AWS, improving phishing detection accuracy by 25%.",
        tags: ["Flask", "Docker", "scikit-learn", "AWS"],
        code: "https://github.com/ASquare010/PhishGuard-Phishing-detection-ML",
        demo: "https://github.com/ASquare010/PhishGuard-Phishing-detection-ML",
        image: four
    },
    {
        id: 2,
        projectName: "AI Video Generator",
        projectDesc: "Built a microservice architecture to generate product advertisement videos from images, scripts, and metadata. Employed BLIP and LLaMA for automated captioning and storyboarding.",
        tags: ["FFmpeg", "Flux", "ComfyUI", "MoviePy", "Docker"],
        code: "https://github.com",
        demo: "https://github.com",
        image: two
    },
    {
        id: 5,
        projectName: "Meet MSO Conversational Game",
        projectDesc: "Built a conversational game with emotion-aware responses, on-device speech-to-text (Whisper), text-to-speech (Piper XTTS-v2), and low-latency multithreaded interaction using Unreal Engine.",
        tags: ["Whisper", "PyTorch", "Piper", "TinyLlama", "Unreal Engine"],
        code: "https://github.com",
        demo: "https://github.com",
        image: five
    },
    {
        id: 6,
        projectName: "Resume Screening Platform",
        projectDesc: "Designed a resume parsing application with weighted semantic scoring and a user-friendly interface for HR teams using spaCy, Sentence-Transformers, Flask, Docker, and React.",
        tags: ["spaCy", "Sentence-Transformers", "Flask", "Docker", "React"],
        code: "https://github.com",
        demo: "https://github.com",
        image: six
    },
    {
        id: 7,
        projectName: "3D Mesh Conversion Tool",
        projectDesc: "Automates conversions between popular 3D mesh formats with texture handling and packaging for distribution using Blender Python API, Gradio, and Docker.",
        tags: ["Blender Python API", "Gradio", "Docker"],
        code: "https://github.com/ASquare010/Mesh-Format-Converter",
        demo: "https://github.com/ASquare010/Mesh-Format-Converter",
        image: seven
    }
]



// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/