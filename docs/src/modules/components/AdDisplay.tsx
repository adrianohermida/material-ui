import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { adShape } from 'docs/src/modules/components/AdManager';
import { adStylesObject } from 'docs/src/modules/components/ad.styles';
import { useTranslate } from '@mui/docs/i18n';

const InlineShape = styled('span')(({ theme }) => {
  const styles = adStylesObject['body-inline'](theme);

  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby,
  };
});

const ImageShape = styled('span')(({ theme }) => {
  const styles = adStylesObject['body-image'](theme);

  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby,
  };
});

export interface Ad {
  name: string;
  link: string;
  img?: string;
  description: string;
  poweredby: string;
  label: string;
}
interface AdDisplayProps {
  ad: Ad;
  className?: string;
  shape?: 'auto' | 'inline' | 'image';
}

export default function AdDisplay(props: AdDisplayProps) {
  const { ad, className, shape: shapeProp = 'auto' } = props;
  const t = useTranslate();

  React.useEffect(() => {
    // Avoid an exceed on the Google Analytics quotas.
    if (Math.random() > ((process.env.GA_ADS_DISPLAY_RATIO ?? 0.1) as number) || !ad.label) {
      return;
    }

    window.gtag('event', 'ad', {
      eventAction: 'display',
      eventLabel: ad.label,
    });
  }, [ad.label]);

  const shape = shapeProp === 'auto' ? adShape : shapeProp;

  const Root = shape === 'image' ? ImageShape : InlineShape;

  /* eslint-disable react/no-danger */
  return (
    <Root className={className}>
      <a
        href={ad.link}
        target="_blank"
        rel="noopener sponsored"
        {...(ad.label
          ? {
              'data-ga-event-category': 'ad',
              'data-ga-event-action': 'click',
              'data-ga-event-label': ad.label,
            }
          : {})}
      >
        <span className="AdDisplay-imageWrapper">
          <img height="100" width="130" src={ad.img} alt={ad.name} />
        </span>
        <span
          className="AdDisplay-description"
          dangerouslySetInnerHTML={{ __html: ad.description }}
        />
      </a>
      <span className="AdDisplay-poweredby">
        {t('adPublisher').replace('{{publisher}}', ad.poweredby)}
      </span>
    </Root>
  );
  /* eslint-enable react/no-danger */
}

AdDisplay.propTypes = {
  ad: PropTypes.object.isRequired,
  className: PropTypes.string,
  shape: PropTypes.oneOf(['inline', 'auto']),
};
