import React from 'react';

export default class ADSPage extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3214048546347572"
        data-ad-slot="5658429637"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
