module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp3|wav|ogg)$/, // Matches MP3, WAV, and OGG audio formats
        use: 'file-loader', // Use the 'file-loader' to handle audio files
      },
    ],
  },
};
