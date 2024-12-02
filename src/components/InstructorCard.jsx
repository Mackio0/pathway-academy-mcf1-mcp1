import {Star} from "lucide-react";

const InstructorCard = ({ instructor }) => {

    return (
        <article className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-borderBlog p-4">
            <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-[240px] object-cover rounded-md"
            />
            <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{instructor.name}</h3>
                    <div className="flex items-center gap-1">
                        <span className="text-lg font-medium">{instructor.rating}</span>
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
                <p className="text-sm text-gray-600">{instructor.title}</p>
            </div>
        </article>
    )
}
export default InstructorCard