import {create} from "zustand";
import Course1 from '../assets/course/CourseList/course1.png'
import Course2 from '../assets/course/CourseList/course2.png'
import Course3 from '../assets/course/CourseList/course3.png'
import Course4 from '../assets/course/CourseList/course4.png'
import Course5 from '../assets/course/CourseList/course5.png'
import Course6 from '../assets/course/CourseList/course6.png'
import Avatar1 from '../assets/avatar/avatar1.jpg'
import Avatar2 from '../assets/avatar/avatar2.jpg'
import Avatar3 from '../assets/avatar/avatar3.jpg'
import Avatar4 from '../assets/avatar/avatar4.jpg'
import Avatar5 from '../assets/avatar/avatar5.jpg'
import Avatar6 from '../assets/avatar/avatar6.jpg'


export const useCourseStore = create((set) => ({
    courses : [
        {
            id: 1,
            title: "Advanced Machine Learning Techniques",
            image: Course1,
            category: "Data Science",
            level: "Advanced",
            lessons: 32,
            duration: "4hr 15min",
            rating: 4.8,
            students: 3200,
            instructor: {
                name: "Dr. Alan Turing",
                avatar: Avatar1
            },
            price: 79.99
        },
        {
            id: 2,
            title: "Responsive Web Design Masterclass",
            image: Course2,
            category: "Web Development",
            level: "Intermediate",
            lessons: 24,
            duration: "3hr 30min",
            rating: 4.6,
            students: 5800,
            instructor: {
                name: "Sarah Connor",
                avatar: Avatar2,
            },
            price: 59.99
        },
        {
            id: 3,
            title: "Financial Planning and Investment Strategies",
            image: Course3,
            category: "Finance",
            level: "Beginner",
            lessons: 18,
            duration: "2hr 45min",
            rating: 4.5,
            students: 2100,
            instructor: {
                name: "Warren Buffet Jr.",
                avatar: Avatar3
            },
            price: 49.99
        },
        {
            id: 4,
            title: "Digital Marketing in the AI Era",
            image: Course4,
            category: "Marketing",
            level: "Intermediate",
            lessons: 28,
            duration: "3hr 50min",
            rating: 4.7,
            students: 4200,
            instructor: {
                name: "Emily Chang",
                avatar: Avatar4
            },
            price: 69.99
        },
        {
            id: 5,
            title: "Culinary Arts: From Novice to Chef",
            image: Course5,
            category: "Culinary",
            level: "All Levels",
            lessons: 40,
            duration: "5hr 20min",
            rating: 4.9,
            students: 6500,
            instructor: {
                name: "Gordon Ramsay",
                avatar: Avatar5
            },
            price: 89.99
        },
        {
            id: 6,
            title: "Yoga and Mindfulness for Beginners",
            image: Course6,
            category: "Health & Wellness",
            level: "Beginner",
            lessons: 20,
            duration: "2hr 30min",
            rating: 4.7,
            students: 8900,
            instructor: {
                name: "Zoe Namaste",
                avatar: Avatar6
            },
            price: 39.99
        }
    ]
}));