import Octokit from '@octokit/rest';
import pluralize from 'pluralize';
import moment from 'moment';

export const getRepo = (url: string) => {
  const octokit = new Octokit();
  const [owner, name] = url.split('/');
  return octokit.repos.get({ owner, repo: name });
};

interface RepoInfo {
  icon: string;
  title?: string;
  data?: number | string;
}

export const extractRepoData = (repo: Octokit.ReposGetResponse): RepoInfo[] => {
  const items = new Array<RepoInfo>();

  if (repo.archived) items.push({ icon: 'archive', title: 'Repo archived' });
  if (repo.stargazers_count > 0)
    items.push({
      icon: 'star',
      title: pluralize('star', repo.stargazers_count, true),
      data: repo.stargazers_count,
    });
  if (repo.forks_count > 0)
    items.push({
      icon: 'code-branch',
      title: pluralize('fork', repo.forks_count, true),
      data: repo.forks_count,
    });
  if (repo.license)
    items.push({
      icon: 'gavel',
      data: repo.license.name,
    });
  if (repo.open_issues_count > 0)
    items.push({
      icon: 'exclamation-circle',
      title: pluralize('open issue', repo.open_issues_count, true),
      data: repo.open_issues_count,
    });
  const lastUpdated = moment(repo.updated_at).fromNow();
  items.push({ icon: 'calendar', title: 'Last updated ' + lastUpdated, data: lastUpdated });

  return items;
};
