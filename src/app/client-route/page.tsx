'use client';

import ImageSlider from '@/components/ImageSlider';
import { useTheme } from '@/components/ThemeProvider';

export default function ClientRoute() {
  const theme = useTheme();
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route</h1>
      <ImageSlider />
    </>
  );
}
