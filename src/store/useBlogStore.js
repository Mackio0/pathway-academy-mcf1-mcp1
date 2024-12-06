import { identity } from "lodash";
import { create } from "zustand";
import { ToSlug } from "../features/public/services/service";

export const useBlogStore = create((set) => ({
    blogs: [
        {
            id: 1,
            title: "Announcing 10 entry-level Professional Certificates from our biggest partners as digital transformation reshapes the labor market",
            date: "2024-07-28T14:00:00.000Z",
            description: "We're excited to announce the expansion of our entry-level Professional Certificate portfolio with 10 new programs from industry partners. Pathway Academy now offers 80+ entry-level certificates across various job roles, with nearly half launched in 2024. These programs are designed to equip learners for in-demand, entry-level jobs as technology reshapes the labor market.",
            slug: "announcing-10-entry-level-professional-certificates-from-our-biggest-partners-as-digital-transformation-reshapes-the-labor-market",
            heading: "By Marni Baker , Chief Content Officer, Pathway Academy",
            facts: [
                {
                    subtitle: "New Opportunities for Career Growth",
                    para: "In collaboration with our largest industry partners, Pathway Academy is excited to offer 10 entry-level Professional Certificates. As digital transformation reshapes the labor market, these certificates are designed to equip you with essential skills that are in high demand."
                },
                {
                    subtitle: "Focus on In-Demand Skills",
                    para: "Our courses cover critical areas such as Data Analytics, Cybersecurity, Cloud Computing, Digital Marketing, and more—helping you build a strong foundation for a career in the ever-evolving digital workforce."
                },
                {
                    subtitle: " Industry-Recognized Credentials",
                    para: "Earn certifications backed by some of the biggest names in the tech and business sectors. These credentials are recognized by employers around the world, ensuring you have the skills they’re looking for."
                },
                {
                    subtitle: "For Beginners and Career Changers",
                    para: "Whether you're just starting your career or transitioning into a new field, these entry-level programs are designed to help you gain hands-on experience and valuable expertise, preparing you for high-demand roles across industries."
                },
                {
                    subtitle: "Start Your Journey Today",
                    para: "Take control of your future with professional certificates that open doors to exciting career opportunities in a digital-first world."
                }
            ]
        },
        {
            id: 1,
            title: "Announcing 10 entry-level Professional Certificates from our biggest partners as digital transformation reshapes the labor market",
            date: "2024-07-28T14:00:00.000Z",
            description: "We're excited to announce the expansion of our entry-level Professional Certificate portfolio with 10 new programs from industry partners. Pathway Academy now offers 80+ entry-level certificates across various job roles, with nearly half launched in 2024. These programs are designed to equip learners for in-demand, entry-level jobs as technology reshapes the labor market.",
            slug: "announcing-10-entry-level-professional-certificates-from-our-biggest-partners-as-digital-transformation-reshapes-the-labor-market",
            heading: "By Marni Baker , Chief Content Officer, Pathway Academy",
            facts: [
                {
                    subtitle: "New Opportunities for Career Growth",
                    para: "In collaboration with our largest industry partners, Pathway Academy is excited to offer 10 entry-level Professional Certificates. As digital transformation reshapes the labor market, these certificates are designed to equip you with essential skills that are in high demand."
                },
                {
                    subtitle: "Focus on In-Demand Skills",
                    para: "Our courses cover critical areas such as Data Analytics, Cybersecurity, Cloud Computing, Digital Marketing, and more—helping you build a strong foundation for a career in the ever-evolving digital workforce."
                },
                {
                    subtitle: " Industry-Recognized Credentials",
                    para: "Earn certifications backed by some of the biggest names in the tech and business sectors. These credentials are recognized by employers around the world, ensuring you have the skills they’re looking for."
                },
                {
                    subtitle: "For Beginners and Career Changers",
                    para: "Whether you're just starting your career or transitioning into a new field, these entry-level programs are designed to help you gain hands-on experience and valuable expertise, preparing you for high-demand roles across industries."
                },
                {
                    subtitle: "Start Your Journey Today",
                    para: "Take control of your future with professional certificates that open doors to exciting career opportunities in a digital-first world."
                }
            ]
        }, {
            id: 1,
            title: "Announcing 10 entry-level Professional Certificates from our biggest partners as digital transformation reshapes the labor market",
            date: "2024-07-28T14:00:00.000Z",
            description: "We're excited to announce the expansion of our entry-level Professional Certificate portfolio with 10 new programs from industry partners. Pathway Academy now offers 80+ entry-level certificates across various job roles, with nearly half launched in 2024. These programs are designed to equip learners for in-demand, entry-level jobs as technology reshapes the labor market.",
            slug: "announcing-10-entry-level-professional-certificates-from-our-biggest-partners-as-digital-transformation-reshapes-the-labor-market",
            heading: "By Marni Baker , Chief Content Officer, Pathway Academy",
            facts: [
                {
                    subtitle: "New Opportunities for Career Growth",
                    para: "In collaboration with our largest industry partners, Pathway Academy is excited to offer 10 entry-level Professional Certificates. As digital transformation reshapes the labor market, these certificates are designed to equip you with essential skills that are in high demand."
                },
                {
                    subtitle: "Focus on In-Demand Skills",
                    para: "Our courses cover critical areas such as Data Analytics, Cybersecurity, Cloud Computing, Digital Marketing, and more—helping you build a strong foundation for a career in the ever-evolving digital workforce."
                },
                {
                    subtitle: " Industry-Recognized Credentials",
                    para: "Earn certifications backed by some of the biggest names in the tech and business sectors. These credentials are recognized by employers around the world, ensuring you have the skills they’re looking for."
                },
                {
                    subtitle: "For Beginners and Career Changers",
                    para: "Whether you're just starting your career or transitioning into a new field, these entry-level programs are designed to help you gain hands-on experience and valuable expertise, preparing you for high-demand roles across industries."
                },
                {
                    subtitle: "Start Your Journey Today",
                    para: "Take control of your future with professional certificates that open doors to exciting career opportunities in a digital-first world."
                }
            ]
        },

    ]
}))