import ContentPage from '../components/ContentPage';

export default function WorkingProfessionalsPage() {
  return (
    <ContentPage
      title="Working Professionals"
      kicker="For Professionals"
      heading="Programs designed for Working Professionals"
      heroBanner="/assets/banner-working-professionals.jpg"
      image="/assets/working-professionals-certificate.jpg"
      imageUncropped
      paragraphs={[
        'China’s economy currently stands as the second largest in the world and continues to grow at an amazing pace. Learning to speak Mandarin Chinese is a great way to take advantage of this huge economic shift and opportunities, and to give oneself an advantage in the increasingly competitive business world.',
        'China has expanded its trade agreements to countries all over the world. With the Chinese market playing an influential part in every aspect of business around the globe, knowledge of the language will give you an unparalleled advantage in the global marketplace.',
        'Knowing the Chinese language not only allows for easier communication and trade, but it will open the doors to a number of professional opportunities as well as be beneficial in creating and maintaining networking contacts. Learning Chinese will ensure that you are a front runner in your profession and will also prove to be the key to endless opportunities in the professional field.',
      ]}
    >
      <p className="mt-5 text-nm-red text-base leading-relaxed">
        Our basic course of 30 hours is specially designed to introduce vocabulary and grammar useful
        during your business trip and during your stay in China.
      </p>
    </ContentPage>
  );
}
