import ImageSlider from '@/components/image-slider';
import { serverSideFunc } from '@/utils/server-utils';

export default function ServerRoute() {
  const result = serverSideFunc();

  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}
