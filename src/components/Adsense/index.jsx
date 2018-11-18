import React from 'react';
import PropTypes from 'prop-types';

class Adsense extends React.Component {
  componentDidMount() {
    const { clientId } = this.props;
    if (clientId) {
      (window.adsbygoogle = window.adsbygoogle || []).push({}); // eslint-disable-line no-undef
    }
  }

  render() {
    const { clientId, slotId, format } = this.props;

    return clientId ? (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={format}
        />
      </div>
    ) : (
      ''
    );
  }
}

Adsense.propTypes = {
  clientId: PropTypes.string.isRequired,
  slotId: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default Adsense;
