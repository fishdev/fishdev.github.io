import { ColorButton, Dropdown, Image } from '../../base';
import { Sentence } from '../../profile';
import { University, Institution, EntityType, Block, Skill } from '../../resume';
import { Playlist, Podcast, Banner } from '../../favorites';
import { ImageView } from '../../gallery';

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
    musicId?: string;
    more?: Dropdown[];
  };
  about: Array<Sentence | Image | {}>;
  resume: {
    volunteering?: Sentence[];
    education: {
      currentUniversity: string;
      universities: {
        [id: string]: University;
      };
      schools?: {
        [id: string]: Institution;
      };
    };
    blocks: Array<{
      name: EntityType;
      data: Block[];
      ord: number;
    }>;
    skills: Array<{
      name: string;
      data: Skill[];
    }>;
  };
  favorites: {
    music?: Playlist[];
    podcasts?: Podcast[];
    content: {
      [name: string]: Banner[];
    };
  };
  gallery?: Array<ImageView>;
}
