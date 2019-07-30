import React from 'react';
import { ReposGetResponse } from '@octokit/rest';
import classNames from 'classnames';

import { getRepo, extractRepoData } from '../util';

interface Props {
  url: string;
}

interface State {
  isLoading: boolean;
  hasError: boolean;
  data?: ReposGetResponse;
}

export class GitButton extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    isLoading: true,
    hasError: false,
  };

  async componentDidMount() {
    try {
      const response = await getRepo(this.props.url);
      if (response.status === 200) this.setState({ data: response.data });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  }

  render() {
    const { isLoading, hasError, data } = this.state;
    const { url } = this.props;
    if (isLoading) return 'Loading from GitHub...';
    if (hasError) return <span className="has-text-danger">Error fetching repo</span>;
    const items = extractRepoData(data!);
    return (
      <div className="columns is-vcentered is-variable is-2">
        <div className="column is-narrow">
          <a href={'https://github.com/' + url} className="button is-black is-outlined">
            <span className="icon is-small">
              <i className="fab fa-github" />
            </span>
          </a>
        </div>
        {items.map(item => (
          <div
            key={item.icon}
            className={classNames('column is-narrow has-text-black', { tooltip: item.title })}
            data-tooltip={item.title}>
            <span className="icon">
              <i className={'fas fa-' + item.icon} />
            </span>
            &nbsp;
            {item.data}
          </div>
        ))}
      </div>
    );
  }
}
