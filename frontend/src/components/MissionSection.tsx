/**
 * MissionSection Component
 *
 * "Who We Are" section — light background, fully visible text and accents.
 */

export default function MissionSection() {
    return (
        <section
            id="about"
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: "#f5f7ff" }}
        >
            {/* Top edge accent */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(19,19,236,0.3), transparent)",
                }}
            />

            {/* Decorative background glow blobs */}
            <div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(19,19,236,0.07) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-20 lg:px-20 lg:py-32">
                {/* Label */}
                <div className="flex items-center gap-3 mb-14">
                    <span
                        className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
                        style={{ color: "#1313ec" }}
                    >
                        Who We Are
                    </span>
                    <div
                        className="flex-1 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(19,19,236,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Two-column content */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-16">
                    {/* Mission */}
                    <div className="relative group py-10 md:py-0">
                        {/* Left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                            style={{
                                background:
                                    "linear-gradient(180deg, #1313ec, rgba(19,19,236,0.1))",
                            }}
                        />
                        <div className="md:pl-10">
                            {/* Decorative number */}
                            <span
                                className="block text-[7rem] font-black leading-none select-none mb-2"
                                style={{ color: "rgba(19,19,236,0.10)" }}
                            >
                                01
                            </span>

                            <p
                                className="font-mono text-xs tracking-[0.2em] uppercase font-bold mb-4"
                                style={{ color: "#1313ec" }}
                            >
                                Our Mission
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-5 italic">
                                &quot;To define the horizon of technical leadership by transforming
                                complexity into clarity.&quot;
                            </h3>

                            <p className="text-neutral-600 leading-relaxed font-body">
                                We exist to build where data isn&apos;t just stored, but
                                purposeful. Our quest is to power the next generation of
                                intelligent systems that don&apos;t just react, but anticipate.
                            </p>
                        </div>
                    </div>

                    {/* Divider on mobile */}
                    <div className="md:hidden h-px w-full my-2" style={{ background: "rgba(0,0,0,0.08)" }} />

                    {/* Approach */}
                    <div className="relative group py-10 md:py-0">
                        {/* Left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                            style={{
                                background:
                                    "linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.1))",
                            }}
                        />
                        <div className="md:pl-10">
                            {/* Decorative number */}
                            <span
                                className="block text-[7rem] font-black leading-none select-none mb-2"
                                style={{ color: "rgba(139,92,246,0.10)" }}
                            >
                                02
                            </span>

                            <p
                                className="font-mono text-xs tracking-[0.2em] uppercase font-bold mb-4"
                                style={{ color: "#8b5cf6" }}
                            >
                                Our Approach
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-5 italic">
                                &quot;Empowering modern enterprises with scalable, future-proof
                                digital architectures.&quot;
                            </h3>

                            <p className="text-neutral-600 leading-relaxed font-body">
                                We bridge the gap between ambitious ideas and technical
                                execution. Through rigorous engineering and strategic foresight,
                                we build the foundation for your sustainable growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom edge accent */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
                }}
            />
        </section>
    );
}
