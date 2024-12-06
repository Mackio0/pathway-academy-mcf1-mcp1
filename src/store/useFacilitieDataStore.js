import {create} from "zustand";

export const useFacilitieDataStore = create((set) => ({
    data: [
        {
            id : 1,
            title :"Interactive Learning Tools",
            description : "Enhance your learning experience with interactive tools, including quizzes, practical exercises, and a discussion forum where you can ask questions and engage with peers."
        },
        {
            id : 2,
            title :"Live Support & Guidance",
            description: 'Our team is available 24/7 to help with any technical issues or course questions, ensuring you have a smooth experience.'
        },
        {
            id : 3,
            title :"Mobile-Friendly Learning",
            description: 'Take your learning on the go! Our platform is optimized for mobile, so you can access your courses wherever you are, on any device.'
        }
    ],
}))