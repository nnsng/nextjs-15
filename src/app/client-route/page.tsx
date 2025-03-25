'use client';

import ImageSlider from '@/components/image-slider';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunc } from '@/utils/client-utils';

export default function ClientRoute() {
  const theme = useTheme();
  const result = clientSideFunc();
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route {result}</h1>
      <ImageSlider />
    </>
  );
}
