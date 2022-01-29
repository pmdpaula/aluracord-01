import { Box, Image } from '@skynexui/components';

import appConfig from '../config.json';

// eslint-disable-next-line prettier/prettier
const imageSrc = 'https://previews.123rf.com/images/ihorsvetiukha/ihorsvetiukha1710/ihorsvetiukha171000034/87328764-matrix-falling-numbers-warning-error-404-page-not-found-vector-illustration.jpg';

const page404 = () => (
  <Box
    styleSheet={{
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appConfig.theme.colors.primary[500],
      // backgroundImage: `url(${imageSrc})`,
      backgroundImage:
        'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundBlendMode: 'multiply',
    }}
  >
    {/* <Image src="https://thumbs.dreamstime.com/b/computer-screen-error-templates-hacked-cyber-attack-digital-background-green-matrix-binary-code-vector-illustration-146297303.jpg" width={500} height={300} /> */}
    <Image
      src={imageSrc}
      styleSheet={{
        border: '3px solid green',
        borderRadius: '4px',
      }}
    />
  </Box>
);

export default page404;
