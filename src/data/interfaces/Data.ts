import { ColorButton, Dropdown, Image } from '../../base';
import { Sentence } from '../../profile';
import { University, Institution, EntityType, Block, Skill, Course } from '../../resume';
import { Playlist, Podcast, Banner } from '../../favorites';
import { ImageCollection } from '../../gallery';

export interface Data {
  constants: {
    names: string[];
    fullName: string;
    organization: string;
    role: string;
    portraitUrl: string;
    location: string;
    locationUrl: string;
    hostingDomain: string;
    hostingUrl: string;
    metaImageUrl: string;
    websiteSrc: string;
    email: string;
  };
  links: {
    social: ColorButton[];
    spotifyId?: string;
    more?: Dropdown[];
  };
  about: Array<Sentence | Image | {}>;
  resume: {
    volunteering?: Sentence[];
    education: {
      coursework?: Course[];
      currentUniversity: string;
      universities: {
        [id: string]: University;
      };
      schools?: {
        [id: string]: Institution;
      };
    };
    blocks: Array<{ name: EntityType; data: Block[] }>;
    skills: Array<{ name: string; data: Skill[] }>;
  };
  favorites: {
    music?: Playlist[];
    podcasts?: Podcast[];
    content: {
      [name: string]: Banner[];
    };
  };
  photos?: {
    paths: {
      [name: string]: Image;
    };
    gallery: ImageCollection;
  };
}
