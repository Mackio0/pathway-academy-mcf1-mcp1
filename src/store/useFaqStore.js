import {create} from "zustand";

export const useFaqStore = create((set) => ({
    faqs : [
        {
            id: 1,
            question: "What types of courses do you offer?",
            answer: "We offer a wide range of courses including programming, design, business, marketing, and personal development. Our courses are designed for all skill levels from beginner to advanced."
        },
        {
            id: 2,
            question: "Can I access courses on my mobile device?",
            answer: "Yes, all our courses are fully responsive and can be accessed on any device including smartphones and tablets. You can learn on-the-go with our mobile-friendly platform."
        },
        {
            id: 3,
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password."
        },
        {
            id: 4,
            question: "Are there any discounts or promotions for courses?",
            answer: "Yes, we regularly offer discounts and promotional offers. Subscribe to our newsletter to stay updated about upcoming deals and special offers."
        },
        {
            id: 5,
            question: "How can I contact my instructor if I have questions?",
            answer: "You can contact your instructor directly through our platform's messaging system or by posting your question in the course discussion forum."
        },{
            id: 6,
            question: "Can I get a refund if I'm not satisfied?",
            answer: "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied, you can request a full refund within this period."
        }
    ],
}))