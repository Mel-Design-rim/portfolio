export interface VideoTape {
  id: string;
  platform: 'youtube' | 'facebook';
  url: string;
  /** youtube video id, used for the thumbnail */
  ytId?: string;
}

const yt = (ytId: string): VideoTape => ({
  id: ytId,
  platform: 'youtube',
  ytId,
  url: `https://youtu.be/${ytId}`,
});

const fb = (id: string, url: string): VideoTape => ({ id, platform: 'facebook', url });

/** Video editing / motion production work */
export const VIDEOS: VideoTape[] = [
  yt('MDwNX87AvHw'),
  yt('RYE__g4Gbbs'),
  yt('h6ib0fGl0Mw'),
  yt('pP8V4lduXCk'),
  yt('OiysJnZww0A'),
  yt('bG5NMzCen1Y'),
  yt('zNZnSFpsb3M'),
  yt('MCWAvAdFtL0'),
  yt('eKpkZvoWuWc'),
  yt('zZCP6rvzc9w'),
  yt('Uqls8q3Egag'),
  yt('9gVdln0nSWM'),
  yt('wDy-lsfUe5k'),
  fb('fb-1', 'https://www.facebook.com/share/v/1DE9cr32KY/'),
  fb('fb-2', 'https://www.facebook.com/share/r/19DKbcmf1f/'),
  fb('fb-3', 'https://www.facebook.com/share/r/17DPLQ6Czz/'),
  fb('fb-4', 'https://www.facebook.com/share/r/199DzEMxUn/'),
  fb('fb-5', 'https://www.facebook.com/share/v/14hS3x6iipg/'),
  fb('fb-6', 'https://www.facebook.com/share/p/17vx64nTLK/'),
  fb('fb-7', 'https://www.facebook.com/share/v/1Hza8wZHtp/'),
];
