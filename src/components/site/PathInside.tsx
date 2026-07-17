"use client";

import * as React from "react";

import {
  duskEyebrowClass,
  duskMutedClass,
  duskTitleClass,
} from "@/components/layout/PageBands";
import { LESSON_FLOW, type WeekModule } from "@/lib/learning-paths";
import { cn } from "@/lib/utils";

export type PathInsideWeek = Omit<WeekModule, "lessons"> & {
  lessons: Array<{ n: number; title: string; session: number; synopsis: string }>;
};

function isCapstoneTitle(title: string) {
  return title.toLowerCase().startsWith("capstone");
}

export function PathInside({
  pathName,
  lessonCount,
  weeks,
}: {
  pathName: string;
  lessonCount: number;
  weeks: PathInsideWeek[];
}) {
  const [activeWeek, setActiveWeek] = React.useState(1);
  const current = weeks.find((w) => w.week === activeWeek) ?? weeks[0];

  React.useEffect(() => {
    setActiveWeek(1);
  }, [pathName]);

  if (!current) return null;

  return (
    <div>
      <div>
        <p className={duskEyebrowClass}>Inside the path</p>
        <h2
          id="outline-heading"
          className={cn("mt-2 text-2xl sm:text-3xl", duskTitleClass)}
        >
          {lessonCount} lessons · {weeks.length} weeks
        </h2>
        <p className={cn("mt-2 max-w-2xl text-sm sm:text-base", duskMutedClass)}>
          Choose a week to see what each session teaches. Pace flexes to your classroom,
          family, or program.
        </p>
      </div>

      {/* Lesson rhythm — editorial strip, matches site proof bands */}
      <ol className="mt-8 grid gap-6 border-y border-white/10 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {LESSON_FLOW.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              "sm:px-5 sm:first:pl-0 sm:last:pr-0",
              index > 0 && "lg:border-l lg:border-white/10"
            )}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")} · {step.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-12">
        <div
          role="tablist"
          aria-label={`${pathName} weeks`}
          className="flex gap-1 overflow-x-auto border-b border-white/10 pb-px lg:flex-col lg:gap-0 lg:overflow-visible lg:border-b-0 lg:border-l lg:border-white/10 lg:pb-0"
        >
          {weeks.map((week) => {
            const selected = week.week === current.week;
            return (
              <button
                key={week.week}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveWeek(week.week)}
                className={cn(
                  "group flex min-w-[9.5rem] shrink-0 items-start gap-3 px-3 py-3 text-left transition-colors lg:min-w-0 lg:border-l-2 lg:-ml-px lg:pl-4",
                  selected
                    ? "border-b-2 border-[var(--accent)] text-[#f7f3e8] lg:border-b-0 lg:border-[var(--accent)]"
                    : "border-b-2 border-transparent text-[#c5d2cb] hover:text-[#f7f3e8] lg:border-b-0 lg:border-transparent lg:hover:border-white/25"
                )}
              >
                <span
                  className={cn(
                    "font-display text-sm font-semibold tabular-nums",
                    selected ? "text-[var(--accent)]" : "text-white/40"
                  )}
                >
                  {String(week.week).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug">{week.theme}</span>
                  <span className="mt-0.5 block text-[0.7rem] text-white/50">
                    {week.lessons.length}{" "}
                    {week.lessons.length === 1 ? "session" : "sessions"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={`Week ${current.week}: ${current.theme}`}
          className="kanam-fade-up min-w-0"
          key={current.week}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Week {current.week} of {weeks.length}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-[1.85rem]">
            {current.theme}
          </h3>
          {current.focus ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
              {current.focus}
            </p>
          ) : null}

          <ol className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {current.lessons.map((lesson) => {
              const capstone = isCapstoneTitle(lesson.title);
              return (
                <li
                  key={`${lesson.n}-${lesson.title}`}
                  className="flex gap-4 py-5 sm:gap-6"
                >
                  <div className="w-[4.5rem] shrink-0 pt-0.5 sm:w-20">
                    <p className="font-display text-lg font-semibold tabular-nums text-white/35">
                      {String(lesson.n).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.08em] text-[rgb(var(--accent-rgb)/0.8)]">
                      Session {lesson.session}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "text-base font-semibold leading-snug sm:text-lg",
                        capstone ? "text-[var(--accent)]" : "text-[#f7f3e8]"
                      )}
                    >
                      {lesson.title}
                      {capstone ? (
                        <span className="ml-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                          Capstone
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                      {lesson.synopsis ||
                        "Guided lesson and hands-on practice with feedback."}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
