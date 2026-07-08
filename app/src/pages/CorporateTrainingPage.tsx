import ContentPage from '../components/ContentPage';

export default function CorporateTrainingPage() {
  return (
    <ContentPage
      title="Corporate Training"
      heading="Courses designed for Corporate Training"
      heroBanner="/assets/banner-corporate-training.jpg"
      image="/assets/g32-big.jpg"
      paragraphs={[
        'Specifically designed to suit your industry needs, we offer Mandarin Chinese language courses for professionals.',
        'If you want to study with a focus on a specific industry, such as finance, manufacturing, research and development, etc., we will customize the vocabulary and content of the text as per your specific requirements.',
      ]}
    />
  );
}
