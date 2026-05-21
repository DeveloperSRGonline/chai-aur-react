import React from 'react'

const Card = ({ image, name = "Default Bird" }) => {
    return (
        <div className="inline-flex flex-col items-center mt-30 px-15 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div>
                <img className="size-48 border-2 border-lime-200 shadow-xl rounded-full object-cover" alt="" src={image} />
            </div>
            <div className="mt-6 flex w-fit flex-col items-center text-center">
                <span className="rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-[11px] mb-2 font-semibold uppercase tracking-[0.35em] text-amber-200">
                    Featured Essay
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-amber-50">
                    {name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-amber-50/70">
                    The Anti-Patterns
                </p>
                <p className="mt-4 max-w-[26ch] text-sm leading-6 text-zinc-300">
                    A moody editorial card with a cinematic vibe, built to let the artwork lead while the copy feels sharp and intentional.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-amber-100/60">
                    <span>No. 4</span>
                    <span className="text-amber-300/60">•</span>
                    <span>2025</span>
                </div>
            </div>
        </div>
    )
}

export default Card
