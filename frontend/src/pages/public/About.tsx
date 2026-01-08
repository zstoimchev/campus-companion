import {Users, Code, Calendar, Globe} from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            {/* Hero */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-5xl font-bold text-[#202124] mb-6">
                        About{" "}
                        <span className="text-[#4285F4]">GDG</span>{" "}
                        <span className="text-[#EA4335]">On</span>{" "}
                        <span className="text-[#FBBC05]">Campus</span>{" "}
                        <span className="text-[#34A853]">UP</span>
                    </h1>

                    <p className="text-xl text-[#5F6368] leading-relaxed">
                        Google Developer Groups On Campus University of Primorska is a
                        student-led community focused on learning, collaboration, and
                        building real-world technology skills.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#202124] mb-4">
                            Our Mission
                        </h2>
                        <p className="text-[#5F6368] leading-relaxed mb-4">
                            Our mission is to empower students by providing opportunities to
                            learn modern technologies, collaborate on projects, and connect
                            with like-minded peers and industry professionals.
                        </p>
                        <p className="text-[#5F6368] leading-relaxed">
                            We believe learning is best when it is practical, inclusive, and
                            community-driven.
                        </p>
                    </div>

                    <div
                        className="rounded-2xl bg-gradient-to-br from-[#4285F4]/10 via-[#EA4335]/10 to-[#FBBC05]/10 p-8">
                        <ul className="space-y-4 text-[#202124]">
                            <li>• Hands-on workshops and talks</li>
                            <li>• Peer-to-peer learning</li>
                            <li>• Real projects and hackathons</li>
                            <li>• Open and inclusive community</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#202124] mb-12">
                        What We Do
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <Card
                            icon={Calendar}
                            color="#4285F4"
                            title="Events"
                            text="Workshops, talks, and community meetups throughout the academic year."
                        />
                        <Card
                            icon={Users}
                            color="#EA4335"
                            title="Study Groups"
                            text="Student-led groups focused on specific technologies and subjects."
                        />
                        <Card
                            icon={Code}
                            color="#34A853"
                            title="Projects"
                            text="Collaborative projects that help students gain real-world experience."
                        />
                        <Card
                            icon={Globe}
                            color="#FBBC05"
                            title="Community"
                            text="An open, welcoming environment for students of all backgrounds."
                        />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h3 className="text-2xl font-bold text-[#202124] mb-4">
                        Want to get involved?
                    </h3>
                    <p className="text-[#5F6368] mb-6">
                        Join our events, participate in study groups, or contribute to our
                        projects. Everyone is welcome.
                    </p>
                    <p className="text-sm text-[#5F6368]">
                        Google Developer Groups On Campus are independent student groups;
                        activities and opinions expressed are not endorsed by Google.
                    </p>
                </div>
            </section>
        </div>
    );
}

import type {SVGProps, ComponentType} from "react";

function Card({
                  icon: Icon,
                  title,
                  text,
                  color,
              }: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
    color: string;
}) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center">
            <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{backgroundColor: `${color}15`}}
            >
                <Icon className="w-7 h-7" style={{color}}/>
            </div>
            <h3 className="font-semibold text-[#202124] mb-2">{title}</h3>
            <p className="text-sm text-[#5F6368]">{text}</p>
        </div>
    );
}
