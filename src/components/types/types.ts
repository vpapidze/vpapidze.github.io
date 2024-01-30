import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface ISkill {
  icon?: [IconPrefix, IconName];
  value: string,
};

export interface IEducation {
  startDate: string;
  endDate: string;
  university: string;
  degree: string;
  field: string;
};

export interface IJobProject {
  title: string;
  description?: string;
  responsibilities: string[];
  url?: string;
};

export interface IJob {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  location: 'onsite' | 'remote' | 'hybrid',
  projects: IJobProject[];
  technologies: ISkill[];
}
