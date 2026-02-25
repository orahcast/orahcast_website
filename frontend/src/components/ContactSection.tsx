/**
 * ContactSection Component
 *
 * Dedicated contact section with clickable email and phone,
 * light background, clearly visible and accessible.
 */

import Link from "next/link";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: "#f5f7ff" }}
        >
            {/* Subtle top line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(19,19,236,0.25), transparent)",
                }}
            />

            {/* Background blob */}
            <div
                className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(19,19,236,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-20 lg:px-20 lg:py-28">
                {/* Label */}
                <div className="flex items-center gap-3 mb-12">
                    <span
                        className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
                        style={{ color: "#1313ec" }}
                    >
                        Get In Touch
                    </span>
                    <div
                        className="flex-1 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(19,19,236,0.35), transparent)",
                        }}
                    />
                </div>

                {/* Headline + description */}
                <div className="max-w-2xl mb-14">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-4">
                        Let&apos;s build something{" "}
                        <span style={{ color: "#1313ec" }}>great together.</span>
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed font-body">
                        Have a project in mind or want to explore how OrahCast can help your
                        business? Reach out — we reply within 24 hours.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                    {/* Email */}
                    <Link
                        href="mailto:orahcast@gmail.com"
                        className="group flex items-start gap-5 bg-white rounded-2xl p-7 border border-neutral-100 hover:border-[#1313ec]/30 hover:shadow-lg transition-all duration-300"
                        style={{ textDecoration: "none" }}
                    >
                        {/* Icon */}
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: "rgba(19,19,236,0.08)" }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#1313ec"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p
                                className="font-mono text-xs tracking-widest uppercase font-bold mb-1"
                                style={{ color: "#1313ec" }}
                            >
                                Email Us
                            </p>
                            <p
                                className="text-lg font-bold text-neutral-900 group-hover:text-[#1313ec] transition-colors duration-200"
                            >
                                orahcast@gmail.com
                            </p>
                            <p className="text-sm text-neutral-500 mt-1">
                                We reply within 24 hours
                            </p>
                        </div>
                    </Link>

                    {/* Phone */}
                    <Link
                        href="tel:+250782157887"
                        className="group flex items-start gap-5 bg-white rounded-2xl p-7 border border-neutral-100 hover:border-[#1313ec]/30 hover:shadow-lg transition-all duration-300"
                        style={{ textDecoration: "none" }}
                    >
                        {/* Icon */}
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: "rgba(19,19,236,0.08)" }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#1313ec"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p
                                className="font-mono text-xs tracking-widest uppercase font-bold mb-1"
                                style={{ color: "#1313ec" }}
                            >
                                Call Us
                            </p>
                            <p
                                className="text-lg font-bold text-neutral-900 group-hover:text-[#1313ec] transition-colors duration-200"
                            >
                                +250 782 157 887
                            </p>
                            <p className="text-sm text-neutral-500 mt-1">
                                Mon – Fri, 8am – 6pm SAST
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Or schedule a call CTA */}
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link
                        href="mailto:orahcast@gmail.com?subject=Project%20Enquiry"
                        className="inline-flex items-center gap-2 bg-[#1313ec] hover:bg-[#0a0aaa] font-bold text-sm rounded-xl px-7 py-3 transition-all duration-200"
                        style={{ color: "#ffffff", boxShadow: "0 8px 32px -8px rgba(19,19,236,0.35)" }}
                    >
                        Send Us a Message
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <p className="text-sm text-neutral-500 font-body">
                        Or use one of the contact methods above.
                    </p>
                </div>
            </div>

            {/* Bottom line */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)",
                }}
            />
        </section>
    );
}
