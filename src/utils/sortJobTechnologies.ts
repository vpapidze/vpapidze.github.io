import { ISkill } from '../types/types';

/** Front-end stack labels; everything else is listed first (back-end / infra / AI). */
const FRONTEND_PATTERN =
  /react|next\.js|react-native|angular|redux|html|css|stensil|web components|figma|jquery/i;

export function sortJobTechnologies(technologies: ISkill[]): ISkill[] {
  const backend: ISkill[] = [];
  const frontend: ISkill[] = [];

  for (const tech of technologies) {
    if (FRONTEND_PATTERN.test(tech.value)) {
      frontend.push(tech);
    } else {
      backend.push(tech);
    }
  }

  return [...backend, ...frontend];
}
