export interface Course {
  number: string | number;
  name: string;
  semester: string;
  current?: boolean;
  url?: string;
  description?: React.ReactNode;
}
