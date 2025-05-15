import path from 'path';

const Media = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../public/uploads'),
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;
