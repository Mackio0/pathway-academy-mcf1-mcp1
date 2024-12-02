
import TopCoursesCard from './TopCoursesCard'
import topCourse1 from "../../../../assets/course/CourseList/course1.png";
import topCourse2 from "../../../../assets/course/CourseList/course2.png";
import topCourse3 from "../../../../assets/course/CourseList/course3.png";
import avator1 from "../../../../assets/avatar/avatar1.jpg";
import avator2 from "../../../../assets/avatar/avatar2.jpg";
import avator3 from "../../../../assets/avatar/avatar3.jpg";



const courses = [
  {
    image: topCourse1,
    category: "Video editing",
    level: "Beginner",
    lessons: 18,
    duration: "2hr 30min",
    title: "Essential video editing techniques",
    rating: 4.5,
    students: 4500,
    instructor: {
      name: "Ms.Ella",
      avatar: avator1,
    },
    price: "12.00",
  },
  {
    image: topCourse2,
    category: "Business",
    level: "Advance",
    lessons: 18,
    duration: "2hr 30min",
    title: "Fundamental of business stragety",
    rating: 4.5,
    students: 4500,
    instructor: {
      name: "Olivia",
      avatar: avator2,
    },
    price: "Free",
  },
  {
    image: topCourse3,
    category: "Content writing",
    level: "Intermediate",
    lessons: 18,
    duration: "2hr 30min",
    title: "Content writing essential",
    rating: 4.5,
    students: 4500,
    instructor: {
      name: "Lucy",
      avatar: avator3,
    },
    price: "12.00",
  },
]

function TopListedCourses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Top listed courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {courses.map((course, index) => (
          <TopCoursesCard key={index} course={course} />
        ))}
      </div>
    </div>
  )
}

export default TopListedCourses

