import { CvVersion, IJob } from '../types/types';

export function resolveJob(job: IJob, version: CvVersion): IJob {
  if (version !== 'v2' || !job.variants?.v2) {
    return job;
  }

  const { projects, technologies } = job.variants.v2;
  const { variants, ...rest } = job;

  return {
    ...rest,
    projects,
    technologies,
  };
}
