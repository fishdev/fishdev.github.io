import React from 'react';
import classNames from 'classnames';
import { GlobalHotKeys } from 'react-hotkeys';

interface Props {
  blurred?: boolean;
  hide: () => void;
}

export class Modal extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    blurred: false,
  };

  componentWillMount() {
    document.getElementsByTagName('html')[0].classList.add('is-clipped');
  }

  componentWillUnmount() {
    document.getElementsByTagName('html')[0].classList.remove('is-clipped');
  }

  render() {
    const { blurred, hide, children } = this.props;
    return (
      <GlobalHotKeys keyMap={{ HIDE_MODAL: 'esc' }} handlers={{ HIDE_MODAL: hide as any }}>
        <div className="modal is-active">
          <div
            className={classNames('modal-background', { 'blurred-background': blurred })}
            onClick={hide}
          />
          {children}
        </div>
      </GlobalHotKeys>
    );
  }
}
