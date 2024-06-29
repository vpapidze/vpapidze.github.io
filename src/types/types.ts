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

export interface ISkillOld {
  iconPrefix: string,
  icon: string,
  value: string,
};

export interface IPersonalDetail extends ISkillOld {
  url?: string;
}

export interface ITrainings {
  title: string;
  iconPrefix: string;
  icon: string;
  certified: boolean;
}

export interface IDataProvider {
  personalInfo: {
    profileImage: string;
    fullName: string;
    titles: string[];
    details: IPersonalDetail[];
    skills: {
      softSkills: string[];
      cloudSkills: ISkillOld[];
      frontEndSkills: ISkillOld[];
      mobileSkills: ISkillOld[];
      backEndSkills: ISkillOld[];
      devOpsSkills: ISkillOld[];
      tools: ISkillOld[];
      os: ISkillOld[];
      languages: string[];
    }
  },
  trainings: ITrainings[];
  summary: string;
  eductaion: IEducation[];
  jobs: IJob[];
}
