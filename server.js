const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,               // Port RTMP pour OBS
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: process.env.PORT || 3000, // Port HTTP public (pour HLS)
    allow_origin: '*'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',  // Replit et Render l’ont installé
    tasks: [
      {
        app: 'live',             // Application par défaut
        hls: true,               // Active la sortie HLS
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]'
      }
    ]
  }
};

const nms = new NodeMediaServer(config);
nms.run();
